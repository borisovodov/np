"""Module generate statistic."""

import collections
from .config import config
from .newspaper import Newspaper, newspapers
from .stat_adding import content_adding

BLOG_NAME = config('blogger_blog_name')


def stat():
    countries = []
    cities = []
    languages = []
    continents = []
    senders = []

    for newspaper in newspapers():
        countries.append(newspaper.city.country.name)
        cities.append(newspaper.city.name)
        languages.append(newspaper.language.name)
        continents.append(newspaper.city.continent)
        for sender in newspaper.senders:
            senders.append(sender.name)

    counter_country = collections.Counter(countries)
    counter_language = collections.Counter(languages)
    counter_continent = collections.Counter(continents)
    counter_sender = collections.Counter(senders)

    newspapers_latitude = newspapers('coordinates_latitude')
    newspapers_longitude = newspapers('coordinates_longitude')

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              '<p>In this site presents newspapers <span style=\"text-decoration: line-through\">' \
              'from around the world</span>. Look at this entertaining statistics:</p>\n'\
              '<ul>\n'\
              '<p><li>A total of ' + str(len(newspapers())) + ' newspapers from <a style=\"text-decoration: underline\" ' \
                                                              'href=\"http://' + BLOG_NAME + '.blogspot.com/p/countries.html\">'\
              + str(len(set(countries))) + ' countries</a> and <a style=\"text-decoration: underline\" ' \
                                           'href=\"http://' + BLOG_NAME + '.blogspot.com/p/countries.html\">'\
              + str(len(set(cities))) + ' cities</a>.</li></p>\n'\
              + '<p><li>Most newspapers from ' + Newspaper.link(counter_country.most_common(1)[0][0]) + '—'\
              + str(counter_country.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>Here are the newspapers on ' + str(len(set(languages))) + ' languages.</li></p>\n'\
              + '<p><li>' + str(counter_language.most_common(1)[0][1]) + ' newspapers were brought on '\
              + Newspaper.link(counter_language.most_common(1)[0][0]) + '.</li></p>\n'\
              + '<p><li>Newspapers were brought from the ' + str(len(set(continents))) + ' continents—'\
              + ', '.join(set(continents)) + '. More then other from '\
              + Newspaper.link(counter_continent.most_common(1)[0][0]) + ': '\
              + str(counter_continent.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>The northernmost newspaper brought ' + newspapers_latitude[-1].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_latitude[-1].city.name) + ', '\
              + Newspaper.link(newspapers_latitude[-1].city.country.name) + ': '\
              + newspapers_latitude[-1].coordinates.format('latitude') + '.</li></p>\n'\
              + '<p><li>The southernmost newspaper brought ' + newspapers_latitude[0].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_latitude[0].city.name) + ', '\
              + Newspaper.link(newspapers_latitude[0].city.country.name) + ': '\
              + newspapers_latitude[0].coordinates.format('latitude') + '.</li></p>\n'\
              + '<p><li>The westernmost newspaper brought ' + newspapers_longitude[0].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_longitude[0].city.name) + ', '\
              + Newspaper.link(newspapers_longitude[0].city.country.name) + ': '\
              + newspapers_longitude[0].coordinates.format('longitude') + '.</li></p>\n'\
              + '<p><li>The easternmost newspaper brought ' + newspapers_longitude[-1].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_longitude[-1].city.name) + ', '\
              + Newspaper.link(newspapers_longitude[-1].city.country.name) + ': '\
              + newspapers_longitude[-1].coordinates.format('longitude') + '.</li></p>\n'\
              + '<p><li>Newspapers brought <a style=\"text-decoration: underline\" ' \
                'href=\"http://' + BLOG_NAME + '.blogspot.com/p/senders.html\">' + str(len(set(senders)))\
              + ' people</a>.</li></p>\n'\
              + '<p><li>Most newspapers brought ' + Newspaper.link(counter_sender.most_common(1)[0][0]) + '—'\
              + str(counter_continent.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>First <a style=\"text-decoration: underline\" ' \
                'href=\"http://' + BLOG_NAME + '.blogspot.com/2012/01/beijing-china.html\">newspaper</a> ' \
                '<a style=\"text-decoration: underline\" ' \
                'href=\"http://' + BLOG_NAME + '.blogspot.com/search/label/Alexandra%20Ovodova\">Alexandra Ovodova</a> ' \
                'filch from post.</li></p>\n'\
              + '<p><li>Latest newspaper ' + newspapers()[-1].format_senders_nice() + ' brought from '\
              + Newspaper.link(newspapers()[-1].city.name) + ', ' + Newspaper.link(newspapers()[-1].city.country.name) + '.</li></p>\n'\
              + '</ul>'\
              + content_adding\
              + '</div>'

    return {
        'content': content,
        'title': 'Statistic'
    }