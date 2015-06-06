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
            pprint.pprint(page)
            page_up = page
            page_id = page['id']
    page_up = {
        'blog': {'id': ID_BLOGGER_BLOG},
        'content': content,
        'id': str(page_id),
        'title': name
    }
    pprint.pprint(page_up)
    blog.pages().update(blogId=ID_BLOGGER_BLOG, pageId=page_up['id'], body=page_up)


def add_post(blog, name, tags, content):
    body = {
  "labels": tags,
  "content": content,
  "title": name,
}
    post = blog.posts().insert(blogId=ID_BLOGGER_BLOG, body=body, isDraft=True)

blog = authorization_blogger()
#update_page(blog, 'Senders', '<div>Fdsfsdfsdfsdfsd</div>')

add_post(blog, 'Yap!', ['dsf', 'sdfsdf', 'sdfsdf'], '<p>Yeeeesss!!!</p>')