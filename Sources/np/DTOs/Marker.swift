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
    
    // TODO: 
    //'#(mapboxAccessKey)';
    //var popupText = '#(marker.city.name)<br>#for(newspaper in marker.newspapers):<li><a href="#(newspaper.URL)">#(newspaper.title) (#(newspaper.date))</a></li>#endfor</body>';
    //var marker = L.marker([#(marker.city.coordinates)], {
    //    #if(marker.city.country.markerIcon):
    //iconUrl: '#(marker.city.country.markerIcon)',
    
    static func all(_ database: Database) async throws -> [Marker] {
        var markers: [Marker] = []
        
        for city in try await City.query(on: database).all() {
            markers.append(Marker(city: city, newspapers: try await city.$newspapers.query(on: database).all()))
        }
        
        return markers
    }
}
