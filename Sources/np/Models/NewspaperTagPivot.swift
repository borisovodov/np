//
//  NewspaperTagPivot.swift
//  
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Foundation

final class NewspaperTagPivot: Model, @unchecked Sendable {
    static let schema = "newspaper-tag-pivot"
    
    @ID(key: .id)
    var id: UUID?
    
    @Parent(key: "newspaperID")
    var newspaper: Newspaper
    
    @Parent(key: "tagID")
    var tag: Tag
    
    init() { }
}
