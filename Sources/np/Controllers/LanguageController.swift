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
        
        languages.group(":languageID") { language in
            language.get(use: self.getObject)
        }
        
        languages.group(":languageID", "edit") { language in
            language.get(use: self.getEditForm)
            language.post(use: self.edit)
        }
        
        languages.group(":languageID", "delete") { language in
            language.get(use: self.delete)
        }
        
        languages.group("add") { language in
            language.get(use: self.getAddForm)
            language.post(use: self.add)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        var languages: [LanguageDTO] = []
        for language in try await Language.query(on: req.db).sort(\.$name).all() {
            try await languages.append(language.toDTO(req.db))
        }
        return try await req.view.render("languages", ["languages": languages])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var language: LanguagePageDTO
            var markers: [Marker]
        }
        
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(language: language.toPageDTO(req.db), markers: language.markers(req.db))
        
        return try await req.view.render("language", context)
    }

    @Sendable
    func getAddForm(req: Request) async throws -> View {
        return try await req.view.render("language_add")
    }

    @Sendable
    func add(req: Request) async throws -> View {
        let language = try await Language.add(req)
        
        guard let id = language.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/languages/\(id)")
    }
    
    @Sendable
    func getEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var language: LanguagePageDTO
        }
        
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(language: language.toPageDTO(req.db))
        return try await req.view.render("language_edit", context)
    }
    
    @Sendable
    func edit(req: Request) async throws -> View {
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else { throw Abort(.notFound) }
        
        try await language.edit(req)
        
        guard let id = language.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/languages/\(id)")
    }

    @Sendable
    func delete(req: Request) async throws -> View {
        guard let language = try await Language.find(req.parameters.get("languageID"), on: req.db) else { throw Abort(.notFound) }

        try await language.delete(on: req.db)
        
        throw Abort.redirect(to: "/languages")
    }
}
