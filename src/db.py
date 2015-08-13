"""Module for work with database."""

import sqlite3
import os
import sys
from .newspaper import Newspaper

DB_PATH = sys.path[0] + '/data/newspapers.db'


def create_database():
    connect = sqlite3.connect(DB_PATH)
    cursor = connect.cursor()
    cursor.execute('CREATE TABLE newspaper ('
                   'id INTEGER PRIMARY KEY, '
                   'city INTEGER, '
                   'title TEXT, '
                   'number TEXT, '
                   'number2 TEXT, '
                   'date_day INTEGER, '
                   'date_month INTEGER, '
                   'date_year INTEGER, '
                   'language INTEGER, '
                   'senders TEXT, '
                   'coordinates_latitude REAL, '
                   'coordinates_longitude REAL, '
                   'date_brought_day INTEGER, '
                   'date_brought_month INTEGER, '
                   'date_brought_year INTEGER, '
                   'color TEXT, '
                   'pages INTEGER, '
                   'format INTEGER, '
                   'type TEXT, '
                   'costs TEXT, '
                   'site TEXT, '
                   'issn TEXT, '
                   'date_start_publication_day INTEGER, '
                   'date_start_publication_month INTEGER, '
                   'date_start_publication_year INTEGER, '
                   'circulation INTEGER, '
                   'crossword INTEGER, '
                   'sudoku INTEGER, '
                   'nonogram INTEGER, '
                   'ad_toyota INTEGER, '
                   'program_guide INTEGER, '
                   'anecdote INTEGER, '
                   'caricature INTEGER, '
                   'recipe INTEGER, '
                   'horoscope INTEGER, '
                   'pravda INTEGER, '
                   'naked_women INTEGER, '
                   'church INTEGER, '
                   'url TEXT)')
    cursor.execute('CREATE TABLE city ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'country INTEGER, '
                   'population INTEGER, '
                   'hemisphere TEXT, '
                   'continent TEXT, '
                   'coastal INTEGER, '
                   'altitude REAL)')
    cursor.execute('CREATE TABLE country ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'languages TEXT, '
                   'population INTEGER)')
    cursor.execute('CREATE TABLE currency ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'symbol TEXT)')
    cursor.execute('CREATE TABLE format ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'height INTEGER, '
                   'width INTEGER, '
                   'aspect_ratio TEXT)')
    cursor.execute('CREATE TABLE language ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'population INTEGER)')
    cursor.execute('CREATE TABLE sender ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT)')
    connect.commit()
    connect.close()

if not os.path.isfile(DB_PATH):
        create_database()
        print('Database created.')


def query(command):
    try:
        connect = sqlite3.connect(DB_PATH)
        cursor = connect.cursor()
        table = cursor.execute(command.replace('\'', '\"'))
        connect.commit()
        connect.close()
        return table
    except sqlite3.OperationalError:
        print('Bad query!')


def insert(object_same):
    query('INSERT INTO ' + object_same.__class__.__name__.lower() + '(' + ', '.join(dir(object_same))
          + ') VALUES (' + str(object_same) + ')')


def get_attribute(object_same, attribute):
    return query('SELECT ' + attribute + ' FROM ' + object_same.__class__.__name__.lower()
                 + ' WHERE id = ' + str(object_same.id))


def set_attribute(object_same, attribute):
    query('UPDATE ' + object_same.__class__.__name__.lower()
          + ' SET ' + attribute + ' = \'' + str(getattr(object_same, attribute)) + '\', '
          + ' WHERE id = ' + str(object_same.id))


def newspapers():
    table_newspapers = []
    table = query('SELECT * FROM newspaper')
    for row in table:
        newspaper = Newspaper()
        table_newspapers.append(newspaper.get_newspaper(int(row[0])))
    return table_newspapers


def db():
    command = input('Input SQL command (only SELECT *): ')
    table = query(command)
    for row in table:
        print(row)
    print('Query completed.')