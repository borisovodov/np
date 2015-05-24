"""Module for adding URL of post with newspaper in database."""

from source.db import query
from source.func import step

id_newspaper = int(input('Input ID newspaper: '))
url = input('Input URL post newspaper: ').replace('.ru/', '.com/')

query('UPDATE newspapers SET url = \'' + url + '\' WHERE id = ' + str(id_newspaper))

print('URL added.')
step('update')