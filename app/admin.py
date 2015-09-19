"""Admin module."""

from django.contrib import admin
from .models import *


class CostsInline(admin.StackedInline):
    model = Cost
    extra = 0


class NewspaperAdmin(admin.ModelAdmin):
    inlines = [CostsInline]

admin.site.register(City)
admin.site.register(Coordinates)
admin.site.register(Country)
admin.site.register(Currency)
admin.site.register(FormatPaper)
admin.site.register(Language)
admin.site.register(Newspaper, NewspaperAdmin)
admin.site.register(Sender)