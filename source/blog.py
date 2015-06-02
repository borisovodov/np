"""Module for work with Blogger."""

import os
import pip
from oauth2client.client import OAuth2WebServerFlow
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

flow = OAuth2WebServerFlow(client_id=KEY_GOOGLE_CLIENT_ID, client_secret=KEY_GOOGLE_CLIENT_SECRET, scope='https://www.googleapis.com/blogger')