//
//  Newspaper.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class Newspaper: Model, @unchecked Sendable, Content {
    enum PublicationColor: String, CustomStringConvertible, Codable {
        case monochrome = "Monochrome"
        case bicolor = "Bicolor"
        case multicolor = "Multicolor"
        
        var description: String {
            self.rawValue
        }
    }
    
    enum PublicationType: String, CustomStringConvertible, Codable {
        case newspaper = "Newspaper"
        case magazine = "Magazine"
        case brochure = "Brochure"
        
        var description: String {
            self.rawValue
        }
    }
    
    enum Frequency: String, CustomStringConvertible, Codable {
        case daily = "Daily"
        case weekly = "Weekly"
        case weeklies = "Weeklies"
        case biweekly = "Biweekly"
        case monthly = "Monthly"
        case bimonthly = "Bimonthly"
        
        var description: String {
            self.rawValue
        }
        
        func tag(_ database: Database) async throws -> Tag? {
            return try await Tag.query(on: database).filter(\.$tagType == .frequency).filter(\.$name == self.rawValue).first()
        }
    }
    
    static let schema = "newspapers"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "title")
    var title: String
    
    @Enum(key: "publicationType")
    var publicationType: PublicationType
    
    @OptionalEnum(key: "frequency")
    var frequency: Frequency?
    
    @OptionalField(key: "circulation")
    var circulation: Int?
    
    @OptionalField(key: "website")
    var website: String?
    
    @OptionalField(key: "ISSN")
    var ISSN: String?
    
    @OptionalField(key: "publicationStart")
    var publicationStart: Date?
    
    @OptionalField(key: "photo")
    var photo: String?
    
    @OptionalField(key: "thumbnail")
    var thumbnail: String?
    
    @OptionalField(key: "number")
    var number: String?
    
    @OptionalField(key: "secondaryNumber")
    var secondaryNumber: String?
    
    @Field(key: "date")
    var date: Date
    
    @Enum(key: "color")
    var color: PublicationColor
    
    @Field(key: "pages")
    var pages: Int
    
    @Boolean(key: "isTop")
    var isTop: Bool
    
    @Parent(key: "cityID")
    var city: City
    
    @OptionalParent(key: "paperformatID")
    var paperFormat: PaperFormat?
    
    @Parent(key: "languageID")
    var language: Language
    
    @Children(for: \.$newspaper)
    var costs: [Cost]
    
    @Siblings(through: NewspaperSenderPivot.self, from: \.$newspaper, to: \.$sender)
    var senders: [Sender]
    
    @Siblings(through: NewspaperTagPivot.self, from: \.$newspaper, to: \.$tag)
    var tags: [Tag]
    
    init() { }
    
    init(title: String, publicationType: PublicationType, frequency: Frequency? = nil, circulation: Int? = nil, website: String? = nil, ISSN: String? = nil, publicationStart: Date? = nil, photo: String? = nil, thumbnail: String? = nil, number: String? = nil, secondaryNumber: String? = nil, date: Date, color: PublicationColor, pages: Int, city: City, paperFormat: PaperFormat? = nil, language: Language, senders: [Sender], tags: [Tag]) throws {
        self.id = UUID()
        self.title = title
        self.publicationType = publicationType
        self.frequency = frequency
        self.circulation = circulation
        self.website = website
        self.ISSN = ISSN
        self.publicationStart = publicationStart
        self.photo = photo
        self.thumbnail = thumbnail
        self.number = number
        self.secondaryNumber = secondaryNumber
        self.date = date
        self.color = color
        self.pages = pages
        self.isTop = false
        self.$city.id = try city.requireID()
        self.$paperFormat.id = try paperFormat?.requireID()
        self.$language.id = try language.requireID()
//        self.senders = senders
//        self.tags = tags
    }
    
    var URL: String {
        return "/newspapers/\(self.id ?? UUID())"
    }
    
    func markers(_ database: Database) async throws -> [Marker] {
        return try await [Marker(city: self.$city.get(on: database).toDTO(database), newspapers: [self.toDTO(database)])]
    }
    
    func toDTO(_ database: Database) async throws -> NewspaperDTO {
        var tags: [TagDTO] = []
        for tag in try await self.$tags.query(on: database).all() {
            try await tags.append(tag.toDTO(database))
        }
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .long
        dateFormatter.locale = Locale(identifier: "en_EN")
        
        return try await NewspaperDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), URL: self.URL, thumbnail: self.thumbnail, city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), tags: tags)
    }
    
    func toPageDTO(_ database: Database) async throws -> NewspaperPageDTO {
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .long
        dateFormatter.locale = Locale(identifier: "en_EN")
        
        var publicationStartString: String? = nil
        if let publicationStart = self.publicationStart {
            publicationStartString = dateFormatter.string(from: publicationStart)
        }
        
        var costs: [CostDTO] = []
        for cost in try await self.$costs.query(on: database).all() {
            try await costs.append(cost.toDTO(database))
        }
        
        var senders: [SenderDTO] = []
        for sender in try await self.$senders.query(on: database).all() {
            try await senders.append(sender.toDTO(database))
        }
        
        var tags: [TagDTO] = []
        for tag in try await self.$tags.query(on: database).all() {
            try await tags.append(tag.toDTO(database))
        }
        
        return try await NewspaperPageDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), pages: self.pages, circulation: self.circulation, publicationStart: publicationStartString, website: self.website, ISSN: self.ISSN, photo: self.photo, thumbnail: self.thumbnail, URL: self.URL, city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), paperFormat: self.$paperFormat.get(on: database)?.toDTO(database), frequency: self.frequency?.tag(database), costs: costs, senders: senders, tags: tags)
    }
    
    static func popular(_ database: Database) async throws -> [NewspaperDTO] {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await Newspaper.query(on: database).filter(\.$isTop == true).sort(\.$date, .descending).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        return newspapers
    }
    
    static func first(_ database: Database) async throws -> Newspaper? {
        guard let firstNewspaperReleaseDate = Calendar.current.date(from: DateComponents(year: 2012, month: 1, day: 13)) else {
            return nil
        }
        
        guard let newspaper = try await Newspaper.query(on: database).filter(\.$title == "体坛周报").filter(\.$date == firstNewspaperReleaseDate).first() else {
            return nil
        }
        
        return newspaper
    }
    
    static func last(_ database: Database) async throws -> Newspaper? {
        guard let newspaper = try await Newspaper.query(on: database).sort(\.$date, .descending).first() else {
            return nil
        }
        
        return newspaper
    }
    
//    var isPravda: Bool {
//        return 'правда' in self.title.lower()
//    }

//    var isMetro: Bool {
//        return 'metro' in self.title.lower()
//    }

//    var isNotOfficialLanguage: Bool {
//        return self.language not in self.city.country.languages.all()
//    }

//    def get_tags_alph(self):
//        return self.tags.order_by('name')

//    def save(self):
//        from PIL import Image
//        from io import BytesIO
//        from django.core.files.uploadedfile import InMemoryUploadedFile
//        import sys
//
//        try:
//            size = (522, 522)
//            im = Image.open(self.photo)
//            output = BytesIO()
//
//            #Resize/modify the image
//            im.thumbnail(size)
//
//            #after modifications, save it to the output
//            im.save(output, format='JPEG', quality=100)
//            output.seek(0)
//
//            self.thumbnail = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.photo.name.split('.')[0],
//                                                    'image/jpeg', sys.getsizeof(output), None)
//
//            super(Newspaper, self).save()
//        except:
//            super(Newspaper, self).save()
}

extension Newspaper: CustomStringConvertible {
    var description: String {
        self.title
    }
}
