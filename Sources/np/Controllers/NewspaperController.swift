//
//  NewspaperController.swift
//  
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct NewspaperController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let newspapers = routes.grouped("newspapers")

        newspapers.get(use: self.getList)
        
        newspapers.group(":newspaperID") { newspaper in
            newspaper.get(use: self.getObject)
        }

        newspapers.group(":newspaperID", "edit") { newspaper in
            newspaper.get(use: self.getEditForm)
            newspaper.post(use: self.edit)
        }

        newspapers.group(":newspaperID", "delete") { newspaper in
            newspaper.get(use: self.delete)
        }

        newspapers.group("add") { newspaper in
            newspaper.get(use: self.getAddForm)
            newspaper.post(use: self.add)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        var newspapers: [NewspaperDTO] = []
        for newspaper in try await Newspaper.query(on: req.db).sort(\.$date, .descending).all() {
            try await newspapers.append(newspaper.toDTO(req.db))
        }
        
        return try await req.view.render("newspapers", ["newspapers": newspapers])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var newspaper: NewspaperPageDTO
            var markers: [Marker]
        }
        
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(newspaper: newspaper.toPageDTO(req.db), markers: newspaper.markers(req.db))
        
        return try await req.view.render("newspaper", context)
    }

    @Sendable
    func getAddForm(req: Request) async throws -> View {
        struct Context: Content {
            var cities: [CityDTO]
            var languages: [LanguageDTO]
            var colors: [PublicationColorDTO]
            var paperFormats: [PaperFormatDTO]
            var publicationTypes: [PublicationTypeDTO]
            var frequencies: [FrequencyDTO]
        }
        
        let context = try await Context(cities: City.all(req.db), languages: Language.all(req.db), colors: PublicationColor.all, paperFormats: PaperFormat.all(req.db), publicationTypes: PublicationType.all, frequencies: Frequency.all)
        
        return try await req.view.render("newspaper_add", context)
    }

    @Sendable
    func add(req: Request) async throws -> View {
        let newspaper = try await Newspaper.add(req)
        
        guard let id = newspaper.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/newspapers/\(id)")
    }

    @Sendable
    func getEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var newspaper: NewspaperPageDTO
            var cities: [CityDTO]
            var languages: [LanguageDTO]
            var colors: [PublicationColorDTO]
            var paperFormats: [PaperFormatDTO]
            var publicationTypes: [PublicationTypeDTO]
            var frequencies: [FrequencyDTO]
        }
        
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(newspaper: newspaper.toPageDTO(req.db), cities: City.all(req.db), languages: Language.all(req.db), colors: PublicationColor.all, paperFormats: PaperFormat.all(req.db), publicationTypes: PublicationType.all, frequencies: Frequency.all)
        return try await req.view.render("newspaper_edit", context)
    }
    
    @Sendable
    func edit(req: Request) async throws -> View {
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else { throw Abort(.notFound) }
        
        try await newspaper.edit(req)
        
        guard let id = newspaper.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/newspapers/\(id)")
    }

    @Sendable
    func delete(req: Request) async throws -> View {
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else { throw Abort(.notFound) }

        try await newspaper.delete(on: req.db)
        
        throw Abort.redirect(to: "/newspapers")
    }
}
