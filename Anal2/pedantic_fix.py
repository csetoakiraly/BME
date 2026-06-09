import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Ch 11.2 Fubini
old_11_2 = r"""                <p>Ha $T = [a,b] \times [c,d]$ egy téglalap, akkor a kettős integrál két egymás utáni egyváltozós integrálra bontható, és a sorrend tetszőleges:</p>"""
new_11_2 = r"""                <p>Ha az $f(x,y)$ függvény <b>Riemann-integrálható</b> a $T = [a,b] \times [c,d]$ téglalapon (illetve külön-külön is integrálható a megfelelő intervallumokon), akkor a kettős integrál két egymás utáni egyváltozós integrálra bontható. Továbbá, ha az $f$ függvény <b>folytonos</b> $T$-n, akkor a tétel feltételei automatikusan teljesülnek, és az integrálás sorrendje tetszőlegesen felcserélhető:</p>"""
c = c.replace(old_11_2, new_11_2)

# Ch 11.3 Normáltartományok
old_11_3 = r"""<p>Nem téglalap alakú tartományoknál a határok függvények lesznek:</p>"""
new_11_3 = r"""<p>Nem téglalap alakú tartományoknál a határok függvények lesznek ($g, h$ folytonos függvények). Ha az $f$ függvény <b>folytonos</b> a normáltartományon, akkor ott integrálható, és az integrálás határai a következők lesznek:</p>"""
c = c.replace(old_11_3, new_11_3)

# Ch 11.4 Integráltranszformáció
old_11_4 = r"""<p>Ha egy $\underline{g}(u,v) = (x(u,v), y(u,v))$ folytonosan differenciálható, injektív leképezéssel áttérünk új változókra, akkor az integrálást a következőképpen végezhetjük el:</p>"""
new_11_4 = r"""<p>Legyen $G \subseteq \mathbb{R}^2$ egy <b>nyílt halmaz</b>, a leképezés pedig $\underline{g}: G \to \mathbb{R}^2$ folytonosan differenciálható. Tegyük fel, hogy $H \subseteq G$ egy <b>Jordan-mérhető</b> halmaz, és a leképezés $H$ belsejében injektív. Ha az $f$ függvény <b>korlátos</b> a $g\langle H\rangle$ halmazon, akkor az integrálást a következőképpen végezhetjük el:</p>"""
c = c.replace(old_11_4, new_11_4)

# Ch 11.5 Polártranszformáció
old_11_5 = r"""<p>Ha a tartomány kör, körgyűrű vagy körcikk, sokkal egyszerűbb áttérni szögre ($\varphi$) és távolságra ($r$):</p>"""
new_11_5 = r"""<p>A polártranszformáció elvégzéséhez feltesszük, hogy a tartomány egy $A \subseteq [0, +\infty[ \times [0, 2\pi]$ <b>Jordan-mérhető</b> halmaz, és a leképezett $f$ függvény <b>korlátos</b>. Ekkor sokkal egyszerűbb áttérni szögre ($\varphi$) és távolságra ($r$):</p>"""
c = c.replace(old_11_5, new_11_5)

# Ch 12.4 Hengerkoordináták
old_12_4 = r"""<p>Ha a test hengerszimmetrikus (pl. henger, kúp, paraboloid), a $z$ tengelyt megtartjuk, az $x,y$ síkban pedig polárkoordinátákat használunk:</p>"""
new_12_4 = r"""<p>Feltesszük, hogy a kiindulási halmaz $A \subseteq \mathbb{R}^+ \times [0, 2\pi] \times \mathbb{R}$ <b>Jordan-mérhető</b>, az $f$ függvény pedig <b>korlátos</b>. Ha a test hengerszimmetrikus (pl. henger, kúp, paraboloid), a $z$ tengelyt megtartjuk, az $x,y$ síkban pedig polárkoordinátákat használunk:</p>"""
c = c.replace(old_12_4, new_12_4)

# Ch 12.5 Gömbi koordináták
old_12_5 = r"""<p>Ha a test gömbszimmetrikus (pl. gömb, gömbréteg), három adat határoz meg egy pontot: a távolság az origótól ($r$), a földrajzi hosszúság ($\varphi$, az $xy$ síkon), és a szélesség az északi pólustól ($z$ tengelytől) lefelé mérve ($\vartheta$):</p>"""
new_12_5 = r"""<p>Itt feltesszük, hogy a kiindulási halmaz $A \subseteq \mathbb{R}^+ \times [0, \pi] \times [0, 2\pi]$ <b>Jordan-mérhető</b>, az $f$ pedig <b>korlátos</b>. Ha a test gömbszimmetrikus (pl. gömb, gömbréteg), három adat határoz meg egy pontot: a távolság az origótól ($r$), a földrajzi hosszúság ($\varphi$, az $xy$ síkon), és a szélesség az északi pólustól ($z$ tengelytől) lefelé mérve ($\vartheta$):</p>"""
c = c.replace(old_12_5, new_12_5)

