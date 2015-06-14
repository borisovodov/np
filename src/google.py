"""Module for authorization on Google."""

import os
import pip
import webbrowser
import sys
from .config import keys

KEY_GOOGLE_CLIENT_ID = keys['google_client_id']
KEY_GOOGLE_CLIENT_SECRET = keys['google_client_secret']

modules = []
for module in pip.get_installed_distributions():
    modules.append(module.key)
if 'google-api-python-client' not in modules:
    print('Install google-api...')
    os.system('pip install --upgrade pip')
    os.system('pip install --upgrade google-api-python-client')
    print('Complete installing google-api.')

import httplib2
from oauth2client.client import OAuth2WebServerFlow
from oauth2client.file import Storage

storage_path = sys.path[0] + '/tmp/google_credentials.db'
storage = Storage(storage_path)


def authorization_google():
    print('Authorization on Google...')
    try:
        flow = OAuth2WebServerFlow(client_id=KEY_GOOGLE_CLIENT_ID,
                                   client_secret=KEY_GOOGLE_CLIENT_SECRET,
                                   scope='https://www.googleapis.com/auth/blogger '
                                         'https://www.googleapis.com/auth/drive',
                                   redirect_uri='urn:ietf:wg:oauth:2.0:oob')
        auth_uri = flow.step1_get_authorize_url()
        webbrowser.open(auth_uri)
        auth_code = input('Enter the auth code: ')
        credentials = flow.step2_exchange(auth_code)

        storage.put(credentials)
        print('Complete authorization on Google.')
        return True
    except:
        print('Anything wrong with authorization on Google. Try again later.')
        return False


def get_http():
    if not os.path.isfile(storage_path):
        authorization_google()
    credentials = storage.get()
    return credentials.authorize(httplib2.Http())