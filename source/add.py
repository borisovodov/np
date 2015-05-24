"""Module for adding new newspaper in database."""

import datetime
from source.newspaper import Newspaper
from source.db import query
from source.func import step

print('Choose newspaper\'s attribute.')

newspaper = Newspaper()
newspaper.city = input('City: ')
newspaper.country = input('Country: ')
newspaper.title = input('Title: ')
newspaper.number = input('Number: ')
newspaper.number2 = input('Number2: ')
date_str = input('Date (dot-separated): ')
newspaper.date = datetime.date(day=int(date_str.split('.')[0]), month=int(date_str.split('.')[1]),
                               year=int(date_str.split('.')[2]))
newspaper.language = input('Language: ')
newspaper.senders = input('Senders (comma-separated): ').split(',')
coordinates_str = input('Coordinates (from Google Maps): ')
newspaper.latitude = float(coordinates_str.split(',')[0])
newspaper.longitude = float(coordinates_str.split(',')[1])
newspaper.continent = input('Continent: ')
newspaper.hemisphere = input('Hemisphere (n or s): ')
newspaper.population = int(input('Population: '))
date_b_str = input('Date brought (dot-separated): ')
newspaper.date_brought = datetime.date(day=int(date_b_str.split('.')[0]), month=int(date_b_str.split('.')[1]),
                                       year=int(date_b_str.split('.')[2]))

query('INSERT INTO newspapers (city, country, title, number, number2, date, language, senders, latitude, longitude, '
      'continent, hemisphere, population, date_brought, url) VALUES (\'' + newspaper.city + '\', \''
      + newspaper.country + '\', \'' + newspaper.title + '\', \'' + newspaper.number + '\', \''
      + newspaper.number2 + '\', \'' + str(newspaper.date.day) + '.' + str(newspaper.date.month) + '.'
      + str(newspaper.date.year) + '\', \'' + newspaper.language + '\', \'' + ','.join(newspaper.senders) + '\', \''
      + str(newspaper.latitude) + '\', \'' + str(newspaper.longitude) + '\', \'' + newspaper.continent + '\', \''
      + newspaper.hemisphere + '\', \'' + str(newspaper.population) + '\', \'' + str(newspaper.date_brought.day) + '.'
      + str(newspaper.date_brought.month) + '.' + str(newspaper.date_brought.year) + '\', \'' + newspaper.url + '\')')

print('Newspaper added to database.')
step('update')