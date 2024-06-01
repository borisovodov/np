//
//  City.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
import Vapor

final class City: Model, @unchecked Sendable, Content {
    enum Continent: String, CustomStringConvertible, Codable {
        case africa = "Africa"
        case antarctica = "Antarctica"
        case asia = "Asia"
        case australiaAndOceania = "Australia/Oceania"
        case europe = "Europe"
        case northAmerica = "North America"
        case southAmerica = "South America"
        
        var description: String {
            self.rawValue
        }
        
        func tag(_ database: Database) async throws -> Tag? {
            return try await Tag.query(on: database).filter(\.$name == self.rawValue).first()
        }
    }
    
    static let schema = "cities"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Field(key: "population")
    var population: Int
    
    @Enum(key: "continent")
    var continent: Continent
    
    @Boolean(key: "isCoastal")
    var isCoastal: Bool
    
    @Field(key: "elevation")
    /// Elevation in meters
    var elevation: Int
    
    @Field(key: "latitude")
    var latitude: Float
    
    @Field(key: "longitude")
    var longitude: Float
    
    @Boolean(key: "manualLocation")
    var manualLocation: Bool
    
    @Parent(key: "countryID")
    var country: Country
    
    @Children(for: \.$city)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String, country: Country, population: Int, continent: Continent, isCoastal: Bool, elevation: Int, latitude: Float, longitude: Float, manualLocation: Bool) throws {
        self.id = UUID()
        self.name = name
        self.$country.id = try country.requireID()
        self.population = population
        self.continent = continent
        self.isCoastal = isCoastal
        self.elevation = elevation
        self.latitude = latitude
        self.longitude = longitude
        self.manualLocation = manualLocation
    }
    
    var isPolar: Bool {
        return self.latitude > 66.562 || self.latitude < -66.562
    }
    
    var hemisphere: Bool {
        if self.latitude > 0.0 { // # false — north hemisphere, true — south hemisphere
            return false
        }
        return true
    }
    
    var URL: String {
        return "/countries/\(self.$country.id)/\(self.id ?? UUID())"
    }
    
    var prettyLatitude: String {
        let degrees = Int(abs(self.latitude))
        let minutes = Int(abs(self.latitude).truncatingRemainder(dividingBy: 1) * 60)
        
        if self.latitude > 0 {
            return "\(degrees)° \(minutes)′ N"
        } else {
            return "\(degrees)° \(minutes)′ S"
        }
    }
    
    var prettyLongitude: String {
        let degrees = Int(abs(self.longitude))
        let minutes = Int(abs(self.longitude).truncatingRemainder(dividingBy: 1) * 60)
        
        if self.longitude > 0 {
            return "\(degrees)° \(minutes)′ N"
        } else {
            return "\(degrees)° \(minutes)′ S"
        }
    }
    
    var coordinates: String {
        return "\(self.prettyLatitude), \(self.prettyLongitude)"
    }
    
    func toDTO(_ database: Database) async throws -> CityDTO {
        return try await CityDTO(name: self.name, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }

//    var newspapers: [Newspapers] {
//        return Newspaper.objects.order_by('-date').filter(city=self)
//    }

//    var senders: [Sender] {
//        senders_ids = self.newspapers().values_list('senders__id', flat=True)
//        return Sender.objects.order_by('name').filter(id__in=list(senders_ids))
//    }

//    var photo: String {
//        if self.newspapers(): return self.newspapers().first().photo
//    }

//    var continentTag: Tag {
//        tag, created = Tag.objects.get_or_create(name=self.continent)
//        tag.save()
//        return tag
//    }
}

extension City: CustomStringConvertible {
    var description: String {
        return "\(self.name), \(self.country)"
    }
}

extension City: Hashable {
    static func == (lhs: City, rhs: City) -> Bool {
        return lhs.id == rhs.id
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.id)
    }
}
