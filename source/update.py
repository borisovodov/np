"""Module for update output files."""

from source.countries import countries
from source.maps import maps
from source.senders import senders
from source.stat import stat
from source.tags import tags


def update():
    countries()
    maps()
    senders()
    stat()
    tags()
    print('Update complete.')