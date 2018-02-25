"""Admin module."""

from django.contrib import admin
from .models import *


class CostInline(admin.StackedInline):
    model = Cost
    extra = 0


class NewspaperAdmin(admin.ModelAdmin):
    inlines = [CostInline]
    filter_horizontal = ('senders',)
    fieldsets = [
        ('General', {'fields': ['city', 'title', 'number', 'number_2', 'date', 'language', 'senders', 'coordinates',
                                'date_brought']}),
        ('About newspaper', {'fields': ['type', 'format_paper', 'frequency', 'site', 'circulation',
                                        'date_start_publication']}),
        ('In newspaper', {'fields': ['color', 'pages', 'ISSN', 'geotag', 'crossword', 'sudoku', 'nonogram', 'kakuro',
                                     'TV_schedule', 'anecdote', 'caricature', 'comic_strip', 'recipe', 'horoscope',
                                     'weather_forecast', 'obituary', 'naked_women', 'church', 'trash', 'extra']}),
    ]
    actions = ['update', 'posts', 'export_newspapers']
    list_display = ('title', 'id', 'number', 'number_2', 'format_date', 'city', 'format_senders_without_link', 'is_photo',)

    def update(self, request, queryset):
        from src.blog import authorization_blogger, update_page
        from content.countries import countries
        from content.maps import maps
        from content.senders import senders
        from content.stat import stat
        from content.tags import tags
        from content.about import about

        maps(queryset)
        blog = authorization_blogger()
        update_page(blog=blog, body=countries(queryset))
        update_page(blog=blog, body=senders(queryset))
        update_page(blog=blog, body=stat(queryset))
        update_page(blog=blog, body=tags(queryset))
        update_page(blog=blog, body=about())
    update.short_description = 'Update'

    def posts(self, request, queryset):
        for newspaper in queryset:
            newspaper.post()
    posts.short_description = 'Post'

    def export_newspapers(self, request, queryset):
        from content.export import export

        export(queryset)
    export_newspapers.short_description = 'Export'


class CountryAdmin(admin.ModelAdmin):
    filter_horizontal = ('languages',)

admin.site.register(City)
admin.site.register(Coordinates)
admin.site.register(Country, CountryAdmin)
admin.site.register(Currency)
admin.site.register(FormatPaper)
admin.site.register(Language)
admin.site.register(Newspaper, NewspaperAdmin)
admin.site.register(Sender)
