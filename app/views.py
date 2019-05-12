from django.shortcuts import render

from .models import *


def divide_by_column(object_list):
	for i in range(0, len(object_list), 4):
		yield object_list[i:i + 4]


def page404(request):
	return render(request, 'app/404.html')
	

def about(request):
	context = {
		'first_newspaper': Newspaper.objects.get(id=1),
		'author': Sender.objects.get(name='Boris Ovodov'),
		'author_from': City.objects.get(name='Yekaterinburg'),
		'first_sender': Sender.objects.get(name='Aleksandra Ovodova'),
		'first_newspaper': Newspaper.objects.get(id=1),
	}
	return render(request, 'app/about.html', context)


def achievement(request, achievement_id):
	achievement = Achievement.objects.get(id=achievement_id)

	context = {
		'achievement': achievement,
		'senders': divide_by_column(achievement.senders()),
	}
	return render(request, 'app/achievement.html', context)


def achievements(request):
	context = {
		'achievements': divide_by_column(Achievement.objects.order_by('name')),
	}
	return render(request, 'app/achievements.html', context)


def city(request, country_id, city_id):
	city = City.objects.get(id=city_id)

	map_content = []
	if city.coordinates is not None: map_content = [{'city': city, 'newspapers': city.newspapers()}]
	
	context = {
		'city': city,
		'senders': divide_by_column(city.senders()),
		'newspapers': divide_by_column(city.newspapers()),
		'map_content': map_content,
	}
	return render(request, 'app/city.html', context)


def country(request, country_id):
	country = Country.objects.get(id=country_id)

	map_content = []
	for city in country.cities().exclude(coordinates__isnull=True):
		map_content.append({'city': city, 'newspapers': city.newspapers()})

	context = {
		'country': country,
		'senders': divide_by_column(country.senders()),
		'cities': divide_by_column(country.cities()),
		'newspapers': divide_by_column(country.newspapers()),
		'map_content': map_content,
	}
	return render(request, 'app/country.html', context)


def countries(request):
	countries = []

	for country in Country.objects.order_by('name'):
		countries.append({'country': country, 'cities': divide_by_column(country.cities())})

	context = {
		'countries': countries,
	}
	return render(request, 'app/countries.html', context)


def index(request):
	popular_newspapers = list(divide_by_column(Newspaper.objects.filter(is_photo=True).order_by('-date')))[:2]
	popular_senders = list(divide_by_column(sorted(Sender.objects.all(), key=lambda sender: sender.newspapers_count(), reverse=True)))[:3]

	context = {
		'popular_newspapers': popular_newspapers,
		'popular_senders': popular_senders,
	}
	return render(request, 'app/index.html', context)


def language(request, language_id):
	language = Language.objects.get(id=language_id)

	map_content = []
	for city in language.cities().exclude(coordinates__isnull=True):
		map_content.append({'city': city, 'newspapers': city.newspapers().filter(language=language)})

	context = {
		'language': language,
		'newspapers': divide_by_column(language.newspapers()),
		'map_content': map_content,
	}
	return render(request, 'app/language.html', context)


def languages(request):
	context = {
		'languages': divide_by_column(Language.objects.order_by('name')),
	}
	return render(request, 'app/languages.html', context)


def map(request):
	map_content = []
	for city in City.objects.order_by('name').exclude(coordinates__isnull=True):
		map_content.append({'city': city, 'newspapers': city.newspapers()})

	context = {
		'map_content': map_content,
	}
	return render(request, 'app/map.html', context)

def newspaper(request, newspaper_id):
	newspaper = Newspaper.objects.get(id=newspaper_id)

	map_content = []
	if newspaper.city.coordinates is not None: map_content = [{'city': newspaper.city, 'newspapers': [newspaper,]}]

	context = {
		'newspaper': newspaper,
		'senders': divide_by_column(newspaper.senders.order_by('name')),
		'tags': divide_by_column(newspaper.tags.order_by('name')),
		'map_content': map_content,
	}
	return render(request, 'app/newspaper.html', context)


def newspapers(request):
	context = {
		'newspapers': divide_by_column(Newspaper.objects.order_by('title')),
	}
	return render(request, 'app/newspapers.html', context)


