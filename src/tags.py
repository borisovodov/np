"""Module for generate file with tags."""

from .newspaper import Newspaper, newspapers


def tags():
    list_tags = ['Coastal city', 'Geotagging', 'Crossword', 'Sudoku', 'Nonogram', 'Kakuro', 'Advertising Toyota',
                 'TV schedule', 'Anecdote', 'Caricature', 'Recipe', 'Horoscope', 'Weather Forecast', 'Naked Women',
                 'Church', 'TRASH']
    content_tags = ''

    for newspaper in newspapers():
        list_tags.append(newspaper.city.name)
        list_tags.append(newspaper.city.country.name)
        list_tags.append(str(newspaper.date.year))
        list_tags.append(newspaper.language.name)
        list_tags.append(newspaper.city.continent)
        list_tags.append(newspaper.city.hemisphere.name_full())
        for sender in newspaper.senders:
            list_tags.append(sender.name)

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