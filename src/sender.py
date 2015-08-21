"""This module contain Sender class."""

from .db import get_attribute_by_id, get_id_by_attribute


class Sender:

    def __init__(self):
        self.id = 0
        self.name = ''

    def get_sender_by_id(self):
        self.name = get_attribute_by_id(self, 'name')
        return self

    def get_sender_by_name(self):
        self.id = get_id_by_attribute(self, 'name')
        return self

    def __str__(self):
        return '\'' + self.name + '\''

    def __dir__(self):
        return ['name']