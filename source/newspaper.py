"""This module contain main class - newspaper."""

import datetime
import calendar
from math import trunc
from source.func import link


class Newspaper:

    def __init__(self):
        self.id = 0
        self.city = ''
        self.country = ''
        self.title = ''
        self.number = ''
        self.number2 = ''
        self.date = datetime.date(1, 1, 1)
        self.language = ''
        self.senders = []
        self.latitude = 0.0
        self.longitude = 0.0
        self.continent = ''
        self.hemisphere = ''
        self.population = 0
        self.date_brought = datetime.date(1, 1, 1)
        self.url = ''

    def format_senders_str(self):
        return ', '.join(self.senders)

    def format_senders_str_nice(self):
        senders_string = link(self.senders[0])
        if len(self.senders) == 2:
            senders_string = link(self.senders[0]) + ' and ' + link(self.senders[1])
        elif len(self.senders) > 2:
            for i in range(1, len(self.senders) - 1):
                senders_string = senders_string + ', ' + link(self.senders[i])
            senders_string = senders_string + ' and ' + link(self.senders[-1])
        return senders_string

    def format_date_str_nice(self):
        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)

    def format_coordinates_str(self):
        return str(self.latitude) + ',' + str(self.longitude)

    def format_coordinates_str_nice(self, coord):
        if self.latitude > 0:
            lat = str(trunc(self.latitude)) + '° ' + str(trunc((self.latitude - trunc(self.latitude))*60)) + '′ N'
        else:
            lat = str(abs(trunc(self.latitude))) + '° ' + str(abs(trunc((self.latitude - trunc(self.latitude))*60)))\
                                                 + '′ S'
        if self.longitude > 0:
            long = str(trunc(self.longitude)) + '° ' + str(trunc((self.longitude - trunc(self.longitude))*60)) + '′ E'
        else:
            long = str(abs(trunc(self.longitude))) + '° ' + str(abs(trunc((self.longitude - trunc(self.longitude))*60)))\
                                                   + '′ W'

        if coord == 'latitude':
            return lat
        elif coord == 'longitude':
            return long
        elif coord == 'both':
            return {'latitude': lat, 'longitude': long}

    def format_hemisphere_nice(self):
        if self.hemisphere == 'n':
            return 'Northern Hemisphere'
        elif self.hemisphere == 's':
            return 'Southern Hemisphere'

    def __str__(self):
        return str(self.id) + ', ' + self.city + ', ' + self.country + ', ' + self.title + ', ' + self.number + ', '\
               + self.number2 + ', ' + str(self.date.day) + '.' + str(self.date.month) + '.' + str(self.date.year) + ', '\
               + self.language + ', ' + ','.join(self.senders) + ', ' + str(self.latitude) + ', '\
               + str(self.longitude) + ', ' + self.continent + ', ' + self.hemisphere + ', ' + str(self.population) + ', '\
               + str(self.date_brought.day) + '.' + str(self.date_brought.month) + '.' + str(self.date_brought.year)\
               + ', ' + self.url

    def marker(self):
        return 'https://googledrive.com/host/0B3n4EMBczDDEMlVkVzVCb3pfZ2c/' + self.country.lower() + '.png'