"""This module contain Country class."""

from .config import ids
from .language import Language


class Country:

    def __init__(self):
        self.id = 0
        self.name = ''
        self.languages = [Language()]
        self.population = 0

    def marker(self):
        return 'https://googledrive.com/host/' + ids['drive_folder_marker_id'] + '/' + self.name.lower() + '.png'

    def __str__(self):
        return self.name