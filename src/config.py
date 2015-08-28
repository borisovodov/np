"""Module for saving config."""

import os
import sys
import xml.etree.ElementTree as ET
import xml.dom.minidom as minidom

SETTINGS_PATH = sys.path[0] + '/data/settings.xml'


def create_config():
    blogger_blog_name = input('Create config file.\nInput Blog Name: ').replace(' ', '').lower()
    blogger_blog_id = input('Input Blog ID: ')
    google_client_id = input('Input Google Client ID: ')
    google_client_secret = input('Input Google Client Secret: ')
    flickr_key = input('Input Flickr Key: ')
    flickr_secret = input('Input Flickr Secret: ')
    drive_folder_marker_id = input('Input Markers Folder ID: ')
    drive_folder_map_id = input('Input Map Folder ID: ')

    settings = ET.Element('settings')

    google_client_id_element = ET.SubElement(settings, 'setting')
    ET.SubElement(google_client_id_element, 'name').text = 'google_client_id'
    ET.SubElement(google_client_id_element, 'value').text = google_client_id

    google_client_secret_element = ET.SubElement(settings, 'setting')
    ET.SubElement(google_client_secret_element, 'name').text = 'google_client_secret'
    ET.SubElement(google_client_secret_element, 'value').text = google_client_secret

    flickr_key_element = ET.SubElement(settings, 'setting')
    ET.SubElement(flickr_key_element, 'name').text = 'flickr_key'
    ET.SubElement(flickr_key_element, 'value').text = flickr_key

    flickr_secret_element = ET.SubElement(settings, 'setting')
    ET.SubElement(flickr_secret_element, 'name').text = 'flickr_secret'
    ET.SubElement(flickr_secret_element, 'value').text = flickr_secret

    blogger_blog_name_element = ET.SubElement(settings, 'setting')
    ET.SubElement(blogger_blog_name_element, 'name').text = 'blogger_blog_name'
    ET.SubElement(blogger_blog_name_element, 'value').text = blogger_blog_name

    blogger_blog_id_element = ET.SubElement(settings, 'setting')
    ET.SubElement(blogger_blog_id_element, 'name').text = 'blogger_blog_id'
    ET.SubElement(blogger_blog_id_element, 'value').text = blogger_blog_id

    drive_folder_marker_id_element = ET.SubElement(settings, 'setting')
    ET.SubElement(drive_folder_marker_id_element, 'name').text = 'drive_folder_marker_id'
    ET.SubElement(drive_folder_marker_id_element, 'value').text = drive_folder_marker_id

    drive_folder_map_id_element = ET.SubElement(settings, 'setting')
    ET.SubElement(drive_folder_map_id_element, 'name').text = 'drive_folder_map_id'
    ET.SubElement(drive_folder_map_id_element, 'value').text = drive_folder_map_id

    ET.ElementTree(settings).write(SETTINGS_PATH, encoding='UTF-8', xml_declaration=True)
    xml = minidom.parse(SETTINGS_PATH)
    pretty_xml = xml.toprettyxml(encoding='UTF-8')
    f = open(SETTINGS_PATH, 'wb')
    f.write(pretty_xml)
    f.close()
    print('Config file created.')

if not os.path.isfile(SETTINGS_PATH):
    create_config()


def config(parameter):
    value = ''
    settings = ET.parse(SETTINGS_PATH).getroot()
    for setting in settings.iter('setting'):
        if setting.find('name').text == parameter:
            value = setting.find('value').text
            break
    return value