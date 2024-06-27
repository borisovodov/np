//
//  LanguageDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

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

struct LanguageFormDTO: Content {
    var name: String
}
