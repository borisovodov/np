//
//  CostDTO.swift
//  
//
//  Created by Boris Ovodov on 23.06.2024.
//

import Vapor

struct CostDTO: Content {
    var value: String
    var currency: String
}
