"""Module for work with Blogger."""

from .config import config

ID_BLOGGER_BLOG = config('blogger_blog_id')


def authorization_blogger():
    from googleapiclient.discovery import build
    from .google import get_http

    http_auth = get_http()
    blog = build('blogger', 'v3', http=http_auth)
    return blog


def update_page(blog, body):
    page_id = 0
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    for page in pages['items']:
        if page['title'] == body['title']:
            page_id = page['id']
    blog.pages().update(blogId=ID_BLOGGER_BLOG, pageId=page_id, body=body).execute()


def update_post(blog, body, path):
    post = blog.posts().getByPath(blogId=ID_BLOGGER_BLOG, path=path).execute()
    blog.posts().update(blogId=ID_BLOGGER_BLOG, postId=post['id'], body=body).execute()


def add_post(blog, body):
    return blog.posts().insert(blogId=ID_BLOGGER_BLOG, body=body).execute()