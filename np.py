"""np is a program for easy work with database of newspapers,
uploading scans on Flickr and generate HTML files for Blogspot.

Python 3.4.3
SQLite 3.8.3.1
PIP 6.0.8
FlickrAPI 2.0

Main module of program
"""

__author__ = 'Boris Ovodov'
__version__ = '1.0.0'

import sys

PATH = sys.path[0]

if __name__ == '__main__':
    from source.add import add
    from source.post import post
    from source.url import url
    from source.update import update
    from source.db import db

    choise = False
    while choise == False:
        menu = input('\nWhat you want?\nAdd newspaper\nPost\nURL\nUpdate\nQuery\nExit\n').lower()
        if menu == 'add' or menu == 'add newspaper' or menu == 'newspaper' or menu == 'a':
            choise = True
            add()
        elif menu == 'post' or menu == 'p':
            choise = True
            post()
        elif menu == 'url':
            choise = True
            url()
        elif menu == 'update' or menu == 'u':
            choise = True
            update()
        elif menu == 'query' or menu == 'q':
            choise = True
            db()
        elif menu == 'exit' or menu == 'e':
            sys.exit(0)
        else:
            print('Wrong! Please, input again.')