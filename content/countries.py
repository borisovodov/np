"""Module for generate countries."""

from collections import defaultdict
from app.models import Tool


def countries(queryset):
    dict_country = defaultdict(list)
    content_countries = ''

    for newspaper in queryset:
        dict_country[newspaper.city.country.name].append(newspaper.city.name)

    for country in sorted(dict_country.items()):
        content_countries += Tool.link(country[0]) + '\n<ul>\n'
        for city in sorted(set(country[1])):
            content_countries += '<li>' + Tool.link(city) + '</li>\n'
        content_countries += '</ul>\n'

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              '<p>Newspapers for this site were brought from many countries and cities:</p>\n'\
              + content_countries\
              + '</div>'

    return {
        'content': content,
        'title': 'Countries'
    }
