"""This module contain Currency class."""

from .db import get_attribute_by_id, get_id_by_attribute


class Currency:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.symbol = ''

    def get_currency_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        self.symbol = get_attribute_by_id(self, 'symbol')
        return self

    def get_currency_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        self.get_currency_by_id()
        return self

    def __str__(self):
        return '\'' + self.name + '\', \'' + self.symbol + '\''

    def __dir__(self):
        return ['name', 'symbol']