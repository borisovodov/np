"""Module contain all classes."""

from django.db import models
from src.config import config

BLOG_NAME = config('blogger_blog_name')
PATH_TO_PHOTOS = config('path_to_photos')


class Tool:

    @staticmethod
    def link(not_link):
        return '<a style="text-decoration: underline" href="http://' + BLOG_NAME + '.blogspot.com/search/label/' \
               + not_link.replace(' ', '%20') + '">' + not_link + '</a>'

    @staticmethod
    def general_link(not_link):
        return '<a style="text-decoration: underline" href="' + not_link + '">' + not_link + '</a>'


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

    def get_symbol(self):
        if self.symbol == '':
            return self.name
        else:
            return self.symbol

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
        return 'https://rawgit.com/borisovodov/np/master/content/markers/' + self.name.lower() + '.png'

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
        ('Weeklies', 'Weeklies'),
        ('Biweekly', 'Biweekly'),
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
    URL = models.CharField(max_length=200, blank=True)

    def format_senders(self, link=True):
        if link:
            senders_string = Tool.link(self.senders.all()[0].name)
            if len(self.senders.all()) == 2:
                senders_string = Tool.link(self.senders.all()[0].name) + ' and ' + Tool.link(self.senders.all()[1].name)
            elif len(self.senders.all()) > 2:
                for i in range(1, len(self.senders.all()) - 1):
                    senders_string = senders_string + ', ' + Tool.link(self.senders.all()[i].name)
                senders_string = senders_string + ' and ' + Tool.link(self.senders.all().reverse()[0].name)
            return senders_string
        else:
            senders_string = self.senders.all()[0].name
            if len(self.senders.all()) == 2:
                senders_string = self.senders.all()[0].name + ' and ' + self.senders.all()[1].name
            elif len(self.senders.all()) > 2:
                for i in range(1, len(self.senders.all()) - 1):
                    senders_string = senders_string + ', ' + self.senders.all()[i].name
                senders_string = senders_string + ' and ' + self.senders.all().reverse()[0].name
            return senders_string

    def format_senders_without_link(self):
        return self.format_senders(link=False)
    format_senders_without_link.short_description = 'Senders'

    def format_date(self):
        import calendar

        return calendar.month_name[self.date.month] + ' ' + str(self.date.day) + ', ' + str(self.date.year)
    format_date.short_description = 'Date'
    format_date.admin_order_field = 'date'

    def format_date_start_publication(self):
        import calendar

        return calendar.month_name[self.date_start_publication.month] + ' ' + str(self.date_start_publication.day) \
                                                                      + ', ' + str(self.date_start_publication.year)

    def path(self):
        return self.URL.replace('http://www.' + BLOG_NAME + '.com', '')

    def pravda(self):
        return 'правда' in self.title.lower()

    def not_official_language(self):
        return self.language not in self.city.country.languages.all()

    def is_polar(self):
        return self.coordinates.latitude > 66.562 or self.coordinates.latitude < -66.562

    def is_photo(self):
        return bool(self.photo_set.all())
    is_photo.boolean = True
    is_photo.short_description = 'Photo'

    def tags(self):
        import datetime

        tags_list = [
            self.city.country.name, self.city.name, self.language.name, self.city.continent,
            self.color
            ]
        if self.date != datetime.date(1, 1, 1):
            tags_list.append(str(self.date.year))
        if self.city.coastal:
            tags_list.append('Coastal')
        if self.geotag:
            tags_list.append('Geotag')
        if self.crossword:
            tags_list.append('Crossword')
        if self.sudoku:
            tags_list.append('Sudoku')
        if self.nonogram:
            tags_list.append('Nonogram')
        if self.kakuro:
            tags_list.append('Kakuro')
        if self.TV_schedule:
            tags_list.append('TV schedule')
        if self.anecdote:
            tags_list.append('Anecdote')
        if self.caricature:
            tags_list.append('Caricature')
        if self.comic_strip:
            tags_list.append('Comic Strip')
        if self.recipe:
            tags_list.append('Recipe')
        if self.horoscope:
            tags_list.append('Horoscope')
        if self.weather_forecast:
            tags_list.append('Weather Forecast')
        if self.obituary:
            tags_list.append('Obituary')
        if self.naked_women:
            tags_list.append('Naked Women')
        if self.church:
            tags_list.append('Church')
        if self.trash:
            tags_list.append('TRASH')
        if self.extra:
            tags_list.append('Extra')
        if self.pravda():
            tags_list.append('Правда')
        if self.not_official_language():
            tags_list.append('Not official language')
        if self.frequency != 'Other/Unknown':
            tags_list.append(self.frequency)
        if self.type != 'Newspaper':
            tags_list.append(self.type)
        if self.is_polar():
            tags_list.append('Polar')
        for sender in self.senders.all():
            tags_list.append(sender.name)
        return tags_list

    def upload_photo(self):
        import os

        if os.path.isfile(PATH_TO_PHOTOS + '/' + str(self.id) + '.jpg'):
            if self.photo_set.all():
                for photo in self.photo_set.all():
                    photo.replace()
            else:
                    photo = Photo()
                    photo.newspaper = self
                    photo.save()
                    for photo in self.photo_set.all():
                        photo.upload()

    def post(self):
        import datetime
        from src.blog import authorization_blogger, add_post, update_post

        self.upload_photo()

        content_number = ''
        if self.number != '':
            if self.number_2 == '':
                content_number = '<strong>Number:</strong> ' + str(self.number) + '<br />\n'
            else:
                content_number = '<strong>Number:</strong> ' + str(self.number) + ' (' + str(self.number_2)\
                                 + ')<br />\n'

        content_date = ''
        if self.date != datetime.date(1, 1, 1):
            content_date = '<strong>Released:</strong> ' + self.format_date() + '<br />\n'

        content_language = '<strong>Language:</strong> ' + Tool.link(self.language.name) + '<br />\n'

        content_senders = '<strong>Sender:</strong> ' + self.format_senders() + '<br />\n'\
                          '<br />\n'

        content_date_start_publication = ''
        if self.date_start_publication != datetime.date(1, 1, 1):
            content_date_start_publication = '<strong>Since:</strong> ' + self.format_date_start_publication()\
                                                                        + '<br />\n'

        content_circulation = ''
        if self.circulation != 0:
            content_circulation = '<strong>Circulation:</strong> ' + str(self.circulation) + '<br />\n'

        content_ISSN = ''
        if self.ISSN != '':
            content_ISSN = '<strong>ISSN:</strong> ' + str(self.ISSN) + '<br />\n'

        content_cost = ''
        if self.cost_set.all():
            content_cost = '<strong>Cost:</strong> ' + str(self.cost_set.all()[0]) + '<br />\n'

        content_site = ''
        if self.site != '':
            content_site = '<strong>Site:</strong> ' + Tool.general_link(self.site) + '<br />\n'

        content_photo = ''
        if self.photo_set.all():
            content_photo = '\n' + self.photo_set.all()[0].link() + '\n'

        content_post = '<div dir="ltr" style="text-align: left;" trbidi="on">\n'\
                       '<strong>Title:</strong> ' + str(self.title) + '<br />\n' + content_number + content_date\
                       + content_language + content_senders + content_date_start_publication + content_circulation\
                       + content_ISSN + content_cost + content_site + content_photo + '\n'

        generate_post = {
            'title': str(self.city),
            'content': content_post,
            'labels': self.tags()
        }
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
        return self.title + number_str + date_str + 'from ' + str(self.city)


