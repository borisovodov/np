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
            if int(row[26]) == 0:
                self.crossword = False
            else:
                self.crossword = True
            if int(row[27]) == 0:
                self.sudoku = False
            else:
                self.sudoku = True
            if int(row[28]) == 0:
                self.nonogram = False
            else:
                self.nonogram = True
            if int(row[29]) == 0:
                self.ad_toyota = False
            else:
                self.ad_toyota = True
            if int(row[30]) == 0:
                self.program_guide = False
            else:
                self.program_guide = True
            if int(row[31]) == 0:
                self.anecdote = False
            else:
                self.anecdote = True
            if int(row[32]) == 0:
                self.caricature = False
            else:
                self.caricature = True
            if int(row[33]) == 0:
                self.recipe = False
            else:
                self.recipe = True
            if int(row[34]) == 0:
                self.horoscope = False
            else:
                self.horoscope = True
            if int(row[35]) == 0:
                self.pravda = False
            else:
                self.pravda = True
            if int(row[36]) == 0:
                self.naked_women = False
            else:
                self.naked_women = True
            if int(row[37]) == 0:
                self.church = False
            else:
                self.church = True
            self.url = row[38]

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