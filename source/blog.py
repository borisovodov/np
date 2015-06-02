"""Module for work with Blogger."""

import os
import pip
import pprint
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
    import webbrowser
    from oauth2client.client import OAuth2WebServerFlow
    from googleapiclient.discovery import build

    print('Authorization on Blogger...')
    try:
        flow = OAuth2WebServerFlow(client_id=KEY_GOOGLE_CLIENT_ID,
                                   client_secret=KEY_GOOGLE_CLIENT_SECRET,
                                   scope='https://www.googleapis.com/auth/blogger',
                                   redirect_uri='urn:ietf:wg:oauth:2.0:oob')
        auth_uri = flow.step1_get_authorize_url()
        webbrowser.open(auth_uri)
        code = input('Input code: ')
        credentials = flow.step2_exchange(code)

        http = httplib2.Http()
        http = credentials.authorize(http)
        blog = build('blogger', 'v3', http=http)

        print('Complete authorization.')
        return blog
    except:
        print('Anything wrong with authorization on Blogger. Try again later.')
        return False


def update_page(blog, page):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    pprint.pprint(pages)

#post = blogger.posts().insert(blogId=ID_BLOGGER_BLOG, body='')
#resp = post.execute()
#pprint.pprint(resp)