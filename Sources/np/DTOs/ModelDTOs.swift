//
//  ModelDTOs.swift
//
//
//  Created by Boris Ovodov on 23.05.2024.
//

import Foundation
import Vapor

struct AchievementDTO: Content {
    var name: String
    var URL: String
}

struct CityDTO: Content {
    var name: String
    var URL: String
    var newspapersCount: Int
}

struct CountryDTO: Content {
    var name: String
    var URL: String
    var emoji: String?
    var newspapersCount: Int
}

struct LanguageDTO: Content {
    var name: String
    var URL: String
    var newspapersCount: Int
}

struct NewspaperDTO: Content {
    var title: String
    var number: String?
    var secondaryNumber: String?
    var date: Date
    var URL: String
    var thumbnail: String?
    var city: CityDTO
    var language: LanguageDTO
    var tags: [TagDTO]
}

struct SenderDTO: Content {
    var name: String
    var avatar: String?
    var URL: String
    var countriesCount: Int
    var citiesCount: Int
    var achievements: [AchievementDTO]
}

struct TagDTO: Content {
    var name: String
    var URL: String
    var newspapersCount: Int
}
