"""This module contain Sender class."""

from .db import get_attributes


class Sender:

    def __init__(self):
        self.id = 0
        self.name = ''

    def get_sender(self, sender_id):
        for row in get_attributes('sender', sender_id):
            self.id = int(row[0])
            self.name = row[1]
        return self

    def __str__(self):
        return self.name