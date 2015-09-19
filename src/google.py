"""Module for authorization on Google."""

import os
import webbrowser
import sys
from .config import config

KEY_GOOGLE_CLIENT_ID = config('google_client_id')
KEY_GOOGLE_CLIENT_SECRET = config('google_client_secret')

import httplib2
from oauth2client.client import OAuth2WebServerFlow
from oauth2client.file import Storage

storage_path = sys.path[0] + '/tmp/google_credentials.db'
storage = Storage(storage_path)


def authorization_google():
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
        return True
    except:
        return False


def get_http():
    if not os.path.isfile(storage_path):
        authorization_google()
    credentials = storage.get()
    return credentials.authorize(httplib2.Http())