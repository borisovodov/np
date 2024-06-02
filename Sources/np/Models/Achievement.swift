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
    
//    var senders: [Sender] {
//        return Sender.objects.order_by('name').filter(achievements=self)
//    }
}

extension Achievement: CustomStringConvertible {
    var description: String {
        self.name
    }
}
