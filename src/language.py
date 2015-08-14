"""This module contain Language class."""

from .db import get_attribute


class Language:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.population = 0

    def get_language(self, language_id):
        self.id = language_id
        self.name = get_attribute(self, 'name')
        self.population = int(get_attribute(self, 'population'))
        return self

    def __str__(self):
        return '\'' + self.name + '\', \'' + str(self.population) + '\''

    def __dir__(self):
        return ['name', 'population']