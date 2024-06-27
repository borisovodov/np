//
//  NewspaperDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

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
    var pages: Int?
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
