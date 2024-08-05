//
//  SenderAchievementPivot.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class SenderAchievementPivot: Model, @unchecked Sendable {
    static let schema = "sender-achievement-pivot"
    
    @ID(key: .id)
    var id: UUID?
    
    @Parent(key: "senderID")
    var sender: Sender
    
    @Parent(key: "achievementID")
    var achievement: Achievement
    
    init() { }
    
    init(sender: Sender, achievement: Achievement) throws {
        self.id = UUID()
        self.$sender.id = try sender.requireID()
        self.$achievement.id = try achievement.requireID()
    }
}
