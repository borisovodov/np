"""Module with additional functions."""

import os

PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def step(types='update'):
    if types == 'update':
        os.system('python "' + PATH + '/source/update.py"')
        input('Press Enter for continue.')
        os.system('python "' + PATH + '/np.py"')
    else:
        input('Press Enter for continue.')
        os.system('python "' + PATH + '/np.py"')