"""Module for adding URL of post with newspaper in database."""

from source.db import query


def add_url(id_newspaper, url_str):
    query('UPDATE newspapers SET url = \'' + url_str + '\' WHERE id = ' + str(id_newspaper))
    print('URL added.')