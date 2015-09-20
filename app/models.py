"""Module contain all classes."""

from django.db import models
from src.config import config

BLOG_NAME = config('blogger_blog_name')


class Coordinates(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()

    def format(self, coord):
        from math import trunc

        if self.latitude > 0:
            latitude = str(trunc(float(self.latitude))) + '° ' + str(trunc((float(self.latitude) -
                                                                            trunc(float(self.latitude)))*60)) + '′ N'
        else:
            latitude = str(abs(trunc(float(self.latitude)))) + '° ' + str(abs(trunc((float(self.latitude) -
                                                                              trunc(float(self.latitude)))*60)))\
                                                               + '′ S'
        if self.longitude > 0:
            longitude = str(trunc(float(self.longitude))) + '° ' + str(trunc((float(self.longitude) -
                                                                       trunc(float(self.longitude)))*60)) + '′ E'
        else:
            longitude = str(abs(trunc(float(self.longitude)))) + '° ' + str(abs(trunc((float(self.longitude) -
                                                                                trunc(float(self.longitude)))*60)))\
                                                                 + '′ W'

        if coord == 'latitude':
            return latitude
        elif coord == 'longitude':
            return longitude
        elif coord == 'both':
            return {'latitude': latitude, 'longitude': longitude}

    def __str__(self):
        return self.format('latitude') + ', ' + self.format('longitude')


class Currency(models.Model):
    name = models.CharField(max_length=200)
    symbol = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class FormatPaper(models.Model):
    name = models.CharField(max_length=200)
    height = models.IntegerField()
    width = models.IntegerField()

    def __str__(self):
        return self.name + ' (' + str(self.height) + '×' + str(self.width) + ')'

    class Meta:
        ordering = ('name',)


class Language(models.Model):
    name = models.CharField(max_length=200)
    population = models.IntegerField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class Sender(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class Country(models.Model):
    name = models.CharField(max_length=200)
    languages = models.ManyToManyField(Language)
    population = models.IntegerField()

    def marker(self):
        from src.config import config

        return 'https://googledrive.com/host/' + config('drive_folder_marker_id') + '/' + self.name.lower() + '.png'

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class City(models.Model):
    HEMISPHERES = (
        ('Northern Hemisphere', 'Northern Hemisphere'),
        ('Southern Hemisphere', 'Southern Hemisphere'),
    )
    CONTINENTS = (
        ('Africa', 'Africa'),
        ('Antarctica', 'Antarctica'),
        ('Asia', 'Asia'),
        ('Australia', 'Australia'),
        ('Europe', 'Europe'),
        ('North America', 'North America'),
        ('South America', 'South America'),
    )

    name = models.CharField(max_length=200)
    country = models.ForeignKey(Country)
    population = models.IntegerField()
    hemisphere = models.CharField(max_length=19, choices=HEMISPHERES)
    continent = models.CharField(max_length=13, choices=CONTINENTS)
    coastal = models.BooleanField()
    altitude = models.FloatField(default=0.0)

    def __str__(self):
        return self.name + ', ' + self.country.name

    class Meta:
        ordering = ('name',)


class Newspaper(models.Model):
    COLORS = (
        ('Monochrome', 'Monochrome'),
        ('Bicolor', 'Bicolor'),
        ('Multicolor', 'Multicolor'),
    )
    TYPES = (
        ('Newspaper', 'Newspaper'),
        ('Magazine', 'Magazine'),
        ('Brochure', 'Brochure'),
    )
    FREQUENCIES = (
        ('Daily', 'Daily'),
        ('Weekly', 'Weekly'),
        ('Monthly', 'Monthly'),
        ('Bimonthly', 'Bimonthly'),
        ('Other/Unknown', 'Other/Unknown'),
    )

    city = models.ForeignKey(City)
    title = models.CharField(max_length=200)
    number = models.CharField(max_length=200, blank=True)
    number_2 = models.CharField(max_length=200, blank=True)
    date = models.DateField(default='0001-01-01')
    language = models.ForeignKey(Language)
    senders = models.ManyToManyField(Sender)
    coordinates = models.OneToOneField(Coordinates)
    date_brought = models.DateField(default='0001-01-01')
    color = models.CharField(max_length=200, choices=COLORS)
    pages = models.IntegerField(default=0)
    format_paper = models.ForeignKey(FormatPaper)
    type = models.CharField(max_length=200, choices=TYPES)
    frequency = models.CharField(max_length=200, choices=FREQUENCIES)
    circulation = models.IntegerField(default=0)
    site = models.CharField(max_length=200, blank=True)
    ISSN = models.CharField(max_length=200, blank=True)
    date_start_publication = models.DateField(default='0001-01-01')
    geotag = models.BooleanField()
    crossword = models.BooleanField()
    sudoku = models.BooleanField()
    nonogram = models.BooleanField()
    kakuro = models.BooleanField()
    TV_schedule = models.BooleanField()
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
    path_to_photos = models.CharField(max_length=200, blank=True)
    URL = models.CharField(max_length=200, blank=True)

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
            senders_string = self.link(self.senders.all()[0].name) + ' and ' + self.link(self.senders.all()[1].name)
        elif len(self.senders.all()) > 2:
            for i in range(1, len(self.senders.all()) - 1):
                senders_string = senders_string + ', ' + self.link(self.senders.all()[i].name)
            senders_string = senders_string + ' and ' + self.link(self.senders.all().reverse()[0].name)
        return senders_string

    def format_senders_nice_without_link(self):
        senders_string = self.senders.all()[0].name
        if len(self.senders.all()) == 2:
            senders_string = self.senders.all()[0].name + ' and ' + self.senders.all()[1].name
        elif len(self.senders.all()) > 2:
            for i in range(1, len(self.senders.all()) - 1):
                senders_string = senders_string + ', ' + self.senders.all()[i].name
            senders_string = senders_string + ' and ' + self.senders.all().reverse()[0].name
        return senders_string
    format_senders_nice_without_link.short_description = 'Senders'

    def format_date(self):
        import calendar

        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)
    format_date.short_description = 'Date'
    format_date.admin_order_field = 'date'

    def path(self):
        return self.URL.replace('http://' + BLOG_NAME + '.blogspot.com', '')

    def upload_photos(self):
        import os

        self.photo_set.all().delete()
        for file in os.listdir(str(self.path_to_photos)):
            if file.endswith('.jpg'):
                photo = Photo()
                photo.newspaper = self
                photo.name = file[:-4]
                photo.save()
        for photo in self.photo_set.all().order_by('name'):
            photo.upload()

    def post(self):
        import datetime
        from src.flickr import authorization_flickr
        from src.blog import authorization_blogger, add_post, update_post

        self.upload_photos()
        content_photos = ''
        for i in range(1, len(self.photo_set.all())):
            content_photos = content_photos + self.photo_set.all()[i].link()

        post_name = self.city.name + ', ' + self.city.country.name
        post_tags = [
            self.city.country.name, self.city.name, str(self.date.year), self.language.name,
            self.format_senders_name(), self.city.continent, self.city.hemisphere
            ]
        if self.city.coastal:
            post_tags.append('Coastal city')
        if self.geotag:
            post_tags.append('Geotagging')
        if self.crossword:
            post_tags.append('Crossword')
        if self.sudoku:
            post_tags.append('Sudoku')
        if self.nonogram:
            post_tags.append('Nonogram')
        if self.kakuro:
            post_tags.append('Kakuro')
        if self.TV_schedule:
            post_tags.append('TV schedule')
        if self.anecdote:
            post_tags.append('Anecdote')
        if self.caricature:
            post_tags.append('Caricature')
        if self.comic_strip:
            post_tags.append('Comic Strip')
        if self.recipe:
            post_tags.append('Recipe')
        if self.horoscope:
            post_tags.append('Horoscope')
        if self.weather_forecast:
            post_tags.append('Weather Forecast')
        if self.obituary:
            post_tags.append('Obituary')
        if self.naked_women:
            post_tags.append('Naked Women')
        if self.church:
            post_tags.append('Church')
        if self.trash:
            post_tags.append('TRASH')
        if self.extra:
            post_tags.append('Extra')

        content_title = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                        '<strong>Title:</strong> ' + str(self.title) + '<br />\n'

        content_number = ''
        if self.number != '':
            if self.number_2 == '':
                content_number = '<strong>Number:</strong> ' + str(self.number) + '<br />\n'
            else:
                content_number = '<strong>Number:</strong> ' + str(self.number) + ' (' + str(self.number_2)\
                                 + ')<br />\n'

        content_date = ''
        if self.date != datetime.date(1, 1, 1):
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
        if self.URL == '':
            response = add_post(blog=blog, body=generate_post)
            self.URL = response['url']
            self.save()
        else:
            update_post(blog=blog, body=generate_post, path=self.path())

    def __str__(self):
        import datetime
        number_str = ' '
        if self.number != '':
            if self.number_2 == '':
                number_str = ' #' + str(self.number) + ' '
            else:
                number_str = ' #' + str(self.number) + ' (' + str(self.number_2) + ') '
        date_str = ' '
        if self.date != datetime.date(1, 1, 1):
            date_str = 'at ' + self.format_date() + ' '
        return self.title + number_str + date_str + 'from ' + self.city.name + ', ' + self.city.country.name


class Cost(models.Model):
    value = models.FloatField()
    currency = models.ForeignKey(Currency)
    newspaper = models.ForeignKey(Newspaper)

    def __str__(self):
        return str(self.value) + ' ' + str(self.currency)


class Photo(models.Model):
    flickr_id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    newspaper = models.ForeignKey(Newspaper)

    def upload(self):
        from flickrapi import FlickrAPI

        flickr = FlickrAPI(config('flickr_key'), config('flickr_secret'))
        flickr_photo = flickr.upload(filename=self.newspaper.path_to_photos + '/' + self.name + '.jpg',
                                     title=self.newspaper.title + ' ' + self.newspaper.city.name + ', '
                                                                + self.newspaper.city.country.name,
                                     description='http://' + BLOG_NAME + '.blogspot.com/',
                                     tags=self.newspaper.city.country.name + ' ' + self.newspaper.city.name,
                                     is_public='1')
        self.flickr_id = flickr_photo.find('photoid').text
        self.save()
        return self

    def link(self):
        from flickrapi import FlickrAPI

        flickr = FlickrAPI(config('flickr_key'), config('flickr_secret'))
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