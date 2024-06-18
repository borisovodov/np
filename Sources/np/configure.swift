import NIOSSL
import Fluent
import FluentSQLiteDriver
import Leaf
import Vapor

public func configure(_ app: Application) async throws {
    // Нужно для работы статических файлов из папки `Public`.
    app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))
    
    // TODO: Оставляем поддрежку только HTTP/2.
//    app.http.server.configuration.supportVersions = [.one, .two]
    
    // Подключаем работу БД.
    app.databases.use(DatabaseConfigurationFactory.sqlite(.file("./Data/db.sqlite")), as: .sqlite)
    
    // Подключаем работу темплэйтов на базе Leaf.
    app.views.use(.leaf)
    
    // Добавляем миграции.
    app.migrations.add(CreateDB())
    
    // Указываем максимальный размер пэйлоада.
    app.routes.defaultMaxBodySize = "100mb"
    
    // Инициализируем кастомные тэги.
    app.leaf.tags["now"] = NowTag()
    app.leaf.tags["mapboxAccessKey"] = MapboxAccessKeyTag()
    
    // Регистрируем рауты.
    try routes(app)
}
