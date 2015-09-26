"""Module for upload photos on Flickr with flickrapi library."""


def authorization_flickr():
    import flickrapi
    from .config import config

    try:
        flickr = flickrapi.FlickrAPI(config('flickr_key'), config('flickr_secret'))
        flickr.authenticate_via_browser(perms='write')
        return True
    except:
        return False
