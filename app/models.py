from django.db import models


class BaseSettings(models.Model):
	mapbox_access_key = models.CharField(max_length=200, blank=True)

	def save(self, *args, **kwargs):
		if BaseSettings.objects.exists() and not self.pk:
			raise ValidationError('There is can be only one instance.')
		return super(BaseSettings, self).save(*args, **kwargs)

	class Meta:
		verbose_name_plural = "Base Settings"


class Achievement(models.Model):
	name = models.CharField(max_length=200)

	def senders(self):
		senders_ids = []
		for sender in Sender.objects.order_by('name'):
			if self in sender.achievements():
				senders_ids.append(sender.id)
		return Sender.objects.order_by('name').filter(id__in=list(senders_ids))

	def get_absolute_url(self):
		return "/achievements/%i/" % self.id

	def __str__(self):
		return self.name


class Coordinates(models.Model):
	latitude = models.FloatField()
	longitude = models.FloatField()

	def get_pretty_latitude(self):
		from math import trunc

		if self.latitude > 0:
			return str(trunc(float(self.latitude))) + '° ' + str(trunc((float(self.latitude) -
																	trunc(float(self.latitude)))*60)) + '′ N'
		else:
			return str(abs(trunc(float(self.latitude)))) + '° ' + str(abs(trunc((float(self.latitude) -
																			trunc(float(self.latitude)))*60)))\
															+ '′ S'

	def get_pretty_longitude(self):
		from math import trunc

		if self.longitude > 0:
			return str(trunc(float(self.longitude))) + '° ' + str(trunc((float(self.longitude) -
																	trunc(float(self.longitude)))*60)) + '′ E'
		else:
			return str(abs(trunc(float(self.longitude)))) + '° ' + str(abs(trunc((float(self.longitude) -
																			trunc(float(self.longitude)))*60)))\
																+ '′ W'
	def pretty(self):
		return '{0}, {1}'.format(self.get_pretty_latitude(), self.get_pretty_longitude())

	def __str__(self):
		return '{0}, {1}'.format(str(self.latitude), str(self.longitude))

	class Meta:
		verbose_name_plural = "Coordinates"


class Language(models.Model):
	name = models.CharField(max_length=200)
	population = models.IntegerField()

	def newspapers(self):
		return Newspaper.objects.order_by('-date').filter(language=self)

	def newspapers_count(self):
		return self.newspapers().count()

	def cities(self):
		cities_ids = self.newspapers().values_list('city_id', flat=True)
		return City.objects.order_by('name').filter(id__in=list(cities_ids))

	def get_absolute_url(self):
		return "/languages/%i/" % self.id

	def __str__(self):
		return self.name


class Country(models.Model):
	name = models.CharField(max_length=200)
	emoji = models.CharField(max_length=16, blank=True)
	languages = models.ManyToManyField(Language)
	population = models.IntegerField()
	marker = models.FileField(upload_to='markers', blank=True, null=True)

	def cities(self):
		return City.objects.order_by('name').filter(country=self)

	def newspapers(self):
		return Newspaper.objects.order_by('-date').filter(city__country=self)

	def newspapers_count(self):
		return self.newspapers().count()

	def senders(self):
		senders_ids = self.newspapers().values_list('senders__id', flat=True)
		return Sender.objects.order_by('name').filter(id__in=list(senders_ids))

	def get_absolute_url(self):
		return "/countries/%i/" % self.id

	def is_marker(self):
		return bool(self.marker)
	is_marker.boolean = True # for pretty
	is_marker.short_description = 'Marker'

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Countries"


class City(models.Model):
	CONTINENTS = (
		('Africa', 'Africa'),
		('Antarctica', 'Antarctica'),
		('Asia', 'Asia'),
		('Australia/Oceania', 'Australia/Oceania'),
		('Europe', 'Europe'),
		('North America', 'North America'),
		('South America', 'South America'),
	)

	name = models.CharField(max_length=200)
	country = models.ForeignKey(Country, on_delete=models.PROTECT)
	population = models.IntegerField()
	continent = models.CharField(max_length=200, choices=CONTINENTS)
	coastal = models.BooleanField()
	altitude = models.IntegerField(default=0) # metres
	coordinates = models.OneToOneField(Coordinates, blank=True, null=True, on_delete=models.SET_NULL)

	def is_polar(self):
		return self.coordinates.latitude > 66.562 or self.coordinates.latitude < -66.562

	def newspapers(self):
		return Newspaper.objects.order_by('-date').filter(city=self)

	def newspapers_count(self):
		return self.newspapers().count()

	def senders(self):
		senders_ids = self.newspapers().values_list('senders__id', flat=True)
		return Sender.objects.order_by('name').filter(id__in=list(senders_ids))

	def hemisphere(self):
		if self.coordinates.latitude > 0.0: # false — north hemisphere, true — south hemisphere
			return False
		else:
			return True

	def photo(self):
		if self.newspapers(): return self.newspapers().first().photo

	def get_continent_tag(self):
		tag, created = Tag.objects.get_or_create(name=self.continent)
		tag.save()
		return tag

	def get_absolute_url(self):
		return "/countries/{0}/{1}/".format(self.country.id, self.id)

	def __str__(self):
		return "{0}, {1}".format(self.name, self.country.name)

	class Meta:
		verbose_name_plural = "Cities"

