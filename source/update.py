"""Module for update output files."""

import os
from func import PATH, next_step

os.system('python "' + PATH + '/source/contries.py"')
os.system('python "' + PATH + '/source/maps.py"')
os.system('python "' + PATH + '/source/senders.py"')
#os.system('python "' + PATH + '/source/stat.py"')
os.system('python "' + PATH + '/source/tags.py"')
print('Update complete.')
next_step()