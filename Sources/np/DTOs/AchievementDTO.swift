//
//  AchievementDTO.swift
//
//
//  Created by Boris Ovodov on 23.06.2024.
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
