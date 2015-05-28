"""Module for work with database."""

import sqlite3
import datetime
import os
from np import PATH
from source.newspaper import Newspaper


def create_database():
    connect = sqlite3.connect(PATH + '/data/newspapers.db')
    cursor = connect.cursor()
    cursor.execute('CREATE TABLE newspapers ('
                   'id INTEGER PRIMARY KEY, '
                   'city TEXT, '
                   'country TEXT, '
                   'title TEXT, '
                   'number TEXT, '
                   'number2 TEXT, '
                   'date TEXT, '
                   'language TEXT, '
                   'senders TEXT, '
                   'latitude REAL, '
                   'longitude REAL, '
                   'continent TEXT, '
                   'hemisphere TEXT, '
                   'population INTEGER, '
                   'date_brought TEXT, '
                   'url TEXT)')
    connect.commit()
    connect.close()
    print('Database created.')

if not os.path.isfile(PATH + '/data/newspapers.db'):
        create_database()


def query(command):  # Replace all work with database here.
    connect = sqlite3.connect(PATH + '/data/newspapers.db')
    cursor = connect.cursor()
    table = cursor.execute(command.replace('\'', '\"'))
    # Make work without newspaper (only attribute).
    query_newspapers = []
    for row in table:
        newspaper = Newspaper()
        newspaper.id = int(row[0])
        newspaper.city = row[1]
        newspaper.country = row[2]
        newspaper.title = row[3]
        newspaper.number = row[4]
        newspaper.number2 = row[5]
        newspaper.date = datetime.date(day=int(row[6].split('.')[0]), month=int(row[6].split('.')[1]),
                                       year=int(row[6].split('.')[2]))
        newspaper.language = row[7]
        newspaper.senders = row[8].split(',')
        newspaper.latitude = float(row[9])
        newspaper.longitude = float(row[10])
        newspaper.continent = row[11]
        newspaper.hemisphere = row[12]
        newspaper.population = int(row[13])
        newspaper.date_brought = datetime.date(day=int(row[14].split('.')[0]), month=int(row[14].split('.')[1]),
                                               year=int(row[14].split('.')[2]))
        newspaper.url = row[15]
        query_newspapers.append(newspaper)
    connect.commit()
    connect.close()
    return query_newspapers

newspapers = query('SELECT * FROM newspapers')


def sql():
    command = input('Input SQL command (only SELECT *): ')
    table = query(command)
    for row in table:
        print(row)
    print('Query completed.')