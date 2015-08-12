"""This module contain Format class."""

from .db import get_attributes


class Format:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.height = 0
        self.width = 0
        self.aspect_ratio = ''

    def get_format(self, format_id):
        for row in get_attributes('format', format_id):
            self.id = int(row[0])
            self.name = row[1]
            self.height = int(row[2])
            self.width = int(row[3])
            self.aspect_ratio = row[4]
        return self

    def __str__(self):
        return self.name