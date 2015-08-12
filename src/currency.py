"""This module contain Currency class."""

from .db import get_attributes


class Currency:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.symbol = ''

    def get_currency(self, currency_id):
        for row in get_attributes('currency', currency_id):
            self.id = int(row[0])
            self.name = row[1]
            self.symbol = row[2]
        return self

    def __str__(self):
        return self.name

    def __iter__(self):
        return {
            'id': self.id,
            'name': self.name,
            'symbol': self.symbol
        }