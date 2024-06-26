//
//  SenderController.swift
//  
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct SenderController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let senders = routes.grouped("senders")

        senders.get(use: self.getList)
        
        senders.group(":senderID") { sender in
            sender.get(use: self.getObject)
        }
        
        senders.group(":senderID", "edit") { sender in
            sender.get(use: self.getEditForm)
            sender.post(use: self.edit)
        }
        
        senders.group(":senderID", "delete") { sender in
            sender.get(use: self.delete)
        }
        
        senders.group("add") { sender in
            sender.get(use: self.getAddForm)
            sender.post(use: self.add)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        var senders: [SenderDTO] = []
        for sender in try await Sender.query(on: req.db).sort(\.$name).all() {
            try await senders.append(sender.toDTO(req.db))
        }
        
        return try await req.view.render("senders", ["senders": senders])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var sender: SenderPageDTO
            var markers: [Marker]
        }
        
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(sender: sender.toPageDTO(req.db), markers: sender.markers(req.db))
        
        return try await req.view.render("sender", context)
    }
    
    @Sendable
    func getAddForm(req: Request) async throws -> View {
        return try await req.view.render("sender_add")
    }

    @Sendable
    func add(req: Request) async throws -> View {
        let sender = try await Sender.add(req)
        
        guard let id = sender.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/senders/\(id)")
    }
    
    @Sendable
    func getEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var sender: SenderPageDTO
        }
        
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(sender: sender.toPageDTO(req.db))
        return try await req.view.render("sender_edit", context)
    }
    
    @Sendable
    func edit(req: Request) async throws -> View {
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else { throw Abort(.notFound) }
        
        try await sender.edit(req)
        
        guard let id = sender.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/senders/\(id)")
    }
    
    @Sendable
    func delete(req: Request) async throws -> View {
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else { throw Abort(.notFound) }

        try await sender.delete(on: req.db)
        
        throw Abort.redirect(to: "/senders")
    }
}
