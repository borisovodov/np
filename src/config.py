"""Module for saving config."""

import os
import sys
import xml.etree.ElementTree as ElementTree
import xml.dom.minidom as minidom

SETTINGS_PATH = os.path.join(sys.path[0], 'data', 'settings.xml')


def create_config():
    blogger_blog_name = input('Create config file.\nInput Blog Name: ').replace(' ', '').lower()
    blogger_blog_id = input('Input Blog ID: ')
    google_client_id = input('Input Google Client ID: ')
    google_client_secret = input('Input Google Client Secret: ')
    flickr_key = input('Input Flickr Key: ')
    flickr_secret = input('Input Flickr Secret: ')
    path_to_photos = input('Input path to photos (without "/" at the end): ')

    settings = ElementTree.Element('settings')

    google_client_id_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(google_client_id_element, 'name').text = 'google_client_id'
    ElementTree.SubElement(google_client_id_element, 'value').text = google_client_id

    google_client_secret_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(google_client_secret_element, 'name').text = 'google_client_secret'
    ElementTree.SubElement(google_client_secret_element, 'value').text = google_client_secret

    flickr_key_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(flickr_key_element, 'name').text = 'flickr_key'
    ElementTree.SubElement(flickr_key_element, 'value').text = flickr_key

    flickr_secret_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(flickr_secret_element, 'name').text = 'flickr_secret'
    ElementTree.SubElement(flickr_secret_element, 'value').text = flickr_secret

    blogger_blog_name_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(blogger_blog_name_element, 'name').text = 'blogger_blog_name'
    ElementTree.SubElement(blogger_blog_name_element, 'value').text = blogger_blog_name

    blogger_blog_id_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(blogger_blog_id_element, 'name').text = 'blogger_blog_id'
    ElementTree.SubElement(blogger_blog_id_element, 'value').text = blogger_blog_id

    path_to_photos_element = ElementTree.SubElement(settings, 'setting')
    ElementTree.SubElement(path_to_photos_element, 'name').text = 'path_to_photos'
    ElementTree.SubElement(path_to_photos_element, 'value').text = path_to_photos

    ElementTree.ElementTree(settings).write(SETTINGS_PATH, encoding='UTF-8', xml_declaration=True)
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
    settings = ElementTree.parse(SETTINGS_PATH).getroot()
    for setting in settings.iter('setting'):
        if setting.find('name').text == parameter:
            value = setting.find('value').text
            break
    return value
