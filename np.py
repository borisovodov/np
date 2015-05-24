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

import os
import sys
from source.func import PATH

if __name__ == '__main__':
    choise = False
    while choise == False:
        menu = input('\nWhat you want?\nAdd newspaper\nPost\nURL\nUpdate\nQuery\nExit\n').lower()
        if menu == 'add' or menu == 'add newspaper' or menu == 'newspaper' or menu == 'a':
            choise = True
            os.system('python "' + PATH + '/source/add.py"')
        elif menu == 'post' or menu == 'p':
            choise = True
            os.system('python "' + PATH + '/source/post.py"')
        elif menu == 'url':
            choise = True
            os.system('python "' + PATH + '/source/url.py"')
        elif menu == 'update' or menu == 'u':
            choise = True
            os.system('python "' + PATH + '/source/update.py"')
        elif menu == 'query' or menu == 'q':
            choise = True
            os.system('python "' + PATH + '/source/db.py"')
        elif menu == 'exit' or menu == 'e':
            sys.exit(0)
        else:
            print('Wrong! Please, input again.')