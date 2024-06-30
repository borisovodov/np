//
//  Sender.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class Sender: Model, @unchecked Sendable, Content {
    static let schema = "senders"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @OptionalField(key: "avatar")
    var avatar: String?
    
    @Siblings(through: SenderAchievementPivot.self, from: \.$sender, to: \.$achievement)
    var achievements: [Achievement]
    
    @Siblings(through: NewspaperSenderPivot.self, from: \.$sender, to: \.$newspaper)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String, avatar: String? = nil) {
        self.id = UUID()
        self.name = name
        self.avatar = avatar
    }
    
    var URL: String {
        return "/senders/\(self.id ?? UUID())"
    }
    
    var avatarURL: String? {
        guard let avatar = self.avatar else { return nil }
        return "/" + Self.pathToAvatars + avatar
    }
    
    func cities(_ database: Database) async throws -> [City] {
        var cities: [City] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await cities.append(newspaper.$city.get(on: database))
        }
        
        return Set(cities).sorted { $0.name < $1.name }
    }
    
    func countries(_ database: Database) async throws -> [Country] {
        var countries: [Country] = []
        for city in try await self.cities(database) {
            try await countries.append(city.$country.get(on: database))
        }
        
        return Set(countries).sorted { $0.name < $1.name }
    }
    
    func markers(_ database: Database) async throws -> [Marker] {
        var markers: [Marker] = []
        var cities: [CityDTO:[NewspaperDTO]] = [:]
        
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await cities[newspaper.$city.get(on: database).toDTO(database)]?.append(newspaper.toDTO(database))
        }
        
        for city in cities {
            markers.append(Marker(city: city.key, newspapers: city.value))
        }
        
        return markers
    }
    
    func toDTO(_ database: Database) async throws -> SenderDTO {
        return try await SenderDTO(name: self.name, avatar: self.avatarURL, URL: self.URL, countriesCount: self.countries(database).count, citiesCount: self.cities(database).count, achievements: self.$achievements.query(on: database).all().map { $0.toDTO })
    }
    
    func toPageDTO(_ database: Database) async throws -> SenderPageDTO {
        var cities: [CityDTO] = []
        var countries: [CountryDTO] = []
        for city in try await self.cities(database) {
            try await cities.append(city.toDTO(database))
            try await countries.append(city.$country.get(on: database).toDTO(database))
        }
        
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await self.$newspapers.query(on: database).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        
        return try await SenderPageDTO(name: self.name, avatar: self.avatarURL, URL: self.URL, countries: countries, cities: cities, achievements: self.$achievements.query(on: database).all().map { $0.toDTO }, newspapers: newspapers)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(SenderFormDTO.self)
        
        self.name = form.name
        
        if Bootstrap.stringToBool(form.isAvatarChanged) {
            guard let avatar = try await Self.saveAvatar(request, form: form) else {
                self.avatar = nil
                try await self.save(on: request.db)
                return
            }
            self.avatar = avatar
        }
        
        try await self.save(on: request.db)
    }
    
    static var pathToAvatars: String {
        return "avatars/"
    }
    
    static func popular(_ database: Database) async throws -> [SenderDTO] {
        var senders: [SenderDTO] = []
        
        for sender in try await Sender.query(on: database).filter(\.$name != "Anonym / Unknown").range(..<8).all() {
            try await senders.append(sender.toDTO(database))
        }
        
        return senders.sorted { $0.citiesCount > $1.citiesCount }
    }
    
    static func author(_ database: Database) async throws -> Sender? {
        try await Sender.query(on: database).filter(\.$name == "Boris Ovodov").first()
    }
    
    static func first(_ database: Database) async throws -> Sender? {
        try await Sender.query(on: database).filter(\.$name == "Sasha Ovodova").first()
    }
    
    static func saveAvatar(_ request: Request, form: SenderFormDTO) async throws -> String? {
        guard let avatar = form.avatar else { return nil }
        
        if avatar.filename == "" { return nil }
        
        let path = request.application.directory.publicDirectory + Sender.pathToAvatars + avatar.filename
        try await request.fileio.writeFile(avatar.data, at: path)
        
        return avatar.filename
    }
    
    static func add(_ request: Request) async throws -> Sender {
        let form = try request.content.decode(SenderFormDTO.self)
        
        let sender = try await Sender(name: form.name, avatar: Self.saveAvatar(request, form: form))
        try await sender.save(on: request.db)
        return sender
    }
    
