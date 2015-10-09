"""Module for adding statistic."""

from app.models import Newspaper

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
                 'if (h > 0 && h < 1) document.writeln(\'' + str(len(Newspaper.objects.filter(color='Monochrome')))\
                 + ' newspapers <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Monochrome\">monochrome</a>.\');\n'\
                 'if (h > 1 && h < 2) document.writeln(\'' + str(len(Newspaper.objects.filter(color='Bicolor')))\
                 + ' newspapers <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Bicolor\">bicolor</a>.\');\n'\
                 'if (h > 2 && h < 3) document.writeln(\'' + str(len(Newspaper.objects.filter(color='Multicolor')))\
                 + ' newspapers <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Multicolor\">multicolor</a>.\');\n'\
                 'if (h > 3 && h < 4) document.writeln(\'' + str(len(Newspaper.objects.filter(type='Magazine')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Magazine\">magazines</a>.\');\n'\
                 'if (h > 4 && h < 5) document.writeln(\'' + str(len(Newspaper.objects.filter(type='Brochure')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Brochure\">brochures</a>.\');\n'\
                 'if (h > 5 && h < 6) document.writeln(\'' + str(len(Newspaper.objects.filter(frequency='Daily')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Daily\">daily</a> newspapers.\');\n'\
                 'if (h > 6 && h < 7) document.writeln(\'' + str(len(Newspaper.objects.filter(frequency='Weekly')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Weekly\">weekly</a> newspapers.\');\n'\
                 'if (h > 7 && h < 8) document.writeln(\'' + str(len(Newspaper.objects.filter(frequency='Weeklies')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Weeklies\">weeklies</a> newspapers.\');\n'\
                 'if (h > 8 && h < 9) document.writeln(\'' + str(len(Newspaper.objects.filter(frequency='Monthly')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Monthly\">monthly</a> newspapers.\');\n'\
                 'if (h > 9 && h < 10) document.writeln(\'' + str(len(Newspaper.objects.filter(frequency='Bimonthly')))\
                 + ' <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Bimonthly\">bimonthly</a> newspapers.\');\n'\
                 'if (h > 10 && h < 11) document.writeln(\'' + str(len(Newspaper.objects.filter(geotag=True)))\
                 + ' newspapers have <a style=\"text-decoration: underline\" ' \
                 'href=\"http://papersaround.blogspot.com/search/label/Geotagging\">geotagging</a>.\');\n'\
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
                 + '//--><!--</script>\n'\
                 + '</li></p>\n'\
                 + '</ul>-->\n'
