//
//  Currency.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class Currency: Model, @unchecked Sendable, Content {
    static let schema = "currencies"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Field(key: "symbol")
    var symbol: String
    
    @Field(key: "code")
    var code: String
    
    @Boolean(key: "isSymbolLeftFromValue")
    var isSymbolLeftFromValue: Bool
    
    init() { }
}

extension Currency: CustomStringConvertible {
    var description: String {
        self.name
    }
}
