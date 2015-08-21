"""Module for adding new newspaper in database."""

import datetime
from .newspaper import Newspaper
from .country import Country
from .language import Language
from .city import City
from .sender import Sender
from .db import insert, is_object


def add_currency(currency_with_name):
    currency_with_name.symbol = input('Symbol of ' + currency_with_name.name + ': ')
    insert(currency_with_name)
    print('Currency added to database.')
    currency_with_name.get_currency_by_name()
    return currency_with_name


def add_format(format_with_name):
    while True:
        try:
            format_with_name.height = int(input('Height of format newspaper (mm): '))
            break
        except ValueError:
            print('Incorrect height. Try again.')
    while True:
        try:
            format_with_name.width = int(input('Width of format newspaper (mm): '))
            break
        except ValueError:
            print('Incorrect width. Try again.')
    format_with_name.aspect_ratio = input('Aspect ratio of format: ')
    insert(format_with_name)
    print('Format added to database.')
    format_with_name.get_format_by_name()
    return format_with_name


def add_sender(sender_with_name):
    insert(sender_with_name)
    print(sender_with_name.name + ' added to database.')
    sender_with_name.get_sender_by_name()
    return sender_with_name


def add_language(language_with_name):
    while True:
        try:
            language_with_name.population = int(input('Input population for ' + language_with_name.name
                                                      + 'language: ').replace(' ', '').replace(',', '').replace('.', ''))
            break
        except ValueError:
            print('Incorrect population. Try again.')
    insert(language_with_name)
    print('Language added to database.')
    language_with_name.get_language_by_name()
    return language_with_name


def add_country(country_with_name):
    languages_str = input('Official languages in country (comma-separated):')
    for language_str in languages_str.split(','):
        language = Language()
        language.name = language_str
        if is_object(language, 'name'):
            language.get_language_by_name()
            country_with_name.languages.append(language)
        else:
            language = add_language(language)
            country_with_name.languages.append(language)
    while True:
        try:
            country_with_name.population = int(input('Population of country: '
                                                     '').replace(' ', '').replace(',', '').replace('.', ''))
            break
        except ValueError:
            print('Incorrect population. Try again.')
    insert(country_with_name)
    print('Country added to database.')
    country_with_name.get_country_by_name()
    return country_with_name


def add_city(city_with_name_and_country):
    while True:
        try:
            city_with_name_and_country.population = int(input('Population of city: '
                                                              '').replace(' ', '').replace(',', '').replace('.', ''))
            break
        except ValueError:
            print('Incorrect population. Try again.')
    while True:
        hemisphere_str = input('Hemisphere (n or s): ')
        if hemisphere_str in ['n', 's']:
            city_with_name_and_country.hemisphere.name = hemisphere_str
            break
        else:
            print('Incorrect hemisphere. Try again.')
    while True:
        continent_str = input('Continent: ')
        if continent_str in ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America']:
            city_with_name_and_country.continent = continent_str
            break
        else:
            print('Incorrect continent. Try again.')
    while True:
        coastal_str = input('Coastal city (y/n): ')
        if coastal_str == 'y':
            city_with_name_and_country.coastal = True
            break
        elif coastal_str == 'n':
            city_with_name_and_country.coastal = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        try:
            city_with_name_and_country.altitude = float(input('Cities elevation (m): '))
            break
        except ValueError:
            print('Incorrect elevation. Try again.')
    return city_with_name_and_country


def add_newspaper():
    print('Choose newspaper\'s attribute.')

    country = Country()
    country.name = input('Country: ')
    if is_object(country, 'name'):
        country.get_country_by_name()
    else:
        country = add_country(country)

    city = City()
    city.country = country
    city.name = input('City: ')
    if city.is_city():
        city.get_city_by_name_and_country()
    else:
        city = add_city(city)

    newspaper = Newspaper()
    newspaper.city = city
    newspaper.title = input('Title: ')
    newspaper.number = input('Number: ')
    newspaper.number2 = input('Number2: ')
    while True:
        try:
            date_str = input('Date (dot-separated): ')
            newspaper.date = datetime.date(day=int(date_str.split('.')[0]), month=int(date_str.split('.')[1]),
                                           year=int(date_str.split('.')[2]))
            break
        except (IndexError, OverflowError, ValueError):
            print('Incorrect date. Try again.')

    language = Language()
    language.name = input('Language: ')
    if is_object(language, 'name'):
        language.get_language_by_name()
    else:
        language = add_language(language)
    newspaper.language = language

    senders_str = input('Senders (comma-separated): ').replace(' ,', ',')
    for sender_str in senders_str.split(','):
        sender = Sender()
        sender.name = sender_str
        if is_object(sender, 'name'):
            sender.get_sender_by_name()
        else:
            sender = add_sender(sender)
        newspaper.senders.append(sender)

    while True:
        try:
            coordinates_str = input('Coordinates (from Google Maps): ')
            newspaper.coordinates.latitude = float(coordinates_str.split(',')[0])
            newspaper.coordinates.longitude = float(coordinates_str.split(',')[1])
            break
        except (IndexError, ValueError):
            print('Incorrect coordinates. Try again.')
    while True:
        try:
            date_brought_str = input('Date brought (dot-separated): ')
            newspaper.date_brought = datetime.date(day=int(date_brought_str.split('.')[0]),
                                                   month=int(date_brought_str.split('.')[1]),
                                                   year=int(date_brought_str.split('.')[2]))
            break
        except (IndexError, OverflowError, ValueError):
            print('Incorrect date. Try again.')
    while True:


    insert(newspaper)
    print('Newspaper added to database.')