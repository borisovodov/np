"""Module for generate about page."""


def about():
    content = '<div dir="ltr" style="text-align: left;" trbidi="on">\n' \
              '    <p>This site is dedicated to newspapers, selected on the basis of geographic diversity ' \
              '(rather than by age or “all the newspapers with Justin&nbsp;Bieber”). ' \
              'You can see a <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/p/map.html">map</a> with marked cities from which brought ' \
              'the newspaper, and <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/p/statistic.html">statistics</a>, containing the most ' \
              'interesting information about these newspapers. I thank all the <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/p/senders.html">people</a> who send newspapers for this site, ' \
              'because only through them, there is the opportunity to work with many elements of culture ' \
              'of peoples from different parts of the globe. All sended newspapers are read with interest, carefully ' \
              'scanned, stored and exhibited for public viewing and inspiration.</p>\n' \
              '    <hr noshade style="margin-top: 30px; margin-bottom: 30px; color: black; ' \
              'background-color: black; height: 1px; border: none">\n' \
              '    <p>From the author:</p>\n' \
              '    <p>Hi, my name is <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/search/label/Boris%20Ovodov">Boris Ovodov</a>. I am a systems ' \
              'analyst from <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/search/label/Russia">Russia</a>, ' \
              '<a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/search/label/Yekaterinburg">Yekaterinburg</a> and, ' \
              'concurrently, leading this site. In the summer of 2013, my younger sister, ' \
              '<a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/search/label/Alexandra%20Ovodova">Alexandra</a>, at the post ' \
              'office saw a useless piece of <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/2012/01/beijing-china.html">newspaper</a>, which had ' \
              'previously served as packaging for goods from <a style="text-decoration: underline" ' \
              'href="http://papersaround.blogspot.com/search/label/China">China</a>. Sister could not resist and ' \
              'brought this tiny piece of another culture to home. A little later, she thought that the newspapers ' \
              'with their unique language, typography, images, and design are ideal for collectors who dream of ' \
              'distant travels. Then I improved her idea and created this site.</p>\n' \
              '    <p>If you want to help this site by sending the newspaper from his native Louisiana or from a ' \
              'trip to the deserts of Africa or you have any suggestions / advice you can send letters and parcel ' \
              'to the address:</p>\n' \
              '    <!--Костыли для английского и русского адресов, по-хорошему нужно писать не так, а выносить это ' \
              'всё в отдельные файлы-->\n' \
              '    <style>\n' \
              '        .hiddenbuttoneng {margin-left: 25px; margin-right: 19px; display: inline; ' \
              'border-bottom: 1px dashed #1a0dab; color: #1a0dab}\n' \
              '        .visiblebuttoneng {margin-left: 25px; margin-right: 19px; display: inline; color: #606060}\n' \
              '        .hiddenbuttonrus {display: inline; border-bottom: 1px dashed #1a0dab; color: #1a0dab}\n' \
              '        .visiblebuttonrus {display: inline; color: #606060}\n' \
              '        .hiddenpar {height: 0px; visibility: hidden;}\n' \
              '        .visiblepar {margin-left: 25px; background-color: #eeeeee; width: 150px; padding: 20px; ' \
              'padding-left: 25px; visibility: visible;}\n' \
              '    </style>\n' \
              '    <script  type="text/javascript">\n' \
              '        function english () {\n' \
              '            document.getElementById("engbut").className="visiblebuttoneng";\n' \
              '            document.getElementById("rusbut").className="hiddenbuttonrus";\n' \
              '            document.getElementById("engpar").className="visiblepar";\n' \
              '            document.getElementById("ruspar").className="hiddenpar";\n' \
              '        }\n' \
              '        function russian () {\n' \
              '            document.getElementById("engbut").className="hiddenbuttoneng";\n' \
              '            document.getElementById("rusbut").className="visiblebuttonrus";\n' \
              '            document.getElementById("engpar").className="hiddenpar";\n' \
              '            document.getElementById("ruspar").className="visiblepar";\n' \
              '        }\n' \
              '    </script>\n' \
              '    <p><div class="visiblebuttoneng" id="engbut" onclick="english()">from all countries</div><div ' \
              'class="hiddenbuttonrus" id="rusbut" onclick="russian()">from Russia</div></p>\n' \
              '    <div style="height: 172px"><div class="visiblepar" id="engpar">Boris Ovodov<br>ul. Kuibysheva ' \
              '104–63<br>Yekaterinburg<br>Russia<br>620100</div>\n' \
              '    <div class="hiddenpar" id="ruspar">Борису Оводову<br>620100<br>Россия<br>г. Екатеринбург<br>ул. ' \
              'Куйбышева,<br> д. 104, кв. 63</div></div>\n' \
              '    <p>or to <a style="text-decoration: underline" ' \
              'href="mailto:b.ovodov@gmail.com">b.ovodov@gmail.com</a>.</p>\n' \
              '<p>Also I have a colorful <a style="text-decoration: underline" ' \
              'href="https://www.instagram.com/papersaround/">account on Instagram</a>.</p>\n' \
              '</div>'

    return {
        'content': content,
        'title': 'About'
    }
