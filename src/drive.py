"""Module for work with Google Drive."""

import pprint
from .google import get_http
from googleapiclient.discovery import build
from .config import ids

ID_DRIVE_FOLDER_MAP = ids['drive_folder_map_id']


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
    maps = drive.files().list().execute()
    pprint.pprint(maps)

drive = authorization_drive()
update_map(drive)
'''
def update_page(blog, body):
    pages = blog.pages().list(blogId=ID_BLOGGER_BLOG).execute()
    for page in pages['items']:
        if page['title'] == body['title']:
            page_id = page['id']
    blog.pages().update(blogId=ID_BLOGGER_BLOG, pageId=page_id, body=body).execute()
'''