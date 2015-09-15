"""Module contain all classes."""

from math import trunc
from django.db import models
from src.config import config

DRIVE_FOLDER_MARKER_ID = config('drive_folder_marker_id')


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
    height = models.IntegerField()
    width = models.IntegerField()

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


class Cost(models.Model):
    value = models.FloatField()
    currency = models.ForeignKey(Currency)

    def __str__(self):
        return str(self.value) + ' ' + str(self.currency)


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