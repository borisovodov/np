//
//  Tag.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

/// Tags by default:
/// * Geotag
/// * Crossword
/// * Sudoku
/// * Kakuro
/// * TV schedule
/// * Anecdote
/// * Caricature
/// * Comic Strip
/// * Recipe
/// * Horoscope
/// * Weather Forecast
/// * Obituary
/// * Naked Women
/// * Church
/// * TRASH
/// * Extra
final class Tag: Model, @unchecked Sendable, Content {
    enum TagType: String, Codable {
        case continent
        case frequency
        case paperFormat
        case year
        case color
        case publicationType
        case other
    }
    
    static let schema = "tags"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Enum(key: "tagType")
    var tagType: TagType
    
    @Siblings(through: NewspaperTagPivot.self, from: \.$tag, to: \.$newspaper)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String, tagType: TagType = .other) {
        self.id = UUID()
        self.name = name
        self.tagType = tagType
    }
    
    var URL: String {
        return "/tags/\(self.id ?? UUID())"
    }
    
    func markers(_ database: Database) async throws -> [Marker] {
        var markers: [Marker] = []
        var cities: [CityDTO:[NewspaperDTO]] = [:]
        
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await cities[newspaper.$city.get(on: database).toDTO(database)]?.append(newspaper.toDTO(database))
        }
        
        for city in cities {
            markers.append(Marker(city: city.key))
        }
        
        return markers
    }
    
    func toDTO(_ database: Database) async throws -> TagDTO {
        return try await TagDTO(id: self.requireID().uuidString, name: self.name, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }
    
    func toPageDTO(_ database: Database) async throws -> TagPageDTO {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        return TagPageDTO(name: self.name, URL: self.URL, newspapers: newspapers)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(TagFormDTO.self)
        
        self.name = form.name
        try await self.save(on: request.db)
    }
    
    static func continents(_ database: Database) async throws -> [TagDTO] {
        var continents: [TagDTO] = []
        for continent in try await Tag.query(on: database).filter(\.$tagType == .continent).all() {
            try await continents.append(continent.toDTO(database))
        }
        return continents.sorted { $0.newspapersCount > $1.newspapersCount }
    }
    
    static func all(_ database: Database) async throws -> [TagDTO] {
        var tags: [TagDTO] = []
        for tag in try await Tag.query(on: database).sort(\.$name).all() {
            try await tags.append(tag.toDTO(database))
        }
        return tags
    }
    
    static func add(_ request: Request) async throws -> Tag {
        let form = try request.content.decode(TagFormDTO.self)
        
        let tag = Tag(name: form.name, tagType: .other)
        try await tag.save(on: request.db)
        
        return tag
    }
}

extension Tag: CustomStringConvertible {
    var description: String {
        self.name
    }
}

extension Tag: Hashable {
    static func == (lhs: Tag, rhs: Tag) -> Bool {
        return lhs.id == rhs.id
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.id)
    }
}

struct TagDTO: Content {
    var id: String
    var name: String
    var URL: String
    var newspapersCount: Int
}

struct TagPageDTO: Content {
    var name: String
    var URL: String
    var newspapers: [NewspaperDTO]
}

struct TagFormDTO: Content {
    var name: String
}