//    var countries: [Country] {
//        countries_ids = self.newspapers().values_list('city__country_id', flat=True)
//        return Country.objects.order_by('name').filter(id__in=list(countries_ids))
//    }

//    var languages: [Language] {
//        languages_ids = self.newspapers().values_list('language_id', flat=True)
//        return Language.objects.order_by('name').filter(id__in=list(languages_ids))
//    }

//    def get_achievements_alph(self):
//        return self.achievements.order_by('name')

//    func updateAchievements() {
//        self.achievements.clear()
//
//        if self.countries().count() > 2:
//                achievement, created = Achievement.objects.get_or_create(name='3 Countries')
//            self.achievements.add(achievement)
//            if self.countries().count() > 4:
//                achievement, created = Achievement.objects.get_or_create(name='5 Countries')
//            self.achievements.add(achievement)
//            if self.countries().count() > 9:
//                achievement, created = Achievement.objects.get_or_create(name='10 Countries')
//            self.achievements.add(achievement)
//            if self.countries().count() > 49:
//                achievement, created = Achievement.objects.get_or_create(name='50 Countries')
//            self.achievements.add(achievement)
//            if self.cities().count() > 2:
//                achievement, created = Achievement.objects.get_or_create(name='3 Cities')
//            self.achievements.add(achievement)
//            if self.cities().count() > 4:
//                achievement, created = Achievement.objects.get_or_create(name='5 Cities')
//            self.achievements.add(achievement)
//            if self.cities().count() > 9:
//                achievement, created = Achievement.objects.get_or_create(name='10 Cities')
//            self.achievements.add(achievement)
//            if self.cities().count() > 49:
//                achievement, created = Achievement.objects.get_or_create(name='50 Cities')
//            self.achievements.add(achievement)
//            if self.languages().count() > 2:
//                achievement, created = Achievement.objects.get_or_create(name='3 Languages')
//            self.achievements.add(achievement)
//            if self.languages().count() > 4:
//                achievement, created = Achievement.objects.get_or_create(name='5 Languages')
//            self.achievements.add(achievement)
//            if self.languages().count() > 9:
//                achievement, created = Achievement.objects.get_or_create(name='10 Languages')
//            self.achievements.add(achievement)
//            if self.languages().count() > 49:
//                achievement, created = Achievement.objects.get_or_create(name='50 Languages')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) > 1:
//                achievement, created = Achievement.objects.get_or_create(name='2 Continents')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) > 2:
//                achievement, created = Achievement.objects.get_or_create(name='3 Continents')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) > 3:
//                achievement, created = Achievement.objects.get_or_create(name='4 Continents')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) > 4:
//                achievement, created = Achievement.objects.get_or_create(name='5 Continents')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) > 5:
//                achievement, created = Achievement.objects.get_or_create(name='6 Continents')
//            self.achievements.add(achievement)
//            if len(set([ newspaper.city.hemisphere() for newspaper in self.newspapers() ])) == 2:
//                achievement, created = Achievement.objects.get_or_create(name='Both Hemisphere')
//            self.achievements.add(achievement)
//            years = len(set([ newspaper.date.year for newspaper in self.newspapers() ]))
//            if years > 3:
//                achievement, created = Achievement.objects.get_or_create(name='3 Years')
//            self.achievements.add(achievement)
//            if years > 4:
//                achievement, created = Achievement.objects.get_or_create(name='5 Years')
//            self.achievements.add(achievement)
//            if years > 9:
//                achievement, created = Achievement.objects.get_or_create(name='10 Years')
//            self.achievements.add(achievement)
//
//            self.save()
//    }
}

extension Sender: CustomStringConvertible {
    var description: String {
        self.name
    }
}

extension Sender: Hashable {
    static func == (lhs: Sender, rhs: Sender) -> Bool {
        return lhs.id == rhs.id
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.id)
    }
}

struct SenderDTO: Content {
    var name: String
    var avatar: String?
    var URL: String
    var countriesCount: Int
    var citiesCount: Int
    var achievements: [AchievementDTO]
}

extension SenderDTO: Hashable {
    static func == (lhs: SenderDTO, rhs: SenderDTO) -> Bool {
        return lhs.URL == rhs.URL
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.URL)
    }
}

struct SenderPageDTO: Content {
    var name: String
    var avatar: String?
    var URL: String
    var countries: [CountryDTO]
    var cities: [CityDTO]
    var achievements: [AchievementDTO]
    var newspapers: [NewspaperDTO]
}

struct SenderFormDTO: Content {
    var name: String
    var avatar: File?
    var isAvatarChanged: String?
}
