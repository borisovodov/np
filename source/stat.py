"""Module generate statistic."""

import collections
from np import PATH
from source.newspaper import Newspaper
from source.db import newspapers, query


def stat():
    countries = []
    cities = []
    languages = []
    continents = []
    senders = []

    for newspaper in newspapers:
        countries.append(newspaper.country)
        cities.append(newspaper.city)
        languages.append(newspaper.language)
        continents.append(newspaper.continent)
        for sender in newspaper.senders:
            senders.append(sender)

    counter_country = collections.Counter(countries)
    counter_language = collections.Counter(languages)
    counter_continent = collections.Counter(continents)
    counter_sender = collections.Counter(senders)

    newspapers_latitude = query('SELECT * FROM newspapers ORDER BY latitude')
    newspapers_longitude = query('SELECT * FROM newspapers ORDER BY longitude')

    content = '<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n'\
              + '<p>In this site presents newspapers <span style=\"text-decoration: line-through\">' \
                'from around the world</span>. Look at this entertaining statistics:</p>\n'\
              + '<ul>\n'\
              + '<p><li>A total of ' + str(len(newspapers)) + ' newspapers from <a style=\"text-decoration: underline\" ' \
                                                              'href=\"http://papersaround.blogspot.com/p/countries.html\">'\
              + str(len(set(countries))) + ' countries</a> and <a style=\"text-decoration: underline\" ' \
                                           'href=\"http://papersaround.blogspot.com/p/countries.html\">'\
              + str(len(set(cities))) + ' cities</a>.</li></p>\n'\
              + '<p><li>Most newspapers from ' + Newspaper.link(counter_country.most_common(1)[0][0]) + '—'\
              + str(counter_country.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>Here are the newspapers on ' + str(len(set(languages))) + ' languages.</li></p>\n'\
              + '<p><li>' + str(counter_language.most_common(1)[0][1]) + ' newspapers were brought on '\
              + Newspaper.link(counter_language.most_common(1)[0][0]) + '.</li></p>\n'\
              + '<p><li>Newspapers were brought from the ' + str(len(set(continents))) + ' continents—'\
              + ', '.join(set(continents)) + '. More then other from '\
              + Newspaper.link(counter_continent.most_common(1)[0][0]) + ': '\
              + str(counter_continent.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>The northernmost newspaper brought ' + newspapers_latitude[-1].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_latitude[-1].city) + ', '\
              + Newspaper.link(newspapers_latitude[-1].country) + ': '\
              + newspapers_latitude[-1].format_coordinates_nice('latitude') + '.</li></p>\n'\
              + '<p><li>The southernmost newspaper brought ' + newspapers_latitude[0].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_latitude[0].city) + ', '\
              + Newspaper.link(newspapers_latitude[0].country) + ': '\
              + newspapers_latitude[0].format_coordinates_nice('latitude') + '.</li></p>\n'\
              + '<p><li>The westernmost newspaper brought ' + newspapers_longitude[0].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_longitude[0].city) + ', '\
              + Newspaper.link(newspapers_longitude[0].country) + ': '\
              + newspapers_longitude[0].format_coordinates_nice('longitude') + '.</li></p>\n'\
              + '<p><li>The easternmost newspaper brought ' + newspapers_longitude[-1].format_senders_nice()\
              + ' from ' + Newspaper.link(newspapers_longitude[-1].city) + ', '\
              + Newspaper.link(newspapers_longitude[-1].country) + ': '\
              + newspapers_longitude[-1].format_coordinates_nice('longitude') + '.</li></p>\n'\
              + '<p><li>Newspapers brought <a style=\"text-decoration: underline\" ' \
                'href=\"http://papersaround.blogspot.com/p/senders.html\">' + str(len(set(senders)))\
              + ' people</a>.</li></p>\n'\
              + '<p><li>Most newspapers brought ' + Newspaper.link(counter_sender.most_common(1)[0][0]) + '—'\
              + str(counter_continent.most_common(1)[0][1]) + '.</li></p>\n'\
              + '<p><li>First <a style=\"text-decoration: underline\" ' \
                'href=\"http://papersaround.blogspot.com/2012/01/beijing-china.html\">newspaper</a> ' \
                '<a style=\"text-decoration: underline\" ' \
                'href=\"http://papersaround.blogspot.com/search/label/Alexandra%20Ovodova\">Alexandra Ovodova</a> ' \
                'filch from post.</li></p>\n'\
              + '<p><li>Latest newspaper ' + newspapers[-1].format_senders_nice() + ' brought from '\
              + Newspaper.link(newspapers[-1].city) + ', ' + Newspaper.link(newspapers[-1].country) + '.</li></p>\n'\
              + '</ul><!--// Этот коммент не даёт показаться дополнительной статистике, пока она не готова\n'\
              + '<hr noshade style=\"margin-top: 30px; margin-bottom: 30px; color: black; background-color: black; ' \
                'height: 1px; border: none\">\n'\
              + '<p>Random:</p>\n'\
              + '<ul>\n'\
              + '<p><li>\n'\
              + '<script type=\"text/javascript\"><!--\n'\
              + 'var h=(Math.random()*34);\n'\
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
              + '//--><!--</script>\n'\
              + '</li></p>\n'\
              + '</ul>-->\n'\
              + '</div>'

    file_stat = open(PATH + '/stat.txt', encoding='utf-8', mode='w')
    file_stat.write(content)
    file_stat.close()
    print('Generate statistic.')