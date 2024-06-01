//
//  PaperFormat.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation
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
}

extension PaperFormat: CustomStringConvertible {
    var description: String {
        return "\(self.name) (\(self.height)×\(self.width))"
    }
}
