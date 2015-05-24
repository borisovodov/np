"""Module for saving config."""

import os
from sys import path


def create_config():
    key_google = input('Create config file.\nInput Google API key: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')
    content = 'keys = {\'google\': \'' + key_google + '\', \'flickr\': \'' + key_flickr + '\', \'flickr_secret\': \''\
              + key_flickr_secret + '\'}'
    if not os.path.isdir(path[0] + '/data'):
        os.makedirs(path[0] + '/data')
    file_config = open(path[0] + '/data/settings.py', encoding='utf-8', mode='w')
    file_config.write(content)
    file_config.close()
    print('Config file created.')

if not os.path.isdir(path[0] + '/data'):
    os.makedirs(path[0] + '/data')
elif not os.path.isfile(path[0] + '/data/settings.py'):
    create_config()

import data.settings

keys = data.settings.keys