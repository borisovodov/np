//
//  TagDTO.swift
//
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

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

struct TagFormDTO: Content {
    var name: String
}