class Cost(models.Model):
    value = models.FloatField()
    currency = models.ForeignKey(Currency)
    newspaper = models.ForeignKey(Newspaper)

    def __str__(self):
        return str(self.value) + ' ' + str(self.currency.get_symbol())


class Photo(models.Model):
    flickr_id = models.CharField(max_length=200)
    newspaper = models.ForeignKey(Newspaper)

    def upload(self):
        from flickrapi import FlickrAPI
        from src.flickr import authorization_flickr

        authorization_flickr()

        flickr = FlickrAPI(config('flickr_key'), config('flickr_secret'))
        flickr_photo = flickr.upload(filename=PATH_TO_PHOTOS + '/' + str(self.newspaper.id) + '.jpg',
                                     title=self.newspaper.title + ' / ' + self.newspaper.city.name + ', '
                                                                + self.newspaper.city.country.name,
                                     description='http://www.papersaround.com/',
                                     tags=self.newspaper.city.country.name + ' ' + self.newspaper.city.name,
                                     is_public='1')
        self.flickr_id = flickr_photo.find('photoid').text
        self.save()
        return self

    def replace(self):
        from flickrapi import FlickrAPI
        from src.flickr import authorization_flickr

        authorization_flickr()

        flickr = FlickrAPI(config('flickr_key'), config('flickr_secret'))
        flickr.replace(filename=PATH_TO_PHOTOS + '/' + str(self.newspaper.id) + '.jpg',
                       photo_id=self.flickr_id)
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
               + '<img border=\"0\" src=\"' + url_z + '\" width=\"400\" /></a></div>\n'

    def __str__(self):
        return self.flickr_id
