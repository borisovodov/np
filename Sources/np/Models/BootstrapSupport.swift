//
//  GeneralMethods.swift
//  
//
//  Created by Boris Ovodov on 24.06.2024.
//

struct Bootstrap {
    static func stringToBool(_ boolString: String?) -> Bool {
        guard let _ = boolString else { return false }
        return true
    }
}
