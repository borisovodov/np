"""Module for authorization on Google."""

import os
import pip
import webbrowser
from np import PATH
from source.config import keys

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


def authorization_google():
    from oauth2client.client import OAuth2WebServerFlow
    from oauth2client.file import Storage

    print('Authorization on Google...')
    try:
        if not os.path.isfile(PATH + '/data/storage.db'):
            flow = OAuth2WebServerFlow(client_id=KEY_GOOGLE_CLIENT_ID,
                                       client_secret=KEY_GOOGLE_CLIENT_SECRET,
                                       scope='https://www.googleapis.com/auth/blogger '
                                             'https://www.googleapis.com/auth/drive',
                                       redirect_uri='urn:ietf:wg:oauth:2.0:oob')
            auth_uri = flow.step1_get_authorize_url()
            webbrowser.open(auth_uri)
            auth_code = input('Enter the auth code: ')
            credentials = flow.step2_exchange(auth_code)

            storage = Storage(PATH + '/data/storage.db')
            storage.put(credentials)
        print('Complete authorization.')
        return True
    except:
        print('Anything wrong with authorization on Google. Try again later.')
        return False