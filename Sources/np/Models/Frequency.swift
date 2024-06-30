//
//  Frequency.swift
//
//
//  Created by Boris Ovodov on 30.06.2024.
//

import Fluent
import Vapor

enum Frequency: String, CustomStringConvertible, Codable, CaseIterable {
    case daily
    case weekly
    case weeklies
    case biweekly
    case monthly
    case bimonthly
    
    var description: String {
        switch self {
        case .daily:
            return "Daily"
        case .weekly:
            return "Weekly"
        case .weeklies:
            return "Weeklies"
        case .biweekly:
            return "Biweekly"
        case .monthly:
            return "Monthly"
        case .bimonthly:
            return "Bimonthly"
        }
    }
    
    func tag(_ database: Database) async throws -> Tag? {
        return try await Tag.query(on: database).filter(\.$tagType == .frequency).filter(\.$name == self.rawValue).first()
    }
    
    var toDTO: FrequencyDTO {
        return FrequencyDTO(id: self.rawValue, name: String(describing: self))
    }
    
    static var all: [FrequencyDTO] {
        return Frequency.allCases.map { $0.toDTO }
    }
}

struct FrequencyDTO: Content {
    var id: String
    var name: String
}
