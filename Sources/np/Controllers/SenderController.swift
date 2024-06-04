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
        senders.post(use: self.create)
        
        senders.group(":senderID") { sender in
            sender.get(use: self.getObject)
            sender.delete(use: self.delete)
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
        
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(sender: sender.toPageDTO(req.db), markers: sender.markers(req.db))
        
        return try await req.view.render("sender", context)
    }

    @Sendable
    func create(req: Request) async throws -> Sender {
        let sender = try req.content.decode(Sender.self)

        try await sender.save(on: req.db)
        return sender
    }

    @Sendable
    func delete(req: Request) async throws -> HTTPStatus {
        guard let sender = try await Sender.find(req.parameters.get("senderID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await sender.delete(on: req.db)
        return .noContent
    }
}
