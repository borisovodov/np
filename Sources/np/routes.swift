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
            var popularNewspapers: [[Newspaper]]
            var popularSenders: [[Sender]]
            var markers: [Marker]
        }
        
//        let lang = Language(name: "Chinese", population: 121322)
//        let country = Country(name: "China", population: 21324, officialLanguages: [lang])
//        try await lang.create(on: req.db)
//        try await country.create(on: req.db)
        
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
            var achievements: [[Achievement]]
            var cities: [[City]]
            var countries: [[Country]]
            var languages: [[Language]]
            var senders: [[Sender]]
            var tags: [[Tag]]
            var newspapers: [[Newspaper]]
        }
        
        let query = try req.query.decode(SearchQuery.self).query ?? ""
        
        let context = Context(
            query: query,
            achievements: try await Achievement.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            cities: try await City.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            countries: try await Country.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            languages: try await Language.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            senders: try await Sender.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            tags: try await Tag.query(on: req.db).filter(\.$name ~~ query).all().dividedByColumns,
            newspapers: try await Newspaper.query(on: req.db).group(.or) { group in
                group.filter(\.$title ~~ query).filter(\.$number ~~ query).filter(\.$secondaryNumber ~~ query).filter(\.$website ~~ query).filter(\.$ISSN ~~ query)
            }.all().dividedByColumns
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
