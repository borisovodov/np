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
        
        tags.group(":tagID", "edit") { tag in
            tag.get(use: self.getEditForm)
            tag.patch(use: self.edit)
        }
        
        tags.group("create") { tag in
            tag.get(use: self.getCreateForm)
            tag.post(use: self.create)
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
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(tag: tag.toPageDTO(req.db), markers: tag.markers(req.db))
        
        return try await req.view.render("tag", context)
    }
    
    @Sendable
    func getCreateForm(req: Request) async throws -> View {
        req.logger.debug("Открываю форму создания тэга")
        return try await req.view.render("tag_create")
    }

    @Sendable
    func create(req: Request) async throws -> View {
        req.logger.debug("Начинаю создавать тэг")
        req.logger.debug("Инициализирую содержимое тэга из URL")
        let tagForm = try req.content.decode(TagFormDTO.self)
        
        req.logger.debug("Пытаюсь создать тэг")
        let tag = try await Tag.create(req.db, tag: tagForm)
        
        guard let id = tag.id else {
            req.logger.debug("Не могу найти только что созданный тэг")
            throw Abort(.notFound)
        }
        req.logger.debug("Делаю редирект на страницу созданного тэга")
        throw Abort.redirect(to: "\(id)")
    }
    
    @Sendable
    func getEditForm(req: Request) async throws -> View {
        req.logger.debug("Открываю форму редактирования тэга")
        struct Context: Content {
            var tag: TagPageDTO
        }
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(tag: tag.toPageDTO(req.db))
        return try await req.view.render("tag_edit", context)
    }
    
    @Sendable
    func edit(req: Request) async throws -> View {
        req.logger.debug("Начинаю редактировать тэг")
        let tagForm = try req.content.decode(TagFormDTO.self)
        
        guard let tag = try await Tag.find(req.parameters.get("tagID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        try await tag.update(req.db, properties: tagForm)
        
        guard let id = tag.id else {
            throw Abort(.notFound)
        }
        
        throw Abort.redirect(to: "\(id)")
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
