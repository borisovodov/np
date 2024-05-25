//
//  LanguageController.swift
//  
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct LanguageController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let languages = routes.grouped("languages")

        languages.get(use: self.getList)
        languages.post(use: self.create)
        
        languages.group(":languageID") { language in
            language.get(use: self.getObject)
            language.delete(use: self.delete)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        let languages = try await Language.query(on: req.db)
            .sort(\.$name)
            .all()
        
        return try await req.view.render("languages", ["languages": languages.dividedByColumns])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var language: Language
        }
        
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = Context(
            language: language
        )
        
        return try await req.view.render("language", context)
    }

    @Sendable
    func create(req: Request) async throws -> Language {
        let language = try req.content.decode(Language.self)

        try await language.save(on: req.db)
        return language
    }

    @Sendable
    func delete(req: Request) async throws -> HTTPStatus {
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await language.delete(on: req.db)
        return .noContent
    }
}
