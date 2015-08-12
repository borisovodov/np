"""This module contain Cost class."""

from .currency import Currency


class Cost:

    def __init__(self):
        self.value = 0.0
        self.currency = Currency()

    def get_cost(self, value, currency_id):
        self.value = value
        self.currency.get_currency(currency_id)
        return self

    def __str__(self):
        return str(self.value) + '-' + str(self.currency.id)