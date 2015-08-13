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
        return self.name

    def __iter__(self):
        return [
            self.id,
            self.name
        ]