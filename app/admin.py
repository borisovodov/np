from django.contrib import admin

from .models import *


class CostInline(admin.TabularInline):
    model = Cost
    extra = 0

class CoordinatesAdmin(admin.ModelAdmin):
	list_display = ('latitude', 'longitude')


class LanguageAdmin(admin.ModelAdmin):
	list_display = ('name', 'population')


class CountryAdmin(admin.ModelAdmin):
	filter_horizontal = ('languages',)
	list_display = ('name', 'emoji', 'population')


class CityAdmin(admin.ModelAdmin):
	list_display = ('name', 'country', 'population', 'hemisphere', 'continent', 'coastal', 'altitude', 'coordinates')

	def save_model(self, request, obj, form, change):
		from mapbox import Geocoder
		import json

		name = "{0}, {1}".format(form.cleaned_data['name'], form.cleaned_data['country'].name)
		geocoder = Geocoder(access_token=BaseSettings.objects.get(pk=1).mapbox_access_key)
		response = geocoder.forward(name)
		mapbox_coords = response.json()['features'][0]['center']

		coordinates = Coordinates.objects.create(longitude=mapbox_coords[0], latitude=mapbox_coords[1])
		coordinates.save()

		obj.coordinates = coordinates

		super(CityAdmin, self).save_model(request, obj, form, change)


class SenderAdmin(admin.ModelAdmin):
	list_display = ('name', 'country', 'gender', 'is_avatar')


# class FormatPaperAdmin(admin.ModelAdmin):



# class TagAdmin(admin.ModelAdmin):



class NewspaperAdmin(admin.ModelAdmin):
	filter_horizontal = ('senders', 'tags',)
	list_display = ('title', 'city', 'id', 'number', 'number_2', 'date', 'language', 'is_photo')
	inlines = [CostInline]

	def save_model(self, request, obj, form, change):
		tag_ids = [ tag.id for tag in form.cleaned_data['tags'] ]

		year_tag, created = Tag.objects.get_or_create(name=obj.date.year)
		year_tag.save()
		tag_ids.append(year_tag.id)

		continent_tag, created = Tag.objects.get_or_create(name=obj.city.continent)
		continent_tag.save()
		tag_ids.append(continent_tag.id)

		color_tag, created = Tag.objects.get_or_create(name=obj.color)
		color_tag.save()
		tag_ids.append(color_tag.id)

		if obj.city.coastal:
			coastal_tag, created = Tag.objects.get_or_create(name='Coastal')
			coastal_tag.save()
			tag_ids.append(coastal_tag.id)

		if obj.pravda():
			pravda_tag, created = Tag.objects.get_or_create(name='Правда')
			pravda_tag.save()
			tag_ids.append(pravda_tag.id)

		if obj.not_official_language():
			not_official_language_tag, created = Tag.objects.get_or_create(name='Not Official Language')
			not_official_language_tag.save()
			tag_ids.append(not_official_language_tag.id)

		if obj.city.is_polar():
			polar_tag, created = Tag.objects.get_or_create(name='Polar')
			polar_tag.save()
			tag_ids.append(polar_tag.id)

		if obj.frequency != 'Other/Unknown':
			frequency_tag, created = Tag.objects.get_or_create(name=obj.frequency)
			frequency_tag.save()
			tag_ids.append(frequency_tag.id)

		if obj.type_newspaper != 'Newspaper':
			type_tag, created = Tag.objects.get_or_create(name=obj.type_newspaper)
			type_tag.save()
			tag_ids.append(type_tag.id)

		form.cleaned_data['tags'] = Tag.objects.order_by('name').filter(id__in=tag_ids)

		super(NewspaperAdmin, self).save_model(request, obj, form, change)


class CurrencyAdmin(admin.ModelAdmin):
	list_display = ('name', 'symbol', 'code', 'order')


# class CostAdmin(admin.ModelAdmin):


admin.site.register(Achievement)
admin.site.register(BaseSettings)
admin.site.register(Coordinates, CoordinatesAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(City, CityAdmin)
admin.site.register(Sender, SenderAdmin)
admin.site.register(FormatPaper)
admin.site.register(Tag)
admin.site.register(Newspaper, NewspaperAdmin)
admin.site.register(Currency, CurrencyAdmin)
admin.site.register(Cost)
