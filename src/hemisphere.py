"""This module contain Hemisphere class."""


class Hemisphere:

    def __init__(self):
        self.name = ''

    def name_full(self):
        if self.name == 'n':
            return 'Northern Hemisphere'
        elif self.name == 's':
            return 'Southern Hemisphere'

    def __str__(self):
        return self.name_full()