def search(request):
	from django.contrib.postgres.search import SearchVector


	query = request.GET.get('q')
	print(Achievement.objects.annotate(search=SearchVector(
			'name')).filter(search=query).order_by('name'))
	context = {
		'query': query,
		'achievements': divide_by_column(Achievement.objects.annotate(search=SearchVector(
			'name')).filter(search=query).order_by('name')),
		'achievements_number': Achievement.objects.annotate(search=SearchVector(
			'name')).filter(search=query).count(),
		'cities': divide_by_column(City.objects.annotate(search=SearchVector(
			'name', 'continent')).filter(search=query).order_by('name')),
		'cities_number': City.objects.annotate(search=SearchVector(
			'name', 'continent')).filter(search=query).count(),
		'countries': divide_by_column(Country.objects.annotate(search=SearchVector(
			'name')).filter(search=query).order_by('name')),
		'countries_number': Country.objects.annotate(search=SearchVector(
			'name')).filter(search=query).count(),
		'languages': divide_by_column(Language.objects.annotate(search=SearchVector(
			'name')).filter(search=query).order_by('name')),
		'languages_number': Language.objects.annotate(search=SearchVector(
			'name')).filter(search=query).count(),
		'senders': divide_by_column(Sender.objects.annotate(search=SearchVector(
			'name', 'country__name')).filter(search=query).order_by('name')),
		'senders_number': Sender.objects.annotate(search=SearchVector(
			'name', 'country__name')).filter(search=query).count(),
		'tags': divide_by_column(Tag.objects.annotate(search=SearchVector(
			'name')).filter(search=query).order_by('name')),
		'tags_number': Tag.objects.annotate(search=SearchVector(
			'name')).filter(search=query).count(),
		'newspapers': divide_by_column(Newspaper.objects.annotate(search=SearchVector(
			'title', 'number', 'number_2', 'color', 'format_paper__name', 'type_newspaper', 
			'frequency', 'website', 'ISSN')).filter(search=query).order_by('title')),
		'newspapers_number': Newspaper.objects.annotate(search=SearchVector(
			'title', 'number', 'number_2', 'color', 'format_paper__name', 'type_newspaper', 
			'frequency', 'website', 'ISSN')).filter(search=query).count(),
	}
	return render(request, 'app/search.html', context)


def sender(request, sender_id):
	sender = Sender.objects.get(id=sender_id)

	map_content = []
	for city in sender.cities().exclude(coordinates__isnull=True):
		map_content.append({'city': city, 'newspapers': city.newspapers().filter(senders=sender)})

	context = {
		'sender': sender,
		'achievements': divide_by_column(sender.achievements()),
		'newspapers': divide_by_column(sender.newspapers()),
		'map_content': map_content,
	}
	return render(request, 'app/sender.html', context)


def senders(request):
	context = {
		'senders': divide_by_column(Sender.objects.order_by('name')),
	}
	return render(request, 'app/senders.html', context)


def statistic(request):
	from operator import methodcaller, attrgetter

	languages_with_newspapers = []
	for language in Language.objects.all():
		if language.newspapers_count():
			languages_with_newspapers.append(language)

	continents = []		
	for city in City.objects.all():
		continents.append(city.get_continent_tag())

	context = {
		'number_of_newspapers': Newspaper.objects.all().count(),
		'number_of_countries': Country.objects.all().count(),
		'number_of_cities': City.objects.all().count(),
		'country_lots_newspapers': max(Country.objects.all(), key=methodcaller('newspapers_count')),
		'number_of_languages': len(languages_with_newspapers),
		'language_lots_newspapers': max(Language.objects.all(), key=methodcaller('newspapers_count')),
		'number_of_continents': len(set(continents)),
		'continents': set(continents),
		'continent_lots_newspaper': max(continents, key=methodcaller('newspapers_count')),
		'northernmost_city': max(City.objects.all(), key=attrgetter('coordinates.latitude')),
		'southernmost_city': min(City.objects.all(), key=attrgetter('coordinates.latitude')),
		'westernmost_city': min(City.objects.all(), key=attrgetter('coordinates.longitude')),
		'easternmost_city': max(City.objects.all(), key=attrgetter('coordinates.longitude')),
		'number_of_senders': Sender.objects.all().count(),
		'sender_lots_newspapers': max(Sender.objects.all(), key=methodcaller('newspapers_count')),
		'first_newspaper': Newspaper.objects.get(id=1),
		'first_sender': Sender.objects.get(name='Aleksandra Ovodova'),
		'last_newspaper': Newspaper.objects.order_by('-id')[0],
		'last_senders': Newspaper.objects.order_by('-id')[0].senders.all(),
	}
	return render(request, 'app/statistic.html', context)


def tag(request, tag_id):
	tag = Tag.objects.get(id=tag_id)

	map_content = []
	for city in tag.cities().exclude(coordinates__isnull=True):
		map_content.append({'city': city, 'newspapers': city.newspapers().filter(tags=tag)})

	context = {
		'tag': tag,
		'newspapers': divide_by_column(tag.newspapers()),
		'map_content': map_content,
	}
	return render(request, 'app/tag.html', context)


def tags(request):
	context = {
		'tags': divide_by_column(Tag.objects.order_by('name')),
	}
	return render(request, 'app/tags.html', context)

