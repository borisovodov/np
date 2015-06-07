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
        print('Complete authorization on Blogger.')
        return blog
    except:
        print('Anything wrong with authorization on Blogger. Try again later.')


def update_page(blog, name, content):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    for page in pages['items']:
        if page['title'] == name:
            page_id = page['id']
    body = {
        'content': content,
        'title': name
    }
    blog.pages().update(blogId=ID_BLOGGER_BLOG, pageId=page_id, body=body).execute()


def add_post(blog, body):
    blog.posts().insert(blogId=ID_BLOGGER_BLOG, body=body).execute()