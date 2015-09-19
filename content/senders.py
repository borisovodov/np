"""Module for generate list of senders."""

from app.models import Newspaper


def senders():
    list_senders = []
    content_senders = ''

    for newspaper in Newspaper.objects.all():
        for sender in newspaper.senders:
            list_senders.append(sender.name)

    for sender in sorted(set(list_senders)):
        content_senders = content_senders + '<li>' + Newspaper.link(sender) + '</li>\n'

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              '<p>The author is grateful for everything these people:</p>\n'\
              '<ul>\n'\
              + content_senders\
              + '</ul>\n'\
              '</div>'

    return {
        'content': content,
        'title': 'Senders'
    }