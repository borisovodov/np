//
//  Continent.swift
//
//
//  Created by Boris Ovodov on 25.06.2024.
//

import Fluent
import Vapor

enum Continent: String, CustomStringConvertible, Codable, CaseIterable {
    case africa
    case antarctica
    case asia
    case australiaAndOceania
    case europe
    case northAmerica
    case southAmerica
    
    var description: String {
        switch self {
        case .africa:
            return "Africa"
        case .antarctica:
            return "Antarctica"
        case .asia:
            return "Asia"
        case .australiaAndOceania:
            return "Australia/Oceania"
        case .europe:
            return "Europe"
        case .northAmerica:
            return "North America"
        case .southAmerica:
            return "South America"
        }
    }
    
    func tag(_ database: Database) async throws -> Tag? {
        return try await Tag.query(on: database).filter(\.$tagType == .continent).filter(\.$name == String(describing: self)).first()
    }
    
    var toDTO: ContinentDTO {
        return ContinentDTO(id: self.rawValue, name: String(describing: self))
    }
    
    static var all: [ContinentDTO] {
        return Continent.allCases.map { $0.toDTO }
    }
}

struct ContinentDTO: Content {
    var id: String
    var name: String
}
