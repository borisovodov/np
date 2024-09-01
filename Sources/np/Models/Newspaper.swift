//
//  Newspaper.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Swim
import Vapor

enum NewspaperError: Error {
    case unknownCity
    case incorrectPages
    case unknownLanguage
    case unknownColor
    case unknownPublicationType
    case unknownSender
    case unknownTag
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
    
    init(_ database: Database, title: String, publicationType: PublicationType, frequency: Frequency? = nil, circulation: Int? = nil, website: String? = nil, ISSN: String? = nil, publicationStart: Date? = nil, photo: String? = nil, thumbnail: String? = nil, number: String? = nil, secondaryNumber: String? = nil, date: Date, color: PublicationColor, pages: Int?, city: City, paperFormat: PaperFormat? = nil, language: Language) throws {
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
    }
    
    var URL: String {
        return "/newspapers/\(self.id ?? UUID())"
    }
    
    var photoURL: String? {
        guard let photo = self.photo else { return nil }
        return Self.pathToPhotos + photo
    }
    
    var thumbnailURL: String? {
        guard let thumbnail = self.thumbnail else { return nil }
        return Self.pathToThumbnails + thumbnail
    }
    
    var isPravda: Bool {
        return self.title.lowercased().contains("правда")
    }

    var isMetro: Bool {
        return self.title.lowercased().contains("metro")
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
        
        return try await NewspaperDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), URL: self.URL, thumbnail: self.thumbnailURL, city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), tags: tags)
    }
    
    func toPageDTO(_ database: Database) async throws -> NewspaperPageDTO {
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .long
        dateFormatter.locale = Locale(identifier: "en_EN")
        
        var publicationStartString: String? = nil
        var publicationStartForEditString: String? = nil
        if let publicationStart = self.publicationStart {
            publicationStartString = dateFormatter.string(from: publicationStart)
            publicationStartForEditString = try publicationStart.toString()
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
        
        return try await NewspaperPageDTO(title: self.title, number: self.number, secondaryNumber: self.secondaryNumber, date: dateFormatter.string(from: self.date), dateForEdit: self.date.toString(), pages: self.pages, circulation: self.circulation, publicationStart: publicationStartString, publicationStartForEdit: publicationStartForEditString, website: self.website, ISSN: self.ISSN, photo: self.photoURL, thumbnail: self.thumbnailURL, URL: self.URL, color: self.color.toDTO, publicationType: self.publicationType.toDTO, frequency: self.frequency?.toDTO, city: self.$city.get(on: database).toDTO(database), language: self.$language.get(on: database).toDTO(database), paperFormat: self.$paperFormat.get(on: database)?.toDTO(database), frequencyTag: self.frequency?.tag(database), costs: costs, senders: senders, tags: tags)
    }
    
    func edit(_ request: Request) async throws {
        let form = try request.content.decode(NewspaperFormDTO.self)
        let senders = try await Self.getSenders(request)
        let tags = try await Self.getTags(request)
        
        let date = try Date(fromString: form.date)
        var pages: Int? = nil
        var circulation: Int? = nil
        var frequency: Frequency? = nil
        var publicationStart: Date? = nil
        var paperFormat: PaperFormat? = nil
        var number: String? = nil
        var secondaryNumber: String? = nil
        var website: String? = nil
        var ISSN: String? = nil
        
        guard let city = try await City.find(UUID(form.city), on: request.db) else { throw NewspaperError.unknownCity }
        guard let language = try await Language.find(UUID(form.language), on: request.db) else { throw NewspaperError.unknownLanguage }
        guard let color = PublicationColor(rawValue: form.color) else { throw NewspaperError.unknownColor }
        guard let publicationType = PublicationType(rawValue: form.publicationType) else { throw NewspaperError.unknownPublicationType }
        
        if let pagesString = form.pages { pages = Int(pagesString) }
        if let circulationString = form.circulation { circulation = Int(circulationString) }
        if let frequencyString = form.frequency { frequency = Frequency(rawValue: frequencyString) }
        if let publicationStartString = form.publicationStart, form.publicationStart != "" { try publicationStart = Date(fromString: publicationStartString) }
        if let paperFormatString = form.paperFormat { paperFormat = try await PaperFormat.find(UUID(paperFormatString), on: request.db) }
        if let numberString = form.number, form.number != "" { number = numberString }
        if let secondaryNumberString = form.secondaryNumber, form.secondaryNumber != "" { secondaryNumber = secondaryNumberString }
        if let websiteString = form.website, form.website != "" { website = websiteString }
        if let ISSNString = form.ISSN, form.ISSN != "" { ISSN = ISSNString }
        
        self.title = form.title
        self.publicationType = publicationType
        self.frequency = frequency
        self.circulation = circulation
        self.website = website
        self.ISSN = ISSN
        self.publicationStart = publicationStart
        self.number = number
        self.secondaryNumber = secondaryNumber
        self.date = date
        self.color = color
        self.pages = pages
        self.$city.id = try city.requireID()
        self.$language.id = try language.requireID()
        if let paperFormat { self.$paperFormat.id = try paperFormat.requireID() }
        
        
        if Bootstrap.stringToBool(form.isPhotoChanged) {
            let photo = try await Self.savePhoto(request, form: form)
            if let photo {
                self.photo = photo.filename
                self.thumbnail = try await Self.saveThumbnail(request, photo: photo).filename
            } else {
                self.photo = nil
                self.thumbnail = nil
            }
        }
        
        try await self.save(on: request.db)
        
        try await self.$senders.detachAll(on: request.db)
        try await self.$tags.detachAll(on: request.db)
        
        for sender in senders {
            try await self.$senders.attach(sender, on: request.db)
        }
        
        for tag in tags {
            try await self.$tags.attach(tag, on: request.db)
        }
    }
    
//    var photoFile: File {
//        
//    }
    
    func updateThumbnail(_ request: Request) async throws {
//        let photo = self.photoFile
//        self.thumbnail = try await Self.saveThumbnail(request, photo: photo).filename
//        _ = try await self.save(on: request.db)
    }
    
    static var pathToPhotos: String {
        return Bucket.pathToFiles + "/newspapers/originals/"
    }
    
    static var pathToThumbnails: String {
        return Bucket.pathToFiles + "/newspapers/thumbnails/"
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
    
    static func all(_ database: Database) async throws -> [NewspaperDTO] {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await Newspaper.query(on: database).sort(\.$date, .descending).all() {
            try await newspapers.append(newspaper.toDTO(database))
        }
        return newspapers
    }
    
    static func savePhoto(_ request: Request, form: NewspaperFormDTO) async throws -> File? {
        guard let photo = form.photo else { return nil }
        
        if photo.filename == "" { return nil }
        
        let path = request.application.directory.publicDirectory + Newspaper.pathToPhotos + photo.filename
        try await request.fileio.writeFile(photo.data, at: path)
        
        return photo
    }
    
    static func saveThumbnail(_ request: Request, photo: File) async throws -> File {
        let photoImage = try Image<RGBA, UInt8>(fileData: Data(buffer: photo.data))
        
        let maxSide = 522
        var width = maxSide
        var height = maxSide
        if photoImage.height > photoImage.width {
            width = (photoImage.width * maxSide) / photoImage.height
        } else {
            height = (photoImage.height * maxSide) / photoImage.width
        }
        let thumbnailImage = photoImage.resize(width: width, height: height)
        let thumbnail = try File(data: ByteBuffer(data: thumbnailImage.fileData()), filename: photo.filename)
        
        let path = request.application.directory.publicDirectory + Newspaper.pathToThumbnails + thumbnail.filename
        try await request.fileio.writeFile(thumbnail.data, at: path)
        
        return thumbnail
    }
    
    static func add(_ request: Request) async throws -> Newspaper {
        let form = try request.content.decode(NewspaperFormDTO.self)
        let senders = try await Self.getSenders(request)
        let tags = try await Self.getTags(request)
        
        let date = try Date(fromString: form.date)
        var pages: Int? = nil
        var circulation: Int? = nil
        var frequency: Frequency? = nil
        var publicationStart: Date? = nil
        var paperFormat: PaperFormat? = nil
        var thumbnail: File? = nil
        var number: String? = nil
        var secondaryNumber: String? = nil
        var website: String? = nil
        var ISSN: String? = nil
        
        guard let city = try await City.find(UUID(form.city), on: request.db) else { throw NewspaperError.unknownCity }
        guard let language = try await Language.find(UUID(form.language), on: request.db) else { throw NewspaperError.unknownLanguage }
        guard let color = PublicationColor(rawValue: form.color) else { throw NewspaperError.unknownColor }
        guard let publicationType = PublicationType(rawValue: form.publicationType) else { throw NewspaperError.unknownPublicationType }
        
        if let pagesString = form.pages { pages = Int(pagesString) }
        if let circulationString = form.circulation { circulation = Int(circulationString) }
        if let frequencyString = form.frequency { frequency = Frequency(rawValue: frequencyString) }
        if let publicationStartString = form.publicationStart, form.publicationStart != "" { try publicationStart = Date(fromString: publicationStartString) }
        if let paperFormatString = form.paperFormat { paperFormat = try await PaperFormat.find(UUID(paperFormatString), on: request.db) }
        if let numberString = form.number, form.number != "" { number = numberString }
        if let secondaryNumberString = form.secondaryNumber, form.secondaryNumber != "" { secondaryNumber = secondaryNumberString }
        if let websiteString = form.website, form.website != "" { website = websiteString }
        if let ISSNString = form.ISSN, form.ISSN != "" { ISSN = ISSNString }
        
        let photo = try await Self.savePhoto(request, form: form)
        if let photo { thumbnail = try await Self.saveThumbnail(request, photo: photo) }
        
        let newspaper = try Newspaper(request.db, title: form.title, publicationType: publicationType, frequency: frequency, circulation: circulation, website: website, ISSN: ISSN, publicationStart: publicationStart, photo: photo?.filename, thumbnail: thumbnail?.filename, number: number, secondaryNumber: secondaryNumber, date: date, color: color, pages: pages, city: city, paperFormat: paperFormat, language: language)
        try await newspaper.save(on: request.db)
        
        for sender in senders {
            try await newspaper.$senders.attach(sender, on: request.db)
        }
        
        for tag in tags {
            try await newspaper.$tags.attach(tag, on: request.db)
        }
        
        return newspaper
    }
    
    static func getSenders(_ request: Request) async throws -> [Sender] {
        var senders: [Sender] = []
        
        guard let bodyString = request.body.string else { throw NewspaperError.unknownSender }
        let bodyRows = bodyString.split(separator: "\r\n")
        
        for (index, row) in bodyRows.enumerated() {
            if row == "Content-Disposition: form-data; name=\"senders\"" {
                guard let sender = try await Sender.find(UUID(String(bodyRows[index + 1])), on: request.db) else { throw NewspaperError.unknownSender }
                senders.append(sender)
            }
        }
        
        return senders
    }
    
    static func getTags(_ request: Request) async throws -> [Tag] {
        var tags: [Tag] = []
        
        guard let bodyString = request.body.string else { throw NewspaperError.unknownTag }
        let bodyRows = bodyString.split(separator: "\r\n")
        
        for (index, row) in bodyRows.enumerated() {
            if row == "Content-Disposition: form-data; name=\"tags\"" {
                guard let tag = try await Tag.find(UUID(String(bodyRows[index + 1])), on: request.db) else { throw NewspaperError.unknownTag }
                tags.append(tag)
            }
        }
        
        return tags
    }
    
    static func updateAllThumbnails(_ request: Request) async throws {
        for newspaper in try await Newspaper.query(on: request.db).sort(\.$date, .descending).all() {
            try await newspaper.updateThumbnail(request)
        }
    }
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
    var date: String
    var dateForEdit: String
    var pages: Int?
    var circulation: Int?
    var publicationStart: String?
    var publicationStartForEdit: String?
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
}
