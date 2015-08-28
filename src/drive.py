"""Module for work with Google Drive."""

import sys
from .google import get_http
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from .config import config

ID_DRIVE_FOLDER_MAP = config('drive_folder_map_id')


def authorization_drive():
    print('Authorization on Google Drive...')
    try:
        http_auth = get_http()
        drive = build('drive', 'v2', http=http_auth)
        print('Complete authorization on Google Drive.')
        return drive
    except:
        print('Anything wrong with authorization on Google Drive. Try again later.')


def update_map(drive):
    files = drive.files().list(q='\'' + ID_DRIVE_FOLDER_MAP + '\'' + ' in parents').execute()
    for f in files['items']:
        if f['title'] == 'map.js':
            file = f
    media = MediaFileUpload(filename=sys.path[0] + '/tmp/map.js', resumable=True)
    drive.files().update(fileId=file['id'], body=file, media_body=media).execute()