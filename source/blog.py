"""Module for work with Blogger."""

import webbrowser
import pprint
from np import PATH
from source.config import ids

ID_BLOGGER_BLOG = ids['blogger_blog_id']


def authorization_blogger():
    import httplib2
    from oauth2client.file import Storage
    from googleapiclient.discovery import build

    print('Authorization on Blogger...')
    storage = Storage(PATH + '/data/storage.db')
    credentials = storage.get()

    http_auth = credentials.authorize(httplib2.Http())
    blog = build('blogger', 'v3', http=http_auth)
    print('Complete authorization.')
    return blog


def update_page(blog, page, content):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    pprint.pprint(pages)

blog = authorization_blogger()
pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
pprint.pprint(pages)