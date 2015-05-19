"""Module for adding URL of post with newspaper in database."""

from db import query
from func import next_step

id = int(input('Input ID newspaper: '))
url = input('Input URL post newspaper: ').replace('.ru/', '.com/')

query('UPDATE newspapers SET url = \'' + url + '\' WHERE id = ' + str(id))

print('URL added.')
next_step()