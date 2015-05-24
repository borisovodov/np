"""Module generate post for upload to Blogspot."""

import source.photos as photos
from source.db import newspapers
from source.func import PATH, link, step

id_n = int(input('Input ID newspaper: '))
path_photos = input('Input path to folder with upload photos or just press Enter for upload from default folder: ')

for newspaper_in_list in newspapers:
    if id_n == newspaper_in_list.id:
        newspaper = newspaper_in_list

photos.setup_flickrapi()
photos.authorization_flickr()
if path_photos == '':
    photo_ids = photos.upload_photos(newspaper)
else:
    photo_ids = photos.upload_photos(newspaper, path_photos)

content_photos = ''
for i in range(1, len(photo_ids)):
    content_photos = content_photos + photos.link_photo(photo_ids[i])

if newspaper.number == '' and newspaper.number2 == '':
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspaper.city + ', ' + newspaper.country + '-->\n'\
              '<!--Tags: ' + newspaper.country + ', ' + newspaper.city + ', '\
              + str(newspaper.date.year) + ', ' + newspaper.language + ', '\
              + newspaper.format_senders_str() + ', ' + newspaper.continent + ', '\
              + newspaper.format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspaper.id) + '-->\n'\
              '<strong>Title:</strong> ' + newspaper.title + '<br />\n'\
              '<strong>Released:</strong> ' + newspaper.format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspaper.language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspaper.format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'
elif newspaper.number2 == '':
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspaper.city + ', ' + newspaper.country + '-->\n'\
              '<!--Tags: ' + newspaper.country + ', ' + newspaper.city + ', '\
              + str(newspaper.date.year) + ', ' + newspaper.language + ', '\
              + newspaper.format_senders_str() + ', ' + newspaper.continent + ', '\
              + newspaper.format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspaper.id) + '-->\n'\
              '<strong>Title:</strong> ' + newspaper.title + '<br />\n'\
              '<strong>Number:</strong> ' + newspaper.number + '<br />\n'\
              '<strong>Released:</strong> ' + newspaper.format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspaper.language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspaper.format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'
else:
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
              '<!--Name: ' + newspaper.city + ', ' + newspaper.country + '-->\n'\
              '<!--Tags: ' + newspaper.country + ', ' + newspaper.city + ', '\
              + str(newspaper.date.year) + ', ' + newspaper.language + ', '\
              + newspaper.format_senders_str() + ', ' + newspaper.continent + ', '\
              + newspaper.format_hemisphere_nice() + ', -->\n'\
              '<!--ID: ' + str(newspaper.id) + '-->\n'\
              '<strong>Title:</strong> ' + newspaper.title + '<br />\n'\
              '<strong>Number:</strong> ' + newspaper.number + ' (' + newspaper.number2 + ')<br />\n'\
              '<strong>Released:</strong> ' + newspaper.format_date_str_nice() + '<br />\n'\
              '<strong>Language:</strong> ' + link(newspaper.language) + '<br />\n'\
              '<strong>Sender:</strong> ' + newspaper.format_senders_str_nice() + '<br />\n'\
              '<br />\n'\
              + photos.link_photo(photo_ids[0]) + '<!--more-->\n'\
              + content_photos + '</div>'

file_post = open(PATH + '/post.txt', encoding='utf-8', mode='w')
file_post.write(content)
file_post.close()
print('Post generate.')
step('next')