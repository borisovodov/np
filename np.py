"""np is a program for easy work with database of newspapers,
upload scans on Flickr, create posts and update pages on Blogger.

Main module of program.
"""

__author__ = 'Boris Ovodov'
__version__ = '1.1.2'

import sys
import os

if not os.path.isdir(sys.path[0] + '/data'):
    os.makedirs(sys.path[0] + '/data')

if not os.path.isdir(sys.path[0] + '/tmp'):
    os.makedirs(sys.path[0] + '/tmp')

if __name__ == '__main__':
    from src.add import add_newspaper
    from src.post import post
    from src.update import update
    from src.db import db
    from src.export import export

    while True:
        menu = input('\nWhat you want?\nAdd newspaper\nPost\nUpdate\nQuery\nExport\nExit\n').lower()
        if menu == 'add' or menu == 'add newspaper' or menu == 'newspaper' or menu == 'a':
            add_newspaper()
        elif menu == 'post' or menu == 'p':
            post()
        elif menu == 'update' or menu == 'u':
            update()
        elif menu == 'query' or menu == 'q':
            db()
        elif menu == 'export' or menu == 'exp':
            export()
        elif menu == 'exit' or menu == 'e':
            break
        else:
            print('Wrong! Please, input again.')