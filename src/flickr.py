"""Module for upload photos on Flickr with flickrapi library."""

from .config import config

KEY_FLICKRAPI = config('flickr_key')
KEY_FLICKRAPI_SECRET = config('flickr_secret')
BLOG_NAME = config('blogger_blog_name')

import flickrapi


def authorization_flickr():
    try:
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        flickr.authenticate_via_browser(perms='write')
        return True
    except:
        return False