"""This module contain Country class."""

from .config import ids
from .language import Language
from .db import get_attribute


class Country:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.languages = []
        self.population = 0

    def get_country(self, country_id):
        self.id = country_id
        self.name = get_attribute(self, 'name')
        for language_id in get_attribute(self, 'languages').split(','):
            language = Language()
            self.languages.append(language.get_language(int(language_id)))
        self.population = int(get_attribute(self, 'population'))
        return self

    def marker(self):
        return 'https://googledrive.com/host/' + ids['drive_folder_marker_id'] + '/' + self.name.lower() + '.png'

    def __str__(self):
        return self.name

    def __iter__(self):
        languages = ''
        for language in self.languages:
            languages = languages + str(language.id) + ','
        return [
            self.id,
            self.name,
            languages[:-1],
            self.population
        ].__iter__()