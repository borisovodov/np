//
//  ModelDTOs.swift
//
//
//  Created by Boris Ovodov on 23.05.2024.
//

import Foundation
import Vapor

struct TagDTO: Content {
    var id: UUID?
    var name: String
    var newspapers: [Newspaper]
    
//    id, name, newspapers, newspapers.count
}
