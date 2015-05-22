"""Module generate post for upload to Blogspot."""

import photos
from db import newspapers
from func import PATH, link, step

id = int(input('Input ID newspaper: '))
path_photos = input('Input path to folder with upload photos or just press Enter for upload from default folder: ')

photos.setup_flickrapi()
photos.authorization_flickr()
if path_photos == '':
    photo_ids = photos.upload_photos(newspapers[id])
else:
    photo_ids = photos.upload_photos(newspapers[id], path_photos)

content_photos = ''
for i in range(1, len(photo_ids)):
    content_photos = content_photos + photos.link_photo(photo_ids[i])

if newspapers[id].number == '' and newspapers[id].number2 == '':
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspapers[id].city + ', ' + newspapers[id].country + '-->\n'\
              '<!--Tags: ' + newspapers[id].country + ', ' + newspapers[id].city + ', '\
              + str(newspapers[id].date.year) + ', ' + newspapers[id].language + ', '\
              + newspapers[id].format_senders_str() + ', ' + newspapers[id].continent + ', '\
              + newspapers[id].format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspapers[id].id) + '-->\n'\
              '<strong>Title:</strong> ' + newspapers[id].title + '<br />\n'\
              '<strong>Released:</strong> ' + newspapers[id].format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspapers[id].language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspapers[id].format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'
elif newspapers[id].number2 == '':
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspapers[id].city + ', ' + newspapers[id].country + '-->\n'\
              '<!--Tags: ' + newspapers[id].country + ', ' + newspapers[id].city + ', '\
              + str(newspapers[id].date.year) + ', ' + newspapers[id].language + ', '\
              + newspapers[id].format_senders_str() + ', ' + newspapers[id].continent + ', '\
              + newspapers[id].format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspapers[id].id) + '-->\n'\
              '<strong>Title:</strong> ' + newspapers[id].title + '<br />\n'\
              '<strong>Number:</strong> ' + newspapers[id].number + '<br />\n'\
              '<strong>Released:</strong> ' + newspapers[id].format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspapers[id].language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspapers[id].format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'
else:
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspapers[id].city + ', ' + newspapers[id].country + '-->\n'\
              '<!--Tags: ' + newspapers[id].country + ', ' + newspapers[id].city + ', '\
              + str(newspapers[id].date.year) + ', ' + newspapers[id].language + ', '\
              + newspapers[id].format_senders_str() + ', ' + newspapers[id].continent + ', '\
              + newspapers[id].format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspapers[id].id) + '-->\n'\
              '<strong>Title:</strong> ' + newspapers[id].title + '<br />\n'\
              '<strong>Number:</strong> ' + newspapers[id].number + ' (' + newspapers[id].number2 + ')<br />\n'\
              '<strong>Released:</strong> ' + newspapers[id].format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspapers[id].language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspapers[id].format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'

file_post = open(PATH + '/post.txt', encoding='utf-8', mode='w')
file_post.write(content)
file_post.close()
print('Post generate.')
step('next')