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
        newspapers.post(use: self.create)
        
        newspapers.group(":newspaperID") { newspaper in
            newspaper.get(use: self.getObject)
            newspaper.delete(use: self.delete)
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
        
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(newspaper: newspaper.toPageDTO(req.db), markers: newspaper.markers(req.db))
        
        return try await req.view.render("newspaper", context)
    }

    @Sendable
    func create(req: Request) async throws -> Newspaper {
        let newspaper = try req.content.decode(Newspaper.self)

        try await newspaper.save(on: req.db)
        return newspaper
    }

    @Sendable
    func delete(req: Request) async throws -> HTTPStatus {
        guard let newspaper = try await Newspaper.find(req.parameters.get("newspaperID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await newspaper.delete(on: req.db)
        return .noContent
    }
}
