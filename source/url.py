"""Module for adding URL of post with newspaper in database."""

from source.db import query


def url():
    id_newspaper = int(input('Input ID newspaper: '))
    url_str = input('Input URL post newspaper: ').replace('.ru/', '.com/')

    query('UPDATE newspapers SET url = \'' + url_str + '\' WHERE id = ' + str(id_newspaper))

    print('URL added.')