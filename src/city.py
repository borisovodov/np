"""This module contain City class."""

from .country import Country
from .hemisphere import Hemisphere
from .db import get_attribute


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

    def get_city(self, city_id):
        self.id = city_id
        self.name = get_attribute(self, 'name')
        self.country.get_country(int(get_attribute(self, 'country')))
        self.population = int(get_attribute(self, 'population'))
        self.hemisphere.name = get_attribute(self, 'hemisphere')
        self.continent = get_attribute(self, 'continent')
        if int(get_attribute(self, 'coastal')) == 0:
            self.coastal = False
        else:
            self.coastal = True
        self.altitude = float(get_attribute(self, 'altitude'))
        return self

    def __str__(self):
        if not self.coastal:
            coastal_int = 0
        else:
            coastal_int = 1
        return '\'' + str(self.id) + '\', ' + self.name + '\', ' + str(self.country.id) + '\', ' + str(self.population)\
               + '\', ' + self.hemisphere.name + '\', ' + self.continent + '\', ' + str(coastal_int) + '\', '\
               + str(self.altitude) + '\''