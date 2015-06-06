"""Module for work with Google Drive."""

from source.google import get_http
from googleapiclient.discovery import build


def authorization_drive():
    print('Authorization on Google Drive...')
    try:
        http_auth = get_http()
        drive = build('drive', 'v2', http=http_auth)
        print('Complete authorization on Google Drive.')
        return drive
    except:
        print('Anything wrong with authorization on Google Drive. Try again later.')