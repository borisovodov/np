"""Module for generate list of senders."""

from sys import path
from source.newspaper import Newspaper
from source.db import newspapers


def senders():
    list_senders = []
    content_senders = ''

    for newspaper in newspapers:
        for sender in newspaper.senders:
            list_senders.append(sender)

    for sender in sorted(set(list_senders)):
        content_senders = content_senders + '<li>' + Newspaper.link(sender) + '</li>\n'

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              + '<p>The author is grateful for everything these people:</p>\n'\
              + '<ul>\n'\
              + content_senders\
              + '</ul>\n'\
              + '</div>'

    file_senders = open(path[0] + '/senders.txt', encoding='utf-8', mode='w')
    file_senders.write(content)
    file_senders.close()
    print('Generate senders.')