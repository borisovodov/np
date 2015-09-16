"""Module for upload photos on Flickr with flickrapi library."""

from .config import config

KEY_FLICKRAPI = config('flickr_key')
KEY_FLICKRAPI_SECRET = config('flickr_secret')
BLOG_NAME = config('blogger_blog_name')

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