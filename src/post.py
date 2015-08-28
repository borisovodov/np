"""Module generate post for upload to Blogspot."""

import src.photos as photos
from .newspaper import Newspaper
from .db import set_attribute_by_id
from .blog import authorization_blogger, add_post, update_post


def get_id():
    newspaper_id = 0
    while True:
        try:
            newspaper_id = int(input('Input ID newspaper: '))
            break
        except ValueError:
            print('Incorrect ID newspaper. Try again.')
    return newspaper_id


def get_path_photos():
    return input('Input path to folder with upload photos or just press Enter for upload from default folder: ')


def generate_post(newspaper, path_photos):
    if path_photos == '':
        photo_ids = photos.upload_photos(newspaper)
    else:
        photo_ids = photos.upload_photos(newspaper, path_photos)

    content_photos = ''
    for i in range(1, len(photo_ids)):
        content_photos = content_photos + photos.link_photo(photo_ids[i])

    post_name = newspaper.city.name + ', ' + newspaper.city.country.name
    post_tags = [
        newspaper.city.country.name, newspaper.city.name, str(newspaper.date.year), newspaper.language.name,
        newspaper.format_senders_name(), newspaper.city.continent, newspaper.city.hemisphere.name_full()
        ]

    content_up = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                 '<strong>Title:</strong> ' + newspaper.title + '<br />\n'

    if newspaper.number == '' and newspaper.number2 == '':
        post_content = content_up + '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n' \
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language.name) + '<br />\n' \
                                    '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n' \
                                    '<br />\n'\
                                    + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                                    + content_photos + '</div>'
    elif newspaper.number2 == '':
        post_content = content_up + '<strong>Number:</strong> ' + newspaper.number + '<br />\n'\
                                    '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n'\
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language.name) + '<br />\n'\
                                    '<strong>Sender:</strong> ' + newspaper.format_senders_nice() + '<br />\n'\
                                    '<br />\n'\
                                    + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
                                    + content_photos + '</div>'
    else:
        post_content = content_up + '<strong>Number:</strong> ' + newspaper.number + ' (' + newspaper.number2 + ')<br />\n'\
                                    '<strong>Released:</strong> ' + newspaper.format_date() + '<br />\n'\
                                    '<strong>Language:</strong> ' + newspaper.link(newspaper.language.name) + '<br />\n'\
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
    newspaper = Newspaper()
    newspaper.id = get_id()
    newspaper.get_newspaper_by_id()
    path = get_path_photos()

    photos.authorization_flickr()
    body = generate_post(newspaper, path)
    print('Uploading post on Blogger.')
    blog = authorization_blogger()

    if newspaper.url == '':
        response = add_post(blog=blog, body=body)
        newspaper.url = response['url']
        set_attribute_by_id(newspaper, 'url')
        print('URL added to database.')
        print('Post added.')
    else:
        update_post(blog=blog, body=body, newspaper=newspaper)
        print('Post updated.')