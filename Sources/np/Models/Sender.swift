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
    
    @Boolean(key: "isWoman")
    var isWoman: Bool
    
    @OptionalField(key: "avatar")
    var avatar: String?
    
    @Siblings(through: SenderAchievementPivot.self, from: \.$sender, to: \.$achievement)
    var achievements: [Achievement]
    
    @Siblings(through: NewspaperSenderPivot.self, from: \.$sender, to: \.$newspaper)
    var newspapers: [Newspaper]
    
    init() { }
    
    init(name: String, isWoman: Bool, avatar: String? = nil) {
        self.id = UUID()
        self.name = name
        self.isWoman = isWoman
        self.avatar = avatar
    }
    
    var URL: String {
        return "/senders/\(self.id ?? UUID())"
    }
    
    func cities(_ database: Database) async throws -> [City] {
        return try await Set(self.$newspapers.query(on: database).all().map { $0.city }).sorted { $0.name < $1.name }
    }
    
    func countries(_ database: Database) async throws -> [Country] {
        return try await Set(self.cities(database).map { $0.country }).sorted { $0.name < $1.name }
    }
    
    func toDTO(_ database: Database) async throws -> SenderDTO {
        return try await SenderDTO(name: self.name, avatar: self.avatar, URL: self.URL, countriesCount: self.countries(database).count, citiesCount: self.cities(database).count, achievements: self.$achievements.query(on: database).all().map { $0.toDTO })
    }
    
    static func popular(_ database: Database) async throws -> [SenderDTO] {
        var senders: [SenderDTO] = []
        
        for sender in try await Sender.query(on: database).filter(\.$name != "Anonym / Unknown").all() {
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
