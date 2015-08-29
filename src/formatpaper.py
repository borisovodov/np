"""This module contain Format class."""

from .db import get_attribute_by_id, get_id_by_attribute, list_of


class FormatPaper:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.height = 0
        self.width = 0

    def get_format_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        self.height = int(get_attribute_by_id(self, 'height'))
        self.width = int(get_attribute_by_id(self, 'width'))
        return self

    def get_format_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        self.get_format_by_id()
        return self

    def __str__(self):
        return '\'' + str(self.height) + '\', \'' + self.name + '\', \''\
               + str(self.width) + '\''

    def __dir__(self):
        return ['height', 'name', 'width']


def formats():
    table_formats = []
    for row in list_of('formatpaper'):
        formatpaper = FormatPaper()
        formatpaper.id = int(row)
        table_formats.append(formatpaper.get_format_by_id())
    return table_formats