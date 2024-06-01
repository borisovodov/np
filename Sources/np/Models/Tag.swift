//
//  Tag.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
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
    static let schema = "tags"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Siblings(through: NewspaperTagPivot.self, from: \.$tag, to: \.$newspaper)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String) {
        self.id = UUID()
        self.name = name
    }
    
    var URL: String {
        return "/tags/\(self.id ?? UUID())"
    }
    
    func toDTO(_ database: Database) async throws -> TagDTO {
        return try await TagDTO(name: self.name, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
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
