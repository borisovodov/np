"""Module for work with database."""

import sqlite3
import datetime
import os
import sys
from .newspaper import Newspaper
from .city import City
from .country import Country
from .language import Language

DB_PATH = sys.path[0] + '/data/newspapers.db'


def create_database():
    connect = sqlite3.connect(DB_PATH)
    cursor = connect.cursor()
    cursor.execute('CREATE TABLE newspapers ('
                   'id INTEGER PRIMARY KEY, '
                   'city INTEGER, '
                   'title TEXT, '
                   'number TEXT, '
                   'number2 TEXT, '
                   'date_day INTEGER, '
                   'date_month INTEGER, '
                   'date_year INTEGER, '
                   'language INTEGER, '
                   'senders TEXT, '
                   'coordinates_latitude REAL, '
                   'coordinates_longitude REAL, '
                   'date_brought_day INTEGER, '
                   'date_brought_month INTEGER, '
                   'date_brought_year INTEGER, '
                   'color TEXT, '
                   'pages INTEGER, '
                   'format INTEGER, '
                   'type TEXT, costs TEXT, '
                   'site TEXT, '
                   'issn TEXT, '
                   'date_start_publication_day INTEGER, '
                   'date_start_publication_month INTEGER, '
                   'date_start_publication_year INTEGER, '
                   'circulation INTEGER, '
                   'crossword INTEGER, '
                   'sudoku INTEGER, '
                   'nonogram INTEGER, '
                   'ad_toyota INTEGER, '
                   'program_guide INTEGER, '
                   'anecdote INTEGER, '
                   'caricature INTEGER, '
                   'recipe INTEGER, '
                   'horoscope INTEGER, '
                   'pravda INTEGER, '
                   'naked_women INTEGER, '
                   'church INTEGER, '
                   'url TEXT)')
    cursor.execute('CREATE TABLE cities ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'country INTEGER, '
                   'population INTEGER, '
                   'hemisphere TEXT, '
                   'continent TEXT, '
                   'coastal INTEGER, '
                   'altitude REAL)')
    cursor.execute('CREATE TABLE countries ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'languages TEXT, '
                   'population INTEGER)')
    cursor.execute('CREATE TABLE currency ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'symbol TEXT)')
    cursor.execute('CREATE TABLE formats ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'height INTEGER, '
                   'width INTEGER, '
                   'aspect_ratio TEXT)')
    cursor.execute('CREATE TABLE languages ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'population INTEGER)')
    cursor.execute('CREATE TABLE senders ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT)')
    connect.commit()
    connect.close()
    print('Database created.')

if not os.path.isfile(DB_PATH):
        create_database()


def get_language(language_id):
    connect = sqlite3.connect(DB_PATH)
    cursor = connect.cursor()
    table_languages = cursor.execute('SELECT * FROM languages WHERE id = ' + language_id)
    language = Language()
    for row_language in table_languages:
        language.id = row_language[0]
        language.name = row_language[1]
        language.population = row_language[2]
    connect.close()
    return language


def get_country(country_id):
    connect = sqlite3.connect(DB_PATH)
    cursor = connect.cursor()
    table_countries = cursor.execute('SELECT * FROM countries WHERE id = ' + country_id)
    country = Country()
    for row_country in table_countries:
        country.id = int(row_country[0])
        country.name = row_country[1]
        languages_id = row_country[2].split(',')
        for language_id in languages_id:
            country.languages.append(get_language(language_id))
        country.population = row_country[3]
    connect.close()
    return country


def get_city(city_id):
    connect = sqlite3.connect(DB_PATH)
    cursor = connect.cursor()
    table_cities = cursor.execute('SELECT * FROM cities WHERE id = ' + city_id)
    city = City()
    for row_city in table_cities:
        city.id = int(row_city[0])
        city.name = row_city[1]
        city.country = get_country(row_city[2])
        city.population = row_city[3]
        city.hemisphere = row_city[4]
        city.continent = row_city[5]
        if row_city[6] == 0:
            city.coastal = False
        else:
            city.coastal = True
        city.altitude = float(row_city[7])
    connect.close()
    return city


def query(command):
    try:
        connect = sqlite3.connect(DB_PATH)
        cursor = connect.cursor()
        table_newspapers = cursor.execute(command.replace('\'', '\"'))
        query_newspapers = []
        for row_newspaper in table_newspapers:
            newspaper = Newspaper()
            newspaper.id = int(row_newspaper[0])
            newspaper.city = city
            newspaper.country = row_newspaper[2]
            newspaper.title = row_newspaper[3]
            newspaper.number = row_newspaper[4]
            newspaper.number2 = row_newspaper[5]
            newspaper.date = datetime.date(day=int(row_newspaper[6].split('.')[0]), month=int(row_newspaper[6].split('.')[1]),
                                           year=int(row_newspaper[6].split('.')[2]))
            newspaper.language = row_newspaper[7]
            newspaper.senders = row_newspaper[8].split(',')
            newspaper.latitude = float(row_newspaper[9])
            newspaper.longitude = float(row_newspaper[10])
            newspaper.continent = row_newspaper[11]
            newspaper.hemisphere = row_newspaper[12]
            newspaper.population = int(row_newspaper[13])
            newspaper.date_brought = datetime.date(day=int(row_newspaper[14].split('.')[0]), month=int(row_newspaper[14].split('.')[1]),
                                                   year=int(row_newspaper[14].split('.')[2]))
            newspaper.url = row_newspaper[15]
            query_newspapers.append(newspaper)
        connect.commit()
        connect.close()
        return query_newspapers
    except sqlite3.OperationalError:
        print('Bad query!')
        return None


def newspapers():
    return query('SELECT * FROM newspapers')


def insert(newspaper):
    query('INSERT INTO newspapers (city, country, title, number, number2, date, language, senders, latitude, '
          'longitude, continent, hemisphere, population, date_brought, url) VALUES (\'' + newspaper.city + '\', \''
          + newspaper.country + '\', \'' + newspaper.title + '\', \'' + newspaper.number + '\', \''
          + newspaper.number2 + '\', \'' + newspaper.format_date() + '\', \'' + newspaper.language + '\', \''
          + newspaper.format_senders() + '\', \'' + str(newspaper.latitude) + '\', \''
          + str(newspaper.longitude) + '\', \'' + newspaper.continent + '\', \'' + newspaper.hemisphere + '\', \''
          + str(newspaper.population) + '\', \'' + newspaper.format_date_brought() + '\', \'' + newspaper.url + '\')')


def update(newspaper_id, attribute, value):
    query('UPDATE newspapers SET ' + attribute + ' = \'' + value + '\' WHERE id = ' + str(newspaper_id))


def db():
    command = input('Input SQL command (only SELECT *): ')
    table = query(command)
    if table != None:
        for row in table:
            print(row)
        print('Query completed.')