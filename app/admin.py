"""Admin module."""

from django.contrib import admin
from .models import *
from content.countries import countries
from content.maps import maps
from content.senders import senders
from content.stat import stat
from content.tags import tags
from content.export import export
from src.blog import authorization_blogger, update_page
from src.drive import authorization_drive, update_map


class CostsInline(admin.StackedInline):
    model = Cost
    extra = 0


class NewspaperAdmin(admin.ModelAdmin):
    inlines = [CostsInline]
    actions = ['update', 'export_newspapers']

    def update(self, request, queryset):
        drive = authorization_drive()
        maps(queryset)
        update_map(drive=drive)
        blog = authorization_blogger()
        update_page(blog=blog, body=countries(queryset))
        update_page(blog=blog, body=senders(queryset))
        update_page(blog=blog, body=stat(queryset))
        update_page(blog=blog, body=tags(queryset))
    update.short_description = 'Update newspapers'

    def export_newspapers(self, request, queryset):
        export(queryset)
    export_newspapers.short_description = 'Export newspapers to XML'

admin.site.register(City)
admin.site.register(Coordinates)
admin.site.register(Country)
admin.site.register(Currency)
admin.site.register(FormatPaper)
admin.site.register(Language)
admin.site.register(Newspaper, NewspaperAdmin)
admin.site.register(Sender)