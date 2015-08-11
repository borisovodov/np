"""This module contain main class - newspaper."""

import datetime
import calendar
from .city import City
from .language import Language
from .sender import Sender
from .coordinates import Coordinates
from .format import Format
from .cost import Cost


class Newspaper:

    def __init__(self):
        self.id = 0
        self.city = City()
        self.title = ''
        self.number = ''
        self.number2 = ''
        self.date = datetime.date(1, 1, 1)
        self.language = Language()
        self.senders = [Sender()]
        self.coordinates = Coordinates()
        self.date_brought = datetime.date(1, 1, 1)
        self.color = ''
        self.pages = 0
        self.format = Format()
        self.type = ''
        self.costs = [Cost()]
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

    def format_senders(self):
        return ','.join(self.senders)

    def format_senders_nice(self):
        senders_string = self.link(self.senders[0])
        if len(self.senders) == 2:
            senders_string = self.link(self.senders[0]) + ' and ' + self.link(self.senders[1])
        elif len(self.senders) > 2:
            for i in range(1, len(self.senders) - 1):
                senders_string = senders_string + ', ' + self.link(self.senders[i])
            senders_string = senders_string + ' and ' + self.link(self.senders[-1])
        return senders_string

    def format_date(self):
        return str(self.date.day) + '.' + str(self.date.month) + '.' + str(self.date.year)

    def format_date_brought(self):
        return str(self.date_brought.day) + '.' + str(self.date_brought.month) + '.' + str(self.date_brought.year)

    def format_date_nice(self):
        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)

    def __str__(self):
        return str(self.id) + ', ' + str(self.city) + ', ' + str(self.city.country) + ', ' + self.title + ', '\
               + self.number + ', ' + self.number2 + ', ' + self.format_date() + ', ' + str(self.language) + ', '\
               + self.format_senders() + ', ' + str(self.city.continent) + ', ' + str(self.city.hemisphere) + ', '\
               + str(self.city.population) + ', ' + self.format_date_brought() + ', ' + self.url