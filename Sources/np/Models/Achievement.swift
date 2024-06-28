//
//  Achievement.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class Achievement: Model, @unchecked Sendable, Content {
    static let schema = "achievements"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Siblings(through: SenderAchievementPivot.self, from: \.$achievement, to: \.$sender)
    var senders: [Sender]
    
    init() { }
    
    init(name: String) {
        self.id = UUID()
        self.name = name
    }
    
    var URL: String {
        return "/achievements/\(self.id ?? UUID())"
    }
    
    var toDTO: AchievementDTO {
        return AchievementDTO(name: self.name, URL: self.URL)
    }
    
    func toPageDTO(_ database: Database) async throws -> AchievementPageDTO {
        var senders: [SenderDTO] = []
        for sender in try await self.$senders.query(on: database).all() {
            try await senders.append(sender.toDTO(database))
        }
        return AchievementPageDTO(name: self.name, URL: self.URL, senders: senders)
    }
}

extension Achievement: CustomStringConvertible {
    var description: String {
        self.name
    }
}

struct AchievementDTO: Content {
    var name: String
    var URL: String
}

struct AchievementPageDTO: Content {
    var name: String
    var URL: String
    var senders: [SenderDTO]
}
