"""This module contain Language class."""

from .db import get_attribute_by_id, get_id_by_attribute


class Language:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.population = 0

    def get_language_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        self.population = int(get_attribute_by_id(self, 'population'))
        return self

    def get_language_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        self.get_language_by_id()
        return self

    def __str__(self):
        return '\'' + self.name + '\', \'' + str(self.population) + '\''

    def __dir__(self):
        return ['name', 'population']