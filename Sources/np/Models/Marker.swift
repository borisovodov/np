//
//  Marker.swift
//  
//
//  Created by Boris Ovodov on 22.05.2024.
//

import Fluent
import Vapor

struct Marker: Content {
    var city: CityDTO
    
    static func all(_ database: Database) async throws -> [Marker] {
        var markers: [Marker] = []
        
        for city in try await City.query(on: database).all() {
            try await markers.append(contentsOf: city.markers(database))
        }
        
        return markers
    }
}
