"""Module for generate countries."""

from collections import defaultdict
from db import newspapers
from func import PATH, link

dict_country = defaultdict(list)
content_countries = ''

for newspaper in newspapers:
    dict_country[newspaper.country].append(newspaper.city)

for country in sorted(dict_country.items()):
    content_countries = content_countries + link(country[0]) + '\n<ul>\n'
    for city in sorted(set(country[1])):
        content_countries = content_countries + '<li>' + link(city) + '</li>\n'
    content_countries = content_countries + '</ul>\n'

content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
          + '<p>Newspapers for this site were brought from many countries and cities:</p>\n'\
          + content_countries\
          + '</div>'

file_countries = open(PATH + '/countries.txt', encoding='utf-8', mode='w')
file_countries.write(content)
file_countries.close()
print('Generate countries.')