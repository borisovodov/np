//
//  Cost.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
import Vapor

final class Cost: Model, @unchecked Sendable, Content {
    static let schema = "costs"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "value")
    var value: Float
    
    @Parent(key: "currencyID")
    var currency: Currency
    
    @Parent(key: "newspaperID")
    var newspaper: Newspaper
    
    init() { }
}

extension Cost: CustomStringConvertible {
    var description: String {
        if self.currency.isSymbolLeftFromValue {
            return "\(self.currency.symbol) \(self.value)"
        } else {
            return "\(self.value) \(self.currency.symbol)"
        }
    }
}
