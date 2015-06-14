"""Module for saving config."""

import os
import sys
import xml.etree.ElementTree as ET

settings_path = sys.path[0] + '/data/settings.xml'


def create_config():
    key_google_api = input('Create config file.\nInput Google API key: ')
    key_google_client_id = input('Input Google Client ID: ')
    key_google_client_secret = input('Input Google Client Secret: ')
    id_blogger_blog = input('Input Blog ID: ')
    id_drive_folder_marker = input('Input Markers Folder ID: ')
    id_drive_folder_map = input('Input Map Folder ID: ')
    key_flickr = input('Input Flickr Key: ')
    key_flickr_secret = input('Input Flickr Secret: ')

    settings = ET.Element('settings')

    keys = ET.SubElement(settings, 'keys')
    ids = ET.SubElement(settings, 'ids')

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

    blogger_blog_id = ET.SubElement(ids, 'id', service='blogger')
    ET.SubElement(blogger_blog_id, 'name').text = 'blogger_blog_id'
    ET.SubElement(blogger_blog_id, 'value').text = id_blogger_blog

    drive_folder_marker_id = ET.SubElement(ids, 'id', service='drive')
    ET.SubElement(drive_folder_marker_id, 'name').text = 'drive_folder_marker_id'
    ET.SubElement(drive_folder_marker_id, 'value').text = id_drive_folder_marker

    drive_folder_map_id = ET.SubElement(ids, 'id', service='drive')
    ET.SubElement(drive_folder_map_id, 'name').text = 'drive_folder_map_id'
    ET.SubElement(drive_folder_map_id, 'value').text = id_drive_folder_map

    ET.ElementTree(settings).write(settings_path, encoding='UTF-8', xml_declaration=True)
    print('Config file created.')

if not os.path.isfile(settings_path):
    create_config()

settings = ET.parse(settings_path).getroot()

keys = {}
for key in settings.find('keys').iter('key'):
    keys.update({key.find('name').text: key.find('value').text})

ids = {}
for id in settings.find('ids').iter('id'):
    ids.update({id.find('name').text: id.find('value').text})