//
//  SearchQuery.swift
//
//
//  Created by Boris Ovodov on 21.05.2024.
//

import Fluent
import Vapor

struct SearchQuery: Content {
    var query: String?
}
