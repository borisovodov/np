import Fluent
import Vapor

extension Array {
    var dividedByColumns: [[Element]] {
        return stride(from: 0, to: count, by: 4).map {
            Array(self[$0 ..< Swift.min($0 + 4, count)])
        }
    }
}

enum RouteError: Error {
    case invalidFirstNewspaperReleaseDate
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
            var author: Sender?
            var authorCity: City?
            var firstNewspaper: Newspaper?
            var firstSender: Sender?
            var firstCountry: Country?
        }
        
        guard let firstNewspaperReleaseDate = Calendar.current.date(from: DateComponents(year: 2012, month: 1, day: 13)) else {
            throw RouteError.invalidFirstNewspaperReleaseDate
        }
        
        let context = Context(
            author: try await Sender.query(on: req.db).filter(\.$name == "Boris Ovodov").first(),
            authorCity: try await City.query(on: req.db).filter(\.$name == "Yekaterinburg").first(),
            firstNewspaper: try await Newspaper.query(on: req.db).filter(\.$title == "体坛周报").filter(\.$date == firstNewspaperReleaseDate).first(),
            firstSender: try await Sender.query(on: req.db).filter(\.$name == "Sasha Ovodova").first(),
            firstCountry: try await Country.query(on: req.db).filter(\.$name == "China").first()
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
            var countryWithMaxNumberOfNewspapers: Country?
            var numberOfLanguages: Int
            var languageWithMaxNumberOfNewspapers: Language?
            var numberOfContinents: Int
            var continents: Set<Tag>
            var continentWithMaxNumberOfNewspapers: Tag?
            var northernmostCity: City?
            var southernmostCity: City?
            var westernmostCity: City?
            var easternmostCity: City?
            var numberOfSenders: Int
            var senderWithMaxNumberOfCities: Sender?
            var firstNewspaper: Newspaper?
            var lastNewspaper: Newspaper?
        }
        
        // TODO: с континентами, языками, странами и отправителями нужно будет разобраться в части работы с сетами и массивами. Сейчас всё косячно. https://docs.vapor.codes/fluent/query/
        var continents: Set<Tag> = []
        for continent in try await City.query(on: req.db).all().map({ $0.continent }) {
            if let tag = try await continent.tag(req.db) { continents.insert(tag) }
        }
        
        let languages = try await Newspaper.query(on: req.db)
            .all()
            .map{ $0.language }
            .sorted { $0.newspapers.count > $1.newspapers.count }
        
        let countries: Set<Country> = []
        
        let senders: Set<Sender> = []
        
        guard let firstNewspaperReleaseDate = Calendar.current.date(from: DateComponents(year: 2012, month: 1, day: 13)) else {
            throw RouteError.invalidFirstNewspaperReleaseDate
        }
        
        let context = Context(
            numberOfNewspapers: try await Newspaper.query(on: req.db).count(),
            numberOfCountries: try await Country.query(on: req.db).count(),
            numberOfCities: try await City.query(on: req.db).count(),
            countryWithMaxNumberOfNewspapers: countries.first,
            numberOfLanguages: Set(languages).count,
            languageWithMaxNumberOfNewspapers: languages.first,
            numberOfContinents: continents.count,
            continents: continents,
            continentWithMaxNumberOfNewspapers: continents.first,
            northernmostCity: try await City.query(on: req.db).sort(\.$latitude, .descending).first(),
            southernmostCity: try await City.query(on: req.db).sort(\.$latitude, .ascending).first(),
            westernmostCity: try await City.query(on: req.db).sort(\.$latitude, .ascending).first(),
            easternmostCity: try await City.query(on: req.db).sort(\.$latitude, .descending).first(),
            numberOfSenders: try await Sender.query(on: req.db).count(),
            senderWithMaxNumberOfCities: senders.first,
            firstNewspaper: try await Newspaper.query(on: req.db).filter(\.$title == "体坛周报").filter(\.$date == firstNewspaperReleaseDate).first(),
            lastNewspaper: try await Newspaper.query(on: req.db).sort(\.$date, .descending).first()
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
