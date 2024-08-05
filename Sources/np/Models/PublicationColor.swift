//
//  Color.swift
//
//
//  Created by Boris Ovodov on 30.06.2024.
//

import Vapor

enum PublicationColor: String, CustomStringConvertible, Codable, CaseIterable {
    case monochrome
    case bicolor
    case multicolor
    
    var description: String {
        switch self {
        case .monochrome:
            return "Monochrome"
        case .bicolor:
            return "Bicolor"
        case .multicolor:
            return "Multicolor"
        }
    }
    
    var toDTO: PublicationColorDTO {
        return PublicationColorDTO(id: self.rawValue, name: String(describing: self))
    }
    
    static var all: [PublicationColorDTO] {
        return PublicationColor.allCases.map { $0.toDTO }
    }
}

struct PublicationColorDTO: Content {
    var id: String
    var name: String
}
