"""This module contain Cost class."""

from .currency import Currency


class Cost:

    def __init__(self):
        self.value = 0.0
        self.currency = Currency()

    def get_cost(self, string):
        self.value = float(string.split('-')[0])
        self.currency.get_currency(int(string.split('-')[1]))
        return self

    def __str__(self):
        return str(self.value) + '-' + str(self.currency.id)