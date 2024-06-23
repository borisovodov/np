//
//  SenderDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

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

struct SenderFormDTO: Content {
    var name: String
    var avatar: File?
    var isAvatarChanged: String?
}
