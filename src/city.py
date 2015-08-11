"""This module contain City class."""

from .country import Country
from .hemisphere import Hemisphere


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

    def __str__(self):
        return self.name