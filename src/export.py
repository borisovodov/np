"""Module for export database to XML file."""

import sys
import xml.etree.ElementTree as ET
from .newspaper import newspapers

EXPORT_PATH = sys.path[0] + '/tmp/newspapers.xml'


def export():
    root = ET.Element('newspapers')
    for newspaper in newspapers():
        newspaper_element = ET.SubElement(root, 'newspaper', id=str(newspaper.id))
        city_element = ET.SubElement(newspaper_element, 'city', id=str(newspaper.city.id))
        ET.SubElement(city_element, 'name').text = newspaper.city.name
        country_element = ET.SubElement(city_element, 'country', id=str(newspaper.city.country.id))
        ET.SubElement(country_element, 'name').text = newspaper.city.country.name
        languages_element = ET.SubElement(country_element, 'languages')
        for language in newspaper.city.country.languages:
            language_element = ET.SubElement(languages_element, 'language', id=str(language.id))
            ET.SubElement(language_element, 'name').text = language.name
            ET.SubElement(language_element, 'population').text = str(language.population)
        ET.SubElement(country_element, 'population').text = str(newspaper.city.country.population)
        ET.SubElement(city_element, 'population').text = str(newspaper.city.population)
        ET.SubElement(city_element, 'hemisphere').text = newspaper.city.hemisphere.name_full()
        ET.SubElement(city_element, 'continent').text = newspaper.city.continent
        ET.SubElement(city_element, 'coastal').text = str(newspaper.city.coastal)
        ET.SubElement(city_element, 'altitude').text = str(newspaper.city.altitude)
        ET.SubElement(newspaper_element, 'title').text = newspaper.title
        ET.SubElement(newspaper_element, 'number').text = newspaper.number
        ET.SubElement(newspaper_element, 'number2').text = newspaper.number2
        ET.SubElement(newspaper_element, 'date').text = str(newspaper.date.day) + '.' + str(newspaper.date.month) + '.'\
                                                                                + str(newspaper.date.year)
        language_element = ET.SubElement(newspaper_element, 'language', id=str(newspaper.language.id))
        ET.SubElement(language_element, 'name').text = newspaper.language.name
        ET.SubElement(language_element, 'population').text = str(newspaper.language.population)
        senders_element = ET.SubElement(newspaper_element, 'senders')
        for sender in newspaper.senders:
            sender_element = ET.SubElement(senders_element, 'sender', id=str(sender.id))
            ET.SubElement(sender_element, 'name').text = sender.name
        coordinates_element = ET.SubElement(newspaper_element, 'coordinates')
        ET.SubElement(coordinates_element, 'latitude').text = str(newspaper.coordinates.latitude)
        ET.SubElement(coordinates_element, 'longitude').text = str(newspaper.coordinates.longitude)

    ET.ElementTree(root).write(EXPORT_PATH, encoding='UTF-8', xml_declaration=True)
    print('Export file created.')