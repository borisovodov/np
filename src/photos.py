"""Module for upload photos on Flickr with flickrapi library."""

import os
import pip
from np import PATH
from .config import keys

KEY_FLICKRAPI = keys['flickr_key']
KEY_FLICKRAPI_SECRET = keys['flickr_secret']

modules = []
for module in pip.get_installed_distributions():
    modules.append(module.key)
if 'flickrapi' not in modules:
    print('Install flickrapi...')
    os.system('pip install --upgrade pip')
    os.system('pip install --upgrade flickrapi')
    print('Complete installing flickrapi.')

import flickrapi


def authorization_flickr():
    print('Authorization on Flickr...')
    try:
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        flickr.authenticate_via_browser(perms='write')
        print('Complete authorization on Flickr.')
        return True
    except:
        print('Anything wrong with authorization on Flickr. Try again later.')
        return False


def upload_photos(newspaper, path_files=PATH + '/upload'):
    flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
    photo_files = []
    photo_ids = []
    
    for file in os.listdir(path_files):
        if file.endswith('.jpg'):
            photo_files.append(file[:-4])
    photo_files.sort()

    print('Uploading photos...')
    for i in range(len(photo_files)):
        photo_files[i] = path_files + '/' + photo_files[i] + '.jpg'
        photo = flickr.upload(filename=photo_files[i], title=str(newspaper.id) + ' ' + newspaper.title + ' ' + str(i + 1),
                              description='http://papersaround.blogspot.com/',
                              tags=newspaper.country + ' ' + newspaper.city, is_public='1')
        photo_ids.append(photo.find('photoid').text)
        print(str(i + 1) + '/' + str(len(photo_files)) + ' photos upload (' + str(((i+1)*100)//len(photo_files)) + '%)')
    print('Complete upload photos.')
    return photo_ids


def link_photo(id_photo):
    flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
    photo = flickr.photos.getSizes(photo_id=id_photo)

    url_o = ''
    url_z = ''
    for element in photo[0]:
        if element.get('label') == 'Original':
            url_o = element.get('source')
        elif element.get('label') == 'Medium 640':
            url_z = element.get('source')
    return '<div class=\"separator\" style=\"clear: both; text-align: center;\">\n'\
           + '<a href=\"' + url_o + '\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\">'\
           + '<img border=\"0\" src=\"' + url_z + '\" width=\"400\" /></a></div>\n'\
           + '<br />\n'