//
//  Country.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
import Vapor

final class Country: Model, @unchecked Sendable, Content {
    static let schema = "countries"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @OptionalField(key: "emoji")
    var emoji: String?
    
    @Field(key: "population")
    var population: Int
    
    @OptionalField(key: "markerIcon")
    var markerIcon: String?
    
    @Siblings(through: CountryLanguagePivot.self, from: \.$country, to: \.$language)
    var languages: [Language]
    
    init() { }
    
    var URL: String {
        return "/countries/\(self.id ?? UUID())"
    }
    
//    var cities: [City] {
//        return City.objects.order_by('name').filter(country=self)
//    }

//    var newspapers: [Newspaper] {
//        return Newspaper.objects.order_by('-date').filter(city__country=self)
//    }

//    var senders: [Sender] {
//        senders_ids = self.newspapers().values_list('senders__id', flat=True)
//        return Sender.objects.order_by('name').filter(id__in=list(senders_ids))
//    }
}

extension Country: CustomStringConvertible {
    var description: String {
        self.name
    }
}

extension Country: Hashable {
    static func == (lhs: Country, rhs: Country) -> Bool {
        return lhs.id == rhs.id
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.id)
    }
}
