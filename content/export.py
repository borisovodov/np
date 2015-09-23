"""Module for export database to XML file."""

import sys
import os
import datetime
import xml.etree.ElementTree as ET
import xml.dom.minidom as minidom

EXPORT_PATH = os.path.join(sys.path[0], 'export_' + str(datetime.date.today()) + '.xml')


def export(queryset):
    root = ET.Element('newspapers', date_export=str(datetime.datetime.now()))
    for newspaper in queryset:
        newspaper_element = ET.SubElement(root, 'newspaper')
        city_element = ET.SubElement(newspaper_element, 'city')
        ET.SubElement(city_element, 'name').text = newspaper.city.name
        country_element = ET.SubElement(city_element, 'country')
        ET.SubElement(country_element, 'name').text = newspaper.city.country.name
        languages_element = ET.SubElement(country_element, 'languages')
        for language in newspaper.city.country.languages.all():
            language_element = ET.SubElement(languages_element, 'language')
            ET.SubElement(language_element, 'name').text = language.name
            ET.SubElement(language_element, 'population').text = str(language.population)
        ET.SubElement(country_element, 'population').text = str(newspaper.city.country.population)
        ET.SubElement(city_element, 'population').text = str(newspaper.city.population)
        ET.SubElement(city_element, 'hemisphere').text = newspaper.city.hemisphere
        ET.SubElement(city_element, 'continent').text = newspaper.city.continent
        ET.SubElement(city_element, 'coastal').text = str(newspaper.city.coastal)
        ET.SubElement(city_element, 'altitude').text = str(newspaper.city.altitude)
        ET.SubElement(newspaper_element, 'title').text = newspaper.title
        ET.SubElement(newspaper_element, 'number').text = newspaper.number
        ET.SubElement(newspaper_element, 'number_2').text = newspaper.number_2
        ET.SubElement(newspaper_element, 'date').text = str(newspaper.date.day) + '.' + str(newspaper.date.month) + '.'\
                                                                                + str(newspaper.date.year)
        language_element = ET.SubElement(newspaper_element, 'language')
        ET.SubElement(language_element, 'name').text = newspaper.language.name
        ET.SubElement(language_element, 'population').text = str(newspaper.language.population)
        senders_element = ET.SubElement(newspaper_element, 'senders')
        for sender in newspaper.senders.all():
            sender_element = ET.SubElement(senders_element, 'sender')
            ET.SubElement(sender_element, 'name').text = sender.name
        coordinates_element = ET.SubElement(newspaper_element, 'coordinates')
        ET.SubElement(coordinates_element, 'latitude').text = str(newspaper.coordinates.latitude)
        ET.SubElement(coordinates_element, 'longitude').text = str(newspaper.coordinates.longitude)
        ET.SubElement(newspaper_element, 'date_brought').text = str(newspaper.date_brought.day) + '.'\
                                                                + str(newspaper.date_brought.month) + '.'\
                                                                + str(newspaper.date_brought.year)
        ET.SubElement(newspaper_element, 'color').text = newspaper.color
        ET.SubElement(newspaper_element, 'pages').text = str(newspaper.pages)
        format_element = ET.SubElement(newspaper_element, 'format')
        ET.SubElement(format_element, 'name').text = newspaper.format_paper.name
        ET.SubElement(format_element, 'height').text = str(newspaper.format_paper.height)
        ET.SubElement(format_element, 'width').text = str(newspaper.format_paper.width)
        ET.SubElement(newspaper_element, 'type').text = newspaper.type
        costs_element = ET.SubElement(newspaper_element, 'costs')
        for cost in newspaper.cost_set.all():
            cost_element = ET.SubElement(costs_element, 'cost')
            ET.SubElement(cost_element, 'value').text = str(cost.value)
            currency_element = ET.SubElement(cost_element, 'currency')
            ET.SubElement(currency_element, 'name').text = cost.currency.name
            ET.SubElement(currency_element, 'symbol').text = cost.currency.symbol
        ET.SubElement(newspaper_element, 'frequency').text = newspaper.frequency
        ET.SubElement(newspaper_element, 'circulation').text = str(newspaper.circulation)
        ET.SubElement(newspaper_element, 'site').text = newspaper.site
        ET.SubElement(newspaper_element, 'issn').text = newspaper.ISSN
        ET.SubElement(newspaper_element, 'date_start_publication').text = str(newspaper.date_start_publication.day) + '.'\
                                                                          + str(newspaper.date_start_publication.month) + '.'\
                                                                          + str(newspaper.date_start_publication.year)
        ET.SubElement(newspaper_element, 'geotag').text = str(newspaper.geotag)
        ET.SubElement(newspaper_element, 'crossword').text = str(newspaper.crossword)
        ET.SubElement(newspaper_element, 'sudoku').text = str(newspaper.sudoku)
        ET.SubElement(newspaper_element, 'nonogram').text = str(newspaper.nonogram)
        ET.SubElement(newspaper_element, 'kakuro').text = str(newspaper.kakuro)
        ET.SubElement(newspaper_element, 'TV_schedule').text = str(newspaper.TV_schedule)
        ET.SubElement(newspaper_element, 'anecdote').text = str(newspaper.anecdote)
        ET.SubElement(newspaper_element, 'caricature').text = str(newspaper.caricature)
        ET.SubElement(newspaper_element, 'comic_strip').text = str(newspaper.comic_strip)
        ET.SubElement(newspaper_element, 'recipe').text = str(newspaper.recipe)
        ET.SubElement(newspaper_element, 'horoscope').text = str(newspaper.horoscope)
        ET.SubElement(newspaper_element, 'weather_forecast').text = str(newspaper.weather_forecast)
        ET.SubElement(newspaper_element, 'obituary').text = str(newspaper.obituary)
        ET.SubElement(newspaper_element, 'naked_women').text = str(newspaper.naked_women)
        ET.SubElement(newspaper_element, 'church').text = str(newspaper.church)
        ET.SubElement(newspaper_element, 'trash').text = str(newspaper.trash)
        ET.SubElement(newspaper_element, 'extra').text = str(newspaper.extra)
        ET.SubElement(newspaper_element, 'path_to_photos').text = newspaper.path_to_photos
        ET.SubElement(newspaper_element, 'URL').text = newspaper.URL

    ET.ElementTree(root).write(EXPORT_PATH, encoding='UTF-8', xml_declaration=True)
    xml = minidom.parse(EXPORT_PATH)
    pretty_xml = xml.toprettyxml(encoding='UTF-8')
    f = open(EXPORT_PATH, 'wb')
    f.write(pretty_xml)
    f.close()