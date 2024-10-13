//
//  City.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

enum CityError: Error {
    case unknownCountry
    case unknownContinent
    case incorrectLatitude
    case incorrectLongitude
}

final class City: Model, @unchecked Sendable, Content {
    static let schema = "cities"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Enum(key: "continent")
    var continent: Continent
    
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
    
    init(name: String, country: Country, continent: Continent, latitude: Float, longitude: Float, manualLocation: Bool) throws {
        self.id = UUID()
        self.name = name
        self.$country.id = try country.requireID()
        self.continent = continent
        self.latitude = latitude
        self.longitude = longitude
        self.manualLocation = manualLocation
    }
    
    var isPolar: Bool {
        return self.latitude > 66.562 || self.latitude < -66.562
    }
    
    /// false — north hemisphere, true — south hemisphere
    var hemisphere: Bool {
        if self.latitude > 0.0 {
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
        return try await [Marker(city: self.toDTO(database))]
    }
    
    func toDTO(_ database: Database) async throws -> CityDTO {
        return try await CityDTO(id: self.requireID().uuidString, name: self.name, coordinates: self.coordinates, markerIcon: self.$country.get(on: database).markerIcon, URL: self.URL, newspapersCount: self.$newspapers.query(on: database).count())
    }
    
    func toPageDTO(_ database: Database) async throws -> CityPageDTO {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        
        return try await CityPageDTO(name: self.name, URL: self.URL, country: self.$country.get(on: database).toDTO(database), continent: self.continent.toDTO, continentTag: self.continent.tag(database)?.toDTO(database), manualLocation: self.manualLocation, latitude: String(self.latitude), longitude: String(self.longitude), senders: self.senders(database), newspapers: newspapers)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(CityFormDTO.self)
        
        guard let country = try await Country.find(UUID(form.country), on: request.db) else { throw CityError.unknownCountry }
        guard let continent = Continent(rawValue: form.continent) else { throw CityError.unknownContinent }
        guard let latitude = Float(form.latitude) else { throw CityError.incorrectLatitude }
        guard let longitude = Float(form.longitude) else { throw CityError.incorrectLongitude }
        
        self.name = form.name
        self.$country.id = try country.requireID()
        self.continent = continent
        self.manualLocation = Bootstrap.stringToBool(form.manualLocation)
        self.latitude = latitude
        self.longitude = longitude
        
        try await self.save(on: request.db)
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
    
    static func all(_ database: Database) async throws -> [CityDTO] {
        var cities: [CityDTO] = []
        for city in try await City.query(on: database).sort(\.$name).all() {
            try await cities.append(city.toDTO(database))
        }
        return cities
    }
    
    static func add(_ request: Request) async throws -> City {
        let form = try request.content.decode(CityFormDTO.self)
        
        guard let country = try await Country.find(UUID(form.country), on: request.db) else { throw CityError.unknownCountry }
        guard let continent = Continent(rawValue: form.continent) else { throw CityError.unknownContinent }
        guard let latitude = Float(form.latitude) else { throw CityError.incorrectLatitude }
        guard let longitude = Float(form.longitude) else { throw CityError.incorrectLongitude }
        
        let city = try City(name: form.name, country: country, continent: continent, latitude: latitude, longitude: longitude, manualLocation: Bootstrap.stringToBool(form.manualLocation))
        try await city.save(on: request.db)
        
        return city
    }
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

struct CityDTO: Content {
    var id: String
    var name: String
    var coordinates: String
    var markerIcon: String?
    var URL: String
    var newspapersCount: Int
}

extension CityDTO: Hashable {
    static func == (lhs: CityDTO, rhs: CityDTO) -> Bool {
        return lhs.URL == rhs.URL
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.URL)
    }
}

struct CityPageDTO: Content {
    var name: String
    var URL: String
    var country: CountryDTO
    var continent: ContinentDTO
    var continentTag: TagDTO?
    var manualLocation: Bool
    var latitude: String
    var longitude: String
    var senders: [SenderDTO]
    var newspapers: [NewspaperDTO]
}

struct CityFormDTO: Content {
    var name: String
    /// На сервере это `enum`.
    var continent: String
    /// На сервере это `Parent`.
    var country: String
    /// На сервере это `Bool`. Поле не нужно на форме создания, пригодится только при редактировании.
    var manualLocation: String?
    /// На сервере это `Float`. Поле не нужно на форме создания, пригодится только при редактировании.
    var latitude: String
    /// На сервере это `Float`. Поле не нужно на форме создания, пригодится только при редактировании.
    var longitude: String
}
