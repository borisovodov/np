"""Module for work with Blogger."""

import os
import pip
from source.config import keys

KEY_GOOGLE_API = keys['google_api_key']

#os.system('pip uninstall google-api-python-client')

modules = []
for module in pip.get_installed_distributions():
    modules.append(module.key)
if 'google-api-python-client' not in modules:
    print('Install google-api...')
    os.system('pip install --upgrade pip')
    os.system('pip install --upgrade google-api-python-client')
    print('Complete installing google-api.')