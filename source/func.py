"""Module with additional functions."""

import os


def link(not_link):
    return '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/'\
           + not_link.replace(' ', '%20') + '">' + not_link + '</a>'

PATH = os.path.abspath(os.path.join(os.path.dirname(__file__) ,".."))


def next_step():
    input('Press Enter for continue.')
    os.system('python "' + PATH + '/np.py"')