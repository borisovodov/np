"""Module generate maps for site and big map."""

import sys


def content_map(queryset):
    content_newspaper = ''
    for newspaper in queryset:
        content_newspaper = content_newspaper + 'papername[' + str(newspaper.id) + '] = \'' + newspaper.city.name + ', '\
                            + newspaper.city.country.name + '\';\n'\
                            + 'papertitle[' + str(newspaper.id) + '] = \'' + newspaper.title + '\';\n'\
                            + 'papernumber1[' + str(newspaper.id) + '] = \'' + newspaper.number + '\';\n'\
                            + 'papernumber2[' + str(newspaper.id) + '] = \'' + newspaper.number_2 + '\';\n'\
                            + 'paperdate[' + str(newspaper.id) + '] = \''\
                            + newspaper.format_date() + '\';\n'\
                            + 'paperlang[' + str(newspaper.id) + '] = \'' + newspaper.link(newspaper.language.name) + '\';\n'\
                            + 'papersender[' + str(newspaper.id) + '] = \''\
                            + newspaper.format_senders_nice() + '\';\n'\
                            + 'paperland[' + str(newspaper.id) + '] = new google.maps.LatLng('\
                            + str(newspaper.coordinates.latitude) + ',' + str(newspaper.coordinates.longitude) + ');\n'\
                            + 'paperlink[' + str(newspaper.id) + '] = \'' + newspaper.URL + '\';\n'\
                            + 'iconimage[' + str(newspaper.id) + '] = \'' + newspaper.city.country.marker() + '\';\n\n'

    return 'function initialize() {\n'\
           + '    var mapOptions = {\n'\
           + '        center: new google.maps.LatLng(33.818104,26.1731511),\n'\
           + '        zoom: 2,\n'\
           + '        panControl: false,\n'\
           + '        zoomControl: true,\n'\
           + '        zoomControlOptions: {\n'\
           + '	      style: google.maps.ZoomControlStyle.SMALL\n'\
           + '    },\n'\
           + '    mapTypeControl: false,\n'\
           + '    scaleControl: true,\n'\
           + '    streetViewControl: false,\n'\
           + '    overviewMapControl: false,\n'\
           + '    mapTypeId: google.maps.MapTypeId.ROADMAP //Рельеф - TERRAIN\n'\
           + '};\n'\
           + 'var map = new google.maps.Map(document.getElementById(\"map_canvas\"), mapOptions);\n'\
           + '\n'\
           + 'var content=[];\n'\
           + 'var papername=[];\n'\
           + 'var papertitle=[];\n'\
           + 'var papernumber1=[];\n'\
           + 'var papernumber2=[];\n'\
           + 'var paperdate=[];\n'\
           + 'var paperlang=[];\n'\
           + 'var papersender=[];\n'\
           + 'var paperland=[];\n'\
           + 'var paperlink=[];\n'\
           + 'var iconimage=[];\n'\
           + 'var infowindow=[];\n'\
           + 'var marker=[];\n'\
           + '\n'\
           + content_newspaper\
           + 'var N=' + str(len(queryset) + 1) + '; //Общее число газет\n'\
           + 'var i;\n'\
           + 'var j;\n'\
           + 'var k;\n'\
           + '\n'\
           + 'for (i=0; i<N; i++)\n'\
           + '{\n'\
           + '    if (papernumber1[i]==\'\') {\n'\
           + '        if (paperdate[i]==\'\') {\n'\
           + '            if (paperlink[i]==\'\') {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            } else {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            }\n'\
           + '        } else if (paperlink[i]==\'\') {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        } else {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        }\n'\
           + '    } else if (paperdate[i]==\'\') {\n'\
           + '        if (papernumber2[i]==\'\') {\n'\
           + '            if (paperlink[i]==\'\') {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            } else {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                    \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            }\n'\
           + '        } else if (paperlink[i]==\'\') {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        } else {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        }\n'\
           + '    } else if (papernumber2[i]==\'\') {\n'\
           + '        if (paperlink[i]==\'\') {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        } else {\n'\
           + '            content[i] = \'<div id=\"content\">\'+\n'\
           + '                \'<div id=\"siteNotice\">\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                \'<div id=\"bodyContent\">\'+\n'\
           + '                \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        }\n'\
           + '    } else if (paperlink[i]==\'\') {\n'\
           + '        content[i] = \'<div id=\"content\">\'+\n'\
           + '            \'<div id=\"siteNotice\">\'+\n'\
           + '            \'</div>\'+\n'\
           + '            \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '            \'<div id=\"bodyContent\">\'+\n'\
           + '            \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '            \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '            \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '            \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '            \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '            \'</div>\'+\n'\
           + '            \'</div>\';\n'\
           + '    } else {\n'\
           + '        content[i] = \'<div id=\"content\">\'+\n'\
           + '            \'<div id=\"siteNotice\">\'+\n'\
           + '            \'</div>\'+\n'\
           + '            \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '            \'<div id=\"bodyContent\">\'+\n'\
           + '            \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '            \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '            \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '            \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '            \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '            \'</div>\'+\n'\
           + '            \'</div>\';\n'\
           + '    }\n\n'\
           + '    infowindow[i] = new google.maps.InfoWindow({\n'\
           + '        content: content[i],\n'\
           + '    });\n'\
           + '    marker[i] = new google.maps.Marker({\n'\
           + '        position: paperland[i],\n'\
           + '        map: map,\n'\
           + '        title: papername[i],\n'\
           + '        icon: iconimage[i]\n'\
           + '    });\n'\
           + '    google.maps.event.addListener(marker[i], \'click\', function(j) {\n'\
           + '        return function() {\n'\
           + '            for (k=0; k<N; k++) {\n'\
           + '                infowindow[k].close();\n'\
           + '            }\n'\
           + '            infowindow[j].open(map,marker[j]);\n'\
           + '        }\n'\
           + '    }(i));\n'\
           + '}\n'\
           + '}\n'


def maps(queryset):
    file_map = open(sys.path[0] + '/tmp/map.js', encoding='utf-8', mode='w')
    file_map.write(content_map(queryset))
    file_map.close()