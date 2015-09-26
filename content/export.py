"""Module for export database to XML file."""

import sys
import os
import datetime
import xml.etree.ElementTree as ElementTree
import xml.dom.minidom as minidom

EXPORT_PATH = os.path.join(sys.path[0], 'export_' + str(datetime.date.today()) + '.xml')


def export(queryset):
    root = ElementTree.Element('newspapers', date_export=str(datetime.datetime.now()))
    for newspaper in queryset:
        newspaper_element = ElementTree.SubElement(root, 'newspaper')
        city_element = ElementTree.SubElement(newspaper_element, 'city')
        ElementTree.SubElement(city_element, 'name').text = newspaper.city.name
        country_element = ElementTree.SubElement(city_element, 'country')
        ElementTree.SubElement(country_element, 'name').text = newspaper.city.country.name
        languages_element = ElementTree.SubElement(country_element, 'languages')
        for language in newspaper.city.country.languages.all():
            language_element = ElementTree.SubElement(languages_element, 'language')
            ElementTree.SubElement(language_element, 'name').text = language.name
            ElementTree.SubElement(language_element, 'population').text = str(language.population)
        ElementTree.SubElement(country_element, 'population').text = str(newspaper.city.country.population)
        ElementTree.SubElement(city_element, 'population').text = str(newspaper.city.population)
        ElementTree.SubElement(city_element, 'hemisphere').text = newspaper.city.hemisphere
        ElementTree.SubElement(city_element, 'continent').text = newspaper.city.continent
        ElementTree.SubElement(city_element, 'coastal').text = str(newspaper.city.coastal)
        ElementTree.SubElement(city_element, 'altitude').text = str(newspaper.city.altitude)
        ElementTree.SubElement(newspaper_element, 'title').text = newspaper.title
        ElementTree.SubElement(newspaper_element, 'number').text = newspaper.number
        ElementTree.SubElement(newspaper_element, 'number_2').text = newspaper.number_2
        ElementTree.SubElement(newspaper_element, 'date').text = str(newspaper.date.day) + '.'\
                                                                 + str(newspaper.date.month) + '.'\
                                                                 + str(newspaper.date.year)
        language_element = ElementTree.SubElement(newspaper_element, 'language')
        ElementTree.SubElement(language_element, 'name').text = newspaper.language.name
        ElementTree.SubElement(language_element, 'population').text = str(newspaper.language.population)
        senders_element = ElementTree.SubElement(newspaper_element, 'senders')
        for sender in newspaper.senders.all():
            sender_element = ElementTree.SubElement(senders_element, 'sender')
            ElementTree.SubElement(sender_element, 'name').text = sender.name
        coordinates_element = ElementTree.SubElement(newspaper_element, 'coordinates')
        ElementTree.SubElement(coordinates_element, 'latitude').text = str(newspaper.coordinates.latitude)
        ElementTree.SubElement(coordinates_element, 'longitude').text = str(newspaper.coordinates.longitude)
        ElementTree.SubElement(newspaper_element, 'date_brought').text = str(newspaper.date_brought.day) + '.'\
                                                                       + str(newspaper.date_brought.month) + '.'\
                                                                       + str(newspaper.date_brought.year)
        ElementTree.SubElement(newspaper_element, 'color').text = newspaper.color
        ElementTree.SubElement(newspaper_element, 'pages').text = str(newspaper.pages)
        format_element = ElementTree.SubElement(newspaper_element, 'format')
        ElementTree.SubElement(format_element, 'name').text = newspaper.format_paper.name
        ElementTree.SubElement(format_element, 'height').text = str(newspaper.format_paper.height)
        ElementTree.SubElement(format_element, 'width').text = str(newspaper.format_paper.width)
        ElementTree.SubElement(newspaper_element, 'type').text = newspaper.type
        costs_element = ElementTree.SubElement(newspaper_element, 'costs')
        for cost in newspaper.cost_set.all():
            cost_element = ElementTree.SubElement(costs_element, 'cost')
            ElementTree.SubElement(cost_element, 'value').text = str(cost.value)
            currency_element = ElementTree.SubElement(cost_element, 'currency')
            ElementTree.SubElement(currency_element, 'name').text = cost.currency.name
            ElementTree.SubElement(currency_element, 'symbol').text = cost.currency.symbol
        ElementTree.SubElement(newspaper_element, 'frequency').text = newspaper.frequency
        ElementTree.SubElement(newspaper_element, 'circulation').text = str(newspaper.circulation)
        ElementTree.SubElement(newspaper_element, 'site').text = newspaper.site
        ElementTree.SubElement(newspaper_element, 'issn').text = newspaper.ISSN
        ElementTree.SubElement(newspaper_element, 'date_start_publication').text = str(newspaper.date_start_publication.day) + '.'\
                                                                    + str(newspaper.date_start_publication.month) + '.'\
                                                                    + str(newspaper.date_start_publication.year)
        ElementTree.SubElement(newspaper_element, 'geotag').text = str(newspaper.geotag)
        ElementTree.SubElement(newspaper_element, 'crossword').text = str(newspaper.crossword)
        ElementTree.SubElement(newspaper_element, 'sudoku').text = str(newspaper.sudoku)
        ElementTree.SubElement(newspaper_element, 'nonogram').text = str(newspaper.nonogram)
        ElementTree.SubElement(newspaper_element, 'kakuro').text = str(newspaper.kakuro)
        ElementTree.SubElement(newspaper_element, 'TV_schedule').text = str(newspaper.TV_schedule)
        ElementTree.SubElement(newspaper_element, 'anecdote').text = str(newspaper.anecdote)
        ElementTree.SubElement(newspaper_element, 'caricature').text = str(newspaper.caricature)
        ElementTree.SubElement(newspaper_element, 'comic_strip').text = str(newspaper.comic_strip)
        ElementTree.SubElement(newspaper_element, 'recipe').text = str(newspaper.recipe)
        ElementTree.SubElement(newspaper_element, 'horoscope').text = str(newspaper.horoscope)
        ElementTree.SubElement(newspaper_element, 'weather_forecast').text = str(newspaper.weather_forecast)
        ElementTree.SubElement(newspaper_element, 'obituary').text = str(newspaper.obituary)
        ElementTree.SubElement(newspaper_element, 'naked_women').text = str(newspaper.naked_women)
        ElementTree.SubElement(newspaper_element, 'church').text = str(newspaper.church)
        ElementTree.SubElement(newspaper_element, 'trash').text = str(newspaper.trash)
        ElementTree.SubElement(newspaper_element, 'extra').text = str(newspaper.extra)
        ElementTree.SubElement(newspaper_element, 'path_to_photos').text = newspaper.path_to_photos
        ElementTree.SubElement(newspaper_element, 'URL').text = newspaper.URL

    ElementTree.ElementTree(root).write(EXPORT_PATH, encoding='UTF-8', xml_declaration=True)
    xml = minidom.parse(EXPORT_PATH)
    pretty_xml = xml.toprettyxml(encoding='UTF-8')
    f = open(EXPORT_PATH, 'wb')
    f.write(pretty_xml)
    f.close()
