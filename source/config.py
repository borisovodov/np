"""Module for saving config."""

import os
from source.func import PATH


def create_config():
    key_google = input('Create config file.\nInput Google API key: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')
    content = 'keys = {\'google\': \'' + key_google + '\', \'flickr\': \'' + key_flickr + '\', \'flickr_secret\': \''\
              + key_flickr_secret + '\'}'
    file_config = open(PATH + '/data/settings.py', encoding='utf-8', mode='w')
    file_config.write(content)
    file_config.close()
    print('Config file created.')

if not os.path.isfile(PATH + '/data/settings.py'):
    create_config()

import data.settings

keys = data.settings.keys

if __name__ == '__main__':
    create_config()