"""Module for setup and update outer module."""

import pip
import os


def setup():
    modules = []
    for module in pip.get_installed_distributions():
        modules.append(module.key)
    if 'django' not in modules:
        print('Install django...')
        os.system('pip install django')
        print('Complete installing django.')
    if 'google-api-python-client' not in modules:
        print('Install google-api...')
        os.system('pip install google-api-python-client')
        print('Complete installing google-api.')
    if 'flickrapi' not in modules:
        print('Install flickrapi...')
        os.system('pip install flickrapi')
        print('Complete installing flickrapi.')


def update():
    print('Update pip...')
    os.system('pip install --upgrade pip')
    print('Complete updating pip.')
    print('Update django...')
    os.system('pip install --upgrade django')
    print('Complete updating django.')
    print('Update google-api...')
    os.system('pip install --upgrade google-api-python-client')
    print('Complete updating google-api.')
    print('Update flickrapi...')
    os.system('pip install --upgrade flickrapi')
    print('Complete updating flickrapi.')