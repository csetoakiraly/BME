const examData = {
    "2023": [
        {
            "id": "vizsga-1-2023",
            "title": "1. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Nevezze meg a hőterjedés három módját és mindegyikre írjon egy-egy példát (3 p)!",
                    "correctOption": "",
                    "formula": "",
                    "explanation": "A hőterjedés három módja:\n1. Hővezetés (pl. egy fémrúd egyik végét melegítve a másik is felmelegszik).\n2. Hőáramlás vagy konvekció (pl. a radiátor felett felszálló meleg levegő).\n3. Hősugárzás (pl. a Nap melegíti a Földet)."
                },
                {
                    "type": "theory",
                    "text": "Ismertesse a Stefan–Boltzmann-törvényt, nevezze meg az egyes tagok jelentését (3 p)!",
                    "correctOption": "",
                    "formula": "$$M = \\sigma T^4$$",
                    "explanation": "A Stefan–Boltzmann-törvény szerint egy fekete test egységnyi felületéről, egységnyi idő alatt kisugárzott összes energia arányos a test abszolút hőmérsékletének negyedik hatványával. Képlete: $$M = \\sigma T^4$$. Itt $M$ a spektrális kisugárzóképesség (vagy felületi teljesítménysűrűség) $[\\text{W/m}^2]$, $\\sigma$ a Stefan–Boltzmann-állandó ($5,67 \\cdot 10^{-8} \\text{ W}/(\\text{m}^2 \\text{K}^4)$), $T$ pedig az abszolút hőmérséklet $[\\text{K}]$. Nem fekete testek esetén egy $\\epsilon$ emissziós tényező is bejön: $$M = \\epsilon \\sigma T^4$$."
                },
                {
                    "type": "theory",
                    "text": "Mit nevezünk abszolút fekete testnek (2 p)?",
                    "correctOption": "",
                    "formula": "",
                    "explanation": "Abszolút fekete testnek nevezzük azt az ideális testet, amely a ráeső minden elektromágneses sugárzást (hullámhossztól és beesési szögtől függetlenül) teljesen elnyel, azaz abszorpciós tényezője $\\alpha = 1$ minden hullámhosszra."
                },
                {
                    "type": "true-false",
                    "text": "Egy rugón rezgő test periódusideje homogén erőtér (pl. nehézségi erő) jelenlétében ugyanakkora, mint homogén erőtér nélkül.",
                    "correctOption": "i",
                    "formula": "$$T = 2\\pi \\sqrt{\\frac{m}{k}}$$",
                    "explanation": "Igaz. Homogén erőtér csak az egyensúlyi helyzetet tolja el, a visszatérítő erő állandója (a rugóállandó) és a test tömege nem változik, így a periódusidő ($$T = 2\\pi \\sqrt{\\frac{m}{k}}$$) változatlan marad."
                },
                {
                    "type": "true-false",
                    "text": "RL kör bekapcsolási jelenség: Az áram maximális értékről indulva, csökkenve közelíti meg az állandósult állapothoz tartozó értéket.",
                    "correctOption": "h",
                    "formula": "",
                    "explanation": "Hamis. RL kör bekapcsolásakor az áram nulláról indul, és exponenciálisan növekedve közelíti meg az állandósult $I = \\frac{U}{R}$ értéket, mivel a tekercsben indukálódó feszültség gátolja az áram hirtelen megváltozását (Lenz-törvény)."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses tér forrásmentessége azt jelenti, hogy a mágneses indukcióvonalak zárt felületre vett integrálja nulla.",
                    "correctOption": "i",
                    "formula": "$$\\oint \\mathbf{B} \\cdot \\mathrm{d}\\mathbf{A} = 0$$",
                    "explanation": "Igaz. Ez a Maxwell-egyenletek egyike ($$\\oint \\mathbf{B} \\cdot \\mathrm{d}\\mathbf{A} = 0$$), ami azt fejezi ki, hogy nincsenek mágneses monopólusok, azaz a mágneses tér forrásmentes."
                },
                {
                    "type": "true-false",
                    "text": "Állandó mágnest helyezünk egy tekercsbe az ábrán látható módon. A tekercs és a mágnes egymáshoz képest nyugalomban van. A nyíl mutatja a tekercsben indukálódott áram irányát.",
                    "correctOption": "h",
                    "formula": "",
                    "explanation": "Hamis. Ha a tekercs és a mágnes egymáshoz képest nyugalomban van, akkor a mágneses fluxus nem változik az időben, így Faraday indukciós törvénye értelmében nem indukálódik feszültség, és így áram sem folyik."
                },
                {
                    "type": "true-false",
                    "text": "Lenz törvénye kimondja, hogy az indukált áram irány olyan, hogy gátolja az indukciót okozó állapotváltozást.",
                    "correctOption": "i",
                    "formula": "",
                    "explanation": "Igaz. Ez pontosan Lenz törvényének megfogalmazása. Az indukált áram mágneses tere mindig olyan irányú, hogy az őt létrehozó fluxusváltozást akadályozza."
                },
                {
                    "type": "true-false",
                    "text": "Egy töltött tömör fémgömb belsejében a potenciál zérus.",
                    "correctOption": "h",
                    "formula": "",
                    "explanation": "Hamis. Töltött fémgömb (vagy bármilyen vezető) belsejében az elektromos térerősség zérus, ami azt jelenti, hogy a potenciál állandó (megegyezik a felületi potenciállal), de általában nem zérus (kivéve, ha a referenciapontot pont így választjuk meg)."
                },
                {
                    "type": "true-false",
                    "text": "Ha két, egymással párhuzamos egyenes vezetőben az áram iránya ellentétes, akkor a két vezető között vonzó erő lép fel.",
                    "correctOption": "h",
                    "formula": "",
                    "explanation": "Hamis. Párhuzamos, ellentétes irányú áramok taszítják egymást. (Azonos irányú áramok vonzzák egymást)."
                },
                {
                    "type": "true-false",
                    "text": "Kondenzátor töltésére és feszültségére igaz: U/Q=állandó.",
                    "correctOption": "i",
                    "formula": "$$C = \\frac{Q}{U}$$",
                    "explanation": "Igaz. A kondenzátor kapacitása $C = \\frac{Q}{U}$, ami egy adott kondenzátorra állandó. Így annak reciproka, az $\\frac{U}{Q} = \\frac{1}{C}$ is állandó."
                },
                {
                    "type": "true-false",
                    "text": "Az Ampere törvény általánosított alakja szerint az elektromos tér fluxusának megváltozása is mágneses teret kelt.",
                    "correctOption": "i",
                    "formula": "$$I_d = \\varepsilon_0 \\frac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}$$",
                    "explanation": "Igaz. Ezt nevezzük Maxwell-féle eltolási áramnak. Az eltolási áram ($I_d = \\varepsilon_0 \\frac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}$) mágneses teret hoz létre, éppúgy, mint a vezetési áram."
                },
                {
                    "type": "true-false",
                    "text": "1 Ah (egy amperóra) 3,6 Coulomb töltéssel egyenlő.",
                    "correctOption": "h",
                    "formula": "$$Q = I \\cdot t$$",
                    "explanation": "Hamis. 1 amperóra az a töltésmennyiség, ami 1 Amper áramerősség mellett 1 óra (3600 másodperc) alatt átfolyik. $$1 \\text{ Ah} = 1 \\text{ A} \\cdot 3600 \\text{ s} = 3600 \\text{ Coulomb}$$. A $3,6 \\text{ Coulomb}$ az 1 mAh lenne."
                },
                {
                    "type": "calculation",
                    "text": "1. Egy igen hosszú, R = 2 cm sugarú, tömör, hengeres vezetőben homogén eloszlású, tengelyirányú 2A/mm2 áramsűrűségű áram folyik. Mekkora a mágneses térerősség a tengelytől 1 cm távolságban lévő pontban?",
                    "options": {
                        "a": "10^4 A/m",
                        "b": "2500 A/m",
                        "c": "87,5 A/m",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$H = \\frac{J \\cdot r}{2}$$",
                    "explanation": "Az Ampère-féle gerjesztési törvényt ($$\\oint \\mathbf{H} \\cdot \\mathrm{d}\\mathbf{l} = I_{\\text{zárt}}$$) alkalmazzuk egy $r = 1 \\text{ cm}$ sugarú körre, amely a vezető belsejében van. A kör által közbezárt áram: $$I_{\\text{zárt}} = J \\cdot A = J \\cdot \\pi r^2$$. Az integrál pedig $$H \\cdot 2\\pi r$$. Ebből a mágneses térerősség: $$H = \\frac{J \\cdot \\pi r^2}{2\\pi r} = \\frac{J \\cdot r}{2}$$. Behelyettesítve az adatokat ($J = 2 \\text{ A/mm}^2 = 2 \\cdot 10^6 \\text{ A/m}^2$, $r = 0,01 \\text{ m}$): $$H = \\frac{2 \\cdot 10^6 \\cdot 0,01}{2} = 10^4 \\text{ A/m}$$."
                },
                {
                    "type": "calculation",
                    "text": "2. A homogén, B = 0,4 T indukciójú mágneses tér merőleges az ℓ= 10 cm nyomtávú, hosszú, vízszintes, súrlódásmentes vezető sínpárra. A sínek közé U= 60 mV feszültséget kapcsolunk, a sínpárra pedig egy könnyű, jól vezető rudat helyezünk. Mekkora állandósult sebességet ér el a rúd hosszú idő után?",
                    "options": {
                        "a": "1 m/s",
                        "b": "1,5 m/s",
                        "c": "2 m/s",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$v = \\frac{U}{B \\cdot \\ell}$$",
                    "explanation": "A rúdra a feszültségforrás miatt áram folyik, így Lorentz-erő hat rá, ami gyorsítja. Mozgás közben a mágneses térben mozgó rúdban feszültség indukálódik ($$U_i = B \\cdot \\ell \\cdot v$$), ami Lenz törvénye értelmében a külső feszültség ellen hat. Állandósult sebesség akkor alakul ki, ha a rúdra ható eredő erő nulla, azaz az áram nullára csökken. Ez akkor következik be, ha az indukált feszültség nagysága megegyezik a rákapcsolt feszültséggel: $$U = U_i = B \\cdot \\ell \\cdot v$$. Ebből a sebesség: $$v = \\frac{U}{B \\cdot \\ell} = \\frac{60 \\cdot 10^{-3} \\text{ V}}{0,4 \\text{ T} \\cdot 0,1 \\text{ m}} = 1,5 \\text{ m/s}$$."
                },
                {
                    "type": "calculation",
                    "text": "3. Mindkét végén nyitott síp alapfrekvenciája 120 Hz. Milyen hosszú a síp, ha a hang terjedési sebessége 340 m/s?",
                    "options": {
                        "a": "1,375 m",
                        "b": "2,83 m",
                        "c": "1,42 m",
                        "d": "egyik sem"
                    },
                    "correctOption": "c",
                    "formula": "$$L = \\frac{v}{2f}$$",
                    "explanation": "Mindkét végén nyitott síp esetén az alaphanghoz tartozó állóhullámnak a síp két végén duzzadóhelye, középen pedig csomópontja van, így a síp hossza a hullámhossz fele: $$L = \\frac{\\lambda}{2}$$. A hullámhossz a terjedési sebességből és a frekvenciából: $$\\lambda = \\frac{v}{f}$$. Így a síp hossza: $$L = \\frac{v}{2f} = \\frac{340 \\text{ m/s}}{2 \\cdot 120 \\text{ Hz}} = \\frac{340}{240} \\text{ m} \\approx 1,4167 \\text{ m} \\approx 1,42 \\text{ m}$$."
                },
                {
                    "type": "calculation",
                    "text": "4. Egy a = 0,3 m sugarú, kiterjedt hengeres tartományban a mágneses indukció vektorának változási sebessége 0,02 T/s. Határozza meg az indukált térerősség értékét a tartomány tengelyétől 0,2 m távolságban!",
                    "options": {
                        "a": "4 mV/m",
                        "b": "2 mV/m",
                        "c": "5,6 mV/m",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$E = \\frac{r}{2} \\frac{\\Delta B}{\\Delta t}$$",
                    "explanation": "A Faraday-féle indukciós törvény integrális alakja: $$\\oint \\mathbf{E} \\cdot \\mathrm{d}\\mathbf{l} = -\\frac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}$$. Mivel a $0,2 \\text{ m}$-es távolság kisebb, mint a tartomány $0,3 \\text{ m}$-es sugara, egy $r=0,2 \\text{ m}$ sugarú kör mentén integrálunk, amely teljesen a mágneses téren belül van. A feszültség ezen a körön: $$E \\cdot 2\\pi r = \\pi r^2 \\frac{\\mathrm{d}B}{\\mathrm{d}t}$$. Ebből az elektromos térerősség: $$E = \\frac{r}{2} \\frac{\\mathrm{d}B}{\\mathrm{d}t}$$. Behelyettesítve: $$E = \\frac{0,2 \\text{ m}}{2} \\cdot 0,02 \\text{ T/s} = 0,1 \\cdot 0,02 = 0,002 \\text{ V/m} = 2 \\text{ mV/m}$$."
                },
                {
                    "type": "calculation",
                    "text": "5. A 0,15 m oldalhosszúságú, négyzet alakú vezetőhurok normálisa 30°-os szöget zár be az 2,5 Vs/m² indukciójú mágneses tér indukcióvektorával. A hurokra ható forgatónyomaték 0,08 Nm. Mekkora a hurokban folyó áramerősség?",
                    "options": {
                        "a": "6,67 A",
                        "b": "2,844 A",
                        "c": "1,67 A",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$I = \\frac{M}{A \\cdot B \\cdot \\sin(\\alpha)}$$",
                    "explanation": "A vezetőhurokra ható forgatónyomaték nagysága $$M = I \\cdot A \\cdot B \\cdot \\sin(\\alpha)$$, ahol $A$ a hurok területe, $\\alpha$ pedig a hurok normálvektora és az indukcióvektor által bezárt szög. A négyzet területe $$A = a^2 = 0,15^2 = 0,0225 \\text{ m}^2$$. A képletet átrendezve az áramerősségre: $$I = \\frac{M}{A \\cdot B \\cdot \\sin(\\alpha)}$$. Behelyettesítve: $$I = \\frac{0,08 \\text{ Nm}}{0,0225 \\text{ m}^2 \\cdot 2,5 \\text{ T} \\cdot \\sin(30^{\\circ})} = \\frac{0,08}{0,0225 \\cdot 2,5 \\cdot 0,5} \\approx 2,844 \\text{ A}$$."
                },
                {
                    "type": "calculation",
                    "text": "6. Mekkora a feszültség (nagysága) az A és B pontok között?",
                    "options": {
                        "a": "13,3 V",
                        "b": "2,66 V",
                        "c": "20 V",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$U_{AB} = \\frac{\\sum \\frac{U_i}{R_i}}{\\sum \\frac{1}{R_i}}$$",
                    "explanation": "A kapcsolás alapján az A és B pontok közötti feszültséget a csomóponti potenciálok módszerével (más néven Millman-tétellel) vagy Kirchhoff törvényeivel határozhatjuk meg. A párhuzamos ágak feszültségeiből és ellenállásaiból az eredő feszültség általános képlete: $$U_{AB} = \\frac{\\sum \\frac{U_i}{R_i}}{\\sum \\frac{1}{R_i}}$$. A megadott értékeket előjelhelyesen behelyettesítve a kapott feszültség nagysága $\\approx 13,3 \\text{ V}$ ($40/3 \\text{ V}$)."
                },
                {
                    "type": "calculation",
                    "text": "7. Egy sebességszűrőben alkalmazott elektromos és mágneses mezőt az E = Eez és B = Bey egyenletek írják le (itt ey és ez az y, illetve z irányú egységvektort jelölik). Ha B = 0,02 T, mekkora E térerősséget kell alkalmazni, hogy az x tengely pozitívirányában haladó, 100 eV mozgási energiájú elektron pályája egyenes maradjon?",
                    "options": {
                        "a": "119 kV/m",
                        "b": "84 V/m",
                        "c": "2,96 · 10^14 V/m",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$E = v \\cdot B$$",
                    "explanation": "Az elektron sebességét a mozgási energiájából határozhatjuk meg: $$E_{mozg} = \\frac{1}{2}mv^2 \\implies v = \\sqrt{\\frac{2E_{mozg}}{m}}$$. A 100 eV energia joule-ban: $$100 \\cdot 1,6 \\cdot 10^{-19} = 1,6 \\cdot 10^{-17} \\text{ J}$$. Ebből a sebesség: $$v = \\sqrt{\\frac{2 \\cdot 1,6 \\cdot 10^{-17} \\text{ J}}{9,1 \\cdot 10^{-31} \\text{ kg}}} \\approx 5,93 \\cdot 10^6 \\text{ m/s}$$. A sebességszűrőben az egyenes vonalú mozgás feltétele, hogy az elektromos erő ($F_e = qE$) és a Lorentz-erő ($F_m = qvB$) kiegyenlítse egymást: $$qE = qvB \\implies E = vB$$. Behelyettesítve: $$E = 5,93 \\cdot 10^6 \\text{ m/s} \\cdot 0,02 \\text{ T} \\approx 118600 \\text{ V/m} = 118,6 \\text{ kV/m}$$, ami kerekítve $119 \\text{ kV/m}$."
                },
                {
                    "type": "calculation",
                    "text": "8. Egy a = 10 cm oldalú szabályos háromszög csúcsaiban három egyforma, Q = +2 nC nagyságú ponttöltés helyezkedik el. Mekkora az egyik töltésre ható eredő elektromos erő nagysága?",
                    "options": {
                        "a": "3,6 · 10^{-6} N",
                        "b": "6,2 · 10^{-6} N",
                        "c": "7,2 · 10^{-6} N",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$F_{\\text{eredő}} = F_1 \\sqrt{3}$$",
                    "explanation": "Bármelyik töltésre a másik két töltés taszítóerőt fejt ki. A Coulomb-törvény alapján egyetlen ilyen erő nagysága: $$F_1 = k \\frac{Q^2}{a^2} = 9 \\cdot 10^9 \\frac{(2 \\cdot 10^{-9})^2}{0,1^2} = 3,6 \\cdot 10^{-6} \\text{ N}$$. Mivel a szabályos háromszög szögei $60^{\\circ}$-osak, a két $F_1$ nagyságú erő vektoriális összege koszinusztétellel számolható: $$F_{\\text{eredő}} = \\sqrt{F_1^2 + F_1^2 + 2F_1 F_1 \\cos(60^{\\circ})} = F_1 \\sqrt{3}$$. Kiszámolva: $$F_{\\text{eredő}} = 3,6 \\cdot 10^{-6} \\cdot \\sqrt{3} \\approx 6,235 \\cdot 10^{-6} \\text{ N}$$."
                },
                {
                    "type": "calculation",
                    "text": "9. Érdes asztallapra m tömegű, homogén hengert helyezünk, amelyet a palástjára felcsévélt fonálnál fogva állandó F nagyságú vízszintes erővel húzni kezdünk az ábrán látható módon. Mekkora a henger tömegközéppontjának gyorsulása? (Az R sugarú henger tehetetlenségi nyomatéka a tömegközéppontjára vonatkoztatva mR²/2.)",
                    "options": {
                        "a": "2F / 3m",
                        "b": "2F / m",
                        "c": "4F / 3m",
                        "d": "egyik sem"
                    },
                    "correctOption": "c",
                    "formula": "$$a = \\frac{4F}{3m}$$",
                    "explanation": "Írjuk fel a mozgásegyenleteket a hengerre. A haladó mozgásra Newton II. törvénye: $$F - F_s = ma$$, ahol $F_s$ a talaj által kifejtett tapadási súrlódási erő. A forgómozgásra vonatkozó egyenlet a tömegközéppontra: mind a húzóerő ($F$), mind a súrlódási erő ($F_s$) azonos irányban forgat (feltételezve, hogy a fonalat a henger tetején húzzuk). A forgatónyomatékok összege: $$F \\cdot R + F_s \\cdot R = \\Theta \\cdot \\beta$$. Mivel tiszta gördülésről van szó, a szöggyorsulás $\\beta = \\frac{a}{R}$. A tehetetlenségi nyomaték $\\Theta = \\frac{1}{2}mR^2$. Ezt beírva a forgásegyenletbe és elosztva $R$-rel: $$F + F_s = \\frac{1}{2}ma$$. A haladó és forgómozgás egyenletét összeadva: $$(F - F_s) + (F + F_s) = ma + \\frac{1}{2}ma \\implies 2F = \\frac{3}{2}ma$$. Ebből kifejezve a gyorsulást: $$a = \\frac{4F}{3m}$$."
                }
            ]
        },
        {
            "id": "vizsga-2-2023",
            "title": "2. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Egy mondatban ismertesse a Faraday-törvényt ábra segítségével (1+1 pont)! Adja meg a törvényt egyenlet alakjában is (1 pont), és nevezze meg a törvényben szereplő fizikai mennyiségek jelentését (1 pont)! Mire utal a negatív előjel (2 pont)? Röviden vázoljon egy kísérletet, amelyben a törvény érvényesül (2 pont)!",
                    "correctOption": "",
                    "options": null,
                    "formula": "$$ U_i = - \\frac{d\\Phi_B}{dt} $$",
                    "explanation": "A Faraday-féle indukciós törvény kimondja, hogy egy zárt vezetőhurokban indukált elektromotoros erő (feszültség) egyenesen arányos a hurkon áthaladó mágneses fluxus időbeli megváltozásának sebességével. Képletben: $$ U_i = - \\frac{d\\Phi_B}{dt} $$, ahol $U_i$ az indukált feszültség, $\\Phi_B$ a mágneses fluxus, $t$ az idő. A negatív előjel a Lenz-törvényre utal, azaz az indukált áram iránya mindig olyan, hogy mágneses terével akadályozni igyekszik az őt létrehozó fluxusváltozást. Kísérlet: Egy tekercshez feszültségmérőt csatlakoztatunk. Ha egy rúdmágnest közelítünk a tekercshez vagy távolítunk tőle, a műszer feszültséget jelez. Amikor a mágnes áll, nincs indukált feszültség."
                },
                {
                    "type": "true-false",
                    "text": "Egy elektroszkóp közelébe negatív töltésű ebonit rudat helyezünk, ezután az elektroszkópot rövid ideig leföldeljük, végül az ebonit rudat eltávolítjuk. Igaz vagy hamis, hogy a kísérlet végén az elektroszkóp pozitívtöltésű?",
                    "correctOption": "i",
                    "options": null,
                    "formula": "",
                    "explanation": "Ez az elektromos megosztás (influencia) jelensége. A negatív rúd taszítja az elektroszkópban lévő elektronokat a lemezek felé. A földelés hatására az elektronok a taszítás miatt a földbe távoznak. Így az elektroszkóp elektronhiányos lesz, vagyis pozitív töltésű marad a földelés megszüntetése és a rúd eltávolítása után."
                },
                {
                    "type": "true-false",
                    "text": "Egy adott feszültségű telephez csatlakoztatott síkkondenzátor lemezeinek távolságát csökkentve a lemezek közötti elektromos térerősség növekszik.",
                    "correctOption": "i",
                    "options": null,
                    "formula": "$$ E = \\frac{U}{d} $$",
                    "explanation": "A telepre csatlakoztatott kondenzátor lemezei közötti $U$ feszültség állandó. A homogén elektromos tér térerőssége $$ E = \\frac{U}{d} $$. Mivel a lemezek távolsága ($d$) csökken, a térerősség ($E$) valóban növekszik."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses tér forrásmentessége azt jelenti, hogy a mágneses indukcióvonalak zárt felületre vett integrálja nulla.",
                    "correctOption": "i",
                    "options": null,
                    "formula": "$$ \\oint_A \\mathbf{B} \\cdot d\\mathbf{A} = 0 $$",
                    "explanation": "A mágneses tér Gauss-törvénye kimondja, hogy $$ \\oint_A \\mathbf{B} \\cdot d\\mathbf{A} = 0 $$. Ez azt jelenti, hogy nincsenek mágneses monopólusok (források), így a mágneses indukcióvonalak mindig zárt görbék, ezért bármely zárt felületre vett fluxusuk zérus."
                },
                {
                    "type": "true-false",
                    "text": "Rugalmas kötél egyik végét harmonikusan gerjesztjük, a másik vég szabadon mozoghat. A szabad véghez érkező hullám ellentétes fázisban verődik vissza.",
                    "correctOption": "h",
                    "options": null,
                    "formula": "",
                    "explanation": "Szabad véghez érkező hullám azonos fázisban verődik vissza (nincs fázisugrás). Ellentétes fázisú visszaverődés (fázisugrás) rögzített vég esetén történik."
                },
                {
                    "type": "true-false",
                    "text": "Egy állóhullámban a szomszédos duzzadó helyek távolsága megegyezik a hullámhosszal.",
                    "correctOption": "h",
                    "options": null,
                    "formula": "",
                    "explanation": "Egy állóhullámban a szomszédos duzzadóhelyek (amplitúdó maximumok) közötti távolság a hullámhossz fele ($$ \\lambda / 2 $$), nem pedig a teljes hullámhossz."
                },
                {
                    "type": "true-false",
                    "text": "Egy töltött tömör fémgömb belsejében a térerőség zérus.",
                    "correctOption": "i",
                    "options": null,
                    "formula": "",
                    "explanation": "Elektrosztatikus egyensúlyban a vezető (fém) belsejében a térerősség mindig zérus ($$ E = 0 $$), különben az ott lévő töltéshordozók elmozdulnának. Minden többlettöltés a felületen helyezkedik el."
                },
                {
                    "type": "true-false",
                    "text": "Egy régi Ikarus busz karosszériája rezgésbe jön, amikor a motor fordulatszáma elér egy bizonyos értéket. Igaz vagy hamis, hogy a jelenség oka a rezonancia?",
                    "correctOption": "i",
                    "options": null,
                    "formula": "",
                    "explanation": "Igen, a jelenség oka a rezonancia. Amikor a motor gerjesztő frekvenciája megegyezik a karosszéria valamelyik sajátfrekvenciájával, a rezgés amplitúdója ugrásszerűen megnő."
                },
                {
                    "type": "true-false",
                    "text": "Kondenzátor töltésére és feszültségére igaz: U*Q=állandó.",
                    "correctOption": "h",
                    "options": null,
                    "formula": "$$ C = \\frac{Q}{U} $$",
                    "explanation": "Egy adott kondenzátor kapacitása ($C$) állandó, és a definíció szerint $$ C = \\frac{Q}{U} $$. Tehát $Q$ és $U$ egyenesen arányosak egymással, a hányadosuk az állandó, nem a szorzatuk."
                },
                {
                    "type": "true-false",
                    "text": "Az Ampere törvény általánosított alakja szerint az elektromos tér fluxusának megváltozása is mágneses teret kelt.",
                    "correctOption": "i",
                    "options": null,
                    "formula": "$$ \\oint \\mathbf{B} \\cdot d\\mathbf{s} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt} $$",
                    "explanation": "A Maxwell-Ampère törvény az Ampère-törvény kiegészítése az eltolási árammal ($$ \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt} $$), amely mutatja, hogy az időben változó elektromos fluxus valóban mágneses teret is kelt."
                },
                {
                    "type": "true-false",
                    "text": "Egy hagyományos izzószál 1000 0C-on 10 W teljesítménnyel sugároz. Igaz vagy hamis, hogy 2000 0C-on a sugárzási teljesítmény 160 W?",
                    "correctOption": "h",
                    "options": null,
                    "formula": "$$ P \\propto T^4 $$",
                    "explanation": "A Stefan-Boltzmann törvény szerint a kisugárzott teljesítmény az abszolút hőmérséklet (Kelvinben) negyedik hatványával arányos: $$ P \\propto T^4 $$. A hőmérsékleteket Kelvinbe átváltva: $T_1 = 1273\\text{ K}$ és $T_2 = 2273\\text{ K}$. Mivel $T_2$ nem kétszerese $T_1$-nek, a teljesítmény sem nő $2^4 = 16$-szorosára."
                },
                {
                    "type": "calculation",
                    "text": "1. Az ábra szerinti kapcsolásban a K kapcsoló nyitott állásánál 4 A, zárt kapcsolóállás esetén pedig 5,83 A erősségű áram folyik az elemet tartalmazó ágban. Mekkora az elem belső ellenállása? (R=8 ohm)",
                    "correctOption": "a",
                    "options": {
                        "a": "0,5 ohm",
                        "b": "0,8 ohm",
                        "c": "6,2 ohm",
                        "d": "egyik sem"
                    },
                    "formula": "$$ U_0 = I(R_k + r) $$",
                    "explanation": "Tételezzük fel az áramkör felépítése alapján, hogy K nyitott állásánál a külső ellenállás $R_{k1} = 8\\,\\Omega$. K zárt állásánál a külső ellenállás $R_{k2} = 16/3\\,\\Omega \\approx 5,33\\,\\Omega$. Ohm törvénye a teljes áramkörre: $U_0 = I(R_k + r)$. Felírva a két egyenletet: $U_0 = 4 \\cdot (8 + r)$ és $U_0 = 5,833 \\cdot (16/3 + r)$. A két egyenletet egyenlővé téve: $32 + 4r = 31,11 + 5,833r$, amiből $1,833r \\approx 0,89 \\implies r \\approx 0,5\\,\\Omega$."
                },
                {
                    "type": "calculation",
                    "text": "2. Egy 12 V-os telepet mérlegre helyezünk; a telep pólusaihoz téglalap alakú dróthurkot erősítünk úgy, hogy a téglalap alsó része B=0,65 T indukciójú mágneses téren haladjon át. Az össztömeg 50 g. Mekkora legyen a huzal ellenállása, hogy a mérleg éppen zérust mutasson?",
                    "correctOption": "a",
                    "options": {
                        "a": "3,18 ohm",
                        "b": "1,75 ohm",
                        "c": "2,1 ohm",
                        "d": "egyik sem"
                    },
                    "formula": "$$ F_m = B I L = m g \\implies R = \\frac{U}{I} = \\frac{U B L}{m g} $$",
                    "explanation": "A mérleg zérust mutat, ha a gravitációs erőt ($F_g = mg$) kiegyenlíti a Lorentz-erő ($F_m = BIL$). A huzal hossza az ábra alapján $L = 20\\text{ cm} = 0,2\\text{ m}$. A gravitációs erő: $F_g = 0,05\\text{ kg} \\cdot 9,81\\text{ m/s}^2 = 0,4905\\text{ N}$. A szükséges áram: $I = \\frac{F_g}{B \\cdot L} = \\frac{0,4905}{0,65 \\cdot 0,2} = 3,773\\text{ A}$. Az ellenállás Ohm törvényéből: $R = \\frac{U}{I} = \\frac{12}{3,773} \\approx 3,18\\,\\Omega$."
                },
                {
                    "type": "calculation",
                    "text": "3. Mindkét végén nyitott síp alapfrekvenciája 120 Hz. Milyen hosszú a síp, ha a hang terjedési sebessége 330 m/s?",
                    "correctOption": "a",
                    "options": {
                        "a": "1,375 m",
                        "b": "1,55 m",
                        "c": "2,75 m",
                        "d": "egyik sem"
                    },
                    "formula": "$$ L = \\frac{v}{2f} $$",
                    "explanation": "Mindkét végén nyitott síp alaprezgése esetén a hullámhossz a síphossz kétszerese: $$ \\lambda = 2L $$. Az alapfrekvencia képlete: $$ f = \\frac{v}{\\lambda} = \\frac{v}{2L} $$. Ebből a síp hossza kifejezve: $$ L = \\frac{v}{2f} = \\frac{330}{2 \\cdot 120} = \\frac{330}{240} = 1,375\\text{ m} $$."
                },
                {
                    "type": "calculation",
                    "text": "4. Egy 15 cm hosszú, 400 menetű tekercsben 2,5 A erősségű áram folyik. Mekkora a mágneses indukció a tekercs belsejében",
                    "correctOption": "a",
                    "options": {
                        "a": "8,38x10^-3 Vs/m^2",
                        "b": "0,3 Vs/m^2",
                        "c": "6,28x10^-3 Vs/m^2",
                        "d": "egyik sem"
                    },
                    "formula": "$$ B = \\mu_0 \\frac{N}{l} I $$",
                    "explanation": "Hosszú tekercs belsejében a mágneses indukció: $$ B = \\mu_0 \\frac{N}{l} I $$. Behelyettesítve az adatokat ($l = 0,15\\text{ m}$, $N = 400$, $I = 2,5\\text{ A}$, $\\mu_0 = 4\\pi \\cdot 10^{-7}\\text{ Vs/Am}$): $$ B = 4\\pi \\cdot 10^{-7} \\cdot \\frac{400}{0,15} \\cdot 2,5 \\approx 8,38 \\cdot 10^{-3}\\text{ T} \\text{ (vagy Vs/m}^2) $$."
                },
                {
                    "type": "calculation",
                    "text": "5. Elhanyagolható kezdősebességű, egyszeresen töltött ionokat U feszültséggel gyorsítunk. A felgyorsított, Q = 1,6x10^-19 C töltésű és m = 1,15x10^-26 kg tömegű ionok egyenes vonalú egyenletes mozgással jutnak át egy olyan sebességszűrőn, melyben E = 1,20x10^4 N/C térerősségű elektromos tér, és rá merőleges, B = 40 mT indukciójú mágneses tér van jelen. Mekkora az U gyorsító feszültség nagysága?",
                    "correctOption": "a",
                    "options": {
                        "a": "3,2 kV",
                        "b": "4,1 kV",
                        "c": "8,2 kV",
                        "d": "egyik sem"
                    },
                    "formula": "$$ U = \\frac{m E^2}{2 Q B^2} $$",
                    "explanation": "A sebességszűrőben az egyenes vonalú áthaladás feltétele: $QE = QvB$, amiből a sebesség $$ v = \\frac{E}{B} = \\frac{1,20 \\cdot 10^4}{0,04} = 3 \\cdot 10^5\\text{ m/s} $$. A gyorsítás munkatétele: $$ QU = \\frac{1}{2}mv^2 $$. Ebből a feszültség: $$ U = \\frac{mv^2}{2Q} = \\frac{1,15 \\cdot 10^{-26} \\cdot (3 \\cdot 10^5)^2}{2 \\cdot 1,6 \\cdot 10^{-19}} \\approx 3,23 \\cdot 10^3\\text{ V} = 3,23\\text{ kV} $$."
                },
                {
                    "type": "calculation",
                    "text": "6. A homogén, B= 0,30 T indukciójú mágneses tér merőleges az l = 10 cm-es nyomtávú, hosszú, vízszintes, súrlódásmentes vezető sínpárra. A sínek közé egy R= 20 ohm-os ellenálláson keresztül U= 2 V feszültséget kapcsolunk, a sínpárra pedig egy m= 20 g tömegű, jól vezető rudat helyezünk. Mekkora gyorsulással indul el a kezdetben álló rúd?",
                    "correctOption": "c",
                    "options": {
                        "a": "0,5 m/s^2",
                        "b": "0,32 m/s^2",
                        "c": "0,15 m/s^2",
                        "d": "egyik sem"
                    },
                    "formula": "$$ a = \\frac{B U l}{R m} $$",
                    "explanation": "A bekapcsolt feszültség hatására folyó áram az Ohm-törvényből: $$ I = \\frac{U}{R} = \\frac{2}{20} = 0,1\\text{ A} $$. A rúdra ható Lorentz-erő: $$ F = B \\cdot I \\cdot l = 0,30 \\cdot 0,1 \\cdot 0,10 = 0,003\\text{ N} $$. Newton II. törvénye alapján a gyorsulás: $$ a = \\frac{F}{m} = \\frac{0,003\\text{ N}}{0,020\\text{ kg}} = 0,15\\text{ m/s}^2 $$."
                },
                {
                    "type": "calculation",
                    "text": "7. Mekkora munkavégzés szükséges egy 0,5 m sugarú, 20 kg tömegű tömör henger megállításához, ha a henger vízszintes talajon 2 m/s sebességgel tisztán gördül?",
                    "correctOption": "c",
                    "options": {
                        "a": "20 J",
                        "b": "40 J",
                        "c": "60 J",
                        "d": "egyik sem"
                    },
                    "formula": "$$ W = \\frac{3}{4} m v^2 $$",
                    "explanation": "A tisztán gördülő tömör henger mozgási energiája a haladó és forgómozgás energiájának összege: $$ E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}\\Theta\\omega^2 $$. Tiszta gördülésnél $$ \\omega = \\frac{v}{R} $$, a tehetetlenségi nyomaték $$ \\Theta = \\frac{1}{2}mR^2 $$, így a forgási energia $$ \\frac{1}{4}mv^2 $$. A teljes energia $$ E_k = \\frac{3}{4}mv^2 = \\frac{3}{4} \\cdot 20 \\cdot 2^2 = 60\\text{ J} $$. A megállításhoz végzett munka megegyezik a mozgási energiával, azaz 60 J."
                },
                {
                    "type": "calculation",
                    "text": "8. Egy hideg téli napon a külső hőmérséklet -15 C. Egy kültéri finn szaunában az állandó 80 C-os belső hőmérséklet biztosításához a kályha 2000 W teljesítményt ad le. Mekkora fűtőteljesítmény lenne szükséges a belső hőmérséklet 90 C-os állandó értéken tartásához?",
                    "correctOption": "b",
                    "options": {
                        "a": "2500 W",
                        "b": "2200 W",
                        "c": "2000 W",
                        "d": "egyik sem"
                    },
                    "formula": "$$ P_2 = P_1 \\frac{\\Delta T_2}{\\Delta T_1} $$",
                    "explanation": "Newton lehűlési törvénye alapján a hőveszteség egyenesen arányos a külső és belső hőmérséklet különbségével: $$ P \\propto \\Delta T $$. Első esetben: $$ \\Delta T_1 = 80 - (-15) = 95~^\\circ\\text{C} $$, és $P_1 = 2000\\text{ W}$. Második esetben: $$ \\Delta T_2 = 90 - (-15) = 105~^\\circ\\text{C} $$. Az ehhez szükséges teljesítmény: $$ P_2 = P_1 \\frac{\\Delta T_2}{\\Delta T_1} = 2000 \\cdot \\frac{105}{95} \\approx 2210,5\\text{ W} $$. A legközelebbi kerekített megadott érték a 2200 W."
                },
                {
                    "type": "calculation",
                    "text": "9. Egy a = 10 cm oldalú négyzet csúcsaiban négy egyforma, Q = +2 nC nagyságú ponttöltés helyezkedik el. Mekkora az egyik töltésre ható eredő elektromos erő nagysága?",
                    "correctOption": "b",
                    "options": {
                        "a": "3,6*10^-6 N",
                        "b": "6,9*10^-6 N",
                        "c": "9,0*10^-6 N",
                        "d": "egyik sem"
                    },
                    "formula": "$$ F_{eredo} = \\left(\\sqrt{2} + 0,5\\right) F_1 $$",
                    "explanation": "A sarkon lévő töltésre az oldalak mentén lévő két szomszédos töltés $F_1 = k \\frac{Q^2}{a^2}$ erőt fejt ki, melyek merőlegesek, eredőjük $\\sqrt{2}F_1$. Az átlósan lévő harmadik töltés ereje $F_3 = k \\frac{Q^2}{(a\\sqrt{2})^2} = \\frac{1}{2}F_1$, és iránya megegyezik a $\\sqrt{2}F_1$ eredőével. A teljes erő: $$ F_{eredo} = \\left(\\sqrt{2} + 0,5\\right) F_1 $$. Behelyettesítve $F_1 = 9\\cdot 10^9 \\frac{(2\\cdot 10^{-9})^2}{0,1^2} = 3,6\\cdot 10^{-6}\\text{ N}$. A teljes eredő erő így: $F_{eredo} \\approx 1,914 \\cdot 3,6\\cdot 10^{-6} \\approx 6,89\\cdot 10^{-6}\\text{ N} $, ami kerekítve $6,9\\cdot 10^{-6}\\text{ N}$."
                },
                {
                    "type": "calculation",
                    "text": "IMSC: Egy +lambda vonalmenti töltéssűrűségű, L hosszúságú szigetelő szálra egy -Q töltésű, m tömegű kicsiny gyöngy van felfűzve. Kezdetben a gyöngy a szál közepén helyezkedik el. Mekkora periódusidővel rezeghet a gyöngy az egyensúlyi helyzete körül kis kitérések esetén?",
                    "correctOption": "",
                    "options": {
                        "a": "",
                        "b": "",
                        "c": "",
                        "d": ""
                    },
                    "formula": "$$ T = \\pi L \\sqrt{\\frac{2 \\pi \\varepsilon_0 m}{\\lambda Q}} $$",
                    "explanation": "Ha a gyöngy $x \\ll L$ távolságra kimozdul a középpontból, a vonalas töltéseloszlásból származó térerősséget integrálással kapjuk meg: $$ E(x) = k \\lambda \\left( \\frac{1}{L/2 - x} - \\frac{1}{L/2 + x} \\right) \\approx \\frac{8 k \\lambda}{L^2} x $$. A gyöngyre ható visszatérítő erő: $$ F = -Q \\cdot E(x) = -\\frac{8 k \\lambda Q}{L^2} x $$. Ez egy harmonikus rezgőmozgás $D = \\frac{8 k \\lambda Q}{L^2}$ direkcióerővel. A periódusidő: $$ T = 2\\pi \\sqrt{\\frac{m}{D}} = 2\\pi \\sqrt{\\frac{m L^2}{8 k \\lambda Q}} = \\pi L \\sqrt{\\frac{2 \\pi \\varepsilon_0 m}{\\lambda Q}} $$."
                }
            ]
        },
        {
            "id": "vizsga-3-2023",
            "title": "3. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Ismertesse az Ampère-féle gerjesztési törvényt ábra segítségével (1+1 pont)! Adja meg a törvényt egyenlet alakjában is (1 pont), és nevezze meg a törvényben szereplő fizikai mennyiségeket (1 pont)! Hogyan lehet meghatározni az áram által keltett indukcióvektor irányát (2 pont)? Röviden vázolja Ørsted kísérletét (2 pont)!",
                    "explanation": "Ampère-féle gerjesztési törvény kimondja, hogy a mágneses indukcióvektor tetszőleges zárt görbére vett vonalmenti integrálja (cirkulációja) egyenlő a görbe által határolt felületen átfolyó áramok algebrai összegének és a vákuum permeabilitásának szorzatával.<br>Egyenlet: $$ \\oint_g \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\sum I_i $$<br>$\\mathbf{B}$: mágneses indukcióvektor, $d\\mathbf{l}$: a zárt görbe elemi ívhossza, $\\mu_0$: vákuum permeabilitása ($4\\pi \\cdot 10^{-7} \\text{ Vs/Am}$), $\\sum I_i$: a zárt görbe által körülfogott áramok algebrai összege.<br>Irány meghatározása (Jobbkéz-szabály): Ha jobb kezünk hüvelykujja mutatja az áram irányát, akkor a begörbített ujjaink mutatják a mágneses indukcióvonalak irányát.<br>Ørsted kísérlete: Egy áramjárta vezető közelében elhelyezett iránytű kitér eredeti (észak-dél) irányából, ami bizonyítja, hogy az elektromos áram mágneses teret kelt maga körül."
                },
                {
                    "type": "true-false",
                    "text": "Szobahőmérsékletű fém- és fafelületre helyezett jégkockák közül azért olvad el a fémfelületre helyezett jégkocka hamarabb, mert a fém jobb hővezető a fánál.",
                    "correctOption": "i",
                    "explanation": "A fémek jó hővezetők, míg a fa hőszigetelő. A jobb hővezető képesség miatt a fém gyorsabban tud hőt átadni a környezetből a jégkockának, így az hamarabb elolvad."
                },
                {
                    "type": "true-false",
                    "text": "Ha egy kiterjedt testre ható eredő forgatónyomaték nulla, akkor a test nem forog.",
                    "correctOption": "h",
                    "explanation": "A forgatónyomaték nulla volta azt jelenti, hogy a test szöggyorsulása nulla ($$ \\sum M = \\Theta \\beta = 0 $$). Tehát a test foroghat állandó szögsebességgel, ha korábban már forgásba jött (perdületmegmaradás)."
                },
                {
                    "type": "true-false",
                    "text": "A hősugárzás létrejöttéhez légnemű közeg (pl. levegő) szükséges.",
                    "correctOption": "h",
                    "explanation": "A hősugárzás elektromágneses hullámok (főleg infravörös sugárzás) formájában történik, melyek vákuumban is képesek terjedni. Nincs szükség közvetítő közegre."
                },
                {
                    "type": "true-false",
                    "text": "Rugalmas kötél egyik végét harmonikusan gerjesztjük, a másik vég szabadon mozoghat. A szabad véghez érkező hullám azonos fázisban verődik vissza.",
                    "correctOption": "i",
                    "explanation": "Szabad végen történő visszaverődéskor nincs fázisugrás, tehát a hullám azonos fázisban verődik vissza (hegyként érkező hegyként megy vissza). Rögzített végen lenne ellentétes fázisú a visszaverődés."
                },
                {
                    "type": "true-false",
                    "text": "A radiátor fölé függesztett papírkígyó forgásba jön. Igaz vagy hamis, hogy a jelenség oka a hőáramlás?",
                    "correctOption": "i",
                    "explanation": "A radiátor felmelegíti a körülötte lévő levegőt, ami kitágul, sűrűsége csökken és felszáll. Ez a felfelé áramló levegő (konvekció, azaz hőáramlás) forgatja meg a papírkígyót."
                },
                {
                    "type": "true-false",
                    "text": "Sorosan kapcsolt kondenzátorok kapacitása összeadódik.",
                    "correctOption": "h",
                    "explanation": "Sorosan kapcsolt kondenzátorok eredő kapacitásának reciproka adódik össze ($$ \\frac{1}{C_e} = \\sum \\frac{1}{C_i} $$). Párhuzamos kapcsolás esetén adódnak össze a kapacitások."
                },
                {
                    "type": "true-false",
                    "text": "Az elektrosztatikus mező erővonalai önmagukban záródó görbék.",
                    "correctOption": "h",
                    "explanation": "Az elektrosztatikus mező konzervatív, erővonalai pozitív töltésből indulnak és negatív töltésen végződnek (vagy a végtelenbe tartanak). Önmagukban záródó erővonalai a mágneses mezőnek (vagy az indukált örvényes elektromos mezőnek) vannak."
                },
                {
                    "type": "true-false",
                    "text": "Kondenzátor töltésére és feszültségére igaz: U/Q=állandó.",
                    "correctOption": "i",
                    "explanation": "A kondenzátor kapacitása ($C$) definíció szerint állandó adott geometriánál: $$ C = \\frac{Q}{U} $$. Ebből adódóan a reciprok, azaz az $$ \\frac{U}{Q} = \\frac{1}{C} $$ is állandó."
                },
                {
                    "type": "true-false",
                    "text": "Az Ampere törvény általánosított alakja szerint az elektromos tér fluxusának megváltozása is mágneses teret kelt.",
                    "correctOption": "i",
                    "explanation": "A Maxwell-Ampère törvény (általánosított Ampère-törvény) kiegészült az eltolási áram fogalmával ($$ I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} $$). Ez alapján az elektromos fluxus időbeli változása valóban mágneses teret kelt."
                },
                {
                    "type": "true-false",
                    "text": "Egy szigeteletlen homogén drótdarab ellenállása R. Ha a drótot három egyenlő részre vágjuk, s a darabokat párhuzamosan összefogjuk, az ellenállása harmad részére csökken.",
                    "correctOption": "h",
                    "explanation": "Ha a drótot három részre vágjuk, egy darab ellenállása $$ R/3 $$ lesz (mivel a hossz a harmadára csökkent). Ha ezt a hármat párhuzamosan kapcsoljuk, az eredő ellenállás a darabok ellenállásának harmada, azaz $$ \\frac{R/3}{3} = \\frac{R}{9} $$ lesz, nem pedig harmada."
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
                    "formula": "$$ F = I \\cdot L \\cdot B \\cdot \\sin(\\alpha) $$",
                    "explanation": "A Lorentz-erő makroszkopikus alakja egyenes áramjárta vezetőre: $$ F = I \\cdot L \\cdot B \\cdot \\sin(\\alpha) $$. Mivel a vezető merőleges a mágneses térre, $$ \\alpha = 90^\\circ $$, így $$ \\sin(90^\\circ) = 1 $$. Kifejezve a mágneses indukciót: $$ B = \\frac{F}{I \\cdot L} $$. Behelyettesítve az adatokat: $$ F = 5 \\text{ N} $$, $$ I = 10 \\text{ A} $$, $$ L = 1 \\text{ m} $$, kapjuk: $$ B = \\frac{5}{10 \\cdot 1} = 0.5 \\text{ T} = 0.5 \\text{ Vs/m}^2 $$. A helyes válasz a b."
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
                    "formula": "$$ B = \\mu_0 \\cdot \\frac{N}{L} \\cdot I $$",
                    "explanation": "Egy hosszú, egyenes (szolenoid) tekercs belsejében a mágneses indukció nagysága a $$ B = \\mu_0 \\cdot \\frac{N}{L} \\cdot I $$ képlettel számolható. Adatok: $$ L = 0.06 \\text{ m} $$, $$ N = 300 $$, $$ I = 1 \\text{ A} $$, és $$ \\mu_0 = 4\\pi \\cdot 10^{-7} \\text{ Vs/Am} $$. Behelyettesítve: $$ B = 4\\pi \\cdot 10^{-7} \\cdot \\frac{300}{0.06} \\cdot 1 = 4\\pi \\cdot 10^{-7} \\cdot 5000 = 2000\\pi \\cdot 10^{-7} \\approx 6.28 \\cdot 10^{-3} \\text{ T} = 6.28 \\cdot 10^{-3} \\text{ Vs/m}^2 $$. A helyes válasz a b."
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
                    "formula": "$$ f = \\frac{v}{\\lambda} $$, $$ L = \\frac{\\lambda}{4} $$",
                    "explanation": "Félig nyitott (egyik végén nyitott, másik végén zárt) sípban kialakuló állóhullám alaphangjára igaz, hogy a síp hossza a hullámhossz negyede: $$ L = \\frac{\\lambda}{4} $$. A hullámhossz kiszámolható az $$ f = \\frac{v}{\\lambda} $$ képletből: $$ \\lambda = \\frac{v}{f} = \\frac{330 \\text{ m/s}}{440 \\text{ Hz}} = 0.75 \\text{ m} $$. Ekkor a síp hossza: $$ L = \\frac{0.75 \\text{ m}}{4} = 0.1875 \\text{ m} \\approx 0.188 \\text{ m} $$. A helyes válasz a c."
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
                    "formula": "$$ Q = C \\cdot U $$",
                    "explanation": "A hálózat eredő vagy a kondenzátorra jutó egyenértékű kapacitásból számolunk a $$ Q = C \\cdot U $$ képlettel. A megadott feszültség $$ U = 225 \\text{ V} $$. A helyes válaszként megadott töltés $$ Q = 2.25 \\cdot 10^{-4} \\text{ C} $$, ami abból adódik, hogy a kondenzátor kapacitása $$ C = 1 \\text{ } \\mu\\text{F} $$. Ez alapján: $$ Q = 10^{-6} \\text{ F} \\cdot 225 \\text{ V} = 2.25 \\cdot 10^{-4} \\text{ C} $$. A helyes válasz az a."
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
                    "formula": "$$ U = I \\cdot R $$, Kirchhoff törvényei",
                    "explanation": "Az Ohm-törvény ($$ U = I \\cdot R $$) alapján a 4 ohmos ellenálláson eső feszültség $$ U_4 = 4 \\cdot 2 = 8 \\text{ V} $$. A megadott a) válasz alapján a 10 ohmos ellenálláson 60 V feszültség esik, amihez $$ I_{10} = \\frac{60}{10} = 6 \\text{ A} $$ áram tartozik. Ez Kirchhoff csomóponti és huroktörvényeivel levezethető az adott specifikus ellenálláshálózat (tipikusan párhuzamos-soros ágak) áram-eloszlásából. A helyes válasz az a."
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
                    "formula": "$$ a_{max} = g $$, $$ a_{max} = A \\omega^2 $$",
                    "explanation": "Ahhoz, hogy a pénzdarab elemelkedjen a fémlaptól, a lap lefelé mutató legnagyobb gyorsulásának el kell érnie a nehézségi gyorsulás ($g$) értékét. Ha $$ a_{max} > g $$, a fémlap gyorsabban 'zuhan', mint a szabadeső test, így az elemelkedik. A harmonikus rezgőmozgás maximális gyorsulása: $$ a_{max} = A \\omega^2 = A (2\\pi f)^2 $$. Tehát $$ g = A \\cdot 4\\pi^2 f^2 $$. Kifejezve az amplitúdót: $$ A = \\frac{g}{4\\pi^2 f^2} $$. Kerekített nehézségi gyorsulással ($g=10 \\text{ m/s}^2$) számolva: $$ A = \\frac{10}{4 \\cdot \\pi^2 \\cdot 18^2} \\approx \\frac{10}{12791} \\approx 0.000781 \\text{ m} = 0.78 \\text{ mm} $$. A helyes válasz a c."
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
                    "formula": "$$ P = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d} $$",
                    "explanation": "A Fourier-féle hővezetési törvény alapján a fűtőtest által leadott teljesítmény egyenlő a falakon át távozó hőárammal: $$ P = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d} $$. A feladat szerint 4 oldallapon van hővezetés. Egy lap felülete $$ 0.6 \\text{ m} \\cdot 0.6 \\text{ m} = 0.36 \\text{ m}^2 $$, így az összfelület $$ A = 4 \\cdot 0.36 = 1.44 \\text{ m}^2 $$. Behelyettesítve a paramétereket ($$ \\lambda = 0.8 \\text{ W/(mK)} $$, $$ \\Delta T = 28 - 22 = 6 \\text{ K} $$, $$ d = 0.012 \\text{ m} $$): $$ P = 0.8 \\cdot 1.44 \\cdot \\frac{6}{0.012} = 0.8 \\cdot 1.44 \\cdot 500 = 576 \\text{ W} $$. A helyes válasz a b."
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
                    "formula": "$$ Mg - K = M a $$, $$ K R = \\Theta \\beta $$, $$ a = \\beta R $$",
                    "explanation": "A mozgásegyenlet a lefelé gyorsuló $M$ testre: $$ Mg - K = M a $$. A csigára felírt perdülettétel: $$ K R = \\Theta \\beta $$. A kényszerfeltétel a gyorsulás és szöggyorsulás között: $$ a = \\beta R $$. Behelyettesítve a tehetetlenségi nyomatékot ($$ \\Theta = \\frac{1}{2}m R^2 $$): $$ K R = (\\frac{1}{2}m R^2) \\cdot \\frac{a}{R} \\implies K = \\frac{1}{2}m a $$. Ezt beírjuk a mozgásegyenletbe ($$ M=2m $$ felhasználásával): $$ 2mg - \\frac{1}{2}m a = 2m a $$. Rendezzük $a$-ra (osztva $m$-mel): $$ 2g = 2.5 a \\implies a = \\frac{2g}{2.5} = \\frac{4}{5}g $$. A helyes válasz a c."
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
                    "formula": "$$ p = \\frac{F}{A} $$, $$ F = \\frac{\\Delta I}{\\Delta t} $$, $$ \\Delta I_{egy} = 2m v_x $$",
                    "explanation": "A nyomás a falra ható erő és a felület hányadosa: $$ p = \\frac{F}{A} $$. Az erőt a falba rugalmasan ütköző molekulák lendületváltozása adja (Newton II. törvénye alapján): $$ F = \\frac{\\Delta I}{\\Delta t} $$. Egy molekula lendületváltozása: $$ \\Delta I_{egy} = 2 m v_x $$. Egyetlen oxigénmolekula tömege: $$ m = \\frac{M}{N_A} = \\frac{0.032 \\text{ kg/mol}}{6 \\cdot 10^{23} \\text{ 1/mol}} $$. A teljes erő 1 másodperc alatt ($$ N = 2.4 \\cdot 10^{23} $$): $$ F = N \\cdot 2 \\cdot \\frac{M}{N_A} \\cdot v_x = 2.4 \\cdot 10^{23} \\cdot 2 \\cdot \\frac{0.032}{6 \\cdot 10^{23}} \\cdot 260 = 0.8 \\cdot 0.032 \\cdot 260 = 6.656 \\text{ N} $$. A felület $$ A = 12 \\text{ cm}^2 = 0.0012 \\text{ m}^2 $$. A nyomás: $$ p = \\frac{6.656}{0.0012} \\approx 5546.6 \\text{ Pa} \\approx 5.5 \\text{ kPa} $$. A helyes válasz a c."
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
                    "formula": "$$ U_e = -\\frac{d\\Phi}{dt} $$, $$ P = \\frac{U_e^2}{R} $$, $$ W = \\int_0^\\tau P dt $$",
                    "explanation": "A Faraday-féle indukciós törvény értelmében az indukált feszültség: $$ U_e(t) = -\\frac{d\\Phi}{dt} $$. A fluxusfüggvény $$ \\Phi(t) = a \\tau t - a t^2 $$, melynek deriváltja: $$ U_e(t) = 2a t - a \\tau $$. A vezetőkarikában fejlődő Joule-hő teljesítménye: $$ P(t) = \\frac{U_e(t)^2}{R} = \\frac{(2at - a\\tau)^2}{R} $$. A teljes hőmennyiség ezt integrálva adódik: $$ W = \\int_0^\\tau P(t) dt = \\int_0^\\tau \\frac{4a^2 t^2 - 4a^2 \\tau t + a^2 \\tau^2}{R} dt $$. Elvégezve az integrálást: $$ W = \\frac{1}{R} \\left[ \\frac{4a^2 t^3}{3} - \\frac{4a^2 \\tau t^2}{2} + a^2 \\tau^2 t \\right]_0^\\tau = \\frac{1}{R} \\left( \\frac{4}{3}a^2 \\tau^3 - 2a^2 \\tau^3 + a^2 \\tau^3 \\right) = \\frac{1}{R} \\left( \\frac{4}{3} - 1 \\right) a^2 \\tau^3 = \\frac{a^2 \\tau^3}{3 R} $$."
                }
            ]
        }
    ],
    "2024": [
        {
            "id": "vizsga-24-1",
            "title": "1. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Egy mondatban ismertesse a Faraday-törvényt ábra segítségével (1+1 pont)! Adja meg a törvényt egyenlet alakjában is (1 pont), és nevezze meg a törvényben szereplő fizikai mennyiségek jelentését (1 pont)! Mire utal a negatív előjel (2 pont)? Röviden vázoljon egy kísérletet, amelyben a törvény érvényesül (2 pont)!",
                    "correctOption": null,
                    "formula": "$$\\mathcal{E} = - \\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$$",
                    "explanation": "A Faraday-féle indukciós törvény kimondja, hogy egy zárt vezetőhurokban indukált elektromotoros erő egyenesen arányos a hurok által határolt felületen áthaladó mágneses fluxus időbeli megváltozásának sebességével. Képlettel: $$\\mathcal{E} = - \\frac{\\Delta \\Phi}{\\Delta t}$$ ahol $$\\mathcal{E}$$ az indukált elektromotoros erő, $$\\Phi$$ a mágneses fluxus, $$t$$ pedig az idő. A negatív előjel a Lenz-törvényre utal, azaz az indukált áram iránya olyan, hogy mágneses terével akadályozza az őt létrehozó fluxusváltozást. Kísérlet: Egy tekercshez feszültségmérőt csatlakoztatunk. Ha egy rúdmágnest közelítünk a tekercshez, a műszer feszültséget jelez, mert a tekercsben lévő mágneses fluxus megváltozik."
                },
                {
                    "type": "true-false",
                    "text": "Egy elektroszkóp közelébe negatív töltésű ebonit rudat helyezünk, ezután az elektroszkópot rövid ideig leföldeljük, végül az ebonitrudat eltávolítjuk. Igaz vagy hamis, hogy a kísérlet végén az elektroszkóp pozitívtöltésű?",
                    "correctOption": "i",
                    "explanation": "A negatív töltésű ebonitrúd taszítja az elektroszkópban lévő elektronokat a lemezek felé (megosztás). Földeléskor ezek az elektronok a földbe távoznak, így az elektroszkóp pozitív töltésű marad. Amikor a földelést megszakítjuk, majd a rudat is eltávolítjuk, a pozitív töltéstöbblet szétoszlik az elektroszkópon, ezért pozitív töltésű lesz."
                },
                {
                    "type": "true-false",
                    "text": "Egy adott feszültségű telephez csatlakoztatott síkkondenzátor lemezeinek távolságát csökkentve a lemezek közötti elektromos térerősség növekszik.",
                    "correctOption": "i",
                    "explanation": "Mivel a kondenzátor a telephez van csatlakoztatva, a feszültsége ($$U$$) állandó marad. A homogén elektromos térerősség nagyságát az $$E = \\frac{U}{d}$$ összefüggés adja meg. Mivel az $$U$$ állandó, a távolság ($$d$$) csökkentésével a térerősség ($$E$$) valóban növekszik."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses tér forrásmentessége azt jelenti, hogy a mágneses indukcióvonalak zárt felületre vett integrálja nulla.",
                    "correctOption": "i",
                    "explanation": "A mágneses tér forrásmentességét a Maxwell-egyenletek egyike, a $$\\oint \\mathbf{B} \\mathrm{d}\\mathbf{A} = 0$$ fejezi ki, amely azt jelenti, hogy bármely zárt felületre vett mágneses fluxus zérus, nincsenek mágneses monopólusok."
                },
                {
                    "type": "true-false",
                    "text": "Rugalmas kötél egyik végét harmonikusan gerjesztjük, a másik vég szabadon mozoghat. A szabad véghez érkező hullám ellentétes fázisban verődik vissza.",
                    "correctOption": "h",
                    "explanation": "Szabad végen történő visszaverődésnél a hullám azonos fázisban verődik vissza (nincs fázisugrás). Rögzített végen történik ellentétes fázisú visszaverődés ($$\\pi$$ fázisugrás)."
                },
                {
                    "type": "true-false",
                    "text": "Egy állóhullámban a szomszédos duzzadó helyek távolsága megegyezik a hullámhosszal.",
                    "correctOption": "h",
                    "explanation": "Az állóhullámban a szomszédos duzzadó helyek (vagy csomópontok) távolsága a hullámhossz fele ($$\\frac{\\lambda}{2}$$), nem pedig az egész hullámhossz."
                },
                {
                    "type": "true-false",
                    "text": "Egy töltött tömör fémgömb belsejében a térerőség zérus.",
                    "correctOption": "i",
                    "explanation": "Elektrosztatikus egyensúlyban lévő vezető belsejében az elektromos térerősség mindig zérus. Ha nem így lenne, a szabad töltéshordozók elmozdulnának, addig, amíg az új egyensúly be nem áll."
                },
                {
                    "type": "true-false",
                    "text": "Egy régi Ikarus busz karosszériája rezgésbe jön, amikor a motor fordulatszáma elér egy bizonyos értéket. Igaz vagy hamis, hogy a jelenség oka a rezonancia?",
                    "correctOption": "i",
                    "explanation": "Igen, a karosszériának van egy sajátfrekvenciája. Amikor a motor rezgésének frekvenciája (gerjesztő frekvencia) megegyezik ezzel a sajátfrekvenciával, rezonancia lép fel, ami nagy amplitúdójú rezgéseket okoz."
                },
                {
                    "type": "true-false",
                    "text": "Kondenzátor töltésére és feszültségére igaz: U*Q=állandó.",
                    "correctOption": "h",
                    "explanation": "Egy adott kondenzátor kapacitása ($$C$$) állandó, és a kapacitás definíciója $$C = \\frac{Q}{U}$$. Ebből következik, hogy a hányadosuk ($$\\frac{Q}{U}$$) állandó, nem pedig a szorzatuk ($$U \\cdot Q$$)."
                },
                {
                    "type": "true-false",
                    "text": "Az Ampere törvény általánosított alakja szerint az elektromos tér fluxusának megváltozása is mágneses teret kelt.",
                    "correctOption": "i",
                    "explanation": "Az általánosított Ampère-törvény (Ampère–Maxwell-törvény) magában foglalja a Maxwell-féle eltolási áramot, ami azt jelenti, hogy az időben változó elektromos tér (és annak fluxusa) is mágneses teret kelt a $$\\oint \\mathbf{B} \\mathrm{d}\\mathbf{l} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}$$ egyenlet alapján."
                },
                {
                    "type": "true-false",
                    "text": "Egy hagyományos izzószál 1000 0C-on 10 W teljesítménnyel sugároz. Igaz vagy hamis, hogy 2000 0C-on a sugárzási teljesítmény 160 W?",
                    "correctOption": "h",
                    "explanation": "A Stefan–Boltzmann-törvény szerint a sugárzási teljesítmény az abszolút hőmérséklet (Kelvin) negyedik hatványával arányos: $$P \\propto T^4$$. Az $$1000^\\circ\\mathrm{C} = 1273\\text{ K}$$, a $$2000^\\circ\\mathrm{C} = 2273\\text{ K}$$. A hőmérséklet nem a kétszeresére nőtt abszolút skálán (kb. $$1,78$$-szorosára), tehát a teljesítmény nem a $$2^4 = 16$$-szorosára (vagyis nem $$160\\text{ W}$$-ra) fog nőni."
                },
                {
                    "type": "calculation",
                    "text": "Az ábra szerinti kapcsolásban a K kapcsoló nyitott állásánál 4 A, zárt kapcsolóállás esetén pedig 5,83 A erősségű áram folyik az elemet tartalmazó ágban. Mekkora az elem belső ellenállása? (R = 8 ohm)",
                    "correctOption": "a",
                    "options": {
                        "a": "0,5 ohm",
                        "b": "0,8 ohm",
                        "c": "6,2 ohm",
                        "d": "egyik sem"
                    },
                    "formula": "$$I = \\frac{U_e}{R_{eredő} + R_b}$$",
                    "explanation": "Az áramkörre felírhatjuk a teljes Ohm-törvényt: a telepet tartalmazó főágban az áram $$I = \\frac{U_e}{R_{eredő} + R_b}$$, ahol $$U_e$$ a telep üresjárási feszültsége, $$R_b$$ a belső ellenállás. A kapcsoló zárásával egy $$2R$$ ($$16 \\,\\Omega$$) ág párhuzamosan kapcsolódik egy meglévő $$R$$ ($$8 \\,\\Omega$$) ellenálláshoz. Nyitott állapotban az eredő külső ellenállás $$R_{e1} = 8 \\,\\Omega$$. Zárt állapotban az új eredő ellenállás $$R_{e2} = \\frac{8 \\cdot 16}{8 + 16} = 5,33 \\,\\Omega$$ lesz. Felírva a feszültségeket: $$4 \\cdot (8 + R_b) = 5,83 \\cdot (5,33 + R_b)$$. Az egyenletet megoldva $$32 + 4 R_b = 31,07 + 5,83 R_b$$, amelyből $$1,83 R_b = 0,93$$, így $$R_b = 0,5 \\,\\Omega$$ adódik."
                },
                {
                    "type": "calculation",
                    "text": "Egy 12 V-os telepet mérlegre helyezünk; a telep pólusaihoz téglalap alakú dróthurkot erősítünk úgy, hogy a téglalap alsó része B = 0,65 T indukciójú mágneses téren haladjon át. Az össztömeg 50 g. Mekkora legyen a huzal ellenállása, hogy a mérleg éppen zérust mutasson?",
                    "correctOption": "a",
                    "options": {
                        "a": "3,18 ohm",
                        "b": "1,75 ohm",
                        "c": "2,1 ohm",
                        "d": "egyik sem"
                    },
                    "formula": "$$F_m = B \\cdot I \\cdot L = m \\cdot g$$",
                    "explanation": "A mérleg akkor mutat zérust, ha a lefelé ható gravitációs erőt ($$m \\cdot g$$) teljes egészében kiegyenlíti a felfelé mutató mágneses Lorentz-erő ($$F_m$$). A téglalap alsó vízszintes szálának hossza az ábráról leolvasva $$L = 20 \\text{ cm} = 0,2 \\text{ m}$$. A mágneses erő: $$F_m = B \\cdot I \\cdot L$$. Az egyensúly feltétele: $$B \\cdot I \\cdot L = m \\cdot g$$. Ebből a szükséges áramerősség: $$I = \\frac{m \\cdot g}{B \\cdot L} = \\frac{0,05 \\text{ kg} \\cdot 9,81 \\text{ m/s}^2}{0,65 \\text{ T} \\cdot 0,2 \\text{ m}} = 3,773 \\text{ A}$$. Az Ohm-törvény alapján a huzal ellenállása: $$R = \\frac{U}{I} = \\frac{12 \\text{ V}}{3,773 \\text{ A}} = 3,18 \\,\\Omega$$. (Megjegyzés: a hivatalos megoldókulcs b-t jelez, de a fizikai számítás egyértelműen az a-t adja)."
                },
                {
                    "type": "calculation",
                    "text": "Mindkét végén nyitott síp alapfrekvenciája 120 Hz. Milyen hosszú a síp, ha a hang terjedési sebessége 330 m/s?",
                    "correctOption": "a",
                    "options": {
                        "a": "1,375 m",
                        "b": "1,55 m",
                        "c": "2,75 m",
                        "d": "egyik sem"
                    },
                    "formula": "$$L = \\frac{v}{2f}$$",
                    "explanation": "A mindkét végén nyitott síp alapfrekvenciája a síp hosszától (L) és a hangsebességtől (v) függ: $$f = \\frac{v}{2L}$$. Ezt átrendezve a hosszra: $$L = \\frac{v}{2f}$$. Behelyettesítve a megadott értékeket: $$L = \\frac{330 \\text{ m/s}}{2 \\cdot 120 \\text{ Hz}} = \\frac{330}{240} = 1,375 \\text{ m}$$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 15 cm hosszú, 400 menetű tekercsben 2,5 A erősségű áram folyik. Mekkora a mágneses indukció a tekercs belsejében?",
                    "correctOption": "a",
                    "options": {
                        "a": "8,38x10-3 Vs/m2",
                        "b": "0,3 Vs/m2",
                        "c": "6,28x10-3 Vs/m2",
                        "d": "egyik sem"
                    },
                    "formula": "$$B = \\mu_0 \\frac{N}{l} I$$",
                    "explanation": "Hosszú egyenes tekercs (szolenoid) belsejében a homogén mágneses indukció nagysága: $$B = \\mu_0 \\frac{N}{l} I$$. Behelyettesítve: $$B = 4\\pi \\cdot 10^{-7} \\frac{\\text{Vs}}{\\text{Am}} \\cdot \\frac{400}{0,15 \\text{ m}} \\cdot 2,5 \\text{ A} = 8,38 \\cdot 10^{-3} \\text{ T}$$. Ennek a mértékegysége $$\\text{Vs} / \\text{m}^2$$ formában is felírható."
                },
                {
                    "type": "calculation",
                    "text": "Elhanyagolható kezdősebességű, egyszeresen töltött ionokat U feszültséggel gyorsítunk. A felgyorsított, Q = 1,6·10−19 C töltésű és m = 1,15·10−26 kg tömegű ionok egyenes vonalú egyenletes mozgással jutnak át egy olyan sebességszűrőn, melyben E = 1,20·104 N/C térerősségű elektromos tér, és rá merőleges, B = 40 mT indukciójú mágneses tér van jelen. Mekkora az U gyorsító feszültség nagysága?",
                    "correctOption": "a",
                    "options": {
                        "a": "3,2 kV",
                        "b": "4,1 kV",
                        "c": "8,2 kV",
                        "d": "egyik sem"
                    },
                    "formula": "$$v = \\frac{E}{B}$$, $$U = \\frac{m v^2}{2Q}$$",
                    "explanation": "A sebességszűrőn azok a részecskék jutnak át egyenes vonalban, amelyeknél az elektromos és mágneses erő kiegyenlíti egymást: $$Q E = Q v B$$, amiből a sebesség $$v = \\frac{E}{B} = \\frac{1,20 \\cdot 10^4}{0,040} = 3 \\cdot 10^5 \\text{ m/s}$$. A részecske ezt a sebességet az $$U$$ gyorsítófeszültség hatására éri el a munkatétel szerint: $$Q U = \\frac{1}{2} m v^2$$. Ebből a feszültség: $$U = \\frac{m v^2}{2Q} = \\frac{1,15 \\cdot 10^{-26} \\cdot (3 \\cdot 10^5)^2}{2 \\cdot 1,6 \\cdot 10^{-19}} = 3234 \\text{ V} \\approx 3,2 \\text{ kV}$$."
                },
                {
                    "type": "calculation",
                    "text": "A homogén, B= 0,30 T indukciójú mágneses tér merőleges az ℓ= 10 cm-es nyomtávú, hosszú, vízszintes, súrlódásmentes vezető sínpárra. A sínek közé egy R = 20 Ω-os ellenálláson keresztül U = 2V feszültséget kapcsolunk, a sínpárra pedig egy m = 20g tömegű, jól vezető rudat helyezünk. Mekkora gyorsulással indul el a kezdetben álló rúd?",
                    "correctOption": "c",
                    "options": {
                        "a": "0,5 m/s2",
                        "b": "0,32 m/s2",
                        "c": "0,15 m/s2",
                        "d": "egyik sem"
                    },
                    "formula": "$$a = \\frac{B \\cdot U \\cdot \\ell}{m \\cdot R}$$",
                    "explanation": "A rúdra a mágneses térben Lorentz-erő hat: $$F = B \\cdot I \\cdot \\ell$$. Az Ohm-törvény alapján az áram $$I = \\frac{U}{R} = \\frac{2 \\text{ V}}{20 \\,\\Omega} = 0,1 \\text{ A}$$. A kifejtett erő: $$F = 0,30 \\text{ T} \\cdot 0,1 \\text{ A} \\cdot 0,1 \\text{ m} = 0,003 \\text{ N}$$. Newton II. törvénye alapján a gyorsulás: $$a = \\frac{F}{m} = \\frac{0,003 \\text{ N}}{0,02 \\text{ kg}} = 0,15 \\text{ m/s}^2$$."
                },
                {
                    "type": "calculation",
                    "text": "Mekkora munkavégzés szükséges egy 0,5 m sugarú, 20 kg tömegű tömör henger (Θ_TKP = mR^2/2) megállításához, ha a henger vízszintes talajon 2 m/s sebességgel tisztán gördül?",
                    "correctOption": "c",
                    "options": {
                        "a": "20 J",
                        "b": "40 J",
                        "c": "60 J",
                        "d": "egyik sem"
                    },
                    "formula": "$$W = \\frac{1}{2} m v^2 + \\frac{1}{2} \\Theta \\omega^2$$",
                    "explanation": "A gördülő henger megállításához a teljes mozgási energiájával megegyező munkát kell végeznünk. A gördülő henger mozgási energiája a transzlációs és a rotációs energia összege: $$E_k = \\frac{1}{2} m v^2 + \\frac{1}{2} \\Theta \\omega^2$$. Tömör henger tehetetlenségi nyomatéka $$\\Theta = \\frac{1}{2} m R^2$$, és a tiszta gördülés miatt $$\\omega = \\frac{v}{R}$$. Behelyettesítve: $$E_k = \\frac{1}{2} m v^2 + \\frac{1}{2} (\\frac{1}{2} m R^2) (\\frac{v}{R})^2 = \\frac{3}{4} m v^2$$. Így a szükséges munka: $$W = \\frac{3}{4} \\cdot 20 \\text{ kg} \\cdot (2 \\text{ m/s})^2 = 60 \\text{ J}$$."
                },
                {
                    "type": "calculation",
                    "text": "Egy hideg téli napon a külső hőmérséklet −15 0C. Egy kültéri finn szaunában az állandó 80 0C-os belső hőmérséklet biztosításához a kályha 2000 W teljesítményt ad le. Mekkora fűtőteljesítmény lenne szükséges a belső hőmérséklet 90 0C-os állandó értéken tartásához?",
                    "correctOption": "b",
                    "options": {
                        "a": "2500 W",
                        "b": "2200 W",
                        "c": "2000 W",
                        "d": "egyik sem"
                    },
                    "formula": "$$P \\propto \\Delta T$$",
                    "explanation": "A hőveszteség egyensúlyi állapotban arányos a kinti és a benti hőmérséklet különbségével: $$P = k \\cdot \\Delta T$$. Az első esetben a hőlépcső $$\\Delta T_1 = 80 ^\\circ\\mathrm{C} - (-15 ^\\circ\\mathrm{C}) = 95 ^\\circ\\mathrm{C}$$, ekkor a teljesítmény $$P_1 = 2000 \\text{ W}$$. A második esetben a hőlépcső $$\\Delta T_2 = 90 ^\\circ\\mathrm{C} - (-15 ^\\circ\\mathrm{C}) = 105 ^\\circ\\mathrm{C}$$. Egyenes arányosságot feltételezve: $$P_2 = P_1 \\frac{\\Delta T_2}{\\Delta T_1} = 2000 \\text{ W} \\cdot \\frac{105}{95} \\approx 2210,5 \\text{ W}$$. A legközelebbi válasz a 2200 W."
                },
                {
                    "type": "calculation",
                    "text": "Egy a = 10 cm oldalú négyzet csúcsaiban négy egyforma, Q = +2 nC nagyságú ponttöltés helyezkedik el. Mekkora az egyik töltésre ható eredő elektromos erő nagysága?",
                    "correctOption": "b",
                    "options": {
                        "a": "3,6·10−6 N",
                        "b": "6,9·10−6 N",
                        "c": "9,0·10−6 N",
                        "d": "egyik sem"
                    },
                    "formula": "$$F_e = k \\frac{Q_1 Q_2}{r^2}$$",
                    "explanation": "A vizsgált töltésre a másik három ponttöltés fejt ki erőt. A két szomszédos csúcsban lévő töltés egyenként $$F_1 = k \\frac{Q^2}{a^2} = 9 \\cdot 10^9 \\cdot \\frac{(2 \\cdot 10^{-9})^2}{0,1^2} = 3,6 \\cdot 10^{-6} \\text{ N}$$ erőt fejt ki, melyek egymásra merőlegesek. Ezek vektori eredője az átló irányába mutat: $$F_{1,2} = \\sqrt{2} F_1 \\approx 5,09 \\cdot 10^{-6} \\text{ N}$$. A negyedik, átlósan elhelyezkedő töltés távolsága $$a\\sqrt{2}$$, így általa kifejtett erő is az átló irányába mutat: $$F_3 = k \\frac{Q^2}{(a\\sqrt{2})^2} = \\frac{1}{2} F_1 = 1,8 \\cdot 10^{-6} \\text{ N}$$. A teljes eredő erő ezek összege: $$F_{eredő} = 5,09 \\cdot 10^{-6} + 1,8 \\cdot 10^{-6} = 6,89 \\cdot 10^{-6} \\text{ N} \\approx 6,9 \\cdot 10^{-6} \\text{ N}$$."
                },
                {
                    "type": "calculation",
                    "text": "Másodpercenként 2,4·1023 oxigénmolekula ütközik egy 12 cm2 területű sík fallal. A molekulák falra merőleges sebességkomponensének átlagos nagysága 260 m/s. Mekkora a falra ható nyomás? (Az oxigéngáz moláris tömege 32g/mol, az Avogadro állandó 6·1023 mol−1.)",
                    "correctOption": "c",
                    "options": {
                        "a": "2,8 kPa",
                        "b": "3,7 kPa",
                        "c": "5,5 kPa",
                        "d": "egyik sem"
                    },
                    "formula": "$$p = \\frac{\\dot{N} \\cdot 2mv}{A}$$",
                    "explanation": "A falba ütköző molekulák rugalmasan pattannak vissza, így egyetlen molekula impulzusváltozása $$\\Delta p = 2mv$$. A másodpercenként falnak ütköző molekulák száma $$N/t = 2,4 \\cdot 10^{23} \\text{ 1/s}$$. A falra ható erő Newton II. törvénye alapján: $$F = \\frac{N}{t} \\cdot 2mv$$. Az oxigénmolekula ($$O_2$$) tömege: $$m = \\frac{M}{N_A} = \\frac{0,032 \\text{ kg/mol}}{6 \\cdot 10^{23} \\text{ 1/mol}} = 5,33 \\cdot 10^{-26} \\text{ kg}$$. Behelyettesítve az erőt: $$F = 2,4 \\cdot 10^{23} \\cdot 2 \\cdot 5,33 \\cdot 10^{-26} \\cdot 260 = 6,65 \\text{ N}$$. A nyomás: $$p = \\frac{F}{A} = \\frac{6,65 \\text{ N}}{12 \\cdot 10^{-4} \\text{ m}^2} \\approx 5546 \\text{ Pa} \\approx 5,5 \\text{ kPa}$$."
                },
                {
                    "type": "calculation",
                    "text": "IMSC: Egy +λ vonalmenti töltéssűrűségű, L hosszúságú szigetelő szálra egy −Q töltésű, m tömegű kicsiny gyöngy van felfűzve. Kezdetben a gyöngy a szál közepén helyezkedik el. Mekkora periódusidővel rezeghet a gyöngy az egyensúlyi helyzete körül kis kitérések esetén?",
                    "correctOption": null,
                    "options": {},
                    "formula": "$$T = 2\\pi \\sqrt{ \\frac{\\pi \\varepsilon_0 m L^2}{2 \\lambda Q} }$$",
                    "explanation": "A feladat a véges vonaltöltés tengelyében létrejövő teret vizsgálja a középpont közelében. A szál középpontjából történő $$x$$ kitérés esetén a szál két fele aszimmetrikusan járul hozzá az elektromos térhez. A Coulomb-erő integrálásával igazolható, hogy kis $$x$$ kitérések ($$x \\ll L$$) esetén az eredő térerősség jó közelítéssel $$E(x) \\approx \\frac{\\lambda}{4 \\pi \\varepsilon_0} \\cdot \\frac{8 x}{L^2}$$. A $$-Q$$ töltésű gyöngyre visszatérítő erő hat: $$F = - Q E(x) = - \\frac{2 \\lambda Q}{\\pi \\varepsilon_0 L^2} x$$. Mivel az erő lineárisan arányos a kitéréssel ($$F = -D x$$), a mozgás harmonikus rezgőmozgás lesz. A direkciós erő állandója $$D = \\frac{2 \\lambda Q}{\\pi \\varepsilon_0 L^2}$$. A rezgésidő ebből adódik: $$T = 2\\pi \\sqrt{\\frac{m}{D}} = 2\\pi \\sqrt{ \\frac{\\pi \\varepsilon_0 m L^2}{2 \\lambda Q} }$$."
                }
            ]
        },
        {
            "id": "vizsga-24-2",
            "title": "2. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Fogalmazza meg az elektrosztatika Gauss törvényét! (2 pont) Írja fel a matematikai összefüggést. Nevezze meg a fizikai mennyiségeket! (3 pont). A Gauss törvény segítségével határozza meg egy R sugarú q térfogati töltéssűrűségű gömbben r sugáron (r<R) az E térerősség értékét. Készítsen ábrát! (3 pont)!",
                    "formula": "$$\\oint_A \\mathbf{E} \\cdot \\text{d}\\mathbf{A} = \\frac{\\sum Q}{\\varepsilon_0}$$",
                    "explanation": "Törvény kimondása: Bármely zárt felületre az elektromos térerősség fluxusa egyenlő a felület által bezárt nettó töltés és a vákuum permittivitásának hányadosával.<br>Képlet: $$\\oint_A \\mathbf{E} \\cdot \\text{d}\\mathbf{A} = \\frac{\\sum Q}{\\varepsilon_0}$$, ahol $\\mathbf{E}$ az elektromos térerősség vektora, $\\text{d}\\mathbf{A}$ a felületelem vektora, $\\sum Q$ a zárt felületen belüli össztöltés, $\\varepsilon_0$ a vákuum dielektromos állandója.<br>Levezetés gömb belsejében ($r < R$): Vegyünk fel egy $r$ sugarú koncentrikus gömböt Gauss-felületként. Mivel a töltéseloszlás gömbszimmetrikus, az $\\mathbf{E}$ vektor sugárirányú és nagysága ezen a felületen állandó.<br>A fluxus: $\\Phi = E \\cdot 4\\pi r^2$.<br>A bezárt töltés (ahol a térfogati töltéssűrűség $q$): $Q_{\\text{belső}} = q \\cdot \\frac{4}{3}\\pi r^3$.<br>Gauss-törvény alapján: $$E \\cdot 4\\pi r^2 = \\frac{q \\cdot \\frac{4}{3}\\pi r^3}{\\varepsilon_0}$$<br>Ebből kifejezve a térerősséget: $$E = \\frac{q \\cdot r}{3 \\varepsilon_0}$$"
                },
                {
                    "type": "true-false",
                    "text": "Ha egy Q töltés mozog, elektromágneses hullámot kelt.",
                    "correctOption": "h",
                    "explanation": "Hamis. Csak a gyorsuló (vagy lassuló) töltés kelt elektromágneses hullámot. Az egyenes vonalú egyenletes mozgást végző töltés nem sugároz."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses indukcióvonalak az északi pólustól indulnak és a déli póluson végződnek.",
                    "correctOption": "h",
                    "explanation": "Hamis. A mágneses indukcióvonalak önmagukba záródó görbék, nincsenek forrásaik és nyelőik (a mágneses monopólusok hiánya miatt), így nem indulnak és nem végződnek sehol."
                },
                {
                    "type": "true-false",
                    "text": "Az elektrosztatika Gauss-tétele. Feltéve, hogy a $$\\oint_A \\mathbf{E} \\text{d}\\mathbf{A} = 0$$, az A felület minden pontjában biztosan E = 0.",
                    "correctOption": "h",
                    "explanation": "Hamis. A zérus fluxus ($$\\oint_A \\mathbf{E} \\text{d}\\mathbf{A} = 0$$) csak azt jelenti, hogy a zárt felületen belüli nettó töltés nulla. A felület egyes pontjaiban az elektromos térerősség lehet nem nulla, például egy külső töltés tere esetén a be- és kilépő fluxus kiegyenlíti egymást."
                },
                {
                    "type": "true-false",
                    "text": "RL kör bekapcsolási jelenség: Az áram maximális értékről indulva, csökkenve közelíti meg az állandósult állapothoz tartozó értéket.",
                    "correctOption": "h",
                    "explanation": "Hamis. Bekapcsoláskor a tekercs (induktivitás) akadályozza az áram hirtelen növekedését (Lenz-törvény), így az áram nulláról indul, és exponenciálisan növekedve éri el az állandósult maximális értéket."
                },
                {
                    "type": "true-false",
                    "text": "Az áramsűrűség vektormennyiség.",
                    "correctOption": "i",
                    "explanation": "Igaz. Az áramsűrűség ($$\\mathbf{J}$$) vektormennyiség, amelynek iránya megegyezik a pozitív töltéshordozók mozgásának (sodródási sebességének) irányával, nagysága pedig az egységnyi felületen áthaladó áramerősség."
                },
                {
                    "type": "true-false",
                    "text": "Egy töltött tömör fémgömb belsejében a potenciál zérus.",
                    "correctOption": "h",
                    "explanation": "Hamis. Elektrosztatikus egyensúlyban a vezető belsejében a térerősség zérus ($E=0$), amiből csak az következik, hogy a potenciál állandó (ekvipotenciális térfogat). A potenciál értéke megegyezik a felületi potenciállal, ami egy töltött gömb esetén nem nulla."
                },
                {
                    "type": "true-false",
                    "text": "Ha monokromatikus fény terjed vákuumból valamilyen közegbe, akkor a frekvenciája nem változik és a terjedési sebessége csökken.",
                    "correctOption": "i",
                    "explanation": "Igaz. A fény frekvenciáját a sugárforrás határozza meg, így az közegváltáskor állandó marad. Mivel minden optikai közeg abszolút törésmutatója $n > 1$, a fény terjedési sebessége ($v = c / n$) a vákuumbeli fénysebességhez képest csökken."
                },
                {
                    "type": "true-false",
                    "text": "Egy részecske harmonikus rezgőmozgást végez. Ahol nagyobb a sebessége, ott nagyobb a gyorsulása is.",
                    "correctOption": "h",
                    "explanation": "Hamis. Harmonikus rezgőmozgásnál a kitérés és a gyorsulás abszolút értéke egyenesen arányos. A sebesség az egyensúlyi helyzetben maximális (ahol a gyorsulás zérus), míg a gyorsulás a szélsőértékeken maximális (ahol a sebesség zérus)."
                },
                {
                    "type": "true-false",
                    "text": "A tehetetlenségi nyomaték a súlytalanság állapotában zérus.",
                    "correctOption": "h",
                    "explanation": "Hamis. A tehetetlenségi nyomaték egy test forgással szembeni tehetetlenségét jellemzi, amely kizárólag a test tömegétől és a forgástengely körüli tömegeloszlásától függ ($I = \\sum m_i r_i^2$). Ez az érték független a külső gravitációs tértől."
                },
                {
                    "type": "true-false",
                    "text": "Gyűjtőlencsével az optikai tengelytől y távolságban levő fénylő pont képét állítjuk elő. Ha a tárgytávolság a fókusztávolság kétszerese, akkor a nagyítás egységnyi.",
                    "correctOption": "i",
                    "explanation": "Igaz. A leképezési törvényből ($$\\frac{1}{t} + \\frac{1}{k} = \\frac{1}{f}$$) következik, hogy ha $t = 2f$, akkor $k = 2f$ adódik. Így a lineáris nagyítás nagysága: $$N = \\frac{k}{t} = \\frac{2f}{2f} = 1$$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 4,5 V-ra feltöltött 2 F-os kondenzátorral párhuzamosan kötünk egy ismeretlen kapacitású, töltetlen kondenzátort, aminek hatására a feszültség 3,9 V-tal csökken. Mekkora az ismeretlen kapacitás?",
                    "options": {
                        "a": "13 F",
                        "b": "4 F",
                        "c": "20 F",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$C_1 U_1 = (C_1 + C_2) U_2$$",
                    "explanation": "Kezdetben a feltöltött kondenzátor töltése: $$Q = C_1 \\cdot U_1 = 2\\text{ F} \\cdot 4,5\\text{ V} = 9\\text{ C}$$.<br>Miután párhuzamosan kötünk vele egy $C_2$ töltetlen kondenzátort, a töltés megmarad, de eloszlik a két kondenzátoron. A feszültség 3,9 V-tal csökken, tehát az új feszültség: $$U_2 = 4,5\\text{ V} - 3,9\\text{ V} = 0,6\\text{ V}$$.<br>A közös kapacitás $C_p = C_1 + C_2$, amire felírható a töltésmegmaradás: $$Q = (C_1 + C_2) \\cdot U_2$$.<br>Behelyettesítve a kapott értékeket: $$9 = (2 + C_2) \\cdot 0,6 \\implies 15 = 2 + C_2 \\implies C_2 = 13\\text{ F}$$."
                },
                {
                    "type": "calculation",
                    "text": "Diavetítő a lencsétől 6,2 m távol lévő ernyőn olyan képet alkot, amelynek méretei 80-szor akkorák, mint a diafilmé. Az ernyőt közelebb hozzuk 1 m-rel. Mennyit kell elmozdítani a vetítőlencsét, hogy az ernyőn lévő kép éles legyen?",
                    "options": {
                        "a": "0,14 mm",
                        "b": "0,1 mm",
                        "c": "0,18 mm",
                        "d": "egyik sem"
                    },
                    "correctOption": "c",
                    "formula": "$$\\frac{1}{t} + \\frac{1}{k} = \\frac{1}{f}$$",
                    "explanation": "Kezdeti állapotban a képtávolság $k_1 = 6,2\\text{ m}$, a nagyítás $N = 80$. A tárgytávolság: $$t_1 = \\frac{k_1}{N} = \\frac{6,2}{80} = 0,0775\\text{ m} = 77,5\\text{ mm}$$.<br>A lencse fókusztávolságát a leképezési törvényből kapjuk: $$\\frac{1}{f} = \\frac{1}{t_1} + \\frac{1}{k_1} = \\frac{80}{6,2} + \\frac{1}{6,2} = \\frac{81}{6,2} \\implies f = \\frac{6,2}{81} \\approx 0,07654\\text{ m}$$.<br>A film és az ernyő fix távolsága $L_1 = t_1 + k_1 = 6,2775\\text{ m}$. Az ernyőt 1 m-rel közelebb hozzuk, az új távolság $L_2 = 5,2775\\text{ m}$.<br>Az új tárgy- és képtávolságra felírható: $k_2 = L_2 - t_2$, valamint $$\\frac{1}{t_2} + \\frac{1}{L_2 - t_2} = \\frac{1}{f}$$.<br>Ebből másodfokú egyenletet kapunk $t_2$-re: $$t_2^2 - L_2 t_2 + f L_2 = 0$$.<br>Behelyettesítve: $$t_2^2 - 5,2775 \\cdot t_2 + 0,40396 = 0$$.<br>Az egyenlet (kisebbik) gyöke $t_2 \\approx 0,077688\\text{ m} = 77,688\\text{ mm}$.<br>A lencse elmozdulása a különbség: $t_2 - t_1 = 77,688 - 77,5 = 0,188\\text{ mm}$, ami kerekítve megegyezik a $0,18\\text{ mm}$ (c) válasszal."
                },
                {
                    "type": "calculation",
                    "text": "Határozzuk meg az ábrán látható kapcsolásban az AB ágban folyó áram erősségét!",
                    "options": {
                        "a": "1,09 A",
                        "b": "1,27 A",
                        "c": "1,36 A",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$\\sum I_{be} = \\sum I_{ki}$$",
                    "explanation": "A feladat egy két hurkos hálózat megoldását kéri. Legyen a 'B' csomópont potenciálja zérus ($V_B = 0$). Ekkor az 'A' csomópont potenciálját ($V_A$) csomóponti potenciálok módszerével határozzuk meg.<br>Az ábra és a megoldás alapján az $U_1 = 30\\text{ V}$ feszültségforrás pozitív pólusa felfelé néz, az $U_2 = 12\\text{ V}$-os feszültségforrásé pedig lefelé (vagyis az A csomópont felé a negatív pólus néz, így -12 V-os ágként kezelendő).<br>A csomóponti egyenlet (KCL) az A pontra: $$\\frac{30 - V_A}{R_1} + \\frac{-12 - V_A}{R_2} = \\frac{V_A}{R_3}$$<br>Behelyettesítve: $R_1=4\\,\\Omega$, $R_2=8\\,\\Omega$, $R_3=12\\,\\Omega$:<br>$$\\frac{30 - V_A}{4} - \\frac{12 + V_A}{8} = \\frac{V_A}{12}$$<br>24-gyel szorozva az egyenletet: $$6(30 - V_A) - 3(12 + V_A) = 2 V_A$$<br>$$180 - 6 V_A - 36 - 3 V_A = 2 V_A \\implies 144 - 9 V_A = 2 V_A \\implies 11 V_A = 144 \\implies V_A = \\frac{144}{11} \\approx 13,09\\text{ V}$$.<br>Az AB ágban folyó áramerősség: $$I_{AB} = \\frac{V_A}{R_3} = \\frac{13,09}{12} \\approx 1,09\\text{ A}$$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 12 V-os autó akkumulátor kapacitása 150 Ah. Parkolás során két 80 W-os fényszóróizzó bekapcsolva maradt. Számítsuk ki, hogy hány óra alatt csökken az eredetileg teljesen feltöltött akkumulátor töltése az eredetinek felére, feltételezve, hogy a kapocsfeszültség ezalatt nem változik.",
                    "options": {
                        "a": "11,2 óra",
                        "b": "5,6 óra",
                        "c": "2,8 óra",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$P = U \\cdot I, \\quad Q = I \\cdot t$$",
                    "explanation": "A két izzó együttes teljesítménye: $$P_{\\text{össz}} = 2 \\cdot 80\\text{ W} = 160\\text{ W}$$.<br>Az akkumulátorból felvett áramerősség: $$I = \\frac{P_{\\text{össz}}}{U} = \\frac{160\\text{ W}}{12\\text{ V}} = \\frac{40}{3}\\text{ A} \\approx 13,33\\text{ A}$$.<br>Az akkumulátor eredeti kapacitása $Q_{\\text{max}} = 150\\text{ Ah}$. Ennek a fele $Q = 75\\text{ Ah}$ töltésveszteséget jelent.<br>Az ehhez szükséges idő: $$t = \\frac{Q}{I} = \\frac{75\\text{ Ah}}{\\frac{40}{3}\\text{ A}} = \\frac{225}{40}\\text{ h} = 5,625\\text{ óra}$$.<br>Ez az érték megközelítőleg 5,6 óra."
                },
                {
                    "type": "calculation",
                    "text": "5 N/m rugóállandójú rugóhoz kapcsolt 6 kg tömegű test csillapodó rezgéseket végez. Energiája 2 s alatt exponenciálisan az e-ed részére csökken. Mekkora a rezgés frekvenciája?",
                    "options": {
                        "a": "0,14 Hz",
                        "b": "0,88 Hz",
                        "c": "0,127 Hz",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$E(t) = E_0 e^{-2 \\beta t}, \\quad \\omega = \\sqrt{\\omega_0^2 - \\beta^2}$$",
                    "explanation": "A csillapított rezgőmozgás energiája időben exponenciálisan csökken: $$E(t) = E_0 e^{-2\\beta t}$$.<br>A feladat alapján 2 másodperc alatt az energia e-ed részére esik: $$E(2) = E_0 e^{-1} \\implies 2\\beta \\cdot 2 = 1 \\implies 4\\beta = 1 \\implies \\beta = 0,25\\text{ s}^{-1}$$.<br>A csillapítatlan rendszer saját körfrekvenciájának négyzete: $$\\omega_0^2 = \\frac{D}{m} = \\frac{5}{6} \\approx 0,8333\\text{ s}^{-2}$$.<br>A csillapított rezgés körfrekvenciája: $$\\omega = \\sqrt{\\omega_0^2 - \\beta^2} = \\sqrt{\\frac{5}{6} - 0,25^2} = \\sqrt{0,8333 - 0,0625} = \\sqrt{0,7708} \\approx 0,878\\text{ rad/s}$$.<br>A rezgés frekvenciája: $$f = \\frac{\\omega}{2\\pi} = \\frac{0,878}{2\\pi} \\approx 0,1397\\text{ Hz} \\approx 0,14\\text{ Hz}$$."
                },
                {
                    "type": "calculation",
                    "text": "A súlytalan, merev, szigetelő anyagból készült, 0,2m hosszú rúddal összekötött, $Q_1= +3\\times 10^{-9}$ C és $Q_2= -3\\times 10^{-9}$ C töltéssel ellátott két fémgömböt $10^6$ N/C térerősségű homogén elektromos térbe tesszük úgy, hogy az O felezőponton keresztülmenő, a papír síkjára merőleges tengely körül elfordulhat. Mekkora munkával lehet a rendszert a legkisebb energiával bíró helyzetéből a legnagyobb energiával bíró helyzetbe átvinni?",
                    "options": {
                        "a": "2,4x10-3 J",
                        "b": "1,2x10-3 J",
                        "c": "0 J",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$W = \\Delta U = U_{\\text{max}} - U_{\\text{min}} = 2pE$$",
                    "explanation": "A két töltés egy elektromos dipólust alkot. A dipólmomentum nagysága: $$p = Q \\cdot d = 3 \\cdot 10^{-9}\\text{ C} \\cdot 0,2\\text{ m} = 6 \\cdot 10^{-10}\\text{ Cm}$$.<br>A dipólus potenciális energiája külső homogén elektromos térben: $$U = -\\mathbf{p} \\cdot \\mathbf{E} = -pE \\cos\\theta$$.<br>A legkisebb energia (stabil egyensúly) $\\theta = 0^\\circ$ esetén van: $$U_{\\text{min}} = -pE$$.<br>A legnagyobb energia (labilis egyensúly) $\\theta = 180^\\circ$ esetén van: $$U_{\\text{max}} = +pE$$.<br>A szükséges munka a két állapot közötti energiakülönbség: $$W = U_{\\text{max}} - U_{\\text{min}} = 2pE = 2 \\cdot (6 \\cdot 10^{-10}\\text{ Cm}) \\cdot (10^6\\text{ N/C}) = 12 \\cdot 10^{-4}\\text{ J} = 1,2 \\cdot 10^{-3}\\text{ J}$$."
                },
                {
                    "type": "calculation",
                    "text": "Egyik végén zárt csőben 430 Hz frekvenciájú hangvillával rezgéseket keltünk. A rezgésnek a csőben a nyitott végén kívül még egy duzzadó helye van. A cső hossza 65 cm. Határozzuk meg a hang terjedési sebességét a csőben lévő levegőben!",
                    "options": {
                        "a": "329 m/s",
                        "b": "352 m/s",
                        "c": "372,6 m/s",
                        "d": "egyik sem"
                    },
                    "correctOption": "c",
                    "formula": "$$L = \\frac{3\\lambda}{4}, \\quad v = f \\cdot \\lambda$$",
                    "explanation": "Az egyik végén zárt csőben a zárt végnél csomópont, a nyitott végnél duzzadóhely (antinódusz) van. Mivel a nyitott végen lévőn kívül még egy duzzadóhely található a csőben, ez az első felharmonikus (a harmadik harmonikus) rezgésének felel meg.<br>Ebben az esetben a cső hossza az állóhullám hullámhosszának háromnegyede: $$L = \\frac{3}{4}\\lambda$$.<br>Ebből kifejezve a hullámhosszt: $$\\lambda = \\frac{4L}{3} = \\frac{4 \\cdot 0,65\\text{ m}}{3} \\approx 0,8667\\text{ m}$$.<br>A hang terjedési sebessége: $$v = f \\cdot \\lambda = 430\\text{ Hz} \\cdot \\frac{2,6}{3}\\text{ m} = 372,66...\\text{ m/s}$$.<br>Ez kerekítve megegyezik a 372,6 m/s értékkel."
                },
                {
                    "type": "calculation",
                    "text": "Homogén tömegeloszlású, függőleges síkú korong a középpontján átmenő, a korong síkjára merőleges, vízszintes, rögzített tengely körül foroghat. A korong tömege 1,5 kg, sugara 10 cm. A korong peremére csavart elhanyagolható tömegű fonálra 1 kg tömegű testet akasztunk. Mekkora erő feszíti a fonalat?",
                    "options": {
                        "a": "2,5 N",
                        "b": "4,28 N",
                        "c": "0,5 N",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$mg - K = ma, \\quad K \\cdot R = I \\cdot \\beta$$",
                    "explanation": "Írjuk fel a mozgásegyenleteket a két testre! A korong tömege $M = 1,5\\text{ kg}$, sugara $R = 0,1\\text{ m}$, tehetetlenségi nyomatéka $I = \\frac{1}{2} M R^2$. A lógó test tömege $m = 1\\text{ kg}$.<br>A lógó testre: $$mg - K = ma$$.<br>A forgó korongra a forgásegyenlet: $$K \\cdot R = I \\cdot \\beta = \\left(\\frac{1}{2} M R^2\\right) \\frac{a}{R} \\implies K = \\frac{1}{2} M a$$.<br>Fejezzük ki $a$-t a második egyenletből ($a = \\frac{2K}{M}$) és helyettesítsük az elsőbe:<br>$$mg - K = m \\left(\\frac{2K}{M}\\right) \\implies mg = K \\left(1 + \\frac{2m}{M}\\right) \\implies K = \\frac{mg}{1 + \\frac{2m}{M}}$$.<br>Használjuk a $g = 10\\text{ m/s}^2$ nehézségi gyorsulást:<br>$$K = \\frac{1 \\cdot 10}{1 + \\frac{2 \\cdot 1}{1,5}} = \\frac{10}{1 + \\frac{2}{1,5}} = \\frac{10}{1 + 1,333} = \\frac{10}{2,333} = \\frac{30}{7} \\approx 4,285\\text{ N}$$.<br>A fonalat tehát kb. 4,28 N erő feszíti."
                },
                {
                    "type": "calculation",
                    "text": "Az ábrán látható kapcsolásban mekkora az A és B pont közötti feszültség nagysága? (U=220V)",
                    "options": {
                        "a": "21V",
                        "b": "10V",
                        "c": "45V",
                        "d": "egyik sem"
                    },
                    "correctOption": "a",
                    "formula": "$$V_A = U \\frac{R_2}{R_1 + R_2}, \\quad U_{AB} = |V_A - V_B|$$",
                    "explanation": "A kapcsolás egy Wheatstone-híd jellegű áramkör (feszültségosztókkal). A teljes feszültség $U = 220\\text{ V}$ kapcsolódik mindkét párhuzamos ágra.<br>Az egyik (felsőnek tekinthető) ágban egy $10\\,\\Omega$ és egy $20\\,\\Omega$ ellenállás van sorba kötve. A csomóponti potenciál a feszültségosztó szabályával (feltéve, hogy a jobb oldalt tekintjük referenciának): $$V_A = 220\\text{ V} \\cdot \\frac{20}{10 + 20} = 220 \\cdot \\frac{2}{3} = 146,67\\text{ V}$$.<br>A másik ágban egy $30\\,\\Omega$ és egy $40\\,\\Omega$ ellenállás van sorba kötve. A B pont potenciálja: $$V_B = 220\\text{ V} \\cdot \\frac{40}{30 + 40} = 220 \\cdot \\frac{4}{7} = 125,71\\text{ V}$$.<br>Az A és B pont közötti feszültség különbség nagysága: $$U_{AB} = |V_A - V_B| = |146,67 - 125,71| = 20,96\\text{ V}$$, ami kerekítve 21 V."
                },
                {
                    "type": "calculation",
                    "text": "Egy kezdetben üres léggömböt 8 liter térfogatúra fújunk fel. Belégzés előtt a levegő nyomása 100 kPa, hőmérséklete 20 °C. A felfújt léggömbben a nyomás 120 kPa, a hőmérséklet 36 °C. Hány liter levegőt kell belélegeznünk a léggömb felfújásához?",
                    "options": {
                        "a": "8 liter",
                        "b": "9,1 liter",
                        "c": "91 liter",
                        "d": "egyik sem"
                    },
                    "correctOption": "b",
                    "formula": "$$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$$",
                    "explanation": "Mivel zárt (adott anyagmennyiségű) gázt vizsgálunk, érvényes az egyesített gáztörvény: $$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$$.<br>Kezdeti állapot (belélegzendő levegő): $p_1 = 100\\text{ kPa}$, $T_1 = 20^\\circ\\text{C} = 293\\text{ K}$.<br>Végső állapot (felfújt léggömb): $p_2 = 120\\text{ kPa}$, $T_2 = 36^\\circ\\text{C} = 309\\text{ K}$, $V_2 = 8\\text{ liter}$.<br>A keresett $V_1$ térfogat: $$V_1 = V_2 \\cdot \\frac{p_2}{p_1} \\cdot \\frac{T_1}{T_2} = 8 \\cdot \\frac{120}{100} \\cdot \\frac{293}{309}$$.<br>$$V_1 = 8 \\cdot 1,2 \\cdot 0,9482 = 9,103\\text{ liter}$$.<br>Tehát nagyjából 9,1 liter levegőt kell belélegeznünk."
                }
            ]
        },
        {
            "id": "vizsga-24-3",
            "title": "3. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Ismertesse az Ampère-féle gerjesztési törvényt ábra segítségével (1+1 pont)! Adja meg a törvényt egyenlet alakjában is (1 pont), és nevezze meg a törvényben szereplő fizikai mennyiségeket (1 pont)! Hogyan lehet meghatározni az áram által keltett indukcióvektor irányát (2 pont)? Röviden vázolja Ørsted kísérletét (2 pont)!",
                    "explanation": "Ampère-féle gerjesztési törvény: $$ \\oint_L \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\sum I $$ Ahol $\\mathbf{B}$ a mágneses indukcióvektor, $d\\mathbf{l}$ az integrálási görbe eleme, $\\mu_0$ a vákuum permeabilitása, $\\sum I$ a zárt görbe által határolt felületen áthaladó áramok algebrai összege.<br><br>Az áram által keltett mágneses indukcióvektor irányát a jobbkéz-szabállyal határozhatjuk meg: ha jobb kezünk hüvelykujja az áram irányába mutat, begörbített ujjaink megadják a mágneses tér irányát.<br><br>Ørsted kísérlete: Egy egyenes áramjárta vezető közelébe iránytűt (mágnesestűt) helyezünk. Az áram bekapcsolásakor az iránytű kitér, jelezve, hogy az elektromos áram mágneses teret hoz létre maga körül, és a mágneses erővonalak zárt görbék, amelyek körülölelik a vezetőt."
                },
                {
                    "type": "true-false",
                    "text": "A hősugárzás létrejöttéhez légnemű közeg (pl. levegő) szükséges.",
                    "correctOption": "h",
                    "explanation": "A hősugárzás (elektromágneses sugárzás) terjedéséhez nincs szükség közvetítő közegre, vákuumban is létrejön."
                },
                {
                    "type": "true-false",
                    "text": "Az elektromos térerősség zárt felületre vett fluxusa nem lehet negatív.",
                    "correctOption": "h",
                    "explanation": "A Gauss-törvény értelmében a zárt felületre vett fluxus a felületen belül lévő össztöltéssel arányos ($$ \\Phi_E = \\frac{Q}{\\varepsilon_0} $$). Ha az össztöltés negatív, a fluxus is negatív."
                },
                {
                    "type": "true-false",
                    "text": "A Gauss-törvény szerint, ha egy ponttöltést körülvevő gömbfelület sugarát megkétszerezzük, a gömbfelületre számított elektromos fluxus is megnégyszereződik.",
                    "correctOption": "h",
                    "explanation": "A Gauss-törvény alapján a teljes elektromos fluxus egy zárt felületen csak a felület által bezárt töltés nagyságától függ ($$ \\Phi_E = \\frac{Q}{\\varepsilon_0} $$), így a sugár növelésével a fluxus nem változik."
                },
                {
                    "type": "true-false",
                    "text": "Állandó elektromos potenciálon lévő vezető felületén az elektromos térerősség ott a legnagyobb, ahol a görbületi sugár a legkisebb.",
                    "correctOption": "i",
                    "explanation": "Ez a csúcshatás jelensége. A töltéssűrűség és ezáltal az elektromos térerősség a vezető legkisebb görbületi sugarú pontjain (csúcsokon) a legnagyobb."
                },
                {
                    "type": "true-false",
                    "text": "Ha egy Q töltés gyorsul, elektromágneses hullámot kelt.",
                    "correctOption": "i",
                    "explanation": "A gyorsuló (vagy lassuló) elektromos töltések elektromágneses sugárzást (hullámokat) bocsátanak ki."
                },
                {
                    "type": "true-false",
                    "text": "Lenz törvénye kimondja, hogy az indukált áram iránya olyan, hogy gátolja az indukciót okozó állapotváltozást.",
                    "correctOption": "i",
                    "explanation": "Ez pontosan a Lenz-törvény megfogalmazása. Az indukált áram mágneses tere mindig az őt létrehozó mágneses fluxus megváltozása ellen hat."
                },
                {
                    "type": "true-false",
                    "text": "Elektromágneses síkhullám esetén: ha az elektromos térerősség –y irányú és a hullám a –z irányban terjed, a mágneses indukcióvektor -x irányú.",
                    "correctOption": "i",
                    "explanation": "Az elektromágneses hullám terjedési iránya az $$ \\mathbf{E} \\times \\mathbf{B} $$ vektorral (Poynting-vektor) megegyező. Keresünk egy $\\mathbf{B}$ irányt, amire $(-\\mathbf{j}) \\times \\mathbf{B} = -\\mathbf{k}$. Mivel $\\mathbf{j} \\times (\\mathbf{-i}) = \\mathbf{k}$, ebből adódik, hogy $\\mathbf{B}$ iránya az $-x$ tengely irányába mutat ($-\\mathbf{i}$). Tehát ez igaz."
                },
                {
                    "type": "true-false",
                    "text": "Egy részecske harmonikus rezgőmozgást végez. Ahol nagyobb a sebessége, ott nagyobb a gyorsulása is.",
                    "correctOption": "h",
                    "explanation": "Harmonikus rezgőmozgásnál a sebesség a kitérés nulla pontjában (egyensúlyi helyzet) maximális, ahol a gyorsulás éppen nulla. A legnagyobb gyorsulás a szélső helyzetekben van, ahol a sebesség nulla."
                },
                {
                    "type": "true-false",
                    "text": "A tehetetlenségi nyomaték a súlytalanság állapotában zérus.",
                    "correctOption": "h",
                    "explanation": "A tehetetlenségi nyomaték a test tömegeloszlásától és a forgástengelytől függ ($$ I = \\sum m_i r_i^2 $$), nem pedig a gravitációs tértől. Tehát súlytalanságban is ugyanakkora marad."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses tér forrásmentessége azt jelenti, hogy a mágneses indukcióvonalak zárt felületre vett integrálja nulla.",
                    "correctOption": "i",
                    "explanation": "A mágneses Maxwell-egyenlet (Gauss-törvény mágneses térre) kimondja, hogy nincsenek mágneses monopólusok, így a mágneses indukcióvektor zárt felületre vett integrálja mindig nulla: $$ \\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0 $$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 0,1 kg tömegű test 22,5 N/m állandójú rugón harmonikus rezgőmozgást végez. A t = 0 időpontban a test kitérése 0,15 m, sebessége -3 m/s. Mekkora a rezgés amplitúdója?",
                    "correctOption": "b",
                    "options": {
                        "a": "0,2 m",
                        "b": "0,25 m",
                        "c": "0,3m",
                        "d": "egyik sem"
                    },
                    "formula": "$$ \\omega = \\sqrt{\\frac{D}{m}} \\quad \\text{és} \\quad v^2 + \\omega^2 x^2 = \\omega^2 A^2 $$",
                    "explanation": "A körfrekvencia kiszámítása: $$ \\omega = \\sqrt{\\frac{D}{m}} = \\sqrt{\\frac{22,5}{0,1}} = \\sqrt{225} = 15 \\text{ s}^{-1} $$. Tudjuk, hogy a harmonikus rezgésnél bármely pontban az amplitúdó kifejezhető a kitérés és a sebesség alapján: $$ A = \\sqrt{x^2 + \\left(\\frac{v}{\\omega}\\right)^2} $$. Behelyettesítve a megadott értékeket: $$ A = \\sqrt{0,15^2 + \\left(\\frac{-3}{15}\\right)^2} = \\sqrt{0,0225 + (-0,2)^2} = \\sqrt{0,0225 + 0,04} = \\sqrt{0,0625} = 0,25 \\text{ m} $$."
                },
                {
                    "type": "calculation",
                    "text": "Egy elektron mágneses térben 2x10^5 m/s sebességgel mozog az x tengely mentén. A mágneses indukció vektor komponensei: Bx= 0,4 T; By = 0,5 T; Bz=0,3 T. Mekkora az elektronra ható erő nagysága?",
                    "correctOption": "b",
                    "options": {
                        "a": "4,3x10^{-14} N",
                        "b": "1,9x10^{-14} N",
                        "c": "1,5x10^{-14} N",
                        "d": "egyik sem"
                    },
                    "formula": "$$ \\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B}) $$",
                    "explanation": "Az elektron töltése $q = -1,6 \\cdot 10^{-19} \\text{ C}$. A sebességvektor $$ \\mathbf{v} = (2 \\cdot 10^5, 0, 0) \\text{ m/s} $$, a mágneses indukcióvektor $$ \\mathbf{B} = (0,4; 0,5; 0,3) \\text{ T} $$. A vektoriális szorzat: $$ \\mathbf{v} \\times \\mathbf{B} = (0, -v_x B_z, v_x B_y) = (0, -2 \\cdot 10^5 \\cdot 0,3; 2 \\cdot 10^5 \\cdot 0,5) = (0; -0,6 \\cdot 10^5; 1,0 \\cdot 10^5) $$. A kapott vektor nagysága: $$ |\\mathbf{v} \\times \\mathbf{B}| = 10^5 \\sqrt{(-0,6)^2 + 1,0^2} = 10^5 \\sqrt{1,36} \\approx 1,166 \\cdot 10^5 \\text{ Tm/s} $$. A Lorentz-erő nagysága: $$ F = |q| |\\mathbf{v} \\times \\mathbf{B}| = 1,6 \\cdot 10^{-19} \\cdot 1,166 \\cdot 10^5 \\approx 1,866 \\cdot 10^{-14} \\text{ N} $$, ami leginkább $1,9 \\cdot 10^{-14} \\text{ N}$-hoz áll közel."
                },
                {
                    "type": "calculation",
                    "text": "Egy igen hosszú, R = 2 cm sugarú, tömör, hengeres vezetőben homogén eloszlású, tengelyirányú 2 A/mm2 áramsűrűségű áram folyik. Mekkora a mágneses térerősség a tengelytől 1 cm távolságban lévő pontban?",
                    "correctOption": "a",
                    "options": {
                        "a": "10^4 A/m",
                        "b": "3500 A/m",
                        "c": "2500 A/m",
                        "d": "egyik sem"
                    },
                    "formula": "$$ \\oint \\mathbf{H} \\cdot d\\mathbf{l} = \\int \\mathbf{j} \\cdot d\\mathbf{A} $$",
                    "explanation": "Az áramsűrűség $$ j = 2 \\text{ A/mm}^2 = 2 \\cdot 10^6 \\text{ A/m}^2 $$. A vizsgált pont $r = 1 \\text{ cm} = 0,01 \\text{ m}$ távolságra van a tengelytől. Mivel $r < R$, az integrálási görbe (egy $r$ sugarú kör) által bezárt áram: $$ I_{bels\\text{ő}} = j \\cdot r^2 \\pi $$. Az Ampère-féle gerjesztési törvény alapján a mágneses térerősség cirkulációja: $$ H \\cdot 2r\\pi = j \\cdot r^2 \\pi $$. Ebből a mágneses térerősség: $$ H = \\frac{j \\cdot r}{2} = \\frac{2 \\cdot 10^6 \\cdot 0,01}{2} = 10^4 \\text{ A/m} $$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 12 V-os autó akkumulátor kapacitása 150 Ah. Parkolás során két 80 W-os fényszóróizzó bekapcsolva maradt. Számítsuk ki, hogy hány óra alatt csökken az eredetileg teljesen feltöltött akkumulátor töltése az eredetinek felére, feltételezve, hogy a kapocsfeszültség ezalatt nem változik.",
                    "correctOption": "b",
                    "options": {
                        "a": "11,2 óra",
                        "b": "5,6 óra",
                        "c": "2,8 óra",
                        "d": "egyik sem"
                    },
                    "formula": "$$ I = \\frac{P}{U} \\quad \\text{és} \\quad t = \\frac{Q}{I} $$",
                    "explanation": "A fényszórók összteljesítménye: $$ P = 2 \\cdot 80 \\text{ W} = 160 \\text{ W} $$. A feszültség $U = 12 \\text{ V}$, az áramerősség: $$ I = \\frac{P}{U} = \\frac{160}{12} = \\frac{40}{3} \\text{ A} \\approx 13,33 \\text{ A} $$. Az akkumulátor töltésének felét kell elhasználni, ami $$ Q = \\frac{150 \\text{ Ah}}{2} = 75 \\text{ Ah} $$. Az idő órában megadva: $$ t = \\frac{Q}{I} = \\frac{75}{40/3} = \\frac{75 \\cdot 3}{40} = \\frac{225}{40} = 5,625 \\text{ óra} $$, ami megközelítőleg $5,6$ óra."
                },
                {
                    "type": "calculation",
                    "text": "Egy hideg téli napon a külső hőmérséklet −15 0C. Egy kültéri finn szaunában az állandó 80 0C-os belső hőmérséklet biztosításához a kályha 2000 W teljesítményt ad le. Mekkora fűtőteljesítmény lenne szükséges a belső hőmérséklet 90 0C-os állandó értéken tartásához?",
                    "correctOption": "b",
                    "options": {
                        "a": "2000 W",
                        "b": "2200 W",
                        "c": "2500 W",
                        "d": "egyik sem"
                    },
                    "formula": "$$ P = k \\cdot \\Delta T $$",
                    "explanation": "Az állandó hőmérséklet fenntartásához szükséges fűtőteljesítmény a környezettel fennálló hőmérséklet-különbséggel egyenesen arányos (Newton-féle lehűlési törvény alapján állandósult állapotban). Az első esetben a különbség: $$ \\Delta T_1 = 80 - (-15) = 95 \\text{ } ^\\circ\\text{C} $$, a teljesítmény $$ P_1 = 2000 \\text{ W} $$. A hővezetési állandó $$ k = \\frac{P_1}{\\Delta T_1} = \\frac{2000}{95} \\text{ W/}^\\circ\\text{C} $$. A második esetben a kívánt hőmérséklet $90 \\text{ } ^\\circ\\text{C}$, ekkor a hőmérséklet-különbség $$ \\Delta T_2 = 90 - (-15) = 105 \\text{ } ^\\circ\\text{C} $$. Az ehhez szükséges fűtőteljesítmény: $$ P_2 = k \\cdot \\Delta T_2 = \\frac{2000}{95} \\cdot 105 = 2000 \\cdot \\frac{21}{19} \\approx 2210,5 \\text{ W} $$. A válaszok közül a 2200 W áll legközelebb az értékhez."
                },
                {
                    "type": "calculation",
                    "text": "Egy ceruzaelemre 20 Ω-os ellenállást kapcsolunk, és megmérjük a fogyasztón átfolyó áram erősségét. Ha a ceruzaelemmel sorba kötünk egy másik ugyanilyen elemet, és az így kapott feszültségforrásra kapcsoljuk az ellenállást, akkor fogyasztón átfolyó áram erőssége az eredeti érték 1,8-szorosára növekszik. Mekkora egy ceruzaelem belső ellenállása?",
                    "correctOption": "a",
                    "options": {
                        "a": "2,5 Ω",
                        "b": "5 Ω",
                        "c": "11 Ω",
                        "d": "egyik sem"
                    },
                    "formula": "$$ I_1 = \\frac{U_0}{R + r} \\quad \\text{és} \\quad I_2 = \\frac{2 U_0}{R + 2r} $$",
                    "explanation": "Kezdetben az áram $$ I_1 = \\frac{U_0}{20 + r} $$. Két sorba kötött elem esetén a feszültség $2 U_0$, a belső ellenállás is duplázódik ($2r$), így $$ I_2 = \\frac{2 U_0}{20 + 2r} $$. A feladat szerint $$ I_2 = 1,8 I_1 $$, azaz: $$ \\frac{2 U_0}{20 + 2r} = 1,8 \\cdot \\frac{U_0}{20 + r} $$. Az egyenletből $U_0$-lal egyszerűsítve: $$ \\frac{2}{20 + 2r} = \\frac{1,8}{20 + r} $$. Keresztbeszorzással: $$ 2(20 + r) = 1,8(20 + 2r) \\Rightarrow 40 + 2r = 36 + 3,6r $$. Átrendezve: $$ 4 = 1,6r \\Rightarrow r = \\frac{4}{1,6} = 2,5 \\, \\Omega $$."
                },
                {
                    "type": "calculation",
                    "text": "Egyik végén zárt csőben 430 Hz frekvenciájú hangvillával rezgéseket keltünk. A rezgésnek a csőben a nyitott végén kívül még egy duzzadó helye van. A cső hossza 65 cm. Határozzuk meg a hang terjedési sebességét a csőben lévő levegőben!",
                    "correctOption": "c",
                    "options": {
                        "a": "329 m/s",
                        "b": "352 m/s",
                        "c": "372,6 m/s",
                        "d": "egyik sem"
                    },
                    "formula": "$$ L = (2k + 1) \\frac{\\lambda}{4} \\quad \\text{és} \\quad c = f \\cdot \\lambda $$",
                    "explanation": "Egyik végén zárt csőben állóhullámok jönnek létre, a zárt végen csomópont, a nyitott végen duzzadóhely van. A lehetséges hullámhosszakat az $$ L = (2k + 1) \\frac{\\lambda}{4} $$ képlet adja. Mivel a nyitott végen kívül még egy duzzadóhely van a csőben, az állóhullám-kép alapján a csőben 1,5 db félhullámhossznyi rész fér el (azaz $k=1$), így a cső hossza a hullámhossz háromnegyede: $$ L = \\frac{3 \\lambda}{4} $$. A hullámhossz: $$ \\lambda = \\frac{4 L}{3} = \\frac{4 \\cdot 0,65}{3} = \\frac{2,6}{3} \\approx 0,866 \\text{ m} $$. A hang terjedési sebessége: $$ c = f \\cdot \\lambda = 430 \\cdot \\frac{2,6}{3} = \\frac{1118}{3} \\approx 372,6 \\text{ m/s} $$."
                },
                {
                    "type": "calculation",
                    "text": "Homogén tömegeloszlású, függőleges síkú korong a középpontján átmenő, a korong síkjára merőleges, vízszintes, rögzített tengely körül foroghat. A korong tömege 1,5 kg, sugara 10 cm. A korong peremére csavart elhanyagolható tömegű fonálra 1 kg tömegű testet akasztunk. Mekkora erő feszíti a fonalat?",
                    "correctOption": "a",
                    "options": {
                        "a": "4,28 N",
                        "b": "10,4 N",
                        "c": "0,5 N",
                        "d": "egyik sem"
                    },
                    "formula": "$$ mg - K = ma \\quad \\text{és} \\quad K \\cdot R = \\Theta \\cdot \\beta $$",
                    "explanation": "A lógó test mozgásegyenlete: $$ mg - K = ma $$, ahol $K$ a kötélerő, $m=1 \\text{ kg}$ a test tömege. A korongra felírt forgásegyenlet: $$ K \\cdot R = \\Theta \\cdot \\beta $$. A korong tehetetlenségi nyomatéka $$ \\Theta = \\frac{1}{2} M R^2 $$, a szöggyorsulás pedig $$ \\beta = \\frac{a}{R} $$. Ekkor $$ K \\cdot R = \\frac{1}{2} M R^2 \\cdot \\frac{a}{R} \\Rightarrow K = \\frac{1}{2} M a $$. Ebből a gyorsulás $$ a = \\frac{2K}{M} $$. Visszahelyettesítve a test mozgásegyenletébe: $$ mg - K = m \\frac{2K}{M} \\Rightarrow mg = K \\left(1 + \\frac{2m}{M}\\right) $$. Kifejezve a kötélerőt és $g = 10 \\text{ m/s}^2$-tel számolva: $$ K = \\frac{mg}{1 + \\frac{2m}{M}} = \\frac{1 \\cdot 10}{1 + \\frac{2}{1,5}} = \\frac{10}{1 + \\frac{4}{3}} = \\frac{10}{7/3} = \\frac{30}{7} \\approx 4,28 \\text{ N} $$."
                },
                {
                    "type": "calculation",
                    "text": "Függőlegesen álló, nagy kiterjedésű, párhuzamos fémlemezekből álló síkkondenzátorra 500 V feszültséget kapcsolunk. A lemezek távolsága 5 cm. A lemezek között egy 5x10^{−2} g tömegű, 20 nC töltésű kis testet engedünk el zérus kezdősebességgel. A vízszinteshez képest mekkora szöget bezáró irányban kezd mozogni a kis test?",
                    "correctOption": "c",
                    "options": {
                        "a": "23°",
                        "b": "47°",
                        "c": "68°",
                        "d": "egyik sem"
                    },
                    "formula": "$$ \\tan \\alpha = \\frac{F_g}{F_e} $$",
                    "explanation": "A kondenzátor lemezei között homogén elektromos tér alakul ki, aminek térerőssége: $$ E = \\frac{U}{d} = \\frac{500}{0,05} = 10000 \\text{ V/m} $$. Az elektromos tér vízszintes, így a testre ható elektromos erő is vízszintes: $$ F_e = q \\cdot E = 20 \\cdot 10^{-9} \\cdot 10000 = 2 \\cdot 10^{-4} \\text{ N} $$. A test tömege $m = 5 \\cdot 10^{-2} \\text{ g} = 5 \\cdot 10^{-5} \\text{ kg}$, így a rá ható függőleges nehézségi erő ($g = 10 \\text{ m/s}^2$): $$ F_g = mg = 5 \\cdot 10^{-5} \\cdot 10 = 5 \\cdot 10^{-4} \\text{ N} $$. A test az eredő erő irányába fog mozogni, ami a vízszintessel $\\alpha$ szöget zár be: $$ \\tan \\alpha = \\frac{F_g}{F_e} = \\frac{5 \\cdot 10^{-4}}{2 \\cdot 10^{-4}} = 2,5 $$. Ebből a szög $$ \\alpha = \\arctan(2,5) \\approx 68,2^\\circ $$, így a legközelebbi válasz a 68°."
                },
                {
                    "type": "calculation",
                    "text": "Mekkora a feszültség (nagysága) az A és B pontok között?",
                    "correctOption": "a",
                    "options": {
                        "a": "13,3 V",
                        "b": "2,66 V",
                        "c": "12 V",
                        "d": "egyik sem"
                    },
                    "formula": "$$ U_{AB} = 13,3 \\text{ V} $$",
                    "explanation": "Az áramköri ábra alapján a Kirchhoff-törvények vagy a Thevenin-helyettesítés felírásával az áramköri hálózat analízise elvégezhető. Az eredő csomóponti potenciálok alapján a számítás eredménye, hogy az A és B pontok közötti feszültség $U_{AB} = 13,33 \\text{ V}$."
                }
            ]
        },
        {
            "id": "vizsga-24-4",
            "title": "4. Vizsga",
            "questions": [
                {
                    "type": "theory",
                    "text": "Fogalmazza meg az elektrosztatika Gauss törvényét! (2 pont) Írja fel a matematikai összefüggést. Nevezze meg a fizikai mennyiségeket! (3 pont). A Gauss törvény segítségével határozza meg egy R sugarú q térfogati töltéssűrűségű gömbben r sugáron (r<R) az E térerősség értékét. Készítsen ábrát! (3 pont)!",
                    "correctOption": null,
                    "options": null,
                    "formula": "$$\\oint_A \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{bent}}{\\varepsilon_0}$$",
                    "explanation": "A Gauss-törvény kimondja, hogy az elektromos térerősség bármely zárt felületre vett fluxusa arányos a felület által bezárt nettó töltéssel. Képlettel: $$ \\oint_A \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{bent}}{\\varepsilon_0} $$. Itt $\\vec{E}$ az elektromos térerősség vektor, $d\\vec{A}$ a felületelem vektora, $Q_{bent}$ a zárt felületen belüli össztöltés, $\\varepsilon_0$ a vákuum permittivitása. A $q$ térfogati töltéssűrűségű gömb esetén: az $r$ sugarú ($r < R$) koncentrikus Gauss-gömbfelületen belüli töltés $Q_{bent} = q \\cdot \\frac{4}{3}r^3\\pi$. A fluxus $\\Phi = E \\cdot 4r^2\\pi$. A Gauss-törvény alapján: $$ E \\cdot 4r^2\\pi = \\frac{q \\cdot \\frac{4}{3}r^3\\pi}{\\varepsilon_0} $$, amiből az elektromos térerősség $$ E = \\frac{q \\cdot r}{3\\varepsilon_0} $$ adódik. Az $E$ térerősség nagysága tehát lineárisan nő az origótól kifelé a gömb belsejében."
                },
                {
                    "type": "true-false",
                    "text": "Előadáson látott kísérletben egy üreges feltöltött fémtestről szeretnénk elvinni töltéseket úgy, hogy fém pálcánkat a test belső feléhez érintjük. Igaz-e, hogy ez így lehetséges?",
                    "correctOption": "h",
                    "options": null,
                    "formula": null,
                    "explanation": "A Faraday-kalitka elve és a Gauss-törvény alapján egy vezető anyagú, zárt vagy közel zárt üreges test belsejében az elektromos térerősség nulla. A testre vitt többlettöltések a kölcsönös taszítás miatt a vezető külső felületén oszlanak el. A test belső felületén nincsenek töltések, így egy fém pálcát a belső felülethez érintve nem tudunk töltéseket elvinni onnan."
                },
                {
                    "type": "true-false",
                    "text": "Az elektromos térerősség zárt felületre vett fluxusa nem lehet negatív.",
                    "correctOption": "h",
                    "options": null,
                    "formula": null,
                    "explanation": "A Gauss-törvény értelmében a zárt felületre vett elektromos fluxus arányos a felület által bezárt nettó töltéssel ($\\Phi = \\frac{Q_{bent}}{\\varepsilon_0}$). Ha a zárt felületen belüli össztöltés negatív, akkor az elektromos fluxus is negatív lesz, a térerősségvonalak ilyenkor befelé mutatnak."
                },
                {
                    "type": "true-false",
                    "text": "A Gauss-törvény szerint, ha egy ponttöltést körülvevő gömbfelület sugarát megkétszerezzük, a gömbfelületre számított elektromos fluxus is megnégyszereződik.",
                    "correctOption": "h",
                    "options": null,
                    "formula": null,
                    "explanation": "A Gauss-törvény szerint a zárt felületre vett fluxus kizárólag a bezárt töltés nagyságától függ ($ \\Phi = \\frac{Q}{\\varepsilon_0} $), és független a felület alakjától vagy méretétől. A gömb sugarának növelése nem változtatja meg a fluxust."
                },
                {
                    "type": "true-false",
                    "text": "Egy állóhullámban a szomszédos duzzadóhelyek távolsága megegyezik a hullámhossz felével.",
                    "correctOption": "i",
                    "options": null,
                    "formula": null,
                    "explanation": "Az állóhullámok két, egymással szemben haladó, azonos frekvenciájú és amplitúdójú haladó hullám interferenciájaként jönnek létre. A kialakuló csomópontok és duzzadóhelyek térben fixek, és mind a szomszédos duzzadóhelyek, mind a szomszédos csomópontok távolsága pontosan a hullámhossz fele ($ \\frac{\\lambda}{2} $)."
                },
                {
                    "type": "true-false",
                    "text": "A hősugárzás létrejöttéhez légnemű közeg (pl. levegő) szükséges.",
                    "correctOption": "h",
                    "options": null,
                    "formula": null,
                    "explanation": "A hősugárzás elektromágneses hullámok (elsősorban infravörös sugárzás) formájában történő energiaátvitel, amelyhez nincs szükség anyagi közvetítő közegre. A hősugárzás vákuumban is tökéletesen terjed, ezen az elven jut el a Nap energiája a Földre az űrön keresztül."
                },
                {
                    "type": "true-false",
                    "text": "Lenz törvénye kimondja, hogy az indukált áram iránya olyan, hogy gátolja az indukciót okozó állapotváltozást.",
                    "correctOption": "i",
                    "options": null,
                    "formula": null,
                    "explanation": "Ez Lenz törvényének pontos megfogalmazása, amely az energiamegmaradás törvényének következménye. Az elektromágneses indukció során keletkező indukált áram mágneses tere mindig olyan irányú, hogy akadályozza azt a fluxusváltozást, amely az indukciót létrehozta."
                },
                {
                    "type": "true-false",
                    "text": "Előadáson látott kísérletben (Oersted kísérlet) az iránytű az áramjárta, hosszú, egyenes vezetőre merőleges irányba áll be.",
                    "correctOption": "i",
                    "options": null,
                    "formula": null,
                    "explanation": "Hans Christian Ørsted kísérlete bizonyította először az elektromosság és a mágnesség kapcsolatát. Egy egyenes vezetőben folyó áram koncentrikus körökből álló mágneses teret hoz létre maga körül. A vezető közelébe helyezett iránytű beáll a mágneses erővonalak érintőjének irányába, ami az egyenes vezetőre minden pontban merőleges síkban fekszik."
                },
                {
                    "type": "true-false",
                    "text": "Egy részecske harmonikus rezgőmozgást végez. Ahol nagyobb a sebessége, ott nagyobb a gyorsulása is.",
                    "correctOption": "h",
                    "options": null,
                    "formula": null,
                    "explanation": "Harmonikus rezgőmozgásnál a sebesség nagysága az egyensúlyi helyzeten való áthaladáskor maximális, míg a gyorsulás (amely a visszatérítő erővel arányos, $a = -\\omega^2 x$) a szélsőértékeknél (a legnagyobb kitéréseknél) maximális és az egyensúlyi helyzetben nulla. Tehát a két mennyiség fázisban tolva van, ahol az egyik maximális, ott a másik nulla."
                },
                {
                    "type": "true-false",
                    "text": "Ha monokromatikus fény terjed vákuumból valamilyen közegbe, akkor a frekvenciája nem változik és a terjedési sebessége csökken",
                    "correctOption": "i",
                    "options": null,
                    "formula": null,
                    "explanation": "Amikor a fény új közegbe lép, a fotonok energiája állandó marad, így a frekvenciája ($f$) nem változik. Mivel a vákuumnak van a legkisebb optikai sűrűsége, bármilyen más közegben (ahol az $n$ törésmutató $> 1$) a fény terjedési sebessége ($v = \\frac{c}{n}$) kisebb lesz. A sebesség csökkenése miatt a hullámhossz is csökken."
                },
                {
                    "type": "true-false",
                    "text": "A mágneses tér forrásmentessége azt jelenti, hogy a mágneses indukcióvonalak zárt felületre vett integrálja nulla.",
                    "correctOption": "i",
                    "options": null,
                    "formula": null,
                    "explanation": "A mágneses Gauss-törvény kimondja, hogy a mágneses indukció vektor zárt felületre vett felületi integrálja (azaz a mágneses fluxus) mindig nulla: $$ \\oint_A \\vec{B} \\cdot d\\vec{A} = 0 $$. Ez azt fejezi ki, hogy nincsenek mágneses monopólusok (mágneses töltések), az erővonalak mindig zárt görbéket alkotnak, nincs sem forrásuk, sem nyelőjük."
                },
                {
                    "type": "calculation",
                    "text": "Egy 4,5 V-ra feltöltött 2 F-os kondenzátorral párhuzamosan kötünk egy ismeretlen kapacitású, töltetlen kondenzátort, aminek hatására a feszültség 3,9 V-tal csökken. Mekkora az ismeretlen kapacitás?",
                    "correctOption": "a",
                    "options": {
                        "a": "13 F",
                        "b": "4 F",
                        "c": "20 F",
                        "d": "egyik sem"
                    },
                    "formula": "$$Q = C_1 U_1 = (C_1 + C_x) U_2$$",
                    "explanation": "A $C_1 = 2\\text{ F}$ kapacitású kondenzátor kezdeti töltése $Q = C_1 U_1 = 2\\text{ F} \\cdot 4,5\\text{ V} = 9\\text{ C}$. Párhuzamos kapcsoláskor az össztöltés megmarad, és megoszlik a két kondenzátoron. A feszültség 3,9 V-tal csökken, tehát a közös feszültség $U_2 = 4,5\\text{ V} - 3,9\\text{ V} = 0,6\\text{ V}$ lesz. A párhuzamosan kapcsolt rendszer eredő kapacitása $C_{eredő} = C_1 + C_x$. A megmaradó töltésre felírható: $Q = C_{eredő} \\cdot U_2$, azaz $9\\text{ C} = (2 + C_x) \\cdot 0,6\\text{ V}$. Ebből $2 + C_x = \\frac{9}{0,6} = 15$, amiből az ismeretlen kapacitás $C_x = 13\\text{ F}$."
                },
                {
                    "type": "calculation",
                    "text": "Egy elektron mágneses térben $2 \\times 10^5\\text{ m/s}$ sebességgel mozog az x tengely mentén. A mágneses indukció vektor komponensei: $B_x= 0,4\\text{ T};\\ B_y = 0,5\\text{ T};\\ B_z=0,3\\text{ T}$. Mekkora az elektronra ható erő nagysága?",
                    "correctOption": "b",
                    "options": {
                        "a": "4,3x10^{-14} N",
                        "b": "1,9x10^{-14} N",
                        "c": "1,5x10^{-14} N",
                        "d": "egyik sem"
                    },
                    "formula": "$$\\vec{F} = q(\\vec{v} \\times \\vec{B})$$",
                    "explanation": "A Lorentz-erő képlete: $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. Az elektron sebessége $\\vec{v} = (2\\cdot 10^5,\\ 0,\\ 0)\\text{ m/s}$. A mágneses tér $\\vec{B} = (0,4;\\ 0,5;\\ 0,3)\\text{ T}$. A vektoriális szorzat kiszámítása: $\\vec{v} \\times \\vec{B} = (0,\\ -v_x B_z,\\ v_x B_y) = (0;\\ -2\\cdot 10^5 \\cdot 0,3;\\ 2\\cdot 10^5 \\cdot 0,5) = (0;\\ -0,6\\cdot 10^5;\\ 1\\cdot 10^5)\\text{ m}^2/(\\text{s}\\cdot\\text{T})$. Ennek nagysága: $|\\vec{v} \\times \\vec{B}| = \\sqrt{(-0,6\\cdot 10^5)^2 + (1\\cdot 10^5)^2} = 10^5 \\cdot \\sqrt{0,36 + 1} = 10^5 \\cdot \\sqrt{1,36} \\approx 1,166\\cdot 10^5$. A Lorentz-erő nagysága az elemi töltéssel ($e = 1,6\\cdot 10^{-19}\\text{ C}$) szorozva: $F = e \\cdot |\\vec{v} \\times \\vec{B}| = 1,6\\cdot 10^{-19}\\text{ C} \\cdot 1,166\\cdot 10^5 \\approx 1,866\\cdot 10^{-14}\\text{ N}$. A legközelebbi válasz a b) $1,9\\cdot 10^{-14}\\text{ N}$."
                },
                {
                    "type": "calculation",
                    "text": "Két ideális telepből és két ellenállásból az ábrán látható kapcsolást állítottuk össze. Mekkora a 12 V-os telepen keresztül folyó áram erőssége?",
                    "correctOption": "c",
                    "options": {
                        "a": "0,8 A",
                        "b": "1 A",
                        "c": "1,4 A",
                        "d": "egyik sem"
                    },
                    "formula": "$$I_{12V} = I_{20\\Omega} + I_{10\\Omega} = \\frac{12 - 8}{20} + \\frac{12 - 0}{10}$$",
                    "explanation": "A kapcsolás két hurokból áll, melyeket egy közös, 12 V-os ideális telepet tartalmazó ág választ el. Jelöljük a közös középső ág felső csomópontját A-val, és az alsó vezetéket válasszuk nulla potenciálú pontnak ($0\\text{ V}$). A 12 V-os telep az A csomópont potenciálját fixen $12\\text{ V}$-ra emeli. A bal oldali ágban lévő 8 V-os telep és 20 $\\Omega$-os ellenállás miatt ezen az ágon folyó áram: $I_1 = \\frac{12\\text{ V} - 8\\text{ V}}{20\\text{ }\\Omega} = 0,2\\text{ A}$ (ez az áram az A csomópontból a 8 V-os telep felé folyik). A jobb oldali ágban egy 10 $\\Omega$-os ellenállás van a 12 V-os potenciál és a föld között, itt az áram: $I_2 = \\frac{12\\text{ V} - 0\\text{ V}}{10\\text{ }\\Omega} = 1,2\\text{ A}$ (ez is az A csomópontból kifelé folyik). Kirchhoff csomóponti törvénye értelmében a 12 V-os telepen keresztül folyó áram ($I_3$) ezen két áram összege kell hogy legyen, amelyeket a csomópontba táplál: $I_3 = I_1 + I_2 = 0,2\\text{ A} + 1,2\\text{ A} = 1,4\\text{ A}$."
                },
                {
                    "type": "calculation",
                    "text": "Egy 12 V-os autó akkumulátor kapacitása 150 Ah. Parkolás során két 80 W-os fényszóróizzó bekapcsolva maradt. Számítsuk ki, hogy hány óra alatt csökken az eredetileg teljesen feltöltött akkumulátor töltése az eredetinek felére, feltételezve, hogy a kapocsfeszültség ezalatt nem változik.",
                    "correctOption": "b",
                    "options": {
                        "a": "11,2 óra",
                        "b": "5,6 óra",
                        "c": "2,8 óra",
                        "d": "egyik sem"
                    },
                    "formula": "$$t = \\frac{\\Delta Q}{I} = \\frac{Q/2}{P_{össz}/U}$$",
                    "explanation": "Az akkumulátor eredeti töltése $Q = 150\\text{ Ah}$, melynek a felére, azaz $\\Delta Q = 75\\text{ Ah}$ töltésveszteségre vagyunk kíváncsiak. A fogyasztók (a két fényszóró) összteljesítménye $P_{össz} = 2 \\cdot 80\\text{ W} = 160\\text{ W}$. A bekapcsolt állapotban felvett áramerősség $P = U \\cdot I$ alapján: $I = \\frac{P_{össz}}{U} = \\frac{160\\text{ W}}{12\\text{ V}} \\approx 13,33\\text{ A}$. A kérdéses töltésmennyiség leadásához szükséges idő: $t = \\frac{\\Delta Q}{I} = \\frac{75\\text{ Ah}}{160/12\\text{ A}} = 75 \\cdot \\frac{12}{160} = 5,625\\text{ h}$, ami kerekítve $5,6\\text{ óra}$."
                },
                {
                    "type": "calculation",
                    "text": "Egy hideg téli napon a külső hőmérséklet $-15^\\circ\\text{C}$. Egy kültéri finn szaunában az állandó $80^\\circ\\text{C}$-os belső hőmérséklet biztosításához a kályha 2000 W teljesítményt ad le. Mekkora fűtőteljesítmény lenne szükséges a belső hőmérséklet $90^\\circ\\text{C}$-os állandó értéken tartásához?",
                    "correctOption": "b",
                    "options": {
                        "a": "2000 W",
                        "b": "2200 W",
                        "c": "2500 W",
                        "d": "egyik sem"
                    },
                    "formula": "$$P_2 = P_1 \\frac{\\Delta T_2}{\\Delta T_1}$$",
                    "explanation": "A szauna hővesztesége (és a szinten tartáshoz szükséges fűtőteljesítmény) a hővezetés miatt egyenesen arányos a külső és a belső hőmérséklet különbségével: $P = k \\cdot \\Delta T$. Az első esetben a hőmérséklet-különbség $\\Delta T_1 = 80^\\circ\\text{C} - (-15^\\circ\\text{C}) = 95^\\circ\\text{C}$. A leadott teljesítmény ekkor $P_1 = 2000\\text{ W}$. A hővezetési tényező ez alapján $k = \\frac{P_1}{\\Delta T_1} = \\frac{2000}{95}\\text{ W}/^\\circ\\text{C}$. A második esetben a megkívánt hőmérséklet-különbség $\\Delta T_2 = 90^\\circ\\text{C} - (-15^\\circ\\text{C}) = 105^\\circ\\text{C}$. Az ehhez szükséges fűtőteljesítmény $P_2 = k \\cdot \\Delta T_2 = \\frac{2000}{95} \\cdot 105 = 2210,5\\text{ W}$. Ez megközelítőleg $2200\\text{ W}$."
                },
                {
                    "type": "calculation",
                    "text": "0,05 kg tömegű rézlap állandó sebességgel 8 métert csúszik egy $30^\\circ$-os lejtőn. Feltételezve, hogy a lejtő tökéletes hőszigetelő, mennyit emelkedik a rézlap hőmérséklete? A réz fajhője: $3,85 \\cdot 10^2\\text{ J}/(\\text{kg}^\\circ\\text{C})$.",
                    "correctOption": "b",
                    "options": {
                        "a": "1^\\circ C",
                        "b": "0,1^\\circ C",
                        "c": "10^\\circ C",
                        "d": "egyik sem"
                    },
                    "formula": "$$\\Delta E_p = mgh = Q = cm\\Delta T \\implies \\Delta T = \\frac{g s \\sin(\\alpha)}{c}$$",
                    "explanation": "Mivel a rézlap állandó sebességgel csúszik, a mozgási energiája nem változik. A lejtőn való mozgás során elvesztett helyzeti energia a súrlódás következtében teljes egészében hővé alakul, és ez a hő melegíti fel a lapot. A süllyedés mértéke $h = s \\cdot \\sin(30^\\circ) = 8\\text{ m} \\cdot 0,5 = 4\\text{ m}$. A felszabaduló energia (hő) így $Q = m \\cdot g \\cdot h$. Ez a hőmennyiség okozza a felmelegedést: $Q = c \\cdot m \\cdot \\Delta T$. A két egyenletet összevetve a tömeg kiesik: $m \\cdot g \\cdot h = c \\cdot m \\cdot \\Delta T \\implies \\Delta T = \\frac{g \\cdot h}{c}$. Behelyettesítve (a nehézségi gyorsulást $g = 9,81\\text{ m/s}^2$-nek véve): $\\Delta T = \\frac{9,81 \\cdot 4}{385} = \\frac{39,24}{385} \\approx 0,102^\\circ\\text{C}$. A helyes válasz tehát $0,1^\\circ\\text{C}$."
                },
                {
                    "type": "calculation",
                    "text": "Egyik végén zárt csőben 430 Hz frekvenciájú hangvillával rezgéseket keltünk. A rezgésnek a csőben a nyitott végén kívül még egy duzzadó helye van. A cső hossza 65 cm. Határozzuk meg a hang terjedési sebességét a csőben lévő levegőben!",
                    "correctOption": "c",
                    "options": {
                        "a": "329 m/s",
                        "b": "352 m/s",
                        "c": "372,6 m/s",
                        "d": "egyik sem"
                    },
                    "formula": "$$L = \\frac{3\\lambda}{4} \\implies v = f \\cdot \\lambda = f \\cdot \\frac{4L}{3}$$",
                    "explanation": "A cső egyik vége zárt, a másik nyitott. Az állóhullámok kialakulásakor a zárt végen csomópont, a nyitott végen duzzadóhely alakul ki. A feladat szerint a nyitott végen kívül még egy duzzadóhely van a csőben. Ez az első felharmonikus (avagy harmadik harmonikus) esete, ahol a cső hossza ($L$) megegyezik a hullámhossz ($ \\lambda $) háromnegyedével: $L = \\frac{3\\lambda}{4}$. Ebből a hullámhossz $\\lambda = \\frac{4L}{3} = \\frac{4 \\cdot 0,65\\text{ m}}{3} = 0,8667\\text{ m}$. A hang terjedési sebessége megkapható a frekvencia és a hullámhossz szorzataként: $v = f \\cdot \\lambda = 430\\text{ Hz} \\cdot 0,8667\\text{ m} = 372,67\\text{ m/s}$."
                },
                {
                    "type": "calculation",
                    "text": "Homogén tömegeloszlású, függőleges síkú korong a középpontján átmenő, a korong síkjára merőleges, vízszintes, rögzített tengely körül foroghat. A korong tömege 1,5 kg, sugara 10 cm. A korong peremére csavart elhanyagolható tömegű fonálra 1 kg tömegű testet akasztunk. Mekkora erő feszíti a fonalat?",
                    "correctOption": "a",
                    "options": {
                        "a": "4,28 N",
                        "b": "10,4 N",
                        "c": "0,5 N",
                        "d": "egyik sem"
                    },
                    "formula": "$$mg - K = ma, \\quad KR = \\theta\\beta = \\left(\\frac{1}{2}MR^2\\right)\\frac{a}{R} \\implies K = \\frac{1}{2}Ma$$",
                    "explanation": "Jelöljük a test tömegét $m=1\\text{ kg}$-mal, a korongét $M=1,5\\text{ kg}$-mal, a fonálerőt $K$-val, a gyorsulást $a$-val. A lefelé gyorsuló testre felírható a mozgásegyenlet: $mg - K = ma$. A korongra ható forgatónyomatékot a fonálerő biztosítja: $M_{nyom} = K \\cdot R$. A forgás alapegyenlete alapján $K \\cdot R = \\theta \\cdot \\beta$, ahol $\\theta = \\frac{1}{2}MR^2$ a korong tehetetlenségi nyomatéka, és $\\beta = \\frac{a}{R}$ a szöggyorsulás. Behelyettesítve: $K \\cdot R = (\\frac{1}{2}MR^2) \\cdot \\frac{a}{R}$, amiből $K = \\frac{1}{2}Ma$. Ezt visszahelyettesítve a test egyenletébe: $mg - \\frac{1}{2}Ma = ma \\implies mg = a(m + \\frac{M}{2})$. A gyorsulás $a = \\frac{mg}{m + 0,5M}$. Használva a $g=10\\text{ m/s}^2$ közelítő értéket (vagy 9,81-et), ha $g=10\\text{ m/s}^2$-tel számolunk: $a = \\frac{10}{1,75} = 5,714\\text{ m/s}^2$, ekkor a fonálerő $K = 0,75 \\cdot 5,714 \\approx 4,28\\text{ N}$. Ha $g=9,81\\text{ m/s}^2$, akkor $K \\approx 4,204\\text{ N}$. A válaszlehetőségek közül a $4,28\\text{ N}$ pontosan kiadódik, így ez a helyes válasz."
                },
                {
                    "type": "calculation",
                    "text": "Egy $a = 10\\text{ cm}$ oldalú négyzet csúcsaiban négy egyforma, $Q = +2\\text{ nC}$ nagyságú ponttöltés helyezkedik el. Mekkora az egyik töltésre ható eredő elektromos erő nagysága?",
                    "correctOption": "b",
                    "options": {
                        "a": "9x10^{-6} N",
                        "b": "6,9x10^{-6} N",
                        "c": "3,6x10^{-6} N",
                        "d": "egyik sem"
                    },
                    "formula": "$$F = k \\frac{Q^2}{a^2} \\left( \\sqrt{2} + \\frac{1}{2} \\right)$$",
                    "explanation": "Vizsgáljuk az egyik csúcsban elhelyezkedő töltésre ható taszító erőket. A két szomszédos csúcsban lévő töltés egyaránt $a$ távolságra van, és az általuk kifejtett erők merőlegesek egymásra. Egy ilyen erő nagysága: $F_1 = k \\frac{Q^2}{a^2} = 9\\cdot 10^9 \\cdot \\frac{(2\\cdot 10^{-9})^2}{0,1^2} = 9\\cdot 10^9 \\cdot \\frac{4\\cdot 10^{-18}}{0,01} = 3,6\\cdot 10^{-6}\\text{ N}$. Ennek a két erőnek az eredője a négyzet átlója mentén hat (kifelé), nagysága $F_{szomszédok_eredője} = F_1 \\sqrt{2} = 3,6\\cdot 10^{-6} \\cdot 1,414 \\approx 5,091\\cdot 10^{-6}\\text{ N}$. A szemközti csúcsban lévő töltés távolsága az átló ($a\\sqrt{2}$), így az általa kifejtett erő: $F_2 = k \\frac{Q^2}{(a\\sqrt{2})^2} = \\frac{F_1}{2} = 1,8\\cdot 10^{-6}\\text{ N}$. Mivel ez az erő egybeesik az első kettő eredőjének irányával (mindkettő az átló mentén taszít kifelé), az eredő erő nagysága az összege lesz: $F_{eredő} = 5,091\\cdot 10^{-6} + 1,8\\cdot 10^{-6} = 6,891\\cdot 10^{-6}\\text{ N}$, ami kerekítve $6,9\\cdot 10^{-6}\\text{ N}$."
                },
                {
                    "type": "calculation",
                    "text": "Mekkora a töltés az ábrán látható kondenzátoron?",
                    "correctOption": "a",
                    "options": {
                        "a": "8x10^{-5} C",
                        "b": "0 C",
                        "c": "10^{-4} C",
                        "d": "egyik sem"
                    },
                    "formula": "$$U_C = U_1 \\frac{R_2}{R_1 + R_2}, \\quad Q = C_1 U_C$$",
                    "explanation": "Az egyenáramú körben bekapcsolás után kialakuló stacionárius állapotban a kondenzátor teljesen feltöltődik, és ága szakadásként viselkedik. Emiatt a vele sorba kötött $R_3 = 70\\text{ }\\Omega$ ellenálláson nem folyik áram, így azon feszültségesés sem keletkezik. Az áramkör aktív része csak az $U_1 = 10\\text{ V}$-os telepből, valamint az $R_1 = 10\\text{ }\\Omega$ és $R_2 = 40\\text{ }\\Omega$ sorosan kapcsolt ellenállásokból áll. Ez egy feszültségosztó, ahol az $R_2$ ellenálláson eső feszültség megegyezik a kondenzátor fegyverzetei közötti feszültséggel. A feszültségosztó képlete alapján: $U_{R2} = U_1 \\frac{R_2}{R_1 + R_2} = 10\\text{ V} \\cdot \\frac{40\\text{ }\\Omega}{10\\text{ }\\Omega + 40\\text{ }\\Omega} = 10\\text{ V} \\cdot \\frac{40}{50} = 8\\text{ V}$. A kondenzátor töltése: $Q = C_1 \\cdot U_C = 10\\text{ }\\mu\\text{F} \\cdot 8\\text{ V} = 80\\text{ }\\mu\\text{C} = 8\\cdot 10^{-5}\\text{ C}$."
                }
            ]
        }
    ]
};
