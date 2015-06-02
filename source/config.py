"""Module for saving config."""

import os
import xml.etree.ElementTree as ET
from np import PATH


def create_config():
    key_google_api = input('Create config file.\nInput Google API key: ')
    key_google_client_id = input('Input Google Client ID: ')
    key_google_client_secret = input('Input Google Client Secret: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')

    settings = ET.Element('settings')
    keys = ET.SubElement(settings, 'keys')

    google_api_key = ET.SubElement(keys, 'key', service='google')
    ET.SubElement(google_api_key, 'name').text = 'google_api_key'
    ET.SubElement(google_api_key, 'value').text = key_google_api

    google_client_id = ET.SubElement(keys, 'key', service='google')
    ET.SubElement(google_client_id, 'name').text = 'google_client_id'
    ET.SubElement(google_client_id, 'value').text = key_google_client_id

    google_client_secret = ET.SubElement(keys, 'key', service='google')
    ET.SubElement(google_client_secret, 'name').text = 'google_client_secret'
    ET.SubElement(google_client_secret, 'value').text = key_google_client_secret

    flickr_key = ET.SubElement(keys, 'key', service='flickr')
    ET.SubElement(flickr_key, 'name').text = 'flickr_key'
    ET.SubElement(flickr_key, 'value').text = key_flickr

    flickr_secret = ET.SubElement(keys, 'key', service='flickr')
    ET.SubElement(flickr_secret, 'name').text = 'flickr_secret'
    ET.SubElement(flickr_secret, 'value').text = key_flickr_secret

    ET.ElementTree(settings).write(PATH + '/data/settings.xml', encoding='UTF-8', xml_declaration=True)
    print('Config file created.')

if not os.path.isfile(PATH + '/data/settings.xml'):
    create_config()

settings = ET.parse(PATH + '/data/settings.xml').getroot()

keys = {}
for key in settings.find('keys').iter('key'):
    keys.update({key.find('name').text: key.find('value').text})