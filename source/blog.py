"""Module for work with Blogger."""

import os
import pip
from source.config import keys

KEY_GOOGLE_API = keys['google_api_key']

os.system('pip uninstall google-api-python-client')

modules = []
for module in pip.get_installed_distributions():
    modules.append(module.key)
if 'google-api-python-client' not in modules:
    print('Install google-api...')
    os.system('pip install --upgrade pip')
    os.system('pip install --upgrade google-api-python-client')
    os.system('pip install --upgrade httplib2')
    os.system('pip install --upgrade oauth2client')
    os.system('pip install --upgrade six')
    os.system('pip install --upgrade uritemplate')
    os.system('pip install --upgrade pyasn1')
    os.system('pip install --upgrade pyasn1-modules')
    os.system('pip install --upgrade rsa')
    os.system('pip install --upgrade simplejson')
    print('Complete installing google-api.')

import json
import webbrowser

import httplib2

from apiclient import discovery
from oauth2client import client

flow = client.flow_from_clientsecrets(
    'client_secrets.json',
    scope='https://www.googleapis.com/auth/drive.metadata.readonly',
    redirect_uri='urn:ietf:wg:oauth:2.0:oob')

auth_uri = flow.step1_get_authorize_url()
webbrowser.open(auth_uri)

auth_code = input('Enter the auth code: ')

credentials = flow.step2_exchange(auth_code)
http_auth = credentials.authorize(httplib2.Http())

drive_service = discovery.build('drive', 'v2', http_auth)
files = drive_service.files().list().execute()
for f in files['items']:
    print(f['title'])