//
//  CountryDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

struct CountryDTO: Content {
    var name: String
    var URL: String
    var emoji: String?
    var newspapersCount: Int
}

struct CountryPageDTO: Content {
    var name: String
    var URL: String
    var emoji: String?
    var senders: [SenderDTO]
    var cities: [CityDTO]
    var newspapers: [NewspaperDTO]
}

struct CountryFormDTO: Content {
    var name: String
    var emoji: String?
    var markerIcon: File?
    var isMarkerIconChanged: String?
}
