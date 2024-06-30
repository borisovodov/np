//
//  PaperFormat.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

final class PaperFormat: Model, @unchecked Sendable, Content {
    static let schema = "paperFormats"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Field(key: "height")
    /// Height in mm
    var height: Int
    
    @Field(key: "width")
    /// Width in mm
    var width: Int
    
    init() { }
    
    init(name: String, height: Int, width: Int) {
        self.id = UUID()
        self.name = name
        self.height = height
        self.width = width
    }
    
    func tag(_ database: Database) async throws -> Tag? {
        return try await Tag.query(on: database).filter(\.$tagType == .paperFormat).filter(\.$name == self.name).first()
    }
    
    func toDTO(_ database: Database) async throws -> PaperFormatDTO {
        return try await PaperFormatDTO(name: self.name, URL: self.tag(database)?.URL ?? "")
    }
    
    static func all(_ database: Database) async throws -> [PaperFormatDTO] {
        var paperFormats: [PaperFormatDTO] = []
        for paperFormat in try await PaperFormat.query(on: database).sort(\.$name).all() {
            try await paperFormats.append(paperFormat.toDTO(database))
        }
        return paperFormats
    }
}

extension PaperFormat: CustomStringConvertible {
    var description: String {
        return "\(self.name) (\(self.height)×\(self.width))"
    }
}

struct PaperFormatDTO: Content {
    var name: String
    var URL: String
}
