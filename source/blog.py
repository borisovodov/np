"""Module for work with Blogger."""

import os
import pip
import webbrowser
import pprint
from np import PATH
from source.config import keys, ids

KEY_GOOGLE_CLIENT_ID = keys['google_client_id']
KEY_GOOGLE_CLIENT_SECRET = keys['google_client_secret']
ID_BLOGGER_BLOG = ids['blogger_blog_id']

modules = []
for module in pip.get_installed_distributions():
    modules.append(module.key)
if 'google-api-python-client' not in modules:
    print('Install google-api...')
    os.system('pip install --upgrade pip')
    os.system('pip install --upgrade google-api-python-client')
    print('Complete installing google-api.')


def authorization_blogger():
    import httplib2
    from oauth2client.client import OAuth2WebServerFlow
    from oauth2client.file import Storage
    from googleapiclient.discovery import build

    print('Authorization on Blogger...')
    try:
        storage = Storage(PATH + '/data/storage.db')
        credentials = storage.get()

        http_auth = credentials.authorize(httplib2.Http())
        blog = build('blogger', 'v3', http=http_auth)
    except:
        flow = OAuth2WebServerFlow(client_id=KEY_GOOGLE_CLIENT_ID,
                                   client_secret=KEY_GOOGLE_CLIENT_SECRET,
                                   scope='https://www.googleapis.com/auth/blogger',
                                   redirect_uri='urn:ietf:wg:oauth:2.0:oob')
        auth_uri = flow.step1_get_authorize_url()
        webbrowser.open(auth_uri)
        auth_code = input('Enter the auth code: ')
        credentials = flow.step2_exchange(auth_code)

        storage = Storage(PATH + '/data/storage.db')
        storage.put(credentials)

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