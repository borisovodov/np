"""Module for upload photos on Flickr with flickrapi library."""

import os
import pip
from sys import path
from source.config import keys

KEY_FLICKRAPI = keys['flickr']
KEY_FLICKRAPI_SECRET = keys['flickr_secret']


def setup_flickrapi():
    modules = []
    for module in pip.get_installed_distributions():
        modules.append(module.key)
    if 'flickrapi' not in modules:
        print('Install flickrapi...')
        os.system('pip install --upgrade pip')
        os.system('pip install --upgrade flickrapi')
        os.system('pip install --upgrade requests')
        os.system('pip install --upgrade six')
        os.system('pip install --upgrade requests-oauthlib')
        os.system('pip install --upgrade requests-toolbelt')
        os.system('pip install --upgrade oauthlib')
        print('Complete installing flickrapi.')


def authorization_flickr():
    import flickrapi

    flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
    print('Authorization on Flickr...')
    flickr.authenticate_via_browser(perms='write')
    print('Complete authorization.')


def upload_photos(newspaper, path_files=path[0] + '/upload'):
    import flickrapi

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
        photo_ids.append(photo[0].text)
        print(str(i + 1) + '/' + str(len(photo_files)) + ' photos upload (' + str(((i+1)*100)//len(photo_files)) + '%)')
    print('Complete upload photos.')
    return photo_ids


def link_photo(id_photo):
    import flickrapi

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