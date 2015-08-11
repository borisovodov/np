"""This module contain Cost class."""

from .currency import Currency


class Cost:

    def __init__(self):
        self.value = 0.0
        self.currency = Currency()

    def __str__(self):
        return str(self.value) + ' ' + self.currency.symbol