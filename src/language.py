"""This module contain Language class."""

from .db import get_attributes


class Language:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.population = 0

    def get_language(self, language_id):
        for row in get_attributes('language', language_id):
            self.id = int(row[0])
            self.name = row[1]
            self.population = int(row[2])
        return self

    def __str__(self):
        return self.name