# Ch 13.3 Páros/páratlan
old_13_3 = r"""<ul>
                    <li><b>Ha $f(x)$ páros</b> ($f(-x) = f(x)$): Csak koszinuszos tagjai lesznek! A szinuszos együtthatók nulla értéket vesznek fel ($b_n = 0$). Az integrálás felezhető: $\int_{-\pi}^{\pi} = 2 \int_0^{\pi}$.</li>
                    <li><b>Ha $f(x)$ páratlan</b> ($f(-x) = -f(x)$): Csak szinuszos tagjai lesznek! A koszinuszos együtthatók (és $a_0$) mind nullák ($a_n = 0$).</li>
                </ul>"""
new_13_3 = r"""<ul>
                    <li><b>Ha $f(x)$ páros</b> (akár csak "véges sok pont kivételével" is): Csak koszinuszos tagjai lesznek! Minden $k \ge 1$-re $b_k(f) = 0$. Az integrálás felezhető: $\int_{-\pi}^{\pi} = 2 \int_0^{\pi}$.</li>
                    <li><b>Ha $f(x)$ páratlan</b> (véges sok pont kivételével): Csak szinuszos tagjai lesznek! Minden $k \ge 0$-ra $a_k(f) = 0$.</li>
                    <li><b>Konstans eltolása:</b> Ha egy $c \in \mathbb{R}$ konstanst adunk a függvényhez ($f+c$), az csak az $a_0$-t módosítja! A magasabb rendű együtthatók nem változnak: $a_k(f+c) = a_k(f)$ és $b_k(f+c) = b_k(f)$ minden $k \ge 1$-re.</li>
                </ul>"""
c = c.replace(old_13_3, new_13_3)

# Ch 13.4 Dirichlet
old_13_4 = r"""<p>A Fourier-sor a folytonos pontokban a függvény eredeti értékéhez tart. <b>Szakadási pontokban</b> viszont a bal és jobb oldali határérték számtani közepéhez (pont a feléhez):</p>"""
new_13_4 = r"""<p><b>A tétel szigorú feltétele:</b> Tegyük fel, hogy a $[-\pi, \pi]$ intervallum felbontható <i>véges sok</i> olyan részintervallumra, amelyek belsejében az $f$ függvény <b>monoton és korlátos</b>. Ekkor a Fourier-sor minden $x \in \mathbb{R}$ pontban konvergens.</p>
                <p>A Fourier-sor összege a folytonos pontokban a függvény eredeti értékéhez tart. <b>Szakadási pontokban</b> viszont a bal és jobb oldali határérték számtani közepéhez (pont a feléhez):</p>"""
c = c.replace(old_13_4, new_13_4)

# Ch 13.5 Fourier-transzformált def
old_13_5 = r"""<p>Nem periodikus jeleknél a "frekvenciaspektrum" folytonos lesz. Az $f(x)$ függvény (időtartomány) Fourier-transzformáltja az $\hat{f}(\omega)$ (frekvenciatartomány), ami komplex értékű is lehet:</p>"""
new_13_5 = r"""<p>Legyen $f: \mathbb{R} \to \mathbb{R}$ egy <b>abszolút integrálható</b> függvény. Nem periodikus jeleknél a "frekvenciaspektrum" folytonos lesz. Az $f$ függvény (időtartomány) Fourier-transzformáltja az $\mathcal{F}(f)(\omega)$ (frekvenciatartomány), ami komplex értékű is lehet:</p>"""
c = c.replace(old_13_5, new_13_5)

# Ch 13.6 Fourier-transzformált tul
old_13_6 = r"""<p>A Fourier-transzformált egy lineáris operátor, amelyhez számos hasznos szabály tartozik, melyekkel integrálás nélkül vezethetünk le új transzformáltakat:</p>"""
new_13_6 = r"""<p>Legyenek $f, g: \mathbb{R} \to \mathbb{R}$ <b>abszolút integrálható</b> függvények. A Fourier-transzformált egy lineáris operátor, amelyhez számos hasznos szabály tartozik, melyekkel integrálás nélkül vezethetünk le új transzformáltakat:</p>"""
c = c.replace(old_13_6, new_13_6)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print("Pedantic theoretical updates injected.")
