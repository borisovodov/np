"""This module contain Photo class."""

import flickrapi
from .config import config
from .newspaper import Newspaper

KEY_FLICKRAPI = config('flickr_key')
KEY_FLICKRAPI_SECRET = config('flickr_secret')
BLOG_NAME = config('blogger_blog_name')


class Photo:

    def __init__(self):
        self.id = 0
        self.newspaper = Newspaper()

    def upload(self, path):
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        flickr_photo = flickr.upload(filename=path, title=str(self.newspaper.id) + ' ' + self.newspaper.title + ' '
                                                                                 + str(i + 1),
                                     description='http://' + BLOG_NAME + '.blogspot.com/',
                                     tags=self.newspaper.city.country.name + ' ' + self.newspaper.city.name,
                                     is_public='1')
        return self

    def link(self):
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        photo = flickr.photos.getSizes(photo_id=self.id)

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

    def __str__(self):
        return str(self.id)