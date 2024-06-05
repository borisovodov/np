//
//  CountryController.swift
//  
//
//  Created by Boris Ovodov on 25.05.2024.
//

import Fluent
import Vapor

struct CountryController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let countries = routes.grouped("countries")

        countries.get(use: self.getList)
        countries.post(use: self.createCountry)
        
        countries.group(":countryID") { country in
            country.get(use: self.getCountry)
            countries.post(use: self.createCity)
            country.delete(use: self.deleteCountry)
        }
        
        countries.group(":countryID", ":cityID") { city in
            city.get(use: self.getCity)
            city.delete(use: self.deleteCity)
        }
    }

    @Sendable
    func getList(req: Request) async throws -> View {
        var countries: [CountryPageDTO] = []
        for country in try await Country.query(on: req.db).sort(\.$name).all() {
            try await countries.append(country.toPageDTO(req.db))
        }
        
        return try await req.view.render("countries", ["countries": countries])
    }
    
    @Sendable
    func getCountry(req: Request) async throws -> View {
        struct Context: Content {
            var country: CountryPageDTO
            var markers: [Marker]
        }
        
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(country: country.toPageDTO(req.db), markers: country.markers(req.db))
        
        return try await req.view.render("country", context)
    }
    
    @Sendable
    func getCity(req: Request) async throws -> View {
        struct Context: Content {
            var city: CityPageDTO
            var markers: [Marker]
        }
        
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let context = try await Context(city: city.toPageDTO(req.db), markers: city.markers(req.db))
        
        return try await req.view.render("city", context)
    }

    @Sendable
    func createCountry(req: Request) async throws -> Country {
        let country = try req.content.decode(Country.self)

        try await country.save(on: req.db)
        return country
    }
    
    @Sendable
    func createCity(req: Request) async throws -> City {
        let city = try req.content.decode(City.self)

        try await city.save(on: req.db)
        return city
    }

    @Sendable
    func deleteCountry(req: Request) async throws -> HTTPStatus {
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await country.delete(on: req.db)
        return .noContent
    }
    
    @Sendable
    func deleteCity(req: Request) async throws -> HTTPStatus {
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await city.delete(on: req.db)
        return .noContent
    }
}
