"""Module contain all classes."""

from django.db import models


class Currency(models.Model):
    name = models.CharField()
    symbol = models.CharField()

    def __str__(self):
        return self.symbol


class FormatPaper(models.Model):
    name = models.CharField()
    height = models.IntegerField
    width = models.IntegerField

    def __str__(self):
        return self.name + ' (' + str(self.height) + '×' + str(self.width) + ')'


class Sender(models.Model):
    name = models.CharField()

    def __str__(self):
        return self.name