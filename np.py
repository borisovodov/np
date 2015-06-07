"""np is a program for easy work with database of newspapers,
uploading scans on Flickr and generate HTML files for Blogspot.

Main module of program.
"""

__author__ = 'Boris Ovodov'
__version__ = '1.0.3'

import sys
import os

PATH = sys.path[0]

if not os.path.isdir(PATH + '/data'):
    os.makedirs(PATH + '/data')

if __name__ == '__main__':
    from source.add import add
    from source.post import post
    from source.url import url
    from source.update import update
    from source.db import sql, newspapers
    #import source.blog

    if len(newspapers) == 0:
        print('Database is empty. Add newspaper.')
        add()

    while True:
        menu = input('\nWhat you want?\nAdd newspaper\nPost\nURL\nUpdate\nQuery\nExit\n').lower()
        if menu == 'add' or menu == 'add newspaper' or menu == 'newspaper' or menu == 'a':
            add()
        elif menu == 'post' or menu == 'p':
            post()
        elif menu == 'url':
            url()
        elif menu == 'update' or menu == 'u':
            update()
        elif menu == 'query' or menu == 'q':
            sql()
        elif menu == 'exit' or menu == 'e':
            break
        else:
            print('Wrong! Please, input again.')
        input('Press Enter to continue.')