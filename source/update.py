"""Module for update output files."""

import os
from func import PATH, step

os.system('python "' + PATH + '/source/countries.py"')
os.system('python "' + PATH + '/source/maps.py"')
os.system('python "' + PATH + '/source/senders.py"')
os.system('python "' + PATH + '/source/stat.py"')
os.system('python "' + PATH + '/source/tags.py"')
print('Update complete.')
step('next')