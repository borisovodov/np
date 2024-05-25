//
//  NewspaperSenderPivot.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation

final class NewspaperSenderPivot: Model, @unchecked Sendable {
    static let schema = "newspaper-sender-pivot"
    
    @ID(key: .id)
    var id: UUID?
    
    @Parent(key: "newspaperID")
    var newspaper: Newspaper
    
    @Parent(key: "senderID")
    var sender: Sender
    
    init() { }
}
