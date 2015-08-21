"""This module contain Cost class."""

from .currency import Currency


class Cost:

    def __init__(self):
        self.value = 0.0
        self.currency = Currency()

    def get_cost(self, cost_string):
        self.value = float(cost_string.split('-')[0])
        self.currency.id = int(cost_string.split('-')[1])
        self.currency.get_currency_by_id()
        return self

    def __str__(self):
        return str(self.value) + '-' + str(self.currency.id)