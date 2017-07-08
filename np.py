"""np is a program for easy work with database of newspapers,
uploading scans on Flickr,
creating posts and updating pages on Blogger.

Main module of program.
"""

import sys
import os
import webbrowser
from src.setup_lib import setup, update

__author__ = 'Boris Ovodov'
__version__ = '2.0.2'

if len(sys.argv) > 1:
    if sys.argv[1] == "migration":
        os.system('python manage.py makemigrations')
        os.system('python manage.py migrate')
    elif sys.argv[1] == "update":
        update()

if not os.path.isdir(os.path.join(sys.path[0], 'tmp')):
    os.makedirs(os.path.join(sys.path[0], 'tmp'))

setup()

while True:
    webbrowser.open('http://127.0.0.1:1000/admin/app/newspaper/?all')
    os.system('python manage.py runserver 1000')
