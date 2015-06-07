"""Module for adding new newspaper in database."""

import datetime
from source.newspaper import Newspaper
from source.db import insert


def add():
    print('Choose newspaper\'s attribute.')

    newspaper = Newspaper()
    newspaper.city = input('City: ')
    newspaper.country = input('Country: ')
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
    newspaper.language = input('Language: ')
    newspaper.senders = input('Senders (comma-separated): ').split(',')
    while True:
        try:
            coordinates_str = input('Coordinates (from Google Maps): ')
            newspaper.latitude = float(coordinates_str.split(',')[0])
            newspaper.longitude = float(coordinates_str.split(',')[1])
            break
        except (IndexError, ValueError):
            print('Incorrect coordinates. Try again.')
    while True:
        continent_str = input('Continent: ')
        if continent_str in ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America']:
            newspaper.continent = continent_str
            break
        else:
            print('Incorrect continent. Try again.')
    while True:
        hemisphere_str = input('Hemisphere (n or s): ')
        if hemisphere_str in ['n', 's']:
            newspaper.hemisphere = hemisphere_str
            break
        else:
            print('Incorrect hemisphere. Try again.')
    while True:
        try:
            newspaper.population = int(input('Population: ').replace(' ', '').replace(',', '').replace('.', ''))
            break
        except ValueError:
            print('Incorrect population. Try again.')
    while True:
        try:
            date_b_str = input('Date brought (dot-separated): ')
            newspaper.date_brought = datetime.date(day=int(date_b_str.split('.')[0]),
                                                   month=int(date_b_str.split('.')[1]),
                                                   year=int(date_b_str.split('.')[2]))
            break
        except (IndexError, OverflowError, ValueError):
            print('Incorrect date. Try again.')

    insert(newspaper)
    print('Newspaper added to database.')