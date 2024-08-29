//
//  DateExtension.swift
//
//
//  Created by Boris Ovodov on 27.08.2024.
//

import Foundation

enum DateError: Error {
    case incorrectString
    case incorrectYear
    case incorrectMonth
    case incorrectDay
    case incorrectDate
    case dateToStringError
}

extension Date {
    func toString() throws -> String {
        let components = Calendar.current.dateComponents([.year, .month, .day], from: self)
        guard let year = components.year else { throw DateError.dateToStringError }
        guard let month = components.month else { throw DateError.dateToStringError }
        guard let day = components.day else { throw DateError.dateToStringError }
        return "\(year)-\(month)-\(day)"
    }
    
    init(fromString raw: String) throws {
        let stringComponents = raw.split(separator: "-")
        
        if stringComponents.count != 3 {
            throw DateError.incorrectString
        }
        
        guard let year = Int(stringComponents[0]) else {
            throw DateError.incorrectYear
        }
        
        guard let month = Int(stringComponents[1]) else {
            throw DateError.incorrectMonth
        }
        
        guard let day = Int(stringComponents[2]) else {
            throw DateError.incorrectDay
        }
        
        let components = DateComponents(year: year, month: month, day: day)
        guard let date = Calendar.current.date(from: components) else {
            throw DateError.incorrectDate
        }
        
        self = date
    }
}
