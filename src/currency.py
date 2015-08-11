"""This module contain Currency class."""


class Currency:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.symbol = ''

    def __str__(self):
        return self.name