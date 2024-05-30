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
            var popularNewspapers: [Newspaper]
            var popularSenders: [Sender]
            var markers: [Marker]
        }
        
        let context = Context(
            popularNewspapers: try await Newspaper.popular(req.db),
            popularSenders: try await Sender.popular(req.db),
            markers: try await Marker.all(req.db)
        )
        
        return try await req.view.render("index", context)
    }
    
    app.get("about") { req async throws -> View in
        struct Context: Content {
            var author: Sender?
            var authorCity: City?
            var firstNewspaper: Newspaper?
        }
        
        let context = Context(
            author: try await Sender.query(on: req.db).filter(\.$name == "Boris Ovodov").first(),
            authorCity: try await City.query(on: req.db).filter(\.$name == "Yekaterinburg").first(),
            firstNewspaper: try await Newspaper.query(on: req.db).filter(\.$isFirst == true).first()
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
        let searchQuery = try req.query.decode(SearchQuery.self)
        return try await req.view.render("search", ["query": searchQuery.query])
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
            firstNewspaper: try await Newspaper.query(on: req.db).filter(\.$isFirst == true).first(),
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
