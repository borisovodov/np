"""Module for update output files."""

from .countries import countries
from .maps import maps
from .senders import senders
from .stat import stat
from .tags import tags
from .blog import authorization_blogger, update_page
from .drive import authorization_drive, update_map


def update():
    print('Update Pages.')
    drive = authorization_drive()
    maps()
    update_map(drive=drive)
    print('Update Map.')
    blog = authorization_blogger()
    update_page(blog=blog, body=countries())
    print('Update Countries.')
    update_page(blog=blog, body=senders())
    print('Update Senders.')
    update_page(blog=blog, body=stat())
    print('Update Statistic.')
    update_page(blog=blog, body=tags())
    print('Update Tags.')
    print('Update complete.')