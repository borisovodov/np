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
    
    func toDTO(_ database: Database) async throws -> TagDTO {
        return try await TagDTO(name: self.name, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }
    
    static func continents(_ database: Database) async throws -> [TagDTO] {
        var continents: [TagDTO] = []
        for continent in try await Tag.query(on: database).filter(\.$tagType == .continent).all() {
            continents.append(try await continent.toDTO(database))
        }
        return continents.sorted { $0.newspapersCount > $1.newspapersCount }
    }

//    var cities: [City] {
//        cities_ids = self.newspapers().values_list('city_id', flat=True)
//        return City.objects.order_by('name').filter(id__in=list(cities_ids))
//    }
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
