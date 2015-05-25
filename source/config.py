"""Module for saving config."""

import os
import xml.etree.ElementTree as ET
from np import PATH


def create_config():
    key_google = input('Create config file.\nInput Google API key: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')
    content = 'keys = {\'google\': \'' + key_google + '\', \'flickr\': \'' + key_flickr + '\', \'flickr_secret\': \''\
              + key_flickr_secret + '\'}'

    settings = ET.Element('settings')
    keys = ET.SubElement(settings, 'keys')
    google = ET.SubElement(keys, 'google')
    google_api = ET.SubElement(google, 'google_api')
    flickr = ET.SubElement(keys, 'flickr')
    flickr_api = ET.SubElement(flickr, 'flickr_key')
    flickr_secret = ET.SubElement(flickr, 'flickr_secret')
    google_api.text = key_google
    flickr_api.text = key_flickr
    flickr_secret.text = key_flickr_secret

    xml_tree = ET.ElementTree(settings)
    xml_tree.write(PATH + '/data/settings.xml')

    file_config = open(PATH + '/data/settings.py', encoding='utf-8', mode='w')
    file_config.write(content)
    file_config.close()
    print('Config file created.')

if not os.path.isfile(PATH + '/data/settings.py'):
    create_config()

import data.settings

keys = data.settings.keys