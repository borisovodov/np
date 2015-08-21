"""This module contain Format class."""

from .db import get_attribute_by_id, get_id_by_attribute


class Format:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.height = 0
        self.width = 0
        self.aspect_ratio = ''

    def get_format_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        self.height = int(get_attribute_by_id(self, 'height'))
        self.width = int(get_attribute_by_id(self, 'width'))
        self.aspect_ratio = get_attribute_by_id(self, 'aspect_ratio')
        return self

    def get_format_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        self.get_format_by_id()
        return self

    def __str__(self):
        return '\'' + self.name + '\', \'' + str(self.height) + '\', \'' + str(self.width) + '\', \''\
               + self.aspect_ratio + '\''

    def __dir__(self):
        return ['name', 'height', 'width', 'aspect_ratio']