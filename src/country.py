"""This module contain Country class."""

from .config import config
from .language import Language
from .db import get_attribute_by_id, get_id_by_attribute

DRIVE_FOLDER_MARKER_ID = config('drive_folder_marker_id')

class Country:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.languages = []
        self.population = 0

    def get_country_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        for language_id in get_attribute_by_id(self, 'languages').split(','):
            language = Language()
            language.id = int(language_id)
            self.languages.append(language.get_language_by_id())
        self.population = int(get_attribute_by_id(self, 'population'))
        return self

    def get_country_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        self.get_country_by_id()
        return self

    def marker(self):
        return 'https://googledrive.com/host/' + DRIVE_FOLDER_MARKER_ID + '/' + self.name.lower() + '.png'

    def __str__(self):
        languages = ''
        for language in self.languages:
            languages = languages + str(language.id) + ','
        return '\'' + languages[:-1] + '\', \'' + self.name + '\', \'' + str(self.population) + '\''

    def __dir__(self):
        return ['languages', 'name', 'population']