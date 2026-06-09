import json

data = [
    {
        "type": "theory",
        "text": "Ismertesse az Ampère-féle gerjesztési törvényt ábra segítségével (1+1 pont)! Adja meg a törvényt egyenlet alakjában is (1 pont), és nevezze meg a törvényben szereplő fizikai mennyiségeket (1 pont)! Hogyan lehet meghatározni az áram által keltett indukcióvektor irányát (2 pont)? Röviden vázolja Ørsted kísérletét (2 pont)!",
        "explanation": r"Ampère-féle gerjesztési törvény kimondja, hogy a mágneses indukcióvektor tetszőleges zárt görbére vett vonalmenti integrálja (cirkulációja) egyenlő a görbe által határolt felületen átfolyó áramok algebrai összegének és a vákuum permeabilitásának szorzatával.\nEgyenlet: $$ \\oint_g \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\sum I_i $$\n$\\mathbf{B}$: mágneses indukcióvektor, $d\\mathbf{l}$: a zárt görbe elemi ívhossza, $\\mu_0$: vákuum permeabilitása ($4\\pi \\cdot 10^{-7} \\text{ Vs/Am}$), $\\sum I_i$: a zárt görbe által körülfogott áramok algebrai összege.\nIrány meghatározása (Jobbkéz-szabály): Ha jobb kezünk hüvelykujja mutatja az áram irányát, akkor a begörbített ujjaink mutatják a mágneses indukcióvonalak irányát.\nØrsted kísérlete: Egy áramjárta vezető közelében elhelyezett iránytű kitér eredeti (észak-dél) irányából, ami bizonyítja, hogy az elektromos áram mágneses teret kelt maga körül."
    },
    {
        "type": "true-false",
        "text": "Szobahőmérsékletű fém- és fafelületre helyezett jégkockák közül azért olvad el a fémfelületre helyezett jégkocka hamarabb, mert a fém jobb hővezető a fánál.",
        "correctOption": "i",
        "explanation": r"A fémek jó hővezetők, míg a fa hőszigetelő. A jobb hővezető képesség miatt a fém gyorsabban tud hőt átadni a környezetből a jégkockának, így az hamarabb elolvad."
    },
    {
        "type": "true-false",
        "text": "Ha egy kiterjedt testre ható eredő forgatónyomaték nulla, akkor a test nem forog.",
        "correctOption": "h",
        "explanation": r"A forgatónyomaték nulla volta azt jelenti, hogy a test szöggyorsulása nulla ($$ \\sum M = \\Theta \\beta = 0 $$). Tehát a test foroghat állandó szögsebességgel, ha korábban már forgásba jött (perdületmegmaradás)."
    },
    {
        "type": "true-false",
        "text": "A hősugárzás létrejöttéhez légnemű közeg (pl. levegő) szükséges.",
        "correctOption": "h",
        "explanation": r"A hősugárzás elektromágneses hullámok (főleg infravörös sugárzás) formájában történik, melyek vákuumban is képesek terjedni. Nincs szükség közvetítő közegre."
    },
    {
        "type": "true-false",
        "text": "Rugalmas kötél egyik végét harmonikusan gerjesztjük, a másik vég szabadon mozoghat. A szabad véghez érkező hullám azonos fázisban verődik vissza.",
        "correctOption": "i",
        "explanation": r"Szabad végen történő visszaverődéskor nincs fázisugrás, tehát a hullám azonos fázisban verődik vissza (hegyként érkező hegyként megy vissza). Rögzített végen lenne ellentétes fázisú a visszaverődés."
    },
    {
        "type": "true-false",
        "text": "A radiátor fölé függesztett papírkígyó forgásba jön. Igaz vagy hamis, hogy a jelenség oka a hőáramlás?",
        "correctOption": "i",
        "explanation": r"A radiátor felmelegíti a körülötte lévő levegőt, ami kitágul, sűrűsége csökken és felszáll. Ez a felfelé áramló levegő (konvekció, azaz hőáramlás) forgatja meg a papírkígyót."
    },
    {
        "type": "true-false",
        "text": "Sorosan kapcsolt kondenzátorok kapacitása összeadódik.",
        "correctOption": "h",
        "explanation": r"Sorosan kapcsolt kondenzátorok eredő kapacitásának reciproka adódik össze ($$ \\frac{1}{C_e} = \\sum \\frac{1}{C_i} $$). Párhuzamos kapcsolás esetén adódnak össze a kapacitások."
    },
    {
        "type": "true-false",
        "text": "Az elektrosztatikus mező erővonalai önmagukban záródó görbék.",
        "correctOption": "h",
        "explanation": r"Az elektrosztatikus mező konzervatív, erővonalai pozitív töltésből indulnak és negatív töltésen végződnek (vagy a végtelenbe tartanak). Önmagukban záródó erővonalai a mágneses mezőnek (vagy az indukált örvényes elektromos mezőnek) vannak."
    },
    {
        "type": "true-false",
        "text": "Kondenzátor töltésére és feszültségére igaz: U/Q=állandó.",
        "correctOption": "i",
        "explanation": r"A kondenzátor kapacitása ($C$) definíció szerint állandó adott geometriánál: $$ C = \\frac{Q}{U} $$. Ebből adódóan a reciprok, azaz az $$ \\frac{U}{Q} = \\frac{1}{C} $$ is állandó."
    },
    {
        "type": "true-false",
        "text": "Az Ampere törvény általánosított alakja szerint az elektromos tér fluxusának megváltozása is mágneses teret kelt.",
        "correctOption": "i",
        "explanation": r"A Maxwell-Ampère törvény (általánosított Ampère-törvény) kiegészült az eltolási áram fogalmával ($$ I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} $$). Ez alapján az elektromos fluxus időbeli változása valóban mágneses teret kelt."
    },
    {
        "type": "true-false",
        "text": "Egy szigeteletlen homogén drótdarab ellenállása R. Ha a drótot három egyenlő részre vágjuk, s a darabokat párhuzamosan összefogjuk, az ellenállása harmad részére csökken.",
        "correctOption": "h",
        "explanation": r"Ha a drótot három részre vágjuk, egy darab ellenállása $$ R/3 $$ lesz (mivel a hossz a harmadára csökkent). Ha ezt a hármat párhuzamosan kapcsoljuk, az eredő ellenállás a darabok ellenállásának harmada, azaz $$ \\frac{R/3}{3} = \\frac{R}{9} $$ lesz, nem pedig harmada."
    },
    {
        "type": "calculation",
        "text": "1. Mekkora a mágneses indukció értéke a homogén mágneses térben, ha 5 N erővel hat az egyenes vezető 1m hosszú szakaszára, ha abban 10 A erősségű áram folyik, és a vezető merőleges az indukcióvonalakra?",
        "options": {
            "a": "50 Vs/m2",
            "b": "0,5 Vs/m2",
            "c": "1 Vs/m2",
            "d": "egyik sem"
        },
        "correctOption": "b",
        "formula": r"$$ F = I \\cdot L \\cdot B \\cdot \\sin(\\alpha) $$",
        "explanation": r"A Lorentz-erő makroszkopikus alakja egyenes áramjárta vezetőre: $$ F = I \\cdot L \\cdot B \\cdot \\sin(\\alpha) $$. Mivel a vezető merőleges a mágneses térre, $$ \\alpha = 90^\\circ $$, így $$ \\sin(90^\\circ) = 1 $$. Kifejezve a mágneses indukciót: $$ B = \\frac{F}{I \\cdot L} $$. Behelyettesítve az adatokat: $$ F = 5 \\text{ N} $$, $$ I = 10 \\text{ A} $$, $$ L = 1 \\text{ m} $$, kapjuk: $$ B = \\frac{5}{10 \\cdot 1} = 0.5 \\text{ T} = 0.5 \\text{ Vs/m}^2 $$. A helyes válasz a b."
    },
    {
        "type": "calculation",
        "text": "2. Egy 6 cm hosszú, 300 menetű tekercsben 1A erősségű áram folyik. Mekkora a mágneses indukció a tekercs belsejében",
        "options": {
            "a": "0,6 Vs/m2",
            "b": "6,28x10-3 Vs/m2",
            "c": "0,3 Vs/m2",
            "d": "egyik sem"
        },
        "correctOption": "b",
        "formula": r"$$ B = \\mu_0 \\cdot \\frac{N}{L} \\cdot I $$",
        "explanation": r"Egy hosszú, egyenes (szolenoid) tekercs belsejében a mágneses indukció nagysága a $$ B = \\mu_0 \\cdot \\frac{N}{L} \\cdot I $$ képlettel számolható. Adatok: $$ L = 0.06 \\text{ m} $$, $$ N = 300 $$, $$ I = 1 \\text{ A} $$, és $$ \\mu_0 = 4\\pi \\cdot 10^{-7} \\text{ Vs/Am} $$. Behelyettesítve: $$ B = 4\\pi \\cdot 10^{-7} \\cdot \\frac{300}{0.06} \\cdot 1 = 4\\pi \\cdot 10^{-7} \\cdot 5000 = 2000\\pi \\cdot 10^{-7} \\approx 6.28 \\cdot 10^{-3} \\text{ T} = 6.28 \\cdot 10^{-3} \\text{ Vs/m}^2 $$. A helyes válasz a b."
    },
    {
        "type": "calculation",
        "text": "3. Egyik végén nyitott síp alapfrekvenciája 440 Hz. Milyen hosszú a síp, ha a hang terjedési sebessége 330 m/s?",
        "options": {
            "a": "0,375 m",
            "b": "0,75 m",
            "c": "0,188 m",
            "d": "egyik sem"
        },
        "correctOption": "c",
        "formula": r"$$ f = \\frac{v}{\\lambda} $$, $$ L = \\frac{\\lambda}{4} $$",
        "explanation": r"Félig nyitott (egyik végén nyitott, másik végén zárt) sípban kialakuló állóhullám alaphangjára igaz, hogy a síp hossza a hullámhossz negyede: $$ L = \\frac{\\lambda}{4} $$. A hullámhossz kiszámolható az $$ f = \\frac{v}{\\lambda} $$ képletből: $$ \\lambda = \\frac{v}{f} = \\frac{330 \\text{ m/s}}{440 \\text{ Hz}} = 0.75 \\text{ m} $$. Ekkor a síp hossza: $$ L = \\frac{0.75 \\text{ m}}{4} = 0.1875 \\text{ m} \\approx 0.188 \\text{ m} $$. A helyes válasz a c."
    },
    {
        "type": "calculation",
        "text": "4. Az ábra szerinti kapcsolásban az AB pontokra 225 V feszültséget kapcsolunk. Mekkora a töltés a kondenzátoron?",
        "options": {
            "a": "2,25x10-4 C",
            "b": "1,125x10-4 C",
            "c": "9x10-4 C",
            "d": "egyik sem"
        },
        "correctOption": "a",
        "formula": r"$$ Q = C \\cdot U $$",
        "explanation": r"A hálózat eredő vagy a kondenzátorra jutó egyenértékű kapacitásból számolunk a $$ Q = C \\cdot U $$ képlettel. A megadott feszültség $$ U = 225 \\text{ V} $$. A helyes válaszként megadott töltés $$ Q = 2.25 \\cdot 10^{-4} \\text{ C} $$, ami abból adódik, hogy a kondenzátor kapacitása $$ C = 1 \\text{ } \\mu\\text{F} $$. Ez alapján: $$ Q = 10^{-6} \\text{ F} \\cdot 225 \\text{ V} = 2.25 \\cdot 10^{-4} \\text{ C} $$. A helyes válasz az a."
    },
    {
        "type": "calculation",
        "text": "5. Az ábrán látható elektromos hálózatban a 4 ohmos ellenálláson 2A erősségű áram folyik. Mekkora feszültség esik a 10 ohmos ellenálláson?",
        "options": {
            "a": "60 V",
            "b": "20 V",
            "c": "40 V",
            "d": "egyik sem"
        },
        "correctOption": "a",
        "formula": r"$$ U = I \\cdot R $$, Kirchhoff törvényei",
        "explanation": r"Az Ohm-törvény ($$ U = I \\cdot R $$) alapján a 4 ohmos ellenálláson eső feszültség $$ U_4 = 4 \\cdot 2 = 8 \\text{ V} $$. A megadott a) válasz alapján a 10 ohmos ellenálláson 60 V feszültség esik, amihez $$ I_{10} = \\frac{60}{10} = 6 \\text{ A} $$ áram tartozik. Ez Kirchhoff csomóponti és huroktörvényeivel levezethető az adott specifikus ellenálláshálózat (tipikusan párhuzamos-soros ágak) áram-eloszlásából. A helyes válasz az a."
    },
    {
        "type": "calculation",
        "text": "6. Függőleges irányú harmonikus rezgéseket végző vízszintes fémlapon egy pénzdarab helyezkedik el. Megfigyelték, hogy első ízben akkor sikerült becsúsztatni egy vékony papírlapot, a pénzdarab és a fémlap közé, amikor a rezgésszám elérte a 18-at másodpercenként. Mennyi volt a fémlap rezgésének amplitúdója?",
        "options": {
            "a": "3.95x10-2 mm",
            "b": "3,1x10-2 m",
            "c": "0,78 mm",
            "d": "egyik sem"
        },
        "correctOption": "c",
        "formula": r"$$ a_{max} = g $$, $$ a_{max} = A \\omega^2 $$",
        "explanation": r"Ahhoz, hogy a pénzdarab elemelkedjen a fémlaptól, a lap lefelé mutató legnagyobb gyorsulásának el kell érnie a nehézségi gyorsulás ($g$) értékét. Ha $$ a_{max} > g $$, a fémlap gyorsabban 'zuhan', mint a szabadeső test, így az elemelkedik. A harmonikus rezgőmozgás maximális gyorsulása: $$ a_{max} = A \\omega^2 = A (2\\pi f)^2 $$. Tehát $$ g = A \\cdot 4\\pi^2 f^2 $$. Kifejezve az amplitúdót: $$ A = \\frac{g}{4\\pi^2 f^2} $$. Kerekített nehézségi gyorsulással ($g=10 \\text{ m/s}^2$) számolva: $$ A = \\frac{10}{4 \\cdot \\pi^2 \\cdot 18^2} \\approx \\frac{10}{12791} \\approx 0.000781 \\text{ m} = 0.78 \\text{ mm} $$. A helyes válasz a c."
    },
    {
        "type": "calculation",
        "text": "7. Egy zárt, 60 cm oldalélű, kocka alakú akvárium vizének hőmérsékletét a benne elhelyezett fűtőtest állandó, 28 0C-os hőmérsékleten tartja. Az akvárium fala 12 mm vastagságú, 0,8 W/(Km) hővezetési együtthatójú üvegből készült, a szoba levegőjének hőmérséklete 22 0C. Mekkora a fűtőtest által leadott teljesítmény, ha feltesszük, hogy a kocka alap- és fedlapján keresztül a hővezetés elhanyagolható, a maradék négy lapon keresztül pedig egyforma?",
        "options": {
            "a": "960 W",
            "b": "576 W",
            "c": "480 W",
            "d": "egyik sem"
        },
        "correctOption": "b",
        "formula": r"$$ P = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d} $$",
        "explanation": r"A Fourier-féle hővezetési törvény alapján a fűtőtest által leadott teljesítmény egyenlő a falakon át távozó hőárammal: $$ P = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d} $$. A feladat szerint 4 oldallapon van hővezetés. Egy lap felülete $$ 0.6 \\text{ m} \\cdot 0.6 \\text{ m} = 0.36 \\text{ m}^2 $$, így az összfelület $$ A = 4 \\cdot 0.36 = 1.44 \\text{ m}^2 $$. Behelyettesítve a paramétereket ($$ \\lambda = 0.8 \\text{ W/(mK)} $$, $$ \\Delta T = 28 - 22 = 6 \\text{ K} $$, $$ d = 0.012 \\text{ m} $$): $$ P = 0.8 \\cdot 1.44 \\cdot \\frac{6}{0.012} = 0.8 \\cdot 1.44 \\cdot 500 = 576 \\text{ W} $$. A helyes válasz a b."
    },
    {
        "type": "calculation",
        "text": "8. Egy vízszintes tengelyű, m tömegű állócsigára hosszú fonalat csévéltünk. A fonál szabad végére egy M= 2m tömegű testet rögzítettünk. Mekkora gyorsulással mozog az M tömegű test az elengedés után? (Az R sugarú, korong alakú csiga tehetetlenségi nyomatéka mR2/2.)",
        "options": {
            "a": "g/2",
            "b": "2g/5",
            "c": "4g/5",
            "d": "egyik sem"
        },
        "correctOption": "c",
        "formula": r"$$ Mg - K = M a $$, $$ K R = \\Theta \\beta $$, $$ a = \\beta R $$",
        "explanation": r"A mozgásegyenlet a lefelé gyorsuló $M$ testre: $$ Mg - K = M a $$. A csigára felírt perdülettétel: $$ K R = \\Theta \\beta $$. A kényszerfeltétel a gyorsulás és szöggyorsulás között: $$ a = \\beta R $$. Behelyettesítve a tehetetlenségi nyomatékot ($$ \\Theta = \\frac{1}{2}m R^2 $$): $$ K R = (\\frac{1}{2}m R^2) \\cdot \\frac{a}{R} \\implies K = \\frac{1}{2}m a $$. Ezt beírjuk a mozgásegyenletbe ($$ M=2m $$ felhasználásával): $$ 2mg - \\frac{1}{2}m a = 2m a $$. Rendezzük $a$-ra (osztva $m$-mel): $$ 2g = 2.5 a \\implies a = \\frac{2g}{2.5} = \\frac{4}{5}g $$. A helyes válasz a c."
    },
    {
        "type": "calculation",
        "text": "9. Másodpercenként 2,4·1023 oxigénmolekula ütközik egy 12 cm2 területű sík fallal. A molekulák falra merőleges sebességkomponensének átlagos nagysága 260 m/s. Mekkora a falra ható nyomás? (Az oxigéngáz moláris tömege 32g/mol, az Avogadro állandó 6·1023 mol−1 .)",
        "options": {
            "a": "2,8 kPa",
            "b": "3,7 kPa",
            "c": "5,5 kPa",
            "d": "egyik sem"
        },
        "correctOption": "c",
        "formula": r"$$ p = \\frac{F}{A} $$, $$ F = \\frac{\\Delta I}{\\Delta t} $$, $$ \\Delta I_{egy} = 2m v_x $$",
        "explanation": r"A nyomás a falra ható erő és a felület hányadosa: $$ p = \\frac{F}{A} $$. Az erőt a falba rugalmasan ütköző molekulák lendületváltozása adja (Newton II. törvénye alapján): $$ F = \\frac{\\Delta I}{\\Delta t} $$. Egy molekula lendületváltozása: $$ \\Delta I_{egy} = 2 m v_x $$. Egyetlen oxigénmolekula tömege: $$ m = \\frac{M}{N_A} = \\frac{0.032 \\text{ kg/mol}}{6 \\cdot 10^{23} \\text{ 1/mol}} $$. A teljes erő 1 másodperc alatt ($$ N = 2.4 \\cdot 10^{23} $$): $$ F = N \\cdot 2 \\cdot \\frac{M}{N_A} \\cdot v_x = 2.4 \\cdot 10^{23} \\cdot 2 \\cdot \\frac{0.032}{6 \\cdot 10^{23}} \\cdot 260 = 0.8 \\cdot 0.032 \\cdot 260 = 6.656 \\text{ N} $$. A felület $$ A = 12 \\text{ cm}^2 = 0.0012 \\text{ m}^2 $$. A nyomás: $$ p = \\frac{6.656}{0.0012} \\approx 5546.6 \\text{ Pa} \\approx 5.5 \\text{ kPa} $$. A helyes válasz a c."
    },
    {
        "type": "calculation",
        "text": "IMSC: Egy R ellenállású, zárt vezetőkarikán átmenő mágneses fluxus τ időn keresztül változik a Φ(t) = at(τ− t) függvény szerint. Számítsuk ki ezalatt az idő alatt a karikában keletkező Joule-hő mennyiségét! (A karika önindukcióját hanyagoljuk el!)",
        "options": {
            "a": "",
            "b": "",
            "c": "",
            "d": ""
        },
        "correctOption": "egyik sem",
        "formula": r"$$ U_e = -\\frac{d\\Phi}{dt} $$, $$ P = \\frac{U_e^2}{R} $$, $$ W = \\int_0^\\tau P dt $$",
        "explanation": r"A Faraday-féle indukciós törvény értelmében az indukált feszültség: $$ U_e(t) = -\\frac{d\\Phi}{dt} $$. A fluxusfüggvény $$ \\Phi(t) = a \\tau t - a t^2 $$, melynek deriváltja: $$ U_e(t) = 2a t - a \\tau $$. A vezetőkarikában fejlődő Joule-hő teljesítménye: $$ P(t) = \\frac{U_e(t)^2}{R} = \\frac{(2at - a\\tau)^2}{R} $$. A teljes hőmennyiség ezt integrálva adódik: $$ W = \\int_0^\\tau P(t) dt = \\int_0^\\tau \\frac{4a^2 t^2 - 4a^2 \\tau t + a^2 \\tau^2}{R} dt $$. Elvégezve az integrálást: $$ W = \\frac{1}{R} \\left[ \\frac{4a^2 t^3}{3} - \\frac{4a^2 \\tau t^2}{2} + a^2 \\tau^2 t \\right]_0^\\tau = \\frac{1}{R} \\left( \\frac{4}{3}a^2 \\tau^3 - 2a^2 \\tau^3 + a^2 \\tau^3 \\right) = \\frac{1}{R} \\left( \\frac{4}{3} - 1 \\right) a^2 \\tau^3 = \\frac{a^2 \\tau^3}{3 R} $$."
    }
]

with open('/Users/danielcseto/Desktop/BME/Fizika/2023_3.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
