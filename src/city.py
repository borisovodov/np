"""This module contain City class."""

from .country import Country
from .hemisphere import Hemisphere
from .db import get_attributes


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
        for row in get_attributes('city', city_id):
            self.id = int(row[0])
            self.name = row[1]
            self.country.get_country(int(row[2]))
            self.population = int(row[3])
            self.hemisphere.name = row[4]
            self.continent = row[5]
            if int(row[6]) == 0:
                self.coastal = False
            else:
                self.coastal = True
            self.altitude = float(row[7])
        return self

    def __str__(self):
        return self.name