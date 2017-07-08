function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(33.818104,26.1731511),
        zoom: 2,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP //Рельеф - TERRAIN
};
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

var content=[];
var papername=[];
var papertitle=[];
var papernumber1=[];
var papernumber2=[];
var paperdate=[];
var paperlang=[];
var papersender=[];
var paperland=[];
var paperlink=[];
var iconimage=[];
var infowindow=[];
var marker=[];

papername[0] = 'Münster, Germany';
papertitle[0] = 'Westfälische Nachrichten';
papernumber1[0] = '281';
papernumber2[0] = '';
paperdate[0] = 'December 2, 2016';
paperlang[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[0] = new google.maps.LatLng(51.9042409,7.6464064);
paperlink[0] = 'http://www.papersaround.com/2017/07/munster-germany.html';
iconimage[0] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[1] = 'Göttingen, Germany';
papertitle[1] = 'Göttinger Tageblatt';
papernumber1[1] = '284';
papernumber2[1] = '';
paperdate[1] = 'December 3, 2016';
paperlang[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[1] = new google.maps.LatLng(51.523541,9.8755377);
paperlink[1] = 'http://www.papersaround.com/2017/07/gottingen-germany.html';
iconimage[1] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[2] = 'Brühl, Germany';
papertitle[2] = 'Express';
papernumber1[2] = '';
papernumber2[2] = '';
paperdate[2] = 'December 2, 2016';
paperlang[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[2] = new google.maps.LatLng(50.8290191,6.9056384);
paperlink[2] = 'http://www.papersaround.com/2017/07/bruhl-germany.html';
iconimage[2] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[3] = 'Ahlen, Germany';
papertitle[3] = 'Blick Punkt';
papernumber1[3] = '48';
papernumber2[3] = '';
paperdate[3] = 'November 27, 2016';
paperlang[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[3] = new google.maps.LatLng(51.7634183,7.8939555);
paperlink[3] = 'http://www.papersaround.com/2017/07/ahlen-germany.html';
iconimage[3] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[4] = 'Beckum, Germany';
papertitle[4] = 'stadt. anzeiger';
papernumber1[4] = '3';
papernumber2[4] = '';
paperdate[4] = 'December 4, 2016';
paperlang[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[4] = new google.maps.LatLng(51.7630305,7.8949297);
paperlink[4] = 'http://www.papersaround.com/2017/07/beckum-germany.html';
iconimage[4] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[5] = 'Bielefeld, Germany';
papertitle[5] = 'Neue Westfälische Bielefelder Tageblatt';
papernumber1[5] = '285';
papernumber2[5] = '';
paperdate[5] = 'December 7, 2016';
paperlang[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[5] = new google.maps.LatLng(52.0271654,8.5322954);
paperlink[5] = 'http://www.papersaround.com/2017/07/bielefeld-germany.html';
iconimage[5] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[6] = 'Hamburg, Germany';
papertitle[6] = 'Hamburger Morgenpost';
papernumber1[6] = '332';
papernumber2[6] = '';
paperdate[6] = 'December 3, 2016';
paperlang[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[6] = new google.maps.LatLng(53.5563839,9.9101053);
paperlink[6] = 'http://www.papersaround.com/2017/07/hamburg-germany.html';
iconimage[6] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[7] = 'Osnabrück, Germany';
papertitle[7] = 'Neue Osnabrücker Zeitung';
papernumber1[7] = '290';
papernumber2[7] = '';
paperdate[7] = 'December 10, 2016';
paperlang[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[7] = new google.maps.LatLng(52.2742157,8.0477191);
paperlink[7] = 'http://www.papersaround.com/2017/07/osnabruck-germany.html';
iconimage[7] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[8] = 'Oelde, Germany';
papertitle[8] = 'Die Glocke';
papernumber1[8] = '282';
papernumber2[8] = '';
paperdate[8] = 'December 3, 2016';
paperlang[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[8] = new google.maps.LatLng(51.83541,8.3100477);
paperlink[8] = 'http://www.papersaround.com/2017/07/oelde-germany.html';
iconimage[8] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[9] = 'Kaliningrad, Russia';
papertitle[9] = 'Дворник'ъ';
papernumber1[9] = '38';
papernumber2[9] = '1044';
paperdate[9] = 'October 4, 2016';
paperlang[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[9] = new google.maps.LatLng(54.7797061,20.6103425);
paperlink[9] = 'http://www.papersaround.com/2017/07/kaliningrad-russia.html';
iconimage[9] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[10] = 'Zakopane, Poland';
papertitle[10] = 'Tygodnik Podhalański';
papernumber1[10] = '1';
papernumber2[10] = '1398';
paperdate[10] = 'January 5, 2017';
paperlang[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[10] = new google.maps.LatLng(49.2954977,19.9525668);
paperlink[10] = 'http://www.papersaround.com/2017/07/zakopane-poland.html';
iconimage[10] = 'https://rawgit.com/borisovodov/np/master/content/markers/poland.png';

papername[11] = 'Kraków, Poland';
papertitle[11] = 'Gazeta Krakowska';
papernumber1[11] = '1';
papernumber2[11] = '20915';
paperdate[11] = 'January 2, 2017';
paperlang[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[11] = new google.maps.LatLng(50.0577336,19.9613964);
paperlink[11] = 'http://www.papersaround.com/2017/07/krakow-poland.html';
iconimage[11] = 'https://rawgit.com/borisovodov/np/master/content/markers/poland.png';

papername[12] = 'Kraków, Poland';
papertitle[12] = 'Dziennik Polski';
papernumber1[12] = '1';
papernumber2[12] = '22051';
paperdate[12] = 'January 2, 2017';
paperlang[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[12] = new google.maps.LatLng(50.0575972,19.961977);
paperlink[12] = 'http://www.papersaround.com/2017/07/krakow-poland_8.html';
iconimage[12] = 'https://rawgit.com/borisovodov/np/master/content/markers/poland.png';

papername[13] = 'Łódź, Poland';
papertitle[13] = 'Tygodnik Faktycznie';
papernumber1[13] = '15';
papernumber2[13] = '15';
paperdate[13] = 'October 13, 2016';
paperlang[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[13] = new google.maps.LatLng(51.7556737,19.480502);
paperlink[13] = 'http://www.papersaround.com/2017/04/odz-poland_67.html';
iconimage[13] = 'https://rawgit.com/borisovodov/np/master/content/markers/poland.png';

papername[14] = 'Gdańsk, Poland';
papertitle[14] = 'Dziennik Bałtycki';
papernumber1[14] = '242';
papernumber2[14] = '21872';
paperdate[14] = 'October 15, 2016';
paperlang[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[14] = new google.maps.LatLng(54.3524823,18.6480497);
paperlink[14] = 'http://www.papersaround.com/2017/04/gdansk-poland_81.html';
iconimage[14] = 'https://rawgit.com/borisovodov/np/master/content/markers/poland.png';

papername[15] = 'Kaliningrad, Russia';
papertitle[15] = 'Гражданин';
papernumber1[15] = '25';
papernumber2[15] = '1353';
paperdate[15] = 'September 29, 2016';
paperlang[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[15] = new google.maps.LatLng(54.7199788,20.5015074);
paperlink[15] = 'http://www.papersaround.com/2017/04/kaliningrad-russia_60.html';
iconimage[15] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[16] = 'Murmansk, Russia';
papertitle[16] = 'Полярная правда';
papernumber1[16] = '20';
papernumber2[16] = '23735';
paperdate[16] = 'December 18, 2016';
paperlang[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[16] = new google.maps.LatLng(68.9712108,33.092);
paperlink[16] = 'http://www.papersaround.com/2017/04/murmansk-russia_60.html';
iconimage[16] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[17] = 'Gadzhiyevo, Russia';
papertitle[17] = 'На страже Заполярья';
papernumber1[17] = '28';
papernumber2[17] = '18141';
paperdate[17] = 'April 7, 2007';
paperlang[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[17] = new google.maps.LatLng(69.2491946,33.3168739);
paperlink[17] = 'http://www.papersaround.com/2017/04/gadzhiyevo-russia_41.html';
iconimage[17] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[18] = 'Bolsheustikinskoye, Russia';
papertitle[18] = 'Мечетлинская жизнь';
papernumber1[18] = '145';
papernumber2[18] = '10130';
paperdate[18] = 'December 17, 2016';
paperlang[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[18] = new google.maps.LatLng(55.9494382,58.266619);
paperlink[18] = 'http://www.papersaround.com/2017/04/bolsheustikinskoye-russia_11.html';
iconimage[18] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[19] = 'Istanbul, Turkey';
papertitle[19] = 'Vatan';
papernumber1[19] = '';
papernumber2[19] = '';
paperdate[19] = 'September 9, 2016';
paperlang[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[19] = new google.maps.LatLng(41.0629496,28.9869787);
paperlink[19] = 'http://www.papersaround.com/2017/04/istanbul-turkey_45.html';
iconimage[19] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[20] = 'Tbilisi, Georgia';
papertitle[20] = 'Georgia Today Business';
papernumber1[20] = '42';
papernumber2[20] = '874';
paperdate[20] = 'August 30, 2019';
paperlang[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[20] = new google.maps.LatLng(41.7076384,44.7850351);
paperlink[20] = 'http://www.papersaround.com/2017/04/tbilisi-georgia_22.html';
iconimage[20] = 'https://rawgit.com/borisovodov/np/master/content/markers/georgia.png';

papername[21] = 'Krasnoyarsk, Russia';
papertitle[21] = 'Красноярский рабочий';
papernumber1[21] = '115';
papernumber2[21] = '27187';
paperdate[21] = 'December 7, 2016';
paperlang[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[21] = new google.maps.LatLng(56.0214804,92.8369719);
paperlink[21] = 'http://www.papersaround.com/2017/04/krasnoyarsk-russia_84.html';
iconimage[21] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[22] = 'Pyshma, Russia';
papertitle[22] = 'Пышминские Вести';
papernumber1[22] = '88';
papernumber2[22] = '9896';
paperdate[22] = 'November 3, 2016';
paperlang[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Marina%20Niderberger">Marina Niderberger</a>';
paperland[22] = new google.maps.LatLng(56.9471459,63.2402341);
paperlink[22] = 'http://www.papersaround.com/2017/04/pyshma-russia_54.html';
iconimage[22] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[23] = 'Boston, United States';
papertitle[23] = 'Boston Sunday Globe';
papernumber1[23] = '';
papernumber2[23] = '';
paperdate[23] = 'November 6, 2016';
paperlang[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[23] = new google.maps.LatLng(42.3156846,-71.0488287);
paperlink[23] = 'http://www.papersaround.com/2017/04/boston-united-states_93.html';
iconimage[23] = 'https://rawgit.com/borisovodov/np/master/content/markers/united states.png';

papername[24] = 'Boston, United States';
papertitle[24] = 'Boston Compass';
papernumber1[24] = '81';
papernumber2[24] = '';
paperdate[24] = 'November 1, 2016';
paperlang[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[24] = new google.maps.LatLng(42.3604081,-71.0582395);
paperlink[24] = 'http://www.papersaround.com/2017/04/boston-united-states_33.html';
iconimage[24] = 'https://rawgit.com/borisovodov/np/master/content/markers/united states.png';

papername[25] = 'Krasnoyarsk, Russia';
papertitle[25] = 'Посредник';
papernumber1[25] = '11';
papernumber2[25] = '';
paperdate[25] = 'December 14, 2016';
paperlang[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[25] = new google.maps.LatLng(56.0131505,92.8907539);
paperlink[25] = 'http://www.papersaround.com/2017/04/krasnoyarsk-russia_6.html';
iconimage[25] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[26] = 'Athens, Greece';
papertitle[26] = 'το Ποντίκι';
papernumber1[26] = '';
papernumber2[26] = '';
paperdate[26] = 'October 6, 2016';
paperlang[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Greek">Greek</a>';
papersender[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[26] = new google.maps.LatLng(37.9745772,23.7252918);
paperlink[26] = 'http://www.papersaround.com/2017/04/athens-greece_85.html';
iconimage[26] = 'https://rawgit.com/borisovodov/np/master/content/markers/greece.png';

papername[27] = 'Kyzyl, Russia';
papertitle[27] = 'Тыванын Аныяктары';
papernumber1[27] = '36';
papernumber2[27] = '110064';
paperdate[27] = 'September 29, 2016';
paperlang[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tuvan">Tuvan</a>';
papersender[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[27] = new google.maps.LatLng(51.7205979,94.4372445);
paperlink[27] = 'http://www.papersaround.com/2017/04/kyzyl-russia_53.html';
iconimage[27] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[28] = 'Kyzyl, Russia';
papertitle[28] = 'Тувинская правда';
papernumber1[28] = '107';
papernumber2[28] = '17858';
paperdate[28] = 'September 29, 2016';
paperlang[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[28] = new google.maps.LatLng(51.7100769,94.4501267);
paperlink[28] = 'http://www.papersaround.com/2017/04/kyzyl-russia_44.html';
iconimage[28] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[29] = 'Ankara, Turkey';
papertitle[29] = 'Anadolu Bayram';
papernumber1[29] = '12';
papernumber2[29] = '';
paperdate[29] = 'September 13, 2016';
paperlang[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[29] = new google.maps.LatLng(39.9314601,32.843575);
paperlink[29] = 'http://www.papersaround.com/2017/04/ankara-turkey_34.html';
iconimage[29] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[30] = 'Surgut, Russia';
papertitle[30] = 'Сургутская трибуна';
papernumber1[30] = '177-178';
papernumber2[30] = '13495-96';
paperdate[30] = 'September 23, 2016';
paperlang[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[30] = new google.maps.LatLng(61.2556409,73.4194335);
paperlink[30] = 'http://www.papersaround.com/2017/04/surgut-russia_19.html';
iconimage[30] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[31] = 'Chelyabinsk, Russia';
papertitle[31] = 'Синегорье';
papernumber1[31] = '36';
papernumber2[31] = '834';
paperdate[31] = 'September 7, 2016';
paperlang[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[31] = new google.maps.LatLng(55.13999,61.4131351);
paperlink[31] = 'http://www.papersaround.com/2017/04/chelyabinsk-russia_14.html';
iconimage[31] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[32] = 'Chelyabinsk, Russia';
papertitle[32] = 'Вечерний Челябинск';
papernumber1[32] = '70';
papernumber2[32] = '11980';
paperdate[32] = 'September 9, 2016';
paperlang[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[32] = new google.maps.LatLng(55.1622479,61.3873525);
paperlink[32] = 'http://www.papersaround.com/2017/04/chelyabinsk-russia_97.html';
iconimage[32] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[33] = 'Karabash, Russia';
papertitle[33] = 'Карабашский рабочий';
papernumber1[33] = '35';
papernumber2[33] = '9845';
paperdate[33] = 'September 2, 2016';
paperlang[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[33] = new google.maps.LatLng(55.4833048,60.1998733);
paperlink[33] = 'http://www.papersaround.com/2017/04/karabash-russia_79.html';
iconimage[33] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[34] = 'Rimini, Italy';
papertitle[34] = 'La Stampa';
papernumber1[34] = '222';
papernumber2[34] = '';
paperdate[34] = 'August 11, 2016';
paperlang[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[34] = new google.maps.LatLng(44.049,12.5854291);
paperlink[34] = 'http://www.papersaround.com/2017/04/rimini-italy_71.html';
iconimage[34] = 'https://rawgit.com/borisovodov/np/master/content/markers/italy.png';

papername[35] = 'Rimini, Italy';
papertitle[35] = 'Corriere Romagna di Rimini e San Marino';
papernumber1[35] = '221';
papernumber2[35] = '';
paperdate[35] = 'August 11, 2016';
paperlang[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[35] = new google.maps.LatLng(44.0595753,12.5684232);
paperlink[35] = 'http://www.papersaround.com/2017/04/rimini-italy_16.html';
iconimage[35] = 'https://rawgit.com/borisovodov/np/master/content/markers/italy.png';

papername[36] = 'Sofia, Bulgaria';
papertitle[36] = 'Стандарт';
papernumber1[36] = '';
papernumber2[36] = '8435';
paperdate[36] = 'August 11, 2016';
paperlang[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Bulgarian">Bulgarian</a>';
papersender[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Klavdiya%20Potapova">Klavdiya Potapova</a>';
paperland[36] = new google.maps.LatLng(42.6914171,23.3436318);
paperlink[36] = 'http://www.papersaround.com/2017/04/sofia-bulgaria_49.html';
iconimage[36] = 'https://rawgit.com/borisovodov/np/master/content/markers/bulgaria.png';

papername[37] = 'Zarechny, Russia';
papertitle[37] = 'Зареченская ярмарка';
papernumber1[37] = '33';
papernumber2[37] = '1071';
paperdate[37] = 'August 18, 2016';
paperlang[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[37] = new google.maps.LatLng(56.8014229,61.3206949);
paperlink[37] = 'http://www.papersaround.com/2017/04/zarechny-russia_77.html';
iconimage[37] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[38] = 'Tbilisi, Georgia';
papertitle[38] = 'საქართველოს რესპუბლიკის';
papernumber1[38] = '150';
papernumber2[38] = '8042';
paperdate[38] = 'August 13, 2016';
paperlang[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Georgian">Georgian</a>';
papersender[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[38] = new google.maps.LatLng(41.6955345,44.8065179);
paperlink[38] = 'http://www.papersaround.com/2017/04/tbilisi-georgia_79.html';
iconimage[38] = 'https://rawgit.com/borisovodov/np/master/content/markers/georgia.png';

papername[39] = 'Yerevan, Armenia';
papertitle[39] = 'Առավոտ';
papernumber1[39] = '151';
papernumber2[39] = '5241';
paperdate[39] = 'August 9, 2016';
paperlang[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[39] = new google.maps.LatLng(40.170461,44.507751);
paperlink[39] = 'http://www.papersaround.com/2017/04/yerevan-armenia_30.html';
iconimage[39] = 'https://rawgit.com/borisovodov/np/master/content/markers/armenia.png';

papername[40] = 'Yerevan, Armenia';
papertitle[40] = 'Հայկական ժամանակ';
papernumber1[40] = '151';
papernumber2[40] = '4015';
paperdate[40] = 'August 9, 2016';
paperlang[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[40] = new google.maps.LatLng(40.1543992,44.4924777);
paperlink[40] = 'http://www.papersaround.com/2017/04/yerevan-armenia_61.html';
iconimage[40] = 'https://rawgit.com/borisovodov/np/master/content/markers/armenia.png';

papername[41] = 'Yerevan, Armenia';
papertitle[41] = 'Ժողովուրդ';
papernumber1[41] = '134';
papernumber2[41] = '1287';
paperdate[41] = 'August 9, 2016';
paperlang[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[41] = new google.maps.LatLng(40.1793621,44.5063481);
paperlink[41] = 'http://www.papersaround.com/2017/04/yerevan-armenia_42.html';
iconimage[41] = 'https://rawgit.com/borisovodov/np/master/content/markers/armenia.png';

papername[42] = 'Dresden, Germany';
papertitle[42] = 'Dresdner Amtsblatt';
papernumber1[42] = '26-27';
papernumber2[42] = '';
paperdate[42] = 'July 7, 2016';
paperlang[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[42] = new google.maps.LatLng(51.0544705,13.7262943);
paperlink[42] = 'http://www.papersaround.com/2017/04/dresden-germany_81.html';
iconimage[42] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[43] = 'Dresden, Germany';
papertitle[43] = 'Theater Courier';
papernumber1[43] = '';
papernumber2[43] = '';
paperdate[43] = 'June 1, 2016';
paperlang[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[43] = new google.maps.LatLng(51.0486044,13.7202708);
paperlink[43] = 'http://www.papersaround.com/2017/04/dresden-germany_12.html';
iconimage[43] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[44] = 'Bor, Russia';
papertitle[44] = 'Бор сегодня';
papernumber1[44] = '27';
papernumber2[44] = '15361';
paperdate[44] = 'July 7, 2016';
paperlang[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[44] = new google.maps.LatLng(56.3553975,44.0636287);
paperlink[44] = 'http://www.papersaround.com/2017/04/bor-russia_56.html';
iconimage[44] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[45] = 'Nizhny Novgorod, Russia';
papertitle[45] = 'Metro';
papernumber1[45] = '26';
papernumber2[45] = '80';
paperdate[45] = 'July 14, 2016';
paperlang[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[45] = new google.maps.LatLng(56.3253476,44.0039243);
paperlink[45] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_99.html';
iconimage[45] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[46] = 'Nizhny Novgorod, Russia';
papertitle[46] = 'Новое дело';
papernumber1[46] = '28';
papernumber2[46] = '807';
paperdate[46] = 'July 12, 2016';
paperlang[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[46] = new google.maps.LatLng(56.3447799,43.9402825);
paperlink[46] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_94.html';
iconimage[46] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[47] = 'Nizhny Novgorod, Russia';
papertitle[47] = 'Нижегородская правда';
papernumber1[47] = '69';
papernumber2[47] = '26090';
paperdate[47] = 'July 12, 2016';
paperlang[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[47] = new google.maps.LatLng(56.3125614,43.9910557);
paperlink[47] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_92.html';
iconimage[47] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[48] = 'Zarechny, Russia';
papertitle[48] = 'Быстрый нейтрон';
papernumber1[48] = '24';
papernumber2[48] = '0237';
paperdate[48] = 'June 24, 2016';
paperlang[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[48] = new google.maps.LatLng(56.8419134,61.3187734);
paperlink[48] = 'http://www.papersaround.com/2017/04/zarechny-russia_50.html';
iconimage[48] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[49] = 'Zarechny, Russia';
papertitle[49] = 'Страна Росатом';
papernumber1[49] = '23';
papernumber2[49] = '247';
paperdate[49] = 'June 1, 2016';
paperlang[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[49] = new google.maps.LatLng(56.8036442,61.3224178);
paperlink[49] = 'http://www.papersaround.com/2017/04/zarechny-russia_92.html';
iconimage[49] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[50] = 'Kogalym, Russia';
papertitle[50] = 'Когалымский вестник';
papernumber1[50] = '46';
papernumber2[50] = '736';
paperdate[50] = 'June 10, 2016';
paperlang[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[50] = new google.maps.LatLng(62.2640893,74.4826382);
paperlink[50] = 'http://www.papersaround.com/2017/04/kogalym-russia_82.html';
iconimage[50] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[51] = 'Hosapete, India';
papertitle[51] = 'ವಿಜಯ ಕರ್ನಾಟಕ';
papernumber1[51] = '';
papernumber2[51] = '';
paperdate[51] = 'April 20, 2016';
paperlang[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[51] = new google.maps.LatLng(15.2604972,76.378436);
paperlink[51] = 'http://www.papersaround.com/2017/04/hosapete-india_73.html';
iconimage[51] = 'https://rawgit.com/borisovodov/np/master/content/markers/india.png';

papername[52] = 'Hosapete, India';
papertitle[52] = 'ಪ್ರಜಾವಾಣಿ';
papernumber1[52] = '';
papernumber2[52] = '';
paperdate[52] = 'April 20, 2016';
paperlang[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[52] = new google.maps.LatLng(15.2678721,76.3863406);
paperlink[52] = 'http://www.papersaround.com/2017/04/hosapete-india_78.html';
iconimage[52] = 'https://rawgit.com/borisovodov/np/master/content/markers/india.png';

papername[53] = 'Polevskoy, Russia';
papertitle[53] = 'Рабочая Правда';
papernumber1[53] = '18';
papernumber2[53] = '10635';
paperdate[53] = 'May 4, 2016';
paperlang[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[53] = new google.maps.LatLng(56.4905554,60.2379282);
paperlink[53] = 'http://www.papersaround.com/2017/04/polevskoy-russia_88.html';
iconimage[53] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[54] = 'Bogdanovich, Russia';
papertitle[54] = 'Наш Богданович';
papernumber1[54] = '26';
papernumber2[54] = '592';
paperdate[54] = 'June 30, 2016';
paperlang[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[54] = new google.maps.LatLng(56.7764533,62.0505512);
paperlink[54] = 'http://www.papersaround.com/2017/04/bogdanovich-russia_59.html';
iconimage[54] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[55] = 'Krasnoufimsk, Russia';
papertitle[55] = 'Городок';
papernumber1[55] = '27';
papernumber2[55] = '1117';
paperdate[55] = 'July 1, 2016';
paperlang[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[55] = new google.maps.LatLng(56.6145278,57.7581596);
paperlink[55] = 'http://www.papersaround.com/2017/04/krasnoufimsk-russia_34.html';
iconimage[55] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[56] = 'Istanbul, Turkey';
papertitle[56] = 'Airport Post';
papernumber1[56] = '22';
papernumber2[56] = '';
paperdate[56] = 'May 3, 2016';
paperlang[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[56] = new google.maps.LatLng(40.9829717,28.8104199);
paperlink[56] = 'http://www.papersaround.com/2017/04/istanbul-turkey_39.html';
iconimage[56] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[57] = 'Istanbul, Turkey';
papertitle[57] = 'Hürriyet';
papernumber1[57] = '';
papernumber2[57] = '';
paperdate[57] = 'February 24, 2016';
paperlang[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[57] = new google.maps.LatLng(41.0602177,28.8462759);
paperlink[57] = 'http://www.papersaround.com/2017/04/istanbul-turkey_73.html';
iconimage[57] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[58] = 'Copenhagen, Denmark';
papertitle[58] = 'BT';
papernumber1[58] = '99';
papernumber2[58] = '';
paperdate[58] = 'April 10, 2015';
paperlang[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[58] = new google.maps.LatLng(55.6992929,12.5775806);
paperlink[58] = 'http://www.papersaround.com/2017/04/copenhagen-denmark_43.html';
iconimage[58] = 'https://rawgit.com/borisovodov/np/master/content/markers/denmark.png';

papername[59] = 'Giessen, Germany';
papertitle[59] = 'Mittelhessische Anzeigen Zeitung';
papernumber1[59] = '';
papernumber2[59] = '';
paperdate[59] = 'April 8, 2015';
paperlang[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[59] = new google.maps.LatLng(50.5837275,8.6779689);
paperlink[59] = 'http://www.papersaround.com/2017/04/giessen-germany_26.html';
iconimage[59] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[60] = 'Berlin, Germany';
papertitle[60] = 'Berliner Zeitung';
papernumber1[60] = '120';
papernumber2[60] = '';
paperdate[60] = 'May 26, 2016';
paperlang[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[60] = new google.maps.LatLng(52.5243414,13.4116841);
paperlink[60] = 'http://www.papersaround.com/2017/04/berlin-germany_18.html';
iconimage[60] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[61] = 'Singapore, Singapore';
papertitle[61] = 'life';
papernumber1[61] = '';
papernumber2[61] = '';
paperdate[61] = 'April 30, 2016';
paperlang[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[61] = new google.maps.LatLng(1.342603,103.848426);
paperlink[61] = 'http://www.papersaround.com/2017/04/singapore-singapore_56.html';
iconimage[61] = 'https://rawgit.com/borisovodov/np/master/content/markers/singapore.png';

papername[62] = 'Karabash, Russia';
papertitle[62] = 'Люди Урала';
papernumber1[62] = '';
papernumber2[62] = '';
paperdate[62] = 'May 1, 2016';
paperlang[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[62] = new google.maps.LatLng(55.4777275,60.1983045);
paperlink[62] = 'http://www.papersaround.com/2017/04/karabash-russia_53.html';
iconimage[62] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[63] = 'Sysert, Russia';
papertitle[63] = 'Маяк';
papernumber1[63] = '35';
papernumber2[63] = '10171';
paperdate[63] = 'September 2, 2015';
paperlang[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[63] = new google.maps.LatLng(56.5045779,60.8176965);
paperlink[63] = 'http://www.papersaround.com/2017/04/sysert-russia_70.html';
iconimage[63] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[64] = 'Salzburg, Austria';
papertitle[64] = 'Salzburger Nachrichten';
papernumber1[64] = '90';
papernumber2[64] = '';
paperdate[64] = 'April 18, 2016';
paperlang[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[64] = new google.maps.LatLng(47.7923009,13.0114355);
paperlink[64] = 'http://www.papersaround.com/2017/04/salzburg-austria_62.html';
iconimage[64] = 'https://rawgit.com/borisovodov/np/master/content/markers/austria.png';

papername[65] = 'Garmisch-Partenkirchen, Germany';
papertitle[65] = 'Garmisch-Partenkirchner Tagblatt';
papernumber1[65] = '91';
papernumber2[65] = '';
paperdate[65] = 'April 20, 2016';
paperlang[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[65] = new google.maps.LatLng(47.4911232,11.0869002);
paperlink[65] = 'http://www.papersaround.com/2017/04/garmisch-partenkirchen-germany_80.html';
iconimage[65] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[66] = 'Garching, Germany';
papertitle[66] = 'Max Planck Journal';
papernumber1[66] = '';
papernumber2[66] = '';
paperdate[66] = 'June 1, 2015';
paperlang[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[66] = new google.maps.LatLng(48.25963,11.6668394);
paperlink[66] = 'http://www.papersaround.com/2017/04/garching-germany_0.html';
iconimage[66] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[67] = 'Garching, Germany';
papertitle[67] = 'Garchinger Rundschau';
papernumber1[67] = '4';
papernumber2[67] = '15';
paperdate[67] = 'April 15, 2016';
paperlang[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[67] = new google.maps.LatLng(48.2494114,11.6518003);
paperlink[67] = 'http://www.papersaround.com/2017/04/garching-germany_81.html';
iconimage[67] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[68] = 'Anapa, Russia';
papertitle[68] = 'Анапское Черноморье';
papernumber1[68] = '38';
papernumber2[68] = '13683';
paperdate[68] = 'April 7, 2016';
paperlang[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[68] = new google.maps.LatLng(44.891769,37.3100531);
paperlink[68] = 'http://www.papersaround.com/2017/04/anapa-russia_47.html';
iconimage[68] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[69] = 'Anapa, Russia';
papertitle[69] = 'Новая газета Кубани';
papernumber1[69] = '13';
papernumber2[69] = '2077';
paperdate[69] = 'April 6, 2016';
paperlang[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[69] = new google.maps.LatLng(44.8990112,37.3173201);
paperlink[69] = 'http://www.papersaround.com/2017/04/anapa-russia_34.html';
iconimage[69] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[70] = 'Novorossiysk, Russia';
papertitle[70] = 'Кубанские новости';
papernumber1[70] = '35';
papernumber2[70] = '5999';
paperdate[70] = 'March 10, 2016';
paperlang[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[70] = new google.maps.LatLng(44.72563,37.7639794);
paperlink[70] = 'http://www.papersaround.com/2017/04/novorossiysk-russia_40.html';
iconimage[70] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[71] = 'Novorossiysk, Russia';
papertitle[71] = 'Новороссийский рабочий';
papernumber1[71] = '25';
papernumber2[71] = '25129';
paperdate[71] = 'March 10, 2016';
paperlang[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[71] = new google.maps.LatLng(44.7201927,37.7742404);
paperlink[71] = 'http://www.papersaround.com/2017/04/novorossiysk-russia_63.html';
iconimage[71] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[72] = 'Novouralsk, Russia';
papertitle[72] = 'Новоуральская газета';
papernumber1[72] = '12';
papernumber2[72] = '219';
paperdate[72] = 'March 23, 2016';
paperlang[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[72] = new google.maps.LatLng(57.2531487,60.0880206);
paperlink[72] = 'http://www.papersaround.com/2017/04/novouralsk-russia_74.html';
iconimage[72] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[73] = 'Nevyansk, Russia';
papertitle[73] = 'Местные ведомости';
papernumber1[73] = '9';
papernumber2[73] = '';
paperdate[73] = 'March 2, 2016';
paperlang[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[73] = new google.maps.LatLng(57.4899973,60.2231264);
paperlink[73] = 'http://www.papersaround.com/2017/04/nevyansk-russia_6.html';
iconimage[73] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[74] = 'Mũi Né, Vietnam';
papertitle[74] = 'Công an';
papernumber1[74] = '2931';
papernumber2[74] = '';
paperdate[74] = 'October 13, 2015';
paperlang[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[74] = new google.maps.LatLng(10.7747891,106.6957279);
paperlink[74] = 'http://www.papersaround.com/2017/04/mui-ne-vietnam_28.html';
iconimage[74] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[75] = 'Mũi Né, Vietnam';
papertitle[75] = 'Thanh Niên';
papernumber1[75] = '286';
papernumber2[75] = '7234';
paperdate[75] = 'October 13, 2015';
paperlang[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[75] = new google.maps.LatLng(10.766131,106.6432553);
paperlink[75] = 'http://www.papersaround.com/2017/04/mui-ne-vietnam_79.html';
iconimage[75] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[76] = 'Kogalym, Russia';
papertitle[76] = 'Жемчужина Сибири';
papernumber1[76] = '42';
papernumber2[76] = '421';
paperdate[76] = 'October 29, 2015';
paperlang[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[76] = new google.maps.LatLng(62.2634451,74.4903629);
paperlink[76] = 'http://www.papersaround.com/2017/04/kogalym-russia_57.html';
iconimage[76] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[77] = 'Baranovichi, Belarus';
papertitle[77] = 'Народная Трыбуна';
papernumber1[77] = '52';
papernumber2[77] = '1299';
paperdate[77] = 'December 25, 2015';
paperlang[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Belarusian">Belarusian</a>';
papersender[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[77] = new google.maps.LatLng(53.1252846,26.0081939);
paperlink[77] = 'http://www.papersaround.com/2017/04/baranovichi-belarus_50.html';
iconimage[77] = 'https://rawgit.com/borisovodov/np/master/content/markers/belarus.png';

papername[78] = 'Rezh, Russia';
papertitle[78] = 'Режевская весть';
papernumber1[78] = '1';
papernumber2[78] = '11407';
paperdate[78] = 'January 6, 2016';
paperlang[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[78] = new google.maps.LatLng(57.3665107,61.3995949);
paperlink[78] = 'http://www.papersaround.com/2017/04/rezh-russia_30.html';
iconimage[78] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[79] = 'Amsterdam, Netherlands';
papertitle[79] = 'Frankfurter Allgemeine Zeitung';
papernumber1[79] = '46';
papernumber2[79] = '56112';
paperdate[79] = 'December 6, 2015';
paperlang[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[79] = new google.maps.LatLng(52.3720476,4.8956366);
paperlink[79] = 'http://www.papersaround.com/2017/04/amsterdam-netherlands_97.html';
iconimage[79] = 'https://rawgit.com/borisovodov/np/master/content/markers/netherlands.png';

papername[80] = 'Pretoria, South Africa';
papertitle[80] = 'Pretoria News';
papernumber1[80] = '';
papernumber2[80] = '';
paperdate[80] = 'December 8, 2015';
paperlang[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[80] = new google.maps.LatLng(-25.7474779,28.2171204);
paperlink[80] = 'http://www.papersaround.com/2017/04/pretoria-south-africa_86.html';
iconimage[80] = 'https://rawgit.com/borisovodov/np/master/content/markers/south africa.png';

papername[81] = 'Dubai, United Arab Emirates';
papertitle[81] = 'Khaleej Times';
papernumber1[81] = '235';
papernumber2[81] = 'XXXVII';
paperdate[81] = 'December 6, 2015';
paperlang[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[81] = new google.maps.LatLng(25.1797924,55.2487384);
paperlink[81] = 'http://www.papersaround.com/2017/04/dubai-united-arab-emirates_88.html';
iconimage[81] = 'https://rawgit.com/borisovodov/np/master/content/markers/united arab emirates.png';

papername[82] = 'Pretoria, South Africa';
papertitle[82] = 'makro';
papernumber1[82] = '';
papernumber2[82] = '';
paperdate[82] = 'December 8, 2015';
paperlang[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[82] = new google.maps.LatLng(-25.7480587,28.2296332);
paperlink[82] = 'http://www.papersaround.com/2017/04/pretoria-south-africa_69.html';
iconimage[82] = 'https://rawgit.com/borisovodov/np/master/content/markers/south africa.png';

papername[83] = 'Dubai, United Arab Emirates';
papertitle[83] = 'FT Weekend';
papernumber1[83] = '';
papernumber2[83] = '';
paperdate[83] = 'December 5, 2015';
paperlang[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[83] = new google.maps.LatLng(25.2045486,55.2698986);
paperlink[83] = 'http://www.papersaround.com/2017/04/dubai-united-arab-emirates_9.html';
iconimage[83] = 'https://rawgit.com/borisovodov/np/master/content/markers/united arab emirates.png';

papername[84] = 'Baikonur, Russia';
papertitle[84] = 'Байконур';
papernumber1[84] = '49';
papernumber2[84] = '983';
paperdate[84] = 'December 11, 2015';
paperlang[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[84] = new google.maps.LatLng(45.6172063,63.3153974);
paperlink[84] = 'http://www.papersaround.com/2017/04/baikonur-russia_90.html';
iconimage[84] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[85] = 'Aktobe, Kazakhstan';
papertitle[85] = 'Әйел денсаулығы';
papernumber1[85] = '23';
papernumber2[85] = '107';
paperdate[85] = 'January 1, 2015';
paperlang[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kazakh">Kazakh</a>';
papersender[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[85] = new google.maps.LatLng(50.289689,57.1979147);
paperlink[85] = 'http://www.papersaround.com/2017/04/aktobe-kazakhstan_84.html';
iconimage[85] = 'https://rawgit.com/borisovodov/np/master/content/markers/kazakhstan.png';

papername[86] = 'Aktobe, Kazakhstan';
papertitle[86] = 'Актобе Таймс';
papernumber1[86] = '49';
papernumber2[86] = '467';
paperdate[86] = 'December 10, 2015';
paperlang[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[86] = new google.maps.LatLng(50.2882876,57.1746235);
paperlink[86] = 'http://www.papersaround.com/2017/04/aktobe-kazakhstan_15.html';
iconimage[86] = 'https://rawgit.com/borisovodov/np/master/content/markers/kazakhstan.png';

papername[87] = 'Khanty-Mansiysk, Russia';
papertitle[87] = 'Хӑтӆые';
papernumber1[87] = '5';
papernumber2[87] = '5';
paperdate[87] = 'December 1, 2015';
paperlang[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[87] = new google.maps.LatLng(61.0017033,69.0063562);
paperlink[87] = 'http://www.papersaround.com/2017/04/khanty-mansiysk-russia_90.html';
iconimage[87] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[88] = 'Lyantor, Russia';
papertitle[88] = 'Айкӧӆ';
papernumber1[88] = '1';
papernumber2[88] = '7';
paperdate[88] = 'November 23, 2015';
paperlang[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[88] = new google.maps.LatLng(61.622089,72.1629074);
paperlink[88] = 'http://www.papersaround.com/2017/04/lyantor-russia_63.html';
iconimage[88] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[89] = 'Khanty-Mansiysk, Russia';
papertitle[89] = 'Лӯимā сэ̄рипос';
papernumber1[89] = '23';
papernumber2[89] = '1113';
paperdate[89] = 'December 4, 2015';
paperlang[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Mansi">Mansi</a>';
papersender[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[89] = new google.maps.LatLng(61.0011615,69.0169018);
paperlink[89] = 'http://www.papersaround.com/2017/04/khanty-mansiysk-russia_10.html';
iconimage[89] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[90] = 'Khanty-Mansiysk, Russia';
papertitle[90] = 'Хӑнты ясӑӈ';
papernumber1[90] = '23';
papernumber2[90] = '3443';
paperdate[90] = 'December 4, 2015';
paperlang[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[90] = new google.maps.LatLng(61.0022527,69.0322182);
paperlink[90] = 'http://www.papersaround.com/2017/04/khanty-mansiysk-russia_16.html';
iconimage[90] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[91] = 'Cairo, Egypt';
papertitle[91] = 'المصرى اليوم';
papernumber1[91] = '12';
papernumber2[91] = '4141';
paperdate[91] = 'October 16, 2015';
paperlang[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Arabic">Arabic</a>';
papersender[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[91] = new google.maps.LatLng(30.0444021,31.2355749);
paperlink[91] = 'http://www.papersaround.com/2017/04/cairo-egypt_92.html';
iconimage[91] = 'https://rawgit.com/borisovodov/np/master/content/markers/egypt.png';

papername[92] = 'Pattaya, Thailand';
papertitle[92] = 'เดลินิวส์';
papernumber1[92] = '';
papernumber2[92] = '';
paperdate[92] = 'October 18, 2015';
paperlang[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Thai">Thai</a>';
papersender[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[92] = new google.maps.LatLng(12.9365794,100.8861822);
paperlink[92] = 'http://www.papersaround.com/2017/04/pattaya-thailand_24.html';
iconimage[92] = 'https://rawgit.com/borisovodov/np/master/content/markers/thailand.png';

papername[93] = 'Pattaya, Thailand';
papertitle[93] = 'Pattaya People';
papernumber1[93] = '518';
papernumber2[93] = '';
paperdate[93] = 'October 3, 2015';
paperlang[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[93] = new google.maps.LatLng(12.9274331,100.8769976);
paperlink[93] = 'http://www.papersaround.com/2017/04/pattaya-thailand_75.html';
iconimage[93] = 'https://rawgit.com/borisovodov/np/master/content/markers/thailand.png';

papername[94] = 'Ho Chi Minh City, Vietnam';
papertitle[94] = 'Giáo Dục & Thời Đại';
papernumber1[94] = '';
papernumber2[94] = '';
paperdate[94] = 'June 1, 2015';
paperlang[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[94] = new google.maps.LatLng(10.7676839,106.7053017);
paperlink[94] = 'http://www.papersaround.com/2017/04/ho-chi-minh-city-vietnam_95.html';
iconimage[94] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[95] = 'Garching, Germany';
papertitle[95] = 'Garchinger Rundschau';
papernumber1[95] = '9';
papernumber2[95] = '28';
paperdate[95] = 'August 28, 2015';
paperlang[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[95] = new google.maps.LatLng(48.2490905,11.6503644);
paperlink[95] = 'http://www.papersaround.com/2017/04/garching-germany_17.html';
iconimage[95] = 'https://rawgit.com/borisovodov/np/master/content/markers/germany.png';

papername[96] = 'Sevastopol, Russia-Ukraine';
papertitle[96] = 'Фокстрот';
papernumber1[96] = '';
papernumber2[96] = '';
paperdate[96] = 'August 20, 2015';
paperlang[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[96] = new google.maps.LatLng(44.5752517,33.5192988);
paperlink[96] = 'http://www.papersaround.com/2017/04/sevastopol-russia-ukraine_10.html';
iconimage[96] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia-ukraine.png';

papername[97] = 'Feodosia, Russia-Ukraine';
papertitle[97] = 'Кафа';
papernumber1[97] = '57';
papernumber2[97] = '2715';
paperdate[97] = 'July 28, 2015';
paperlang[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[97] = new google.maps.LatLng(45.0255859,35.3849742);
paperlink[97] = 'http://www.papersaround.com/2017/04/feodosia-russia-ukraine_70.html';
iconimage[97] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia-ukraine.png';

papername[98] = 'Irkutsk, Russia';
papertitle[98] = 'Восточно-сибирская правда';
papernumber1[98] = '30';
papernumber2[98] = '26784';
paperdate[98] = 'July 21, 2015';
paperlang[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[98] = new google.maps.LatLng(52.2876784,104.2804561);
paperlink[98] = 'http://www.papersaround.com/2017/04/irkutsk-russia_28.html';
iconimage[98] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[99] = 'Paris, France';
papertitle[99] = 'Charlie Hebdo';
papernumber1[99] = '1208';
papernumber2[99] = '';
paperdate[99] = 'September 16, 2015';
paperlang[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[99] = new google.maps.LatLng(48.859269,2.3702184);
paperlink[99] = 'http://www.papersaround.com/2017/04/paris-france_48.html';
iconimage[99] = 'https://rawgit.com/borisovodov/np/master/content/markers/france.png';

papername[100] = 'Paris, France';
papertitle[100] = 'Le Figaro';
papernumber1[100] = '22113';
papernumber2[100] = '';
paperdate[100] = 'September 14, 2015';
paperlang[100] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[100] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[100] = new google.maps.LatLng(48.860229,2.3372792);
paperlink[100] = 'http://www.papersaround.com/2017/04/paris-france_53.html';
iconimage[100] = 'https://rawgit.com/borisovodov/np/master/content/markers/france.png';

papername[101] = 'Barcelona, Spain';
papertitle[101] = 'el Periódico de Catalunya';
papernumber1[101] = '';
papernumber2[101] = '';
paperdate[101] = 'September 18, 2015';
paperlang[101] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Spanish">Spanish</a>';
papersender[101] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[101] = new google.maps.LatLng(41.3853668,2.1855849);
paperlink[101] = 'http://www.papersaround.com/2017/04/barcelona-spain_43.html';
iconimage[101] = 'https://rawgit.com/borisovodov/np/master/content/markers/spain.png';

papername[102] = 'Ufa, Russia';
papertitle[102] = 'Без – Бергэ';
papernumber1[102] = '9';
papernumber2[102] = '052';
paperdate[102] = 'September 1, 2015';
paperlang[102] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[102] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[102] = new google.maps.LatLng(54.7404122,55.9715826);
paperlink[102] = 'http://www.papersaround.com/2017/04/ufa-russia_92.html';
iconimage[102] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[103] = 'Ufa, Russia';
papertitle[103] = 'Диләфрүз';
papernumber1[103] = '9';
papernumber2[103] = '59';
paperdate[103] = 'September 1, 2015';
paperlang[103] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[103] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[103] = new google.maps.LatLng(54.7754973,56.0207834);
paperlink[103] = 'http://www.papersaround.com/2017/04/ufa-russia_15.html';
iconimage[103] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[104] = 'Belebey, Russia';
papertitle[104] = 'Модуль +';
papernumber1[104] = '35';
papernumber2[104] = '1164';
paperdate[104] = 'September 17, 2015';
paperlang[104] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[104] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[104] = new google.maps.LatLng(54.1087989,54.1054072);
paperlink[104] = 'http://www.papersaround.com/2017/04/belebey-russia_54.html';
iconimage[104] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[105] = 'Achit, Russia';
papertitle[105] = 'Наш путь';
papernumber1[105] = '35';
papernumber2[105] = '8226';
paperdate[105] = 'August 27, 2015';
paperlang[105] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[105] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[105] = new google.maps.LatLng(56.7955372,57.8934753);
paperlink[105] = 'http://www.papersaround.com/2017/04/achit-russia_89.html';
iconimage[105] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[106] = 'Chișinău, Moldova';
papertitle[106] = 'Timpul';
papernumber1[106] = '31';
papernumber2[106] = '2115';
paperdate[106] = 'August 7, 2015';
paperlang[106] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Romanian">Romanian</a>';
papersender[106] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Inna">Inna</a>';
paperland[106] = new google.maps.LatLng(47.0236013,28.8334711);
paperlink[106] = 'http://www.papersaround.com/2017/04/chisinau-moldova_60.html';
iconimage[106] = 'https://rawgit.com/borisovodov/np/master/content/markers/moldova.png';

papername[107] = 'Sochi, Russia';
papertitle[107] = 'Черноморская Здравница';
papernumber1[107] = '67';
papernumber2[107] = '68';
paperdate[107] = 'June 16, 2015';
paperlang[107] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[107] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[107] = new google.maps.LatLng(43.5876867,39.7180229);
paperlink[107] = 'http://www.papersaround.com/2017/04/sochi-russia_59.html';
iconimage[107] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[108] = 'Beijing, China';
papertitle[108] = '人民日报海外版';
papernumber1[108] = '8';
papernumber2[108] = '9173';
paperdate[108] = 'August 5, 2014';
paperlang[108] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[108] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Klimova">Tatyana Klimova</a>';
paperland[108] = new google.maps.LatLng(39.9197637,116.4695696);
paperlink[108] = 'http://www.papersaround.com/2017/04/beijing-china_44.html';
iconimage[108] = 'https://rawgit.com/borisovodov/np/master/content/markers/china.png';

papername[109] = 'Nha Trang, Vietnam';
papertitle[109] = 'Thanh Niên';
papernumber1[109] = '362';
papernumber2[109] = '6945';
paperdate[109] = 'December 28, 2014';
paperlang[109] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[109] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Svetlana%20Konstantinova">Svetlana Konstantinova</a>';
paperland[109] = new google.maps.LatLng(12.2574694,109.1699159);
paperlink[109] = 'http://www.papersaround.com/2017/04/nha-trang-vietnam_63.html';
iconimage[109] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[110] = 'Nha Trang, Vietnam';
papertitle[110] = 'Maximark Giá Tốt';
papernumber1[110] = '';
papernumber2[110] = '';
paperdate[110] = 'May 1, 2015';
paperlang[110] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[110] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Svetlana%20Konstantinova">Svetlana Konstantinova</a>';
paperland[110] = new google.maps.LatLng(12.2749596,109.2000397);
paperlink[110] = 'http://www.papersaround.com/2017/04/nha-trang-vietnam_32.html';
iconimage[110] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[111] = 'Nha Trang, Vietnam';
papertitle[111] = 'Thanh Niên';
papernumber1[111] = '154';
papernumber2[111] = '7102';
paperdate[111] = 'June 3, 2015';
paperlang[111] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[111] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Natalya%20Kozlova">Natalya Kozlova</a>';
paperland[111] = new google.maps.LatLng(12.2393199,109.1910529);
paperlink[111] = 'http://www.papersaround.com/2017/04/nha-trang-vietnam_83.html';
iconimage[111] = 'https://rawgit.com/borisovodov/np/master/content/markers/vietnam.png';

papername[112] = 'Rome, Italy';
papertitle[112] = 'la Repubblica';
papernumber1[112] = '108';
papernumber2[112] = '';
paperdate[112] = 'May 8, 2015';
paperlang[112] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[112] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[112] = new google.maps.LatLng(41.8911414,12.4827292);
paperlink[112] = 'http://www.papersaround.com/2017/04/rome-italy_79.html';
iconimage[112] = 'https://rawgit.com/borisovodov/np/master/content/markers/italy.png';

papername[113] = 'Florence, Italy';
papertitle[113] = 'Florence News & Events';
papernumber1[113] = '';
papernumber2[113] = '';
paperdate[113] = 'May 1, 2015';
paperlang[113] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[113] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[113] = new google.maps.LatLng(43.7780099,11.234595);
paperlink[113] = 'http://www.papersaround.com/2017/04/florence-italy_18.html';
iconimage[113] = 'https://rawgit.com/borisovodov/np/master/content/markers/italy.png';

papername[114] = 'Venice, Italy';
papertitle[114] = 'la Nuova di Venezia e Mestre';
papernumber1[114] = '130';
papernumber2[114] = '';
paperdate[114] = 'May 13, 2015';
paperlang[114] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[114] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[114] = new google.maps.LatLng(45.438453,12.3202342);
paperlink[114] = 'http://www.papersaround.com/2017/04/venice-italy_81.html';
iconimage[114] = 'https://rawgit.com/borisovodov/np/master/content/markers/italy.png';

papername[115] = 'Helsinki, Finland';
papertitle[115] = 'Ilta-Sanomat';
papernumber1[115] = '101';
papernumber2[115] = '';
paperdate[115] = 'May 4, 2015';
paperlang[115] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Finnish">Finnish</a>';
papersender[115] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[115] = new google.maps.LatLng(60.1897427,24.9455899);
paperlink[115] = 'http://www.papersaround.com/2017/04/helsinki-finland_10.html';
iconimage[115] = 'https://rawgit.com/borisovodov/np/master/content/markers/finland.png';

papername[116] = 'Helsinki, Finland';
papertitle[116] = 'Metro';
papernumber1[116] = '81';
papernumber2[116] = '';
paperdate[116] = 'May 4, 2015';
paperlang[116] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Finnish">Finnish</a>';
papersender[116] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[116] = new google.maps.LatLng(60.168871,24.9395335);
paperlink[116] = 'http://www.papersaround.com/2017/04/helsinki-finland_92.html';
iconimage[116] = 'https://rawgit.com/borisovodov/np/master/content/markers/finland.png';

papername[117] = 'Bratislava, Slovakia';
papertitle[117] = 'Slovenské národné noviny';
papernumber1[117] = '18';
papernumber2[117] = '';
paperdate[117] = 'May 9, 2015';
paperlang[117] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Slovak">Slovak</a>';
papersender[117] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yevgeniya%20Telennaya">Yevgeniya Telennaya</a>';
paperland[117] = new google.maps.LatLng(48.1329019,17.1116684);
paperlink[117] = 'http://www.papersaround.com/2017/04/bratislava-slovakia_64.html';
iconimage[117] = 'https://rawgit.com/borisovodov/np/master/content/markers/slovakia.png';

papername[118] = 'Budapest, Hungary';
papertitle[118] = 'Reggel';
papernumber1[118] = '16';
papernumber2[118] = '';
paperdate[118] = 'May 3, 2015';
paperlang[118] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hungarian">Hungarian</a>';
papersender[118] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[118] = new google.maps.LatLng(47.4915522,19.0661875);
paperlink[118] = 'http://www.papersaround.com/2017/04/budapest-hungary_57.html';
iconimage[118] = 'https://rawgit.com/borisovodov/np/master/content/markers/hungary.png';

papername[119] = 'Ostrava, Czech Republic';
papertitle[119] = 'Hospodářské noviny';
papernumber1[119] = '';
papernumber2[119] = '';
paperdate[119] = 'April 30, 2015';
paperlang[119] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[119] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[119] = new google.maps.LatLng(49.7853537,18.2555906);
paperlink[119] = 'http://www.papersaround.com/2017/04/ostrava-czech-republic_51.html';
iconimage[119] = 'https://rawgit.com/borisovodov/np/master/content/markers/czech republic.png';

papername[120] = 'Prague, Czech Republic';
papertitle[120] = 'Pražský deník';
papernumber1[120] = '105';
papernumber2[120] = '';
paperdate[120] = 'May 6, 2015';
paperlang[120] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[120] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[120] = new google.maps.LatLng(50.0620153,14.4281528);
paperlink[120] = 'http://www.papersaround.com/2017/04/prague-czech-republic_97.html';
iconimage[120] = 'https://rawgit.com/borisovodov/np/master/content/markers/czech republic.png';

papername[121] = 'Istanbul, Turkey';
papertitle[121] = 'Вести Турции Босфор';
papernumber1[121] = '217';
papernumber2[121] = '';
paperdate[121] = 'April 16, 2015';
paperlang[121] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[121] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[121] = new google.maps.LatLng(40.9837732,28.8556887);
paperlink[121] = 'http://www.papersaround.com/2017/04/istanbul-turkey_96.html';
iconimage[121] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[122] = 'Ostrava, Czech Republic';
papertitle[122] = 'Katolický týdeník';
papernumber1[122] = '18';
papernumber2[122] = '';
paperdate[122] = 'April 28, 2015';
paperlang[122] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[122] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[122] = new google.maps.LatLng(49.8042206,18.2481295);
paperlink[122] = 'http://www.papersaround.com/2017/04/ostrava-czech-republic_17.html';
iconimage[122] = 'https://rawgit.com/borisovodov/np/master/content/markers/czech republic.png';

papername[123] = 'Prague, Czech Republic';
papertitle[123] = 'Blesk';
papernumber1[123] = '104';
papernumber2[123] = '';
paperdate[123] = 'May 5, 2015';
paperlang[123] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[123] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[123] = new google.maps.LatLng(50.0851064,14.4330941);
paperlink[123] = 'http://www.papersaround.com/2017/04/prague-czech-republic_7.html';
iconimage[123] = 'https://rawgit.com/borisovodov/np/master/content/markers/czech republic.png';

papername[124] = 'Istanbul, Turkey';
papertitle[124] = 'Sabah';
papernumber1[124] = '';
papernumber2[124] = '';
paperdate[124] = 'May 8, 2015';
paperlang[124] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[124] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[124] = new google.maps.LatLng(41.0104383,28.9747573);
paperlink[124] = 'http://www.papersaround.com/2017/04/istanbul-turkey_30.html';
iconimage[124] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[125] = 'Istanbul, Turkey';
papertitle[125] = '环球: Globe';
papernumber1[125] = '8';
papernumber2[125] = '618';
paperdate[125] = 'April 15, 2015';
paperlang[125] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[125] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[125] = new google.maps.LatLng(40.9820683,28.7954559);
paperlink[125] = 'http://www.papersaround.com/2017/04/istanbul-turkey_85.html';
iconimage[125] = 'https://rawgit.com/borisovodov/np/master/content/markers/turkey.png';

papername[126] = 'Zlatoust, Russia';
papertitle[126] = 'Правда города Златоуста';
papernumber1[126] = '2';
papernumber2[126] = '15';
paperdate[126] = 'April 1, 2015';
paperlang[126] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[126] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[126] = new google.maps.LatLng(55.1649723,59.6763696);
paperlink[126] = 'http://www.papersaround.com/2017/04/zlatoust-russia_18.html';
iconimage[126] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[127] = 'Chelyabinsk, Russia';
papertitle[127] = 'Вечерний Челябинск';
papernumber1[127] = '33';
papernumber2[127] = '11844';
paperdate[127] = 'April 30, 2015';
paperlang[127] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[127] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[127] = new google.maps.LatLng(55.154633,61.4035924);
paperlink[127] = 'http://www.papersaround.com/2017/04/chelyabinsk-russia_23.html';
iconimage[127] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[128] = 'Omsk, Russia';
papertitle[128] = 'Вечерний Омск';
papernumber1[128] = '12';
papernumber2[128] = '379';
paperdate[128] = 'March 25, 2015';
paperlang[128] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[128] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anton%20Lyaptsev">Anton Lyaptsev</a>';
paperland[128] = new google.maps.LatLng(54.9858759,73.3561389);
paperlink[128] = 'http://www.papersaround.com/2017/04/omsk-russia_58.html';
iconimage[128] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[129] = 'Tomsk, Russia';
papertitle[129] = 'Красное знамя';
papernumber1[129] = '36';
papernumber2[129] = '27121';
paperdate[129] = 'March 17, 2015';
paperlang[129] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[129] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[129] = new google.maps.LatLng(56.4895329,85.0086309);
paperlink[129] = 'http://www.papersaround.com/2017/04/tomsk-russia_72.html';
iconimage[129] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[130] = 'Veliky Novgorod, Russia';
papertitle[130] = 'Волховъ';
papernumber1[130] = '10';
papernumber2[130] = '657';
paperdate[130] = 'March 10, 2015';
paperlang[130] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[130] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[130] = new google.maps.LatLng(58.5561955,31.3124346);
paperlink[130] = 'http://www.papersaround.com/2017/04/veliky-novgorod-russia_0.html';
iconimage[130] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[131] = 'Vyborg, Russia';
papertitle[131] = 'Выборг';
papernumber1[131] = '30';
papernumber2[131] = '17385';
paperdate[131] = 'March 6, 2015';
paperlang[131] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[131] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[131] = new google.maps.LatLng(60.712888,28.7521123);
paperlink[131] = 'http://www.papersaround.com/2017/04/vyborg-russia_73.html';
iconimage[131] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[132] = 'Saint Petersburg, Russia';
papertitle[132] = 'Санкт-Петербургские ведомости';
papernumber1[132] = '40';
papernumber2[132] = '5413';
paperdate[132] = 'March 10, 2015';
paperlang[132] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[132] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[132] = new google.maps.LatLng(59.9174455,30.3250575);
paperlink[132] = 'http://www.papersaround.com/2017/04/saint-petersburg-russia_51.html';
iconimage[132] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[133] = 'Funchal, Portugal';
papertitle[133] = 'Diário de Notícias da Madeira';
papernumber1[133] = '139';
papernumber2[133] = '45462';
paperdate[133] = 'February 21, 2015';
paperlang[133] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Portuguese">Portuguese</a>';
papersender[133] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Safarov">Ilya Safarov</a>';
paperland[133] = new google.maps.LatLng(32.6600438,-16.9246706);
paperlink[133] = 'http://www.papersaround.com/2017/04/funchal-portugal_83.html';
iconimage[133] = 'https://rawgit.com/borisovodov/np/master/content/markers/portugal.png';

papername[134] = 'Lisbon, Portugal';
papertitle[134] = 'O Benfica';
papernumber1[134] = 'LXXII';
papernumber2[134] = '3692';
paperdate[134] = 'January 30, 2015';
paperlang[134] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Portuguese">Portuguese</a>';
papersender[134] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Safarov">Ilya Safarov</a>';
paperland[134] = new google.maps.LatLng(38.7436266,-9.1602037);
paperlink[134] = 'http://www.papersaround.com/2017/04/lisbon-portugal_61.html';
iconimage[134] = 'https://rawgit.com/borisovodov/np/master/content/markers/portugal.png';

papername[135] = 'Verkh-Neyvinsky, Russia';
papertitle[135] = 'Новоуральская газета';
papernumber1[135] = '8';
papernumber2[135] = '163';
paperdate[135] = 'February 25, 2015';
paperlang[135] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[135] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[135] = new google.maps.LatLng(57.2672737,60.1311363);
paperlink[135] = 'http://www.papersaround.com/2017/04/verkh-neyvinsky-russia_1.html';
iconimage[135] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[136] = 'Kyoto, Japan';
papertitle[136] = '日本経済新聞';
papernumber1[136] = '';
papernumber2[136] = '';
paperdate[136] = 'December 9, 2014';
paperlang[136] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Japanese">Japanese</a>';
papersender[136] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nadin%20Bizarre">Nadin Bizarre</a>';
paperland[136] = new google.maps.LatLng(35.0061,135.76095);
paperlink[136] = 'http://www.papersaround.com/2017/04/kyoto-japan_2.html';
iconimage[136] = 'https://rawgit.com/borisovodov/np/master/content/markers/japan.png';

papername[137] = 'Tarko-Sale, Russia';
papertitle[137] = 'Северный луч';
papernumber1[137] = '46';
papernumber2[137] = '3548';
paperdate[137] = 'November 14, 2014';
paperlang[137] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[137] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[137] = new google.maps.LatLng(64.9209215,77.7815207);
paperlink[137] = 'http://www.papersaround.com/2017/04/tarko-sale-russia_2.html';
iconimage[137] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[138] = 'Belgrade, Serbia';
papertitle[138] = 'Вечерње новости';
papernumber1[138] = '';
papernumber2[138] = '';
paperdate[138] = 'November 2, 2014';
paperlang[138] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Serbian">Serbian</a>';
papersender[138] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Kulakova">Yekaterina Kulakova</a>';
paperland[138] = new google.maps.LatLng(44.8152453,20.4203223);
paperlink[138] = 'http://www.papersaround.com/2017/04/belgrade-serbia_2.html';
iconimage[138] = 'https://rawgit.com/borisovodov/np/master/content/markers/serbia.png';

papername[139] = 'Kachkanar, Russia';
papertitle[139] = 'Качканарский рабочий';
papernumber1[139] = '43';
papernumber2[139] = '5733';
paperdate[139] = 'October 29, 2014';
paperlang[139] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[139] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[139] = new google.maps.LatLng(58.7020961,59.493071);
paperlink[139] = 'http://www.papersaround.com/2017/04/kachkanar-russia_2.html';
iconimage[139] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[140] = 'Tyumen, Russia';
papertitle[140] = 'Тюменский курьер';
papernumber1[140] = '109';
papernumber2[140] = '3854';
paperdate[140] = 'June 25, 2014';
paperlang[140] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[140] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[140] = new google.maps.LatLng(57.1640403,65.5437285);
paperlink[140] = 'http://www.papersaround.com/2017/04/tyumen-russia_2.html';
iconimage[140] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[141] = 'Kislovodsk, Russia';
papertitle[141] = 'Кисловодская газета';
papernumber1[141] = '40';
papernumber2[141] = '198';
paperdate[141] = 'October 1, 2014';
paperlang[141] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[141] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[141] = new google.maps.LatLng(43.90885,42.7312501);
paperlink[141] = 'http://www.papersaround.com/2017/04/kislovodsk-russia_2.html';
iconimage[141] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[142] = 'Sevastopol, Russia-Ukraine';
papertitle[142] = 'Севастопольская правда';
papernumber1[142] = '33';
papernumber2[142] = '1019';
paperdate[142] = 'September 27, 2014';
paperlang[142] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[142] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Olga%20Kvashnina">Olga Kvashnina</a>';
paperland[142] = new google.maps.LatLng(44.6155767,33.5236891);
paperlink[142] = 'http://www.papersaround.com/2017/04/sevastopol-russia-ukraine_25.html';
iconimage[142] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia-ukraine.png';

papername[143] = 'Noyabrsk, Russia';
papertitle[143] = 'Слово нефтяника';
papernumber1[143] = '37';
papernumber2[143] = '';
paperdate[143] = 'September 12, 2014';
paperlang[143] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[143] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[143] = new google.maps.LatLng(63.2058728,75.434249);
paperlink[143] = 'http://www.papersaround.com/2017/04/noyabrsk-russia.html';
iconimage[143] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[144] = 'Salekhard, Russia';
papertitle[144] = 'Красный Север';
papernumber1[144] = '72';
papernumber2[144] = '15901';
paperdate[144] = 'September 13, 2014';
paperlang[144] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[144] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[144] = new google.maps.LatLng(66.5580064,66.6051276);
paperlink[144] = 'http://www.papersaround.com/2017/04/salekhard-russia.html';
iconimage[144] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[145] = 'Hurghada, Egypt';
papertitle[145] = 'الجمهورية‎';
papernumber1[145] = '';
papernumber2[145] = '';
paperdate[145] = 'August 21, 2014';
paperlang[145] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Arabic">Arabic</a>';
papersender[145] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Denis%20Dirbenov">Denis Dirbenov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Shvetsova">Tatyana Shvetsova</a>';
paperland[145] = new google.maps.LatLng(27.1925045,33.7817104);
paperlink[145] = 'http://www.papersaround.com/2017/04/hurghada-egypt.html';
iconimage[145] = 'https://rawgit.com/borisovodov/np/master/content/markers/egypt.png';

papername[146] = 'Rudniy, Kazakhstan';
papertitle[146] = 'Рудненский рабочий';
papernumber1[146] = '27';
papernumber2[146] = '10038';
paperdate[146] = 'April 15, 2014';
paperlang[146] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[146] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[146] = new google.maps.LatLng(52.956417,63.1170431);
paperlink[146] = 'http://www.papersaround.com/2017/04/rudniy-kazakhstan.html';
iconimage[146] = 'https://rawgit.com/borisovodov/np/master/content/markers/kazakhstan.png';

papername[147] = 'Rudniy, Kazakhstan';
papertitle[147] = 'Рудненский рабочий';
papernumber1[147] = '1';
papernumber2[147] = '9916';
paperdate[147] = 'January 4, 2013';
paperlang[147] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[147] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[147] = new google.maps.LatLng(52.9754864,63.1212187);
paperlink[147] = 'http://www.papersaround.com/2017/04/rudniy-kazakhstan_2.html';
iconimage[147] = 'https://rawgit.com/borisovodov/np/master/content/markers/kazakhstan.png';

papername[148] = 'Kostanay, Kazakhstan';
papertitle[148] = 'Костанайские новости';
papernumber1[148] = '26';
papernumber2[148] = '22288';
paperdate[148] = 'February 20, 2014';
paperlang[148] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[148] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[148] = new google.maps.LatLng(53.2054508,63.6218262);
paperlink[148] = 'http://www.papersaround.com/2017/04/kostanay-kazakhstan.html';
iconimage[148] = 'https://rawgit.com/borisovodov/np/master/content/markers/kazakhstan.png';

papername[149] = 'Noyabrsk, Russia';
papertitle[149] = 'Северная вахта';
papernumber1[149] = '130';
papernumber2[149] = '5674';
paperdate[149] = 'July 24, 2014';
paperlang[149] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[149] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[149] = new google.maps.LatLng(63.1766945,75.4471666);
paperlink[149] = 'http://www.papersaround.com/2017/04/noyabrsk-russia_2.html';
iconimage[149] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[150] = 'Reykjavik, Iceland';
papertitle[150] = 'Bændablaðið';
papernumber1[150] = '14';
papernumber2[150] = '';
paperdate[150] = 'July 17, 2014';
paperlang[150] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Icelandic">Icelandic</a>';
papersender[150] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yevgeniya%20Telennaya">Yevgeniya Telennaya</a>';
paperland[150] = new google.maps.LatLng(64.1418046,-21.9255569);
paperlink[150] = 'http://www.papersaround.com/2017/04/reykjavik-iceland.html';
iconimage[150] = 'https://rawgit.com/borisovodov/np/master/content/markers/iceland.png';

papername[151] = 'Reykjavik, Iceland';
papertitle[151] = 'Fréttatíminn';
papernumber1[151] = '30';
papernumber2[151] = '';
paperdate[151] = 'July 25, 2014';
paperlang[151] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Icelandic">Icelandic</a>';
papersender[151] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yevgeniya%20Telennaya">Yevgeniya Telennaya</a>';
paperland[151] = new google.maps.LatLng(64.132442,-21.8569031);
paperlink[151] = 'http://www.papersaround.com/2017/04/reykjavik-iceland_2.html';
iconimage[151] = 'https://rawgit.com/borisovodov/np/master/content/markers/iceland.png';

papername[152] = 'Kyzyl, Russia';
papertitle[152] = 'Шын';
papernumber1[152] = '94';
papernumber2[152] = '18521';
paperdate[152] = 'August 5, 2014';
paperlang[152] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tuvan">Tuvan</a>';
papersender[152] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[152] = new google.maps.LatLng(51.7203982,94.4376542);
paperlink[152] = 'http://www.papersaround.com/2017/04/kyzyl-russia_90.html';
iconimage[152] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[153] = 'Kyzyl, Russia';
papertitle[153] = 'Тувинская правда';
papernumber1[153] = '85';
papernumber2[153] = '17544';
paperdate[153] = 'August 5, 2014';
paperlang[153] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[153] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[153] = new google.maps.LatLng(51.6914035,94.4631245);
paperlink[153] = 'http://www.papersaround.com/2017/04/kyzyl-russia_74.html';
iconimage[153] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[154] = 'Surgut, Russia';
papertitle[154] = 'Новый город';
papernumber1[154] = '31';
papernumber2[154] = '4437';
paperdate[154] = 'July 25, 2014';
paperlang[154] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[154] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[154] = new google.maps.LatLng(61.283857,73.382317);
paperlink[154] = 'http://www.papersaround.com/2017/04/surgut-russia_0.html';
iconimage[154] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[155] = 'Tobolsk, Russia';
papertitle[155] = 'Тобольск-Содействие';
papernumber1[155] = '31';
papernumber2[155] = '975';
paperdate[155] = 'July 28, 2014';
paperlang[155] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[155] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[155] = new google.maps.LatLng(58.2283625,68.257907);
paperlink[155] = 'http://www.papersaround.com/2017/04/tobolsk-russia.html';
iconimage[155] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[156] = 'Limassol, Cyprus';
papertitle[156] = 'Вестник Кипра';
papernumber1[156] = '980';
papernumber2[156] = '';
paperdate[156] = 'July 11, 2014';
paperlang[156] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[156] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[156] = new google.maps.LatLng(34.6917392,33.0284847);
paperlink[156] = 'http://www.papersaround.com/2017/04/limassol-cyprus.html';
iconimage[156] = 'https://rawgit.com/borisovodov/np/master/content/markers/cyprus.png';

papername[157] = 'Paphos, Cyprus';
papertitle[157] = 'Paphos Post';
papernumber1[157] = '109';
papernumber2[157] = '';
paperdate[157] = 'July 1, 2014';
paperlang[157] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[157] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[157] = new google.maps.LatLng(34.7726959,32.4332804);
paperlink[157] = 'http://www.papersaround.com/2017/04/paphos-cyprus.html';
iconimage[157] = 'https://rawgit.com/borisovodov/np/master/content/markers/cyprus.png';

papername[158] = 'Paralimni, Cyprus';
papertitle[158] = 'η σημερίνη';
papernumber1[158] = '';
papernumber2[158] = '';
paperdate[158] = 'July 9, 2014';
paperlang[158] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Greek">Greek</a>';
papersender[158] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[158] = new google.maps.LatLng(35.0358805,33.9961677);
paperlink[158] = 'http://www.papersaround.com/2017/04/paralimni-cyprus.html';
iconimage[158] = 'https://rawgit.com/borisovodov/np/master/content/markers/cyprus.png';

papername[159] = 'Tyumen, Russia';
papertitle[159] = 'Спортивный меридиан';
papernumber1[159] = '24';
papernumber2[159] = '719';
paperdate[159] = 'June 25, 2014';
paperlang[159] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[159] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[159] = new google.maps.LatLng(57.1521389,65.5392108);
paperlink[159] = 'http://www.papersaround.com/2017/04/tyumen-russia_41.html';
iconimage[159] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[160] = 'Cancún, Mexico';
papertitle[160] = '¡Hola!';
papernumber1[160] = '377';
papernumber2[160] = '';
paperdate[160] = 'March 26, 2014';
paperlang[160] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Spanish">Spanish</a>';
papersender[160] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[160] = new google.maps.LatLng(21.122083,-86.8273416);
paperlink[160] = 'http://www.papersaround.com/2017/04/cancun-mexico.html';
iconimage[160] = 'https://rawgit.com/borisovodov/np/master/content/markers/mexico.png';

papername[161] = 'Yekaterinburg, Russia';
papertitle[161] = 'Your Yekaterinburg';
papernumber1[161] = '14';
papernumber2[161] = '14';
paperdate[161] = 'July 1, 2012';
paperlang[161] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[161] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[161] = new google.maps.LatLng(56.8449605,60.6144394);
paperlink[161] = 'http://www.papersaround.com/2017/04/yekaterinburg-russia.html';
iconimage[161] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[162] = 'Degtyarsk, Russia';
papertitle[162] = 'Вести Дегтярска';
papernumber1[162] = '20';
papernumber2[162] = '55';
paperdate[162] = 'May 21, 2014';
paperlang[162] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[162] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Lyubov%20Konstantinova">Lyubov Konstantinova</a>';
paperland[162] = new google.maps.LatLng(56.6981045,60.0960399);
paperlink[162] = 'http://www.papersaround.com/2017/04/degtyarsk-russia.html';
iconimage[162] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[163] = 'Rostov-on-Don, Russia';
papertitle[163] = 'Вечерний Ростов';
papernumber1[163] = '105-106';
papernumber2[163] = '16110-16111';
paperdate[163] = 'May 30, 2014';
paperlang[163] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[163] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[163] = new google.maps.LatLng(47.2190173,39.7164414);
paperlink[163] = 'http://www.papersaround.com/2017/04/rostov-on-don-russia.html';
iconimage[163] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[164] = 'Copenhagen, Denmark';
papertitle[164] = 'Børsen';
papernumber1[164] = '81';
papernumber2[164] = '';
paperdate[164] = 'April 29, 2014';
paperlang[164] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[164] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[164] = new google.maps.LatLng(55.674566,12.5748316);
paperlink[164] = 'http://www.papersaround.com/2017/04/copenhagen-denmark_70.html';
iconimage[164] = 'https://rawgit.com/borisovodov/np/master/content/markers/denmark.png';

papername[165] = 'Copenhagen, Denmark';
papertitle[165] = 'Metroxpress';
papernumber1[165] = '';
papernumber2[165] = '';
paperdate[165] = 'April 29, 2014';
paperlang[165] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[165] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[165] = new google.maps.LatLng(55.6712674,12.5608388);
paperlink[165] = 'http://www.papersaround.com/2017/04/copenhagen-denmark_38.html';
iconimage[165] = 'https://rawgit.com/borisovodov/np/master/content/markers/denmark.png';

papername[166] = 'Kazan, Russia';
papertitle[166] = 'Ватаным Татарстан';
papernumber1[166] = '62';
papernumber2[166] = '27268';
paperdate[166] = 'April 29, 2014';
paperlang[166] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[166] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[166] = new google.maps.LatLng(55.7976826,49.1044474);
paperlink[166] = 'http://www.papersaround.com/2017/04/kazan-russia.html';
iconimage[166] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[167] = 'Shanghai, China';
papertitle[167] = '环球时报';
papernumber1[167] = '3279';
papernumber2[167] = '';
paperdate[167] = 'March 28, 2014';
paperlang[167] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[167] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[167] = new google.maps.LatLng(31.2243489,121.4767528);
paperlink[167] = 'http://www.papersaround.com/2017/04/shanghai-china.html';
iconimage[167] = 'https://rawgit.com/borisovodov/np/master/content/markers/china.png';

papername[168] = 'Kazan, Russia';
papertitle[168] = 'Республика Татарстан';
papernumber1[168] = '64';
papernumber2[168] = '27678';
paperdate[168] = 'April 30, 2014';
paperlang[168] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[168] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[168] = new google.maps.LatLng(55.7955015,49.073303);
paperlink[168] = 'http://www.papersaround.com/2017/04/kazan-russia_2.html';
iconimage[168] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[169] = 'Perm, Russia';
papertitle[169] = 'Звезда';
papernumber1[169] = '85';
papernumber2[169] = '32101';
paperdate[169] = 'August 2, 2013';
paperlang[169] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[169] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[169] = new google.maps.LatLng(58.0140056,56.2491115);
paperlink[169] = 'http://www.papersaround.com/2017/04/perm-russia.html';
iconimage[169] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[170] = 'Yekaterinburg, Russia';
papertitle[170] = 'Вечерний Екатеринбург';
papernumber1[170] = '44';
papernumber2[170] = '15940';
paperdate[170] = 'April 13, 2014';
paperlang[170] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[170] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[170] = new google.maps.LatLng(56.813891,60.6549335);
paperlink[170] = 'http://www.papersaround.com/2017/04/yekaterinburg-russia_2.html';
iconimage[170] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[171] = 'Balashov, Russia';
papertitle[171] = 'Весь Балашов';
papernumber1[171] = '31';
papernumber2[171] = '249';
paperdate[171] = 'August 14, 2013';
paperlang[171] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[171] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[171] = new google.maps.LatLng(51.54481,43.1926455);
paperlink[171] = 'http://www.papersaround.com/2017/04/balashov-russia.html';
iconimage[171] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[172] = 'Penza, Russia';
papertitle[172] = 'Пензенская правда';
papernumber1[172] = '61';
papernumber2[172] = '24297';
paperdate[172] = 'August 16, 2013';
paperlang[172] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[172] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[172] = new google.maps.LatLng(53.195153,45.0306203);
paperlink[172] = 'http://www.papersaround.com/2017/04/penza-russia.html';
iconimage[172] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[173] = 'Rostov-on-Don, Russia';
papertitle[173] = 'Газета Дона';
papernumber1[173] = '33';
papernumber2[173] = '765';
paperdate[173] = 'August 13, 2013';
paperlang[173] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[173] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[173] = new google.maps.LatLng(47.2610085,39.6279999);
paperlink[173] = 'http://www.papersaround.com/2017/04/rostov-on-don-russia_2.html';
iconimage[173] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[174] = 'Tuapse, Russia';
papertitle[174] = 'Мой Туапсе';
papernumber1[174] = '33';
papernumber2[174] = '771';
paperdate[174] = 'August 22, 2013';
paperlang[174] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[174] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[174] = new google.maps.LatLng(44.1018987,39.078565);
paperlink[174] = 'http://www.papersaround.com/2017/04/tuapse-russia.html';
iconimage[174] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[175] = 'Gelendzhik, Russia';
papertitle[175] = 'Маяк Геленджика';
papernumber1[175] = '33';
papernumber2[175] = '83';
paperdate[175] = 'August 21, 2013';
paperlang[175] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[175] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[175] = new google.maps.LatLng(44.576569,38.0535916);
paperlink[175] = 'http://www.papersaround.com/2017/04/gelendzhik-russia.html';
iconimage[175] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[176] = 'Krasnodar, Russia';
papertitle[176] = 'Краснодарские известия';
papernumber1[176] = '127';
papernumber2[176] = '5130';
paperdate[176] = 'August 23, 2013';
paperlang[176] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[176] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[176] = new google.maps.LatLng(45.053548,39.01605);
paperlink[176] = 'http://www.papersaround.com/2017/04/krasnodar-russia.html';
iconimage[176] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[177] = 'Anapa, Russia';
papertitle[177] = 'Черноморка';
papernumber1[177] = '68';
papernumber2[177] = '1261';
paperdate[177] = 'August 28, 2013';
paperlang[177] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[177] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[177] = new google.maps.LatLng(44.9237242,37.3146554);
paperlink[177] = 'http://www.papersaround.com/2017/04/anapa-russia_72.html';
iconimage[177] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[178] = 'Verkhoturye, Russia';
papertitle[178] = 'Православная газета Екатеринбург';
papernumber1[178] = '40';
papernumber2[178] = '697';
paperdate[178] = 'October 1, 2012';
paperlang[178] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[178] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[178] = new google.maps.LatLng(58.8765859,60.7536827);
paperlink[178] = 'http://www.papersaround.com/2017/04/verkhoturye-russia.html';
iconimage[178] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[179] = 'Ivdel, Russia';
papertitle[179] = 'ВГ';
papernumber1[179] = '34';
papernumber2[179] = '1000';
paperdate[179] = 'August 21, 2013';
paperlang[179] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[179] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[179] = new google.maps.LatLng(60.6911365,60.4357734);
paperlink[179] = 'http://www.papersaround.com/2017/04/ivdel-russia.html';
iconimage[179] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[180] = 'Samara, Russia';
papertitle[180] = 'Самарские известия';
papernumber1[180] = '170';
papernumber2[180] = '6599';
paperdate[180] = 'September 20, 2013';
paperlang[180] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[180] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[180] = new google.maps.LatLng(53.260908,50.198077);
paperlink[180] = 'http://www.papersaround.com/2017/04/samara-russia.html';
iconimage[180] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[181] = 'Vladimir, Russia';
papertitle[181] = 'Хронометр Владимир';
papernumber1[181] = '47';
papernumber2[181] = '740';
paperdate[181] = 'November 19, 2013';
paperlang[181] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[181] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[181] = new google.maps.LatLng(56.1376615,40.4134805);
paperlink[181] = 'http://www.papersaround.com/2017/04/vladimir-russia.html';
iconimage[181] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[182] = 'Tyumen, Russia';
papertitle[182] = 'Тюменская правда';
papernumber1[182] = '20';
papernumber2[182] = '19166';
paperdate[182] = 'February 6, 2014';
paperlang[182] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[182] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[182] = new google.maps.LatLng(57.174086,65.5719995);
paperlink[182] = 'http://www.papersaround.com/2017/04/tyumen-russia_89.html';
iconimage[182] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[183] = 'Izhevsk, Russia';
papertitle[183] = 'Удмуртская правда';
papernumber1[183] = '22';
papernumber2[183] = '25173';
paperdate[183] = 'February 26, 2014';
paperlang[183] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[183] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[183] = new google.maps.LatLng(56.8638095,53.2281006);
paperlink[183] = 'http://www.papersaround.com/2017/04/izhevsk-russia.html';
iconimage[183] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[184] = 'Kamyshlov, Russia';
papertitle[184] = 'Камышловские известия';
papernumber1[184] = '15';
papernumber2[184] = '13612';
paperdate[184] = 'February 11, 2014';
paperlang[184] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[184] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[184] = new google.maps.LatLng(56.848974,62.7103416);
paperlink[184] = 'http://www.papersaround.com/2017/04/kamyshlov-russia.html';
iconimage[184] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[185] = 'Perm, Russia';
papertitle[185] = 'Звезда';
papernumber1[185] = '82';
papernumber2[185] = '32098';
paperdate[185] = 'July 26, 2013';
paperlang[185] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[185] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[185] = new google.maps.LatLng(58.020486,56.2342755);
paperlink[185] = 'http://www.papersaround.com/2017/04/perm-russia_2.html';
iconimage[185] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[186] = 'Moscow, Russia';
papertitle[186] = 'Вечерняя Москва';
papernumber1[186] = '222';
papernumber2[186] = '26573';
paperdate[186] = 'December 2, 2013';
paperlang[186] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[186] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[186] = new google.maps.LatLng(55.749792,37.632495);
paperlink[186] = 'http://www.papersaround.com/2017/04/moscow-russia_2.html';
iconimage[186] = 'https://rawgit.com/borisovodov/np/master/content/markers/russia.png';

papername[187] = 'Nice, France';
papertitle[187] = 'Le Courrier de Russie';
papernumber1[187] = '251';
papernumber2[187] = '';
paperdate[187] = 'February 7, 2014';
paperlang[187] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[187] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Neradovsky">Maxim Neradovsky</a>';
paperland[187] = new google.maps.LatLng(43.7031905,7.252817);
paperlink[187] = 'http://www.papersaround.com/2017/04/nice-france_2.html';
iconimage[187] = 'https://rawgit.com/borisovodov/np/master/content/markers/france.png';

papername[188] = 'Tokyo, Japan';
papertitle[188] = '産経新聞';
papernumber1[188] = '13371';
papernumber2[188] = '';
paperdate[188] = 'July 31, 2013';
paperlang[188] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Japanese">Japanese</a>';
papersender[188] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valentin%20Tetyorkin">Valentin Tetyorkin</a>';
paperland[188] = new google.maps.LatLng(35.673343,139.710388);
paperlink[188] = 'http://www.papersaround.com/2017/04/tokyo-japan_2.html';
iconimage[188] = 'https://rawgit.com/borisovodov/np/master/content/markers/japan.png';

papername[189] = 'Beijing, China';
papertitle[189] = '体坛周报';
papernumber1[189] = '';
papernumber2[189] = '';
paperdate[189] = 'January 13, 2012';
paperlang[189] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[189] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandra%20Ovodova">Aleksandra Ovodova</a>';
paperland[189] = new google.maps.LatLng(39.9388838,116.3974589);
paperlink[189] = 'http://www.papersaround.com/2017/04/beijing-china_83.html';
iconimage[189] = 'https://rawgit.com/borisovodov/np/master/content/markers/china.png';

var N=190; //Общее число газет
var i;
var j;
var k;

for (i=0; i<N; i++)
{
    if (papernumber1[i]=='') {
        if (paperdate[i]=='') {
            if (paperlink[i]=='') {
                content[i] = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Title: </b>'+papertitle[i]+'</p>'+
                    '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                    '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                    '</div>'+
                    '</div>';
            } else {
                content[i] = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
                    '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                    '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                    '</div>'+
                    '</div>';
            }
        } else if (paperlink[i]=='') {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b>'+papertitle[i]+'</p>'+
                '<p><b>Released: </b>'+paperdate[i]+'</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        } else {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
                '<p><b>Released: </b>'+paperdate[i]+'</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        }
    } else if (paperdate[i]=='') {
        if (papernumber2[i]=='') {
            if (paperlink[i]=='') {
                content[i] = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Title: </b>'+papertitle[i]+'</p>'+
                    '<p><b>Number: </b>'+papernumber1[i]+'</p>'+
                    '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                    '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                    '</div>'+
                    '</div>';
            } else {
                content[i] = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
                    '<p><b>Number: </b>'+papernumber1[i]+'</p>'+
                    '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                    '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                    '</div>'+
                    '</div>';
            }
        } else if (paperlink[i]=='') {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b>'+papertitle[i]+'</p>'+
                '<p><b>Number: </b>'+papernumber1[i]+' ('+papernumber2[i]+')</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        } else {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
                '<p><b>Number: </b>'+papernumber1[i]+' ('+papernumber2[i]+')</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        }
    } else if (papernumber2[i]=='') {
        if (paperlink[i]=='') {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b>'+papertitle[i]+'</p>'+
                '<p><b>Number: </b>'+papernumber1[i]+'</p>'+
                '<p><b>Released: </b>'+paperdate[i]+'</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        } else {
            content[i] = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
                '<p><b>Number: </b>'+papernumber1[i]+'</p>'+
                '<p><b>Released: </b>'+paperdate[i]+'</p>'+
                '<p><b>Language: </b>'+paperlang[i]+'</p>'+
                '<p><b>Sender: </b>'+papersender[i]+'</p>'+
                '</div>'+
                '</div>';
        }
    } else if (paperlink[i]=='') {
        content[i] = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Title: </b>'+papertitle[i]+'</p>'+
            '<p><b>Number: </b>'+papernumber1[i]+' ('+papernumber2[i]+')</p>'+
            '<p><b>Released: </b>'+paperdate[i]+'</p>'+
            '<p><b>Language: </b>'+paperlang[i]+'</p>'+
            '<p><b>Sender: </b>'+papersender[i]+'</p>'+
            '</div>'+
            '</div>';
    } else {
        content[i] = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+papername[i]+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Title: </b><a style="text-decoration: underline" href="'+paperlink[i]+'">'+papertitle[i]+'</a></p>'+
            '<p><b>Number: </b>'+papernumber1[i]+' ('+papernumber2[i]+')</p>'+
            '<p><b>Released: </b>'+paperdate[i]+'</p>'+
            '<p><b>Language: </b>'+paperlang[i]+'</p>'+
            '<p><b>Sender: </b>'+papersender[i]+'</p>'+
            '</div>'+
            '</div>';
    }

    infowindow[i] = new google.maps.InfoWindow({
        content: content[i],
    });
    marker[i] = new google.maps.Marker({
        position: paperland[i],
        map: map,
        title: papername[i],
        icon: iconimage[i]
    });
    google.maps.event.addListener(marker[i], 'click', function(j) {
        return function() {
            for (k=0; k<N; k++) {
                infowindow[k].close();
            }
            infowindow[j].open(map,marker[j]);
        }
    }(i));
}
}
