//
//  Newspaper.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
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
    
    @Siblings(through: NewspaperSenderPivot.self, from: \.$newspaper, to: \.$sender)
    var senders: [Sender]
    
    @Siblings(through: NewspaperTagPivot.self, from: \.$newspaper, to: \.$tag)
    var tags: [Tag]
    
    init() { }
    
    var URL: String {
        return "/newspapers/\(self.id ?? UUID())"
    }
    
    static func popular(_ database: Database) async throws -> [Newspaper] {
        return try await Newspaper.query(on: database)
            .filter(\.$isTop == true)
            .sort(\.$date, .descending)
            .all()
    }
    
    
//    var costs: [Cost] {
//        return Cost.objects.filter(newspaper=self)
//    }

//    var isPravda: Bool {
//        return 'правда' in self.title.lower()
//    }

//    var isMetro: Bool {
//        return 'metro' in self.title.lower()
//    }

//    var isNotOfficialLanguage: Bool {
//        return self.language not in self.city.country.languages.all()
//    }

//    var frequencyTag: Tag {
//        tag, created = Tag.objects.get_or_create(name=self.frequency)
//        tag.save()
//        return tag
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
