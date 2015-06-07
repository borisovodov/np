"""Module for update output files."""

from source.countries import countries
from source.maps import maps
from source.senders import senders
from source.stat import stat
from source.tags import tags
from source.blog import authorization_blogger, update_page


def update():
    blog = authorization_blogger()
    update_page(blog=blog, name='Countries', content=countries())
    print('Update Countries.')
    maps()
    update_page(blog=blog, name='Senders', content=senders())
    print('Update Senders.')
    update_page(blog=blog, name='Statistic', content=stat())
    print('Update Statistic.')
    update_page(blog=blog, name='Tags', content=tags())
    print('Update Tags.')
    print('Update complete.')