class Sender(models.Model):
	name = models.CharField(max_length=200)
	country = models.ForeignKey(Country, on_delete=models.PROTECT)
	gender = models.BooleanField('Woman') # false — man, true — woman
	avatar = models.FileField(upload_to='senders', blank=True, null=True)

	def newspapers(self):
		return Newspaper.objects.order_by('-date').filter(senders=self)

	def newspapers_count(self):
		return self.newspapers().count()

	def cities(self):
		cities_ids = self.newspapers().values_list('city_id', flat=True)
		return City.objects.order_by('name').filter(id__in=list(cities_ids))

	def cities_count(self):
		return self.cities().count()

	def countries(self):
		countries_ids = self.newspapers().values_list('city__country_id', flat=True)
		return Country.objects.order_by('name').filter(id__in=list(countries_ids))

	def languages(self):
		languages_ids = self.newspapers().values_list('language_id', flat=True)
		return Language.objects.order_by('name').filter(id__in=list(languages_ids))

	def achievements(self):
		achievements_ids = []

		if self.newspapers().count() > 1:
			achievement, created = Achievement.objects.get_or_create(name='2 Newspapers')
			achievements_ids.append(achievement.id)
		if self.newspapers().count() > 4:
			achievement, created = Achievement.objects.get_or_create(name='5 Newspapers')
			achievements_ids.append(achievement.id)
		if self.newspapers().count() > 9:
			achievement, created = Achievement.objects.get_or_create(name='10 Newspapers')
			achievements_ids.append(achievement.id)
		if self.countries().count() > 1:
			achievement, created = Achievement.objects.get_or_create(name='2 Countries')
			achievements_ids.append(achievement.id)
		if self.countries().count() > 4:
			achievement, created = Achievement.objects.get_or_create(name='5 Countries')
			achievements_ids.append(achievement.id)
		if self.countries().count() > 9:
			achievement, created = Achievement.objects.get_or_create(name='10 Countries')
			achievements_ids.append(achievement.id)
		if self.cities().count() > 1:
			achievement, created = Achievement.objects.get_or_create(name='2 Cities')
			achievements_ids.append(achievement.id)
		if self.cities().count() > 4:
			achievement, created = Achievement.objects.get_or_create(name='5 Cities')
			achievements_ids.append(achievement.id)
		if self.cities().count() > 9:
			achievement, created = Achievement.objects.get_or_create(name='10 Cities')
			achievements_ids.append(achievement.id)
		if self.languages().count() > 1:
			achievement, created = Achievement.objects.get_or_create(name='2 Languages')
			achievements_ids.append(achievement.id)
		if self.languages().count() > 4:
			achievement, created = Achievement.objects.get_or_create(name='5 Languages')
			achievements_ids.append(achievement.id)
		if self.languages().count() > 9:
			achievement, created = Achievement.objects.get_or_create(name='10 Languages')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) == 2:
			achievement, created = Achievement.objects.get_or_create(name='2 Continents')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) == 3:
			achievement, created = Achievement.objects.get_or_create(name='3 Continents')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) == 4:
			achievement, created = Achievement.objects.get_or_create(name='4 Continents')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) == 5:
			achievement, created = Achievement.objects.get_or_create(name='5 Continents')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.continent for newspaper in self.newspapers() ])) == 6:
			achievement, created = Achievement.objects.get_or_create(name='6 Continents')
			achievements_ids.append(achievement.id)
		if len(set([ newspaper.city.hemisphere() for newspaper in self.newspapers() ])) == 2:
			achievement, created = Achievement.objects.get_or_create(name='Both Hemisphere')
			achievements_ids.append(achievement.id)
		years = len(set([ newspaper.date.year for newspaper in self.newspapers() ]))
		if years > 1:
			achievement, created = Achievement.objects.get_or_create(name=(str(years) + ' Years'))
			achievements_ids.append(achievement.id)

		return Achievement.objects.order_by('name').filter(id__in=list(achievements_ids))

	def get_absolute_url(self):
		return "/senders/%i/" % self.id

	def is_avatar(self):
		return bool(self.avatar)
	is_avatar.boolean = True # for pretty
	is_avatar.short_description = 'Avatar'

	def __str__(self):
		return self.name


