import Fluent
import Vapor

extension Array {
    var dividedByColumns: [[Element]] {
        return stride(from: 0, to: count, by: 4).map {
            Array(self[$0 ..< Swift.min($0 + 4, count)])
        }
    }
}

func routes(_ app: Application) throws {
    app.get { req async throws -> View in
        struct Context: Content {
            var popularNewspapers: [[NewspaperDTO]]
            var popularSenders: [[SenderDTO]]
            var markers: [Marker]
        }
        
//        let lang = Language(name: "Chinese", population: 121322)
//        let country = Country(name: "China2", population: 21324, officialLanguages: [lang])
//        let achiv = Achievement(name: "achTest")
//        let tag = Tag(name: "tagTest")
//        let city = try City(name: "Beijing", country: country, population: 86876, continent: .asia, isCoastal: false, elevation: 200, latitude: 39.9042, longitude: 116.4074, manualLocation: true)
//        let sender = Sender(name: "boris", isWoman: false, avatar: "avatarURL")
//        let paperFormat = PaperFormat(name: "just pf", height: 100, width: 200)
//        let newspaper = try Newspaper(title: "newspaper1", publicationType: .newspaper, frequency: .daily, circulation: 12323, website: "ovodov.me", ISSN: "897-876", publicationStart: Date(timeIntervalSince1970: 100), photo: "photo", thumbnail: "thumbnail", number: "12", secondaryNumber: "89778", date: .now, color: .monochrome, pages: 12, city: city, paperFormat: paperFormat, language: lang, senders: [sender], tags: [tag])
//        try await lang.create(on: req.db)
//        try await country.create(on: req.db)
//        try await achiv.create(on: req.db)
//        try await tag.create(on: req.db)
//        try await city.create(on: req.db)
//        try await sender.create(on: req.db)
//        try await paperFormat.create(on: req.db)
//        try await newspaper.create(on: req.db)
        
        let context = Context(
            popularNewspapers: try await Newspaper.popular(req.db).dividedByColumns,
            popularSenders: try await Sender.popular(req.db).dividedByColumns,
            markers: try await Marker.all(req.db)
        )
        
        return try await req.view.render("index", context)
    }
    
    app.get("about") { req async throws -> View in
        struct Context: Content {
            var author: SenderDTO?
            var authorCity: CityDTO?
            var firstNewspaper: NewspaperDTO?
            var firstSender: SenderDTO?
            var firstCountry: CountryDTO?
        }
        
        let context = Context(
            author: try await Sender.author(req.db)?.toDTO(req.db),
            authorCity: try await City.authorFrom(req.db)?.toDTO(req.db),
            firstNewspaper: try await Newspaper.first(req.db)?.toDTO(req.db),
            firstSender: try await Sender.first(req.db)?.toDTO(req.db),
            firstCountry: try await Country.firstNewspaperFrom(req.db)?.toDTO(req.db)
        )
        
        return try await req.view.render("about", context)
    }
    
    app.get("map") { req async throws -> View in
        struct Context: Content {
            var markers: [Marker]
        }
        
        let context = Context(
            markers: try await Marker.all(req.db)
        )
        
        return try await req.view.render("map", context)
    }
    
    app.get("search") { req async throws -> View in
        struct Context: Content {
            var query: String?
            var achievements: [[AchievementDTO]]
            var cities: [[CityDTO]]
            var countries: [[CountryDTO]]
            var languages: [[LanguageDTO]]
            var senders: [[SenderDTO]]
            var tags: [[TagDTO]]
            var newspapers: [[NewspaperDTO]]
        }
        
        let query = try req.query.decode(SearchQuery.self).query ?? ""
        var cities: [CityDTO] = []
        var countries: [CountryDTO] = []
        var languages: [LanguageDTO] = []
        var newspapers: [NewspaperDTO] = []
        var senders: [SenderDTO] = []
        var tags: [TagDTO] = []
        
        for city in try await City.query(on: req.db).filter(\.$name ~~ query).all() {
            try await cities.append(city.toDTO(req.db))
        }
        for country in try await Country.query(on: req.db).filter(\.$name ~~ query).all() {
            try await countries.append(country.toDTO(req.db))
        }
        for language in try await Language.query(on: req.db).filter(\.$name ~~ query).all() {
            try await languages.append(language.toDTO(req.db))
        }
        for newspaper in try await Newspaper.query(on: req.db).group(.or, { group in
            group.filter(\.$title ~~ query).filter(\.$number ~~ query).filter(\.$secondaryNumber ~~ query).filter(\.$website ~~ query).filter(\.$ISSN ~~ query)
        }).all() {
            try await newspapers.append(newspaper.toDTO(req.db))
        }
        for sender in try await Sender.query(on: req.db).filter(\.$name ~~ query).all() {
            try await senders.append(sender.toDTO(req.db))
        }
        for tag in try await Tag.query(on: req.db).filter(\.$name ~~ query).all() {
            try await tags.append(tag.toDTO(req.db))
        }
        
        let context = Context(
            query: query,
            achievements: try await Achievement.query(on: req.db).filter(\.$name ~~ query).all().map({ $0.toDTO }).dividedByColumns,
            cities: cities.dividedByColumns,
            countries: countries.dividedByColumns,
            languages: languages.dividedByColumns,
            senders: senders.dividedByColumns,
            tags: tags.dividedByColumns,
            newspapers: newspapers.dividedByColumns
        )
        
        return try await req.view.render("search", context)
    }
    
    app.get("statistics") { req async throws -> View in
        struct Context: Content {
            var numberOfNewspapers: Int
            var numberOfCountries: Int
            var numberOfCities: Int
            var countryWithMaxNumberOfNewspapers: CountryDTO?
            var numberOfLanguages: Int
            var languageWithMaxNumberOfNewspapers: LanguageDTO?
            var numberOfContinents: Int
            var continents: [TagDTO]
            var continentWithMaxNumberOfNewspapers: TagDTO?
            var northernmostCity: CityPageDTO?
            var southernmostCity: CityPageDTO?
            var westernmostCity: CityPageDTO?
            var easternmostCity: CityPageDTO?
            var numberOfSenders: Int
            var senderWithMaxNumberOfCities: SenderDTO?
            var firstNewspaper: NewspaperPageDTO?
            var lastNewspaper: NewspaperPageDTO?
        }
        
        let context = Context(
            numberOfNewspapers: try await Newspaper.query(on: req.db).count(),
            numberOfCountries: try await Country.query(on: req.db).count(),
            numberOfCities: try await City.query(on: req.db).count(),
            countryWithMaxNumberOfNewspapers: try await Country.popular(req.db).first,
            numberOfLanguages: try await Language.popular(req.db).count,
            languageWithMaxNumberOfNewspapers: try await Language.popular(req.db).first,
            numberOfContinents: try await Tag.continents(req.db).count,
            continents: try await Tag.continents(req.db),
            continentWithMaxNumberOfNewspapers: try await Tag.continents(req.db).first,
            northernmostCity: try await City.northernmost(req.db)?.toPageDTO(req.db),
            southernmostCity: try await City.southernmost(req.db)?.toPageDTO(req.db),
            westernmostCity: try await City.westernmost(req.db)?.toPageDTO(req.db),
            easternmostCity: try await City.easternmost(req.db)?.toPageDTO(req.db),
            numberOfSenders: try await Sender.query(on: req.db).count(),
            senderWithMaxNumberOfCities: try await Sender.popular(req.db).first,
            firstNewspaper: try await Newspaper.first(req.db)?.toPageDTO(req.db),
            lastNewspaper: try await Newspaper.last(req.db)?.toPageDTO(req.db)
        )
        
        return try await req.view.render("statistics", context)
    }

    try app.register(collection: AchievementController())
    try app.register(collection: CountryController())
    try app.register(collection: LanguageController())
    try app.register(collection: NewspaperController())
    try app.register(collection: SenderController())
    try app.register(collection: TagController())
}
