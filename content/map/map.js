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

papername[0] = 'Łódź, Poland';
papertitle[0] = 'Tygodnik Faktycznie';
papernumber1[0] = '15';
papernumber2[0] = '15';
paperdate[0] = 'October 13, 2016';
paperlang[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[0] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[0] = new google.maps.LatLng(51.7556737,19.480502);
paperlink[0] = '';
iconimage[0] = 'http://papersaround.esy.es/markers/poland.png';

papername[1] = 'Gdańsk, Poland';
papertitle[1] = 'Dziennik Bałtycki';
papernumber1[1] = '242';
papernumber2[1] = '21872';
paperdate[1] = 'October 15, 2016';
paperlang[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Polish">Polish</a>';
papersender[1] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[1] = new google.maps.LatLng(54.3524823,18.6480497);
paperlink[1] = '';
iconimage[1] = 'http://papersaround.esy.es/markers/poland.png';

papername[2] = 'Kaliningrad, Russia';
papertitle[2] = 'Гражданин';
papernumber1[2] = '25';
papernumber2[2] = '1353';
paperdate[2] = 'September 29, 2016';
paperlang[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[2] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[2] = new google.maps.LatLng(54.7199788,20.5015074);
paperlink[2] = '';
iconimage[2] = 'http://papersaround.esy.es/markers/russia.png';

papername[3] = 'Murmansk, Russia';
papertitle[3] = 'Полярная правда';
papernumber1[3] = '20';
papernumber2[3] = '23735';
paperdate[3] = 'December 18, 2016';
paperlang[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[3] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[3] = new google.maps.LatLng(68.9712108,33.092);
paperlink[3] = '';
iconimage[3] = 'http://papersaround.esy.es/markers/russia.png';

papername[4] = 'Gadzhiyevo, Russia';
papertitle[4] = 'На страже Заполярья';
papernumber1[4] = '28';
papernumber2[4] = '18141';
paperdate[4] = 'April 7, 2007';
paperlang[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[4] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yelena%20Kopylova">Yelena Kopylova</a>';
paperland[4] = new google.maps.LatLng(69.2491946,33.3168739);
paperlink[4] = '';
iconimage[4] = 'http://papersaround.esy.es/markers/russia.png';

papername[5] = 'Bolsheustikinskoye, Russia';
papertitle[5] = 'Мечетлинская жизнь';
papernumber1[5] = '145';
papernumber2[5] = '10130';
paperdate[5] = 'December 17, 2016';
paperlang[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[5] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[5] = new google.maps.LatLng(55.9494382,58.266619);
paperlink[5] = '';
iconimage[5] = 'http://papersaround.esy.es/markers/russia.png';

papername[6] = 'Istanbul, Turkey';
papertitle[6] = 'Vatan';
papernumber1[6] = '';
papernumber2[6] = '';
paperdate[6] = 'September 9, 2016';
paperlang[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[6] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[6] = new google.maps.LatLng(41.0629496,28.9869787);
paperlink[6] = '';
iconimage[6] = 'http://papersaround.esy.es/markers/turkey.png';

papername[7] = 'Tbilisi, Georgia';
papertitle[7] = 'Georgia Today Business';
papernumber1[7] = '42';
papernumber2[7] = '874';
paperdate[7] = 'August 30, 2019';
paperlang[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[7] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anna%20Yarushina">Anna Yarushina</a>';
paperland[7] = new google.maps.LatLng(41.7076384,44.7850351);
paperlink[7] = '';
iconimage[7] = 'http://papersaround.esy.es/markers/georgia.png';

papername[8] = 'Krasnoyarsk, Russia';
papertitle[8] = 'Красноярский рабочий';
papernumber1[8] = '115';
papernumber2[8] = '27187';
paperdate[8] = 'December 7, 2016';
paperlang[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[8] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[8] = new google.maps.LatLng(56.0214804,92.8369719);
paperlink[8] = '';
iconimage[8] = 'http://papersaround.esy.es/markers/russia.png';

papername[9] = 'Pyshma, Russia';
papertitle[9] = 'Пышминские Вести';
papernumber1[9] = '88';
papernumber2[9] = '9896';
paperdate[9] = 'November 3, 2016';
paperlang[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[9] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Marina%20Niderberger">Marina Niderberger</a>';
paperland[9] = new google.maps.LatLng(56.9471459,63.2402341);
paperlink[9] = '';
iconimage[9] = 'http://papersaround.esy.es/markers/russia.png';

papername[10] = 'Boston, United States';
papertitle[10] = 'Boston Sunday Globe';
papernumber1[10] = '';
papernumber2[10] = '';
paperdate[10] = 'November 6, 2016';
paperlang[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[10] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[10] = new google.maps.LatLng(42.3156846,-71.0488287);
paperlink[10] = '';
iconimage[10] = 'http://papersaround.esy.es/markers/united states.png';

papername[11] = 'Boston, United States';
papertitle[11] = 'Boston Compass';
papernumber1[11] = '81';
papernumber2[11] = '';
paperdate[11] = 'November 1, 2016';
paperlang[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[11] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Yuzefpolsky">Boris Yuzefpolsky</a>';
paperland[11] = new google.maps.LatLng(42.3604081,-71.0582395);
paperlink[11] = '';
iconimage[11] = 'http://papersaround.esy.es/markers/united states.png';

papername[12] = 'Krasnoyarsk, Russia';
papertitle[12] = 'Посредник';
papernumber1[12] = '11';
papernumber2[12] = '';
paperdate[12] = 'December 14, 2016';
paperlang[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[12] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[12] = new google.maps.LatLng(56.0131505,92.8907539);
paperlink[12] = '';
iconimage[12] = 'http://papersaround.esy.es/markers/russia.png';

papername[13] = 'Athens, Greece';
papertitle[13] = 'το Ποντίκι';
papernumber1[13] = '';
papernumber2[13] = '';
paperdate[13] = 'October 6, 2016';
paperlang[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Greek">Greek</a>';
papersender[13] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[13] = new google.maps.LatLng(37.9745772,23.7252918);
paperlink[13] = '';
iconimage[13] = 'http://papersaround.esy.es/markers/greece.png';

papername[14] = 'Kyzyl, Russia';
papertitle[14] = 'Тыванын Аныяктары';
papernumber1[14] = '36';
papernumber2[14] = '110064';
paperdate[14] = 'September 29, 2016';
paperlang[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tuvan">Tuvan</a>';
papersender[14] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[14] = new google.maps.LatLng(51.7205979,94.4372445);
paperlink[14] = '';
iconimage[14] = 'http://papersaround.esy.es/markers/russia.png';

papername[15] = 'Kyzyl, Russia';
papertitle[15] = 'Тувинская правда';
papernumber1[15] = '107';
papernumber2[15] = '17858';
paperdate[15] = 'September 29, 2016';
paperlang[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[15] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nataliya%20Klimova">Nataliya Klimova</a>';
paperland[15] = new google.maps.LatLng(51.7100769,94.4501267);
paperlink[15] = '';
iconimage[15] = 'http://papersaround.esy.es/markers/russia.png';

papername[16] = 'Ankara, Turkey';
papertitle[16] = 'Anadolu Bayram';
papernumber1[16] = '12';
papernumber2[16] = '';
paperdate[16] = 'September 13, 2016';
paperlang[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[16] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[16] = new google.maps.LatLng(39.9314601,32.843575);
paperlink[16] = '';
iconimage[16] = 'http://papersaround.esy.es/markers/turkey.png';

papername[17] = 'Surgut, Russia';
papertitle[17] = 'Сургутская трибуна';
papernumber1[17] = '177-178';
papernumber2[17] = '13495-96';
paperdate[17] = 'September 23, 2016';
paperlang[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[17] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[17] = new google.maps.LatLng(61.2556409,73.4194335);
paperlink[17] = '';
iconimage[17] = 'http://papersaround.esy.es/markers/russia.png';

papername[18] = 'Chelyabinsk, Russia';
papertitle[18] = 'Синегорье';
papernumber1[18] = '36';
papernumber2[18] = '834';
paperdate[18] = 'September 7, 2016';
paperlang[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[18] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[18] = new google.maps.LatLng(55.13999,61.4131351);
paperlink[18] = '';
iconimage[18] = 'http://papersaround.esy.es/markers/russia.png';

papername[19] = 'Chelyabinsk, Russia';
papertitle[19] = 'Вечерний Челябинск';
papernumber1[19] = '70';
papernumber2[19] = '11980';
paperdate[19] = 'September 9, 2016';
paperlang[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[19] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[19] = new google.maps.LatLng(55.1622479,61.3873525);
paperlink[19] = '';
iconimage[19] = 'http://papersaround.esy.es/markers/russia.png';

papername[20] = 'Karabash, Russia';
papertitle[20] = 'Карабашский рабочий';
papernumber1[20] = '35';
papernumber2[20] = '9845';
paperdate[20] = 'September 2, 2016';
paperlang[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[20] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[20] = new google.maps.LatLng(55.4833048,60.1998733);
paperlink[20] = '';
iconimage[20] = 'http://papersaround.esy.es/markers/russia.png';

papername[21] = 'Rimini, Italy';
papertitle[21] = 'La Stampa';
papernumber1[21] = '222';
papernumber2[21] = '';
paperdate[21] = 'August 11, 2016';
paperlang[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[21] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[21] = new google.maps.LatLng(44.049,12.5854291);
paperlink[21] = '';
iconimage[21] = 'http://papersaround.esy.es/markers/italy.png';

papername[22] = 'Rimini, Italy';
papertitle[22] = 'Corriere Romagna di Rimini e San Marino';
papernumber1[22] = '221';
papernumber2[22] = '';
paperdate[22] = 'August 11, 2016';
paperlang[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[22] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[22] = new google.maps.LatLng(44.0595753,12.5684232);
paperlink[22] = '';
iconimage[22] = 'http://papersaround.esy.es/markers/italy.png';

papername[23] = 'Sofia, Bulgaria';
papertitle[23] = 'Стандарт';
papernumber1[23] = '';
papernumber2[23] = '8435';
paperdate[23] = 'August 11, 2016';
paperlang[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Bulgarian">Bulgarian</a>';
papersender[23] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Klavdiya%20Potapova">Klavdiya Potapova</a>';
paperland[23] = new google.maps.LatLng(42.6914171,23.3436318);
paperlink[23] = '';
iconimage[23] = 'http://papersaround.esy.es/markers/bulgaria.png';

papername[24] = 'Zarechny, Russia';
papertitle[24] = 'Зареченская ярмарка';
papernumber1[24] = '33';
papernumber2[24] = '1071';
paperdate[24] = 'August 18, 2016';
paperlang[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[24] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[24] = new google.maps.LatLng(56.8014229,61.3206949);
paperlink[24] = '';
iconimage[24] = 'http://papersaround.esy.es/markers/russia.png';

papername[25] = 'Tbilisi, Georgia';
papertitle[25] = 'საქართველოს რესპუბლიკის';
papernumber1[25] = '150';
papernumber2[25] = '8042';
paperdate[25] = 'August 13, 2016';
paperlang[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Georgian">Georgian</a>';
papersender[25] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[25] = new google.maps.LatLng(41.6955345,44.8065179);
paperlink[25] = '';
iconimage[25] = 'http://papersaround.esy.es/markers/georgia.png';

papername[26] = 'Yerevan, Armenia';
papertitle[26] = 'Առավոտ';
papernumber1[26] = '151';
papernumber2[26] = '5241';
paperdate[26] = 'August 9, 2016';
paperlang[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[26] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[26] = new google.maps.LatLng(40.170461,44.507751);
paperlink[26] = '';
iconimage[26] = 'http://papersaround.esy.es/markers/armenia.png';

papername[27] = 'Yerevan, Armenia';
papertitle[27] = 'Հայկական ժամանակ';
papernumber1[27] = '151';
papernumber2[27] = '4015';
paperdate[27] = 'August 9, 2016';
paperlang[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[27] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[27] = new google.maps.LatLng(40.1543992,44.4924777);
paperlink[27] = '';
iconimage[27] = 'http://papersaround.esy.es/markers/armenia.png';

papername[28] = 'Yerevan, Armenia';
papertitle[28] = 'Ժողովուրդ';
papernumber1[28] = '134';
papernumber2[28] = '1287';
paperdate[28] = 'August 9, 2016';
paperlang[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Armenian">Armenian</a>';
papersender[28] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[28] = new google.maps.LatLng(40.1793621,44.5063481);
paperlink[28] = '';
iconimage[28] = 'http://papersaround.esy.es/markers/armenia.png';

papername[29] = 'Dresden, Germany';
papertitle[29] = 'Dresdner Amtsblatt';
papernumber1[29] = '26-27';
papernumber2[29] = '';
paperdate[29] = 'July 7, 2016';
paperlang[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[29] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[29] = new google.maps.LatLng(51.0544705,13.7262943);
paperlink[29] = '';
iconimage[29] = 'http://papersaround.esy.es/markers/germany.png';

papername[30] = 'Dresden, Germany';
papertitle[30] = 'Theater Courier';
papernumber1[30] = '';
papernumber2[30] = '';
paperdate[30] = 'June 1, 2016';
paperlang[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[30] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Dmitrenko">Aleksandr Dmitrenko</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitriy%20Bobrovskiy">Dmitriy Bobrovskiy</a>';
paperland[30] = new google.maps.LatLng(51.0486044,13.7202708);
paperlink[30] = '';
iconimage[30] = 'http://papersaround.esy.es/markers/germany.png';

papername[31] = 'Bor, Russia';
papertitle[31] = 'Бор сегодня';
papernumber1[31] = '27';
papernumber2[31] = '15361';
paperdate[31] = 'July 7, 2016';
paperlang[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[31] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[31] = new google.maps.LatLng(56.3553975,44.0636287);
paperlink[31] = '';
iconimage[31] = 'http://papersaround.esy.es/markers/russia.png';

papername[32] = 'Nizhny Novgorod, Russia';
papertitle[32] = 'Metro';
papernumber1[32] = '26';
papernumber2[32] = '80';
paperdate[32] = 'July 14, 2016';
paperlang[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[32] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[32] = new google.maps.LatLng(56.3253476,44.0039243);
paperlink[32] = '';
iconimage[32] = 'http://papersaround.esy.es/markers/russia.png';

papername[33] = 'Nizhny Novgorod, Russia';
papertitle[33] = 'Новое дело';
papernumber1[33] = '28';
papernumber2[33] = '807';
paperdate[33] = 'July 12, 2016';
paperlang[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[33] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[33] = new google.maps.LatLng(56.3447799,43.9402825);
paperlink[33] = '';
iconimage[33] = 'http://papersaround.esy.es/markers/russia.png';

papername[34] = 'Nizhny Novgorod, Russia';
papertitle[34] = 'Нижегородская правда';
papernumber1[34] = '69';
papernumber2[34] = '26090';
paperdate[34] = 'July 12, 2016';
paperlang[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[34] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[34] = new google.maps.LatLng(56.3125614,43.9910557);
paperlink[34] = '';
iconimage[34] = 'http://papersaround.esy.es/markers/russia.png';

papername[35] = 'Zarechny, Russia';
papertitle[35] = 'Быстрый нейтрон';
papernumber1[35] = '24';
papernumber2[35] = '0237';
paperdate[35] = 'June 24, 2016';
paperlang[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[35] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[35] = new google.maps.LatLng(56.8419134,61.3187734);
paperlink[35] = '';
iconimage[35] = 'http://papersaround.esy.es/markers/russia.png';

papername[36] = 'Zarechny, Russia';
papertitle[36] = 'Страна Росатом';
papernumber1[36] = '23';
papernumber2[36] = '247';
paperdate[36] = 'June 1, 2016';
paperlang[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[36] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[36] = new google.maps.LatLng(56.8036442,61.3224178);
paperlink[36] = '';
iconimage[36] = 'http://papersaround.esy.es/markers/russia.png';

papername[37] = 'Kogalym, Russia';
papertitle[37] = 'Когалымский вестник';
papernumber1[37] = '46';
papernumber2[37] = '736';
paperdate[37] = 'June 10, 2016';
paperlang[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[37] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[37] = new google.maps.LatLng(62.2640893,74.4826382);
paperlink[37] = '';
iconimage[37] = 'http://papersaround.esy.es/markers/russia.png';

papername[38] = 'Hosapete, India';
papertitle[38] = 'ವಿಜಯ ಕರ್ನಾಟಕ';
papernumber1[38] = '';
papernumber2[38] = '';
paperdate[38] = 'April 20, 2016';
paperlang[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[38] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[38] = new google.maps.LatLng(15.2604972,76.378436);
paperlink[38] = '';
iconimage[38] = 'http://papersaround.esy.es/markers/india.png';

papername[39] = 'Hosapete, India';
papertitle[39] = 'ಪ್ರಜಾವಾಣಿ';
papernumber1[39] = '';
papernumber2[39] = '';
paperdate[39] = 'April 20, 2016';
paperlang[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kannada">Kannada</a>';
papersender[39] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Ivanova">Tatyana Ivanova</a>';
paperland[39] = new google.maps.LatLng(15.2678721,76.3863406);
paperlink[39] = '';
iconimage[39] = 'http://papersaround.esy.es/markers/india.png';

papername[40] = 'Polevskoy, Russia';
papertitle[40] = 'Рабочая Правда';
papernumber1[40] = '18';
papernumber2[40] = '10635';
paperdate[40] = 'May 4, 2016';
paperlang[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[40] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Andrukov">Dmitry Andrukov</a>';
paperland[40] = new google.maps.LatLng(56.4905554,60.2379282);
paperlink[40] = '';
iconimage[40] = 'http://papersaround.esy.es/markers/russia.png';

papername[41] = 'Bogdanovich, Russia';
papertitle[41] = 'Наш Богданович';
papernumber1[41] = '26';
papernumber2[41] = '592';
paperdate[41] = 'June 30, 2016';
paperlang[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[41] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[41] = new google.maps.LatLng(56.7764533,62.0505512);
paperlink[41] = '';
iconimage[41] = 'http://papersaround.esy.es/markers/russia.png';

papername[42] = 'Krasnoufimsk, Russia';
papertitle[42] = 'Городок';
papernumber1[42] = '27';
papernumber2[42] = '1117';
paperdate[42] = 'July 1, 2016';
paperlang[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[42] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[42] = new google.maps.LatLng(56.6145278,57.7581596);
paperlink[42] = '';
iconimage[42] = 'http://papersaround.esy.es/markers/russia.png';

papername[43] = 'Istanbul, Turkey';
papertitle[43] = 'Airport Post';
papernumber1[43] = '22';
papernumber2[43] = '';
paperdate[43] = 'May 3, 2016';
paperlang[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[43] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[43] = new google.maps.LatLng(40.9829717,28.8104199);
paperlink[43] = '';
iconimage[43] = 'http://papersaround.esy.es/markers/turkey.png';

papername[44] = 'Istanbul, Turkey';
papertitle[44] = 'Hürriyet';
papernumber1[44] = '';
papernumber2[44] = '';
paperdate[44] = 'February 24, 2016';
paperlang[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[44] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[44] = new google.maps.LatLng(41.0602177,28.8462759);
paperlink[44] = '';
iconimage[44] = 'http://papersaround.esy.es/markers/turkey.png';

papername[45] = 'Copenhagen, Denmark';
papertitle[45] = 'BT';
papernumber1[45] = '99';
papernumber2[45] = '';
paperdate[45] = 'April 10, 2015';
paperlang[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[45] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[45] = new google.maps.LatLng(55.6992929,12.5775806);
paperlink[45] = '';
iconimage[45] = 'http://papersaround.esy.es/markers/denmark.png';

papername[46] = 'Giessen, Germany';
papertitle[46] = 'Mittelhessische Anzeigen Zeitung';
papernumber1[46] = '';
papernumber2[46] = '';
paperdate[46] = 'April 8, 2015';
paperlang[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[46] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a>';
paperland[46] = new google.maps.LatLng(50.5837275,8.6779689);
paperlink[46] = '';
iconimage[46] = 'http://papersaround.esy.es/markers/germany.png';

papername[47] = 'Berlin, Germany';
papertitle[47] = 'Berliner Zeitung';
papernumber1[47] = '120';
papernumber2[47] = '';
paperdate[47] = 'May 26, 2016';
paperlang[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[47] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[47] = new google.maps.LatLng(52.5243414,13.4116841);
paperlink[47] = '';
iconimage[47] = 'http://papersaround.esy.es/markers/germany.png';

papername[48] = 'Singapore, Singapore';
papertitle[48] = 'life';
papernumber1[48] = '';
papernumber2[48] = '';
paperdate[48] = 'April 30, 2016';
paperlang[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[48] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[48] = new google.maps.LatLng(1.342603,103.848426);
paperlink[48] = '';
iconimage[48] = 'http://papersaround.esy.es/markers/singapore.png';

papername[49] = 'Karabash, Russia';
papertitle[49] = 'Люди Урала';
papernumber1[49] = '';
papernumber2[49] = '';
paperdate[49] = 'May 1, 2016';
paperlang[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[49] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[49] = new google.maps.LatLng(55.4777275,60.1983045);
paperlink[49] = '';
iconimage[49] = 'http://papersaround.esy.es/markers/russia.png';

papername[50] = 'Sysert, Russia';
papertitle[50] = 'Маяк';
papernumber1[50] = '35';
papernumber2[50] = '10171';
paperdate[50] = 'September 2, 2015';
paperlang[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[50] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[50] = new google.maps.LatLng(56.5045779,60.8176965);
paperlink[50] = '';
iconimage[50] = 'http://papersaround.esy.es/markers/russia.png';

papername[51] = 'Salzburg, Austria';
papertitle[51] = 'Salzburger Nachrichten';
papernumber1[51] = '90';
papernumber2[51] = '';
paperdate[51] = 'April 18, 2016';
paperlang[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[51] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[51] = new google.maps.LatLng(47.7923009,13.0114355);
paperlink[51] = '';
iconimage[51] = 'http://papersaround.esy.es/markers/austria.png';

papername[52] = 'Garmisch-Partenkirchen, Germany';
papertitle[52] = 'Garmisch-Partenkirchner Tagblatt';
papernumber1[52] = '91';
papernumber2[52] = '';
paperdate[52] = 'April 20, 2016';
paperlang[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[52] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[52] = new google.maps.LatLng(47.4911232,11.0869002);
paperlink[52] = '';
iconimage[52] = 'http://papersaround.esy.es/markers/germany.png';

papername[53] = 'Garching, Germany';
papertitle[53] = 'Max Planck Journal';
papernumber1[53] = '';
papernumber2[53] = '';
paperdate[53] = 'June 1, 2015';
paperlang[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[53] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[53] = new google.maps.LatLng(48.25963,11.6668394);
paperlink[53] = '';
iconimage[53] = 'http://papersaround.esy.es/markers/germany.png';

papername[54] = 'Garching, Germany';
papertitle[54] = 'Garchinger Rundschau';
papernumber1[54] = '4';
papernumber2[54] = '15';
paperdate[54] = 'April 15, 2016';
paperlang[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[54] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[54] = new google.maps.LatLng(48.2494114,11.6518003);
paperlink[54] = '';
iconimage[54] = 'http://papersaround.esy.es/markers/germany.png';

papername[55] = 'Anapa, Russia';
papertitle[55] = 'Анапское Черноморье';
papernumber1[55] = '38';
papernumber2[55] = '13683';
paperdate[55] = 'April 7, 2016';
paperlang[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[55] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[55] = new google.maps.LatLng(44.891769,37.3100531);
paperlink[55] = '';
iconimage[55] = 'http://papersaround.esy.es/markers/russia.png';

papername[56] = 'Anapa, Russia';
papertitle[56] = 'Новая газета Кубани';
papernumber1[56] = '13';
papernumber2[56] = '2077';
paperdate[56] = 'April 6, 2016';
paperlang[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[56] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[56] = new google.maps.LatLng(44.8990112,37.3173201);
paperlink[56] = '';
iconimage[56] = 'http://papersaround.esy.es/markers/russia.png';

papername[57] = 'Novorossiysk, Russia';
papertitle[57] = 'Кубанские новости';
papernumber1[57] = '35';
papernumber2[57] = '5999';
paperdate[57] = 'March 10, 2016';
paperlang[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[57] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[57] = new google.maps.LatLng(44.72563,37.7639794);
paperlink[57] = '';
iconimage[57] = 'http://papersaround.esy.es/markers/russia.png';

papername[58] = 'Novorossiysk, Russia';
papertitle[58] = 'Новороссийский рабочий';
papernumber1[58] = '25';
papernumber2[58] = '25129';
paperdate[58] = 'March 10, 2016';
paperlang[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[58] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[58] = new google.maps.LatLng(44.7201927,37.7742404);
paperlink[58] = '';
iconimage[58] = 'http://papersaround.esy.es/markers/russia.png';

papername[59] = 'Novouralsk, Russia';
papertitle[59] = 'Новоуральская газета';
papernumber1[59] = '12';
papernumber2[59] = '219';
paperdate[59] = 'March 23, 2016';
paperlang[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[59] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[59] = new google.maps.LatLng(57.2531487,60.0880206);
paperlink[59] = '';
iconimage[59] = 'http://papersaround.esy.es/markers/russia.png';

papername[60] = 'Nevyansk, Russia';
papertitle[60] = 'Местные ведомости';
papernumber1[60] = '9';
papernumber2[60] = '';
paperdate[60] = 'March 2, 2016';
paperlang[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[60] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[60] = new google.maps.LatLng(57.4899973,60.2231264);
paperlink[60] = '';
iconimage[60] = 'http://papersaround.esy.es/markers/russia.png';

papername[61] = 'Mũi Né, Vietnam';
papertitle[61] = 'Công an';
papernumber1[61] = '2931';
papernumber2[61] = '';
paperdate[61] = 'October 13, 2015';
paperlang[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[61] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[61] = new google.maps.LatLng(10.7747891,106.6957279);
paperlink[61] = '';
iconimage[61] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[62] = 'Mũi Né, Vietnam';
papertitle[62] = 'Thanh Niên';
papernumber1[62] = '286';
papernumber2[62] = '7234';
paperdate[62] = 'October 13, 2015';
paperlang[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[62] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valeriya%20Yalunina">Valeriya Yalunina</a>';
paperland[62] = new google.maps.LatLng(10.766131,106.6432553);
paperlink[62] = '';
iconimage[62] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[63] = 'Kogalym, Russia';
papertitle[63] = 'Жемчужина Сибири';
papernumber1[63] = '42';
papernumber2[63] = '421';
paperdate[63] = 'October 29, 2015';
paperlang[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[63] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[63] = new google.maps.LatLng(62.2634451,74.4903629);
paperlink[63] = '';
iconimage[63] = 'http://papersaround.esy.es/markers/russia.png';

papername[64] = 'Baranovichi, Belarus';
papertitle[64] = 'Народная Трыбуна';
papernumber1[64] = '52';
papernumber2[64] = '1299';
paperdate[64] = 'December 25, 2015';
paperlang[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Belarusian">Belarusian</a>';
papersender[64] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Sergey%20Zaytsev">Sergey Zaytsev</a>';
paperland[64] = new google.maps.LatLng(53.1252846,26.0081939);
paperlink[64] = '';
iconimage[64] = 'http://papersaround.esy.es/markers/belarus.png';

papername[65] = 'Rezh, Russia';
papertitle[65] = 'Режевская весть';
papernumber1[65] = '1';
papernumber2[65] = '11407';
paperdate[65] = 'January 6, 2016';
paperlang[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[65] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[65] = new google.maps.LatLng(57.3665107,61.3995949);
paperlink[65] = '';
iconimage[65] = 'http://papersaround.esy.es/markers/russia.png';

papername[66] = 'Amsterdam, Netherlands';
papertitle[66] = 'Frankfurter Allgemeine Zeitung';
papernumber1[66] = '46';
papernumber2[66] = '56112';
paperdate[66] = 'December 6, 2015';
paperlang[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[66] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[66] = new google.maps.LatLng(52.3720476,4.8956366);
paperlink[66] = '';
iconimage[66] = 'http://papersaround.esy.es/markers/netherlands.png';

papername[67] = 'Pretoria, South Africa';
papertitle[67] = 'Pretoria News';
papernumber1[67] = '';
papernumber2[67] = '';
paperdate[67] = 'December 8, 2015';
paperlang[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[67] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[67] = new google.maps.LatLng(-25.7474779,28.2171204);
paperlink[67] = '';
iconimage[67] = 'http://papersaround.esy.es/markers/south africa.png';

papername[68] = 'Dubai, United Arab Emirates';
papertitle[68] = 'Khaleej Times';
papernumber1[68] = '235';
papernumber2[68] = 'XXXVII';
paperdate[68] = 'December 6, 2015';
paperlang[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[68] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[68] = new google.maps.LatLng(25.1797924,55.2487384);
paperlink[68] = '';
iconimage[68] = 'http://papersaround.esy.es/markers/united arab emirates.png';

papername[69] = 'Pretoria, South Africa';
papertitle[69] = 'makro';
papernumber1[69] = '';
papernumber2[69] = '';
paperdate[69] = 'December 8, 2015';
paperlang[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[69] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[69] = new google.maps.LatLng(-25.7480587,28.2296332);
paperlink[69] = '';
iconimage[69] = 'http://papersaround.esy.es/markers/south africa.png';

papername[70] = 'Dubai, United Arab Emirates';
papertitle[70] = 'FT Weekend';
papernumber1[70] = '';
papernumber2[70] = '';
paperdate[70] = 'December 5, 2015';
paperlang[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[70] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vadim%20Krushinskiy">Vadim Krushinskiy</a>';
paperland[70] = new google.maps.LatLng(25.2045486,55.2698986);
paperlink[70] = '';
iconimage[70] = 'http://papersaround.esy.es/markers/united arab emirates.png';

papername[71] = 'Baikonur, Russia';
papertitle[71] = 'Байконур';
papernumber1[71] = '49';
papernumber2[71] = '983';
paperdate[71] = 'December 11, 2015';
paperlang[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[71] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[71] = new google.maps.LatLng(45.6172063,63.3153974);
paperlink[71] = '';
iconimage[71] = 'http://papersaround.esy.es/markers/russia.png';

papername[72] = 'Aktobe, Kazakhstan';
papertitle[72] = 'Әйел денсаулығы';
papernumber1[72] = '23';
papernumber2[72] = '107';
paperdate[72] = 'January 1, 2015';
paperlang[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Kazakh">Kazakh</a>';
papersender[72] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[72] = new google.maps.LatLng(50.289689,57.1979147);
paperlink[72] = '';
iconimage[72] = 'http://papersaround.esy.es/markers/kazakhstan.png';

papername[73] = 'Aktobe, Kazakhstan';
papertitle[73] = 'Актобе Таймс';
papernumber1[73] = '49';
papernumber2[73] = '467';
paperdate[73] = 'December 10, 2015';
paperlang[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[73] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[73] = new google.maps.LatLng(50.2882876,57.1746235);
paperlink[73] = '';
iconimage[73] = 'http://papersaround.esy.es/markers/kazakhstan.png';

papername[74] = 'Khanty-Mansiysk, Russia';
papertitle[74] = 'Хӑтӆые';
papernumber1[74] = '5';
papernumber2[74] = '5';
paperdate[74] = 'December 1, 2015';
paperlang[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[74] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[74] = new google.maps.LatLng(61.0017033,69.0063562);
paperlink[74] = '';
iconimage[74] = 'http://papersaround.esy.es/markers/russia.png';

papername[75] = 'Lyantor, Russia';
papertitle[75] = 'Айкӧӆ';
papernumber1[75] = '1';
papernumber2[75] = '7';
paperdate[75] = 'November 23, 2015';
paperlang[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[75] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[75] = new google.maps.LatLng(61.622089,72.1629074);
paperlink[75] = '';
iconimage[75] = 'http://papersaround.esy.es/markers/russia.png';

papername[76] = 'Khanty-Mansiysk, Russia';
papertitle[76] = 'Лӯимā сэ̄рипос';
papernumber1[76] = '23';
papernumber2[76] = '1113';
paperdate[76] = 'December 4, 2015';
paperlang[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Mansi">Mansi</a>';
papersender[76] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[76] = new google.maps.LatLng(61.0011615,69.0169018);
paperlink[76] = '';
iconimage[76] = 'http://papersaround.esy.es/markers/russia.png';

papername[77] = 'Khanty-Mansiysk, Russia';
papertitle[77] = 'Хӑнты ясӑӈ';
papernumber1[77] = '23';
papernumber2[77] = '3443';
paperdate[77] = 'December 4, 2015';
paperlang[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Khanty">Khanty</a>';
papersender[77] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ivan%20Ruzanov">Ivan Ruzanov</a>';
paperland[77] = new google.maps.LatLng(61.0022527,69.0322182);
paperlink[77] = '';
iconimage[77] = 'http://papersaround.esy.es/markers/russia.png';

papername[78] = 'Cairo, Egypt';
papertitle[78] = 'المصرى اليوم';
papernumber1[78] = '12';
papernumber2[78] = '4141';
paperdate[78] = 'October 16, 2015';
paperlang[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Arabic">Arabic</a>';
papersender[78] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[78] = new google.maps.LatLng(30.0444021,31.2355749);
paperlink[78] = '';
iconimage[78] = 'http://papersaround.esy.es/markers/egypt.png';

papername[79] = 'Pattaya, Thailand';
papertitle[79] = 'เดลินิวส์';
papernumber1[79] = '';
papernumber2[79] = '';
paperdate[79] = 'October 18, 2015';
paperlang[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Thai">Thai</a>';
papersender[79] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[79] = new google.maps.LatLng(12.9365794,100.8861822);
paperlink[79] = '';
iconimage[79] = 'http://papersaround.esy.es/markers/thailand.png';

papername[80] = 'Pattaya, Thailand';
papertitle[80] = 'Pattaya People';
papernumber1[80] = '518';
papernumber2[80] = '';
paperdate[80] = 'October 3, 2015';
paperlang[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[80] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[80] = new google.maps.LatLng(12.9274331,100.8769976);
paperlink[80] = '';
iconimage[80] = 'http://papersaround.esy.es/markers/thailand.png';

papername[81] = 'Ho Chi Minh City, Vietnam';
papertitle[81] = 'Giáo Dục & Thời Đại';
papernumber1[81] = '';
papernumber2[81] = '';
paperdate[81] = 'June 1, 2015';
paperlang[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[81] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[81] = new google.maps.LatLng(10.7676839,106.7053017);
paperlink[81] = '';
iconimage[81] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[82] = 'Garching, Germany';
papertitle[82] = 'Garchinger Rundschau';
papernumber1[82] = '9';
papernumber2[82] = '28';
paperdate[82] = 'August 28, 2015';
paperlang[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/German">German</a>';
papersender[82] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[82] = new google.maps.LatLng(48.2490905,11.6503644);
paperlink[82] = '';
iconimage[82] = 'http://papersaround.esy.es/markers/germany.png';

papername[83] = 'Sevastopol, Russia-Ukraine';
papertitle[83] = 'Фокстрот';
papernumber1[83] = '';
papernumber2[83] = '';
paperdate[83] = 'August 20, 2015';
paperlang[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[83] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[83] = new google.maps.LatLng(44.5752517,33.5192988);
paperlink[83] = '';
iconimage[83] = 'http://papersaround.esy.es/markers/russia-ukraine.png';

papername[84] = 'Feodosia, Russia-Ukraine';
papertitle[84] = 'Кафа';
papernumber1[84] = '57';
papernumber2[84] = '2715';
paperdate[84] = 'July 28, 2015';
paperlang[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[84] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[84] = new google.maps.LatLng(45.0255859,35.3849742);
paperlink[84] = '';
iconimage[84] = 'http://papersaround.esy.es/markers/russia-ukraine.png';

papername[85] = 'Irkutsk, Russia';
papertitle[85] = 'Восточно-сибирская правда';
papernumber1[85] = '30';
papernumber2[85] = '26784';
paperdate[85] = 'July 21, 2015';
paperlang[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[85] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Ovchinnikov">Aleksandr Ovchinnikov</a>';
paperland[85] = new google.maps.LatLng(52.2876784,104.2804561);
paperlink[85] = '';
iconimage[85] = 'http://papersaround.esy.es/markers/russia.png';

papername[86] = 'Paris, France';
papertitle[86] = 'Charlie Hebdo';
papernumber1[86] = '1208';
papernumber2[86] = '';
paperdate[86] = 'September 16, 2015';
paperlang[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[86] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[86] = new google.maps.LatLng(48.859269,2.3702184);
paperlink[86] = '';
iconimage[86] = 'http://papersaround.esy.es/markers/france.png';

papername[87] = 'Paris, France';
papertitle[87] = 'Le Figaro';
papernumber1[87] = '22113';
papernumber2[87] = '';
paperdate[87] = 'September 14, 2015';
paperlang[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[87] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[87] = new google.maps.LatLng(48.860229,2.3372792);
paperlink[87] = '';
iconimage[87] = 'http://papersaround.esy.es/markers/france.png';

papername[88] = 'Barcelona, Spain';
papertitle[88] = 'el Periódico de Catalunya';
papernumber1[88] = '';
papernumber2[88] = '';
paperdate[88] = 'September 18, 2015';
paperlang[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Spanish">Spanish</a>';
papersender[88] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[88] = new google.maps.LatLng(41.3853668,2.1855849);
paperlink[88] = '';
iconimage[88] = 'http://papersaround.esy.es/markers/spain.png';

papername[89] = 'Ufa, Russia';
papertitle[89] = 'Без – Бергэ';
papernumber1[89] = '9';
papernumber2[89] = '052';
paperdate[89] = 'September 1, 2015';
paperlang[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[89] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[89] = new google.maps.LatLng(54.7404122,55.9715826);
paperlink[89] = '';
iconimage[89] = 'http://papersaround.esy.es/markers/russia.png';

papername[90] = 'Ufa, Russia';
papertitle[90] = 'Диләфрүз';
papernumber1[90] = '9';
papernumber2[90] = '59';
paperdate[90] = 'September 1, 2015';
paperlang[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[90] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[90] = new google.maps.LatLng(54.7754973,56.0207834);
paperlink[90] = '';
iconimage[90] = 'http://papersaround.esy.es/markers/russia.png';

papername[91] = 'Belebey, Russia';
papertitle[91] = 'Модуль +';
papernumber1[91] = '35';
papernumber2[91] = '1164';
paperdate[91] = 'September 17, 2015';
paperlang[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[91] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[91] = new google.maps.LatLng(54.1087989,54.1054072);
paperlink[91] = '';
iconimage[91] = 'http://papersaround.esy.es/markers/russia.png';

papername[92] = 'Achit, Russia';
papertitle[92] = 'Наш путь';
papernumber1[92] = '35';
papernumber2[92] = '8226';
paperdate[92] = 'August 27, 2015';
paperlang[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[92] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[92] = new google.maps.LatLng(56.7955372,57.8934753);
paperlink[92] = '';
iconimage[92] = 'http://papersaround.esy.es/markers/russia.png';

papername[93] = 'Chișinău, Moldova';
papertitle[93] = 'Timpul';
papernumber1[93] = '31';
papernumber2[93] = '2115';
paperdate[93] = 'August 7, 2015';
paperlang[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Romanian">Romanian</a>';
papersender[93] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Inna">Inna</a>';
paperland[93] = new google.maps.LatLng(47.0236013,28.8334711);
paperlink[93] = '';
iconimage[93] = 'http://papersaround.esy.es/markers/moldova.png';

papername[94] = 'Sochi, Russia';
papertitle[94] = 'Черноморская Здравница';
papernumber1[94] = '67';
papernumber2[94] = '68';
paperdate[94] = 'June 16, 2015';
paperlang[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[94] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anonym">Anonym</a>';
paperland[94] = new google.maps.LatLng(43.5876867,39.7180229);
paperlink[94] = '';
iconimage[94] = 'http://papersaround.esy.es/markers/russia.png';

papername[95] = 'Beijing, China';
papertitle[95] = '人民日报海外版';
papernumber1[95] = '8';
papernumber2[95] = '9173';
paperdate[95] = 'August 5, 2014';
paperlang[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[95] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Klimova">Tatyana Klimova</a>';
paperland[95] = new google.maps.LatLng(39.9197637,116.4695696);
paperlink[95] = '';
iconimage[95] = 'http://papersaround.esy.es/markers/china.png';

papername[96] = 'Nha Trang, Vietnam';
papertitle[96] = 'Thanh Niên';
papernumber1[96] = '362';
papernumber2[96] = '6945';
paperdate[96] = 'December 28, 2014';
paperlang[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[96] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Svetlana%20Konstantinova">Svetlana Konstantinova</a>';
paperland[96] = new google.maps.LatLng(12.2574694,109.1699159);
paperlink[96] = '';
iconimage[96] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[97] = 'Nha Trang, Vietnam';
papertitle[97] = 'Maximark Giá Tốt';
papernumber1[97] = '';
papernumber2[97] = '';
paperdate[97] = 'May 1, 2015';
paperlang[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[97] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Svetlana%20Konstantinova">Svetlana Konstantinova</a>';
paperland[97] = new google.maps.LatLng(12.2749596,109.2000397);
paperlink[97] = '';
iconimage[97] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[98] = 'Nha Trang, Vietnam';
papertitle[98] = 'Thanh Niên';
papernumber1[98] = '154';
papernumber2[98] = '7102';
paperdate[98] = 'June 3, 2015';
paperlang[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Vietnamese">Vietnamese</a>';
papersender[98] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Natalya%20Kozlova">Natalya Kozlova</a>';
paperland[98] = new google.maps.LatLng(12.2393199,109.1910529);
paperlink[98] = '';
iconimage[98] = 'http://papersaround.esy.es/markers/vietnam.png';

papername[99] = 'Rome, Italy';
papertitle[99] = 'la Repubblica';
papernumber1[99] = '108';
papernumber2[99] = '';
paperdate[99] = 'May 8, 2015';
paperlang[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[99] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[99] = new google.maps.LatLng(41.8911414,12.4827292);
paperlink[99] = '';
iconimage[99] = 'http://papersaround.esy.es/markers/italy.png';

papername[100] = 'Florence, Italy';
papertitle[100] = 'Florence News & Events';
papernumber1[100] = '';
papernumber2[100] = '';
paperdate[100] = 'May 1, 2015';
paperlang[100] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[100] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[100] = new google.maps.LatLng(43.7780099,11.234595);
paperlink[100] = '';
iconimage[100] = 'http://papersaround.esy.es/markers/italy.png';

papername[101] = 'Venice, Italy';
papertitle[101] = 'la Nuova di Venezia e Mestre';
papernumber1[101] = '130';
papernumber2[101] = '';
paperdate[101] = 'May 13, 2015';
paperlang[101] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Italian">Italian</a>';
papersender[101] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[101] = new google.maps.LatLng(45.438453,12.3202342);
paperlink[101] = '';
iconimage[101] = 'http://papersaround.esy.es/markers/italy.png';

papername[102] = 'Helsinki, Finland';
papertitle[102] = 'Ilta-Sanomat';
papernumber1[102] = '101';
papernumber2[102] = '';
paperdate[102] = 'May 4, 2015';
paperlang[102] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Finnish">Finnish</a>';
papersender[102] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[102] = new google.maps.LatLng(60.1897427,24.9455899);
paperlink[102] = '';
iconimage[102] = 'http://papersaround.esy.es/markers/finland.png';

papername[103] = 'Helsinki, Finland';
papertitle[103] = 'Metro';
papernumber1[103] = '81';
papernumber2[103] = '';
paperdate[103] = 'May 4, 2015';
paperlang[103] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Finnish">Finnish</a>';
papersender[103] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[103] = new google.maps.LatLng(60.168871,24.9395335);
paperlink[103] = '';
iconimage[103] = 'http://papersaround.esy.es/markers/finland.png';

papername[104] = 'Bratislava, Slovakia';
papertitle[104] = 'Slovenské národné noviny';
papernumber1[104] = '18';
papernumber2[104] = '';
paperdate[104] = 'May 9, 2015';
paperlang[104] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Slovak">Slovak</a>';
papersender[104] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Evgeniya%20Telennaya">Evgeniya Telennaya</a>';
paperland[104] = new google.maps.LatLng(48.1329019,17.1116684);
paperlink[104] = '';
iconimage[104] = 'http://papersaround.esy.es/markers/slovakia.png';

papername[105] = 'Budapest, Hungary';
papertitle[105] = 'Reggel';
papernumber1[105] = '16';
papernumber2[105] = '';
paperdate[105] = 'May 3, 2015';
paperlang[105] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Hungarian">Hungarian</a>';
papersender[105] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[105] = new google.maps.LatLng(47.4915522,19.0661875);
paperlink[105] = '';
iconimage[105] = 'http://papersaround.esy.es/markers/hungary.png';

papername[106] = 'Ostrava, Czech Republic';
papertitle[106] = 'Hospodářské noviny';
papernumber1[106] = '';
papernumber2[106] = '';
paperdate[106] = 'April 30, 2015';
paperlang[106] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[106] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[106] = new google.maps.LatLng(49.7853537,18.2555906);
paperlink[106] = '';
iconimage[106] = 'http://papersaround.esy.es/markers/czech republic.png';

papername[107] = 'Prague, Czech Republic';
papertitle[107] = 'Pražský deník';
papernumber1[107] = '105';
papernumber2[107] = '';
paperdate[107] = 'May 6, 2015';
paperlang[107] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[107] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[107] = new google.maps.LatLng(50.0620153,14.4281528);
paperlink[107] = '';
iconimage[107] = 'http://papersaround.esy.es/markers/czech republic.png';

papername[108] = 'Istanbul, Turkey';
papertitle[108] = 'Вести Турции Босфор';
papernumber1[108] = '217';
papernumber2[108] = '';
paperdate[108] = 'April 16, 2015';
paperlang[108] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[108] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[108] = new google.maps.LatLng(40.9837732,28.8556887);
paperlink[108] = '';
iconimage[108] = 'http://papersaround.esy.es/markers/turkey.png';

papername[109] = 'Ostrava, Czech Republic';
papertitle[109] = 'Katolický týdeník';
papernumber1[109] = '18';
papernumber2[109] = '';
paperdate[109] = 'April 28, 2015';
paperlang[109] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[109] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[109] = new google.maps.LatLng(49.8042206,18.2481295);
paperlink[109] = '';
iconimage[109] = 'http://papersaround.esy.es/markers/czech republic.png';

papername[110] = 'Prague, Czech Republic';
papertitle[110] = 'Blesk';
papernumber1[110] = '104';
papernumber2[110] = '';
paperdate[110] = 'May 5, 2015';
paperlang[110] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Czech">Czech</a>';
papersender[110] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[110] = new google.maps.LatLng(50.0851064,14.4330941);
paperlink[110] = '';
iconimage[110] = 'http://papersaround.esy.es/markers/czech republic.png';

papername[111] = 'Istanbul, Turkey';
papertitle[111] = 'Sabah';
papernumber1[111] = '';
papernumber2[111] = '';
paperdate[111] = 'May 8, 2015';
paperlang[111] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Turkish">Turkish</a>';
papersender[111] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[111] = new google.maps.LatLng(41.0104383,28.9747573);
paperlink[111] = '';
iconimage[111] = 'http://papersaround.esy.es/markers/turkey.png';

papername[112] = 'Istanbul, Turkey';
papertitle[112] = '环球: Globe';
papernumber1[112] = '8';
papernumber2[112] = '618';
paperdate[112] = 'April 15, 2015';
paperlang[112] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[112] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[112] = new google.maps.LatLng(40.9820683,28.7954559);
paperlink[112] = '';
iconimage[112] = 'http://papersaround.esy.es/markers/turkey.png';

papername[113] = 'Zlatoust, Russia';
papertitle[113] = 'Правда города Златоуста';
papernumber1[113] = '2';
papernumber2[113] = '15';
paperdate[113] = 'April 1, 2015';
paperlang[113] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[113] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[113] = new google.maps.LatLng(55.1649723,59.6763696);
paperlink[113] = '';
iconimage[113] = 'http://papersaround.esy.es/markers/russia.png';

papername[114] = 'Chelyabinsk, Russia';
papertitle[114] = 'Вечерний Челябинск';
papernumber1[114] = '33';
papernumber2[114] = '11844';
paperdate[114] = 'April 30, 2015';
paperlang[114] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[114] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[114] = new google.maps.LatLng(55.154633,61.4035924);
paperlink[114] = '';
iconimage[114] = 'http://papersaround.esy.es/markers/russia.png';

papername[115] = 'Omsk, Russia';
papertitle[115] = 'Вечерний Омск';
papernumber1[115] = '12';
papernumber2[115] = '379';
paperdate[115] = 'March 25, 2015';
paperlang[115] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[115] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Anton%20Lyaptsev">Anton Lyaptsev</a>';
paperland[115] = new google.maps.LatLng(54.9858759,73.3561389);
paperlink[115] = '';
iconimage[115] = 'http://papersaround.esy.es/markers/russia.png';

papername[116] = 'Tomsk, Russia';
papertitle[116] = 'Красное знамя';
papernumber1[116] = '36';
papernumber2[116] = '27121';
paperdate[116] = 'March 17, 2015';
paperlang[116] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[116] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maria%20Loginova">Maria Loginova</a>';
paperland[116] = new google.maps.LatLng(56.4895329,85.0086309);
paperlink[116] = '';
iconimage[116] = 'http://papersaround.esy.es/markers/russia.png';

papername[117] = 'Veliky Novgorod, Russia';
papertitle[117] = 'Волховъ';
papernumber1[117] = '10';
papernumber2[117] = '657';
paperdate[117] = 'March 10, 2015';
paperlang[117] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[117] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[117] = new google.maps.LatLng(58.5561955,31.3124346);
paperlink[117] = '';
iconimage[117] = 'http://papersaround.esy.es/markers/russia.png';

papername[118] = 'Vyborg, Russia';
papertitle[118] = 'Выборг';
papernumber1[118] = '30';
papernumber2[118] = '17385';
paperdate[118] = 'March 6, 2015';
paperlang[118] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[118] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[118] = new google.maps.LatLng(60.712888,28.7521123);
paperlink[118] = '';
iconimage[118] = 'http://papersaround.esy.es/markers/russia.png';

papername[119] = 'Saint Petersburg, Russia';
papertitle[119] = 'Санкт-Петербургские ведомости';
papernumber1[119] = '40';
papernumber2[119] = '5413';
paperdate[119] = 'March 10, 2015';
paperlang[119] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[119] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[119] = new google.maps.LatLng(59.9174455,30.3250575);
paperlink[119] = '';
iconimage[119] = 'http://papersaround.esy.es/markers/russia.png';

papername[120] = 'Funchal, Portugal';
papertitle[120] = 'Diário de Notícias da Madeira';
papernumber1[120] = '139';
papernumber2[120] = '45462';
paperdate[120] = 'February 21, 2015';
paperlang[120] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Portuguese">Portuguese</a>';
papersender[120] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Safarov">Ilya Safarov</a>';
paperland[120] = new google.maps.LatLng(32.6600438,-16.9246706);
paperlink[120] = '';
iconimage[120] = 'http://papersaround.esy.es/markers/portugal.png';

papername[121] = 'Lisbon, Portugal';
papertitle[121] = 'O Benfica';
papernumber1[121] = 'LXXII';
papernumber2[121] = '3692';
paperdate[121] = 'January 30, 2015';
paperlang[121] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Portuguese">Portuguese</a>';
papersender[121] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Hamov">Ilya Hamov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Safarov">Ilya Safarov</a>';
paperland[121] = new google.maps.LatLng(38.7436266,-9.1602037);
paperlink[121] = 'http://www.papersaround.com/2016/02/lisbon-portugal_7.html';
iconimage[121] = 'http://papersaround.esy.es/markers/portugal.png';

papername[122] = 'Verkh-Neyvinsky, Russia';
papertitle[122] = 'Новоуральская газета';
papernumber1[122] = '8';
papernumber2[122] = '163';
paperdate[122] = 'February 25, 2015';
paperlang[122] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[122] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[122] = new google.maps.LatLng(57.2672737,60.1311363);
paperlink[122] = '';
iconimage[122] = 'http://papersaround.esy.es/markers/russia.png';

papername[123] = 'Kyoto, Japan';
papertitle[123] = '日本経済新聞';
papernumber1[123] = '';
papernumber2[123] = '';
paperdate[123] = 'December 9, 2014';
paperlang[123] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Japanese">Japanese</a>';
papersender[123] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Nadin%20Bizarre">Nadin Bizarre</a>';
paperland[123] = new google.maps.LatLng(35.0061,135.76095);
paperlink[123] = '';
iconimage[123] = 'http://papersaround.esy.es/markers/japan.png';

papername[124] = 'Tarko-Sale, Russia';
papertitle[124] = 'Северный луч';
papernumber1[124] = '46';
papernumber2[124] = '3548';
paperdate[124] = 'November 14, 2014';
paperlang[124] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[124] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[124] = new google.maps.LatLng(64.9209215,77.7815207);
paperlink[124] = '';
iconimage[124] = 'http://papersaround.esy.es/markers/russia.png';

papername[125] = 'Belgrade, Serbia';
papertitle[125] = 'Вечерње новости';
papernumber1[125] = '';
papernumber2[125] = '';
paperdate[125] = 'November 2, 2014';
paperlang[125] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Serbian">Serbian</a>';
papersender[125] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Kulakova">Yekaterina Kulakova</a>';
paperland[125] = new google.maps.LatLng(44.8152453,20.4203223);
paperlink[125] = '';
iconimage[125] = 'http://papersaround.esy.es/markers/serbia.png';

papername[126] = 'Kachkanar, Russia';
papertitle[126] = 'Качканарский рабочий';
papernumber1[126] = '43';
papernumber2[126] = '5733';
paperdate[126] = 'October 29, 2014';
paperlang[126] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[126] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[126] = new google.maps.LatLng(58.7020961,59.493071);
paperlink[126] = '';
iconimage[126] = 'http://papersaround.esy.es/markers/russia.png';

papername[127] = 'Tyumen, Russia';
papertitle[127] = 'Тюменский курьер';
papernumber1[127] = '109';
papernumber2[127] = '3854';
paperdate[127] = 'June 25, 2014';
paperlang[127] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[127] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[127] = new google.maps.LatLng(57.1640403,65.5437285);
paperlink[127] = 'http://papersaround.blogspot.com/2015/06/tyumen-russia_16.html';
iconimage[127] = 'http://papersaround.esy.es/markers/russia.png';

papername[128] = 'Kislovodsk, Russia';
papertitle[128] = 'Кисловодская газета';
papernumber1[128] = '40';
papernumber2[128] = '198';
paperdate[128] = 'October 1, 2014';
paperlang[128] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[128] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[128] = new google.maps.LatLng(43.90885,42.7312501);
paperlink[128] = '';
iconimage[128] = 'http://papersaround.esy.es/markers/russia.png';

papername[129] = 'Sevastopol, Russia-Ukraine';
papertitle[129] = 'Севастопольская правда';
papernumber1[129] = '33';
papernumber2[129] = '1019';
paperdate[129] = 'September 27, 2014';
paperlang[129] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[129] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Olga%20Kvashnina">Olga Kvashnina</a>';
paperland[129] = new google.maps.LatLng(44.6155767,33.5236891);
paperlink[129] = '';
iconimage[129] = 'http://papersaround.esy.es/markers/russia-ukraine.png';

papername[130] = 'Noyabrsk, Russia';
papertitle[130] = 'Слово нефтяника';
papernumber1[130] = '37';
papernumber2[130] = '';
paperdate[130] = 'September 12, 2014';
paperlang[130] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[130] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[130] = new google.maps.LatLng(63.2058728,75.434249);
paperlink[130] = 'http://papersaround.blogspot.com/2015/04/noyabrsk-russia_28.html';
iconimage[130] = 'http://papersaround.esy.es/markers/russia.png';

papername[131] = 'Salekhard, Russia';
papertitle[131] = 'Красный Север';
papernumber1[131] = '72';
papernumber2[131] = '15901';
paperdate[131] = 'September 13, 2014';
paperlang[131] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[131] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[131] = new google.maps.LatLng(66.5580064,66.6051276);
paperlink[131] = 'http://papersaround.blogspot.com/2015/02/salekhard-russia.html';
iconimage[131] = 'http://papersaround.esy.es/markers/russia.png';

papername[132] = 'Hurghada, Egypt';
papertitle[132] = 'الجمهورية‎';
papernumber1[132] = '';
papernumber2[132] = '';
paperdate[132] = 'August 21, 2014';
paperlang[132] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Arabic">Arabic</a>';
papersender[132] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Denis%20Dirbenov">Denis Dirbenov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatyana%20Shvetsova">Tatyana Shvetsova</a>';
paperland[132] = new google.maps.LatLng(27.1925045,33.7817104);
paperlink[132] = 'http://papersaround.blogspot.com/2014/12/hurghada-egypt.html';
iconimage[132] = 'http://papersaround.esy.es/markers/egypt.png';

papername[133] = 'Rudniy, Kazakhstan';
papertitle[133] = 'Рудненский рабочий';
papernumber1[133] = '27';
papernumber2[133] = '10038';
paperdate[133] = 'April 15, 2014';
paperlang[133] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[133] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[133] = new google.maps.LatLng(52.956417,63.1170431);
paperlink[133] = 'http://papersaround.blogspot.com/2015/06/rudniy-kazakhstan.html';
iconimage[133] = 'http://papersaround.esy.es/markers/kazakhstan.png';

papername[134] = 'Rudniy, Kazakhstan';
papertitle[134] = 'Рудненский рабочий';
papernumber1[134] = '1';
papernumber2[134] = '9916';
paperdate[134] = 'January 4, 2013';
paperlang[134] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[134] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[134] = new google.maps.LatLng(52.9754864,63.1212187);
paperlink[134] = 'http://papersaround.blogspot.com/2015/06/rudniy-kazakhstan_15.html';
iconimage[134] = 'http://papersaround.esy.es/markers/kazakhstan.png';

papername[135] = 'Kostanay, Kazakhstan';
papertitle[135] = 'Костанайские новости';
papernumber1[135] = '26';
papernumber2[135] = '22288';
paperdate[135] = 'February 20, 2014';
paperlang[135] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[135] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksey%20Gavrilov">Aleksey Gavrilov</a>';
paperland[135] = new google.maps.LatLng(53.2054508,63.6218262);
paperlink[135] = 'http://papersaround.blogspot.com/2014/02/kostanay-kazakhstan.html';
iconimage[135] = 'http://papersaround.esy.es/markers/kazakhstan.png';

papername[136] = 'Noyabrsk, Russia';
papertitle[136] = 'Северная вахта';
papernumber1[136] = '130';
papernumber2[136] = '5674';
paperdate[136] = 'July 24, 2014';
paperlang[136] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[136] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[136] = new google.maps.LatLng(63.1766945,75.4471666);
paperlink[136] = 'http://papersaround.blogspot.com/2014/07/noyabrsk-russia.html';
iconimage[136] = 'http://papersaround.esy.es/markers/russia.png';

papername[137] = 'Reykjavik, Iceland';
papertitle[137] = 'Bændablaðið';
papernumber1[137] = '14';
papernumber2[137] = '';
paperdate[137] = 'July 17, 2014';
paperlang[137] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Icelandic">Icelandic</a>';
papersender[137] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Evgeniya%20Telennaya">Evgeniya Telennaya</a>';
paperland[137] = new google.maps.LatLng(64.1418046,-21.9255569);
paperlink[137] = 'http://papersaround.blogspot.com/2014/12/reykjavik-iceland.html';
iconimage[137] = 'http://papersaround.esy.es/markers/iceland.png';

papername[138] = 'Reykjavik, Iceland';
papertitle[138] = 'Fréttatíminn';
papernumber1[138] = '30';
papernumber2[138] = '';
paperdate[138] = 'July 25, 2014';
paperlang[138] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Icelandic">Icelandic</a>';
papersender[138] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Evgeniya%20Telennaya">Evgeniya Telennaya</a>';
paperland[138] = new google.maps.LatLng(64.132442,-21.8569031);
paperlink[138] = 'http://papersaround.blogspot.com/2014/12/reykjavik-iceland_26.html';
iconimage[138] = 'http://papersaround.esy.es/markers/iceland.png';

papername[139] = 'Kyzyl, Russia';
papertitle[139] = 'Шын';
papernumber1[139] = '94';
papernumber2[139] = '18521';
paperdate[139] = 'August 5, 2014';
paperlang[139] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tuvan">Tuvan</a>';
papersender[139] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[139] = new google.maps.LatLng(51.7203982,94.4376542);
paperlink[139] = 'http://papersaround.blogspot.com/2014/12/kyzyl-russia.html';
iconimage[139] = 'http://papersaround.esy.es/markers/russia.png';

papername[140] = 'Kyzyl, Russia';
papertitle[140] = 'Тувинская правда';
papernumber1[140] = '85';
papernumber2[140] = '17544';
paperdate[140] = 'August 5, 2014';
paperlang[140] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[140] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Klimova">Yekaterina Klimova</a>';
paperland[140] = new google.maps.LatLng(51.6914035,94.4631245);
paperlink[140] = 'http://papersaround.blogspot.com/2015/06/kyzyl-russia.html';
iconimage[140] = 'http://papersaround.esy.es/markers/russia.png';

papername[141] = 'Surgut, Russia';
papertitle[141] = 'Новый город';
papernumber1[141] = '31';
papernumber2[141] = '4437';
paperdate[141] = 'July 25, 2014';
paperlang[141] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[141] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[141] = new google.maps.LatLng(61.283857,73.382317);
paperlink[141] = 'http://papersaround.blogspot.com/2015/01/surgut-russia.html';
iconimage[141] = 'http://papersaround.esy.es/markers/russia.png';

papername[142] = 'Tobolsk, Russia';
papertitle[142] = 'Тобольск-Содействие';
papernumber1[142] = '31';
papernumber2[142] = '975';
paperdate[142] = 'July 28, 2014';
paperlang[142] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[142] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[142] = new google.maps.LatLng(58.2283625,68.257907);
paperlink[142] = 'http://papersaround.blogspot.com/2014/07/tobolsk-russia.html';
iconimage[142] = 'http://papersaround.esy.es/markers/russia.png';

papername[143] = 'Limassol, Cyprus';
papertitle[143] = 'Вестник Кипра';
papernumber1[143] = '980';
papernumber2[143] = '';
paperdate[143] = 'July 11, 2014';
paperlang[143] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[143] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[143] = new google.maps.LatLng(34.6917392,33.0284847);
paperlink[143] = '';
iconimage[143] = 'http://papersaround.esy.es/markers/cyprus.png';

papername[144] = 'Paphos, Cyprus';
papertitle[144] = 'Paphos Post';
papernumber1[144] = '109';
papernumber2[144] = '';
paperdate[144] = 'July 1, 2014';
paperlang[144] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[144] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[144] = new google.maps.LatLng(34.7726959,32.4332804);
paperlink[144] = 'http://papersaround.blogspot.com/2014/11/paphos-cyprus.html';
iconimage[144] = 'http://papersaround.esy.es/markers/cyprus.png';

papername[145] = 'Paralimni, Cyprus';
papertitle[145] = 'η σημερίνη';
papernumber1[145] = '';
papernumber2[145] = '';
paperdate[145] = 'July 9, 2014';
paperlang[145] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Greek">Greek</a>';
papersender[145] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[145] = new google.maps.LatLng(35.0358805,33.9961677);
paperlink[145] = 'http://papersaround.blogspot.com/2014/07/paralimni-cyprus.html';
iconimage[145] = 'http://papersaround.esy.es/markers/cyprus.png';

papername[146] = 'Tyumen, Russia';
papertitle[146] = 'Спортивный меридиан';
papernumber1[146] = '24';
papernumber2[146] = '719';
paperdate[146] = 'June 25, 2014';
paperlang[146] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[146] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Irina%20Ovodova">Irina Ovodova</a>';
paperland[146] = new google.maps.LatLng(57.1521389,65.5392108);
paperlink[146] = 'http://papersaround.blogspot.com/2015/06/tyumen-russia.html';
iconimage[146] = 'http://papersaround.esy.es/markers/russia.png';

papername[147] = 'Cancún, Mexico';
papertitle[147] = '¡Hola!';
papernumber1[147] = '377';
papernumber2[147] = '';
paperdate[147] = 'March 26, 2014';
paperlang[147] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Spanish">Spanish</a>';
papersender[147] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[147] = new google.maps.LatLng(21.122083,-86.8273416);
paperlink[147] = '';
iconimage[147] = 'http://papersaround.esy.es/markers/mexico.png';

papername[148] = 'Yekaterinburg, Russia';
papertitle[148] = 'Your Yekaterinburg';
papernumber1[148] = '14';
papernumber2[148] = '14';
paperdate[148] = 'July 1, 2012';
paperlang[148] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/English">English</a>';
papersender[148] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[148] = new google.maps.LatLng(56.8449605,60.6144394);
paperlink[148] = 'http://papersaround.blogspot.com/2014/12/yekaterinburg-russia.html';
iconimage[148] = 'http://papersaround.esy.es/markers/russia.png';

papername[149] = 'Degtyarsk, Russia';
papertitle[149] = 'Вести Дегтярска';
papernumber1[149] = '20';
papernumber2[149] = '55';
paperdate[149] = 'May 21, 2014';
paperlang[149] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[149] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Lyubov%20Konstantinova">Lyubov Konstantinova</a>';
paperland[149] = new google.maps.LatLng(56.6981045,60.0960399);
paperlink[149] = 'http://papersaround.blogspot.com/2015/06/degtyarsk-russia.html';
iconimage[149] = 'http://papersaround.esy.es/markers/russia.png';

papername[150] = 'Rostov-on-Don, Russia';
papertitle[150] = 'Вечерний Ростов';
papernumber1[150] = '105-106';
papernumber2[150] = '16110-16111';
paperdate[150] = 'May 30, 2014';
paperlang[150] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[150] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[150] = new google.maps.LatLng(47.2190173,39.7164414);
paperlink[150] = 'http://papersaround.blogspot.com/2015/06/rostov-on-don-russia.html';
iconimage[150] = 'http://papersaround.esy.es/markers/russia.png';

papername[151] = 'Copenhagen, Denmark';
papertitle[151] = 'Børsen';
papernumber1[151] = '81';
papernumber2[151] = '';
paperdate[151] = 'April 29, 2014';
paperlang[151] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[151] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[151] = new google.maps.LatLng(55.674566,12.5748316);
paperlink[151] = 'http://papersaround.blogspot.com/2014/04/copenhagen-denmark-2.html';
iconimage[151] = 'http://papersaround.esy.es/markers/denmark.png';

papername[152] = 'Copenhagen, Denmark';
papertitle[152] = 'Metroxpress';
papernumber1[152] = '';
papernumber2[152] = '';
paperdate[152] = 'April 29, 2014';
paperlang[152] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Danish">Danish</a>';
papersender[152] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Avvakumova">Yekaterina Avvakumova</a>';
paperland[152] = new google.maps.LatLng(55.6712674,12.5608388);
paperlink[152] = 'http://papersaround.blogspot.com/2014/04/copenhagen-denmark.html';
iconimage[152] = 'http://papersaround.esy.es/markers/denmark.png';

papername[153] = 'Kazan, Russia';
papertitle[153] = 'Ватаным Татарстан';
papernumber1[153] = '62';
papernumber2[153] = '27268';
paperdate[153] = 'April 29, 2014';
paperlang[153] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Tatar">Tatar</a>';
papersender[153] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[153] = new google.maps.LatLng(55.7976826,49.1044474);
paperlink[153] = 'http://papersaround.blogspot.com/2014/04/kazan-russia.html';
iconimage[153] = 'http://papersaround.esy.es/markers/russia.png';

papername[154] = 'Shanghai, China';
papertitle[154] = '环球时报';
papernumber1[154] = '3279';
papernumber2[154] = '';
paperdate[154] = 'March 28, 2014';
paperlang[154] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[154] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Ilya%20Smolyakov">Ilya Smolyakov</a>';
paperland[154] = new google.maps.LatLng(31.2243489,121.4767528);
paperlink[154] = 'http://papersaround.blogspot.com/2014/12/shanghai-china.html';
iconimage[154] = 'http://papersaround.esy.es/markers/china.png';

papername[155] = 'Kazan, Russia';
papertitle[155] = 'Республика Татарстан';
papernumber1[155] = '64';
papernumber2[155] = '27678';
paperdate[155] = 'April 30, 2014';
paperlang[155] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[155] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[155] = new google.maps.LatLng(55.7955015,49.073303);
paperlink[155] = 'http://papersaround.blogspot.com/2015/06/kazan-russia_12.html';
iconimage[155] = 'http://papersaround.esy.es/markers/russia.png';

papername[156] = 'Perm, Russia';
papertitle[156] = 'Звезда';
papernumber1[156] = '85';
papernumber2[156] = '32101';
paperdate[156] = 'August 2, 2013';
paperlang[156] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[156] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[156] = new google.maps.LatLng(58.0140056,56.2491115);
paperlink[156] = 'http://papersaround.blogspot.com/2013/08/perm-russia.html';
iconimage[156] = 'http://papersaround.esy.es/markers/russia.png';

papername[157] = 'Yekaterinburg, Russia';
papertitle[157] = 'Вечерний Екатеринбург';
papernumber1[157] = '44';
papernumber2[157] = '15940';
paperdate[157] = 'April 13, 2014';
paperlang[157] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[157] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>';
paperland[157] = new google.maps.LatLng(56.813891,60.6549335);
paperlink[157] = 'http://papersaround.blogspot.com/2014/04/yekaterinburg-russia.html';
iconimage[157] = 'http://papersaround.esy.es/markers/russia.png';

papername[158] = 'Balashov, Russia';
papertitle[158] = 'Весь Балашов';
papernumber1[158] = '31';
papernumber2[158] = '249';
paperdate[158] = 'August 14, 2013';
paperlang[158] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[158] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[158] = new google.maps.LatLng(51.54481,43.1926455);
paperlink[158] = 'http://papersaround.blogspot.com/2015/01/balashov-russia.html';
iconimage[158] = 'http://papersaround.esy.es/markers/russia.png';

papername[159] = 'Penza, Russia';
papertitle[159] = 'Пензенская правда';
papernumber1[159] = '61';
papernumber2[159] = '24297';
paperdate[159] = 'August 16, 2013';
paperlang[159] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[159] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[159] = new google.maps.LatLng(53.195153,45.0306203);
paperlink[159] = 'http://papersaround.blogspot.com/2015/02/penza-russia.html';
iconimage[159] = 'http://papersaround.esy.es/markers/russia.png';

papername[160] = 'Rostov-on-Don, Russia';
papertitle[160] = 'Газета Дона';
papernumber1[160] = '33';
papernumber2[160] = '765';
paperdate[160] = 'August 13, 2013';
paperlang[160] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[160] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[160] = new google.maps.LatLng(47.2610085,39.6279999);
paperlink[160] = 'http://papersaround.blogspot.com/2015/02/rostov-on-don-russia.html';
iconimage[160] = 'http://papersaround.esy.es/markers/russia.png';

papername[161] = 'Tuapse, Russia';
papertitle[161] = 'Мой Туапсе';
papernumber1[161] = '33';
papernumber2[161] = '771';
paperdate[161] = 'August 22, 2013';
paperlang[161] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[161] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[161] = new google.maps.LatLng(44.1018987,39.078565);
paperlink[161] = 'http://papersaround.blogspot.com/2015/04/tuapse-russia_54.html';
iconimage[161] = 'http://papersaround.esy.es/markers/russia.png';

papername[162] = 'Gelendzhik, Russia';
papertitle[162] = 'Маяк Геленджика';
papernumber1[162] = '33';
papernumber2[162] = '83';
paperdate[162] = 'August 21, 2013';
paperlang[162] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[162] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[162] = new google.maps.LatLng(44.576569,38.0535916);
paperlink[162] = '';
iconimage[162] = 'http://papersaround.esy.es/markers/russia.png';

papername[163] = 'Krasnodar, Russia';
papertitle[163] = 'Краснодарские известия';
papernumber1[163] = '127';
papernumber2[163] = '5130';
paperdate[163] = 'August 23, 2013';
paperlang[163] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[163] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[163] = new google.maps.LatLng(45.053548,39.01605);
paperlink[163] = 'http://papersaround.blogspot.com/2013/08/krasnodar-russia.html';
iconimage[163] = 'http://papersaround.esy.es/markers/russia.png';

papername[164] = 'Anapa, Russia';
papertitle[164] = 'Черноморка';
papernumber1[164] = '68';
papernumber2[164] = '1261';
paperdate[164] = 'August 28, 2013';
paperlang[164] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[164] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Dmitry%20Lukashevich">Dmitry Lukashevich</a>';
paperland[164] = new google.maps.LatLng(44.9237242,37.3146554);
paperlink[164] = 'http://papersaround.blogspot.com/2015/06/anapa-russia_12.html';
iconimage[164] = 'http://papersaround.esy.es/markers/russia.png';

papername[165] = 'Verkhoturye, Russia';
papertitle[165] = 'Православная газета Екатеринбург';
papernumber1[165] = '40';
papernumber2[165] = '697';
paperdate[165] = 'October 1, 2012';
paperlang[165] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[165] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[165] = new google.maps.LatLng(58.8765859,60.7536827);
paperlink[165] = 'http://papersaround.blogspot.com/2015/06/verkhoturye-russia.html';
iconimage[165] = 'http://papersaround.esy.es/markers/russia.png';

papername[166] = 'Ivdel, Russia';
papertitle[166] = 'ВГ';
papernumber1[166] = '34';
papernumber2[166] = '1000';
paperdate[166] = 'August 21, 2013';
paperlang[166] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[166] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>, <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a> and <a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Yekaterina%20Gladysheva">Yekaterina Gladysheva</a>';
paperland[166] = new google.maps.LatLng(60.6911365,60.4357734);
paperlink[166] = 'http://papersaround.blogspot.com/2015/06/ivdel-russia.html';
iconimage[166] = 'http://papersaround.esy.es/markers/russia.png';

papername[167] = 'Samara, Russia';
papertitle[167] = 'Самарские известия';
papernumber1[167] = '170';
papernumber2[167] = '6599';
paperdate[167] = 'September 20, 2013';
paperlang[167] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[167] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[167] = new google.maps.LatLng(53.260908,50.198077);
paperlink[167] = 'http://papersaround.blogspot.com/2015/02/samara-russia.html';
iconimage[167] = 'http://papersaround.esy.es/markers/russia.png';

papername[168] = 'Vladimir, Russia';
papertitle[168] = 'Хронометр Владимир';
papernumber1[168] = '47';
papernumber2[168] = '740';
paperdate[168] = 'November 19, 2013';
paperlang[168] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[168] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[168] = new google.maps.LatLng(56.1376615,40.4134805);
paperlink[168] = 'http://papersaround.blogspot.com/2015/05/vladimir-russia.html';
iconimage[168] = 'http://papersaround.esy.es/markers/russia.png';

papername[169] = 'Tyumen, Russia';
papertitle[169] = 'Тюменская правда';
papernumber1[169] = '20';
papernumber2[169] = '19166';
paperdate[169] = 'February 6, 2014';
paperlang[169] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[169] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[169] = new google.maps.LatLng(57.174086,65.5719995);
paperlink[169] = 'http://papersaround.blogspot.com/2015/05/tyumen-russia.html';
iconimage[169] = 'http://papersaround.esy.es/markers/russia.png';

papername[170] = 'Izhevsk, Russia';
papertitle[170] = 'Удмуртская правда';
papernumber1[170] = '22';
papernumber2[170] = '25173';
paperdate[170] = 'February 26, 2014';
paperlang[170] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[170] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[170] = new google.maps.LatLng(56.8638095,53.2281006);
paperlink[170] = 'http://papersaround.blogspot.com/2015/06/izhevsk-russia.html';
iconimage[170] = 'http://papersaround.esy.es/markers/russia.png';

papername[171] = 'Kamyshlov, Russia';
papertitle[171] = 'Камышловские известия';
papernumber1[171] = '15';
papernumber2[171] = '13612';
paperdate[171] = 'February 11, 2014';
paperlang[171] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[171] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Alvira%20Kvashnina">Alvira Kvashnina</a>';
paperland[171] = new google.maps.LatLng(56.848974,62.7103416);
paperlink[171] = 'http://papersaround.blogspot.com/2015/06/kamyshlov-russia.html';
iconimage[171] = 'http://papersaround.esy.es/markers/russia.png';

papername[172] = 'Perm, Russia';
papertitle[172] = 'Звезда';
papernumber1[172] = '82';
papernumber2[172] = '32098';
paperdate[172] = 'July 26, 2013';
paperlang[172] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[172] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Tuhbatov">Maxim Tuhbatov</a>';
paperland[172] = new google.maps.LatLng(58.020486,56.2342755);
paperlink[172] = 'http://papersaround.blogspot.com/2013/07/perm-russia.html';
iconimage[172] = 'http://papersaround.esy.es/markers/russia.png';

papername[173] = 'Moscow, Russia';
papertitle[173] = 'Вечерняя Москва';
papernumber1[173] = '222';
papernumber2[173] = '26573';
paperdate[173] = 'December 2, 2013';
paperlang[173] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Russian">Russian</a>';
papersender[173] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandr%20Konstantinov">Aleksandr Konstantinov</a>';
paperland[173] = new google.maps.LatLng(55.749792,37.632495);
paperlink[173] = 'http://papersaround.blogspot.com/2015/06/moscow-russia.html';
iconimage[173] = 'http://papersaround.esy.es/markers/russia.png';

papername[174] = 'Nice, France';
papertitle[174] = 'Le Courrier de Russie';
papernumber1[174] = '251';
papernumber2[174] = '';
paperdate[174] = 'February 7, 2014';
paperlang[174] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/French">French</a>';
papersender[174] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Maxim%20Neradovsky">Maxim Neradovsky</a>';
paperland[174] = new google.maps.LatLng(43.7031905,7.252817);
paperlink[174] = 'http://papersaround.blogspot.com/2014/02/nice-france.html';
iconimage[174] = 'http://papersaround.esy.es/markers/france.png';

papername[175] = 'Tokyo, Japan';
papertitle[175] = '産経新聞';
papernumber1[175] = '13371';
papernumber2[175] = '';
paperdate[175] = 'July 31, 2013';
paperlang[175] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Japanese">Japanese</a>';
papersender[175] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Valentin%20Tetyorkin">Valentin Tetyorkin</a>';
paperland[175] = new google.maps.LatLng(35.673343,139.710388);
paperlink[175] = 'http://papersaround.blogspot.com/2013/07/tokyo-japan.html';
iconimage[175] = 'http://papersaround.esy.es/markers/japan.png';

papername[176] = 'Beijing, China';
papertitle[176] = '体坛周报';
papernumber1[176] = '';
papernumber2[176] = '';
paperdate[176] = 'January 13, 2012';
paperlang[176] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Chinese">Chinese</a>';
papersender[176] = '<a style="text-decoration: underline" href="http://papersaround.blogspot.com/search/label/Aleksandra%20Ovodova">Aleksandra Ovodova</a>';
paperland[176] = new google.maps.LatLng(39.9388838,116.3974589);
paperlink[176] = 'http://papersaround.blogspot.com/2012/01/beijing-china.html';
iconimage[176] = 'http://papersaround.esy.es/markers/china.png';

var N=177; //Общее число газет
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
