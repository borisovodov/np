//
//  Country.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class Country: Model, @unchecked Sendable, Content {
    static let schema = "countries"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @OptionalField(key: "emoji")
    var emoji: String?
    
    @OptionalField(key: "markerIcon")
    var markerIcon: String?
    
    @Children(for: \.$country)
    var cities: [City]
    
    init() { }
    
    init(name: String, emoji: String? = nil, markerIcon: String? = nil) {
        self.id = UUID()
        self.name = name
        self.emoji = emoji
        self.markerIcon = markerIcon
    }
    
    var URL: String {
        return "/countries/\(self.id ?? UUID())"
    }
    
    func newspapers(_ database: Database) async throws -> [Newspaper] {
        var newspapers: [Newspaper] = []
        
        for city in try await self.$cities.query(on: database).all() {
            try await newspapers.append(contentsOf: city.$newspapers.query(on: database).all())
        }
        
        return newspapers
    }
    
    func senders(_ database: Database) async throws -> [SenderDTO] {
        var senders: [SenderDTO] = []
        
        for newspaper in try await self.newspapers(database) {
            for sender in try await newspaper.$senders.query(on: database).all() {
                try await senders.append(sender.toDTO(database))
            }
        }
        
        return senders
    }
    
    func markers(_ database: Database) async throws -> [Marker] {
        var markers: [Marker] = []
        
        for city in try await self.$cities.query(on: database).all() {
            try await markers.append(contentsOf: city.markers(database))
        }
        
        return markers
    }
    
    func toDTO(_ database: Database) async throws -> CountryDTO {
        return try await CountryDTO(name: self.name, URL: self.URL, emoji: self.emoji, newspapersCount: self.newspapers(database).count)
    }
    
    func toPageDTO(_ database: Database) async throws -> CountryPageDTO {
        var cities: [CityDTO] = []
        for city in try await self.$cities.query(on: database).all() {
            try await cities.append(city.toDTO(database))
        }
        
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.newspapers(database) {
            try await newspapers.append(newspaper.toDTO(database))
        }
        
        return try await CountryPageDTO(name: self.name, URL: self.URL, emoji: self.emoji, senders: self.senders(database), cities: cities, newspapers: newspapers)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(CountryFormDTO.self)
        
        self.name = form.name
        self.emoji = form.emoji
        
        if form.isMarkerIconChanged == "on" {
            guard let markerIcon = try await Self.saveMarkerIcon(request, form: form) else {
                self.markerIcon = nil
                try await self.save(on: request.db)
                return
            }
            self.markerIcon = markerIcon
        }
        
        try await self.save(on: request.db)
    }
    
    static var pathToMarkerIcons: String {
        return "markers/"
    }
    
    static func popular(_ database: Database) async throws -> [CountryDTO] {
        var countries: [CountryDTO] = []
        for country in try await Country.query(on: database).all() {
            try await countries.append(country.toDTO(database))
        }
        return countries.sorted { $0.newspapersCount > $1.newspapersCount }
    }
    
    static func firstNewspaperFrom(_ database: Database) async throws -> Country? {
        try await Country.query(on: database).filter(\.$name == "China").first()
    }
    
    static func saveMarkerIcon(_ request: Request, form: CountryFormDTO) async throws -> String? {
        guard let markerIcon = form.markerIcon else { return nil }
        
        if markerIcon.filename == "" { return nil }
        
        let path = request.application.directory.publicDirectory + Country.pathToMarkerIcons + markerIcon.filename
        try await request.fileio.writeFile(markerIcon.data, at: path)
        
        return markerIcon.filename
    }
    
    static func add(_ request: Request) async throws -> Country {
        let form = try request.content.decode(CountryFormDTO.self)
        
        guard let markerIcon = try await Self.saveMarkerIcon(request, form: form) else {
            let country = Country(name: form.name, emoji: form.emoji)
            try await country.save(on: request.db)
            return country
        }
        
        let country = Country(name: form.name, emoji: form.emoji, markerIcon: markerIcon)
        try await country.save(on: request.db)
        
        return country
    }
    
//    var cities: [City] {
//        return City.objects.order_by('name').filter(country=self)
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
