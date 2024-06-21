import Fluent

struct CreateDB: AsyncMigration {
    func prepare(on database: Database) async throws {
        let continent = try await database.enum("continent")
            .case("africa")
            .case("antarctica")
            .case("asia")
            .case("australiaAndOceania")
            .case("europe")
            .case("northAmerica")
            .case("southAmerica")
            .create()
        
        let publicationColor = try await database.enum("publicationColor")
            .case("monochrome")
            .case("bicolor")
            .case("multicolor")
            .create()
        
        let publicationType = try await database.enum("publicationType")
            .case("newspaper")
            .case("magazine")
            .case("brochure")
            .create()
        
        let frequency = try await database.enum("frequency")
            .case("daily")
            .case("weekly")
            .case("weeklies")
            .case("biweekly")
            .case("monthly")
            .case("bimonthly")
            .create()
        
        let tagTypes = try await database.enum("tagtype")
            .case("continent")
            .case("frequency")
            .case("paperFormat")
            .case("year")
            .case("color")
            .case("publicationType")
            .case("other")
            .create()
        
        try await database.schema("achievements")
            .id()
            .field("name", .string, .required)
            .create()
        
        try await database.schema("languages")
            .id()
            .field("name", .string, .required)
            .create()
        
        try await database.schema("countries")
            .id()
            .field("name", .string, .required)
            .field("emoji", .string)
            .field("markerIcon", .string)
            .create()
        
        try await database.schema("cities")
            .id()
            .field("name", .string, .required)
            .field("population", .int, .required)
            .field("continent", continent, .required)
            .field("isCoastal", .bool, .required)
            .field("elevation", .int, .required)
            .field("latitude", .float, .required)
            .field("longitude", .float, .required)
            .field("manualLocation", .bool, .required)
            .field("countryID", .uuid, .required, .references("countries", "id", onDelete: .restrict))
            .create()
        
        try await database.schema("senders")
            .id()
            .field("name", .string, .required)
            .field("avatar", .string)
            .create()
        
        try await database.schema("sender-achievement-pivot")
            .id()
            .field("senderID", .uuid, .required, .references("senders", "id", onDelete: .restrict))
            .field("achievementID", .uuid, .required, .references("achievements", "id", onDelete: .restrict))
            .create()
        
        try await database.schema("paperFormats")
            .id()
            .field("name", .string, .required)
            .field("height", .int, .required)
            .field("width", .int, .required)
            .create()
        
        try await database.schema("tags")
            .id()
            .field("name", .string, .required)
            .field("tagType", tagTypes, .required)
            .create()
        
        try await database.schema("newspapers")
            .id()
            .field("title", .string, .required)
            .field("publicationType", publicationType, .required)
            .field("frequency", frequency)
            .field("circulation", .int)
            .field("website", .string)
            .field("ISSN", .string)
            .field("publicationStart", .date)
            .field("photo", .string)
            .field("thumbnail", .string)
            .field("number", .string)
            .field("secondaryNumber", .string)
            .field("date", .date, .required)
            .field("color", publicationColor, .required)
            .field("pages", .int)
            .field("isTop", .bool, .required)
            .field("cityID", .uuid, .required, .references("cities", "id", onDelete: .restrict))
            .field("paperformatID", .uuid, .references("paperFormats", "id", onDelete: .restrict))
            .field("languageID", .uuid, .required, .references("languages", "id", onDelete: .restrict))
            .create()
        
        try await database.schema("newspaper-sender-pivot")
            .id()
            .field("newspaperID", .uuid, .required, .references("newspapers", "id", onDelete: .restrict))
            .field("senderID", .uuid, .required, .references("senders", "id", onDelete: .restrict))
            .create()
        
        try await database.schema("newspaper-tag-pivot")
            .id()
            .field("newspaperID", .uuid, .required, .references("newspapers", "id", onDelete: .restrict))
            .field("tagID", .uuid, .required, .references("tags", "id", onDelete: .restrict))
            .create()
        
        try await database.schema("currencies")
            .id()
            .field("name", .string, .required)
            .field("symbol", .string, .required)
            .field("code", .string, .required)
            .field("isSymbolLeftFromValue", .bool, .required)
            .create()
        
        try await database.schema("costs")
            .id()
            .field("value", .float, .required)
            .field("currencyID", .uuid, .required, .references("currencies", "id", onDelete: .restrict))
            .field("newspaperID", .uuid, .required, .references("newspapers", "id", onDelete: .restrict))
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("achievements").delete()
        try await database.schema("languages").delete()
        try await database.schema("countries").delete()
        try await database.schema("cities").delete()
        try await database.schema("senders").delete()
        try await database.schema("paperFormats").delete()
        try await database.schema("tags").delete()
        try await database.schema("newspapers").delete()
        try await database.schema("currencies").delete()
        try await database.schema("costs").delete()
    }
}
