//
//  Achievement.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
import Vapor

final class Achievement: Model, @unchecked Sendable, Content {
    static let schema = "achievements"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    init() { }
    
    var URL: String {
        return "/achievements/\(self.id ?? UUID())"
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
