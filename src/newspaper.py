"""This module contain main class - newspaper."""

import datetime
import calendar
from .city import City
from .language import Language
from .sender import Sender
from .coordinates import Coordinates
from .format import Format
from .cost import Cost
from .db import get_attribute


class Newspaper:

    def __init__(self):
        self.id = 0
        self.city = City()
        self.title = ''
        self.number = ''
        self.number2 = ''
        self.date = datetime.date(1, 1, 1)
        self.language = Language()
        self.senders = []
        self.coordinates = Coordinates()
        self.date_brought = datetime.date(1, 1, 1)
        self.color = ''
        self.pages = 0
        self.format = Format()
        self.type = ''
        self.costs = []
        self.site = ''
        self.issn = ''
        self.date_start_publication = datetime.date(1, 1, 1)
        self.circulation = 0
        self.crossword = False
        self.sudoku = False
        self.nonogram = False
        self.ad_toyota = False
        self.program_guide = False
        self.anecdote = False
        self.caricature = False
        self.recipe = False
        self.horoscope = False
        self.pravda = False
        self.naked_women = False
        self.church = False
        self.url = ''

    @staticmethod
    def link(not_link):
        return '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/'\
               + not_link.replace(' ', '%20') + '">' + not_link + '</a>'

    @staticmethod
    def boolean_int(boolean):
        if not boolean:
            return 0
        else:
            return 1

    @staticmethod
    def int_boolean(integer):
        if integer == 0:
            return False
        else:
            return True

    def get_newspaper(self, newspaper_id):
        self.id = newspaper_id
        self.city.get_city(int(get_attribute(self, 'name')))
        self.title = get_attribute(self, 'title')
        self.number = get_attribute(self, 'number')
        self.number2 = get_attribute(self, 'number2')
        self.date = datetime.date(day=int(get_attribute(self, 'date_day')),
                                  month=int(get_attribute(self, 'date_month')),
                                  year=int(get_attribute(self, 'date_year')))
        self.language.get_language(int(get_attribute(self, 'language')))
        for sender_id in get_attribute(self, 'sender').split(','):
            sender = Sender()
            self.senders.append(sender.get_sender(int(sender_id)))
        self.coordinates.latitude = float(get_attribute(self, 'latitude'))
        self.coordinates.longitude = float(get_attribute(self, 'longitude'))
        self.date_brought = datetime.date(day=int(get_attribute(self, 'date_brought_day')),
                                          month=int(get_attribute(self, 'date_brought_month')),
                                          year=int(get_attribute(self, 'date_brought_year')))
        self.color = get_attribute(self, 'color')
        self.pages = int(get_attribute(self, 'pages'))
        self.format.get_format(int(get_attribute(self, 'format')))
        self.type = get_attribute(self, 'type')
        for cost_attribute in get_attribute(self, 'costs').split(','):
            cost = Cost()
            self.costs.append(cost.get_cost(cost_attribute.split('-')[0], int(cost_attribute.split('-')[1])))
        self.site = get_attribute(self, 'site')
        self.issn = get_attribute(self, 'issn')
        self.date_start_publication = datetime.date(day=int(get_attribute(self, 'date_start_publication_day')),
                                                    month=int(get_attribute(self, 'date_start_publication_month')),
                                                    year=int(get_attribute(self, 'date_start_publication_year')))
        self.circulation = int(get_attribute(self, 'circulation'))
        self.crossword = self.int_boolean(int(get_attribute(self, 'crossword')))
        self.sudoku = self.int_boolean(int(get_attribute(self, 'sudoku')))
        self.nonogram = self.int_boolean(int(get_attribute(self, 'nonogram')))
        self.ad_toyota = self.int_boolean(int(get_attribute(self, 'ad_toyota')))
        self.program_guide = self.int_boolean(int(get_attribute(self, 'program_guide')))
        self.anecdote = self.int_boolean(int(get_attribute(self, 'anecdote')))
        self.caricature = self.int_boolean(int(get_attribute(self, 'caricature')))
        self.recipe = self.int_boolean(int(get_attribute(self, 'recipe')))
        self.horoscope = self.int_boolean(int(get_attribute(self, 'horoscope')))
        self.pravda = self.int_boolean(int(get_attribute(self, 'pravda')))
        self.naked_women = self.int_boolean(int(get_attribute(self, 'naked_women')))
        self.church = self.int_boolean(int(get_attribute(self, 'church')))
        self.url = get_attribute(self, 'url')
        return self

    def format_senders(self):
        senders_string = ''
        for sender in self.senders:
            senders_string = senders_string + str(sender.id) + ','
        return senders_string[:-1]

    def format_senders_nice(self):
        senders_string = self.link(self.senders[0].name)
        if len(self.senders) == 2:
            senders_string = self.link(self.senders[0].name) + ' and ' + self.link(self.senders[1].name)
        elif len(self.senders) > 2:
            for i in range(1, len(self.senders) - 1):
                senders_string = senders_string + ', ' + self.link(self.senders[i].name)
            senders_string = senders_string + ' and ' + self.link(self.senders[-1].name)
        return senders_string

    def format_costs(self):
        costs_string = ''
        for cost in self.costs:
            costs_string = costs_string + str(cost) + ','
        return costs_string[:-1]

    def format_date_nice(self):
        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)

    def __str__(self):
        return str(self.id) + ', ' + str(self.city) + ', ' + str(self.city.country) + ', ' + self.title + ', '\
               + self.number + ', ' + self.number2 + ', ' + str(self.language) + ', '\
               + self.format_senders() + ', ' + str(self.city.continent) + ', ' + str(self.city.hemisphere) + ', '\
               + str(self.city.population) + ', ' + self.url

    def __iter__(self):
        return [
            self.id,
            self.city.id,
            self.title,
            self.number,
            self.number2,
            self.date.day,
            self.date.month,
            self.date.year,
            self.language.id,
            self.format_senders(),
            self.coordinates.latitude,
            self.coordinates.longitude,
            self.date_brought.day,
            self.date_brought.month,
            self.date_brought.year,
            self.color,
            self.pages,
            self.format.id,
            self.type,
            self.format_costs(),
            self.site,
            self.issn,
            self.date_start_publication.day,
            self.date_start_publication.month,
            self.date_start_publication.year,
            self.circulation,
            self.boolean_int(self.crossword),
            self.boolean_int(self.sudoku),
            self.boolean_int(self.nonogram),
            self.boolean_int(self.ad_toyota),
            self.boolean_int(self.program_guide),
            self.boolean_int(self.anecdote),
            self.boolean_int(self.caricature),
            self.boolean_int(self.recipe),
            self.boolean_int(self.horoscope),
            self.boolean_int(self.pravda),
            self.boolean_int(self.naked_women),
            self.boolean_int(self.church),
            self.url
        ]