//
//  ModelDTOs.swift
//
//
//  Created by Boris Ovodov on 23.05.2024.
//

import Vapor

struct AchievementDTO: Content {
    var name: String
    var URL: String
}

struct AchievementPageDTO: Content {
    var name: String
    var URL: String
    var senders: [SenderDTO]
}

struct CityDTO: Content {
    var name: String
    var coordinates: String
    var markerIcon: String?
    var URL: String
    var newspapersCount: Int
}

extension CityDTO: Hashable {
    static func == (lhs: CityDTO, rhs: CityDTO) -> Bool {
        return lhs.URL == rhs.URL
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.URL)
    }
}

struct CityPageDTO: Content {
    var name: String
    var URL: String
    var population: Int
    var isCoastal: Bool
    var elevation: Int
    var country: CountryDTO
    var continentTag: TagDTO?
    var senders: [SenderDTO]
    var newspapers: [NewspaperDTO]
}

struct CostDTO: Content {
    var value: String
}

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
    var population: Int
    var languages: [LanguageDTO]
    var senders: [SenderDTO]
    var cities: [CityDTO]
    var newspapers: [NewspaperDTO]
}

struct LanguageDTO: Content {
    var name: String
    var URL: String
    var newspapersCount: Int
}

struct LanguagePageDTO: Content {
    var name: String
    var URL: String
    var newspapers: [NewspaperDTO]
}

struct NewspaperDTO: Content {
    var title: String
    var number: String?
    var secondaryNumber: String?
    var date: String
    var URL: String
    var thumbnail: String?
    var city: CityDTO
    var language: LanguageDTO
    var tags: [TagDTO]
}

struct NewspaperPageDTO: Content {
    var title: String
    var number: String?
    var secondaryNumber: String?
    var date: String
    var pages: Int
    var circulation: Int?
    var publicationStart: String?
    var website: String?
    var ISSN: String?
    var photo: String?
    var thumbnail: String?
    var URL: String
    var city: CityDTO
    var language: LanguageDTO
    var paperFormat: PaperFormatDTO?
    var frequency: Tag?
    var costs: [CostDTO]
    var senders: [SenderDTO]
    var tags: [TagDTO]
}

struct PaperFormatDTO: Content {
    var name: String
    var URL: String
}

struct SenderDTO: Content {
    var name: String
    var avatar: String?
    var URL: String
    var countriesCount: Int
    var citiesCount: Int
    var achievements: [AchievementDTO]
}

extension SenderDTO: Hashable {
    static func == (lhs: SenderDTO, rhs: SenderDTO) -> Bool {
        return lhs.URL == rhs.URL
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.URL)
    }
}

struct SenderPageDTO: Content {
    var name: String
    var avatar: String?
    var URL: String
    var countries: [CountryDTO]
    var cities: [CityDTO]
    var achievements: [AchievementDTO]
    var newspapers: [NewspaperDTO]
}

struct TagDTO: Content {
    var name: String
    var URL: String
    var newspapersCount: Int
}

struct TagPageDTO: Content {
    var name: String
    var URL: String
    var newspapers: [NewspaperDTO]
}
