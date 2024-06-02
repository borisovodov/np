//
//  TagController.swift
//
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct TagController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let tags = routes.grouped("tags")

        tags.get(use: self.getList)
        tags.post(use: self.create)
        
        tags.group(":tagID") { tag in
            tag.get(use: self.getObject)
            tag.delete(use: self.delete)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        return try await req.view.render("tags", ["tags": Tag.query(on: req.db).sort(\.$name).all()])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var tag: Tag
            var markers: [Marker]
        }
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = Context(
            tag: tag,
            // TODO: вот тут нужно возвращать не все
            markers: try await Marker.all(req.db)
        )
        
        return try await req.view.render("tag", context)
    }

    @Sendable
    func create(req: Request) async throws -> Tag {
        let tag = try req.content.decode(Tag.self)

        try await tag.save(on: req.db)
        return tag
    }

    @Sendable
    func delete(req: Request) async throws -> HTTPStatus {
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await tag.delete(on: req.db)
        return .noContent
    }
}
