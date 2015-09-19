"""Module for update output files."""

from .countries import countries
from .maps import maps
from .senders import senders
#from .stat import stat
from .tags import tags
from src.blog import authorization_blogger, update_page
from src.drive import authorization_drive, update_map


def update(modeladmin, request, queryset):
    drive = authorization_drive()
    maps()
    update_map(drive=drive)
    blog = authorization_blogger()
    update_page(blog=blog, body=countries())
    update_page(blog=blog, body=senders())
    #update_page(blog=blog, body=stat())
    update_page(blog=blog, body=tags())