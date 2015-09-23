"""Module for work with Google Drive."""


def authorization_drive():
    from googleapiclient.discovery import build
    from .google import get_http

    http_auth = get_http()
    drive = build('drive', 'v2', http=http_auth)
    return drive


def update_map(drive):
    import sys
    from googleapiclient.http import MediaFileUpload
    from .config import config

    files = drive.files().list(q='\'' + config('drive_folder_map_id') + '\'' + ' in parents').execute()
    for f in files['items']:
        if f['title'] == 'map.js':
            file = f
    media = MediaFileUpload(filename=sys.path[0] + '/tmp/map.js', resumable=True)
    drive.files().update(fileId=file['id'], body=file, media_body=media).execute()