"""Module for adding statistic."""

from src.config import config
from app.models import Newspaper

BLOG_NAME = config('blogger_blog_name')


def random_string(index, text):
    return 'if (h > ' + str(index) + ' && h < ' + str(index + 1) + ') document.writeln(\''\
           + text + '\');\n'\

content = ''
# for i in range(n, m):

content_adding = '<!--// Этот коммент не даёт показаться дополнительной статистике, пока она не готова\n'\
                 '<hr noshade style=\"margin-top: 30px; margin-bottom: 30px; color: black; background-color: black; ' \
                 'height: 1px; border: none\">\n'\
                 '<p>Random:</p>\n'\
                 '<ul>\n'\
                 '<p><li>\n'\
                 '<script type=\"text/javascript\"><!--\n'\
                 'var h=(Math.random()*35);\n'\
                 + random_string(index=0,
                                 text=str(len(Newspaper.objects.filter(color='Monochrome'))) +
                                 ' newspapers <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Monochrome\">monochrome</a>.')\
                 + random_string(index=1,
                                 text=str(len(Newspaper.objects.filter(color='Bicolor'))) +
                                 ' newspapers <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Bicolor\">bicolor</a>.')\
                 + random_string(index=2,
                                 text=str(len(Newspaper.objects.filter(color='Multicolor'))) +
                                 ' newspapers <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Multicolor\">multicolor</a>.')\
                 + random_string(index=3,
                                 text=str(len(Newspaper.objects.filter(type='Magazine'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Magazine\">magazines</a>.')\
                 + random_string(index=4,
                                 text=str(len(Newspaper.objects.filter(type='Brochure'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Brochure\">brochures</a>.')\
                 + random_string(index=5,
                                 text=str(len(Newspaper.objects.filter(frequency='Daily'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Daily\">daily</a> newspapers.')\
                 + random_string(index=6,
                                 text=str(len(Newspaper.objects.filter(frequency='Weekly'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Weekly\">weekly</a> newspapers.')\
                 + random_string(index=7,
                                 text=str(len(Newspaper.objects.filter(frequency='Weeklies'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Weeklies\">weeklies</a> newspapers.')\
                 + random_string(index=8,
                                 text=str(len(Newspaper.objects.filter(frequency='Monthly'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Monthly\">monthly</a> newspapers.')\
                 + random_string(index=9,
                                 text=str(len(Newspaper.objects.filter(frequency='Bimonthly'))) +
                                 ' <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Bimonthly\">bimonthly</a> newspapers.')\
                 + random_string(index=10,
                                 text=str(len(Newspaper.objects.filter(geotag=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Geotag\">geotagging</a>.')\
                 + random_string(index=11,
                                 text=str(len(Newspaper.objects.filter(crossword=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Crossword\">crossword</a>.')\
                 + random_string(index=12,
                                 text=str(len(Newspaper.objects.filter(sudoku=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Sudoku\">sudoku</a>.')\
                 + random_string(index=13,
                                 text=str(len(Newspaper.objects.filter(nonogram=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Nonogram\">nonogram</a>.')\
                 + random_string(index=14,
                                 text=str(len(Newspaper.objects.filter(kakuro=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Kakuro\">kakuro</a>.')\
                 + random_string(index=15,
                                 text=str(len(Newspaper.objects.filter(TV_schedule=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/TV%20schedule\">TV schedule</a>.')\
                 + random_string(index=16,
                                 text=str(len(Newspaper.objects.filter(anecdote=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Anecdote\">anecdote</a>.')\
                 + random_string(index=17,
                                 text=str(len(Newspaper.objects.filter(caricature=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Caricature\">caricature</a>.')\
                 + random_string(index=18,
                                 text=str(len(Newspaper.objects.filter(comic_strip=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Comic%20Strip\">comic strip</a>.')\
                 + random_string(index=19,
                                 text=str(len(Newspaper.objects.filter(recipe=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Recipe\">recipe</a>.')\
                 + random_string(index=20,
                                 text=str(len(Newspaper.objects.filter(horoscope=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Horoscope\">horoscope</a>.')\
                 + random_string(index=21,
                                 text=str(len(Newspaper.objects.filter(weather_forecast=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Weather%20Forecast\">weather forecast</a>.')\
                 + random_string(index=22,
                                 text=str(len(Newspaper.objects.filter(weather_forecast=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Weather%20Forecast\">weather forecast</a>.')\
                 + random_string(index=23,
                                 text=str(len(Newspaper.objects.filter(obituary=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Obituary\">obituary</a>.')\
                 + random_string(index=24,
                                 text=str(len(Newspaper.objects.filter(naked_women=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Naked%20Women\">naked women</a>.')\
                 + random_string(index=25,
                                 text=str(len(Newspaper.objects.filter(church=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Church\">church</a>.')\
                 + random_string(index=26,
                                 text=str(len(Newspaper.objects.filter(trash=True))) +
                                 ' newspapers is <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/TRASH\">TRASH!</a>.')\
                 + random_string(index=27,
                                 text=str(len(Newspaper.objects.filter(extra=True))) +
                                 ' newspapers have <a style=\"text-decoration: underline\" '
                                 'href=\"http://' + BLOG_NAME +
                                 '.blogspot.com/search/label/Extra\">extra newspaper</a>.')\
                 + 'if (h < 1) document.writeln(\'*** newspapers have Sudoku.\');\n'\
                 + 'if (h > 1 && h < 2) document.writeln(\'*** newspapers have horoscope.\');\n'\
                 + 'if (h > 2 && h < 3) document.writeln(\'*** newspapers have crossword puzzle.\');\n'\
                 + 'if (h > 3 && h < 4) document.writeln(\'В скольких реклама автомобилей Тойота\');\n'\
                 + 'if (h > 4 && h < 5) document.writeln(\'*** newspapers have anecdotes.\');\n'\
                 + 'if (h > 5 && h < 6) document.writeln(\'*** newspapers monochrome.\');\n'\
                 + 'if (h > 6 && h < 7) document.writeln(\'*** newspapers bicolour.\');\n'\
                 + 'if (h > 7 && h < 8) document.writeln(\'*** newspapers multicolour.\');\n'\
                 + 'if (h > 8 && h < 9) document.writeln(\'Least of all pages in the newspaper from ***—***\');\n'\
                 + 'if (h > 9 && h < 10) document.writeln(\'The most popular newspaper format is ***. *** ' \
                   'newspapers have this format.\');\n'\
                 + 'if (h > 10 && h < 11) document.writeln(\'Rarest newspaper format is ***. *** newspapers have this format.\');\n'\
                 + 'if (h > 11 && h < 12) document.writeln(\'*** newspapers contains in its title the word “правда”.\');\n'\
                 + 'if (h > 12 && h < 13) document.writeln(\'Most pages in the newspaper from ***—***.\');\n'\
                 + 'if (h > 13 && h < 14) document.writeln(\'Самая давноиздающаяся газета\');\n'\
                 + 'if (h > 14 && h < 15) document.writeln(\'In *** newspapers have recipes.\');\n'\
                 + 'if (h > 15 && h < 16) document.writeln(\'*** newspapers from the coastal cities.\');\n'\
                 + 'if (h > 16 && h < 17) document.writeln(\'Over the last month brought *** newspapers.\');\n'\
                 + 'if (h > 17 && h < 18) document.writeln(\'If you choose the most commonly used letters in the name of the ' \
                   'newspaper, the averaged name of newspaper, the averaged name of newspaper will be \"***\".\');\n'\
                 + 'if (h > 18 && h < 19) document.writeln(\'Area of submitted newspapers comparable with area of a football ' \
                   'field. //football field - не обязательно так\');\n'\
                 + 'if (h > 19 && h < 20) document.writeln(\'Total circulation of all newspapers is *** copies.\');\n'\
                 + 'if (h > 20 && h < 21) document.writeln(\'Количество газет с телепрограммой\');\n'\
                 + 'if (h > 21 && h < 22) document.writeln(\'Only in the newspaper from Tokyo shows a naked women.\');\n'\
                 + 'if (h > 22 && h < 23) document.writeln(\'The largest circulation newspaper from ***.\');\n'\
                 + 'if (h > 23 && h < 24) document.writeln(\'*** newspapers in a language that is not a staple in the country ' \
                   'from which it was brought.\');\n'\
                 + 'if (h > 24 && h < 25) document.writeln(\'The smallest circulation newspaper from ***.\');\n'\
                 + 'if (h > 25 && h < 26) document.writeln(\'The shortest name of the newspaper—***.\');\n'\
                 + 'if (h > 26 && h < 27) document.writeln(\'The longest name of the newspaper—***.\');\n'\
                 + 'if (h > 27 && h < 28) document.writeln(\'*** newspapers from the cities landlocked.\');\n'\
                 + 'if (h > 28 && h < 29) document.writeln(\'Газета на языке с самым малым количеством носителей это' \
                   ' \"Красная правда\" на тувинском языке\');\n'\
                 + 'if (h > 29 && h < 30) document.writeln(\'Сколько в среднем времени происходит между печатью газеты и ' \
                   'приездом её сюда\');\n'\
                 + 'if (h > 30 && h < 31) document.writeln(\'В скольких газетах есть карикатурные зарисовки\');\n'\
                 + 'if (h > 31 && h < 32) document.writeln(\'Самое популярное имя отправителя\');\n'\
                 + 'if (h > 32 && h < 33) document.writeln(\'The largest city, from which brought newspaper is ' \
                   '<a style=\"text-decoration: underline\" ' \
                   'href=\"http://papersaround.blogspot.com/search/label/Shanghai\">Shanghai</a>, ' \
                   '<a style=\"text-decoration: underline\" ' \
                   'href=\"http://papersaround.blogspot.com/search/label/China\">China</a>—24 150 000 people.\');\n'\
                 + 'if (h > 33 && h < 34) document.writeln(\'<p><li>The smallest city, from which brought newspaper is ' \
                   '<a style=\"text-decoration: underline\" ' \
                   'href=\"http://papersaround.blogspot.com/search/label/Verkhoturie\">Verkhoturie</a>, ' \
                   '<a style=\"text-decoration: underline\" ' \
                   'href=\"http://papersaround.blogspot.com/search/label/Russia\">Russia</a>—8776 people.</li></p>\');\n'\
                 + 'if (h > 34 && h < 35) document.writeln(\'количество букв в названии.\');\n'\
                 + 'if (h > 34 && h < 35) document.writeln(\'hemisphere\');\n'\
                 + 'if (h > 36 && h < 36) document.writeln(\'общая толщина\');\n'\
                 + '//--><!--</script>\n'\
                 + '</li></p>\n'\
                 + '</ul>-->\n'
