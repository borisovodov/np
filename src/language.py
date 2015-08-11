"""This module contain Language class."""


class Language:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.population = 0

    def __str__(self):
        return self.name