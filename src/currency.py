"""This module contain Currency class."""

from .db import get_attribute


class Currency:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.symbol = ''

    def get_currency(self, currency_id):
        self.id = int(currency_id)
        self.name = get_attribute(self, 'name')
        self.symbol = get_attribute(self, 'symbol')
        return self

    def __str__(self):
        return self.name

    def __iter__(self):
        return [
            self.id,
            self.name,
            self.symbol
        ]