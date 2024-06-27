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
        
        tags.group(":tagID") { tag in
            tag.get(use: self.getObject)
        }
        
        tags.group(":tagID", "edit") { tag in
            tag.get(use: self.getEditForm)
            tag.post(use: self.edit)
        }
        
        tags.group(":tagID", "delete") { tag in
            tag.get(use: self.delete)
        }
        
        tags.group("add") { tag in
            tag.get(use: self.getAddForm)
            tag.post(use: self.add)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        var tags: [TagDTO] = []
        for tag in try await Tag.query(on: req.db).sort(\.$name).all() {
            try await tags.append(tag.toDTO(req.db))
        }
        
        return try await req.view.render("tags", ["tags": tags])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var tag: TagPageDTO
            var markers: [Marker]
        }
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(tag: tag.toPageDTO(req.db), markers: tag.markers(req.db))
        
        return try await req.view.render("tag", context)
    }
    
    @Sendable
    func getAddForm(req: Request) async throws -> View {
        return try await req.view.render("tag_add")
    }

    @Sendable
    func add(req: Request) async throws -> View {
        let tag = try await Tag.add(req)
        
        guard let id = tag.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/tags/\(id)")
    }
    
    @Sendable
    func getEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var tag: TagPageDTO
        }
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(tag: tag.toPageDTO(req.db))
        return try await req.view.render("tag_edit", context)
    }
    
    @Sendable
    func edit(req: Request) async throws -> View {
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else { throw Abort(.notFound) }
        
        try await tag.edit(req)
        
        guard let id = tag.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/tags/\(id)")
    }

    @Sendable
    func delete(req: Request) async throws -> View {
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else { throw Abort(.notFound) }

        try await tag.delete(on: req.db)
        
        throw Abort.redirect(to: "/tags")
    }
}
