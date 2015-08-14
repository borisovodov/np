"""This module contain Sender class."""

from .db import get_attribute


class Sender:

    def __init__(self):
        self.id = 0
        self.name = ''

    def get_sender(self, sender_id):
        self.id = sender_id
        self.name = get_attribute(self, 'name')
        return self

    def __str__(self):
        return '\'' + str(self.id) + '\', \'' + self.name + '\''

    def __dir__(self):
        return ['id', 'name']