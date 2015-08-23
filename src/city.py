"""This module contain City class."""

from .country import Country
from .hemisphere import Hemisphere
from .db import get_attribute_by_id, search


class City:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.country = Country()
        self.population = 0
        self.hemisphere = Hemisphere()
        self.continent = ''
        self.coastal = False
        self.altitude = 0.0

    def get_city_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        self.country.id = int(get_attribute_by_id(self, 'country'))
        self.country.get_country_by_id()
        self.population = int(get_attribute_by_id(self, 'population'))
        self.hemisphere.name = get_attribute_by_id(self, 'hemisphere')
        self.continent = get_attribute_by_id(self, 'continent')
        self.coastal = bool(get_attribute_by_id(self, 'coastal'))
        self.altitude = float(get_attribute_by_id(self, 'altitude'))
        return self

    def get_city_by_name_and_country(self):
        for id_by_name in search('city', 'name', self.name):
            for id_by_country in search('city', 'country', self.country.id):
                if id_by_name == id_by_country:
                    self.id = id_by_name
        self.get_city_by_id()
        return self

    def is_city(self):
        for id_by_name in search('city', 'name', self.name):
            for id_by_country in search('city', 'country', self.country.id):
                if id_by_name == id_by_country:
                    return True
        return False

    def __str__(self):
        return '\'' + str(self.altitude) + '\', \'' + str(self.coastal) + '\', \''\
               + self.continent + '\', \'' + str(self.country.id) + '\', \'' + self.hemisphere.name + '\', \''\
               + self.name + '\', \'' + str(self.population) + '\''

    def __dir__(self):
        return ['altitude', 'coastal', 'continent', 'country', 'hemisphere', 'name', 'population']