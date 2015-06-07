"""Module for generate countries."""

from collections import defaultdict
from source.db import newspapers
from source.newspaper import Newspaper


def countries():
    dict_country = defaultdict(list)
    content_countries = ''

    for newspaper in newspapers:
        dict_country[newspaper.country].append(newspaper.city)

    for country in sorted(dict_country.items()):
        content_countries = content_countries + Newspaper.link(country[0]) + '\n<ul>\n'
        for city in sorted(set(country[1])):
            content_countries = content_countries + '<li>' + Newspaper.link(city) + '</li>\n'
        content_countries = content_countries + '</ul>\n'

    return '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
           + '<p>Newspapers for this site were brought from many countries and cities:</p>\n'\
           + content_countries\
           + '</div>'