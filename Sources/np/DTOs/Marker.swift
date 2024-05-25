//
//  Marker.swift
//  
//
//  Created by Boris Ovodov on 22.05.2024.
//

import Fluent
import Vapor

struct Marker: Content {
    var city: City
    var newspapers: [Newspaper]
    
    static func all(_ database: Database) async throws -> [Marker] {
        return try await City.query(on: database)
            .all()
            .map { Marker(city: $0, newspapers: $0.newspapers) }
    }
}
