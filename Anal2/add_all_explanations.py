import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

def inject(marker, explanation):
    global c
    if marker in c:
        c = c.replace(marker, marker + f'\n                <div class="explanation">\n                    <b>Konyhanyelven:</b> {explanation}\n                </div>')

# 11.1
inject("<h3>1. Kettős integrál fogalma</h3>", "Képzeld el, hogy van egy egyenetlen talajú medencéd, amiben víz van. A kettős integrál nem csinál mást, mint megmondja a medencében lévő víz <b>térfogatát</b> (ahol $f(x,y)$ a vízmélység az adott ponton).")

# 11.2
inject("<h3>2. Fubini-tétel (Téglalap tartományon)</h3>", "Térfogatot akarsz számolni szeleteléssel. A Fubini-tétel garantálja, hogy mindegy, hogy a kenyeret hosszában vagy keresztben szeleteled fel először, a végén a szeletek össztérfogata pontosan ugyanannyi lesz.")

# 11.3
inject("<h3>3. Normáltartományok</h3>", "Egy alakzat akkor normáltartomány, ha 'szép' az alakja, azaz ha felülről lefelé (vagy balról jobbra) vonalakat húzol bele, akkor a vonal csak egyszer lép be az alakzatba és egyszer lép ki belőle (nem görbül vissza önmagába, mint egy kifli).")

# 11.5
inject("<h3>5. Polárkoordinátás transzformáció</h3>", "Ez a 'radar' megközelítés. Ahelyett, hogy azt mondanád valakinek, hogy 'menj 3 lépést jobbra és 4-et fel', azt mondod, hogy 'fordulj 53 fokot és menj előre 5 lépést'. Kör alakú dolgoknál ez brutálisan leegyszerűsíti a számolást.")

# 12.1
inject("<h3>1. n-dimenziós Normáltartomány (Definíció)</h3>", "Ez a 'szép' alakzatok térbeli megfelelője. Egy 3D-s normáltartományt úgy képzelj el, mint egy szobát, aminek a padlója szép egyenletes (ez az alap tartomány), van egy dimbes-dombos alsó talaja és egy hullámos plafonja (ez a két határoló függvény).")

# 12.2
inject("<h3>2. Integrálás normáltartományon</h3>", "Az integrálást úgy csináljuk, mint a hagyma hámozását, csak <b>belülről kifelé</b>! Először kiszámoljuk a távolságot a padlótól a plafonig (belső integrál), utána pedig végigsöpörjük ezt az egészet a szoba területén (külső integrálok).")

# 12.4
inject("<h3>4. Hengerkoordináták</h3>", "Ez a polárkoordináta, kiegészítve egy lifttel! Az alapon ($x,y$ sík) radarral (szög + távolság) tájékozódsz, a magasságot ($z$) pedig simán méterben méred. Hengereknél és tölcséreknél (kúp) a legjobb választás.")

# 12.5
inject("<h3>5. Gömbi koordináták</h3>", "Ez pontosan az, ahogy a Földön a GPS működik! Egy pont megadásához kell a Föld középpontjától vett távolság ($r$), a földrajzi hosszúság ($\varphi$) és a földrajzi szélesség az északi sarktól mérve ($\vartheta$).")

# 13.2
inject("<h3>2. Együtthatók (Euler-Fourier formulák)</h3>", "Ezek az integrálok úgy működnek, mint egy <b>szűrő</b> a rádióban. Amikor a függvényedet megszorzod egy adott frekvenciájú szinusszal és integrálod, a szűrő 'kiszűri' az összes többi frekvenciát, és csak azt az egy számot (amplitúdót) adja vissza, hogy ebből az adott hullámból mennyi van a függvényben.")

# 13.3
inject("<h3>3. Páros és páratlan függvények trükkjei</h3>", "Ez egy lusta, de zseniális trükk. Ha egy függvény szimmetrikus, felesleges kiszámolni a borzasztó hosszú integrálokat, mert a terület fele garantáltan kinullázza a másik felét. Ha ezt vizsgán észreveszed, azonnal megspórolod a számolás 50%-át!")

# 13.5
inject("<h3>5. Fourier-transzformált</h3>", "Képzeld el a Fourier-transzformáltat úgy, mint egy <b>üveg prizmát</b>. Belemegy a bonyolult, fehér fény (az eredeti függvény az időben), a prizma pedig felbontja tiszta, egyszerű színekre (frekvenciákra), megmutatva, hogy miből mennyit tartalmaz.")

# 13.6
inject("<h3>6. A Fourier-transzformált tulajdonságai</h3>", "Ezek a 'csalókódok'. Ahelyett, hogy egy kissé módosított függvénynél újra kéne számolni egy pokoli integrált, ezek a szabályok megmondják, hogy ha pl. csak eltoltad a függvényt, akkor az eredmény is csak egy egyszerű szorzással változik meg. Integrálás megúszva!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print("Layman explanations injected everywhere.")
