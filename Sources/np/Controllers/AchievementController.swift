//
//  AchievementController.swift
//  
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct AchievementController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let achievements = routes.grouped("achievements")

        achievements.get(use: self.getList)
        achievements.post(use: self.create)
        
        achievements.group(":achievementID") { achievement in
            achievement.get(use: self.getObject)
            achievement.delete(use: self.delete)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        return try await req.view.render("achievements", ["achievements": Achievement.query(on: req.db).sort(\.$name).all().map({ $0.toDTO })])
    }
    
    @Sendable
    func getObject(req: Request) async throws -> View {
        struct Context: Content {
            var achievement: AchievementPageDTO
        }
        
        guard let achievement = try await Achievement.find(req.parameters.get("achievementID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = Context(achievement: try await achievement.toPageDTO(req.db))
        
        return try await req.view.render("achievement", context)
    }

    @Sendable
    func create(req: Request) async throws -> Achievement {
        let achievement = try req.content.decode(Achievement.self)

        try await achievement.save(on: req.db)
        return achievement
    }

    @Sendable
    func delete(req: Request) async throws -> HTTPStatus {
        guard let achievement = try await Achievement.find(req.parameters.get("achievementID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await achievement.delete(on: req.db)
        return .noContent
    }
}
