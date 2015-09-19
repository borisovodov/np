"""Module for generate countries."""

from collections import defaultdict
from app.models import Newspaper


def countries():
    dict_country = defaultdict(list)
    content_countries = ''

    for newspaper in Newspaper.objects.all():
        dict_country[newspaper.city.country.name].append(newspaper.city.name)

    for country in sorted(dict_country.items()):
        content_countries = content_countries + Newspaper.link(country[0]) + '\n<ul>\n'
        for city in sorted(set(country[1])):
            content_countries = content_countries + '<li>' + Newspaper.link(city) + '</li>\n'
        content_countries = content_countries + '</ul>\n'

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              '<p>Newspapers for this site were brought from many countries and cities:</p>\n'\
              + content_countries\
              + '</div>'

    return {
        'content': content,
        'title': 'Countries'
    }