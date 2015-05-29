"""Module generate post for upload to Blogspot."""

from np import PATH
import source.photos as photos
from source.newspaper import Newspaper
from source.db import newspapers


def post_generate():
    while True:
        try:
            id_n = int(input('Input ID newspaper: '))
            break
        except ValueError:
            print('Incorrect ID newspaper. Try again.')
    path_photos = input('Input path to folder with upload photos or just press Enter for upload from default folder: ')

    newspaper = Newspaper()
    for newspaper_in_list in newspapers:
        if id_n == newspaper_in_list.id:
            newspaper = newspaper_in_list

    if path_photos == '':
        photo_ids = photos.upload_photos(newspaper)
    else:
        photo_ids = photos.upload_photos(newspaper, path_photos)

    content_photos = ''
    for i in range(1, len(photo_ids)):
        content_photos = content_photos + photos.link_photo(photo_ids[i])

    content_up = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                 '<!--Name: ' + newspaper.city + ', ' + newspaper.country + '-->\n'\
                 '<!--Tags: ' + newspaper.country + ', ' + newspaper.city + ', '\
                 + str(newspaper.date.year) + ', ' + newspaper.language + ', '\
                 + newspaper.format_senders() + ', ' + newspaper.continent + ', '\
                 + newspaper.format_hemisphere() + ', -->\n'\
                 '<!--ID: ' + str(newspaper.id) + '-->\n'\
                 '<strong>Title:</strong> ' + newspaper.title + '<br />\n'

    if newspaper.number == '' and newspaper.number2 == '':
        return content_up + '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n'\
                  '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n'\
                  '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                  '<br />\n'\
                  + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                  + content_photos + '</div>'
    elif newspaper.number2 == '':
        return content_up + '<strong>Number:</strong> ' + newspaper.number + '<br />\n'\
                  '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n'\
                  '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n'\
                  '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                  '<br />\n'\
                  + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                  + content_photos + '</div>'
    else:
        return content_up + '<strong>Number:</strong> ' + newspaper.number + ' (' + newspaper.number2 + ')<br />\n'\
                  '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n'\
                  '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n'\
                  '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                  '<br />\n'\
                  + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                  + content_photos + '</div>'


def post():
    photos.setup_flickrapi()
    auth = photos.authorization_flickr()
    if auth:
        content = post_generate()
        file_post = open(PATH + '/post.txt', encoding='utf-8', mode='w')
        file_post.write(content)
        file_post.close()
        print('Post generate.')