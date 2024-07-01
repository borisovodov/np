//
//  Newspaper.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

enum NewspaperError: Error {
    case unknownCity
    case incorrectPages
    case unknownLanguage
    case unknownColor
    case unknownPublicationType
}

final class Newspaper: Model, @unchecked Sendable, Content {
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
    
    @OptionalField(key: "pages")
    var pages: Int?
    
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
    
    init(title: String, publicationType: PublicationType, frequency: Frequency? = nil, circulation: Int? = nil, website: String? = nil, ISSN: String? = nil, publicationStart: Date? = nil, photo: String? = nil, thumbnail: String? = nil, number: String? = nil, secondaryNumber: String? = nil, date: Date, color: PublicationColor, pages: Int?, city: City, paperFormat: PaperFormat? = nil, language: Language, senders: [Sender], tags: [Tag]) throws {
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
        #warning("тут нужно добавить работу")
//        self.senders = senders
        #warning("тут нужно добавить работу")
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
        
        return try await NewspaperDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), URL: self.URL, thumbnail: "/\(self.thumbnail ?? "")", city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), tags: tags)
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
        
        return try await NewspaperPageDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), pages: self.pages, circulation: self.circulation, publicationStart: publicationStartString, website: self.website, ISSN: self.ISSN, photo: self.photo, thumbnail: "/\(self.thumbnail ?? "")", URL: self.URL, color: self.color.toDTO, publicationType: self.publicationType.toDTO, frequency: self.frequency?.toDTO, city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), paperFormat: self.$paperFormat.get(on: database)?.toDTO(database), frequencyTag: self.frequency?.tag(database), costs: costs, senders: senders, tags: tags)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(NewspaperFormDTO.self)
        
        let date = try Date("\(form.date)T00:00:00Z", strategy: .iso8601)
        var pages: Int? = nil
        var circulation: Int? = nil
        var frequency: Frequency? = nil
        var publicationStart: Date? = nil
        var paperFormat: PaperFormat? = nil
        
        guard let city = try await City.find(UUID(form.city), on: request.db) else { throw NewspaperError.unknownCity }
        guard let language = try await Language.find(UUID(form.language), on: request.db) else { throw NewspaperError.unknownLanguage }
        guard let color = PublicationColor(rawValue: form.color) else { throw NewspaperError.unknownColor }
        guard let publicationType = PublicationType(rawValue: form.publicationType) else { throw NewspaperError.unknownPublicationType }
        
        if let pagesString = form.pages { pages = Int(pagesString) }
        if let circulationString = form.circulation { circulation = Int(circulationString) }
        if let frequencyString = form.frequency { frequency = Frequency(rawValue: frequencyString) }
        if let publicationStartString = form.publicationStart { try publicationStart = Date("\(publicationStartString)T00:00:00Z", strategy: .iso8601) }
        if let paperFormatString = form.paperFormat { paperFormat = try await PaperFormat.find(UUID(paperFormatString), on: request.db) }
        
        self.title = form.title
        self.publicationType = publicationType
        self.frequency = frequency
        self.circulation = circulation
        self.website = form.website
        self.ISSN = form.ISSN
        self.publicationStart = publicationStart
        self.number = form.number
        self.secondaryNumber = form.secondaryNumber
        self.date = date
        self.color = color
        self.pages = pages
        self.$city.id = try city.requireID()
        self.$language.id = try language.requireID()
        
        if let paperFormat {
            self.$paperFormat.id = try paperFormat.requireID()
        }
        
        #warning("добавить обработку отправителей")
        #warning("добавить обработку тэгов")
        #warning("добавить создание thumbnails")
        if Bootstrap.stringToBool(form.isPhotoChanged) {
            guard let photo = try await Self.savePhoto(request, form: form) else {
                self.photo = nil
                try await self.save(on: request.db)
                return
            }
            self.photo = photo
        }
        
        try await self.save(on: request.db)
    }
    
    static var pathToPhotos: String {
        return "newspapers/originals/"
    }
    
    static var pathToThumbnails: String {
        return "newspapers/thumbnails/"
    }
    
    static func popular(_ database: Database) async throws -> [NewspaperDTO] {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await Newspaper.query(on: database).filter(\.$isTop == true).sort(\.$date, .descending).range(..<8).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        return newspapers
    }
    
    static func first(_ database: Database) async throws -> Newspaper? {
        guard let firstNewspaperReleaseDate = Calendar.current.date(from: DateComponents(year: 2012, month: 1, day: 13)) else { return nil }
        guard let newspaper = try await Newspaper.query(on: database).filter(\.$title == "体坛周报").filter(\.$date == firstNewspaperReleaseDate).first() else { return nil }
        
        return newspaper
    }
    
    static func last(_ database: Database) async throws -> Newspaper? {
        guard let newspaper = try await Newspaper.query(on: database).sort(\.$date, .descending).first() else { return nil }
        
        return newspaper
    }
    
    static func savePhoto(_ request: Request, form: NewspaperFormDTO) async throws -> String? {
        guard let photo = form.photo else { return nil }
        
        if photo.filename == "" { return nil }
        
        let path = request.application.directory.publicDirectory + Newspaper.pathToPhotos + photo.filename
        try await request.fileio.writeFile(photo.data, at: path)
        
        return photo.filename
    }
    
    static func add(_ request: Request) async throws -> Newspaper {
        let form = try request.content.decode(NewspaperFormDTO.self)
        
        let date = try Date("\(form.date)T00:00:00Z", strategy: .iso8601)
        var pages: Int? = nil
        var circulation: Int? = nil
        var frequency: Frequency? = nil
        var publicationStart: Date? = nil
        var paperFormat: PaperFormat? = nil
        
        guard let city = try await City.find(UUID(form.city), on: request.db) else { throw NewspaperError.unknownCity }
        guard let language = try await Language.find(UUID(form.language), on: request.db) else { throw NewspaperError.unknownLanguage }
        guard let color = PublicationColor(rawValue: form.color) else { throw NewspaperError.unknownColor }
        guard let publicationType = PublicationType(rawValue: form.publicationType) else { throw NewspaperError.unknownPublicationType }
        
        if let pagesString = form.pages { pages = Int(pagesString) }
        if let circulationString = form.circulation { circulation = Int(circulationString) }
        if let frequencyString = form.frequency { frequency = Frequency(rawValue: frequencyString) }
        if let publicationStartString = form.publicationStart { try publicationStart = Date("\(publicationStartString)T00:00:00Z", strategy: .iso8601) }
        if let paperFormatString = form.paperFormat { paperFormat = try await PaperFormat.find(UUID(paperFormatString), on: request.db) }
        
        #warning("добавить обработку отправителей")
        #warning("добавить обработку тэгов")
        #warning("добавить создание thumbnails")
        let newspaper = try await Newspaper(title: form.title, publicationType: publicationType, frequency: frequency, circulation: circulation, website: form.website, ISSN: form.ISSN, publicationStart: publicationStart, photo: Self.savePhoto(request, form: form), thumbnail: nil, number: form.number, secondaryNumber: form.secondaryNumber, date: date, color: color, pages: pages, city: city, paperFormat: paperFormat, language: language, senders: [], tags: [])
        try await newspaper.save(on: request.db)
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

struct NewspaperDTO: Content {
    var title: String
    var number: String?
    var secondaryNumber: String?
    var date: String
    var URL: String
    var thumbnail: String?
    var city: CityDTO
    var language: LanguageDTO
    var tags: [TagDTO]
}

struct NewspaperPageDTO: Content {
    var title: String
    var number: String?
    var secondaryNumber: String?
    #warning("дату для редактирования нужно формировать не так, как для просмотра")
    var date: String
    var pages: Int?
    var circulation: Int?
    #warning("дату для редактирования нужно формировать не так, как для просмотра")
    var publicationStart: String?
    var website: String?
    var ISSN: String?
    var photo: String?
    var thumbnail: String?
    var URL: String
    var color: PublicationColorDTO
    var publicationType: PublicationTypeDTO
    var frequency: FrequencyDTO?
    var city: CityDTO
    var language: LanguageDTO
    var paperFormat: PaperFormatDTO?
    var frequencyTag: Tag?
    var costs: [CostDTO]
    var senders: [SenderDTO]
    var tags: [TagDTO]
}

struct NewspaperFormDTO: Content {
    var title: String
    var publicationType: String
    var frequency: String?
    var circulation: String?
    var website: String?
    var ISSN: String?
    var publicationStart: String?
    var photo: File?
    var isPhotoChanged: String?
    var number: String?
    var secondaryNumber: String?
    var date: String
    var color: String
    var pages: String?
    var isTop: String?
    var city: String
    var paperFormat: String?
    var language: String
//    var senders: [String]
//    var tags: [String]
}
