"""This module contain main class - newspaper."""

import datetime
import calendar
from .city import City
from .language import Language
from .sender import Sender
from .coordinates import Coordinates
from .format import Format
from .cost import Cost
from .db import get_attributes


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
        for row in get_attributes('newspaper', newspaper_id):
            self.id = int(row[0])
            self.city.get_city(int(row[1]))
            self.title = row[2]
            self.number = row[3]
            self.number2 = row[4]
            self.date = datetime.date(day=int(row[5]), month=int(row[6]), year=int(row[7]))
            self.language.get_language(int(row[8]))
            for sender_id in row[9].split(','):
                sender = Sender()
                self.senders.append(sender.get_sender(int(sender_id)))
            self.coordinates.latitude = float(row[10])
            self.coordinates.longitude = float(row[11])
            self.date_brought = datetime.date(day=int(row[12]), month=int(row[13]), year=int(row[14]))
            self.color = row[15]
            self.pages = int(row[16])
            self.format.get_format(int(row[17]))
            self.type = row[18]
            for cost_attribute in row[19].split(','):
                cost = Cost()
                self.costs.append(cost.get_cost(cost_attribute.split('-')[0], int(cost_attribute.split('-')[1])))
            self.site = row[20]
            self.issn = row[21]
            self.date_start_publication = datetime.date(day=int(row[22]), month=int(row[23]), year=int(row[24]))
            self.circulation = int(row[25])
            self.crossword = self.int_boolean(int(row[26]))
            self.sudoku = self.int_boolean(int(row[27]))
            self.nonogram = self.int_boolean(int(row[28]))
            self.ad_toyota = self.int_boolean(int(row[29]))
            self.program_guide = self.int_boolean(int(row[30]))
            self.anecdote = self.int_boolean(int(row[31]))
            self.caricature = self.int_boolean(int(row[32]))
            self.recipe = self.int_boolean(int(row[33]))
            self.horoscope = self.int_boolean(int(row[34]))
            self.pravda = self.int_boolean(int(row[35]))
            self.naked_women = self.int_boolean(int(row[36]))
            self.church = self.int_boolean(int(row[37]))
            self.url = row[38]

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
        return {
            'id': self.id,
            'city': self.city.id,
            'title': self.title,
            'number': self.number,
            'number2': self.number2,
            'date_day': self.date.day,
            'date_month': self.date.month,
            'date_year': self.date.year,
            'language': self.language.id,
            'senders': self.format_senders(),
            'coordinates_latitude': self.coordinates.latitude,
            'coordinates_longitude': self.coordinates.longitude,
            'date_brought_day': self.date_brought.day,
            'date_brought_month': self.date_brought.month,
            'date_brought_year': self.date_brought.year,
            'color': self.color,
            'pages': self.pages,
            'format': self.format.id,
            'type': self.type,
            'costs': self.format_costs(),
            'site': self.site,
            'issn': self.issn,
            'date_start_publication_day': self.date_start_publication.day,
            'date_start_publication_month': self.date_start_publication.month,
            'date_start_publication_year': self.date_start_publication.year,
            'circulation': self.circulation,
            'crossword': self.boolean_int(self.crossword),
            'sudoku': self.boolean_int(self.sudoku),
            'nonogram': self.boolean_int(self.nonogram),
            'ad_toyota': self.boolean_int(self.ad_toyota),
            'program_guide': self.boolean_int(self.program_guide),
            'anecdote': self.boolean_int(self.anecdote),
            'caricature': self.boolean_int(self.caricature),
            'recipe': self.boolean_int(self.recipe),
            'horoscope': self.boolean_int(self.horoscope),
            'pravda': self.boolean_int(self.pravda),
            'naked_women': self.boolean_int(self.naked_women),
            'church': self.boolean_int(self.church),
            'url': self.url
        }