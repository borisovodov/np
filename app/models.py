"""Module contain all classes."""

import os
import calendar
import flickrapi
from math import trunc
from django.db import models
from src.config import config

DRIVE_FOLDER_MARKER_ID = config('drive_folder_marker_id')
KEY_FLICKRAPI = config('flickr_key')
KEY_FLICKRAPI_SECRET = config('flickr_secret')
BLOG_NAME = config('blogger_blog_name')


class Coordinates(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()

    def format(self, coord):
        if self.latitude > 0:
            lat = str(trunc(float(self.latitude))) + '° ' + str(trunc((float(self.latitude) -
                                                                       trunc(float(self.latitude)))*60)) + '′ N'
        else:
            lat = str(abs(trunc(float(self.latitude)))) + '° ' + str(abs(trunc((float(self.latitude) -
                                                                                trunc(float(self.latitude)))*60)))\
                                                               + '′ S'
        if self.longitude > 0:
            long = str(trunc(float(self.longitude))) + '° ' + str(trunc((float(self.longitude) -
                                                                         trunc(float(self.longitude)))*60)) + '′ E'
        else:
            long = str(abs(trunc(float(self.longitude)))) + '° ' + str(abs(trunc((float(self.longitude) -
                                                                                  trunc(float(self.longitude)))*60)))\
                                                                 + '′ W'

        if coord == 'latitude':
            return lat
        elif coord == 'longitude':
            return long
        elif coord == 'both':
            return {'latitude': lat, 'longitude': long}

    def __str__(self):
        return self.format('latitude') + ' ' + self.format('longitude')


class Currency(models.Model):
    name = models.CharField()
    symbol = models.CharField()

    def __str__(self):
        return self.symbol


class FormatPaper(models.Model):
    name = models.CharField()
    height = models.IntegerField(default=0)
    width = models.IntegerField(default=0)

    def __str__(self):
        return self.name + ' (' + str(self.height) + '×' + str(self.width) + ')'


class Language(models.Model):
    name = models.CharField()
    population = models.IntegerField()

    def __str__(self):
        return self.name


class Sender(models.Model):
    name = models.CharField()

    def __str__(self):
        return self.name


class Country(models.Model):
    name = models.CharField()
    languages = models.ManyToManyField(Language)
    population = models.IntegerField()

    def marker(self):
        return 'https://googledrive.com/host/' + DRIVE_FOLDER_MARKER_ID + '/' + self.name.lower() + '.png'

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField()
    country = models.ForeignKey(Country)
    population = models.IntegerField()
    hemisphere = models.CharField()
    continent = models.CharField()
    coastal = models.BooleanField()
    altitude = models.FloatField()

    def __str__(self):
        return self.name + ', ' + self.country.name


class Newspaper(models.Model):
    city = models.ForeignKey(City)
    title = models.CharField()
    number = models.CharField(default='')
    number2 = models.CharField(default='')
    date = models.DateField()  # default value
    language = models.ForeignKey(Language)
    senders = models.ManyToManyField(Sender)
    coordinates = models.OneToOneField(Coordinates)
    date_brought = models.DateField()
    color = models.CharField()
    pages = models.IntegerField()
    formatpaper = models.ForeignKey(FormatPaper)
    type = models.CharField()
    frequency = models.CharField()
    circulation = models.IntegerField()
    site = models.CharField()
    issn = models.CharField()
    date_start_publication = models.DateField()
    geotag = models.BooleanField()
    crossword = models.BooleanField()
    sudoku = models.BooleanField()
    nonogram = models.BooleanField()
    kakuro = models.BooleanField()
    tv_schedule = models.BooleanField()
    anecdote = models.BooleanField()
    caricature = models.BooleanField()
    comic_strip = models.BooleanField()
    recipe = models.BooleanField()
    horoscope = models.BooleanField()
    weather_forecast = models.BooleanField()
    obituary = models.BooleanField()
    naked_women = models.BooleanField()
    church = models.BooleanField()
    trash = models.BooleanField()
    extra = models.BooleanField()
    path_to_photos = models.CharField()
    url = models.CharField(default='')

    @staticmethod
    def link(not_link):
        return '<a style="text-decoration: underline" href="http://' + BLOG_NAME + '.blogspot.com/search/label/'\
               + not_link.replace(' ', '%20') + '">' + not_link + '</a>'

    def format_senders_name(self):
        senders_string = ''
        for sender in self.senders.all():
            senders_string = senders_string + str(sender.name) + ','
        return senders_string[:-1]

    def format_senders_nice(self):
        senders_string = self.link(self.senders.all()[0].name)
        if len(self.senders.all()) == 2:
            senders_string = self.link(self.senders[0].name) + ' and ' + self.link(self.senders[1].name)
        elif len(self.senders.all()) > 2:
            for i in range(1, len(self.senders.all()) - 1):
                senders_string = senders_string + ', ' + self.link(self.senders[i].name)
            senders_string = senders_string + ' and ' + self.link(self.senders[-1].name)
        return senders_string

    def format_date(self):
        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)

    def path(self):
        return self.url.replace('http://' + BLOG_NAME + '.blogspot.com', '')

    def upload_photos(self):
        self.photo_set.all().delete()
        photo_files = []
        for file in os.listdir(str(self.path_to_photos)):
            if file.endswith('.jpg'):
                photo_files.append(file[:-4])
        photo_files.sort()
        for i in range(len(photo_files)):
            photo = Photo()
            photo.newspaper = self
            photo.name = photo_files[i]
            photo.upload()
            photo.save()
            print(str(i + 1) + '/' + str(len(photo_files)) + ' photos upload (' + str(((i+1)*100)//len(photo_files))
                  + '%)')
        print('Complete upload photos.')

    def post(self):
        from src.flickr import authorization_flickr
        from src.blog import authorization_blogger, add_post, update_post

        self.upload_photos()
        content_photos = ''
        for i in range(1, len(self.photo_set.all())):
            content_photos = content_photos + self.photo_set.all()[i].link()

        post_name = self.city.name + ', ' + self.city.country.name
        post_tags = [
            self.city.country.name, self.city.name, str(self.date.year), self.language.name,
            self.format_senders_name(), self.city.continent, self.city.hemisphere.name_full()
            ]
        # add tags.

        content_title = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                     '<strong>Title:</strong> ' + self.title + '<br />\n'

        content_number = ''
        if self.number2 is '':
            content_number = '<strong>Number:</strong> ' + self.number + '<br />\n'
        else:
            content_number = '<strong>Number:</strong> ' + self.number + ' (' + self.number2 + ')<br />\n'

        content_date = ''
        if self.date is not None:
            '<strong>Released:</strong> ' + self.format_date() + '<br />\n'

        content_language = '<strong>Language:</strong> ' + self.link(self.language.name) + '<br />\n'

        content_senders = '<strong>Sender:</strong> ' + self.format_senders_nice() + '<br />\n'\
                          '<br />\n'

        content_post = content_title + content_number + content_date + content_language + content_senders\
                                     + self.photo_set.all()[0].link() + '<!--more-->\n'\
                                     + content_photos + '</div>'

        generate_post = {
            'title': post_name,
            'content': content_post,
            'labels': post_tags
        }
        authorization_flickr()
        blog = authorization_blogger()
        if self.url == '':
            response = add_post(blog=blog, body=generate_post)
            self.url = response['url']
            self.save()
        else:
            update_post(blog=blog, body=generate_post, newspaper=self)

    def __str__(self):
        return '\'' + str(self.anecdote) + '\', \''


class Cost(models.Model):
    value = models.FloatField()
    currency = models.ForeignKey(Currency)
    newspaper = models.ForeignKey(Newspaper)

    def __str__(self):
        return str(self.value) + ' ' + str(self.currency)


class Photo(models.Model):
    flickr_id = models.CharField()
    name = models.CharField()
    newspaper = models.ForeignKey(Newspaper)

    def upload(self):
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        flickr_photo = flickr.upload(filename=self.newspaper.path_to_photos + '/' + self.name + '.jpg',
                                     title=str(self.newspaper.id) + ' ' + self.newspaper.title,
                                     description='http://' + BLOG_NAME + '.blogspot.com/',
                                     tags=self.newspaper.city.country.name + ' ' + self.newspaper.city.name,
                                     is_public='1')
        self.flickr_id = flickr_photo.find('photoid').text
        return self

    def link(self):
        flickr = flickrapi.FlickrAPI(KEY_FLICKRAPI, KEY_FLICKRAPI_SECRET)
        photo_flickr = flickr.photos.getSizes(photo_id=self.flickr_id)

        url_o = ''
        url_z = ''
        for element in photo_flickr[0]:
            if element.get('label') == 'Original':
                url_o = element.get('source')
            elif element.get('label') == 'Medium 640':
                url_z = element.get('source')
        return '<div class=\"separator\" style=\"clear: both; text-align: center;\">\n'\
               + '<a href=\"' + url_o + '\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\">'\
               + '<img border=\"0\" src=\"' + url_z + '\" width=\"400\" /></a></div>\n'\
               + '<br />\n'

    def __str__(self):
        return self.flickr_id