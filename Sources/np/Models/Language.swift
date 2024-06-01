//
//  Language.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
import Vapor

final class Language: Model, @unchecked Sendable, Content {
    static let schema = "languages"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Field(key: "population")
    var population: Int
    
    @Children(for: \.$language)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String, population: Int) {
        self.id = UUID()
        self.name = name
        self.population = population
    }
    
    var URL: String {
        return "/languages/\(self.id ?? UUID())"
    }
    
    func toDTO(_ database: Database) async throws -> LanguageDTO {
        return try await LanguageDTO(name: self.name, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }
    
//    var newspapers: [Newspaper] {
//        return Newspaper.objects.order_by('-date').filter(language=self)
//    }

//    var cities: [City] {
//        cities_ids = self.newspapers().values_list('city_id', flat=True)
//        return City.objects.order_by('name').filter(id__in=list(cities_ids))
//    }
}

extension Language: CustomStringConvertible {
    var description: String {
        self.name
    }
}

extension Language: Hashable {
    static func == (lhs: Language, rhs: Language) -> Bool {
        return lhs.id == rhs.id
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.id)
    }
}
