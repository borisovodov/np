"""Module for adding new newspaper in database."""

import datetime
from .newspaper import Newspaper
from .country import Country
from .language import Language
from .city import City
from .sender import Sender
from .format import Format
from .cost import Cost
from .currency import Currency
from .db import insert, is_object_by_name

HEMISPHERES = ['n', 's']
CONTINENTS = ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America']
COLORS = ['Monochrome', 'Bicolor', 'Multicolor']
TYPES = ['Newspaper', 'Magazine', 'Brochure']
FREQUENCIES = ['Daily', 'Weekly', 'Monthly', 'Unknown']


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
        if is_object_by_name(language):
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
        if hemisphere_str in HEMISPHERES:
            city_with_name_and_country.hemisphere.name = hemisphere_str
            break
        else:
            print('Incorrect hemisphere. Try again.')
    while True:
        continent_str = input('Continent: ')
        if continent_str in CONTINENTS:
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
    if is_object_by_name(country):
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
    if is_object_by_name(language):
        language.get_language_by_name()
    else:
        language = add_language(language)
    newspaper.language = language

    senders_str = input('Senders (comma-separated): ').replace(' ,', ',').replace('  ', ' ')
    for sender_str in senders_str.split(','):
        sender = Sender()
        sender.name = sender_str
        if is_object_by_name(sender):
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
            date_brought_str = input('Date brought (dot-separated or unknown): ')
            if date_brought_str == 'unknown':
                break
            else:
                newspaper.date_brought = datetime.date(day=int(date_brought_str.split('.')[0]),
                                                       month=int(date_brought_str.split('.')[1]),
                                                       year=int(date_brought_str.split('.')[2]))
                break
        except (IndexError, OverflowError, ValueError):
            print('Incorrect date. Try again.')
    while True:
        color_str = input('Color (Monochrome, Bicolor or Multicolor): ')
        if color_str in COLORS:
            newspaper.color = color_str
            break
        else:
            print('Incorrect color. Try again.')
    while True:
        try:
            newspaper.pages = int(input('Pages: '))
            break
        except ValueError:
            print('Incorrect value of pages. Try again.')
    format = Format()
    format.name = input('Format: ')
    if is_object_by_name(format):
        format.get_format_by_name()
    else:
        format = add_format(format)
    newspaper.format = format
    while True:
        type_str = input('Type (Newspaper, Magazine or Brochure): ')
        if type_str in TYPES:
            newspaper.type = type_str
            break
        else:
            print('Incorrect type. Try again.')
    while True:
        try:
            costs_str = input('Costs (COST-CURRENCY and dot-separated): ').replace(' ', '')
            for cost_str in costs_str.split(','):
                cost = Cost()
                cost.value = cost_str.split('-')[0]
                currency = Currency()
                currency.name = cost_str.split('-')[1]
                if is_object_by_name(currency):
                    currency.get_currency_by_name()
                else:
                    currency = add_currency(currency)
                cost.currency = currency
                newspaper.costs.append(cost)
            break
        except (IndexError, ValueError):
            print('Incorrect costs. Try again.')
    while True:
        frequency_str = input('Frequency (Daily, Weekly, Monthly or Unknown): ')
        if frequency_str in FREQUENCIES:
            newspaper.frequency = frequency_str
            break
        else:
            print('Incorrect frequency. Try again.')
    while True:
        try:
            newspaper.circulation = int(input('Circulation: '))
            break
        except ValueError:
            print('Incorrect circulation. Try again.')
    newspaper.site = input('Site: ')
    newspaper.issn = input('ISSN: ')
    while True:
        try:
            date_start_publication_str = input('Date start publication (dot-separated or unknown): ')
            if date_start_publication_str == 'unknown':
                break
            else:
                newspaper.date_brought = datetime.date(day=int(date_start_publication_str.split('.')[0]),
                                                       month=int(date_start_publication_str.split('.')[1]),
                                                       year=int(date_start_publication_str.split('.')[2]))
                break
        except (IndexError, OverflowError, ValueError):
            print('Incorrect date. Try again.')
    while True:
        string = input('Geotagging in name of newspaper (y/n): ')
        if string == 'y':
            newspaper.geotag = True
            break
        elif string == 'n':
            newspaper.geotag = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Crossword (y/n): ')
        if string == 'y':
            newspaper.crossword = True
            break
        elif string == 'n':
            newspaper.crossword = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Sudoku (y/n): ')
        if string == 'y':
            newspaper.sudoku = True
            break
        elif string == 'n':
            newspaper.sudoku = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Nonogram (y/n): ')
        if string == 'y':
            newspaper.nonogram = True
            break
        elif string == 'n':
            newspaper.nonogram = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Kakuro (y/n): ')
        if string == 'y':
            newspaper.kakuro = True
            break
        elif string == 'n':
            newspaper.kakuro = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Advertising Toyota (y/n): ')
        if string == 'y':
            newspaper.ad_toyota = True
            break
        elif string == 'n':
            newspaper.ad_toyota = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Program guide (y/n): ')
        if string == 'y':
            newspaper.program_guide = True
            break
        elif string == 'n':
            newspaper.program_guide = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Anecdote (y/n): ')
        if string == 'y':
            newspaper.anecdote = True
            break
        elif string == 'n':
            newspaper.anecdote = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Caricature (y/n): ')
        if string == 'y':
            newspaper.caricature = True
            break
        elif string == 'n':
            newspaper.caricature = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Recipe (y/n): ')
        if string == 'y':
            newspaper.recipe = True
            break
        elif string == 'n':
            newspaper.recipe = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Horoscope (y/n): ')
        if string == 'y':
            newspaper.horoscope = True
            break
        elif string == 'n':
            newspaper.horoscope = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Images of naked women (y/n): ')
        if string == 'y':
            newspaper.naked_women = True
            break
        elif string == 'n':
            newspaper.naked_women = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('Church newspaper (y/n): ')
        if string == 'y':
            newspaper.church = True
            break
        elif string == 'n':
            newspaper.church = False
            break
        else:
            print('Incorrect value. Try again.')
    while True:
        string = input('TRASH newspaper (y/n): ')
        if string == 'y':
            newspaper.trash = True
            break
        elif string == 'n':
            newspaper.trash = False
            break
        else:
            print('Incorrect value. Try again.')
    insert(newspaper)
    print('Newspaper added to database.')