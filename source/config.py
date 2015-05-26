"""Module for saving config."""

import os
import xml.etree.ElementTree as ET
from np import PATH


def create_config():
    key_google_api = input('Create config file.\nInput Google API key: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')

    settings = ET.Element('settings')
    keys = ET.SubElement(settings, 'keys')
    ET.SubElement(keys, 'key', service='google', name='google_api_key').text = key_google_api
    ET.SubElement(keys, 'key', service='flickr', name='flickr_key').text = key_flickr
    ET.SubElement(keys, 'key', service='flickr', name='flickr_secret').text = key_flickr_secret
    ET.ElementTree(settings).write(PATH + '/data/settings.xml', encoding='UTF-8', xml_declaration=True)
    print('Config file created.')

if not os.path.isfile(PATH + '/data/settings.xml'):
    create_config()

settings = ET.parse(PATH + '/data/settings.xml').getroot()

keys = {}
for key in settings.iter('key'):
    keys.update({key.get('name'): key.text})