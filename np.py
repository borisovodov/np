"""np is a program for easy work with database of newspapers,
uploading scans on Flickr and maps on Google Drive,
creating posts and updating pages on Blogger.

Main module of program.
"""

__author__ = 'Boris Ovodov'
__version__ = '1.1.3'

import sys
import os
from src.setup_lib import setup, update

if not os.path.isdir(os.path.join(sys.path[0], 'tmp')):
    os.makedirs(os.path.join(sys.path[0], 'tmp'))

setup()

while True:
    menu = input('\nWhat you want?\nStart app\nMigration\nSuperuser\nUpdate app\nExit\n').lower()
    if menu == 'start' or menu == 's' or menu == 'start app':
        os.system('python manage.py runserver 1000')
    elif menu == 'migration' or menu == 'm':
        os.system('python manage.py makemigrations')
        os.system('python manage.py migrate')
    elif menu == 'superuser':
        os.system('python manage.py createsuperuser')
    elif menu == 'update' or menu == 'u' or menu == 'update app':
        update()
    elif menu == 'exit' or menu == 'e':
        break
    else:
        print('Wrong! Please, input again.')