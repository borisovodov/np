"""This module contain Format class."""


class Format:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.height = 0
        self.width = 0
        self.aspect_ratio = ''

    def __str__(self):
        return self.name