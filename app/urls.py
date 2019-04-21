from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('about/', views.about, name='about'),
	path('achievements/', views.achievements, name='achievements'),
	path('achievements/<int:achievement_id>/', views.achievement, name='achievement'),
	path('countries/', views.countries, name='countries'),
	path('countries/<int:country_id>/', views.country, name='country'),
	path('countries/<int:country_id>/<int:city_id>/', views.city, name='city'),
	path('languages/', views.languages, name='languages'),
	path('languages/<int:language_id>/', views.language, name='language'),
	path('map/', views.map, name='map'),
	path('newspapers/', views.newspapers, name='newspapers'),
	path('newspapers/<int:newspaper_id>/', views.newspaper, name='newspaper'),
	path('search/', views.search, name='search'),
	path('senders/', views.senders, name='senders'),
	path('senders/<int:sender_id>/', views.sender, name='sender'),
	path('statistic/', views.statistic, name='statistic'),
	path('tags/', views.tags, name='tags'),
	path('tags/<int:tag_id>/', views.tag, name='tag'),
]
