"""Module for generate file with tags."""

from .newspaper import Newspaper
from .db import newspapers


def tags():
    list_tags = []
    content_tags = ''

    for newspaper in newspapers():
        list_tags.append(newspaper.city)
        list_tags.append(newspaper.country)
        list_tags.append(str(newspaper.date.year))
        list_tags.append(newspaper.language)
        list_tags.append(newspaper.continent)
        list_tags.append(newspaper.format_hemisphere())
        for sender in newspaper.senders:
            list_tags.append(sender)

    for tag in sorted(set(list_tags)):
        content_tags = content_tags + '<li>' + Newspaper.link(tag) + '</li>\n'

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              '<p>Here are all the tags used on the site in alphabetical order. To ease the search, press Ctrl + F.</p>\n'\
              + content_tags\
              + '</div>'

    return {
        'content': content,
        'title': 'Tags'
    }