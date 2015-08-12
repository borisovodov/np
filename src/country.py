"""This module contain Country class."""

from .config import ids
from .language import Language
from .db import get_attributes


class Country:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.languages = []
        self.population = 0

    def get_country(self, country_id):
        for row in get_attributes('country', country_id):
            self.id = int(row[0])
            self.name = row[1]
            for language_id in row[2].split(','):
                language = Language()
                self.languages.append(language.get_language(int(language_id)))
            self.population = int(row[3])
        return self

    def marker(self):
        return 'https://googledrive.com/host/' + ids['drive_folder_marker_id'] + '/' + self.name.lower() + '.png'

    def __str__(self):
        return self.name