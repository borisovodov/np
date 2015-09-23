"""Module for authorization on Google."""

import os
import sys
from oauth2client.file import Storage

storage_path = os.path.join(sys.path[0], 'tmp', 'google_credentials.db')
storage = Storage(storage_path)


def authorization_google():
    import webbrowser
    from oauth2client.client import OAuth2WebServerFlow
    from .config import config

    try:
        flow = OAuth2WebServerFlow(client_id=config('google_client_id'),
                                   client_secret=config('google_client_secret'),
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
    import os
    import httplib2

    if not os.path.isfile(storage_path):
        authorization_google()
    credentials = storage.get()
    return credentials.authorize(httplib2.Http())