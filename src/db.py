"""Module for work with database."""

import sqlite3
import os
import sys

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
                   'format_paper INTEGER, '
                   'type TEXT, '
                   'costs TEXT, '
                   'frequency TEXT, '
                   'circulation INTEGER, '
                   'site TEXT, '
                   'issn TEXT, '
                   'date_start_publication_day INTEGER, '
                   'date_start_publication_month INTEGER, '
                   'date_start_publication_year INTEGER, '
                   'geotag TEXT, '
                   'crossword TEXT, '
                   'sudoku TEXT, '
                   'nonogram TEXT, '
                   'kakuro TEXT, '
                   'ad_toyota TEXT, '
                   'tv_schedule TEXT, '
                   'anecdote TEXT, '
                   'caricature TEXT, '
                   'comic_strip TEXT, '
                   'recipe TEXT, '
                   'horoscope TEXT, '
                   'weather_forecast TEXT, '
                   'naked_women TEXT, '
                   'church TEXT, '
                   'trash TEXT, '
                   'url TEXT)')
    cursor.execute('CREATE TABLE city ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'country INTEGER, '
                   'population INTEGER, '
                   'hemisphere TEXT, '
                   'continent TEXT, '
                   'coastal TEXT, '
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
    cursor.execute('CREATE TABLE formatpaper ('
                   'id INTEGER PRIMARY KEY, '
                   'name TEXT, '
                   'height INTEGER, '
                   'width INTEGER)')
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
        print(command)
        connect = sqlite3.connect(DB_PATH)
        cursor = connect.cursor()
        table_tuple = cursor.execute(command.replace('\'', '\"'))
        table = []
        for row in table_tuple:
            for attribute in row:
                table.append(attribute)
        connect.commit()
        connect.close()
        return table
    except sqlite3.OperationalError:
        print('Bad query.')


def insert(object_same):
    query('INSERT INTO ' + object_same.__class__.__name__.lower() + '(' + ', '.join(dir(object_same))
          + ') VALUES (' + str(object_same) + ')')


def is_object_by_name(object_same):
    table = query('SELECT * FROM ' + object_same.__class__.__name__.lower()
                  + ' WHERE name = \'' + object_same.name + '\'')
    if len(table) != 0:
        return True
    else:
        return False


def get_attribute_by_id(object_same, attribute):
    table = query('SELECT ' + attribute + ' FROM ' + object_same.__class__.__name__.lower()
                  + ' WHERE id = \'' + str(object_same.id) + '\'')
    return table[0]


def get_id_by_attribute(object_same, attribute):
    table = query('SELECT id FROM ' + object_same.__class__.__name__.lower() + ' WHERE ' + attribute + ' = \''
                  + str(getattr(object_same, attribute)) + '\'')
    return int(table[0])


def set_attribute_by_id(object_same, attribute):
    query('UPDATE ' + object_same.__class__.__name__.lower()
          + ' SET ' + attribute + ' = \'' + str(getattr(object_same, attribute)) + '\' '
          + ' WHERE id = \'' + str(object_same.id) + '\'')


def search(object_type, attribute, value):
    return query('SELECT id FROM ' + object_type + ' WHERE ' + attribute + ' = \'' + str(value) + '\'')


def list_of(object_type, order_by='id'):
    return query('SELECT id FROM ' + object_type + ' ORDER BY ' + order_by)


def db():
    command = input('Input SQL command: ')
    table = query(command)
    print(table)
    print('Query completed.')