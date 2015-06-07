"""Module for update output files."""

from source.countries import countries
from source.maps import maps
from source.senders import senders
from source.stat import stat
from source.tags import tags
from source.blog import authorization_blogger, update_page


def update():
    blog = authorization_blogger()
    maps()
    update_page(blog=blog, body=countries())
    print('Update Countries.')
    update_page(blog=blog, body=senders())
    print('Update Senders.')
    update_page(blog=blog, body=stat())
    print('Update Statistic.')
    update_page(blog=blog, body=tags())
    print('Update Tags.')
    print('Update complete.')