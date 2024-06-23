//
//  CityDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

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

struct CityFormDTO: Content {
    var name: String
    var population: String
    var continent: String
    var isCoastal: String
    var elevation: String
    var latitude: String
    var longitude: String
    var manualLocation: String
    var country: String
}
