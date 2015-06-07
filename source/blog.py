"""Module for work with Blogger."""

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


def update_page(blog, body):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    for page in pages['items']:
        if page['title'] == body['title']:
            page_id = page['id']
    blog.pages().update(blogId=ID_BLOGGER_BLOG, pageId=page_id, body=body).execute()


def add_post(blog, body):
    return blog.posts().insert(blogId=ID_BLOGGER_BLOG, body=body).execute()