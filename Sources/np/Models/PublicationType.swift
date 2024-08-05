//
//  PublicationType.swift
//
//
//  Created by Boris Ovodov on 30.06.2024.
//

import Vapor

enum PublicationType: String, CustomStringConvertible, Codable, CaseIterable {
    case newspaper
    case magazine
    case brochure
    
    var description: String {
        switch self {
        case .newspaper:
            return "Newspaper"
        case .magazine:
            return "Magazine"
        case .brochure:
            return "Brochure"
        }
    }
    
    var toDTO: PublicationTypeDTO {
        return PublicationTypeDTO(id: self.rawValue, name: String(describing: self))
    }
    
    static var all: [PublicationTypeDTO] {
        return PublicationType.allCases.map { $0.toDTO }
    }
}

struct PublicationTypeDTO: Content {
    var id: String
    var name: String
}