class FormatPaper(models.Model):
	name = models.CharField(max_length=200)
	height = models.IntegerField('Height (mm)') # mm
	width = models.IntegerField('Width (mm)') # mm

	def __str__(self):
		return self.name + ' (' + str(self.height) + '×' + str(self.width) + ')'


class Tag(models.Model):
	name = models.CharField(max_length=200)

	def newspapers(self):
		return Newspaper.objects.order_by('-date').filter(tags=self)

	def newspapers_count(self):
		return self.newspapers().count()

	def cities(self):
		cities_ids = self.newspapers().values_list('city_id', flat=True)
		return City.objects.order_by('name').filter(id__in=list(cities_ids))

	def get_absolute_url(self):
		return "/tags/%i/" % self.id

	def __str__(self):
		return self.name

	# Tags by default:
	# 'Geotag'
	# 'Crossword'
	# 'Sudoku'
	# 'Kakuro'
	# 'TV schedule'
	# 'Anecdote'
	# 'Caricature'
	# 'Comic Strip'
	# 'Recipe'
	# 'Horoscope'
	# 'Weather Forecast'
	# 'Obituary'
	# 'Naked Women'
	# 'Church'
	# 'TRASH'
	# 'Extra'


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
		('Other', 'Other'),
	)

	city = models.ForeignKey(City, on_delete=models.PROTECT)
	title = models.CharField(max_length=200)
	number = models.CharField(max_length=200, blank=True)
	number_2 = models.CharField(max_length=200, blank=True)
	date = models.DateField(default='0001-01-01')
	language = models.ForeignKey(Language, on_delete=models.PROTECT)
	senders = models.ManyToManyField(Sender)
	photo = models.FileField(upload_to='newspapers', blank=True, null=True)
	thumbnail = models.ImageField(upload_to='newspapers-thumbnail', blank=True, null=True)
	is_photo = models.BooleanField(default=False)
	color = models.CharField(max_length=200, choices=COLORS)
	pages = models.IntegerField(default=0)
	format_paper = models.ForeignKey(FormatPaper, blank=True, null=True, on_delete=models.SET_NULL)
	type_newspaper = models.CharField(max_length=200, choices=TYPES, default='Newspaper')
	frequency = models.CharField(max_length=200, choices=FREQUENCIES, blank=True)
	circulation = models.IntegerField(default=0, blank=True)
	website = models.CharField(max_length=200, blank=True)
	ISSN = models.CharField(max_length=200, blank=True)
	date_start_publication = models.DateField(null=True, blank=True)
	tags = models.ManyToManyField(Tag, blank=True)

	def costs(self):
		return Cost.objects.filter(newspaper=self)

	def pravda(self):
		return 'правда' in self.title.lower()

	def not_official_language(self):
		return self.language not in self.city.country.languages.all()

	def get_frequency_tag(self):
		tag, created = Tag.objects.get_or_create(name=self.frequency)
		tag.save()
		return tag

	def get_tags_alph(self):
		return self.tags.order_by('name')

	def get_absolute_url(self):
		return "/newspapers/%i/" % self.id

	def is_thumbnail(self):
		return bool(self.thumbnail)
	is_thumbnail.boolean = True # for pretty
	is_thumbnail.short_description = 'Thumbnail'

	def __str__(self):
		return self.title

	def save(self):
		from PIL import Image
		from io import BytesIO
		from django.core.files import File
		import shutil

		try:
			size = (522, 522)
			im = Image.open(self.photo)
			output = BytesIO()

			#Resize/modify the image
			im.thumbnail(size)

			#after modifications, save it to the output
			im.save(output, format='JPEG', quality=100)
			output.seek(0)

			with open('temp/%s.jpg' %self.photo.name.split('.')[0], 'wb+') as f:
				shutil.copyfileobj(output, f, length=131072)
			f = open('temp/%s.jpg' %self.photo.name.split('.')[0], 'rb')
			self.thumbnail = File(f)

			super(Newspaper, self).save()
		except:
			super(Newspaper, self).save()


class Currency(models.Model):
	name = models.CharField(max_length=200)
	symbol = models.CharField(max_length=200)
	code = models.CharField(max_length=200)
	order = models.BooleanField('Symbol left from value') # false — right from value, true — left from value

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Currencies"


class Cost(models.Model):
	value = models.FloatField()
	currency = models.ForeignKey(Currency, on_delete=models.PROTECT)
	newspaper = models.ForeignKey(Newspaper, on_delete=models.PROTECT)

	def __str__(self):
		if self.currency.order:
			return self.currency.symbol + ' ' + str(self.value)
		else:
			return str(self.value) + ' ' + self.currency.symbol


