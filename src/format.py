"""This module contain Format class."""

from .db import get_attribute


class Format:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.height = 0
        self.width = 0
        self.aspect_ratio = ''

    def get_format(self, format_id):
        self.id = format_id
        self.name = get_attribute(self, 'name')
        self.height = int(get_attribute(self, 'height'))
        self.width = int(get_attribute(self, 'width'))
        self.aspect_ratio = get_attribute(self, 'aspect_ratio')
        return self

    def __str__(self):
        return self.name

    def __iter__(self):
        return {
            'id': self.id,
            'name': self.name,
            'height': self.height,
            'width': self.width,
            'aspect_ratio': self.aspect_ratio
        }