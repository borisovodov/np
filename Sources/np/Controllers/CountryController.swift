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
        
        countries.group(":countryID") { country in
            country.get(use: self.getCountry)
        }
        
        countries.group(":countryID", "edit") { country in
            country.get(use: self.getCountryEditForm)
            country.post(use: self.editCountry)
        }
        
        countries.group(":countryID", "delete") { country in
            country.get(use: self.deleteCountry)
        }
        
        countries.group("add") { country in
            country.get(use: self.getCountryAddForm)
            country.post(use: self.addCountry)
        }
        
        countries.group(":countryID", ":cityID") { city in
            city.get(use: self.getCity)
        }
        
        countries.group(":countryID", ":cityID", "edit") { city in
            city.get(use: self.getCityEditForm)
            city.post(use: self.editCity)
        }
        
        countries.group(":countryID", ":cityID", "delete") { city in
            city.get(use: self.deleteCity)
        }
        
        countries.group(":countryID", "add") { city in
            city.get(use: self.getCityAddForm)
            city.post(use: self.addCity)
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
        
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(country: country.toPageDTO(req.db), markers: country.markers(req.db))
        
        return try await req.view.render("country", context)
    }
    
    @Sendable
    func getCity(req: Request) async throws -> View {
        struct Context: Content {
            var city: CityPageDTO
            var markers: [Marker]
        }
        
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(city: city.toPageDTO(req.db), markers: city.markers(req.db))
        
        return try await req.view.render("city", context)
    }
    
    @Sendable
    func getCountryAddForm(req: Request) async throws -> View {
        return try await req.view.render("country_add")
    }
    
    @Sendable
    func getCityAddForm(req: Request) async throws -> View {
        struct Context: Content {
            var parentCountry: CountryDTO
            var countries: [CountryDTO]
            var continents: [ContinentDTO]
        }
        
        guard let parentCountry = try await Country.find(req.parameters.get("countryID"), on: req.db)?.toDTO(req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(parentCountry: parentCountry, countries: Country.all(req.db), continents: Continent.all)
        
        return try await req.view.render("city_add", context)
    }
    
    @Sendable
    func addCountry(req: Request) async throws -> View {
        let country = try await Country.add(req)
        
        guard let id = country.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/countries/\(id)")
    }
    
    @Sendable
    func addCity(req: Request) async throws -> View {
        let city = try await City.add(req)
        
        guard let id = city.id else { throw Abort(.notFound) }
        guard let countryID = try await city.$country.get(on: req.db).id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/countries/\(countryID)/\(id)")
    }
    
    @Sendable
    func getCountryEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var country: CountryPageDTO
        }
        
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(country: country.toPageDTO(req.db))
        return try await req.view.render("country_edit", context)
    }
    
    @Sendable
    func getCityEditForm(req: Request) async throws -> View {
        struct Context: Content {
            var city: CityPageDTO
            var countries: [CountryDTO]
            var continents: [ContinentDTO]
        }
        
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else { throw Abort(.notFound) }
        
        let context = try await Context(city: city.toPageDTO(req.db), countries: Country.all(req.db), continents: Continent.all)
        return try await req.view.render("city_edit", context)
    }
    
    @Sendable
    func editCountry(req: Request) async throws -> View {
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else { throw Abort(.notFound) }
        
        try await country.edit(req)
        
        guard let id = country.id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/countries/\(id)")
    }
    
    @Sendable
    func editCity(req: Request) async throws -> View {
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else { throw Abort(.notFound) }
        
        try await city.edit(req)
        
        guard let id = city.id else { throw Abort(.notFound) }
        guard let countryID = try await city.$country.get(on: req.db).id else { throw Abort(.notFound) }
        
        throw Abort.redirect(to: "/countries/\(countryID)/\(id)")
    }
    
    @Sendable
    func deleteCountry(req: Request) async throws -> View {
        guard let country = try await Country.find(req.parameters.get("countryID"), on: req.db) else { throw Abort(.notFound) }

        try await country.delete(on: req.db)
        
        throw Abort.redirect(to: "/countries")
    }
    
    @Sendable
    func deleteCity(req: Request) async throws -> View {
        guard let city = try await City.find(req.parameters.get("cityID"), on: req.db) else { throw Abort(.notFound) }
        guard let countryID = try await city.$country.get(on: req.db).id else { throw Abort(.notFound) }

        try await city.delete(on: req.db)
        
        throw Abort.redirect(to: "/countries/\(countryID)")
    }
}
