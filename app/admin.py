"""Admin module."""

from django.contrib import admin
from .models import *

admin.site.register(City)
admin.site.register(Country)
admin.site.register(Currency)
admin.site.register(FormatPaper)
admin.site.register(Language)
admin.site.register(Newspaper)
admin.site.register(Sender)