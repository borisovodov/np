//
//  CountryLanguagePivot.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class CountryLanguagePivot: Model, @unchecked Sendable {
    static let schema = "country-language-pivot"
    
    @ID(key: .id)
    var id: UUID?
    
    @Parent(key: "countryID")
    var country: Country
    
    @Parent(key: "languageID")
    var language: Language
    
    init() { }
}
