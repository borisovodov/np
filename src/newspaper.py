"""This module contain main class - newspaper."""

import datetime
import calendar
from .city import City
from .language import Language
from .sender import Sender
from .coordinates import Coordinates
from .format import Format
from .cost import Cost
from .db import get_attribute_by_id, query


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
        self.frequency = ''
        self.circulation = 0
        self.site = ''
        self.issn = ''
        self.date_start_publication = datetime.date(1, 1, 1)
        self.geotag = False
        self.crossword = False
        self.sudoku = False
        self.nonogram = False
        self.kakuro = False
        self.ad_toyota = False
        self.program_guide = False
        self.anecdote = False
        self.caricature = False
        self.recipe = False
        self.horoscope = False
        self.naked_women = False
        self.church = False
        self.trash = False
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
        self.city.id = int(get_attribute_by_id(self, 'name'))
        self.city.get_city_by_id()
        self.title = get_attribute_by_id(self, 'title')
        self.number = get_attribute_by_id(self, 'number')
        self.number2 = get_attribute_by_id(self, 'number2')
        self.date = datetime.date(day=int(get_attribute_by_id(self, 'date_day')),
                                  month=int(get_attribute_by_id(self, 'date_month')),
                                  year=int(get_attribute_by_id(self, 'date_year')))
        self.language.id = int(get_attribute_by_id(self, 'language'))
        self.language.get_language_by_id()
        for sender_id in get_attribute_by_id(self, 'sender').split(','):
            sender = Sender()
            sender.id = int(sender_id)
            self.senders.append(sender.get_sender_by_id())
        self.coordinates.latitude = float(get_attribute_by_id(self, 'coordinates_latitude'))
        self.coordinates.longitude = float(get_attribute_by_id(self, 'coordinates_longitude'))
        self.date_brought = datetime.date(day=int(get_attribute_by_id(self, 'date_brought_day')),
                                          month=int(get_attribute_by_id(self, 'date_brought_month')),
                                          year=int(get_attribute_by_id(self, 'date_brought_year')))
        self.color = get_attribute_by_id(self, 'color')
        self.pages = int(get_attribute_by_id(self, 'pages'))
        self.format.id = int(get_attribute_by_id(self, 'format'))
        self.format.get_format_by_id()
        self.type = get_attribute_by_id(self, 'type')
        for cost_attribute in get_attribute_by_id(self, 'costs').split(','):
            cost = Cost()
            self.costs.append(cost.get_cost(cost_attribute))
        self.frequency = get_attribute_by_id(self, 'frequency')
        self.circulation = int(get_attribute_by_id(self, 'circulation'))
        self.site = get_attribute_by_id(self, 'site')
        self.issn = get_attribute_by_id(self, 'issn')
        self.date_start_publication = datetime.date(day=int(get_attribute_by_id(self, 'date_start_publication_day')),
                                                    month=int(get_attribute_by_id(self, 'date_start_publication_month')),
                                                    year=int(get_attribute_by_id(self, 'date_start_publication_year')))
        self.geotag = self.int_boolean(int(get_attribute_by_id(self, 'geotag')))
        self.crossword = self.int_boolean(int(get_attribute_by_id(self, 'crossword')))
        self.sudoku = self.int_boolean(int(get_attribute_by_id(self, 'sudoku')))
        self.nonogram = self.int_boolean(int(get_attribute_by_id(self, 'nonogram')))
        self.kakuro = self.int_boolean(int(get_attribute_by_id(self, 'kakuro')))
        self.ad_toyota = self.int_boolean(int(get_attribute_by_id(self, 'ad_toyota')))
        self.program_guide = self.int_boolean(int(get_attribute_by_id(self, 'program_guide')))
        self.anecdote = self.int_boolean(int(get_attribute_by_id(self, 'anecdote')))
        self.caricature = self.int_boolean(int(get_attribute_by_id(self, 'caricature')))
        self.recipe = self.int_boolean(int(get_attribute_by_id(self, 'recipe')))
        self.horoscope = self.int_boolean(int(get_attribute_by_id(self, 'horoscope')))
        self.naked_women = self.int_boolean(int(get_attribute_by_id(self, 'naked_women')))
        self.church = self.int_boolean(int(get_attribute_by_id(self, 'church')))
        self.trash = self.int_boolean(int(get_attribute_by_id(self, 'trash')))
        self.url = get_attribute_by_id(self, 'url')
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
        return '\'' + str(self.boolean_int(self.ad_toyota)) + '\', \'' + str(self.boolean_int(self.anecdote)) + '\', \''\
               + str(self.boolean_int(self.caricature)) + '\', \'' + str(self.boolean_int(self.church)) + '\', \''\
               + str(self.circulation) + '\', \'' + str(self.city.id) + '\', \'' + self.color + '\', \''\
               + str(self.coordinates) + '\', \'' + self.format_costs() + '\', \''\
               + str(self.boolean_int(self.crossword)) + '\', \'' + str(self.date_brought.day) + '\', \''\
               + str(self.date_brought.month) + '\', \'' + str(self.date_brought.year) + '\', \'' + str(self.date.day) + '\', \''\
               + str(self.date.month) + '\', \'' + str(self.date_start_publication.day) + '\', \''\
               + str(self.date_start_publication.month) + '\', \'' + str(self.date_start_publication.year) + '\', \''\
               + str(self.date.year) + '\', \'' + str(self.format.id) + '\', \'' + self.frequency + '\', \''\
               + str(self.boolean_int(self.geotag)) + '\', \'' + str(self.boolean_int(self.horoscope)) + '\', \''\
               + self.issn + '\', \'' + str(self.boolean_int(self.kakuro)) + '\', \'' + str(self.language.id) + '\', \''\
               + str(self.boolean_int(self.naked_women)) + '\', \'' + str(self.boolean_int(self.nonogram)) + '\', \''\
               + self.number + '\', \'' + self.number2 + '\', \'' + str(self.pages) + '\', \''\
               + str(self.boolean_int(self.program_guide)) + '\', \'' + str(self.boolean_int(self.recipe)) + '\', \''\
               + self.format_senders() + '\', \'' + self.site + '\', \'' + str(self.boolean_int(self.sudoku)) + '\', \''\
               + self.title + '\', \'' + str(self.boolean_int(self.trash)) + '\', \'' + self.type + '\', \''\
               + self.url + '\''

    def __dir__(self):
        return ['ad_toyota', 'anecdote', 'caricature', 'church', 'circulation', 'city', 'color', 'coordinates_latitude',
                'coordinates_longitude', 'costs', 'crossword', 'date_brought_day', 'date_brought_month',
                'date_brought_year', 'date_day', 'date_month', 'date_start_publication_day',
                'date_start_publication_month', 'date_start_publication_year', 'date_year', 'format', 'frequency',
                'geotag', 'horoscope', 'issn', 'kakuro', 'language', 'naked_women', 'nonogram', 'number', 'number2',
                'pages', 'program_guide', 'recipe', 'senders', 'site', 'sudoku', 'title', 'trash', 'type', 'url']


def newspapers():
    table_newspapers = []
    table = query('SELECT * FROM newspaper')
    for row in table:
        newspaper = Newspaper()
        table_newspapers.append(newspaper.get_newspaper(int(row[0])))
    return table_newspapers