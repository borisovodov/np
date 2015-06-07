"""Module generate post for upload to Blogspot."""

import pprint
import source.photos as photos
from source.newspaper import Newspaper
from source.db import newspapers
from source.blog import authorization_blogger, add_post
from source.url import add_url


def get_id():
    while True:
        try:
            newspaper_id = int(input('Input ID newspaper: '))
            break
        except ValueError:
            print('Incorrect ID newspaper. Try again.')
    return newspaper_id


def get_path_photos():
    return input('Input path to folder with upload photos or just press Enter for upload from default folder: ')


def generate_post(newspaper_id, path_photos):
    newspaper = Newspaper()
    for newspaper_in_list in newspapers:
        if newspaper_id == newspaper_in_list.id:
            newspaper = newspaper_in_list

    if path_photos == '':
        photo_ids = photos.upload_photos(newspaper)
    else:
        photo_ids = photos.upload_photos(newspaper, path_photos)

    content_photos = ''
    for i in range(1, len(photo_ids)):
        content_photos = content_photos + photos.link_photo(photo_ids[i])

    post_name = newspaper.city + ', ' + newspaper.country
    post_tags = [
        newspaper.country, newspaper.city, str(newspaper.date.year), newspaper.language, newspaper.format_senders(),
        newspaper.continent, newspaper.format_hemisphere()
        ]

    content_up = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                 '<strong>Title:</strong> ' + newspaper.title + '<br />\n'

    if newspaper.number == '' and newspaper.number2 == '':
        post_content = content_up + '<strong>Released:</strong> ' + newspaper.format_date_nice() + '<br />\n' \
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n' \
                                    '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n' \
                                    '<br />\n'\
                                    + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                                    + content_photos + '</div>'
    elif newspaper.number2 == '':
        post_content = content_up + '<strong>Number:</strong> ' + newspaper.number + '<br />\n'\
                                    '<strong>Released:</strong> ' + newspaper.format_date_nice() + '<br />\n'\
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n'\
                                    '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                                    '<br />\n'\
                                    + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                                    + content_photos + '</div>'
    else:
        post_content = content_up + '<strong>Number:</strong> ' + newspaper.number + ' (' + newspaper.number2 + ')<br />\n'\
                                    '<strong>Released:</strong> ' + newspaper.format_date_nice() + '<br />\n'\
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language) + '<br />\n'\
                                    '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                                    '<br />\n'\
                                    + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                                    + content_photos + '</div>'

    return {
        'title': post_name,
        'content': post_content,
        'labels': post_tags
    }


def post():
    id_n = get_id()
    path = get_path_photos()
    photos.authorization_flickr()
    blog = authorization_blogger()
    response = add_post(blog=blog, body=generate_post(id_n, path))
    print('Post added.')
    add_url(id_n, response['url'])