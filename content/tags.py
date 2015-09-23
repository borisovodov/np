"""Module for generate file with tags."""

from app.models import Newspaper


def tags(queryset):
    list_tags = []
    content_tags = ''

    for newspaper in queryset:
        list_tags.append(newspaper.tags())

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