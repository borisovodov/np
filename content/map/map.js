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

papername[0] = 'London, United Kingdom';
papertitle[0] = 'London Evening Standard';
papernumber1[0] = '';
papernumber2[0] = '';
paperdate[0] = 'February 10, 2017';
paperlang[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[0] = new google.maps.LatLng(51.5013454,-0.1900812);
paperlink[0] = 'http://www.papersaround.com/2017/07/london-united-kingdom.html';
iconimage[0] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united kingdom.png';

papername[1] = 'London, United Kingdom';
papertitle[1] = 'London Evening Standard';
papernumber1[1] = '';
papernumber2[1] = '';
paperdate[1] = 'February 6, 2017';
paperlang[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[1] = new google.maps.LatLng(51.5014477,-0.1908654);
paperlink[1] = 'http://www.papersaround.com/2017/07/london-united-kingdom_8.html';
iconimage[1] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united kingdom.png';

papername[2] = 'McLean, United States';
papertitle[2] = 'USA Today';
papernumber1[2] = '';
papernumber2[2] = '';
paperdate[2] = 'March 27, 2017';
paperlang[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Ivleva">Anna Ivleva</a>';
paperland[2] = new google.maps.LatLng(38.9322489,-77.2190529);
paperlink[2] = 'http://www.papersaround.com/2017/07/mclean-united-states.html';
iconimage[2] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united states.png';

papername[3] = 'Moscow, Russia';
papertitle[3] = 'Ўзбегим';
papernumber1[3] = '3';
papernumber2[3] = '89';
paperdate[3] = 'March 1, 2017';
paperlang[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Uzbek">Uzbek</a>';
papersender[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[3] = new google.maps.LatLng(55.7975753,37.5727887);
paperlink[3] = 'http://www.papersaround.com/2017/07/moscow-russia.html';
iconimage[3] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[4] = 'Barcelona, Spain';
papertitle[4] = 'El Periódico de Catalunya';
papernumber1[4] = '';
papernumber2[4] = '';
paperdate[4] = 'May 13, 2017';
paperlang[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Catalan">Catalan</a>';
papersender[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[4] = new google.maps.LatLng(41.3963695,2.1724405);
paperlink[4] = 'http://www.papersaround.com/2017/07/barcelona-spain.html';
iconimage[4] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/spain.png';

papername[5] = 'Tobolsk, Russia';
papertitle[5] = 'Тобольск-Содействие';
papernumber1[5] = '18';
papernumber2[5] = '1119';
paperdate[5] = 'May 8, 2017';
paperlang[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[5] = new google.maps.LatLng(58.1999979,68.250039);
paperlink[5] = 'http://www.papersaround.com/2017/07/tobolsk-russia.html';
iconimage[5] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[6] = 'Yalta, Russia';
papertitle[6] = 'Крымское Время';
papernumber1[6] = '32';
papernumber2[6] = '3490';
paperdate[6] = 'August 18, 2016';
paperlang[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Sevryukova">Anna Sevryukova</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Oleg%20Sevryukov">Oleg Sevryukov</a>';
paperland[6] = new google.maps.LatLng(44.4935929,34.165324);
paperlink[6] = 'http://www.papersaround.com/2017/07/yalta-russia.html';
iconimage[6] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[7] = 'Beryozovsky, Russia';
papertitle[7] = 'Берёзовский рабочий';
papernumber1[7] = '18';
papernumber2[7] = '10115';
paperdate[7] = 'April 5, 2017';
paperlang[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Lyubov%20Konstantinova">Lyubov Konstantinova</a>';
paperland[7] = new google.maps.LatLng(56.907856,60.800309);
paperlink[7] = 'http://www.papersaround.com/2017/07/beryozovsky-russia.html';
iconimage[7] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[8] = 'Korotchaevo, Russia';
papertitle[8] = 'Неделя Уренгоя Информ';
papernumber1[8] = '18';
papernumber2[8] = '347';
paperdate[8] = 'May 5, 2017';
paperlang[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[8] = new google.maps.LatLng(65.9169466,78.1886561);
paperlink[8] = 'http://www.papersaround.com/2017/07/korotchaevo-russia.html';
iconimage[8] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[9] = 'Dubai, United Arab Emirates';
papertitle[9] = 'ചന്ദ്രിക';
papernumber1[9] = '1438';
papernumber2[9] = '';
paperdate[9] = 'April 6, 2017';
paperlang[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Malayalam">Malayalam</a>';
papersender[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[9] = new google.maps.LatLng(25.2335684,55.2643641);
paperlink[9] = 'http://www.papersaround.com/2017/07/dubai-united-arab-emirates.html';
iconimage[9] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united arab emirates.png';

papername[10] = 'Novosibirsk, Russia';
papertitle[10] = 'Честное слово';
papernumber1[10] = '07';
papernumber2[10] = '1041';
paperdate[10] = 'February 22, 2017';
paperlang[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[10] = new google.maps.LatLng(55.0674772,82.9113274);
paperlink[10] = 'http://www.papersaround.com/2017/07/novosibirsk-russia.html';
iconimage[10] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[11] = 'Izhevsk, Russia';
papertitle[11] = 'Центр';
papernumber1[11] = '6';
papernumber2[11] = '0925';
paperdate[11] = 'February 8, 2017';
paperlang[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[11] = new google.maps.LatLng(56.8603845,53.226703);
paperlink[11] = 'http://www.papersaround.com/2017/07/izhevsk-russia.html';
iconimage[11] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[12] = 'Miass, Russia';
papertitle[12] = 'Миасский рабочий';
papernumber1[12] = '39';
papernumber2[12] = '17445';
paperdate[12] = 'June 8, 2017';
paperlang[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[12] = new google.maps.LatLng(55.0398349,60.1140129);
paperlink[12] = 'http://www.papersaround.com/2017/07/miass-russia.html';
iconimage[12] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[13] = 'Yuryuzan, Russia';
papertitle[13] = 'Авангард';
papernumber1[13] = '41';
papernumber2[13] = '11553';
paperdate[13] = 'June 10, 2017';
paperlang[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[13] = new google.maps.LatLng(54.85934,58.4323504);
paperlink[13] = 'http://www.papersaround.com/2017/07/yuryuzan-russia.html';
iconimage[13] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[14] = 'Cologne, Germany';
papertitle[14] = 'Kölner Stadt-Anzeiger';
papernumber1[14] = '55';
papernumber2[14] = '';
paperdate[14] = 'March 6, 2017';
paperlang[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[14] = new google.maps.LatLng(50.8273085,6.9047133);
paperlink[14] = 'http://www.papersaround.com/2017/07/cologne-germany.html';
iconimage[14] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[15] = 'Milan, Italy';
papertitle[15] = 'Corriere della Sera';
papernumber1[15] = '93';
papernumber2[15] = '';
paperdate[15] = 'April 20, 2017';
paperlang[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[15] = new google.maps.LatLng(45.4747588,9.1949064);
paperlink[15] = 'http://www.papersaround.com/2017/07/milan-italy.html';
iconimage[15] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/italy.png';

papername[16] = 'Rome, Italy';
papertitle[16] = 'Il Messaggero';
papernumber1[16] = '109';
papernumber2[16] = '';
paperdate[16] = 'April 21, 2017';
paperlang[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[16] = new google.maps.LatLng(41.8872356,12.5178482);
paperlink[16] = 'http://www.papersaround.com/2017/07/rome-italy.html';
iconimage[16] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/italy.png';

papername[17] = 'Nizhny Tagil, Russia';
papertitle[17] = 'Тагильский рабочий';
papernumber1[17] = '35';
papernumber2[17] = '24486';
paperdate[17] = 'March 30, 2017';
paperlang[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[17] = new google.maps.LatLng(57.9069924,59.9565201);
paperlink[17] = 'http://www.papersaround.com/2017/07/nizhny-tagil-russia.html';
iconimage[17] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[18] = 'Münster, Germany';
papertitle[18] = 'Westfälische Nachrichten';
papernumber1[18] = '281';
papernumber2[18] = '';
paperdate[18] = 'December 2, 2016';
paperlang[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[18] = new google.maps.LatLng(51.9042409,7.6464064);
paperlink[18] = 'http://www.papersaround.com/2017/07/munster-germany.html';
iconimage[18] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[19] = 'Göttingen, Germany';
papertitle[19] = 'Göttinger Tageblatt';
papernumber1[19] = '284';
papernumber2[19] = '';
paperdate[19] = 'December 3, 2016';
paperlang[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[19] = new google.maps.LatLng(51.523541,9.8755377);
paperlink[19] = 'http://www.papersaround.com/2017/07/gottingen-germany.html';
iconimage[19] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[20] = 'Brühl, Germany';
papertitle[20] = 'Express';
papernumber1[20] = '';
papernumber2[20] = '';
paperdate[20] = 'December 2, 2016';
paperlang[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[20] = new google.maps.LatLng(50.8290191,6.9056384);
paperlink[20] = 'http://www.papersaround.com/2017/07/bruhl-germany.html';
iconimage[20] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[21] = 'Ahlen, Germany';
papertitle[21] = 'Blick Punkt';
papernumber1[21] = '48';
papernumber2[21] = '';
paperdate[21] = 'November 27, 2016';
paperlang[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[21] = new google.maps.LatLng(51.7634183,7.8939555);
paperlink[21] = 'http://www.papersaround.com/2017/07/ahlen-germany.html';
iconimage[21] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[22] = 'Beckum, Germany';
papertitle[22] = 'stadt. anzeiger';
papernumber1[22] = '3';
papernumber2[22] = '';
paperdate[22] = 'December 4, 2016';
paperlang[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[22] = new google.maps.LatLng(51.7630305,7.8949297);
paperlink[22] = 'http://www.papersaround.com/2017/07/beckum-germany.html';
iconimage[22] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[23] = 'Bielefeld, Germany';
papertitle[23] = 'Neue Westfälische Bielefelder Tageblatt';
papernumber1[23] = '285';
papernumber2[23] = '';
paperdate[23] = 'December 7, 2016';
paperlang[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[23] = new google.maps.LatLng(52.0271654,8.5322954);
paperlink[23] = 'http://www.papersaround.com/2017/07/bielefeld-germany.html';
iconimage[23] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[24] = 'Hamburg, Germany';
papertitle[24] = 'Hamburger Morgenpost';
papernumber1[24] = '332';
papernumber2[24] = '';
paperdate[24] = 'December 3, 2016';
paperlang[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[24] = new google.maps.LatLng(53.5563839,9.9101053);
paperlink[24] = 'http://www.papersaround.com/2017/07/hamburg-germany.html';
iconimage[24] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[25] = 'Osnabrück, Germany';
papertitle[25] = 'Neue Osnabrücker Zeitung';
papernumber1[25] = '290';
papernumber2[25] = '';
paperdate[25] = 'December 10, 2016';
paperlang[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[25] = new google.maps.LatLng(52.2742157,8.0477191);
paperlink[25] = 'http://www.papersaround.com/2017/07/osnabruck-germany.html';
iconimage[25] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[26] = 'Oelde, Germany';
papertitle[26] = 'Die Glocke';
papernumber1[26] = '282';
papernumber2[26] = '';
paperdate[26] = 'December 3, 2016';
paperlang[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hans%20Bergen">Hans Bergen</a>';
paperland[26] = new google.maps.LatLng(51.83541,8.3100477);
paperlink[26] = 'http://www.papersaround.com/2017/07/oelde-germany.html';
iconimage[26] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[27] = 'Kaliningrad, Russia';
papertitle[27] = 'Дворникъ';
papernumber1[27] = '38';
papernumber2[27] = '1044';
paperdate[27] = 'October 4, 2016';
paperlang[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[27] = new google.maps.LatLng(54.7797061,20.6103425);
paperlink[27] = 'http://www.papersaround.com/2017/07/kaliningrad-russia.html';
iconimage[27] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[28] = 'Zakopane, Poland';
papertitle[28] = 'Tygodnik Podhalański';
papernumber1[28] = '1';
papernumber2[28] = '1398';
paperdate[28] = 'January 5, 2017';
paperlang[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[28] = new google.maps.LatLng(49.2954977,19.9525668);
paperlink[28] = 'http://www.papersaround.com/2017/07/zakopane-poland.html';
iconimage[28] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/poland.png';

papername[29] = 'Kraków, Poland';
papertitle[29] = 'Gazeta Krakowska';
papernumber1[29] = '1';
papernumber2[29] = '20915';
paperdate[29] = 'January 2, 2017';
paperlang[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[29] = new google.maps.LatLng(50.0577336,19.9613964);
paperlink[29] = 'http://www.papersaround.com/2017/07/krakow-poland.html';
iconimage[29] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/poland.png';

papername[30] = 'Kraków, Poland';
papertitle[30] = 'Dziennik Polski';
papernumber1[30] = '1';
papernumber2[30] = '22051';
paperdate[30] = 'January 2, 2017';
paperlang[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[30] = new google.maps.LatLng(50.0575972,19.961977);
paperlink[30] = 'http://www.papersaround.com/2017/07/krakow-poland_8.html';
iconimage[30] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/poland.png';

papername[31] = 'Łódź, Poland';
papertitle[31] = 'Tygodnik Faktycznie';
papernumber1[31] = '15';
papernumber2[31] = '15';
paperdate[31] = 'October 13, 2016';
paperlang[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[31] = new google.maps.LatLng(51.7556737,19.480502);
paperlink[31] = 'http://www.papersaround.com/2017/04/odz-poland_67.html';
iconimage[31] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/poland.png';

papername[32] = 'Gdańsk, Poland';
papertitle[32] = 'Dziennik Bałtycki';
papernumber1[32] = '242';
papernumber2[32] = '21872';
paperdate[32] = 'October 15, 2016';
paperlang[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[32] = new google.maps.LatLng(54.3524823,18.6480497);
paperlink[32] = 'http://www.papersaround.com/2017/04/gdansk-poland_81.html';
iconimage[32] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/poland.png';

papername[33] = 'Kaliningrad, Russia';
papertitle[33] = 'Гражданин';
papernumber1[33] = '25';
papernumber2[33] = '1353';
paperdate[33] = 'September 29, 2016';
paperlang[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[33] = new google.maps.LatLng(54.7199788,20.5015074);
paperlink[33] = 'http://www.papersaround.com/2017/04/kaliningrad-russia_60.html';
iconimage[33] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[34] = 'Murmansk, Russia';
papertitle[34] = 'Полярная правда';
papernumber1[34] = '20';
papernumber2[34] = '23735';
paperdate[34] = 'December 18, 2016';
paperlang[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[34] = new google.maps.LatLng(68.9712108,33.092);
paperlink[34] = 'http://www.papersaround.com/2017/04/murmansk-russia_60.html';
iconimage[34] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[35] = 'Gadzhiyevo, Russia';
papertitle[35] = 'На страже Заполярья';
papernumber1[35] = '28';
papernumber2[35] = '18141';
paperdate[35] = 'April 7, 2007';
paperlang[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[35] = new google.maps.LatLng(69.2491946,33.3168739);
paperlink[35] = 'http://www.papersaround.com/2017/04/gadzhiyevo-russia_41.html';
iconimage[35] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[36] = 'Bolsheustikinskoye, Russia';
papertitle[36] = 'Мечетлинская жизнь';
papernumber1[36] = '145';
papernumber2[36] = '10130';
paperdate[36] = 'December 17, 2016';
paperlang[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[36] = new google.maps.LatLng(55.9494382,58.266619);
paperlink[36] = 'http://www.papersaround.com/2017/04/bolsheustikinskoye-russia_11.html';
iconimage[36] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[37] = 'Istanbul, Turkey';
papertitle[37] = 'Vatan';
papernumber1[37] = '';
papernumber2[37] = '';
paperdate[37] = 'September 9, 2016';
paperlang[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[37] = new google.maps.LatLng(41.0629496,28.9869787);
paperlink[37] = 'http://www.papersaround.com/2017/04/istanbul-turkey_45.html';
iconimage[37] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/turkey.png';

papername[38] = 'Tbilisi, Georgia';
papertitle[38] = 'Georgia Today Business';
papernumber1[38] = '42';
papernumber2[38] = '874';
paperdate[38] = 'August 30, 2019';
paperlang[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[38] = new google.maps.LatLng(41.7076384,44.7850351);
paperlink[38] = 'http://www.papersaround.com/2017/04/tbilisi-georgia_22.html';
iconimage[38] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/georgia.png';

papername[39] = 'Krasnoyarsk, Russia';
papertitle[39] = 'Красноярский рабочий';
papernumber1[39] = '115';
papernumber2[39] = '27187';
paperdate[39] = 'December 7, 2016';
paperlang[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[39] = new google.maps.LatLng(56.0214804,92.8369719);
paperlink[39] = 'http://www.papersaround.com/2017/04/krasnoyarsk-russia_84.html';
iconimage[39] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[40] = 'Pyshma, Russia';
papertitle[40] = 'Пышминские Вести';
papernumber1[40] = '88';
papernumber2[40] = '9896';
paperdate[40] = 'November 3, 2016';
paperlang[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Marina%20Niderberger">Marina Niderberger</a>';
paperland[40] = new google.maps.LatLng(56.9471459,63.2402341);
paperlink[40] = 'http://www.papersaround.com/2017/04/pyshma-russia_54.html';
iconimage[40] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[41] = 'Boston, United States';
papertitle[41] = 'Boston Sunday Globe';
papernumber1[41] = '';
papernumber2[41] = '';
paperdate[41] = 'November 6, 2016';
paperlang[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[41] = new google.maps.LatLng(42.3156846,-71.0488287);
paperlink[41] = 'http://www.papersaround.com/2017/04/boston-united-states_93.html';
iconimage[41] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united states.png';

papername[42] = 'Boston, United States';
papertitle[42] = 'Boston Compass';
papernumber1[42] = '81';
papernumber2[42] = '';
paperdate[42] = 'November 1, 2016';
paperlang[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[42] = new google.maps.LatLng(42.3604081,-71.0582395);
paperlink[42] = 'http://www.papersaround.com/2017/04/boston-united-states_33.html';
iconimage[42] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united states.png';

papername[43] = 'Krasnoyarsk, Russia';
papertitle[43] = 'Посредник';
papernumber1[43] = '11';
papernumber2[43] = '';
paperdate[43] = 'December 14, 2016';
paperlang[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[43] = new google.maps.LatLng(56.0131505,92.8907539);
paperlink[43] = 'http://www.papersaround.com/2017/04/krasnoyarsk-russia_6.html';
iconimage[43] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[44] = 'Athens, Greece';
papertitle[44] = 'το Ποντίκι';
papernumber1[44] = '';
papernumber2[44] = '';
paperdate[44] = 'October 6, 2016';
paperlang[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Greek">Greek</a>';
papersender[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[44] = new google.maps.LatLng(37.9745772,23.7252918);
paperlink[44] = 'http://www.papersaround.com/2017/04/athens-greece_85.html';
iconimage[44] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/greece.png';

papername[45] = 'Kyzyl, Russia';
papertitle[45] = 'Тыванын Аныяктары';
papernumber1[45] = '36';
papernumber2[45] = '110064';
paperdate[45] = 'September 29, 2016';
paperlang[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tuvan">Tuvan</a>';
papersender[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[45] = new google.maps.LatLng(51.7205979,94.4372445);
paperlink[45] = 'http://www.papersaround.com/2017/04/kyzyl-russia_53.html';
iconimage[45] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[46] = 'Kyzyl, Russia';
papertitle[46] = 'Тувинская правда';
papernumber1[46] = '107';
papernumber2[46] = '17858';
paperdate[46] = 'September 29, 2016';
paperlang[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[46] = new google.maps.LatLng(51.7100769,94.4501267);
paperlink[46] = 'http://www.papersaround.com/2017/04/kyzyl-russia_44.html';
iconimage[46] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[47] = 'Ankara, Turkey';
papertitle[47] = 'Anadolu Bayram';
papernumber1[47] = '12';
papernumber2[47] = '';
paperdate[47] = 'September 13, 2016';
paperlang[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[47] = new google.maps.LatLng(39.9314601,32.843575);
paperlink[47] = 'http://www.papersaround.com/2017/04/ankara-turkey_34.html';
iconimage[47] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/turkey.png';

papername[48] = 'Surgut, Russia';
papertitle[48] = 'Сургутская трибуна';
papernumber1[48] = '177-178';
papernumber2[48] = '13495-96';
paperdate[48] = 'September 23, 2016';
paperlang[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[48] = new google.maps.LatLng(61.2556409,73.4194335);
paperlink[48] = 'http://www.papersaround.com/2017/04/surgut-russia_19.html';
iconimage[48] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[49] = 'Chelyabinsk, Russia';
papertitle[49] = 'Синегорье';
papernumber1[49] = '36';
papernumber2[49] = '834';
paperdate[49] = 'September 7, 2016';
paperlang[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[49] = new google.maps.LatLng(55.13999,61.4131351);
paperlink[49] = 'http://www.papersaround.com/2017/04/chelyabinsk-russia_14.html';
iconimage[49] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[50] = 'Chelyabinsk, Russia';
papertitle[50] = 'Вечерний Челябинск';
papernumber1[50] = '70';
papernumber2[50] = '11980';
paperdate[50] = 'September 9, 2016';
paperlang[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[50] = new google.maps.LatLng(55.1622479,61.3873525);
paperlink[50] = 'http://www.papersaround.com/2017/04/chelyabinsk-russia_97.html';
iconimage[50] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[51] = 'Karabash, Russia';
papertitle[51] = 'Карабашский рабочий';
papernumber1[51] = '35';
papernumber2[51] = '9845';
paperdate[51] = 'September 2, 2016';
paperlang[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[51] = new google.maps.LatLng(55.4833048,60.1998733);
paperlink[51] = 'http://www.papersaround.com/2017/04/karabash-russia_79.html';
iconimage[51] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[52] = 'Rimini, Italy';
papertitle[52] = 'La Stampa';
papernumber1[52] = '222';
papernumber2[52] = '';
paperdate[52] = 'August 11, 2016';
paperlang[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[52] = new google.maps.LatLng(44.049,12.5854291);
paperlink[52] = 'http://www.papersaround.com/2017/04/rimini-italy_71.html';
iconimage[52] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/italy.png';

papername[53] = 'Rimini, Italy';
papertitle[53] = 'Corriere Romagna di Rimini e San Marino';
papernumber1[53] = '221';
papernumber2[53] = '';
paperdate[53] = 'August 11, 2016';
paperlang[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[53] = new google.maps.LatLng(44.0595753,12.5684232);
paperlink[53] = 'http://www.papersaround.com/2017/04/rimini-italy_16.html';
iconimage[53] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/italy.png';

papername[54] = 'Sofia, Bulgaria';
papertitle[54] = 'Стандарт';
papernumber1[54] = '';
papernumber2[54] = '8435';
paperdate[54] = 'August 11, 2016';
paperlang[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Bulgarian">Bulgarian</a>';
papersender[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Klavdiya%20Potapova">Klavdiya Potapova</a>';
paperland[54] = new google.maps.LatLng(42.6914171,23.3436318);
paperlink[54] = 'http://www.papersaround.com/2017/04/sofia-bulgaria_49.html';
iconimage[54] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/bulgaria.png';

papername[55] = 'Zarechny, Russia';
papertitle[55] = 'Зареченская ярмарка';
papernumber1[55] = '33';
papernumber2[55] = '1071';
paperdate[55] = 'August 18, 2016';
paperlang[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[55] = new google.maps.LatLng(56.8014229,61.3206949);
paperlink[55] = 'http://www.papersaround.com/2017/04/zarechny-russia_77.html';
iconimage[55] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[56] = 'Tbilisi, Georgia';
papertitle[56] = 'საქართველოს რესპუბლიკის';
papernumber1[56] = '150';
papernumber2[56] = '8042';
paperdate[56] = 'August 13, 2016';
paperlang[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Georgian">Georgian</a>';
papersender[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[56] = new google.maps.LatLng(41.6955345,44.8065179);
paperlink[56] = 'http://www.papersaround.com/2017/04/tbilisi-georgia_79.html';
iconimage[56] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/georgia.png';

papername[57] = 'Yerevan, Armenia';
papertitle[57] = 'Առավոտ';
papernumber1[57] = '151';
papernumber2[57] = '5241';
paperdate[57] = 'August 9, 2016';
paperlang[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[57] = new google.maps.LatLng(40.170461,44.507751);
paperlink[57] = 'http://www.papersaround.com/2017/04/yerevan-armenia_30.html';
iconimage[57] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/armenia.png';

papername[58] = 'Yerevan, Armenia';
papertitle[58] = 'Հայկական ժամանակ';
papernumber1[58] = '151';
papernumber2[58] = '4015';
paperdate[58] = 'August 9, 2016';
paperlang[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[58] = new google.maps.LatLng(40.1543992,44.4924777);
paperlink[58] = 'http://www.papersaround.com/2017/04/yerevan-armenia_61.html';
iconimage[58] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/armenia.png';

papername[59] = 'Yerevan, Armenia';
papertitle[59] = 'Ժողովուրդ';
papernumber1[59] = '134';
papernumber2[59] = '1287';
paperdate[59] = 'August 9, 2016';
paperlang[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[59] = new google.maps.LatLng(40.1793621,44.5063481);
paperlink[59] = 'http://www.papersaround.com/2017/04/yerevan-armenia_42.html';
iconimage[59] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/armenia.png';

papername[60] = 'Dresden, Germany';
papertitle[60] = 'Dresdner Amtsblatt';
papernumber1[60] = '26-27';
papernumber2[60] = '';
paperdate[60] = 'July 7, 2016';
paperlang[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[60] = new google.maps.LatLng(51.0544705,13.7262943);
paperlink[60] = 'http://www.papersaround.com/2017/04/dresden-germany_81.html';
iconimage[60] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[61] = 'Dresden, Germany';
papertitle[61] = 'Theater Courier';
papernumber1[61] = '';
papernumber2[61] = '';
paperdate[61] = 'June 1, 2016';
paperlang[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[61] = new google.maps.LatLng(51.0486044,13.7202708);
paperlink[61] = 'http://www.papersaround.com/2017/04/dresden-germany_12.html';
iconimage[61] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[62] = 'Bor, Russia';
papertitle[62] = 'Бор сегодня';
papernumber1[62] = '27';
papernumber2[62] = '15361';
paperdate[62] = 'July 7, 2016';
paperlang[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[62] = new google.maps.LatLng(56.3553975,44.0636287);
paperlink[62] = 'http://www.papersaround.com/2017/04/bor-russia_56.html';
iconimage[62] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[63] = 'Nizhny Novgorod, Russia';
papertitle[63] = 'Metro';
papernumber1[63] = '26';
papernumber2[63] = '80';
paperdate[63] = 'July 14, 2016';
paperlang[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[63] = new google.maps.LatLng(56.3253476,44.0039243);
paperlink[63] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_99.html';
iconimage[63] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[64] = 'Nizhny Novgorod, Russia';
papertitle[64] = 'Новое дело';
papernumber1[64] = '28';
papernumber2[64] = '807';
paperdate[64] = 'July 12, 2016';
paperlang[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[64] = new google.maps.LatLng(56.3447799,43.9402825);
paperlink[64] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_94.html';
iconimage[64] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[65] = 'Nizhny Novgorod, Russia';
papertitle[65] = 'Нижегородская правда';
papernumber1[65] = '69';
papernumber2[65] = '26090';
paperdate[65] = 'July 12, 2016';
paperlang[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[65] = new google.maps.LatLng(56.3125614,43.9910557);
paperlink[65] = 'http://www.papersaround.com/2017/04/nizhny-novgorod-russia_92.html';
iconimage[65] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[66] = 'Zarechny, Russia';
papertitle[66] = 'Быстрый нейтрон';
papernumber1[66] = '24';
papernumber2[66] = '0237';
paperdate[66] = 'June 24, 2016';
paperlang[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[66] = new google.maps.LatLng(56.8419134,61.3187734);
paperlink[66] = 'http://www.papersaround.com/2017/04/zarechny-russia_50.html';
iconimage[66] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[67] = 'Zarechny, Russia';
papertitle[67] = 'Страна Росатом';
papernumber1[67] = '23';
papernumber2[67] = '247';
paperdate[67] = 'June 1, 2016';
paperlang[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[67] = new google.maps.LatLng(56.8036442,61.3224178);
paperlink[67] = 'http://www.papersaround.com/2017/04/zarechny-russia_92.html';
iconimage[67] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[68] = 'Kogalym, Russia';
papertitle[68] = 'Когалымский вестник';
papernumber1[68] = '46';
papernumber2[68] = '736';
paperdate[68] = 'June 10, 2016';
paperlang[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[68] = new google.maps.LatLng(62.2640893,74.4826382);
paperlink[68] = 'http://www.papersaround.com/2017/04/kogalym-russia_82.html';
iconimage[68] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[69] = 'Hosapete, India';
papertitle[69] = 'ವಿಜಯ ಕರ್ನಾಟಕ';
papernumber1[69] = '';
papernumber2[69] = '';
paperdate[69] = 'April 20, 2016';
paperlang[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[69] = new google.maps.LatLng(15.2604972,76.378436);
paperlink[69] = 'http://www.papersaround.com/2017/04/hosapete-india_73.html';
iconimage[69] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/india.png';

papername[70] = 'Hosapete, India';
papertitle[70] = 'ಪ್ರಜಾವಾಣಿ';
papernumber1[70] = '';
papernumber2[70] = '';
paperdate[70] = 'April 20, 2016';
paperlang[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[70] = new google.maps.LatLng(15.2678721,76.3863406);
paperlink[70] = 'http://www.papersaround.com/2017/04/hosapete-india_78.html';
iconimage[70] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/india.png';

papername[71] = 'Polevskoy, Russia';
papertitle[71] = 'Рабочая Правда';
papernumber1[71] = '18';
papernumber2[71] = '10635';
paperdate[71] = 'May 4, 2016';
paperlang[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[71] = new google.maps.LatLng(56.4905554,60.2379282);
paperlink[71] = 'http://www.papersaround.com/2017/04/polevskoy-russia_88.html';
iconimage[71] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[72] = 'Bogdanovich, Russia';
papertitle[72] = 'Наш Богданович';
papernumber1[72] = '26';
papernumber2[72] = '592';
paperdate[72] = 'June 30, 2016';
paperlang[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[72] = new google.maps.LatLng(56.7764533,62.0505512);
paperlink[72] = 'http://www.papersaround.com/2017/04/bogdanovich-russia_59.html';
iconimage[72] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[73] = 'Krasnoufimsk, Russia';
papertitle[73] = 'Городок';
papernumber1[73] = '27';
papernumber2[73] = '1117';
paperdate[73] = 'July 1, 2016';
paperlang[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[73] = new google.maps.LatLng(56.6145278,57.7581596);
paperlink[73] = 'http://www.papersaround.com/2017/04/krasnoufimsk-russia_34.html';
iconimage[73] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[74] = 'Istanbul, Turkey';
papertitle[74] = 'Airport Post';
papernumber1[74] = '22';
papernumber2[74] = '';
paperdate[74] = 'May 3, 2016';
paperlang[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[74] = new google.maps.LatLng(40.9829717,28.8104199);
paperlink[74] = 'http://www.papersaround.com/2017/04/istanbul-turkey_39.html';
iconimage[74] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/turkey.png';

papername[75] = 'Istanbul, Turkey';
papertitle[75] = 'Hürriyet';
papernumber1[75] = '';
papernumber2[75] = '';
paperdate[75] = 'February 24, 2016';
paperlang[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[75] = new google.maps.LatLng(41.0602177,28.8462759);
paperlink[75] = 'http://www.papersaround.com/2017/04/istanbul-turkey_73.html';
iconimage[75] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/turkey.png';

papername[76] = 'Copenhagen, Denmark';
papertitle[76] = 'BT';
papernumber1[76] = '99';
papernumber2[76] = '';
paperdate[76] = 'April 10, 2015';
paperlang[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[76] = new google.maps.LatLng(55.6992929,12.5775806);
paperlink[76] = 'http://www.papersaround.com/2017/04/copenhagen-denmark_43.html';
iconimage[76] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/denmark.png';

papername[77] = 'Giessen, Germany';
papertitle[77] = 'Mittelhessische Anzeigen Zeitung';
papernumber1[77] = '';
papernumber2[77] = '';
paperdate[77] = 'April 8, 2015';
paperlang[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[77] = new google.maps.LatLng(50.5837275,8.6779689);
paperlink[77] = 'http://www.papersaround.com/2017/04/giessen-germany_26.html';
iconimage[77] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[78] = 'Berlin, Germany';
papertitle[78] = 'Berliner Zeitung';
papernumber1[78] = '120';
papernumber2[78] = '';
paperdate[78] = 'May 26, 2016';
paperlang[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[78] = new google.maps.LatLng(52.5243414,13.4116841);
paperlink[78] = 'http://www.papersaround.com/2017/04/berlin-germany_18.html';
iconimage[78] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[79] = 'Singapore, Singapore';
papertitle[79] = 'life';
papernumber1[79] = '';
papernumber2[79] = '';
paperdate[79] = 'April 30, 2016';
paperlang[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[79] = new google.maps.LatLng(1.342603,103.848426);
paperlink[79] = 'http://www.papersaround.com/2017/04/singapore-singapore_56.html';
iconimage[79] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/singapore.png';

papername[80] = 'Karabash, Russia';
papertitle[80] = 'Люди Урала';
papernumber1[80] = '';
papernumber2[80] = '';
paperdate[80] = 'May 1, 2016';
paperlang[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[80] = new google.maps.LatLng(55.4777275,60.1983045);
paperlink[80] = 'http://www.papersaround.com/2017/04/karabash-russia_53.html';
iconimage[80] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[81] = 'Sysert, Russia';
papertitle[81] = 'Маяк';
papernumber1[81] = '35';
papernumber2[81] = '10171';
paperdate[81] = 'September 2, 2015';
paperlang[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[81] = new google.maps.LatLng(56.5045779,60.8176965);
paperlink[81] = 'http://www.papersaround.com/2017/04/sysert-russia_70.html';
iconimage[81] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[82] = 'Salzburg, Austria';
papertitle[82] = 'Salzburger Nachrichten';
papernumber1[82] = '90';
papernumber2[82] = '';
paperdate[82] = 'April 18, 2016';
paperlang[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[82] = new google.maps.LatLng(47.7923009,13.0114355);
paperlink[82] = 'http://www.papersaround.com/2017/04/salzburg-austria_62.html';
iconimage[82] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/austria.png';

papername[83] = 'Garmisch-Partenkirchen, Germany';
papertitle[83] = 'Garmisch-Partenkirchner Tagblatt';
papernumber1[83] = '91';
papernumber2[83] = '';
paperdate[83] = 'April 20, 2016';
paperlang[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[83] = new google.maps.LatLng(47.4911232,11.0869002);
paperlink[83] = 'http://www.papersaround.com/2017/04/garmisch-partenkirchen-germany_80.html';
iconimage[83] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[84] = 'Garching, Germany';
papertitle[84] = 'Max Planck Journal';
papernumber1[84] = '';
papernumber2[84] = '';
paperdate[84] = 'June 1, 2015';
paperlang[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[84] = new google.maps.LatLng(48.25963,11.6668394);
paperlink[84] = 'http://www.papersaround.com/2017/04/garching-germany_0.html';
iconimage[84] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[85] = 'Garching, Germany';
papertitle[85] = 'Garchinger Rundschau';
papernumber1[85] = '4';
papernumber2[85] = '15';
paperdate[85] = 'April 15, 2016';
paperlang[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[85] = new google.maps.LatLng(48.2494114,11.6518003);
paperlink[85] = 'http://www.papersaround.com/2017/04/garching-germany_81.html';
iconimage[85] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/germany.png';

papername[86] = 'Anapa, Russia';
papertitle[86] = 'Анапское Черноморье';
papernumber1[86] = '38';
papernumber2[86] = '13683';
paperdate[86] = 'April 7, 2016';
paperlang[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[86] = new google.maps.LatLng(44.891769,37.3100531);
paperlink[86] = 'http://www.papersaround.com/2017/04/anapa-russia_47.html';
iconimage[86] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[87] = 'Anapa, Russia';
papertitle[87] = 'Новая газета Кубани';
papernumber1[87] = '13';
papernumber2[87] = '2077';
paperdate[87] = 'April 6, 2016';
paperlang[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[87] = new google.maps.LatLng(44.8990112,37.3173201);
paperlink[87] = 'http://www.papersaround.com/2017/04/anapa-russia_34.html';
iconimage[87] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[88] = 'Novorossiysk, Russia';
papertitle[88] = 'Кубанские новости';
papernumber1[88] = '35';
papernumber2[88] = '5999';
paperdate[88] = 'March 10, 2016';
paperlang[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[88] = new google.maps.LatLng(44.72563,37.7639794);
paperlink[88] = 'http://www.papersaround.com/2017/04/novorossiysk-russia_40.html';
iconimage[88] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[89] = 'Novorossiysk, Russia';
papertitle[89] = 'Новороссийский рабочий';
papernumber1[89] = '25';
papernumber2[89] = '25129';
paperdate[89] = 'March 10, 2016';
paperlang[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[89] = new google.maps.LatLng(44.7201927,37.7742404);
paperlink[89] = 'http://www.papersaround.com/2017/04/novorossiysk-russia_63.html';
iconimage[89] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[90] = 'Novouralsk, Russia';
papertitle[90] = 'Новоуральская газета';
papernumber1[90] = '12';
papernumber2[90] = '219';
paperdate[90] = 'March 23, 2016';
paperlang[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[90] = new google.maps.LatLng(57.2531487,60.0880206);
paperlink[90] = 'http://www.papersaround.com/2017/04/novouralsk-russia_74.html';
iconimage[90] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[91] = 'Nevyansk, Russia';
papertitle[91] = 'Местные ведомости';
papernumber1[91] = '9';
papernumber2[91] = '';
paperdate[91] = 'March 2, 2016';
paperlang[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[91] = new google.maps.LatLng(57.4899973,60.2231264);
paperlink[91] = 'http://www.papersaround.com/2017/04/nevyansk-russia_6.html';
iconimage[91] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[92] = 'Mũi Né, Vietnam';
papertitle[92] = 'Công an';
papernumber1[92] = '2931';
papernumber2[92] = '';
paperdate[92] = 'October 13, 2015';
paperlang[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[92] = new google.maps.LatLng(10.7747891,106.6957279);
paperlink[92] = 'http://www.papersaround.com/2017/04/mui-ne-vietnam_28.html';
iconimage[92] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/vietnam.png';

papername[93] = 'Mũi Né, Vietnam';
papertitle[93] = 'Thanh Niên';
papernumber1[93] = '286';
papernumber2[93] = '7234';
paperdate[93] = 'October 13, 2015';
paperlang[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[93] = new google.maps.LatLng(10.766131,106.6432553);
paperlink[93] = 'http://www.papersaround.com/2017/04/mui-ne-vietnam_79.html';
iconimage[93] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/vietnam.png';

papername[94] = 'Kogalym, Russia';
papertitle[94] = 'Жемчужина Сибири';
papernumber1[94] = '42';
papernumber2[94] = '421';
paperdate[94] = 'October 29, 2015';
paperlang[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[94] = new google.maps.LatLng(62.2634451,74.4903629);
paperlink[94] = 'http://www.papersaround.com/2017/04/kogalym-russia_57.html';
iconimage[94] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[95] = 'Baranovichi, Belarus';
papertitle[95] = 'Народная Трыбуна';
papernumber1[95] = '52';
papernumber2[95] = '1299';
paperdate[95] = 'December 25, 2015';
paperlang[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Belarusian">Belarusian</a>';
papersender[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[95] = new google.maps.LatLng(53.1252846,26.0081939);
paperlink[95] = 'http://www.papersaround.com/2017/04/baranovichi-belarus_50.html';
iconimage[95] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/belarus.png';

papername[96] = 'Rezh, Russia';
papertitle[96] = 'Режевская весть';
papernumber1[96] = '1';
papernumber2[96] = '11407';
paperdate[96] = 'January 6, 2016';
paperlang[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[96] = new google.maps.LatLng(57.3665107,61.3995949);
paperlink[96] = 'http://www.papersaround.com/2017/04/rezh-russia_30.html';
iconimage[96] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/russia.png';

papername[97] = 'Amsterdam, Netherlands';
papertitle[97] = 'Frankfurter Allgemeine Zeitung';
papernumber1[97] = '46';
papernumber2[97] = '56112';
paperdate[97] = 'December 6, 2015';
paperlang[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[97] = new google.maps.LatLng(52.3720476,4.8956366);
paperlink[97] = 'http://www.papersaround.com/2017/04/amsterdam-netherlands_97.html';
iconimage[97] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/netherlands.png';

papername[98] = 'Pretoria, South Africa';
papertitle[98] = 'Pretoria News';
papernumber1[98] = '';
papernumber2[98] = '';
paperdate[98] = 'December 8, 2015';
paperlang[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[98] = new google.maps.LatLng(-25.7474779,28.2171204);
paperlink[98] = 'http://www.papersaround.com/2017/04/pretoria-south-africa_86.html';
iconimage[98] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/south africa.png';

papername[99] = 'Dubai, United Arab Emirates';
papertitle[99] = 'Khaleej Times';
papernumber1[99] = '235';
papernumber2[99] = 'XXXVII';
paperdate[99] = 'December 6, 2015';
paperlang[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[99] = new google.maps.LatLng(25.1797924,55.2487384);
paperlink[99] = 'http://www.papersaround.com/2017/04/dubai-united-arab-emirates_88.html';
iconimage[99] = 'https://raw.githubusercontent.com/borisovodov/np/master/content/markers/united arab emirates.png';

var N=100; //Общее число газет
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
