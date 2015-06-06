"""Module for work with Blogger."""

import pprint
from source.google import get_http
from googleapiclient.discovery import build
from source.config import ids

ID_BLOGGER_BLOG = ids['blogger_blog_id']


def authorization_blogger():
    print('Authorization on Blogger...')
    try:
        http_auth = get_http()
        blog = build('blogger', 'v3', http=http_auth)
        print('Complete authorization.')
        return blog
    except:
        print('Anything wrong with authorization on Blogger. Try again later.')


def update_page(blog, page, content):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    pprint.pprint(pages)

blog = authorization_blogger()
pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
pprint.pprint(pages)