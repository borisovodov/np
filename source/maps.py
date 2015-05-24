"""Module generate maps for site and big map."""

from sys import path
from source.db import newspapers
from source.config import keys

KEY_GOOGLE = keys['google']


def map_general():
    content_newspaper = ''
    for newspaper in newspapers:
        content_newspaper = content_newspaper + '    papername[' + str(newspaper.id) + '] = \'' + newspaper.city + ', '\
                            + newspaper.country + '\';\n'\
                            + '    papertitle[' + str(newspaper.id) + '] = \'' + newspaper.title + '\';\n'\
                            + '    papernumber1[' + str(newspaper.id) + '] = \'' + newspaper.number + '\';\n'\
                            + '    papernumber2[' + str(newspaper.id) + '] = \'' + newspaper.number2 + '\';\n'\
                            + '    paperdate[' + str(newspaper.id) + '] = \''\
                            + newspaper.format_date() + '\';\n'\
                            + '    paperlang[' + str(newspaper.id) + '] = \'' + newspaper.link(newspaper.language) + '\';\n'\
                            + '    papersender[' + str(newspaper.id) + '] = \''\
                            + newspaper.format_senders_nice() + '\';\n'\
                            + '    paperland[' + str(newspaper.id) + '] = new google.maps.LatLng('\
                            + newspaper.format_coordinates() + ');\n'\
                            + '    paperlink[' + str(newspaper.id) + '] = \'' + newspaper.url + '\';\n'\
                            + '    iconimage[' + str(newspaper.id) + '] = \'' + newspaper.marker() + '\';\n\n'

    return '<script src=\"https://maps.googleapis.com/maps/api/js?key=' + KEY_GOOGLE\
           + '&sensor=false\" type=\"text/javascript\">\n'\
           + '</script>\n'\
           + '<script>\n'\
           + '    function initialize() {\n'\
           + '        var mapOptions = {\n'\
           + '            center: new google.maps.LatLng(33.818104,26.1731511),\n'\
           + '            zoom: 2,\n'\
           + '            panControl: false,\n'\
           + '            zoomControl: true,\n'\
           + '		      zoomControlOptions: {\n'\
           + '		      style: google.maps.ZoomControlStyle.SMALL\n'\
           + '        },\n'\
           + '        mapTypeControl: false,\n'\
           + '        scaleControl: true,\n'\
           + '        streetViewControl: false,\n'\
           + '        overviewMapControl: false,\n'\
           + '        mapTypeId: google.maps.MapTypeId.ROADMAP //Рельеф - TERRAIN\n'\
           + '    };\n'\
           + '    var map = new google.maps.Map(document.getElementById(\"map_canvas\"), mapOptions);\n'\
           + '\n'\
           + '    var content=[];\n'\
           + '    var papername=[];\n'\
           + '    var papertitle=[];\n'\
           + '    var papernumber1=[];\n'\
           + '    var papernumber2=[];\n'\
           + '    var paperdate=[];\n'\
           + '    var paperlang=[];\n'\
           + '    var papersender=[];\n'\
           + '    var paperland=[];\n'\
           + '    var paperlink=[];\n'\
           + '    var iconimage=[];\n'\
           + '    var infowindow=[];\n'\
           + '    var marker=[];\n'\
           + '\n'\
           + content_newspaper\
           + '    var N=' + str(len(newspapers)) + '; //Общее число газет\n'\
           + '    var i;\n'\
           + '    var j;\n'\
           + '    var k;\n'\
           + '\n'\
           + '    for (i=0; i<N; i++)\n'\
           + '    {\n'\
           + '        if (papernumber1[i]==\'\') {\n'\
           + '            if (paperdate[i]==\'\') {\n'\
           + '                if (paperlink[i]==\'\') {\n'\
           + '                    content[i] = \'<div id=\"content\">\'+\n'\
           + '                        \'<div id=\"siteNotice\">\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                        \'<div id=\"bodyContent\">\'+\n'\
           + '                        \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'</div>\';\n'\
           + '                } else {\n'\
           + '                    content[i] = \'<div id=\"content\">\'+\n'\
           + '                        \'<div id=\"siteNotice\">\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                        \'<div id=\"bodyContent\">\'+\n'\
           + '                        \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                        \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'</div>\';\n'\
           + '                }\n'\
           + '            } else if (paperlink[i]==\'\') {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
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
           + '                    \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            }\n'\
           + '        } else if (paperdate[i]==\'\') {\n'\
           + '            if (papernumber2[i]==\'\') {\n'\
           + '                if (paperlink[i]==\'\') {\n'\
           + '                    content[i] = \'<div id=\"content\">\'+\n'\
           + '                        \'<div id=\"siteNotice\">\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                        \'<div id=\"bodyContent\">\'+\n'\
           + '                        \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'</div>\';\n'\
           + '                } else {\n'\
           + '                    content[i] = \'<div id=\"content\">\'+\n'\
           + '                        \'<div id=\"siteNotice\">\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                        \'<div id=\"bodyContent\">\'+\n'\
           + '                        \'<p><b>Title: </b><a style=\"text-decoration: underline\" ' \
             'href=\"\'+paperlink[i]+\'\">\'+papertitle[i]+\'</a></p>\'+\n'\
           + '                        \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                        \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                        \'</div>\'+\n'\
           + '                        \'</div>\';\n'\
           + '                }\n'\
           + '            } else if (paperlink[i]==\'\') {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
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
           + '                    \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '                    \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'</div>\';\n'\
           + '            }\n'\
           + '        } else if (papernumber2[i]==\'\') {\n'\
           + '            if (paperlink[i]==\'\') {\n'\
           + '                content[i] = \'<div id=\"content\">\'+\n'\
           + '                    \'<div id=\"siteNotice\">\'+\n'\
           + '                    \'</div>\'+\n'\
           + '                    \'<h1 id=\"firstHeading\" class=\"firstHeading\">\'+papername[i]+\'</h1>\'+\n'\
           + '                    \'<div id=\"bodyContent\">\'+\n'\
           + '                    \'<p><b>Title: </b>\'+papertitle[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Number: </b>\'+papernumber1[i]+\'</p>\'+\n'\
           + '                    \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
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
           + '                    \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
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
           + '                \'<p><b>Number: </b>\'+papernumber1[i]+\' (\'+papernumber2[i]+\')</p>\'+\n'\
           + '                \'<p><b>Released: </b>\'+paperdate[i]+\'</p>\'+\n'\
           + '                \'<p><b>Language: </b>\'+paperlang[i]+\'</p>\'+\n'\
           + '                \'<p><b>Sender: </b>\'+papersender[i]+\'</p>\'+\n'\
           + '                \'</div>\'+\n'\
           + '                \'</div>\';\n'\
           + '        }\n\n'\
           + '        infowindow[i] = new google.maps.InfoWindow({\n'\
           + '            content: content[i],\n'\
           + '        });\n'\
           + '        marker[i] = new google.maps.Marker({\n'\
           + '            position: paperland[i],\n'\
           + '            map: map,\n'\
           + '            title: papername[i],\n'\
           + '            icon: iconimage[i]\n'\
           + '        });\n'\
           + '        google.maps.event.addListener(marker[i], \'click\', function(j) {\n'\
           + '            return function() {\n'\
           + '                for (k=0; k<N; k++) {\n'\
           + '                    infowindow[k].close();\n'\
           + '                }\n'\
           + '                infowindow[j].open(map,marker[j]);\n'\
           + '            }\n'\
           + '        }(i));\n'\
           + '    }\n'\
           + '}\n'\
           + '</script>\n'


