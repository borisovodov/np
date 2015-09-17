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
from src.start import start
from src.migration import migration
from src.export import export

if not os.path.isdir(sys.path[0] + '/data'):
    os.makedirs(sys.path[0] + '/data')

if not os.path.isdir(sys.path[0] + '/tmp'):
    os.makedirs(sys.path[0] + '/tmp')

setup()

while True:
    menu = input('\nWhat you want?\nStart app\nExport\nMigration\nUpdate app\nExit\n').lower()
    if menu == 'start' or menu == 's' or menu == 'start app':
        start()
    elif menu == 'export' or menu == 'exp':
        export()
    elif menu == 'migration' or menu == 'm':
        migration()
    elif menu == 'update' or menu == 'u' or menu == 'update app':
        update()
    elif menu == 'exit' or menu == 'e':
        break
    else:
        print('Wrong! Please, input again.')