//
//  City.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class City: Model, @unchecked Sendable, Content {
    enum Continent: String, CustomStringConvertible, Codable {
        case africa
        case antarctica
        case asia
        case australiaAndOceania
        case europe
        case northAmerica
        case southAmerica
        
        var description: String {
            switch self {
            case .africa:
                return "Africa"
            case .antarctica:
                return "Antarctica"
            case .asia:
                return "Asia"
            case .australiaAndOceania:
                return "Australia/Oceania"
            case .europe:
                return "Europe"
            case .northAmerica:
                return "North America"
            case .southAmerica:
                return "South America"
            }
        }
        
        func tag(_ database: Database) async throws -> Tag? {
            return try await Tag.query(on: database).filter(\.$tagType == .continent).filter(\.$name == self.rawValue).first()
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
        if self.latitude > 0.0 { // false — north hemisphere, true — south hemisphere
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
        return "\(self.latitude), \(self.longitude)"
    }
    
    func senders(_ database: Database) async throws -> [SenderDTO] {
        var senders: Set<SenderDTO> = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            for sender in try await newspaper.$senders.query(on: database).all() {
                try await senders.insert(sender.toDTO(database))
            }
        }
        return senders.sorted { $0.name < $1.name }
    }
    
    func markers(_ database: Database) async throws -> [Marker] {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        
        return try await [Marker(city: self.toDTO(database), newspapers: newspapers)]
    }
    
    func toDTO(_ database: Database) async throws -> CityDTO {
        return try await CityDTO(name: self.name, coordinates: self.coordinates, markerIcon: self.$country.get(on: database).markerIcon, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }
    
    func toPageDTO(_ database: Database) async throws -> CityPageDTO {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        
        return try await CityPageDTO(name: self.name, URL: self.URL, population: self.population, isCoastal: self.isCoastal, elevation: self.elevation, country: self.$country.get(on: database).toDTO(database), continentTag: self.continent.tag(database)?.toDTO(database), senders: self.senders(database), newspapers: newspapers)
    }
    
    static func northernmost(_ database: Database) async throws -> City? {
        try await City.query(on: database).sort(\.$latitude, .descending).first()
    }
    
    static func southernmost(_ database: Database) async throws -> City? {
        return try await City.query(on: database).sort(\.$latitude, .ascending).first()
    }
    
    static func westernmost(_ database: Database) async throws -> City? {
        return try await City.query(on: database).sort(\.$longitude, .ascending).first()
    }
    
    static func easternmost(_ database: Database) async throws -> City? {
        return try await City.query(on: database).sort(\.$longitude, .descending).first()
    }
    
    static func authorFrom(_ database: Database) async throws -> City? {
        try await City.query(on: database).filter(\.$name == "Yekaterinburg").first()
    }

//    var photo: String {
//        if self.newspapers(): return self.newspapers().first().photo
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