def maps():
    content_small = '<p>This map shows all places from which newspapers were brought for this site.</p>\n'\
                    + '<p>Also you can see the <a style=\"text-decoration: underline\" ' \
                      'href=\"https://googledrive.com/host/0B3n4EMBczDDEfkZOTFltWm1zYnlFTXAxUHY2TE9fbWhlWUoyN1IyZDdHUFVvN2xuNkNEczA/map.html\">' \
                      'full map</a>.</p>\n'\
                    + map_general()\
                    + '<div id=\"map_canvas\" style=\"width: 100%; height: 600px\"></div>\n'

    content_big = '<!DOCTYPE html>\n'\
                  + '<html>\n'\
                  + '    <head>\n'\
                  + '        <meta charset=\"utf-8\">\n'\
                  + '    <title>Newspapers From Around The World - Map</title>\n'\
                  + '        <style type=\"text/css\">\n'\
                  + '            html { height: 100% }\n'\
                  + '            body { height: 100%; margin: 0; padding: 0 }\n'\
                  + '            #map_canvas { height: 100% }\n'\
                  + '        </style>\n'\
                  + map_general()\
                  + '    </head>\n'\
                  + '    <body  onload=\"initialize()\">\n'\
                  + '        <div id=\"map_canvas\" style=\"width: 100%; height: 100%\"></div>\n'\
                  + '    </body>\n'\
                  + '</html>'

    file_small_map = open(path[0] + '/map.txt', encoding='utf-8', mode='w')
    file_small_map.write(content_small)
    file_small_map.close()

    file_big_map = open(path[0] + '/map.html', encoding='utf-8', mode='w')
    file_big_map.write(content_big)
    file_big_map.close()
    print('Generate maps.')