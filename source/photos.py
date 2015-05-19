"""Module for upload photos on Flickr with flickrapi library."""

import os
import sys
from func import PATH

key_flickrapi = 'ad1829dfb5336f288a6a712cb714efef'
key_flickrapi_secret = '44a1a2982af2b538'

def setup_flickrapi():
    if not os.path.exists(sys.path[6] + '/flickrapi') or not os.path.exists(sys.path[6] + '/oauthlib'):
        print('Setup flickrapi...')
        os.system('pip install flickrapi')
        print('Complete install flickrapi.')

def authorization_flickr():
    import flickrapi

    flickr = flickrapi.FlickrAPI(key_flickrapi, key_flickrapi_secret)
    print('Authorization on Flickr...')
    flickr.authenticate_via_browser(perms='write')
    print('Complete authorization.')

def upload_photos(newspaper, path_files=PATH + '/upload'):
    import flickrapi

    flickr = flickrapi.FlickrAPI(key_flickrapi, key_flickrapi_secret)
    photo_files = []
    photo_ids = []
    
    for file in os.listdir(path_files):
        if file.endswith('.jpg'):
            photo_files.append(file.split('.')[0])
    photo_files.sort()

    print('Uploading photos...')
    for i in range(len(photo_files)):
        photo_files[i] = path_files + '/' + photo_files[i] + '.jpg'
        photo = flickr.upload(filename=photo_files[i], title=str(newspaper.id) + ' ' + newspaper.title + ' ' + str(i),
                              description='http://papersaround.blogspot.com/',
                              tags=newspaper.country + ' ' + newspaper.city, is_public='1')
        photo_ids.append(photo[0].text)
        print(str(i + 1) + '/' + str(len(photo_files)) + ' photos upload (' + str(((i+1)*100)//len(photo_files)) + '%)')
    print('Complete upload photos.')
    return photo_ids

def link_photo(id):
    import flickrapi

    flickr = flickrapi.FlickrAPI(key_flickrapi, key_flickrapi_secret)
    photo = flickr.photos.getSizes(photo_id=id)

    url_o=''
    url_z=''
    for element in photo[0]:
        if element.get('label') == 'Original':
            url_o = element.get('source')
        elif element.get('label') == 'Medium 640':
            url_z = element.get('source')
    return '<div class=\"separator\" style=\"clear: both; text-align: center;\">\n'\
           + '<a href=\"' + url_o + '\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\">'\
           + '<img border=\"0\" src=\"' + url_z +'\" width=\"400\" /></a></div>\n'\
           + '<br />\n'