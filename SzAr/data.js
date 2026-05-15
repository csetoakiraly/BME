window.cardsData = [
    {
        id: 1,
        topic: "Háttértárak (RAID)",
        question: "5 db 1 TB-os diszk hasznos kapacitása RAID 0 esetén",
        answer: "5 TB",
        explanation: "A RAID 0 (stripping) a merevlemezek kapacitását redundancia nélkül, összefűzve kínálja fel a felhasználónak. Ebben az esetben egyetlen diszk sem tárol paritás- vagy tükrözött adatot, így a teljes kapacitás összeadódik: 5 * 1 TB = 5 TB.",
        monkeyExplanation: "Képzeld el, hogy van 5 db 1 literes vödröd. RAID 0 esetén egyszerűen egymás mellé teszed őket, így összesen 5 liter vizet tudsz beléjük tölteni. Biztonsági mentés nincs."
    },
    {
        id: 2,
        topic: "Háttértárak (RAID)",
        question: "5 db 1 TB-os diszk hasznos kapacitása RAID 6 esetén",
        answer: "3 TB",
        explanation: "A RAID 6 egy blokk-szintű csíkozásos adattárolás, mely két külön paritásblokkot használ. Ez azt jelenti, hogy 2 diszknyi (N-2) terület veszik el a redundancia miatt, így a rendszer egyszerre akár 2 lemez meghibásodását is túléli adatvesztés nélkül. Ebben a példában 5-2 = 3 lemeznyi hasznos tárterület marad: 3 TB.",
        monkeyExplanation: "Szintén 5 db vödröd van, de RAID 6-nál 2 vödröt mindig fenntartunk arra az esetre, ha eltörne valamelyik. Így az 5 vödörből csak 3-at tudsz használni víz tárolására, ezért 3."
    },
    {
        id: 3,
        topic: "Virtuális Memória",
        question: "5-ös lap hivatkozása utáni TLB állapot (LRU esetén)",
        answer: "A legidősebb (4-es korú) bejegyzés helyére kerül, kora 1 lesz",
        explanation: "A TLB (Translation Lookaside Buffer) a laptábla bejegyzéseit (keretszámokat) gyorsítótárazza. Ha betelik, az LRU (Least Recently Used - Legrégebben Használt) stratégia azt a bejegyzést dobja el, amit a legrégebben hivatkoztak. Mivel most bekerül a friss 5-ös lap, a kora 1 lesz, míg a többieké öregszik.",
        monkeyExplanation: "A TLB olyan, mint egy nagyon rövid emlékezet. Ha jön egy új adat, és már tele van az eszed, elfelejted azt a dolgot, amire a legrégebben gondoltál (LRU), és annak a helyére beteszed az újat."
    },
    {
        id: 6,
        topic: "Virtuális Memória",
        question: "8-as lap hivatkozása utáni TLB bejegyzés (Lap: 8)",
        answer: "Keret: 1, Kor: 1",
        explanation: "Ez egy szimulációs példa részlete a jegyzetből: a memóriahivatkozás (Laphiba vagy TLB hiba után) új bejegyzést hoz létre a TLB-ben. Mivel a lap a fizikai memória 1-es keretébe került letöltésre, a keretszám 1 lesz, kor pedig LRU algoritmusnál 1, mert ő a legfrissebb bejegyzés.",
        monkeyExplanation: "Mint amikor felhívnak egy új számról: beírod a telefonkönyvedbe, és ez lesz a legújabb kapcsolatod, ezért kapja az 1-es kort (első)."
    },
    {
        id: 7,
        topic: "Perifériák és Buszrendszerek",
        question: "A \"Daisy chain-re alapozott arbitráció\" centralizált eljárás? (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "A Daisy chain (láncbafűzött) arbitráció egy centralizált buszhozzáférési mód. Egy központi arbiter kapja a kéréseket, aki a buszhasználati jogot (BUSGRANT) egyetlen láncon indítja el a perifériák felé, ahol az egyes eszközök eldönthetik, hogy visszatartják-e azt maguknak vagy továbbadják.",
        monkeyExplanation: "A Daisy chain olyan suttogós játék óvodában. Egy tanár (központ) elindítja a suttogást az első gyereken keresztül. Egy tanár indítja, ezért centralizált."
    },
    {
        id: 8,
        topic: "Perifériák és Buszrendszerek",
        question: "A \"Párhuzamos arbitráció\" centralizált eljárás? (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "Igen. Minden eszköz (master) külön kérés (REQ) és engedélyező (GNT) vonallal rendelkezik, amelyek mind egyetlen, központi döntőbíró (arbiter) egységbe futnak be. Az arbiter mérlegeli a bejövő kérőjeleket és valamelyik masternek odaadja a vonalat.",
        monkeyExplanation: "Itt nem sorban suttognak tovább a gyerekek, hanem mindegyiküknek van egy póráza a tanárhoz. A tanár dönti el, kit hallgat meg. Központosított."
    },
    {
        id: 9,
        topic: "Perifériák és Buszrendszerek",
        question: "A centralizált arbitráció előnye a nagy hibatűrés. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Épp ellenkezőleg. A centralizált arbitrációnak egy közös, központi erőforrása van (az arbiter egység), ami ha meghibásodik, a teljes buszrendszer leáll (Single Point of Failure). Nagy hibatűrése az elosztott arbitrációnak van.",
        monkeyExplanation: "Erre gondolj: ha egyetlen tanár irányítja a tesi órát, és ő lebetegszik, teljes anarchia lesz, senki nem mozog. Így a hibatűrés a lehető legrosszabb."
    },
    {
        id: 10,
        topic: "Perifériák és Buszrendszerek",
        question: "A centralizált arbitráció előnye, hogy olcsóbb, mivel csak egy központi arbiteregység szükséges. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Valóban, mivel az elfogadás és a prioritás döntéseinek komplex logikája egyetlen kis lapkán/modulon (az arbiterben) van megvalósítva, a végponti (kliens) perifériák elektronikája nagyon egyszerű és olcsó lehet.",
        monkeyExplanation: "Természetesen! Ha csak egy okos (és drága) tanárt kell megfizetned a suliban, és a rostadon lévő diákok csak simán hallgatnak rá, az sokkal olcsóbb."
    },
    {
        id: 11,
        topic: "Perifériák és Buszrendszerek",
        question: "A centralizált arbitráció során a perifériák egyetlen központi vezérlőhöz csatlakoznak. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ez pontosan az eljárás definíciója. Létezik még elosztott arbitráció, ahol minden eszköz látja a buszon jelentkező igényeket, és egy megosztott algoritmus szerint saját maguk döntenek a kiengedésről.",
        monkeyExplanation: "Pontosan ez az értelme: az összes periféria (diák) oda van drótozva ahhoz az egy gazdához."
    },
    {
        id: 12,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "A CISC utasításkészlet-architektúrára jellemző, hogy az utasítások dekódolása összetettebb feladat. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A CISC (Complex Instruction Set Computer) változó hosszúságú (pl. x86 esetén 1-17 bájt) és rendkívül bonyolult utasításokkal dolgozik. A dekódoló egységnek így meg kell határoznia az utasítás végét és a benne foglalt összetett (akár memóriát is hivatkozó) műveleteket, ami komplex hardvert igényel.",
        monkeyExplanation: "A CISC olyan, mint a hatalmas, készre szerelt legó idomok. Egyetlen darab, de mire a gép kibogozza, miket takar, megizzad vele."
    },
    {
        id: 13,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "A CISC utasításkészlet-architektúrára jellemző, hogy könnyebb alacsony szinten programozni. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igaz, mert a CISC utasítások „erőteljesebbek”. Egyetlen utasítás elvégezhet akár egy memóriából olvasást, majd ahhoz egy regiszter hozzáadását is. Az assembler nyelv így közelebb áll a magas szintű gondolkodáshoz, és rövidebb kódot eredményez, mint a RISC, ahol ezeket mind külön apró utasításokra kéne bontani.",
        monkeyExplanation: "Könnyebb benne kódot írni emberként, mert olyan mintha egyből meg tudnád parancsolni a gépnek hogy 'építs házat', míg RISC alatt csavaronként kellene mondanod."
    },
    {
        id: 14,
        topic: "Perifériák és Buszrendszerek",
        question: "A Daisy chain alapú interrupt kezelés nem működik, ha egyidejűleg több eszköz is jelez interruptot. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Működik, sőt épp a konfliktus feloldására lett kitalálva. Az arbiter (vagy processzor) INTA nyugtázó jelet küld, ami a lánc mentén halad. Minél közelebb van logikailag a periféria a CPU-hoz, annál magasabb a prioritása: a hozzáférést igénylő periféria egyszerűen megfogja s nem engedi tovább a vett jelet a láncon, így lekezelve a kollíziót.",
        monkeyExplanation: "Működik, mert a suttogós láncolatban ha két gyerek is jelentkezik, az lesz a nyertes, aki közelebb ül a tanárhoz, szóval letiltja a mögötte lévőket."
    },
    {
        id: 15,
        topic: "Perifériák és Buszrendszerek",
        question: "A Daisy chain alapú interrupt kezelés tetszőlegesen bővíthető. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ennek topológiás oka van: amennyiben új eszközt szeretnénk használni, csak „befűzzük” a láncba. Nem igényel dedikált kiépített vezetékpárt minden egyes új eszköznek az arbiterből (mint ahogy például a párhuzamos arbitrációnál lenne), hanem csak az előző és következő eszközzel van huzalozva.",
        monkeyExplanation: "Igen, ha bedobsz egy új egeret a sorba, be tud csatlakozni (bedugod a másikba), nem kell egy külön kábelt visszahúzni a gép legtetejéig."
    },
    {
        id: 16,
        topic: "Perifériák és Buszrendszerek",
        question: "A Daisy chain alapú interrupt kezelésnél körbenforgó interrupt kiszolgálás megvalósítható. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Nem lehet körbenforgó (round-robin/fair) stratégiát megvalósítani. A daisy chain-ben a fizikai bekötési sorrend feltartóztathatatlanul rögzíti a prioritásokat. Az a periféria kapja meg a jogot, aki közelebb van forrásponthoz, így egy leterhelő, magas prioritású első eszköz egyértelműen kiszoríthatná a lánc végi eszközöket a hozzáférésből.",
        monkeyExplanation: "Nem lehet, mert a sor elején ülő gyerek mindig monopolizálni tudja a szót, a sor végén lévők pedig sosem kerülnének sorra, ha agresszív az első."
    },
    {
        id: 20,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlő alkalmazása csökkenti a CPU terhelését. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A DMA (Direct Memory Access) pontosan erre való! Amikor a periféria a hálózaton keresztül nagy méretű adatblokkot küld, a CPU utasításonkénti végighajtása nagyon lassú volna. Helyette a CPU csak felprogramozza a hardveres DMA vezérlőt (ez az ide, eddig az hosszan mettől hova elvetve), mely aztán a processzor beavatkozása nélkül végzi el a másolást a háttértár és memória között, csak a végen jelezve azt egy megszakítással (interrupt).",
        monkeyExplanation: "A DMA vezérlő a szorgos kisöcsi. Te (CPU) olvasol, és megkéred a kisöcsit, hogy cipekedjen (hozza a biteket). Így neked nem kell felállnod."
    },
    {
        id: 21,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlő célja a processzor tehermentesítése az I/O műveletek során. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igen, a DMA végzi az adatmozgatást a periféria és a memória között közvetlenül, így a processzor amíg ő ezt csinálja, foglalkozhat más programok, kódok futtatásával ameddig nincs szüksége magára az adatra.",
        monkeyExplanation: "Képzeld el, hogy a memória (RAM) egy óriási raktár, a periféria (mondjuk egy merevlemez) pedig egy teherautó. A processzor a raktárvezető. Megkérheti a raktárvezető a targoncás fiút (a DMA vezérlőt), hogy ő maga pakolja be a dobozokat a teherautóról a raktárba. Így a raktárvezetőnek (a processzornak) nem kell minden egyes doboznál (bájtnál) otthagynia a papírmunkát, hanem csinálhat valami fontosabbat, és ezzel tehermentesítve van az I/O (Input/Output, azaz pakolási) művelet alatt."
    },
    {
        id: 22,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlő minden bájt sikeres átvitelét interrupttal jelzi a processzornak. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Ha így tenne, elvészne a technológia minden haszna! DMA esetében az adatblokk (vagy az előre meghatározott méretű chunk) utolsó bájtjának sikeres átvitele után történik az értesítés egyetlen megszakítással.",
        monkeyExplanation: "Folytatva a targoncás példát: Ha a targoncás (DMA vezérlő) minden egyes doboz megszerzése után odarohanna a raktárvezetőhöz (processzorhoz), hogy 'Főnök, becipeltem egy dobozt!' (ez az interrupt/megszakítás), azzal folyamatosan zavarná a munkájában. Ehelyett a DMA csak akkor szól (küld interruptot), amikor egy egész raklapnyi (blokknyi) árut sikeresen behozott."
    },
    {
        id: 23,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlő saját utasításkészlettel rendelkezik. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Az I/O processzorra jellemző (mint pl a fejlett mainframe-ekben), hogy önálló programokat vagy utasításkészletet használ, a klasszikus PC architektúra DMA vezérlője csak állapot és cím-regiszterekkel rendelkezik.",
        monkeyExplanation: "A DMA vezérlő egy célszerszám, mint maga a targonca. Nagyon ügyesen tud dobozokat rakodni 'A' pontból 'B' pontba, de nem tud matekfeladatokat megoldani vagy döntéseket hozni (mint egy processzor). Nincsenek 'saját utasításai' vagy programkódja, egyszerű kis memóriafiókjai (regiszterei) vannak, ahol fel van írva, hogy HONNAN, HOVÁ és MENNYI adatot kell cipelnie."
    },
    {
        id: 24,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlő vagy az I/O processzor célja a buszért zajló verseny eldöntése. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A buszért folyó verseny eldöntése (hogy melyik egység kaphatja azt meg) a buszvezérlő (Arbiter) feladata, nem a DMA-é. A DMA vezérlő csupán egy Masterként lép fel a buszon a rengeteg eszköz között.",
        monkeyExplanation: "Képzelj el egy forgalmas csomópontot, ahol csak egy autó (adat) haladhat át egyszerre (ez a busz). A cél az, hogy a DMA is használhassa az utat. De az, hogy ki mehet először, a rendőr (az Arbiter, avagy buszvezérlő) dolga eldönteni, aki irányítja a forgalmat! A DMA vezérlő itt olyan, mint egy mentőautó: csak egy a résztvevők közül, aki zöld utat kér a rendőrtől, nem ő maga dönt a versenyről."
    },
    {
        id: 26,
        topic: "Perifériák és Buszrendszerek",
        question: "A DMA vezérlőt a periféria programozza fel. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A DMA vezérlőt a processzor (CPU) - pontosabban az operációs rendszer által vezérelt device driver (eszközmeghajtó) – programozza fel, az ott futó szál mondja meg mekkora blokkot akarunk másolni és pontosan hová.",
        monkeyExplanation: "Ki küldi dolgozni a targoncást? A raktárvezető (a processzor)! Nem a teherautó sofőrje (a periféria) mondja meg neki, hogy mit csináljon. A processzor (szoftveresen, az operációs rendszeren keresztül) programozza be a DMA-t az indulás előtt azzal, hogy 'Ebből a szektorból másolj ki 100 dobozt a RAM ezen címére!'."
    },
    {
        id: 27,
        topic: "Memória technológiák",
        question: "A DRAM a gyorsítótár (cache) memória alapja. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A cache memóriák alapja az SRAM (Static RAM), mert sokkal gyorsabb, bár drágább és több tranzisztorból áll (6T típus). A DRAM (Dynamic RAM) az olcsóbb, nagy kapacitású rendszermemóriák alapja.",
        monkeyExplanation: "A memória két alapvető típusa olyan, mint kétfajta bevásárlókosár. A DRAM (Dynamic RAM) az olcsó, hatalmas bevásárlókocsi, amibe minden belefér, ez teszi ki a gép 16 GB-ját. A cache (villámgyors gyorsítótár) az SRAM (Static RAM), ami olyan, mint a zsebed: nagyon kevés dolog fér bele, nagyon drága ilyenből sokat varrni egy nadrágra, cserébe azonnal elő tudod húzni belőle a pénztárcádat, nem kell a nagy kocsiban (DRAM) kotorászni."
    },
    {
        id: 28,
        topic: "Memória technológiák",
        question: "A DRAM gyorsabban írható és olvasható, mint az SRAM. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A DRAM jelentősen lassabb az SRAM-nál, részben amiatt is, mert az adattárolást végző apró kondenzátorok feltöltése/kisütése elektronikai szempontból is lassabb, ráadásul maga a DRAM olvasási művelete destruktív, így olvasás után az is plusz idő, mire újra frissíti (visszaírja) az információt.",
        monkeyExplanation: "Az SRAM a Forma-1-es autó (cache), a DRAM pedig egy nagy tehervonat (rendszermemória). A DRAM a technológiája miatt sokkal lassabb: minden apró bit egy picike, szivárgó lyukas vödörben (kondenzátorban) csücsül. Amikor megnézik, mennyi víz van a vödörben (kiolvasás), az olyan, mintha kiöntenék belőle - ez a destruktív olvasás. Miután kiborították, szegény gépnek gyorsan vissza is kell töltenie bele az információt, különben elveszik, ami rengeteg időt pazarol az SRAM laza billenőkapcsolóival szemben."
    },
    {
        id: 29,
        topic: "Memória technológiák",
        question: "A DRAM memóriában 1 bit tárolásához 6 tranzisztor szükséges. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Ez a 6 db M-OSFET állítás, avagy a '6T cellastruktúra' az SRAM memóriára jellemző. A klasszikus DRAM-ban mindössze 1 tranzisztor és 1 kondenzátor (1T1C) szorítkozik egyetlen bit tárolásához, ami miatt sokkal zsúfoltabbá tehető egységnyi szilícium felületen.",
        monkeyExplanation: "Ahogy az előbb beszéltük: A DRAM olyan, mint egy nagyon egyszerű szoba, ahol csak egy lámpa és egy kis cső van (1 kondenzátor és 1 tranzisztor). Így nagyon sok ilyen 'kis szobát' (bitet) tudnak egymás mellé zsúfolni kis helyen - ezért van 16-32 GB memóriánk. Ezzel szemben az SRAM (a gyorsítótár) szobájában bonyolult kapcsolórendszer fut (6 tranzisztor egyetlen bit tárolásához), ami hatalmas helyet foglal el a szilíciumon, ezért a processzorodon csak pár megabyte (MB) cache fér el fizikailag."
    },
    {
        id: 30,
        topic: "Memória technológiák",
        question: "A DRAM tárolócella kizárólag tranzisztorokból áll. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A DRAM egy apró hozzáférési tranzisztorból, és egy - a töltések felhalmozásáért felelős - miniatűr kondenzátorból áll.",
        monkeyExplanation: "Nem, a DRAM lelke éppen az apró elektronikai 'vizesvödör' - szaknyelven kondenzátor. A tranzisztor ott csak az ajtónálló feladatát látja el: kinyitja vagy bezárja az utat a víz (elektronok) előtt. Amikor be vannak zárva, a kondenzátor lassan szivárog, ezért kell másodpercenként sokszor 'frissíteni' (Dynamic), azaz újra teletölteni vízzel."
    },
    {
        id: 36,
        topic: "Háttértárak",
        question: "A HDD bufferben a merevlemez előreveheti a gyorsan kiszolgálható kéréseket? (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "A modern mechanikus HDD-k a beépített cache (buffer) memóriájukban lévő olvasási/írási várólistát a pozicionálási energiák minimalizálására (pl. NCQ vagy SATF, SSTF ütemezésekkel) képesek fejmozgatás és várakozási idő szerint önállóan átrendezni a hatékonyság érdekében.",
        monkeyExplanation: "Képzelj el egy bevásárlást: van egy listád 10 termékkel. A buta ember (buta HDD) először elmegy az 1. számú áruért a bolt végébe, aztán visszasétál a 2-esért az elejére, majd megint a legvégére. A modern HDD-ben viszont van egy okos algoritmus a pufferben (buffer). Ránéz a listára, és azt mondja: 'Oké, mielőtt rohángálnék, útközben a legközelebbi polcokról (szektorok) leszedem ami ott van, hiába vannak a lista végén!'. Így fizikailag ritkábban kell rángatnia azt a drága olvasófejet (előreveszi a gyorsabb kéréseket)."
    },
    {
        id: 37,
        topic: "Háttértárak",
        question: "A HDD bufferben a merevlemez előreveheti a rövidebb méretű szektorokra vonatkozó kéréseket? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "A modern merevlemezeken és az operációs rendszer által látott LBA felületen a szektorok mérete állandó és rögzített (tipikusan 512, vagy újabb esetben 4096 bájt / 4k). Mivel a méret nem változik, nincsenek is \'rövidebb szektorok\' amiket előnyben kéne részesíteni.",
        monkeyExplanation: "Egy modern merevlemezen minden 'polc' (szektor) pontosan azonos méretű rekeszekből áll (régen 512, ma 4096 bájt). Pontosan azért alakították ki ezt az univerzális rekeszméretet iparági szinten, hogy ne legyenek 'rövid' meg 'hosszú' rekeszek. Ha valami kicsi, akkor is egy egész rekeszt kap megérdemelten, így nincs szó arról, hogy cselezéssel a 'rövidebbeket' tolnák be hamarabb."
    },
    {
        id: 38,
        topic: "Háttértárak",
        question: "A HDD bufferben a merevlemez előreveheti a sormegnyitást nem igénylő kéréseket? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "A \'sormegnyitás\' (ACTIVATE) logikája az oszlopvezérelt/sorvezérelt elektronikus DRAM memóriamátrixokra jellemző. A mechanikus háttértraknak nincsenek sorai, náluk cilinderek, lencsék és szektorok (CHS) vannak pozicionálás gyanánt.",
        monkeyExplanation: "A sormegnyitás fogalma azt jelenti, mintha egy Excel táblázatban megnyitnánk egy adott sort. De a klasszikus, forgó lemezes Winchesterben (HDD-ben) nincsenek sorok meg oszlopok! Ott forgó bakelitlemezek vannak (cilinderek) és mágneses körkörös sávok (track). Sorai és oszlopai maguknak a szilikonchipeken nyugvó memóriáknak (pl. DRAM) vannak. Így a HDD ilyet eleve nem tud 'előrevenni'!"
    },
    {
        id: 39,
        topic: "Háttértárak",
        question: "A HDD bufferben a merevlemez előreveheti az OS számára fontosabb kéréseket? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "A merevlemez magára hagyva firmware-ből optimalizál. Bár az NCQ enged némileg beleszólni a prioritásokba, de alapvetően a HDD maga nem tudja, mi számít fontosnak az OS részére - számára csak abszolút fizikai blokkcímek és byte-ok léteznek.",
        monkeyExplanation: "A merevlemez egy rendkívül önálló, szűk látókörű munkás. A 'Főnök' (az Operációs Rendszer) beadja neki az összes beérkező papírt (kéréseket). A munkás nem érti, és nem is érdekli, mi van a papírra írva: hogy ez most a kritikus Banki alkalmazásod futtatófájlja, vagy csak egy zeneszám a Letöltéseid mappából. Neki csak fizikai blokk-koordinátái vannak (LBA címek), önállóan, fizikai távolság alapján optimalizál az írófejjel, fogalma sincs mi számít szoftveresen 'fontosnak'."
    },
    {
        id: 44,
        topic: "Virtuális Memória",
        question: "A kettő közül melyiknek a feloldása igényel nagyságrendekkel több időt: Laphiba vagy TLB hiba?",
        answer: "LAPHIBA",
        explanation: "A TLB hiba - \'TLB miss\' - csak azt jelenti, hogy laphoz tartozó fizikai adatok keretszáma nincs bent a gép leggyorsabb gyorsítótárában, így ki kell olvasni a RAM-beli laptáblázatból, ez max pár tíz órajel. A laphiba - \'Page fault\' - viszont azt jelzi, a tartalom ott sincs: ki lett \'söpörve\' diszkre (swap) s azt vissza kell hozni a több tízmilliós órajelveszteségű mechanikus olvasóval.",
        monkeyExplanation: "A TLB olyan, mint egy tartalomjegyzék a könyv legelső oldalán. Ha valami nincs benne (TLB hiba), az csak annyit jelent, hogy a könyvjelződet hátrébb kell lapoznod a nagy, rendes Tárgymutatóhoz (ez a RAM-ban lévő Laptábla), ami picivel tovább tart (pár tíz mikromásodperc). Viszont ha Laphiba van... az azt jelenti, hogy maguk az Adatok is át lettek hordva a szomszéd város polcára (Swap a lassú HDD-n)! Ott buszra kell szállni (I/O operáció) és visszahozni, ami gigantikus, milliós órajelnyi időkiesést jelent a pár tízhez képest."
    },
    {
        id: 46,
        topic: "Architektúrák",
        question: "A memória a Neumann architektúra egyik fő komponense. (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "A Neumann elvű rendszerek sarokköve a közös program- és adattár, maga a központi Memória, a Feldolgozó (CPU) és a perifériák mellett kialakított három fő fogalmi pillér egyike.",
        monkeyExplanation: "Neumann János zsenialitásának három fő tartóoszlopa van a számítástudományban: 1. Legyen valami, ami gondolkodik (Processzor). 2. Legyen valami, amin keresztül mi beszélni tudunk vele, ő meg válaszolni (Perifériák, I/O). ÉS 3. Legyen egy nagy, közös munkaterület (Memória), amibe a program parancsait is bedobjuk, meg mellé a sima adatokat (képeket, szöveget) is szépen egy kupacban, és ő mindkettőt ugyanúgy olvassa ebből az egy közös medencéből!"
    },
    {
        id: 56,
        topic: "Architektúrák",
        question: "A Neumann-architektúra a vezérlésáramlásos modellt valósítja meg. (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "Igen. Az úgynevezett \'Control Flow\' (vagy Neumann-féle szekvenciális) adatkezelési rend alapja, hogy mindegy, mire kell az adat, a PC (Program Counter / utasításszámláló) szigorú sorrendiséget tart és a progit sorról-sorra hajtja végre aszerint ami meg van neki hivatkozva ugrásokkal és elágazásokkal.",
        monkeyExplanation: "Képzeld el, hogy a Neumann-gép egy nagyon pedáns és szigorú szakács. Hiába kell egy ételhez feltörni egy tojást és vizet forralni, ő szigorúan a recept (utasítássor) soraiban halad lefelé egyesével: először vizet forral, megvárja, és majd utána töri a tojást. A Control Flow (vezérlésáramlás) maga a receptkönyv, ami lépésről-lépésre parancsolja a végrehajtást."
    },
    {
        id: 57,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express centralizált arbitrációt használ. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Sem önválasztó, sem parallel arbitrációt nem használ a PCI Express. Mivel pont-pont (P2P) soros jelzésű topológiát használ switcheken keresztül, nincsen többé egy fizikai vezetéken folyó versengés sem a masterek, sem a szálak között.",
        monkeyExplanation: "Ha a régi buszokat (pl. kábeles USB, sima PCI) egy buszmegállónak képzeled, ahol sok ember vár egy buszra de csak egy fér be – ott kell egy kalauz (Arbiter), aki eldönti, ki száll fel (versengés). A PCI Express (PCIe) viszont olyan, mint egy autópálya-hálózat óriási csomópontokkal (Switchek). Minden sávból minden sávba lehet menni külön, nincs egy közös kábel, amin veszekedni kéne, hanem mindenkinek 'pont-pont' saját, külön bejáratú betonútja van a központhoz. Nincs egyáltalán versengés!"
    },
    {
        id: 58,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express fizikai rétegének feladata a bitek összekeverése (scrambling). (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ez elengedhetetlen, mert az 1 bites és gyors PCIe soros vonalakon garantálni kell a jelszintek kellően folyamatos változását, az \'0 a 0-ba olvadások\' elkerülését. Ezt a bitek determinált keverésével (scrambling) illetve pl 8b/10b, 128b/130b jelszint bevonásával adja hozzá a fizikai réteg, amiből a fogadó visszanyerni is ezen a szinten fogja a tényleges üzenetet.",
        monkeyExplanation: "Ha éjjel zseblámpával morzejeleket (0 és 1 biteket) adsz le, és véletlenül egy hosszú 'nulla' jön, akkor folyamatosan sötét lesz a lámpa. A túloldalon a haverod nem fogja tudni, hogy vajon elaludtál, elromlott a gép, vagy tényleg szándékosan nullák jönnek! Ezt a bitek 'keverésével' (scrambling) oldják meg: okosan átkódolják a hosszú nullákat, hogy egyenletesen villogjon a lámpa, s közben mégse sérüljön a tartalom."
    },
    {
        id: 61,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express perifériák képesek interruptot kiváltani. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igen. A különbség az elavult architektúrákhoz képest csupán  az, hogy ehhez nem dedikált 'megszakítási rézhuzalra' adnak ki statikus feszültséget, hanem az MSI (Message Signaled Interrupts) nevű metódussal küldenek speciális célzottságú logikai csomagokat (Write tranzakció) a megszakításvezérlőnek (Root complex). ",
        monkeyExplanation: "A régebbi gépek úgy szóltak a főnöknek (processzornak), mintha minden asztaltól lenne egy fizikai kis csengő behúzva zsinóron a főnök nyakába. Ha húzod, jelez. A PCI Express viszont 'MSI'-t használ, ami olyan, mint egy normál postai boríték, csak pirosan fel van írva, hogy 'HIBA a főnöknek'. Ezt az üzenetet egyszerűen bedobja a normál csomagok (Data csatorna) közé, és gyorsan célba is ér!"
    },
    {
        id: 62,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express perifériák képesek közvetlenül a memóriába adatot írni. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A modern PCI / PCIe eszközök DMA kepések (Bus Mastering), és egy \'Memory Write\' (szintén TLP adatcsomagba becsomagolt) tranzakció kiadásával a processzort tehermentesítve írnak be adatösszleteket a DRAM-ba.",
        monkeyExplanation: "Természetesen! Ahogy egy gazdagabb futárcég (pl. a PCIe videókártyád), ő megteheti, hogy önmaga odamegy a nagy RAM raktárhoz, lerakja a csomagot anélkül, hogy engedélyt kérne a raktárostól (processzor) minden lépésnél. Ezt hívják Bus Masteringnek, ilyenkor a kártya csinál önállóan egy 'Memory Write' parancsot és tehermentesíti a processzort."
    },
    {
        id: 63,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express perifériakezelő utasításokkal nem rendelkező rendszerekben nem megvalósítható. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Példaként vehetjük a RISC rendszereket (pl. ARM). Ezek sokszor nem kapnak külön 'in' vagy 'out' I/O assembly hívásokat. Erre a Memory Mapped-I/O (Memóriára leképzett területen átmenő) trükk a válasz a PCI eszközöknek, így RISC és ARM alaplapon is bátran épithető számukra infrastruktúra. ",
        monkeyExplanation: "A RISC processzorokat (pl. a telefonod ARM CPU-ja) szándékosan lebutították, így nincsenek bennük konkrét I/O parancsok a hardverekhez, csak szimpla matek és 'Memória olvasás'. Ezt a processzorok logikailag úgy verik át (Memory Mapped I/O), hogy a perifériának a memóriában lefoglalnak egy láthatatlan rekeszt. A CPU azt hiszi szegény, hogy egy Excel táblába (RAM) ír adatot, de közben a videókártya/PCIe ezt szó szerint azonnal olvassa és reagál rá!"
    },
    {
        id: 65,
        topic: "Perifériák és Buszrendszerek",
        question: "A PCI Express tranzakciós rétegének feladata a parancs és az adatok csomagba szervezése. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A topológiában fentről lefele építkeze a szoftver felőli 'Transaction Layer' a kérés fejlécével, a CRC hashsel, parancsaltábláal együtt képez valójában (TLP) csomagokat amiket aztán leküld az Adatkapcsolati s végül a Fizikai (bitszintű) rétegekbe bontásra s küldésre.",
        monkeyExplanation: "Nyugi, ez egyszerű! A Tranzakciós réteg a 'Titkárság'. A szoftver megírja a tiszta adatot (mondjuk egy letöltött 4K videót), a Titkárság pedig bedobózza, tesz rá egy Címeres borítékot (ez a TLP csomag Fejléce), aláírja (hibajelző Hash), és átadja az alagsornak a fizikai futároknak (Fizikai Kábelek), hogy darabolják és adják tovább."
    },
    {
        id: 68,
        topic: "Perifériák és Buszrendszerek",
        question: "A pendrive dominánsan a Bulk adatátviteli módot használja az USB kommunikáció során. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Biztonsági mentéseknél, file másolásnál (ami a Pendrive célja is) nem garantálnak rövid késleltetést mint mondjuk a webkameráknál, de garantálja az USB \'Bulk\' módja az 100%-os redundanciaellenőzést s újrakérést CRC hiba esten, mert fájl-integritás nem romolhat, ellentétben egy audio streaming hibával.",
        monkeyExplanation: "Egy pendrive az USB csatornán 'Ömlesztett' (Bulk) csatlakozást kér. A Pendrive-nak a sebessége az egyetlen amiből engedhet, a minőségéből (Integritása) NEM! Ha egy szakdolgozat csak 0.2 másodperccel később érkezik át a gépedre kit érdekel? De ha egyetlen bitnyi nyomdahiba van a benne lévő PDF-ben, az egész fájl tönkremegy! A pendrive Bulk adatátvitele 100%-ig leellenőrzi s visszakéri minden csomagot, ez adja az iszonyatos pontosságot."
    },
    {
        id: 70,
        topic: "Architektúrák",
        question: "A perifériák a Neumann architektúra fő komponensei közé tartoznak. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A teljes architektúra három alap komponenscsaládja: Központi feldolgozó (Processzor, ALU & Vezérlő), Operatív Tár (Közös Memória) ...és maguk a Perifériák (Bemeneti, Kimeneti I/O-k) , amiken át betáplálni vagy kiadni láttatni tudja az univerzum számára az infót a gép.  ",
        monkeyExplanation: "A klasszikus Neumann gép alapvetően: kell egy Agy (Processzor), és kell egy hely, ahová közösen leteszik a tudnivalókat (Memória). De vajon hogyan is kommunikál mindezek után a külvilággal (veled) a gép? Itt jönnek képbe a Külső érzékszervek: az I/O avagy Perifériák! Tehát igen, a szem-kéz-fül a Neumann architektúra egyenrangú fogalmi lába."
    },
    {
        id: 111,
        topic: "Architektúrák",
        question: "Az adatáramlásos modellnél a program leírására precedenciagráfot használunk. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Az adatáramlásos (Data Flow) gépeknél a kódot nem utasítások lineáris sorozataként tárolják (mint Neumann-nál), hanem egy irányított adatfüggőségi gráffal, azaz precedenciagráffal, ami garantálja, hogy egy művelet csak akkor süljön el, ha a bemenetein a gráf szerinti adatok mind megjelennek.",
        monkeyExplanation: "Olyanok ezek az egzotikus vezérlésáramlású (Data Flow) gépek, mint a Forma-1-es kerékcsere stáb: 10 szerelő áll az autó mellett, mindenki tudja mit kell csinálnia. A gumis nem vár a tankolóra s nem sorban indulnak meg (Neumann)! Ahogy meg is kapta a saját friss gumiját a srác (az ő bemenetét), ott abban a pillanatban (Precedencia = Mivégből-Mivégre szabály) akcióba is lép a gép, a többiektől teljesen függetlenül számolni indul el."
    },
    {
        id: 112,
        topic: "Perifériák és Buszrendszerek",
        question: "Az alábbiak közül mely arbitrációs eljárások elosztottak: Daisy chain-re alapozott arbitráció? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A Daisy chain centralizált arbitráció. Az engedélykéréseket végül mindig a fő arbiter egység (rendszervezérlő) fogadja be, csupán a kiadott jóváhagyó (GRANT) jel adódik eszközről eszközre a láncban.",
        monkeyExplanation: "Nagyon pici becsapós csapda! Attól, hogy a suttogós ovis láncban sok gyerek adja kézről-kézre a jóváhagyó 'zöld utat', honnan is indult maga az engedély az elején? Egy EGYETLEN tanártól! Ha a tanár megnémul, nincsen többé játék senkinek. Egyértelműen Centralizált!"
    },
    {
        id: 113,
        topic: "Perifériák és Buszrendszerek",
        question: "Az alábbiak közül mely arbitrációs eljárások elosztottak: Önkiválasztó arbitráció? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ez bizony elosztott: az I/O buszon minden eszköz a saját vonalán jelzi, ha kommunikálni akar. A többi eszköz látja a bejövő kéréseket, és az egyes egyedi eszközökben futó algoritmus saját maga eldönti - önkiválasztóan -, hogy van-e nála magasabb prioritású eszköz ami épp használná a buszt, és visszalép.",
        monkeyExplanation: "Igen! Ezt egy olyan bulinak képzeld el ahol NINCS Tanár, sem Házigazda. Minden résztvevő felkiált egyből ha akar valamit az asztalnál. A többiek (a többi eszköz algoritmusai) ha meghallják őt ('A C-s Józsi kiabál, a prioritása őrangyala nagyobb nálunk'), akkor tiszteletteljesen önállóan és maguktól visszalépnek. Ténylegesen szét van szórva (Elosztott) a döntés felelőssége!"
    },
    {
        id: 114,
        topic: "Perifériák és Buszrendszerek",
        question: "Az alábbiak közül mely arbitrációs eljárások elosztottak: Párhuzamos arbitráció? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A Párhuzamos (Parallel) arbitrációnál is minden eszközből befut egy csatorna... csakhogy nem a többi eszközbe (biztosítva az elosztottságot), hanem egy KÖZPONTI Bus Arbiter vezérlőhöz, azaz centralizált.",
        monkeyExplanation: "Olyan, mintha egy raktárban minden egyes gépsortól külön piros gomb vezetne fel a toronyba a Főnökhöz (Központi Arbiterhez). Minden eszköz párhuzamosan be van vonva (Parallel bemenet) igen, de ettől még mindig CSAK A FŐNÖK dönt arról az egy buszról! Ez bizony keményen Centralizált (nem Elosztott)!"
    },
    {
        id: 115,
        topic: "Perifériák és Buszrendszerek",
        question: "Az alábbiak közül mely arbitrációs eljárások elosztottak: Ütközés-detektálásra alapozott arbitráció? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Abszolút elosztott. Mindenki (azaz minden eszköz) belebeszélhet a CSMA/CD típusú (pl klasszik ethernet) vonalakba, s ha ütközést észlel (mint a vonal feszültség ugrása) akkor önállóan mindegyik elhallgat egy random időre, majd újra próbálkoznak, központi irányítás nélkül.",
        monkeyExplanation: "Ez a 'Sörözünk kettesben a kocsmában' ösztönös protokoll. Ahogy csönd lesz az asztalnál, megpróbálsz beszélni a kábelen (Ethernet CSMA/CD hálózat). Ha Jani haverod épp abban a pillanatban kezd el szintén beszélni (Ütközést észlelsz), akkor csendben maradsz és meghátrálsz egy véletlenszerű időre. Ő is hallgat majd! És újra próbálkoztok. Rendőr sincs! Teljesen elosztott, önszabályozó forma."
    },
    {
        id: 116,
        topic: "Perifériák és Buszrendszerek",
        question: "Az egér dominánsan az Interrupt adatátviteli módot használja az USB buszon. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Az egér (és a billentyűzet is) alacsony, de garantált válaszidős sávszélességet igényel. Mivel USB gépnél az I/O eszköz NEM SUGHAT félbe a vezérlőnek, ez az \'Interrupt hivatkozási\' mód azt jelenti, a PC időről-időre gyakran kikérdezi a perifériát, hogy van-e mondanivalója.",
        monkeyExplanation: "Mivel te egy idegesítő gyermek vagy a hátsó ülésen (USB aszinkron egér), neked alacsony, de garantált időközönként 'kérdezési pici figyelem' kell! Nem kapsz direkt kábelt, hogy magadtól ordíts a kocsiban. Az Apuka vezetés közben (USB Vezérlő) folytonosan megkell hogy kérdezzen: 'Van most valami?' - 'Nincs', 'Van?' - 'Igen klilkkentek'. Ezt a kikérdezéses módot használja interrupt mimitálóan."
    },
    {
        id: 117,
        topic: "Perifériák és Buszrendszerek",
        question: "Az elosztott arbitráció előnye a nagyobb hibatűrési lehetőség. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Nincs benne SPM (Singel Point of Failure). Míg a centralizált vezérlőnél, ha a gazda vezérlőic-hez tönkremegy a kapu, a gép teljesen meghal. Az elosztottnál csak a megdöglött kártyát veti ki a kommunikációs gyűrű/önkiválasztó logika, a többiek beszélni tudónak.",
        monkeyExplanation: "Képzeld el az 'Elosztott' rendszert egy kerekasztal lovagjainak: Ha Artúr király (a Központi vezérlő) meghal, a birodalom összeomlik (ez a Single Point of Failure, azaz Egyetlen Hibapont a centralizáltnál). De az asztalnál a lovagok önállóan vitatkoznak (Elosztott). Ha Lancelot meghal, a lovagrend (a számítógépes busz) ugyanúgy halad tovább és beszélget, csak eggyel kevesebben vannak! Ez a hibatűrés lényege."
    },
    {
        id: 118,
        topic: "Perifériák és Buszrendszerek",
        question: "Az elosztott arbitráció esetén minden periféria rendelkezik saját arbiterrel. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ugyanezen az elven: ahhoz, hogy elosztottan, önállóan eldönthesse, hátralép-e egy magasabb rangú kommunikáció kedvéért, hardveresen implementálni kell egy mini-arbitert rajta (ami okosabb is drágábbá teszi).",
        monkeyExplanation: "Pontosan! Hogy visszatérjünk a lovagokhoz: a kerekasztalnál mindenkinek megvan a saját esze (Saját miniatűr Arbiter/Vezérlő áramköre a kártyáján). Mivel nincs Király, aki eldönthetné ki szólalhat meg, minden egyes lovagnak 'észben kell mondania' az algoritmust, ami megmondja, mikor maradhat békében csendben, és mikor állhat ki vitatkozni. Ez drágábbá teszi a gyártást, mert mindegyik kártya be van építve intelligenciával."
    },
    {
        id: 120,
        topic: "Perifériák és Buszrendszerek",
        question: "Az I/O processzor célja a processzor tehermentesítése az I/O műveletek során. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Mint egy szteroidokon lévő, mini CPU (klasszikus mainframe vonalon channel processor), arra van hogy a bonyolult eszközfügö I/O dolgokat teljen átvezérelje (olvasson adatokra, reagáljon hibaüzenetekre), így a Main CPU vígan tud dolgozni az adatokon.",
        monkeyExplanation: "Képzeld el a Processzort, mint a Főépítészt egy építkezésen, aki a terveket rajzolja. Ahelyett, hogy maga futkosna a teherautóhoz (merevlemez) és egyeztetne a sofőrrel (Periféria), felvesz maga mellé egy 'Logisztikai Menedzsert' (I/O Processzor). Ez egy mini-agy, aminek szó szerint csak annyi a dolga, hogy levezényelje a kamionok (Adatok) ki- és bepakolásának bürokráciáját! Így a Főépítész vígan tudja tovább rajzolni a terveket (fut a programkód) anélkül, hogy megizzadna a cuccolástól."
    },
    {
        id: 128,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Az MLC NAND jellemzően több törlési-programozási műveletet visel el, mint az SLC. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Az MLC (Multi-Level Cell) egyetlen apró lebegőkapus tranczisztorban tárol egyszerre 2 bitnyi (4 állapoti) információt feszültségszintekkel. Mivel az elöregedés s oxidáció a 4 szintet mósólja, ez sokkal korábban lesz fals olvasású mint az SLC (ahol csak 2 bit van => 1 és 0).",
        monkeyExplanation: "Sajnos ez borzasztóan hamis! Az SLC (Single-Level) mint egy vízálló kapcsoló: vagy fent van, vagy lent. Az MLC (Multi-Level) viszont olyan pendrive cella, ahová nagyon pici különbségű vízszinteket mér a gép (Például 'Félig tele', 'Egynegyedig tele'). Képzeld el, hogy a cső a sok használattól (írás/törlés) elkezd elvízkövesedni, és elromlik a mérő: az SLC még simán látja, hogy tele van-e a pohár, de az MLC már összekeveri a negyedet a féllel! Ezért az MLC nagyon gyorsan elkopik elektronikusan."
    },
    {
        id: 129,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Az MLC NAND tranzisztora kettőnél több töltöttségi szintet különböztet meg. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A Multi-Level 2 bit esetlén 2^2, azaz NÉGY külön feszültségszintet különít el (00, 01, 10, 11).",
        monkeyExplanation: "Igen! Míg a régi pendrive-ok (SLC) csak 2 szintet tudtak (vagy 1, vagy 0 bit), az MLC (Multi-Level Cell) nevű chipek a memóriában 4 különböző feszültségszintet is fel tudnak ismerni egy pici tranzisztorban. Mert 4 szint az technikailag 2 bitnyi adatot jelent (00, 01, 10, 11). Ezért tudnak kétszer annyi gigabájtot adni ugyanakkora fizikai méretű pendrive-ért!"
    },
    {
        id: 130,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Az SLC flash memória a tranzisztorok kettőnél többféle töltöttségi szintjét különbözteti meg? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "SLC = Single-Level Cell. Csak kettőt tud: \'Van töltés = 0bit\' vagy \'Nincs töltés = 1bit\'.",
        monkeyExplanation: "Nem! Amint a nevéből is láthatod: S mint 'Single' (Egyetlen). Ő az a régi, drága, de brutálisan megbízható megoldás a pendrive-ok esetén is, ami csak 'Teljesen teli' vagy 'Teljesen üres' feszültséget tud tárolni. Azaz 1 bit kapacitás cellánként. Ő nem próbál egy apró szobába 4-6 embert bezsúfolni különböző polcokra."
    },
    {
        id: 131,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Az SLC flash memória esetében alacsonyabb az egy bitre eső gyártási költség? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "Az SLC chipben a tranzisztor MASC számolásokkal csak 1 bit adatot cipel. Ugyanazon a szillícium szeleten, ha MLC (2 bit) vagy TLC (3 bit) megoldással tolják rá az anyagot, dupla avagy tripla adatkapacitás hozható ki. Ezért a gyártási költség az SLC-nél JÓVAL MAGASABB bitenként, ellenben szinte kopás és hibaálló!",
        monkeyExplanation: "Abszolút hamis! Az SLC a luxusautó a flash világban, nagyon drága, mert minden egyes bithez egy saját, egész kis cellát vagy szobát kell építeni a gyárban! Ezzel szemben ha a TLC/MLC technológiát használják, ugyanabba a 'szobába' 2-3 utas is befér, így fele/harmada annyi szilícium rétegből kihozzák ugyanazt a gigaByte számot – így az SLC-nek (az elpusztíthatatlan egyszintes memóriának) durván magas a gyártási ára bitenként."
    },
    {
        id: 134,
        topic: "Memória technológiák",
        question: "Az SRAM a gyorsítótár (cache) memória alapja. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A Static RAM bistabil papucsvezérelt 6 tranzisztoros kombó, nem kell frissíteni, s így hihetetlenül gyors - pontosan ez a sebesség kell a CPU gyorsítótárban, lévén, hogy cserébe drága is iszonyat melegedik.",
        monkeyExplanation: "Így van! Az SRAM (Static RAM) a cache memória (pl. fönn a processzorod tokjában az L1-L2 cache). Annyira hihetetlenül gyorsan válaszol, hogy elbírja a proci szédületes (több GHz-es) tempóját, cserébe nagyon nagy helyet foglal el fizikai szinten és eszméletlenül drága sok ezer GigaByte-ot pakolni belőle egy gépbe."
    },
    {
        id: 135,
        topic: "Memória technológiák",
        question: "Az SRAM gyorsabban írható és olvasható, mint a DRAM. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ahoyg említve volt, az SRAM csupán tranzisztorkapuk ide oda lengése révén billenki. A DRAM-nál el kell tárolódjon az analog kondenzátorban a töltés (lassú), majd az \'destruktívan\' elillan olvasáskor... ",
        monkeyExplanation: "Nagyon is! Képzeld el, hogy az SRAM (Cache) pici ajtózárakból áll (tranzisztorokból), amihez csak hozzáérsz, átkattan a zár és kész, eltette az adatot. Ezzel szemben a rendszermemória (DRAM) egy rakás pici lyukas pohár: lassan csorog is bele a víz (töltés), ha meg megnézed mennyi van benne (olvasod) akkor kiborítod az egészet, és utána újra is kell tölteni a poharat. Nagyságrendekkel lassabb a DRAM ez a hercehurca miatt!"
    },
    {
        id: 142,
        topic: "Memória technológiák",
        question: "Az SRAM tárolócella kizárólag tranzisztorokból áll. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Jellemzően 6 MOSFET tranzisztorból. 2-2 tranzisztor inverterkaput játszva emlékezik egy bitre, és 2 vezérli a ki/bemeneti feszültséget - klasszikusan egy kondenzátor SINCS benne ellentévebben a DRAM-mal (1T 1C).",
        monkeyExplanation: "Így van. Ezt '6T' (Hat tranzisztoros) felépítésnek hívják szaknyelven. Nincsenek benne drága és lassú fizikai kondenzátorok (vizespoharak) amik elszivárognának. Itt maga az áram folyása képez egy logikai bukfencező kört amit flip-flopnak hívnak: mindaddig tartja a bent lévő '0 vagy 1' értéket villámgyors feszültség-zárként, amíg a gép be van dugva a konnektorba."
    },
    {
        id: 143,
        topic: "Memória technológiák",
        question: "Az SRAM vagy a DRAM memória írható és olvasható gyorsabban?",
        answer: "Az SRAM",
        explanation: "Az SRAM (Static RAM) flip-flop logikai kapukkal (6 tranzisztor) tárolja a bitet, ami azt jelenti, hogy feszültség jelenléte mellett azonnal reagál a lekérdezésre. Ezzel szemben a DRAM kondenzátorainak feltöltési/kisütési és sormegnyitási/lezárási illetve frissítési lépései drasztikusan hátráltatják azt fizikai szinten.",
        monkeyExplanation: "Egyértelműen az SRAM (Gyorsítótár / Cache)! Míg a rendes memóriában (DRAM-ban) lévő pici kondenzátorokból ('poharakból') lassan folyik ki/be az energia, s ráadásul sorokra/oszlopokra várakozva dekódoljuk hol van, addig az SRAM (ami sima logikai kapukból áll a processzorban) olyan mintha feszültség jelenlétében a gondolatsebességével szinte késleltetés nélkül verné vissza az 1-es és 0-s értékeket."
    },
    {
        id: 144,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB \"interrupt\" adatátviteli mód garantálja a hibamentességet? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Meglepő módon igen. Ellentétben mondjuk az Isochronous móddal, a periodikus Interrupt mód minden keretében a hardveres réteg (USB Host) megbizonyosodik az ellenőrzőösszegről és hibába botolva a következő ablakban automatikusan újráz.",
        monkeyExplanation: "Igen. És nagyon ügyesek! Ha az egered egy 'rántásáról' az az info megsérülne a kábelzajban miközben az USB vezérlőhöz megy (Interrupt/Megszakítás jelként), a gép észreveszi az ellenőrzőösszeg hibát, és a rákövetkező milliszekundumban (mikrokeretben) kötelezi az egeret, hogy küldje el újra a rántást. Ez drámai különbség az audio/video kamerák módjával (Isochronous) szemben, ahol ha hiba van fekete pixelként elobják a frame-et a pokolba!"
    },
    {
        id: 145,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB \"interrupt\" adatátvitelnek csak kimeneti irányultsága lehet. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Ez kétirányú tranzakciókra képes. A leggyakoribb felállás épp a bemeneti irányú Interrupt! A számítógép ezzel felügyeli (pollingozza ritmusosan) a billentyűzetünk és egerünk inputját, nehogy lemaradjon annak lenyomásáról (interrupt generálás).",
        monkeyExplanation: "Dehogyis! A legklasszikusabb példa erre a bemenet (mint te magad vagy a számítógép előtt)! A te USB-s egered, vagy a billentyűzeted pont egy ilyen 'Bemeneti Interrupt eszközként' dobálja be a betűket a Windowsba, hogy az operációs rendszer folyamatosan fitt és naprakész legyen: letenyeltél egy 'A' betűt, és a processzor azt az USB vezérlőtől érkező IT csomag alapján másolja a képernyődre!"
    },
    {
        id: 147,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB \"interrupt\" adatok minden keretben garantáltan helyet kapnak a keret méretének 10%-áig. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Fordítva van a leosztás. Az USB protokoll a periodikus műveleteknek (Interrupt és Isochronous) képes egy mikrokeret (125us USB2.0 esetén) akár 90%-át is kiutalni (így garantálva azok fix időkiosztását), s a maradék 10%-on zsúfolódik be a féléves késéssel kért, de masszív adatmozgatást végző 'Bulk' másolás.",
        monkeyExplanation: "Fordítva élnek a lovak! Az USB világa szigorú napirendet követ. Minden ezredmásodpercben (keretben) a kötelező feladatokat, az úgynevezett Periodikus dolgokat (pl. az egér rángatásának figyelése = Interrupt) le KELL tudni akár a keretidő 90%-ig is tarthat! És amikor a fontosak már végeztek, 'na majd a maradék 10%-ot megkapja Pisti, aki épp filmet másol pendrive-ra nagyban' (ez a Bulk mód). Tehát az IT nem is tudna a nagy 90%-ba beszorulni ha az övé lenne a 10."
    },
    {
        id: 148,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB \"interrupt\" adatok minden keretben garantáltan helyet kapnak a keret méretének 90%-áig. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Pontosan ez jelenti a periodikus átvitel lényegét (ami a kamera-streateké is): fix előre egyeztetett és a szabvány által garantált sávszélességet foglalnak le minden mikrokereten belül (max 90%-ig), hogy ne süllyedjenek el a másolási zajban (mint a Control és Bulk módú periferiák).",
        monkeyExplanation: "Igen! Az 'Interrupt' kérések olyanok az USB kábelen, mint a Szirénázó Mentőautók az úton (bár nevével ellentétben polingolnak)! Az USB Vezérlő kötelezően biztosítja számukra a VIP lefoglalt utat akár a rendelkezésre álló időablak (keret) 90%-áig, és csakis az a maradék kevés sávszélesség áll a nagy, háttérben vánszorgó Pendrive-másolások (Control/Bulk teherautók) rendelkezésére küzdeni."
    },
    {
        id: 149,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB 2.0 az alábbi sebességek közül melyeket nem támogatja?",
        answer: "Super speed",
        explanation: "Az USB 2.0 a Low Speed (LS - 1,5Mbps), Full Speed (FS - 12Mbps) és a High Speed (HS - 480Mbps) átviteli módokat egyezményezte. A 'Super Speed' (SS - 5Gbps, új érpárokat és kétbuszos hálózatba lépést hozva - Tx/Rx) a 3.0-as USB szabvány hatalmas áttörése lett.",
        monkeyExplanation: "Régen az USB 2.0-ig csak a kicsi (Low Speed), egy normálisabb (Full Speed) és egy elvileg 'sietős' csomagcsatorna (High Speed) volt a maximum a vékony 4 eres kábelen (amiből csak 2 a jel). Később az USB 3.0 behozta a 'Super Speed'-et vastag, sokeres (extra adó és vevő pin-ek) főkábelekkel! Tehát a régi USB 2.0 sosem bírna egy szupergyors 5Gbps-os adatátvitelt szétolvadás vagy adatvesztés nélkül."
    },
    {
        id: 150,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB 2.0-ban a nem root hubok kezdeményezhetnek kommunikációt. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Sosem! Sem egy nyomorult pendrive, sem a monitorba épített 4 portos elosztó HUB nem 'szólhat bele' csak úgy a vonalba az arbitráció hiánya miatt! Mindig, mindent kizárólag a gép bádogjába forrasztott központi CPU chip (Root Controller) pollingolása indít mint token (tehát csak engedélyre válaszolnak).",
        monkeyExplanation: "Képzelj el egy osztálytermet: A tanár (Root Hub / Processzor) a Főnök. Ha ott van 100 diák, de van ott egy Tanársegéd (Egy mezei 'nem root' USB HUB elosztó a monitorban), hiába is venné ő a pendrive-od üzenetét, ő is CSAK EGY DIÁK. Sosem kezdeményezhet beszédet magától a buszon! Mindig várnia kell a Tanár kikérdezésére (Polling), hogy számítógép felé bármit továbbíthasson."
    },
    {
        id: 151,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB 2.0-ban a Root hub kezdeményezhet kommunikációt. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Csak és kizárólag a Host controller (Root hub) az univerzálisan diktáló egyedüli 'Értelemmel s szabad akarattal' bíró Master eszköz e busz topológiájában! Bárki mást kiolvasni vagy kiírni akarunk, azt is a Controllernek kell lekordonozni és pollingozni.",
        monkeyExplanation: "Mint az előző analógiában: az USB Host Controller (A géped alaplapján a Root Hub csatlakozód, ami mögött a CPU áll) maga a Mindenható a buszon ('A Tanár'). Kizárólag ő képes megszólítani a perifériákat ('Pistike, mondj egy A betűt, ha nyomnak rajtad billentyűt!'). Egyetlen kis egér, billentyűzet vagy pendrive sem képes megkezdeni egy független adatküldést a processzor felé."
    },
    {
        id: 154,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB 3.1 sebességkategóriái közül a SuperSpeedPlus (SS+) a leggyorsabb. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "10 Gbps sebességgel (vételen s adáson egyidőben - 8b/10b logikát elhagyva, így extrém módon csökkentve a sávrezsit s overheadet) valóban az USB 3.1 hozta s a korszak leggyorsabb USB kódolása lett az eredeti 5 Gbps SS módot leverve.",
        monkeyExplanation: "Igen, mert ahogy jött a 'Szuper Gyors' (SS - SuperSpeed 5Gbps, az USB-3.0 idején), úgy rá is licitáltak egy 'Szuper Gyors Pluszos' (SS+) változattal az USB 3.1-es sorszámnál. Ez lett a 10 Gbps gigászi sebesség. Olyan ez, mint a mobilnetnél a 4G után bejött valós 5G; a kódolási nyelv leegyszerűsítésével (8b/10b elhagyása) durván ráléptek a gázra."
    },
    {
        id: 155,
        topic: "Perifériák és Buszrendszerek",
        question: "Az USB sebességfokozatok közül a High Speed (HS) gyorsabb, mint a Full Speed (FS). (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A névjegyes káosz sokat elárul az asztali informatikáról. Ugyan a 'Full' szó (az eredeti 1.1-es 12 megabitet jelezte, hogy a kábel teljesen ki lett aknázva) jól hangzik, de az évtizeddel későbbi 2.0 technika rálépett és a 480 megabites sebességet már a 'High' elnevezéssel koronázták meg (amivel lekörözte a Fullt).",
        monkeyExplanation: "Zavaró lehet a régi angol elnevezés. A 'Full' Speed volt a régi klasszikus 12 megabites max-tempója a korai gépeknek 1998-ban, amitől el voltak telve, hogy 'Ez a teljes gáz! (Full)'. Később jött az USB 2.0, ami 40-szer okosabb és gyorsabb volt nála. Mivel már a Full név foglalt volt, elnevezték 'High' (Magas) Speed-nek a 480 megabites új fokozatot. Tehát a High Speed szószerint fényévekkel lehagyja a régi Full Speedet!"
    },
    {
        id: 158,
        topic: "Perifériák és Buszrendszerek",
        question: "Azonos órajelen nagyobb az adatátviteli sebesség",
        answer: "Párhuzamos összeköttetés",
        explanation: "Ha az órajel (feszültséglépések sec-onkénti sűrűsége) fagyasztva adott, a matematikailag sokkal masszívabb sávszéleség egyértelműen a több 'dróton' egyszerre küldött logikával (Parallel: PATA, PCI, SCSI) hozható ki - cserébe ez a drótok interferenciája és órajel elcsúszási problámáik miatt sosem futhat fizikailag extrém magas Mhz frekvenciákon!",
        monkeyExplanation: "Miért küldenél egyetlen szűk csőben iszonyatos sebességgel (magas órajel) vizet (adatot), ha helyette lefektethetsz egymás mellé PÁRHUZAMOSAN (Parallel) 32 vagy 64 vastag csövet? Ha az a feltétel, hogy az órajel (Tempó) fagyasztva azonos: a matematikailag sokkal masszívabb sávszélesség egyértelműen a több 'dróton' egyszerre küldött csomagokkal hozható ki - cserébe drágább egy olyat kábelt legyártani."
    },
    {
        id: 159,
        topic: "Memória technológiák",
        question: "Azonos tárolási kapacitás mellett a DRAM kevesebb energiát fogyaszt, mint az SRAM. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Sokkal kevesebb! A DRAM 1 apró tranzisztorból s cellából áll (a töltést magában tartja a kondi). Az SRAM folymatosan üzemelő Vcc+ és GND földelés között balanszoló 6 nyitott/zárt tranzisztorkaput cipel magán, s az üzeméhez kő kemény áram és iszonyatos melegedés tartozik bitenként.",
        monkeyExplanation: "Nagyon is így van! A te 16 GB rendszermemóriád (DRAM) icipici passzív, 'áramtároló kancsókból' áll (kondenzátorok). Ha egy kancsó tele van, hagyják szépen magára csendben pihenni, néha töltenek rá. Minimális hőt és áramot nyel. Cserébe a processzor gyorsítótára (SRAM Cache) állandó villany alatt lévő tranzisztoros flip-flopokkal izzik, ami szétfűti a chipet iszonyatos folyamatos üzemével!"
    },
    {
        id: 160,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Azonos tranzisztorszám mellett az MLC NAND több adatot tárol, mint az SLC. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Lévén a süket fizikai tranzisztor azonos: A Multi Level Cell egy lebegőkapuban nem csak 1 bitet (két állapot), de a cellafeszültség apró differenciált felhúzása révén máris legalább 2 bitet / 4 állapot (üres, picit töli, kb teli, tele) tárol! Cserébe a tranzisztor gyorsabban öregszik mint a Single Levelben s lassabb.",
        monkeyExplanation: "Zseniális! Úgy képzeld el, hogy a gyár csinált 100 darab apró garázst a pendrive chipeden. Egy SLC pendrive minden garázsba letesz 'Vagy 1 kocsit, vagy egyet sem' (1 bit). Az MLC pendrive technológia viszont olyan 'Emeletes Polcos garázsokat' varázsol az UGYANAKKORA alaprajzra a feszültségszintekkel trükközve, amibe kényelmesen bedobhat akár 4 lehetséges állapotot is. Cserébe sokkal zsúfoltabb és hamarabb elromlik a rendszerük olvasásnál."
    },
    {
        id: 161,
        topic: "Virtuális Memória",
        question: "Bekövetkezésének esélye csökken, ha a TLB bejegyzéseinek számát megnöveljük: Laphiba vagy TLB hiba?",
        answer: "TLB HIBA",
        explanation: "A TLB-be szimplán egy hardveres Array (Laptábla-tükörkép a CPU-n). Ha ezt felfújjuk zsebpénzből memóriával 32-s méretről pl 256 'virtuális memóriacím leképezésre', sokkal ritkábban kell a processzornak lefutnia a sima RAM-ba lekérdezni, hol is volt utoljára a 123010. címmű memória lapja az OS-nek. - azaz csökken a TLB Hiba (Miss) és nő a teljesítmény!",
        monkeyExplanation: "A TLB az a legbelső, privát Zsebkönyved, ahová felírod, melyik cimborád (Adatlap) melyik kocsmában (Fizikai RAM keret) iszik épp. Ha több lap van a Zsebkönyvben (Több bejegyzésünk van a TLB-ben), annál nagyobb eséllyel fogod rögtön a zsebedből tudni hol vannak, anélkül, hogy le kéne battyognod a drága idős Anyakönyvvezetőhöz a Városházán megkérdezni (RAM lekérdeés Laptábla miatt). Tehát a TLB Hiba csökken!"
    },
    {
        id: 162,
        topic: "Perifériák és Buszrendszerek",
        question: "Bulk módú perifériákra példa a következő: szkenner, pendrive (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igen! Késletteltése kiszámíthatalan, de a sávszélességet a végtelenségig dominálni képes mód, a sebessége hatalmas, s megbízhatósága a transzfer ellenőrzés révén garantált is, fájlmozgatásra optimális (pl USB merevlemez, printer, szkenner, pendrive) - míg a webcamerának megakadna tőle a képe a torlozs esetén!",
        monkeyExplanation: "A Bulk egy fura állat: Lassan mozdul (hátra teszik a várakozó I/O listában a videók mögé), de ha rákanyarodik az autópályára, elvisz MINDEN adatot letöredezés nélkül, ráadásul sziklaszilárd minőségben visszakérdezésekkel. Egy szkenner fotóját, vagy a pendrive-od zene fájlját pontosan ide akarod tenni, mert ha csak 1-1 bitnyi pixel is elveszik a csomagban menet közben hibásan, egy egész dokumentum mehet a levesbe!"
    },
    {
        id: 164,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "CISC utasításkészlet jellemzői",
        answer: "Regiszter-memória műveletek támogatása, változatos végrehajtási idő",
        explanation: "Például az Intel asztali processzorai ezen pörögnek (x86). Zseniális assembler programok írhatóak viszonlag kis memóriában, mert egy utasítás képes olvasni, számítani benne a GPU-hoz, s kimenteni azt a memóriába (regiszter->memória). Hátránya: 1 ciklustol a 40.000 ciklusig szörnyű aszimmetriák jellemezhetik a szalagon (nehezítve a pipeline feldolgozást) és egy bonyolult mikrokód dekódert is követelnek.",
        monkeyExplanation: "A CISC a klasszikus 'Mindent Csinálok' svájcibicskája (mint a géped x86-os Ryzen/Intel processzora). Benne van a bornyitó és a kisolló funkció is gombnyomásra! Vagyis tud nagyon bonyolult memóriaműveleteket csinálni önállóan, mint pl. 'Olvasd ki a memóriából a számot, adj hozzá 5-öt a CPU-ban, majd oszd el kettővel és mentsd is el memóriába' egyetlen gigászi programlépésben. Ez mérnökileg pokoli nehéz, de sokkal olvashatóbbá teszi az Assembly kódot emberileg."
    },
    {
        id: 171,
        topic: "Memória technológiák",
        question: "DDR3 RAM jellemzői",
        answer: "Az órajel fel- és lefutó élén is történik adatátvitel, a belső órajel pedig alacsonyabb a külsőnél a prefetch miatt",
        explanation: "Double Data Rate... vagyis egy órajelen (1 pulzus) KÉT szignális bitet transzferál! Felfelé a bitbuszon tolta ki, és mikor leesett a feszültség fázisa... jön le utána még egy bit. Erre jön a DDR3 trükkje az 'átlapolt' prefetch-buffer, amely lelöki magát és magból egyből 8 adatocskát kapar fel párhuzamosan és nyomat a buszra fésűbe elosztva (amig a lassan ketyegő belső memória kondenzátor magja pihen).",
        monkeyExplanation: "Mit jelent, ha egy vízvezetéked 'Dupla pumpás' (Double Data Rate azaz DDR)? Azt, hogy miközben rántod fel a pumpa karját (Órajel felfutó éle felé), löki ki az első kancsó vizet (1. bit), majd ahogy tolod VISSZA a kart lefelé (Lefutó él), ő akkor is arcon vág még egy kancsó vízzel (2. Bit)! Hogy ezt a tempót bírja a lassú kondenzátoros belső memória magja is háttérből? Összekapar kipumpálja előre letöltve raktárba (Prefetch buffer) a chipekből az adatokat!"
    },
    {
        id: 183,
        topic: "Memória technológiák",
        question: "Direkt leképzésű cache jellemzői",
        answer: "Egyszerűbb és energiatakarékosabb megoldás, transzparens címzés mellett használatos",
        explanation: "A direkt leképzésű Cache (A Fully Associative cache-alap ellentétjeként) rögzíti, hogy az a RAM blokk az életben csak 1 specifikusan hashelt Cache sorba kerülhet be. Olyan dedikát tranzisztor és komparálás igénye van ami hardverszinten mikroméretű minimális hőt is rezzg és instant leforgható (1 leképzésnyi komparáló és egy MUX).",
        monkeyExplanation: "Képzelj el egy ruhatárat (Cache memória): Ha van egy '142'-es memóriacímes kabátod, és rábízod az okos Nénire ('Teljesen Asszociatív' tárolás), a néni a ruhatárban bármelyik üres fogasra fellógathatná. Ezért mikor érte mész, az egész fogassort sorban végig kéne nyálaznia arcfelismeréssel hol van a kabátod – csigalassú hardveresen! A Direkt Cache viszont egyértelmű matematikai Címkés Helyre rakja azt mindig. Így fixen tudja 1 lépésből a Néni hová nézzen, mikor ketyeg az órajel kérés."
    },
    {
        id: 184,
        topic: "Perifériák és Buszrendszerek",
        question: "DMA átvitel esetén több DMA vezérlő is lehet egy buszon. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ahogy egy pék is kezelhet 3 kiflit a sütőben. A busz mesterségéért folyamatos versengés fut (arbitráció). Gyakori hogy nem csak egy Mainboard-lapi központi DMA sín-mester tol át a hálózaton... De magukra a modern PCIe LAN és Hang-kártyákra IS külön beépítenek hardveres mini-DMA chipeket, hogy direkt versenyezzen a procival szemben írásért!",
        monkeyExplanation: "Naná! Ha az alaplapodon van a Centralizált Rendszer processzor, de te bedugsz egy bitang erős csúcs hálózati kártyát, és vele még egy profi stúdiós zenei hangkártyát amire dugsz mikrofonokat – és amik szintén kaptak okos gyári pici targonca-vezérlőt a lapjukra: Bumm! Több DMA chip is elkezd majd versenyezni (arbitrációzni) egymással is hogy a közös PCI express buszhoz juthassanak!"
    },
    {
        id: 185,
        topic: "Memória technológiák",
        question: "DRAM memória jellemzője",
        answer: "Azonos tárolási kapacitás mellett kevesebb energiát fogyaszt az SRAM-nál",
        explanation: "Dinamikus. A kondenzátor feszültséget tárol - míg az SRAM csak nyílt kapukat kapcsol szivárogtatva. Olcó, lassú, bitenként nem fűt drasztikusan és ez adja napjaink asztali és telefon processzoros RAM moduljait!",
        monkeyExplanation: "Igen, kevesebbet fogyaszt. Ezt képzeld el úgy, hogy a háttérben folyton csordultig töltött kondenzátorok csendben ülnek milliméternyi áramszivárgással. Ezzel szemben a gyorsítótár (SRAM) cellában a kapuknak FOLYAMATOSAN ellentmondást nem tűrően tartaniuk kell az áram kört bekapcsolt (Vcc áramkörön keresztüli) állapotban – ami eszméletlenül brutálisabb és folytonos áramfelvételt melegedést okoz sok milliárd bitenként."
    },
    {
        id: 189,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Egy 8 blokkból álló SSD-ben a nyilvántartás tartalmazza a lapok tartalmát és pillanatnyi állapotát. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Pillanatnyi állapotokra azért van égeti szükség, mert egy SSD 'Nem tud csak úgy felülírni' bitet! Ha már irva volt, először a komplett ezer lapból álló Blokkjának az előregelt celláit fizikailag Feszültségre kötik 'törölve' azt - ezért az OS kérést a logikai (LBA) címekről mindig dinamikusan átdrótozzák a firmware-n az 'Éppen használt', 'Törölt', vagy 'Kopott s Törlésre váró (Érvénytelen)' területekre (TRIM s Garbage Collection) a szeméttáblázat ezen státuszkönyvei mentén!",
        monkeyExplanation: "Képzeld el, hogy a pendrive-od/SSD-d nem egy sima füzet, amibe csak úgy radírozhatsz és megint írhatsz soraiba. Olyan mint egy homokba író gép: Ha újra akarsz írni egy teleírt lapra, előtte egy LÁNGSZÓRÓVAL kell a teljes homokozót (egy nagy 1000 lapos fizikai Blokkot egyben!) simára égetned drasztikusan, ami roppant lassú! Ezért, amíg csak tud a gép, dinamikusan szétmásolgatja az 'Érvényes' és 'Szemét' lapokat az üres helyekre, és csak a legvégén robbantja le a blokkot – mindehhez folyamatosan naplóznia és tudnia kell mindennek a pillanatnyi státuszát."
    },
    {
        id: 194,
        topic: "Háttértárak (RAID)",
        question: "Egy hiba esetén a teljes adatmennyiség visszaállítható marad",
        answer: "Igaz a RAID-1 és a RAID-5 technológiára is",
        explanation: "Míg a RAID-1 esetében a Tükör példány azonnal bevetésre kész (pontosan ugyanaz van ráírva), a RAID-5 redundáns-XOR paritása esetén a processzor képes menetközben a Túlélő 'N-1' disc alapján on the fly leszámolni a halott merevlemezt egy algoritmussal és minden mentve van a kiesett adatoknál - egéysz 1 azaz EGY meghibásodásig.",
        monkeyExplanation: "A RAID-1 olyan mintha lusta lennél, és szó szerint lefotóznád, az egyik fotót elteszed a pincébe: Ha az eredeti tönkremegy, ott a kopír a pincében (1 hiba túlélése). A RAID-5 matekzseni: A számokból 4-et ráír 4 merevlemezre, az 5. HDD-re egy matematikai Paritást (XOR egyenlet végeredményét) ment rá. Ha az egyik merevlemez kigyullad, a Processzor az összetett XOR egyenletet fejben visszafelé kiszámolva újra megkapja az elveszett adatot minden probléma nélkül (Képes túlélni pontosan 1 HDD pusztulását de ahhoz végig számolnia kell on the fly)."
    },
    {
        id: 195,
        topic: "Perifériák és Buszrendszerek",
        question: "Egy PCI periféria kezdeményezhet adatátvitelt a CPU felé? (Igaz/Hamis)",
        answer: "HAMIS",
        explanation: "Sosem a proceszornak dobjuk oda dühből a stringeket a dróton. A PCI hardver 'DMA masterként' közvetlen a rendszermemóriát írja (RAM) ha kéri a Busz-haszánlatot. Ezt leközölve csupán csak MSI 'Azonnali Figyelem' / 'Program megszakítás ! ITT NÉZD MEG a RAMOT!' üzenet bombát küthet le a regiszternek a proci CPU-t értesítve.",
        monkeyExplanation: "A Processzor (CPU) a vállalat Elnöke, aki a főirodában (Memória / RAM) dolgozik az aktákkal. Egy gyári munkás (PCI kártya Periféria) SOHASEM megy be izomból a vezérigazgatóhoz, hogy hangosan ráordibálja a számokat, s nem tolja az arcába a vaskos kartondobozokat, mert az megszakítás lenne az Elnök számára! Helyette leteszi csendben az adatokat a Főiroda asztalára (Megírja a memóriát -> Memory Write), és maximum egy pici e-mail jelet (MSI hibaüzenet) dob neki a sarokba: 'Kész a jelentés, nézd meg odabent ha ráérsz!'."
    },
    {
        id: 196,
        topic: "Perifériák és Buszrendszerek",
        question: "Egy PCI periféria kezdeményezhet adatátvitelt a memória felé? (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "Így van, lsd Előző! Memory Read Memory Write TLP tranzakciókbál a dedikált PCI Express gép azonnal ír az Operatín Memóriába, vagyis bus-mester szerepben eljárva közvetlenül olvashat-kiment az alaplaphoz!",
        monkeyExplanation: "Ahogyan az előbb tisztáztuk: A PCI/PCIe videókártya vagy hálózati kártya igazi Főnök a saját láncán, s a maga nevében 'Bus Mastering' technológiával a Processzor logikai megkerülésével közvetlenül rohan be az Alaplap belső raktárába (Operatív Tárba / RAM), hogy levegyen vagy lepakoljon adatokat TLP (Memory Read/Write) csomagokban! Ezzel lélegzetvételnyi időhöz juttatja a CPU-t."
    },
    {
        id: 197,
        topic: "Perifériák és Buszrendszerek",
        question: "Egy PCI periféria kezdeményezhet adatátvitelt egy másik PCI Express periféria felé? (Igaz/Hamis)",
        answer: "IGAZ",
        explanation: "Abszolút - a Switchen keresztül. Például a RAID hállózati kártyád rögzithet magán, és mindezt egy P2P (Peer To Peer) hardveres DMA tranzakciójában átdiszperzeli a videokártyánk RAM-jává mielőtt az megenné a CPU órajeleit. ",
        monkeyExplanation: "Bizony! Képzeld el az alaplapod közepén ülő PCIe Switch hub-ot egy óriási Vasútállomásnak vágányokkal. Ha a Hálózati Kártya vonatja tele van internetről letöltött videó adatokkal, és egyenesen a Videókártya (VRAM) állomására akar menni... A Vasútállomás irányítói egyszerűen csak átkapcsolják a váltót P2P módon! A gigabájtnyi adat egyenesen átszáguld a Hangkártyáról a Videókártyára, anélkül is akár, hogy egyáltalán megközelítette volna érintőlegesen is a CPU-t!"
    },
    {
        id: 199,
        topic: "Virtuális Memória",
        question: "Egyszintű laptábla esetén a virtuális címtartomány 1 bites növelése nem változtatja meg a laptábla méretét. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Mint a legtöbb fa s mátrix algoritmus - Ha 1 bittel megtőljük a felső eltolás regisztereket, a logikai megcímezhető 'Tár és Fakk' 2^1 bites vagy is a DUPLÁJÁRA esik a hardveres fizikai gépben! - A Laptábla 1 bit miatt hatalmas pazarálssal óirasit hízik és zabál el a valós RAM területről is.",
        monkeyExplanation: "Képzeld el, hogy van egy kartonozó szekrényed a cég alkalmazottainak. Ameddig csak 4 számjegyű (pl 1111) kódot használtál, volt 9 ezer fiók. Ha a Főnök hirtelen azt kéri: 'Kiterjesztem a kódot 5 számjegyűre (1 bites kiterjesztés)!'. A gépnek azonnal 90 ezerre (!) kell hízlalnia a beszámozott szekrényeit, mert a memóriacímtáblának a lehetőségek számával iszonyatosan pazarlóan is meg kell nőnie! A tábla mérete drasztikusan változik a kiterjesztéstől 1 bitnél is (gyakorlatilag duplázódik a fizikai mérete)."
    },
    {
        id: 200,
        topic: "Virtuális Memória",
        question: "Egyszintű laptábla jellemzője",
        answer: "TLB hiba esetén, optimális esetben csak egyszer kell a memóriához fordulni",
        explanation: "Egyszintű laptábláknál zseniális hogy minden cím linearisan ott lapul a memóriában. Ha a Cache-t (TLB-t) lekérjük de az nem tartalmaz a logikai címről Forditást, és beesik a 'Laphiba', csupán egyszer a ram Laptabla báziscímére nézve kivesszük az Indexből a Keret regisztereket! Nincsennek 'mutatók és pointerek hierarchiái', vagyis a Multilevel / PageDirectoryk 2-3 extra memórialvasására ami extrán lassítaná a CPU-t!",
        monkeyExplanation: "Az Egyrészes (Lineáris Egyszintű) Laptábla a Leggyorsabb Titkárnő a földön: Egyetlen hatalmas papírlistát néz sorjában, és az X-edik Logikai sornál ott a Fizikai cím. Ha nincs nálad a jegyzeted (TLB Hiba), de a memóriában (RAM) felkeresed e listát, EGYSZER kell oda pillantanod a hatalmas papírra s egy olvasásos hivatkozásodból ott a keretszámod. Pontosan azért találták ki anno a lassú 'Többszintű fákat', mert az egy olvasásos lineáris lista túl sok helybe került a vasban!"
    },
    {
        id: 201,
        topic: "Perifériák és Buszrendszerek",
        question: "Elzárhat-e egy meghibásodott periféria másokat a busztól elosztott arbitráció esetén? (Igaz/Hamis)",
        answer: "Nem (Hamis)",
        explanation: "Elosztott arbitráció lényege (s a modern hálózatoka s PCI switchek lelke), hogyha az egyik port 'Beragad, Leforr, és Zombiként Tolja az igényeit' a Hardveres önálló ütemezők a Switch portjain leselejtezik, s a többi periféria gondtalanul tranzakciózák az oldalon... Eme elterjedt modell drasztikusam lecsökkentette a 'Befagy a Gép a pendrivere' Blue Screeneket ami pl. a Daisy lineáros Bus Grantnál 100%-os kiritokus lefagyásos hiba lehetett.",
        monkeyExplanation: "Amikor minden Lovag saját maga dönt (Elosztott Arbitráció), és az egyikük, mondjuk a Hálózatikártya Lovag 'bepörög s megőrül', folyamatosan kiabálva kérve a szót s jeleket küldve, azt hívják hardverhibának. Szerencsére a központi intelligens Switch hubok és maga az elosztott logika képes a hibás csatornát egyszerűen figyelmenkívül hagyni / levágatni. A többiek így tovább dolgoznak s működik az alaplap. Nincs Végzetes (Kék Halál) gépösszeomlás s szabotázs!"
    },
    {
        id: 204,
        topic: "Virtuális Memória",
        question: "Fizikailag indexelt cache fizikaitag-ekkel jellemzője",
        answer: "A címfordítás megelőzi az indexelést",
        explanation: "A cache memóriához való hozzáférés (mivel fizikai indexelt) csakis a sokórajel-delay-t felölelő virtuális-fizikai címfordítás (MMU TLB olvasása) UTÁN történhet meg. Mivel a címfordítás is beépül a folyamatba, a cache hozzáférési ideje picit lassabb lesz a gépben.",
        monkeyExplanation: "Gondolj úgy rá, hogy a processzor 'Virtuális Fiktív' címeken (utcaneveken) kér árut. Mivel a te boltod (Fizikai Indexed Cache) kizárólag a Raktárad 'Fizikai GPS' (LBA valós memóriacím) számaival dolgozik kő keményen a vasban: Amíg fel nem hívod a tudakozót (Hardveres Címfordítás MMU révén) és az meg nem fordítja neked a 'Petőfi utcát - > 410.222 GPS kódra', a Cache egyszerűen nem tudja hol keressen s mit tegyen. Ergó: A Fizikai Cachenél a fordítási kör törvényszerűen megelőzi az indexelési lekérést."
    },
    {
        id: 205,
        topic: "Memória technológiák",
        question: "Ha a memóriavezérlő nyitva hagyja az utolsó sort, gyorsabban kiszolgálható a következő kérés, ha az egy másik sorra vonatkozik. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Kifejezetten rosszabb! Ha nyitva hagy egy sort (ACTIVATE után nem jött PRECHARGE lezárás), viszont a következő adat kérése MÁSIK sorra vonatkozik, akkor előbb egy büntető-lépésként kötelezően be kell zárni a nyitottat s csak ezután nyitható az új - vagyis tovább lassul a folyamat (ezt hívják 'Row Miss penalty'-nak).",
        monkeyExplanation: "A DRAM memória belseje egy gigantikus Excel táblázat. A gépnek először meg kell nyitnia a fájl 'A' SORÁT. Ha azt nyitva bízta abban a hitben, hogy neked megint kell onnan adat... de te hirtelen a 'C' sor 142. oszlopát kéred: Jaj! Jön a büntetést generáló (Row Miss Penalty) folyamat: a Vezérlőnek előbb PRECHARGE paranccsal szépen be kell zárnia a hiábavalóan nyitvahagyott 'A' Sort. S csak ezt kivárva adhat ki 'ACTIVATE - C sor' parancsot. Rettenetesen lassít a korábbi rossz tippből eredő nyitvahagyás!"
    },
    {
        id: 206,
        topic: "Memória technológiák",
        question: "Ha a memóriavezérlő nyitva hagyja az utolsó sort, gyorsabban kiszolgálható a következő kérés, ha az ugyanarra a sorra vonatkozik. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ez az ún. 'Page hit' (vagy 'Row hit'). Ha a program memóriahivatkozása (olvasás) az épp eleve nyitva lévő szerencsés lapra esik le, akkor a teljes időigényes sor-zárás és megnyitás megspórolódik, a READ/WRITE parancsok egyből küldhetők az oszlopvezérlésre.",
        monkeyExplanation: "Ebbe is bele lehet futni szerencsésen. Ha egy film pixeljeit olvasod sorban egymás után memóriából a monitor fele, az jó eséllyel folyamatos folyamba esik a sávon. A proci nyitva hagyta az 'A' sort s letép egy adatot az oszlopból -> majd újra a film 'A' sorából kell neked egy mellette lévő blokk. BUMM ez a 'Page Hit' (Sortalálat)! Semmi időpazarló ACTIVATE sornyitás s bezárás... már csorog is tovább a bitoszlop azonnal egy READ oszlopparancs alatt a sorkiválasztást is megspórolva!"
    },
    {
        id: 223,
        topic: "Perifériák és Buszrendszerek",
        question: "Hány megszakításelosztó (interrupt router) van egy 4 processzoros, kétszintű interrupt kezelést támogató rendszerben?",
        answer: "1",
        explanation: "Kétszintű elosztásnál hiába van négy vagy ezer mag s processzor, a Perifériák fizika vonalai az EGYETLEN Advanced Programmable Interrupt Controller (I/O APIC hub) egységhez futnak be, ami aztán mint egy internetes router szétosztja az üzenetként az épp célbavett (idle) Processzornak s magjának.",
        monkeyExplanation: "Lehet a szervereden lévő csúcslapodon 4 darab hatalmas Eypic Processzor betéve is 120 maggal felszerelve. A kábelek s interrupt külső vonalak egy APIC (Advanced Programmable Interrupt Controller - I/O APIC) chipben futnak össze az alaplap sarkán, ő dolgozik egyedül mint egyetlen nagy Router / Irányító torony. Ő szortírozza a címzést, s küldi el a 120 mag közül a legkevésbé terhelt (vagy a célzottan konfigurált) Processzormag megszakítási regiszterébe villámgyors sines csatornajelekkel!"
    },
    {
        id: 224,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hány operandusú az ADD R1 vagy a JUMP -42 utasítás?",
        answer: "Egyoperandusú",
        explanation: "Egyrészt a JUMP -42 csak magát az ugrás offset-dizájnját (célt) veszi be. Az 'ADD R1' pedig olyasmi régi akkumulátor alapú ALU gépeknél jelentette azt az implicit logikát, hogy magához a regiszterez kötött AKKUMULÁTOR nyersértékéhez adjuk hozzá fixen az R1 regisztert - az utasítás Assembly szinten így egyetlen paraméterezést kér.",
        monkeyExplanation: "Ha a matematika tanár azt mondja 'Adj hozzá EGYET', te mit csinálsz egyből fejben? Feltételezed (implicit módon a fejedben tartott egyenlethez), hogy egy Alap számhoz adsz. Ezek a régi Assembler gépek is ezt az Akkumulátoregiszteres módit tolták: Ha 'ADD R1' (Opearnadus száma: egy darab) a kiadott hardverparancs, akkor automatikusan a mindeni feje felett trónoló vaskos AC (Akkumulátor) nyers tartalmához fogja hozzávarrni fixen az R1 értékét s vissza is tenni oda a vasban, így tényleg 1 hivatkozás is elég neki."
    },
    {
        id: 240,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hány utasítás kell az ugráshoz (R1>0), ha az architektúra 'összehasonlít és ugrik' utasítást használ?",
        answer: "1",
        explanation: "Számos (általában modern RISC) Architektúra elhagyhatja a 'flags' regiszterek állítgatásával járó Compare utasítást, s ha a hardver magában bírja integrálni, egyetlen futószalag utasításkóddal megoldhatő egy 'Jump if R1>0' algoritmus, kiküszöbölve a státusz-fázis várakozásokat!",
        monkeyExplanation: "Régen a klasszikus elavult gépek ilyen dedós logikákba botlottak: 1. Számold ki egyenlő e a két szám, ha igen emelj fel egy zászlót (Compare parancs és Flag regiszter). -> várakozol.. -> 2. Parancs: Ugorj, ha a zászló fent van. Egy modern (gyakran RISC származék) hardver ezt eldobta hardveresen integrálva az 'Összehasonlítás és ugrás' áramkört. A két folyamat szorosan 1 órajel cikluson vagy gépi parancson (1 utasításon) belül zökkenésmentesen lefut, drámaian lecsökkentve az esedékes megállást ami az elágazásokkal (ugrásokkal) jártak a csövekben!"
    },
    {
        id: 242,
        topic: "Virtuális Memória",
        question: "Hányszor kell a memóriához fordulni címfordításért inverz laptábla használata esetén?",
        answer: "TLB találatnál 0, TLB hiba esetén legalább 2",
        explanation: "Minden modern chipben a TLB L1 Cacheből azonnal kidobja a fordítást (0 fizikai L3 RAM ugrás). TLB Hiba (MISS) esetén viszont lassú az inverz laptábla: a hash algoritmussal kalkulált inverz tábla indexelésének első olvasása (1. RAM kör), s az ebből kipottyanó mutatók láncolt listájának végigkeresése miatt 'legalább 2., sokszor több RAM kör' elengedhetetlen a fordításhoz.",
        monkeyExplanation: "A pici drága Cache-Zsebnotesz (TLB) ha hibázik (0 találat), mennünk kell le címet fordítani az Operatív RAM memóriába. Na itt jön be a baj az Inverz Laptábla esetén: A gép legelőször kikalkulálja s kiveszi hash alapon a laptábla bekezdését a memóriából (1 KÖR / OLVASÁS). Mivel a bejegyzés hash ütközés esetén valójában mutatók Láncolt-Listája a végtelenbe, erre a pointerre rálépve le kell zongorázni s összehasonlítani valós RAM darabokat. Minimum még +1 kör RAM memória olvasás kell! Ergó az olcsó helyigényű kis tábla masszív büntetéssel jár hardveresen legalább 2 RAM olvasással!"
    },
    {
        id: 251,
        topic: "Virtuális Memória",
        question: "Hardver által menedzselt TLB esetén a hardver feladata a TLB hiba feloldása a laptábla bejárásával. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Pl. az asztali x86 gép esetében a TLB hiba szoftvertől láthatatlan belső kivétel s maga a processzor MMU egysége hardverből automatikusan 'Page Walking' módba kapcsol, a Page Directorykban járkál s beolvassa magának a TLB-be a talált új kereteket s fizikai címeket az OS kizárásával.",
        monkeyExplanation: "Képzeld el a Processzoron belüli MMU (Memóriakezelő) egységet egy recepciósnak: Hardveres menedzselés esetén, egy TLB Hiba láttán (amikor nincs zsebben meg a keresett cím) a recepciós azonnal szó nélkül feláll, elszalad magától a beépített Iratgyűjtőbe (sima Operatív memóriába), és kikeresi magának az aktákból (virtuális Laptáblákból) az elfeledett címet! Az Operációs Rendszer ebből semmit sem vesz észre s nem futtat kódot rá, hisz fizikailag magán a chip áramkörein történik az automata keresgélés (Page Walking)."
    },
    {
        id: 252,
        topic: "Virtuális Memória",
        question: "Hardver által menedzselt TLB esetén a hardver feladata a virtuális címből a fizikai cím előállítása. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Csakúgy mint az előbbiekben, egy masszívan processzorba égetett szillícium alapú egység, a 'Memory Management Unit' s annak koprocesszora csinátatja a fizikai cím visszaadását. Az OS az init és a kiosztás megirását állítja csak be magán az MMU-n.",
        monkeyExplanation: "Pontosan így van! Ha a TLB (az apró címtároló zseb) nem dobja ki az adatot, a tisztán MMU-ra dőlő gépek (mint az x86 PC-k zöme) mind fizikai elektromos úton csinálják az MMU chip beégetett szilícium áramköreibe bízva az 'Utcanév -> GPS kód' (Virtuális->Fizikai) cserebere kiszámolását s hardveres logikáját. Ehhez Szoftvert (Kernelt) nem futtatnak."
    },
    {
        id: 253,
        topic: "Virtuális Memória",
        question: "Hardver által menedzselt TLB esetén a hardver feladata az áldozatválasztás a fizikai memóriában tárolt lapok közül lapcsere esetén. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Míg a TLB MISS feloldása gyors RAM belsejebb túrkálás (ami hardveres), egy PAGE FAULT esetén (amikor is a Winchester fájlrendszerére van már száműzve egy ritkán hivatkozott memória terület a RAM-ból), annak ismételt behívása SOSEM hardveres. Erre a CPU belenyom egy PageFault szoftver megszakítást s innnen a Microsoft Windows vagy a Linux memóriamenedzser rendszerspecikus vezérlője kezdi el 'szoftveresen' levezényelni a Swap fájlt és az uj áldozat kilökését.",
        monkeyExplanation: "Semmiképp! Az MMU chip csak kikeresni tud laptáblákból villámgyors hardveres logikával szilíciumban. Viszont ha te rákérdezel a RAM-ra de az OS lesöpörte már az adatot a Winchester Swap fájljába ('Lapcsere')... na azt hardveresen soha nem tudná felérni vagy dekódolni egy pici egység! Ahhoz komplett Fájlrendszer szintű (NTFS/FAT) olvasásra van szükség az Operációs Rendszer Kernelétől, amihez egy valódi Szoftveres kivétel-megszakításon (Page Fault-on) át jön segítség."
    },
    {
        id: 254,
        topic: "Virtuális Memória",
        question: "Hardver által menedzselt TLB esetén a hardver feladata az érintett lap betöltése a háttértárról, ha lapcsere szükséges. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Page Fault-ból felocsúdva az égetett mikrokód vagy a hardver egység sohasem tudná sem az SSD-t, sem az NTFS/EXT4 blokkokat fájl szinten felolvastatni. Ezt mint látuk az OS dedikált IO menedszere csinálja végig.",
        monkeyExplanation: "Ezt a választ le is lőttük! A Hardver egyedül a laptábla-fákat böngészi a gyors RAM-ban (Page Walk). Egy bonyolult csatlakozón lógó mágneses HDD Swap fájlját felolvasni és behozni onnan byte-ról-byte-ra, már tisztán a Windows/Linux Mag szoftverének a feladata szoftveresen, a megszakításon felocsúdva az ébresztésre."
    },
    {
        id: 258,
        topic: "Virtuális Memória",
        question: "Hardver feladata-e az érintett lap betöltése a háttértárról lapcsere esetén? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Szintúgy előző... Nem a hardver, hanem egy komplett Megszakitás kezeléses I/O Szoftverréteg (Kernel) dolga a lassú HDD-k és Swapek betöltése.",
        monkeyExplanation: "Ugyanaz a tészta felcserélt szavakkal! A Hardver áramköre az életben nem tud a HDD-d mágneslemezeiről fájlokat, Lapcseréket felépíteni (még fájl fogalma sincs náluk szintjén). A memórialapot visszahozni a háttértárból s Swap-ből, mindig az alaplapi OS Kernel feladata drága futásidővel."
    },
    {
        id: 259,
        topic: "Architektúrák",
        question: "Harvard-architektúra jellemzője",
        answer: "Az utasításmemória adatokként is elérhető, és a processzor párhuzamosan tudja olvasni az utasítás- és adatmemóriát",
        explanation: "Szigorúan véve  a MODOSÍTOTT Harvard gépekre igaz ez (melyeknek két külön buszuk van és párhuzamos a hívás (fetch)), de biztonsági okokból (pl Bootloaderek, önmódosító JIT-engine gyorítótárak) a modern Cortex lapkákon megengedik hogy futó progi olykor 'adatként' a kódot is olvassa, és irja!",
        monkeyExplanation: "Egy szigorú Neumann gépnél egyetlen kapun (buszon) dől befelé az Utasítás és az Adat! De a Harvard gépnél... van KETTŐ csatorna egymástól elválasztva. Tehát az Agy (Proci) az Egyik kezével (1-es Csatornán) olvashatja a Parancssort miközben a Másik kezével (2-es Csatornán) ezzel PÁRHUZAMOSAN ugyanazon órajel alatt máris húzza be a hozzátartozó Nyers Matematikai Számot a memóriából... zseniális sebesség előrelépés a Neumann szűk keresztmetszetével szemben!"
    },
    {
        id: 260,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hasonlítsa össze a RISC és CISC regisztereinek számát!",
        answer: "RISC > CISC",
        explanation: "Mivel a RISC sokkal nyersebb, butább és puritánabb 'Load/Store' utasításokat ad meg, a rengeteg elemi számolások mentén ne terhelje agyon a buszokat, az architektúrában rengeteg belső regisztert (16-32 és szaolagos cache szintfelett) dobnak el, míg a CISC (x86) egy utasításon belül elolvassa és a 'vissza is teszi' egyenesen a memóriába ezért az régen elég volt pár pici regiszter is.",
        monkeyExplanation: "RISC vs CISC! A RISC egy agyonbutított gép, ami nagyon hamar és eszeveszettül darál pici műveleteket, ellenben a CISC (x86 Inteles gép) a luxus svájcibicska. Mivel a CISC 1 bonyolult kóddal is tesz-vesz (Regiszter->RAM Mátrix-Büvészkedés), régen elég volt nekik pár pici regiszter is asztalon 16-osával. A RISC a pici minimális utasítások miatt az óriás számításokat csak magában, a processzoron belüli regiszterek megállás nélküli dobálásával (szorozza, tárolja, hozzáadja) tudja nyersen kivitelezni gyorsan! Így a RISC gépeknél hatalmas (pl. 32-128 darabos) Regiszter fiók armadát kellett tervezniük! (RISC Regiszter > CISC)."
    },
    {
        id: 261,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hasonlítsa össze a RISC és CISC utasításainak számát!",
        answer: "RISC < CISC",
        explanation: "A nevükből is következik. C (Complex) utasítás szet... a sok tizeres, speciális kódokra egybeégetett logikák, es RISC - Reduced, azaz az utasítások mennyisége a redukáltsága és mikrósága miatt igen csekély kódhalmazból operál az assemblyjük.",
        monkeyExplanation: "A logikájuk nevéből adódóan fordítva élnek! C mint Komplex: Itt több TÍZEZER apró beégetett Svájcibicska Utasításkód érhető el a bonyolult x86 hardvereknél, még ahhoz a rejtett dolgokhoz is ami alig kell programozóknak! A RISC azonban 'R (Csökkentett/'Reduced')', s a neve el is árulja: Alig van pár száz vagy tíz kőbalta nyersutasítás szett benne (Pl Load/Store/Add). Emiatt a kódjuk jóval pörgősebb viszont hoszabb lesz a listájuk futáskor. (RISC Utasítás < CISC Utasítás)"
    },
    {
        id: 262,
        topic: "Perifériák és Buszrendszerek",
        question: "Használ-e a PCI Express rejtett, párhuzamos arbitrációt? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Szintén a PCI ezen felülkerekedett s elhagyta ezeket, mivel a PCIe egy teljesen pont-pont dedikált elvű drótpár hálózat! Emiatt NINCSEK sem rejtett, sem közösen megosztott busz-vonalak a gépeken ami miatt ne is lehetne egymásra 'rálépni', tehát bus-megosztós és sínas arbitrációra sincsen szükség!",
        monkeyExplanation: "Egyáltalán nem is teheti. Mivel a PCI Express szakított a régi szokással és nem engedett közös kábelre (Közös Utcára / Buszra) gépeket. Olyan mint egy modern autópálya-hálózati csomópont (Switchek). Mindenkinek van egy dedikált saját betonútja lefele a Switchbe be a kártyájáról PONT-PONT között dedikáltan. Ha nem osztozunk senkivel a drótokon, NINCS MÉR VESZEKEDNI, ezért egyáltalán rejtett arbitráció (Busz döntőbíró) IS FELESLEGES elkerülve az ütközéseket."
    },
    {
        id: 263,
        topic: "Architektúrák",
        question: "Használ-e az adatáramlásos modell FORK-JOIN primitíveket a párhuzamosság leírására? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "A Data-flow szoftverek az Adatok megérkezése és kigyulladása végett teljesen önállóan és implicit párhuzamosan állnak neki a feldolgozásuknak miként az alaktészek megengedik. A Fork/Join (Programozói leválasztás s szálszinkron) az asztali Neumann féle procedurális kényszer okán van C programozóknak kitalálva.",
        monkeyExplanation: "Egy tisztán Adatáramlásos (Data-Flow) modellt futtató szoftvert nem lehetett a régi Neumann soros, szekvenciális kóddal leírni! A gép azonnal és automatán nekilát számolni hardveresen a gráfpontokon, amint egy adat megéll (mint a Teli F1 boxutca: ahány kerék felér annyi szerelő lekapja magától, egymásra várás nélkül). A 'Fork-Join' parancsok szoftveres Neumann elvárási Trükkök... (Pl C# Task.Wait) ahol erőszakosan leválasztják szoftverből a fonalat s várnak rá programozóilag (Explicit Párhuzamosság). Data-Flownál minden magától függetlenül lecsorog (implicit)! Nem kell FORK bűvészkedés!"
    },
    {
        id: 265,
        topic: "Perifériák és Buszrendszerek",
        question: "Hibamentes adatátvitelt garantáló USB mód (példa)",
        answer: "Bulk",
        explanation: "Pendrive, scanner stb. Mivel az adatintegritás a legfontosabb (egy hibás byte a szoftverben katasztrófális hiba fájl korrupciónál), ezért az USB hardver Bulk logikája addig próbálja újra küldeni s CRC hitelesíteni ahányszor kell, magas transzfer rádióval de nem garantál folytonos sávkihasználtságot mint az Audio vonal.",
        monkeyExplanation: "Ahogyan fel is robbanna az egész PDF dokumentumod megnyiáskor, ha csak 1 kicsi nyomdahiba kerül bele az USB-s átvezetés során transzfernél, ezt a Bulk módot a pendrive és szkenner épp arra a stabilitásra használja, hogy okos biztonsággal rácuppan az USB 'Maradék Pufferes' kereteibe s iszonyatos csomagmennyiségnél Bármit visszakérhet hiba ellenőrzéssel ha CRC gikszer van (Hibajavítás 100%). Ez bizony drasztikusan Hibamentes Adatátvitelt jelent szemben a webkamerák valósidős szakadásos Isochronous módjaival!"
    },
    {
        id: 266,
        topic: "Perifériák és Buszrendszerek",
        question: "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: az interrupt vonalain keresztül képes valódi interruptot generálni? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igen, a klasszikus 'régi széles PCI csatlakozók' A, B, C, D extra fizikai vezetékeit fellehetett feszültségre húzni mellyel a CPU valós analóg interruptot észlelt!",
        monkeyExplanation: "A nagyon régi ős-világban igen... Ott még a klasszikus alaplapokon tényleges extra fém lábakat (Vezetékvonalak) faragtak ki a videókártya élére 'INTA#, INTB#' feliratokkal. Ha te jelezni akartál s megszakítani a CPU-t valami okból, a kártyának analóg mód, szimplán rákellett küldenie stabil 5 Voltos áramot a fizikai drótra, hogy 'Nézz rám Főni, felemeltem a vonalat'! Ez még Tényleges igazi áram-vezérelt Interrupt generálás volt!"
    },
    {
        id: 267,
        topic: "Perifériák és Buszrendszerek",
        question: "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: egy speciális busz tranzakcióval képes interruptot generálni? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A PCIe ezen álalánosan el is rugaszkodott, 'Message Signaled Interrupts' (MSI) tranzakciókkal operálnak, az I/O controllernek címzett apró memory/bus csomagokban adnak hírt az interrupt kérésről anélkül hogy 1 kábelt kéne dedikáltan kihúzniuk erre a célra a NYÁK-on.",
        monkeyExplanation: "Szerencsére ma (PCI Express) ez a nyers áram alá helyezős Interrupt kikopott a luxus vaskos extra kábelek hiánya s a lapka fizikai méretének csökkenése céljából! Inkább megegyeztek a gépek: 'Ne kiabálj a telefonba külön vezetékről, ha baj van! Csak írj egy E-mait (MSI - Message Signaled Interrupt) egy picinyke Adatcsomagba formázva mint egy közönséges videókártya adatcsomag s pattintsd fel a Root Controller-hez (Processzor kapuja) a normális adatkábeleken s vágányokon futva lekezelve amilyen gyorsan csak lehet!'."
    },
    {
        id: 268,
        topic: "Perifériák és Buszrendszerek",
        question: "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: polling segítségével a futó program adatátviteli kérésekkel lekérdezheti a státuszát? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Igen, a Memory-Mapped I/O technikánal a kártya beírja magának a válaszát az MMIO portra kinevezett regisztereibe. Ezek után az OS (CPU) mondhatja, hogy egy ciklusban fel-fel pillant nézi s olvassa 'beírtál valamit?, na es most? és most?'! Ez a POLLING megoldás rettenetesen eszegeti az CPU órajelet s sokat forog a gép üresben ha sosem volt esemény!",
        monkeyExplanation: "Persze, hogy jelezhet, csak iszonyat primitív megoldás ez! Ilyenkor CPU végzi el a Pollingozást eszeveszett módon ordítozva vele. Képzeld el, hogy a gép kérdezgeti másodpercenként százezredszer a PCI hálózati kártyát (PCI): 'Jött adat netről? Jött adat? Jött adat?' Erre a kártyának mindig bele is kell karcolnia fix helyen a RAM területén egy kinevezett regiszterbe (MMIO). Az OS CPU meg folyton leolvassa azt a portblokkot, hogy jött-el jel... Rettenetesen falja a CPU órajelet a Várakozásos figyelem! S amíg válaszra vársz semmi hasznosat se tudsz rendereltni az asztalon a procival!"
    },
    {
        id: 272,
        topic: "Processzorok",
        question: "Hogyan oldható fel a memóriát érintő feldolgozási egymásrahatás az 5-fokozatú pipeline-ban?",
        answer: "Külön utasítás és adat cache bevezetésével",
        explanation: "A klasszik 5 fok pipeline (IF ID EX MEM WB) 2 alkalommal is a RAM felé kurkászna! IF alatt behozza az utasitást magát, MEM szakaszban pedig a már dekódolt utasítás felé irna-olvasná az 'Adat'-ot. Ebből egymásra hivatkozás s buszütközés, delay lenne, így ezek L1d és L1i külön chache-eken tranzakciózhatnak 1 ütem alatt feloldva a dugót (Modified Harvard Model logic).",
        monkeyExplanation: "A klasszikus 5 fázisos processzor futószalag (Pipeline) úgy nézett ki egy csőben: Bekérem (IF), Feldolgozom (ID), Megcsinálom (EX), Kírom a RAM-ba ha kell (MEM), Rögztem a Regiszterbe az eredményt (WB). A baj a szekvenciarer: Az (IF) lépéskor betölt a Memóriából egy új soros parancs. De egy ciklussal előtte lévő korábbi feladat is pont a szalagon (MEM) fázisba is egy RAM-ba író utasítás csorog be épp. BUMM összeakadtak s 2 futószalag modul akarna 1 közös ajtón bemenni kiolvasni és beírni a Memóriát adott órajelen, ez Strukturális Ütközés és Holt idő! Erre csapták be a Modified Harvard designt: Szedd 2 fizikai részre (2 független cache kapura), Data-Cache (Adatokra MEM fázisnak) és Instrucion-Cache (Parancssorokra az IF fázisnak). Lett 2 Ajtód -> megoldva az ütközés 1 órajel cikluson!"
    },
    {
        id: 274,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hogyan tárolódik a 0x0A0B0C0D szám Big Endian bájtsorrend esetén?",
        answer: "0A 0B 0C 0D",
        explanation: "A Big-endian olyan mint mi magyarok és ahogy írjuk is! A 'legmagasabb' (Big / Least significant - baloldali) '0A' bájtot tesszük be a legkisebb RAM tárcellába először, utána a '0B'-t a követezőre... tehát az irás s olvasás iránya egyezik!",
        monkeyExplanation: "Big-endian olyan, mint ahogy mi kimondjuk a dátumot vagy írjuk a nagy ezres számokat! Az első (bal oldali) számijegyek a 'Legnagyobbak' (Big = legértékesebb / ezres helyiérték), szóval ha le kell írni papírra, akkor a Legnagyobb értéket (0A) tesszük le legelőször a memória elejére (a legelején lévő címre), majd utána az egyre kisebbeket mögé! Ahogy olvasod s kiejted balról-jobbra, pontosan úgy is írod fizikailag a gépbe az adat byte-jait eltolva."
    },
    {
        id: 275,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Hogyan tárolódik a 0x0A0B0C0D szám Little Endian bájtsorrend esetén?",
        answer: "0D 0C 0B 0A",
        explanation: "Pont fordítva pici endian! A legkisebb 'legértéktelenebbül logikai - jobboldali' Byte (0D) kerül bele a RAM memóriatérkép legelejére. S a RAM tömbben visszafele nő fel belőle a szám.  Az asztali Intel x86 gépek is így írnak be adatösszegeket.",
        monkeyExplanation: "A Little endian a 'Pici s Értéktelen jobbról kezdő'. Úgy ír a memóriába, ahogy mi angolt tanulunk dátumozásnál (Nap, Hónap, Év - Kicsitől a Nagy felé). A Legkisebb, azaz legkevésbé értékes s legutolsó bájtot (a '0D'-t, ami pl a Forintnál már csak fillér lenne) rakja le legelőször a legkisebb sorszámú memóriahelyre, és szép lassan építkezik visszafelé egészen a gigantikus legnagyobb értékek felé (0A). Asztali Intel x86 PC-d is pont ezt az amúgy bonyolult 'farok-első' elvet használja matekolásnál!"
    },
    {
        id: 278,
        topic: "Memória technológiák",
        question: "Hogyan ütemez az FCFS (First Come First Served) memóriavezérlő?",
        answer: "A kéréseket szigorúan az érkezési sorrendjükben szolgálja ki, akkor is, ha ez gyakori sorváltással (Precharge/Activate) jár",
        explanation: "First Come First Serve... a klasszik faék egyszerű 'aki kapja marja / várólista' modell. Ami borzasztó lassú tud lenni a RAM kezelésben, mert hiába esik be logikailag a 2. kerelémnek az 10. kereséseivel közösen megnyitott gyors ROW HIT kérés, a gép kegyetlenül Lezárja (Precharge) majd újra Aktíválja (Várakozik iszonyatosan) és ez a Thashing miatt porrá rombolja a sebességet!",
        monkeyExplanation: "FCFS (First Come First Serve)... Ez a sarki kocsma 'Kiszolgálás érkezési sorrendben!' elve. Mi a baj vele memóriában? Míg te sört kérsz a pultnál ('Nyisd ki a memória A-sorát!'), a mögötted lévő bort kér ('Zárd be az A-t és Nyisd ki a B sort!'), de a sorban harmadik ember ISMÉT SÖRT kér ('Zárd be a B-t, Nyisd ÚJRA az A-t!'). Ez milliárdszorosába fáj a gépnek időben. Iszonyatosan belassul a szimpla sorhúzás és felesleges ki-be csukogatás miatt ami miatt porrá rombolja a sebességet (Thrashing)!"
    },
    {
        id: 279,
        topic: "Memória technológiák",
        question: "Hogyan ütemez az FR-FCFS (First Ready - First Come First Served) memóriavezérlő?",
        answer: "Előreveszi azokat a kéréseket, amelyek a már nyitott sorra (Row Hit) vonatkoznak, így csökkentve a sorváltások számát",
        explanation: "Ha több kérés vár a memóriavezérlő várólistáján, ez az algoritmus nem szigorúan az érkezési sorrendet nézi, hanem intelligensen keres olyat a listában, aminek a cél memóriasora (Row) épp fizikailag aktív/nyitott állapotban van. Ezzel megspórolható az amúgy milliárdos veszteséget hozó aktíválások és sorzárások láncolata!",
        monkeyExplanation: "Na, a First Ready okosabb csapos a kocsmában! Ha 10-en álltok a pultnál, Ő ránéz az egész tömegre egyben mielőtt kiad. Mivel az elöbb kezdett el épp SÖRT csapolni ('A' Memória Sort nyitotta - ACTIVATE az első embernek), egyből megkérdezi hangosan a többi várólistástól: 'A harmadik és nyolcadik embernek is Sör (ebből a nyitott memóriából) kell? Gyertek előre, tiéd is a szotya (Page / Row Hit)!'. Óriási nyitási-zárási drámát és áramot spórolt meg a memóriavezérlőben, brutálisan megnövelve a gép olvasási erejét!"
    },
    {
        id: 286,
        topic: "Perifériák és Buszrendszerek",
        question: "Honnan tudja egy megszólított PCI eszköz, hány adategységből áll egy tranzakció?",
        answer: "A kezdeményező fél jelzi, ha vége a tranzakciónak",
        explanation: "A klasszikus PCI sín esetében nincs előre 'bekódolt' fix csomagméret a fejlécben. A 'Burst' másolás addig megy az ütemek alatt (sorozat), amíg a Master hardver az 'Irdy' vagy a vonal frame jelölte elvételével nem mondja a buszon, hogy 'kész, ez  volt utolsó bájt'.",
        monkeyExplanation: "Úgy képzeld el a régi PCI sínt egy hosszabb Burst memória másolásnál, mint egy indiai taxiórát. Nincs előre lejátszva a fix viteldíj (mint az Ethernetnél a fix CsomagHossz az üzenet legelején). A küldő Master chip egyszerűen beránt egy 'Irdy - Kész vagyok adatot küldeni' analóg feszültséget a dróton, a Vevő Cél kártya is betesz cserébe egy 'Trdy - Készen állok fogadni'-t lent, ... És ömlik a folyékony adatsorozat amíg  ki nem apad a forrás. Amikor a Master kifogy egyszer az anyagból, egyszerűen felengedi az ujját s a feszültséget a sín Frame jeléről, miszerint 'Kész Vége'!"
    },
    {
        id: 287,
        topic: "Perifériák és Buszrendszerek",
        question: "I/O processzor fő funkciója",
        answer: "Mentesíti a CPU-t a részletes vezérlés alól, saját utasításkészlettel rendelkezik és bonyolult I/O műveleteket végez",
        explanation: "Ő egy különálló mikroszámítógép a számítógépben. Pl mainframe rendszerek 'csatornaprocesszoraként' is emlegetik, aki egy memóriába dobott egyszerűsített cél-programot futtatva a háttérben, a CPU beavatkozás nélkül kezel hálózati, s HDD szektor hiba-olvasásokat.",
        monkeyExplanation: "Ahogy már emlegettük, az I/O Processzor nem az Alaplap Nagyfőnöke (CPU - aki Word-öt futtat s matekol). Ő egy önálló 'Raktáros Fő-Menedzser', akinbek még elszeparált zsebe és kódja (Ram és Logikai Utasítása) is van önmagához! Olyan dedikát chip, ami kap egy célt a Főnöktől: 'Töltsd le logikailag fájlként s szektorként ezt a videót HDD-ről'. A Raktáros pedig maga bajlódik hetekig byte-ról-byte-ra a lassú Winchester lemezzel a háttérben, de ezzel 100%-ig felszabadítja az asztali Fő processzorodat az adatkéréses terhek s megállasok alól."
    },
    {
        id: 288,
        topic: "Processzorok",
        question: "ID (utasítás-dekódolási) fázisban előforduló kivétel",
        answer: "Érvénytelen utasítás",
        explanation: "A Pipeline második fázisa az Instruction Decode (ID). Ha egy memóriából lekapat hexadecimális bitsorról felismeri a hardver, hogy az nem a processzorhoz tartozó és dokumentált funkció kódja (pl gibberish), egy belső 'Invalid Opcode' kivételt dob az OS-nek és le is áll az ALU szakasz előtt!",
        monkeyExplanation: "A futószalag második fázisa (ID - Utasítás Dekódoló / Instruction Decode). Itt a processzor okos áramkörös fordító-mátrixa ránéz az imént gyorsan RAM-ból lehúzott csupasz bináris '10110F8' kódra. Ha ebből kiszámolja s látja, hogy ilyen 'Pukkantsd szét a vasat!' nevű zagyvaság utasítás op-kód nincs is a mérnökök által beégetve s felkészítve, dob egy Szoftveres kivételt az OS Kerneléig ('Invalid Opcode' / Érvénytelen) és megvédve magát azonnal megszakítja és blokkolja azt a hibás kódfolyamot még mielőtt belekezdene a Számolás (EX) fázisba!"
    },
    {
        id: 289,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz a PCI ablakokra: Az ablakok kezdőcímét a periféria be tudja állítani? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Bár a Periféria áramkörei mondják meg egy maszk révén hogy MEKKORA ablakot / tárterületet szeretének, magát az Indulási Bázis Címet (Base Address Register - BAR) mindig a gazda Operációs Rendszer / BIOS írja be felülről induláskor a regiszterükbe!",
        monkeyExplanation: "Ugye a PCI 'Memória Ablak' a te dedikált területed a Rendkívül nagy 8 GB-os RAM parkolóban ahová csak te Kártyaként teheted be az Adataidat! Ha te vagy a Kártya chipje lent, egy dolgot Nem csinálhatsz pofátlanul: Nem állíthatsz konkrét címet ('Én  ragaszkodok hogy a 100.22. címtől akarok indulni!'). Te Perifériaként CSAK EGY MASZK-ot (Nagyságot) lobogtathatsz fel, miszerint 'Nekem 2 GB egybefüggő helikopter parkolóra van szükségem egyben'. Az Indulási Címsort (Base Address) a gép kényszeríti rád felülírhatatlanul a regiszteredbe (BAR)."
    },
    {
        id: 290,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz a PCI ablakokra: Az ablakok kezdőcímét az operációs rendszer be tudja állítani? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Pontosan az ezt megelőző állításból következik. Az OS Plug And Play managere 'sakkozza' és rendezi be ütközeésmentes lineáris térré a kártyák memóriacímjeit elinduláskor (resource allocation).",
        monkeyExplanation: "A Processzort és az azt terelő Microsoft Windowst / Linuxot képviseljük PnP (Plug and Play erőforráskezelés) alapon a vezetésben! Ha te kérsz videókártyaként 2 gigabájtnyi egybefüggő helyet mint 'Saját Memória Ablak egyben', a Címedet nem te sakkozod ki... hanem én Osztom Ki (Az OS / BIOS) és beleírom fixen a címed (Báziscím) a regiszteredbe bootoláskor: 'A te blokkod Címe az  1.420.000. hexa területtől indul ezentúl!' – így nincs memóriacím ütközés az eszközök közt sose."
    },
    {
        id: 291,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz a PCI ablakokra: Vonatkozhatnak a memória címtartományra? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Természetesen, ezt hívja az ipar 'Memória Leképezésnek' (Memory Mapped I/O). A proci ha ír az adott egy bites memória pointerbe, konkrétan nem RAM dobozt, hanem a bedugott Videókártyát írja és aktiválja.",
        monkeyExplanation: "Persze! A Memory Mapped I/O pont erről szól zseniálisan. Az x86 operációs rendszerek a perifériák 'BAR Címétől' induló fizikai RAM-helyeit képesek virtuálisan kinevezni hardverből 'Láthatatlan Ablaknak'. Mivel a processzor 'süket vak gép' - azt hiszi, egy sima egyszerű RAM excel cellába írt bele egy adatot kimentésre. De ha a kinevezett BAR sávjára címez, a vasúti váltó egyből átdobja az adatot az asztalról lesöpörve a Videókártyába vagy az USB vezérlő nyakába az adatot egyesen! A RAM-ban nincs is meg valójában ott az adat fizikailag (Tranzakció)."
    },
    {
        id: 293,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz-e, hogy a daisy chain alapú interrupt kezelés elvben tetszőlegesen bővíthető? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A lánc topológia elvtől fogva fizikailag bárhová, mindig csak meg kell szakítani a láncot és kábelt s az új srác feszültségét sorbakötni. Bár a jelzés terjedési 'kiterjesztett ideje' (és így a láncmegszakadás esélye) a lánc végén katasztrofálisan nő a bővítésekkel.",
        monkeyExplanation: "Elviekben igaza van a definíciónak! Mivel sima Felfüzött Lánc a hálózata, nincs routered s 'Konektorod' amiből hirtelen kifogysz mint port. Ha jön egy 28. új USB-s egér is, egyszerűen elvágod az adat vezetéket s sorba kötöd a feszültséget az előző egered fenekére logikailag! Végtelenségig fűzheted dróton (Daisy Chain)! A Baj a nyers elektromos Fizika vele: minél hosszabb drótot építettél, egyrészt hamarabb szakad el elszállva mindenki, másrészt a sor végén lévő srác esélye arra, hogy neki is jusson egyszer áram vagy jelzés szoftver ügyileg: egyre iszonyatosabb eséllyesül csökken le feszültségi várakozásokban."
    },
    {
        id: 294,
        topic: "Memória technológiák",
        question: "Igaz-e, hogy a DRAM írási és olvasási művelete gyorsabb az SRAM-nál? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Az SRAM sokkal gyorsabb az állandó feszültség miatt. DRAM esetében ráadásul a cellák olvasása során a kondnezátorok kiolvasott értéke elveszik, eltűnik bele a vezetébe (destruktív olvasás), ezért azt hardveresen szigorúan azonnal vissza is töltei az áramkör ami súlyos idő!",
        monkeyExplanation: "Ezt a választ feljebb már leráztuk a pocsolyába. Dram (Rendszer Memória D4/D5) olyan, mint a lyukas pohárból csepegő vizes kondenzátor! SRAM (Cache L2/L3) egy áram alatt folyton lévő villámgyors flip-flop kapcsolótábla. SRAM sebessége ezerszer durvább a várakozásnélküliségben. A DRAM esetében a kiolvasás során is elveszik s 'Kibosul feszültségileg' a tartalom (Destruktív Olvasás). Azt kiolvasás után a DRAM chip azombnyomban egy durva +időpazarló lépésben vissza is Tölti hardveresen a kondenzátorba amit letépett abból... ami rettenetes lassulást termel hardveresen vele."
    },
    {
        id: 295,
        topic: "Memória technológiák",
        question: "Igaz-e, hogy a DRAM-nak kisebb a tárolási kapacitása az SRAM-nál? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "DRAM adatsűrűsége a legjobb dolog benne! Csak 1 kondenzátor és tranzisztor van 1 biten! A minimum 6 logikai tranzisztor kapus SRAM fizikailag és tranzisztormennyiség szempontjából is sokszor akkora területet égetne a lapodon ugyanezért.",
        monkeyExplanation: "Fordítva élnek már csak tranzisztor számban is! A DRAM (Közös operatív gép RAM) 1 darab apró Kondenzátorból s apró Tranzisztorból teszi ki a tárolási kapacitását 1 Bitnek! Hihetetlen zsugolódás és apró nanóméteres technika olcsón (Sok Gigabyte memóriaszázalékot tesz le piciny árig egy asztalra). Ezzel szemben 1 bitnyi SRAM 'Gyors cache' nem vizespohár, mind egyedi logikai kapuból (flip-flop legalább 6 tranzisztor magában) áll! Ha annyi SRAM cache cache memóriát akarnál mint RAM-ot a gépbe, a Szilicium chiped fizikailag tenyérnyibb s gyárthatatlan drágább területű lenne, s hűthetetlenül szétégetné magát árammal gépben."
    },
    {
        id: 296,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz-e, hogy a PCI Express perifériák képesek közvetlenül a memóriába adatot írni? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Ezt nevezzük First-party DMA-nak / Bus Masteringnek. Műkődése a DMA egyik csúcsa: a hálózati s hangkártyánk a CPU kihagyásával írogat blokkokat és menti le a dolgokat a RAM memóriaterületére!",
        monkeyExplanation: "Ezt a varázslatot Master DMA-nek vagy First-Party DMA-nek becézgetjük, s a létező legjobb opció asztali gép teljesítmény emelésére Buszkezelés ügyén! A Perifériád a kábel legvégén (Pl Bitang drága Stúdiós Hangkártyád) egy külön beépitett okos chipet kapott rá! 'Én kapok Master Jogot a Főbuszra' – s azzal lendületből a CPU kihagyásával s megkerülésével masszív sávokon dobálja át s menti le saját maga a zenei WAV file-ok hexadecimális kódjait Memory Write PCI tranzakciókbál a központi RAM Címeire közvetlen!"
    },
    {
        id: 297,
        topic: "Architektúrák",
        question: "Igaz-e, hogy az adatáramlásos modell nem feltétlenül a programozó által megadott sorrendben hajtja végre a műveleteket? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Teljesen szakít vele! A Data-flow koncepciója egy hálózatról, ami menten, amint adatot s muníciót lát valahol valami (token a gráf ágán) önállóan elvégzi a rábízott egységnyi számítást, függetlenül attól, mikori és hanyadik sorban deklarálta azt a programozó forráskódja.",
        monkeyExplanation: "A Neumann Gép A Te lineáris Recepted a konyhában: Vizet forralsz, utána felbontod a Kávét, ha sorrendben mész. Az Adatáramlásos (Data-Flow Arch) masinák teljes szabad gráf-anarchiába csapnak le. Ébredésekor a 'Kávésvíz' Cél Gráfját leteszi hálóba. Amint észleli s érzékeli valami ('Hopp az asztalon ott egy Kávé tokkenem / adatom'), önállóan a gépikód sormutatóját teljesne ignorálva s félredobva csinálja végig a Gráf rábízott ágának dolgát az adatok fizikai áramlási érkezésétől hajtva. Totális szakítás a régi soronként utasító s sorszámjelzős Procedurális kódok börtönéből!"
    },
    {
        id: 298,
        topic: "Architektúrák",
        question: "Igaz-e, hogy az adatáramlásos modell nem hajt végre utasítást, amíg az eredményre szükség nem lesz? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Épp hogy az Adatáramlásos elöbb sül el amint megkapja a két értéket összeadára pld. Az IGÉNY-vezérelt (Demand-Driven) az ami egyedüliként 'lusta': malmozik addig amíg konkrétan egy végeredményt tőle ki nem 'demandolnak' - s majd akkor visszafele fejtve számolja végig magát.",
        monkeyExplanation: "Gondolj egy masszív dominósorra! Az Adatáramlásos (Data-Flow) modell olyan ákombákom, ami azonnal eldől és végigpöccinti a sort amint odatetted az első kockát (adatot az inputra). Esze ágában sincs várni az ok-okozati felszólításra hogy kell e egyéltalán ez a végeredmény! Ezzel szemben az Igény-vezérelt (Demand-Driven) modell egy rendkívül 'lusta' matekos... Hiába adod oda neki a házi feladat számait gráfon, addig nem ír belőle le semmit, amíg a Tanár másnap konkrétan rá nem kérdez a végeredményre hangosan a padja előtt (Igényként) s ekkor fejt visszafelé!"
    },
    {
        id: 299,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz-e, hogy az elosztott arbitrációnak van olyan kritikus komponense, amelynek hibája a busz leállásához vezet? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Nincs benne 'Single Point of Failure'. Ez az igazi ereje! Mivel az összes eszköz mini független arbiterrel dönt hálózat szinten, ha egy központi tákolmány mint a Vezérlő Hub hibás is lenne, az eloszottt rendszer önvezérelt módon kikukázza az egyént és a tranzakció a többiek részéről nem akad el.",
        monkeyExplanation: "Az Elosztott (Lovagkori Kerekasztalos) döntésnél NINCS egy mindenható Király a teremben aki elébb halna s lebénítana mindenkit (Single Point Of Failure). Mivel minden egyes PC perifériakártya önálló 'mini Döntőbíró s Algoritmus áramkörrel' bír a hálózatban s egyenrangúan szólnak bele a vitába... egyetlen rosszul bekötött s zárlatos kártya sem tudja az egész Vasútállomást s az autópályát lebénítani (Busz leállás)! Ha a Hálózati kártya megbolondul a buszon, a rendszer simán hanyagolja, s a többiek gépösszeomlás nélkül folyatják a RAM adatcseréiket s Te azt látod hogy fut a Windows (túlél)!"
    },
    {
        id: 300,
        topic: "Memória technológiák",
        question: "Igaz-e, hogy az SRAM tárolócella kizárólag tranzisztorokból áll? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Nincs szivárgó analóg kondenzátora. Félvezető inverter gates kombinációként működik, így a tárolást és adatelérést kizárólag MOSFET Transziszirok látják el.",
        monkeyExplanation: "Nincs benne szivárgó analóg vizespohara (Kondenzátora)! Pontosan emiatt csillagászati áru drágaság is egyben! A te processzorod apró gyorsítótára (SRAM / statikus ram) 1 Bit eltárolásához konkrétan logikai ajtók s áramkörök egész sorát (Általában Hat darab apró MOSFET félvezetőt egy flip-flop nyitó körben) enged össze folyamatos aktív feszültség alatt szétégve meleget fejlesztve az adatért. Tehát Igen, ez csak és kizárólag villanykapcsoló tranzisztorok láncolata vasban!"
    },
    {
        id: 301,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz-e, hogy daisy chain esetén az eszközök prioritása nem változtatható? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Kőbe vésett a hierarchia. Daisy chain buszoknál a prioritást zord módón abból jön: MILYEN KÖZEL VAGY FIXEN BEKÖTVE a Vezérlőhöz (GRANT). Aki a kábel végi fityegőkre megy s távol van dróton láncban, az sosem jut prioritáshoz hardveres átforrasztás nélkül...",
        monkeyExplanation: "Képzeld el az ovistársakat kézenfogva a sorban kiránduláskor az óvó néni mögött lemaradva láncban. Az egy 'Daisy Chain' busznak megfelelő hálózat! Mivel minden engedély s információ kézről-kézre dől logikai feszültségátadás útján a legelsőtől hátrafelé, olyan pont nincs, hogy te fizikai átkötés s a kábel kibontása nélkül 'Prioritásban' elébb sorolsz valaha (ha messzebb vagy feltolva sokadiknak)! Szigorúan előre bedrótozott a hatalmi prioritási sorrend egy ilyen nyáklapon pusztán a kártyák csatlakozójának távolságából s fűzöttségből adódóan!"
    },
    {
        id: 302,
        topic: "Perifériák és Buszrendszerek",
        question: "Igaz-e, hogy több DMA vezérlő is lehet egy buszon? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Korábban volt 1 chip az archaikus alaplapokon. De manapság maga a rendszer és számos külön modern Bővítőkártya is operál saját kis DMA chip vezérlővel mikrokódból megsegítve.",
        monkeyExplanation: "Ezt beszéltük a Processzor Főkábel Versengésénél Arbitráció címenségnél! A nagyon régi ős-PC gépeken csak egy nagy Raktáros főchip figyelt alaplapon (8237 DMA csip). Ma azonban (a First-Party DMA) maga az OS Rendszer és a külön bedugható modern Bővítőkártyák (Pl egy roppant modern LAN kártya is) hozhatnak magukkal saját, nyákjukra rápakolt privát Master DMA Raktárost aki írósdit játszik buszon. Amikor ezek a lapok versenyeznek az Arbitráción egyszerre csatáznak a RAM írás jogáért is az alaplapon."
    },
    {
        id: 303,
        topic: "Háttértárak",
        question: "Igaz-e, hogy ZBR (Zone Bit Recording) esetén a külső sávokban több szektor található, mint a belső sávokban? (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "A ZBR pontosan ezen a matematikai törvényen, a kör kerületének tágulásán alapul: a belső sávoktól kifelé a tányér pereme felé sokkal több, de azonos felületü, megegyező fizikai méretű szektort tesz egymás után folytonosan felszámolva a halott/pöerhékeket!",
        monkeyExplanation: "Egyszerű középiskolás geometria zseniális beépítése az iparban! Minden régi Winchester fájl lemez egy KÖR alakú lap tányéron. A haglemez közepe egy rövidebb kerületet ad, ott kevesebb mágneses pöttyke (adatlap-szektor) fér el egy fix vonalban rajzolva. De ha kinézel a bakelitlemez szélére... ott a kiterjesztett kerület már óriási sávval bír, így sokkal több hely adódik logikailag egymás után mágnesesen besűríteni a fix 512 byte-os dobozos szektorokat a végtelenre nyúlt sávba (A ZBR így oldja ezt fel pazarlásmentes dinamikus osztással szektorokra!)."
    },
    {
        id: 304,
        topic: "Architektúrák",
        question: "Igényvezérelt (Demand-Driven) modell végrehajtási feltétele",
        answer: "Csak azokat a műveleteket hajtja végre, amelyek a végeredményhez feltétlenül szükségesek",
        explanation: "Programozásból simán csak 'Lusta (Lazy) Kiértékelés' gyanánt fordítják. A kód egy logikai gráf, ami ha nem igényled a végső kimenetét, hozzá se nyúl semmihez, ha kérik, csak azokat az egyenletekez göngyölíti ki amivel megkapja az inputját a feladatnak.",
        monkeyExplanation: "Ahogyan feljebb rögzítettük (Demand-Driven Modelles): Csak és kizárólag azt a sort/műveletet hajlandó leizzadva hardveresen kiszámolni a vas logikája, amit már Tényleg Kiabálva követel tőle maga a végeredményt megjelenítő vagy tárokozó parancs! Rettenetesen 'Lusta' elven pattan, minden kiértékeletlen mást ignorál, semmiből nem csinál felesleges leltárt magától elébe menve a gráfban ('Lusta kiértékelésnek' / Lazy Evaluation-nak hívják ezt az iparban modern nyelveken is)."
    },
    {
        id: 305,
        topic: "Virtuális Memória",
        question: "Inverz laptábla elengedhetetlen mezői",
        answer: "Valid bit, lapsorszám, mutató a következő hash értékű bejegyzésre",
        explanation: "A fizikai memóriával arányos méretű Inverz laptábla alapja a Hash számolás. Mivel a sűrű memóriák és a matematikai ütköző Hash kulcsok összeakdhatnak ugyanarra a fizikai keret indexre, ezáltal a láncolt lista építéséhez és lekövetéses kereséséhez mindenképp kell ide egy mutató is!",
        monkeyExplanation: "Mit tud csoda gyanánt az Inverz Laptábla? Az Inverz virtuális matekban ha két külön szobából is pont ugyanazt a nevet s címszót kiabálják be egy ablakon - nem tudod ki volt (Két külön Virtüális memóriacím le-hash-elése pontosan ugyanarra arra az 1 adott index értékre jön ki véletlenül - 'Cím Ütközés' s laphiba történt a varászlásban). Ekkor az első tárolt cím mellé be kell fűznöd LISTÁBA (Láncolt Lista pointer gyanánt a C szoftverből) a masodikat s utána arra is egy nyílt bigyeszteni! Ez a Pointer lánc oldja fel vasban az emésztő sűrű hash ütközéseket inverznél."
    },
    {
        id: 306,
        topic: "Virtuális Memória",
        question: "Inverz laptábla jellemzője",
        answer: "Mérete a fizikai memória méretével arányos",
        explanation: "Míg egy processzor Laptörténete a virtuális 32/64b címek eszement lineáris gigabajtejából emészt el brutál sok RAM-ot hiába ha pl csak 4GB fizikai RAM van a gépben, az Inverz tábla trükkje, hogy ő 1 kerethez (meglévő fizikaihoz) dob hozzá bejegyzést tehát picike marad aszerint mennyi is a Ram magában!",
        monkeyExplanation: "Ez volt a hardveres okosság alapelgondolása (még ha cserébe picit lassult is tőle a TLB Keresés iszonyatos indexelésével)! Egy Processzor rendes Laptáblje a virtuális OS címek elborult (több tíz giga) kiosztásából adódóan több gigabájtnyi iszonyatosan drága RAM-ot foglalana le maga asztali indexmutatóknak is RAM-ban (pazarlás). Az Inverz Laptábla azt mondta: 'A haver gépébe összesen csak 4 GB memória RAM modul van dugva... Akkor szimplán generáljunk pontosan annyi tételű 4GB fióknak laptáblát méretben s írjuk bele mi mutat rájuk'! Ekkora területet fog spórolni pici okosságan a roppant vékony virtuális tengerhez képest arányban."
    },
    {
        id: 307,
        topic: "Perifériák és Buszrendszerek",
        question: "Jelez-e a DMA vezérlő minden egyes bájt sikeres átvitele után megszakítást? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Szétszedné egy Interrupt storm a CPU-t! Pont az volt a lényeg, ha valami 10.000 adat block átvitel, a DMA felparaméterezése után egészen az UTOLSÓ bájt és az egész teljesítéséig kussban és önállóan masíroz a vezérlő a háttárben!",
        monkeyExplanation: "Teljesen hamis állítás (sőt szikrázna egy perc alatt Kék Halálba az OS és leállna a Youtube is videó közben a megakadástól tőle)! Egy pici 1 gigaByte hálózati letöltés áthelyezése DMA-val kb 1 Milliárd Bájt lépése a kábelen is az OS szintjén! Ha minden 1 db lementett kisbetűnél egy pici 'interrupt ordibálás' lökés és 3 utasítás magmegszakítás futna meg dőlve a drótra az agyig s kernelt is felébresztve... A Processzor menten belevágna az asztalba és beállna tőle a tehetetlenségbe a megakasztástó! A DMA feltöltődik indulási paraméterekkel s csendben teszi a dolgát, s CSAK a leghátsó milliómónodik adat bájt lerakása után fogja először felemelnia Kezét a CPU felé ('1 Interrupt van: Kész Vagyok a Giga Filelal!')."
    },
    {
        id: 308,
        topic: "Háttértárak (RAID)",
        question: "Kellően nagy mennyiségű adatra vonatkozó olvasási művelet gyorsabb RAID-5-tel, mint egyetlen diszkkel. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Mivel 4 merevlemezes RAID-5 nél az 1 paritási csíkon túli maradékról 3 diszk fizikailag szétosztva (Striping) képes olvasni, így a párhuzamosság miatt nagy fájlok felolvasása az adatbázisban megtöbbszöröződik RAID-en!",
        monkeyExplanation: "Ahogy neked sem mindegy, ha felkészülve le kell körmölni s gépelni egy 1000 oldalas paksamétát egyedül 1 asztalnál sima irótollal a vinyóra. (1 merevlemez olvasás tempója HDD-n). Vagy felhívhatsz, s behozhatsz magad mellé még 3 másik diáktársat is és letépitek matematikai felosztva egymást közt logikailag a 330-330-330. oldalakat a könyvből hogy párhuzamosan darálva tegyéteki ki az 1 filet (Striping / adatszétosztás csíkokba a vason)! Az elosztott mátrixú csíkozott videó fájlolvasás ereje az olcsó winchesterekből emiatt iszonyat sebességet dobva megöbbszörözödik RAid-5-ön is!"
    },
    {
        id: 318,
        topic: "Perifériák és Buszrendszerek",
        question: "Ki programozza fel a DMA vezérlőt?",
        answer: "A CPU",
        explanation: "Nem önálló entitás, az Operációs rendszer driverje által futattot CPU I/O megszakításai regiszterelik fel a Forrás, Cél és Méret bájtok megadásával a vezérlést indulásnál.",
        monkeyExplanation: "Ez egyérteműen az OS-en belüli Mag, azaz az Operációs rendszer driverje által futattot A CPU I/O megszakításai paranccsokkal (Memory Mapped vagy nyers Out utasitásokkal) regiszterelik be fizikai tranzakciókbál a Forrás RAM, a Cél RAM és az adatmennyiség paramétereit a vezérlóben a 'DMA chip felprogramozása és indulása alatt' pillanatnyilag."
    },
    {
        id: 319,
        topic: "Architektúrák",
        question: "Kiolvasható-e párhuzamosan az adat és az utasítás a Neumann architektúrában? (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Szekvenciális! Minden (Kód, Adat, Utasítás, Operandus) abban az 'egy-nagy tál' Közös memóriában és Közös vezetéken él! Fetch fázis es Memória fázis közt ha kell a busz azt ki kell várni egy lépcsőben mert a dugó beáll - csak a szeparált 'Harvard' típus engedte az egyidejűt el.",
        monkeyExplanation: "A legősmagyarább s tisztes von Neumann arhitektúra alapelve volt, hogy rendkiül vas spórolos legyen: EGYetlen nagy tálból szedett minden Processzorfázis magának levest (A kódot is és az feldolgozandó Matematikai adatot is 1 sima címtéren és 1 db gyüjtősín Buszon rángatott ki onnan a CPU)! Ha 'Fetch' megkezdődött, utána egy órajellel később ID-nél hiába nyúlt s írt volta RAM-ba az utána lévő feladat 'EX-e' az ALU szálon... várakozik elakdással szinkron holtidőbe bukva mire az buszcső fellélegezik (Van Neumann szűkítés palacknyaka) s memóriát tud tölteni adatként a kövi ciklusban kétajtót nyitva!."
    },
    {
        id: 321,
        topic: "Virtuális Memória",
        question: "Laphiba esetén a futó program olyan keretre hivatkozott, amire vonatkozó információ nincs a TLB-ben. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Vigyázzunk vele! Ha csak a TLB-ből (az L1 címfordító cache-ből) esett ki vagy sem volt ott bejegyzés, az pusztán 'TLB Miss (TLB hiba)' mely max. ezer órajel-delay-es belső esemény RAM olvasással. Ez semmiképp NEM egyenlő millió ciklusal küzdö és merevlemez olvasásos LAPHIBA / Page Fault státusszal!",
        monkeyExplanation: "Dehogyis, az megközelítőleg sem egyforma szívbaj operációs szinten gépnek! A 'Laphiba (Page fault)' a szoftveres Windows file-manager rémálma és iszonyat lassú. A gép TLB-je (A procid leges-legféltettebb ici pici Zsebkönyve amiben olykor max csak pld 32 leggyakoribb fordítátási memóriacímet jegyez fel magának fejből 1 nanomásodperces késéssel). Amikor abban nem dereng neki a keresett cél utca (Cím Miss történik feloldásnál) a cache-ben, egyszerűen 'TLB hiba' üzenet lök ki s kisétal a Lassú külső nagy RAM Táblákhoz és lehozza egy nyers utcanév->gps fordítást magának egyedül felétve. Lófütykős delay a hardvertéboly Page Fault hdd-túrásához mérten!"
    },
    {
        id: 322,
        topic: "Virtuális Memória",
        question: "Laphiba esetén a futó program olyan lapra hivatkozott, ami nincs bent a fizikai memóriában. (Igaz/Hamis)",
        answer: "Igaz",
        explanation: "Valóban, a progi a kiosztott OS LBA alapján validnak hitte, de az az adott keret (Lap) korábban a Swap-belett dobva a háttér és memóriakezelő által, azaz nincs fizikailag RAM chipben, várni kell mígy HDD felolvasás után helyrekerül.",
        monkeyExplanation: "Telitalálat! Te csak egy szoftver (C# Programozó) vagy a folyamatban s kiadod a virtualis utasítos cimedet a gépnek hogy 'Olvassam vagy Írhassam be!' (De te nem tudhattad... hogy amíg a szoftvered percekig a háttérbe volt elnyomva lökve ikonba az OS kernel Memóriamenedzsere (Windowson pld a 'Paging file') letolta s kimentette a te teljes Excel futásod celláit és képét byte-okban le a Winchester/SSD tárolójára hogy felszabaditson helyet valami ujabb CS2 játéknak RAM-ban 'SWAP/Lapcsere'). Rákattintasz az ikonra s futtatsz megint... a Vas olvashat... s észleli hogy üres lett onnan a virtualis címre nézve a fizikai memória lapja s Nincs fent a RAM-ban! LAPHIBA kivétel fut be s megszakít minden CPU órát, kernelt betőkít s fáljból másolta elöször a ram-ba azt a te gánya dolgaid!"
    },
    {
        id: 401,
        topic: "Háttértárak",
        question: "Mely három koordinátával azonosítunk fizikailag egy szektort a merevlemezen?",
        answer: "Cilinder (C), fej (H) és szektorszám (S)",
        explanation: "Ez a klasszikus CHS geometria leképezése, ami konkrét a fizikai valósága a forgó diszknek. Bár napjainkban a Windows már sorfolytonos lineáris LBA címzést használ, az e mögé rejtett HDD lapka mikrokontrollere továbbra is a 3D-s CHS koordinátára fordítja vissza a jelet kereséskor a motornak és a fejnek.",
        monkeyExplanation: "Ahogy egy nagy városban a postás sem csak úgy vakra keresi a házadat. A klasszikus merevlemezeken is a három legpontosabb 3D GPS koordinátával találják meg a fizikai file-t forgás közben: Cilinder (Melyik körív / városrész magassága), Head (Melyik fizikai olvasófej az emeletes több lemezes tányérokon / melyik emeletes ház) és Sector (az adott emeletes körpályán belül hányadik bit-kocka dobozkája az a tied). Ez a CHS koordináta rendszer, amiből a belső elektronika vezérlő mikromotorja tudja, pontosan hova álljon."
    },
    {
        id: 406,
        topic: "Architektúrák",
        question: "Mely információfeldolgozási modell támogatja a párhuzamosság automatikus felderítését?",
        answer: "Adatvezérelt (Data-flow) és Igényvezérelt (Lazy)",
        explanation: "Mivel ezen logikák nem egy Neumann-féle programozói lineáris sorrendet kényszerítenek, a compiler grafikus és halózat modellé bontása (Precedencia gráffá) láttatja a tranzisztoroknak, hogy az adatok megérkezése után azonnal párhuzamosan akár 9 szál is indítható anélkül hogy Thread() parancsot kéne gépelni.",
        monkeyExplanation: "Képzeld el, hogy a programkódod egy legó-összeszerelési rajz. A korábbi Neumann procedurális nyelveknél te írtad le szó szerint sorszámozva, hogy 'Várj az első emberre, míg megépít a kereket!'. Ezzel szemben a Data-flow s az Igényvezérelt gépeknél a compiler és a processzor eleve felrajzol egy teljes kapcsolati Gráfot magában (Mátrixosan). És ha 6 különböző levél van a gráfon a hierarchiában... a gép hardveresen s szoftveresen azonnal meglátja, hogy 'Hé, ezt a 6 kereket párhuzamosan s függetlenül is elkezdheti számolni 6 magunkon!'. Nem kell külön Programozói 'Párhuzamosítási' varázslás ('Explicit thread' gépelés)... a gép teljesen automatikusan hajtja azt párhuzamosítva a független Ágakon feltérképezve!"
    },
    {
        id: 408,
        topic: "Háttértárak",
        question: "Mely mezők képzik a merevlemez szektorainak részét?",
        answer: "Hibajavító kód (ECC), hibadetektáló kód, szinkronizáló előtag (GAP stb)",
        explanation: "Bár csak 512 bájt egy szektor tiszta adattartalma amit te felolvasol, fizikilag a mágneses tányéron rengeteg mikró sáv-felület fedi le: az elszeparáló GAP körívek, és a hibákat egyből matematikai alapon javító gigantikus ECC bitek, hogy a pormentes doboz hibáit a gép korrigálhassa.",
        monkeyExplanation: "Amit te a Windowsban egy fájlnak látsz a szektorban (Pl. 512 Bájtos tiszta adat darabja), amellett fizikálisan ott hever egy óriási rejtett felszerelés is a lemez szektorának csíkján kifalcolva az átlag programok elől! Ott van a GAP (Üres fizikai helykihagyások és határolók a lemezen iszonyatos üres bites hézagokkal, hogy a vezérlő és a mágnesfej fel tudjon venni egy biztonságos tempót vagy pihenőt), és ott terülnek el a hatalmas hibajavító Matematikai bitek csomagjai is (ECC és Hibadekódoló Checksum), amikből rögtön megmondják s visszaállítják a bitminta sérülést, ha megkarcolta egy apró mikropor rés a drága lemezt a dobozban az életed mappájánál! Tehát csomó láthatatlan rezsiköltsége van egy pici 'J' betűnek a puszta lemezeden!"
    },
    {
        id: 411,
        topic: "Perifériák és Buszrendszerek",
        question: "Mely PCI busz jelzések osztottak (nem dedikáltak)?",
        answer: "A címzésre és adatátvitelre használt A/D vonalak",
        explanation: "A régi szélesszalagos PCI legfőbb szűk keresztmetszete volt a Multiplexálás: az Óriási memória adat, és a memória-Cím pointerek is pontosan ugyanazokon az fizikai Address/Data processzor rézvezetéketeken nyomakodtak át, ami brutális szál-veszteségekkel járt.",
        monkeyExplanation: "Képzeld el a régi ócska alaplapokat (a széles, klasszikus PCI kártyákat beleműtve), mint egy szűk egyetlen bemeneti kaput a stadionhoz és a Pénztárhoz: Mindenki EGYETLEN Csatornán próbált bemenni. Ha a CPU be akarta mondani hangosan, hogy 'Hé Címezés! Az X. memóriacímre mondom be... kérek adatot' (ez a Címzés/Address fázis), akkor ugyanazon a rézvezetéken s pineken kellett egy sorrral kiabálnia, mint amin UTÁNA beállva a Tényleges Filmet s Adatot is lehányták róla vissza (Data transzfer)! Ez a közös, 'Megosztott / Közös A-D Vonal' brutális szűkítő keresztmetszete volt a korai gépek PCI-s buszának, mert nem mozgott egy időben a Cím mutogatása a robusztus Adathalmaz húzásával. Ciklusokat zabált üresen e multiplexálás."
    },
    {
        id: 413,
        topic: "Processzorok",
        question: "Mely pipeline fázisok végeznek munkát egy ADD (összeadás) során?",
        answer: "ID (dekódolás), EX (végrehajtás), WB (visszaírás)",
        explanation: "A Klasszikus 5 szakaszól a következők hiányoznak: az utasitás letöltése után az ID fázis felismeri a parancsot. Az EX(ecution) modul az ALU hardveren kiszámolja. Mivel nem kell a memóriából adatokat betőléni, a MEM(ória olvasó) fázis kimarad, amiból a WB (vissza a regiszterbe mentem az eredményt) szakasz rakja pontot a feladat végére.",
        monkeyExplanation: "Mit csinál egy gépi nyers 'Összeadás (ADD)' a Futószalagban (CPU Pipeline magján)? 1. Dekódolja, hogy 'Aha, te a PLUSZ jelet akarod tőlem mátrixokból, értem a műveleti kódot' (ID szakasz). 2. A számoló logikai kapu ténylegesen összeadja a tranzisztorokkal: '2+2=4' (EX szakasz csinálja az ALU-n át). 3. Végül visszaírja az eredményt a lapra a belső chip-regiszterbe villámgyors SRAM-ban (WB szakasz). ... A lényeg: MIVEL EZ CSAK tiszta matematikai művelet volt magban lévő regiszterekkel (akkumulátoros összeadás), esze ágában sem volt a gépnek kimennie a láncon a lassú Rendszermemóriába valami puszta fájlért / blokkért keresgélni! A lassú (MEM / Memória adat eléréses) fázis csupán kihúzott holtidőként 'kimarad / tétlen átfolyik' egy Add logika futása alatt olyankor!"
    },
    {
        id: 414,
        topic: "Processzorok",
        question: "Mely pipeline fázisok végeznek munkát egy LOAD (betöltés) során?",
        answer: "ID (dekódolás), EX (címképzés), MEM (memóriaelérés), WB (visszaírás)",
        explanation: "Teljes hardveres futószalag leterhelés. Miután az EX fázisú modul ALU számoló egysége kiszámítja memóriaparaméter eltolással a végleges Cél-címet a RAM-ba, kötelező utána a MEM szakasznak kiszedni azt az SSD-ről/cacheből és a WB szakasznak fizikailag letenni a processzornál lévő kis Regiszterbe!",
        monkeyExplanation: "A 'TÖLTS BE ADATOT A RENDSZERBŐL!' (Load utasítás) memóriaparancs a futószalagon már jóval összetettebb! 1. Felismeri az ID dekódoló: 'Hoppá, cimet kell túrni s behúzni kívülről'. 2. Az EX (Számolási) szakasz most nem oszt/szoroz feladatot kapva sűrűn, hanem ő kikalkulálja papíron kőkemény matematikával az 'Utca GPS számát (Valós Címet a gépben eltolásokból)' a Regiszterekből bázisul vett címmatekból. 3. És ITT a lényeg a fentivel szemben a memóriánál: Kilép a valós világba (Aktív a MEM szakasz a csővégén), és ténylegese letépi a Lassú Adat blokkot az asztalról/Cache-ből behozva beolvasásra. 4. Majd eltárolja azt a roppant drága leletet a végső menedékére a lapka belső CPU Regiszterébe egy belső WRITE-szal (WB). Végig kényszerült érni az összes szalag szekción a csőben ez az utasítás!"
    },
    {
        id: 420,
        topic: "Perifériák és Buszrendszerek",
        question: "Mely tulajdonságok jellemzik a PCI Express-t?",
        answer: "Soros átvitel és pont-pont közötti kapcsolat",
        explanation: "A neve megtévesztő lehet. A 21. századi legkorszerűbb csatlakozó is dobta a hatalmas tüskés párhuzamos adás-trükköt interefernciák miatt! Helyette elenyészőbb de kegyetlenül magas órajeles és differenciális Soros (Serial - Tx/Rx) kábeleken beszélget dedikált Switch kapcsolódáson át áttörve a korlátokat!",
        monkeyExplanation: "Megtévesztő név lehet a világban! A modern PC-k elárulták a nyers drót-párhuzamosságot a sebességük oltárán! Míg a régi PATA s IDE kábelek 32 centis vastag szürke kötegei Párhuzamosan, 'egymás mellett azonos időben' lökött jelt próbáltak nyomni... rájöttek a mérnökök, hogy 1 GHz felett ezek a drótok iszonyatosan bezavarnak Elektromágnesenes-Interferenciával (EMI áthallással) egymásba s szétcsúszik bit órajelük aszinkronba. Így a király, PCIe lapka egyszerűen csak fog pár piszok vastag izolált érpárt... Sorba tette rá löketszerűen (Pusztán Soros - Serial TX/RX bit-vonalú megoldással) az 1-es és 0 logikát, és szörnyű magas sok gigahertzes villám-órajellel belőtte dedikált, zavarmentes Pont-Pont (P2P Switch) kapcsolódáson át! Egymagában ledózerolta az átviteli korlátokat ezzel a 'soros' visszalépés trükkel."
    },
    {
        id: 421,
        topic: "Perifériák és Buszrendszerek",
        question: "Mely USB módok nyújtanak hibamentességi és késleltetési garanciát is?",
        answer: "Interrupt és Parancs (Command/Control)",
        explanation: "Az USB ezen protokolljai olyanok, amik nem csak CRC checkal feladjak a jelzéseget (garantia), de még egy kereten belüli Fix sávszélességet is magukévá tesznek időzítés gyanánt - ami pld. az Egerek és Billenyűzetekhez kulcsfontosságú! (Az Isochrounus pld nem hibajavít; A Bulk meg nem garantál késleltetést)",
        monkeyExplanation: "Amikor te mozdítasz egy lehelettnyit a drága Gamer egereden USB-n, vagy gépelsz (Interrupt Módú Adattovábbítás)... a gép és az USB keretütemező garantálja s megígéri neked: 'Bármi is folyik s tölődik le hálózaton (még ha pendrivot is másolsz a másik kapunk orrba-szájba s zenét is hallgatsz nyomatva egy DAC-al), ÉN VIP SZOLGÁLTATÁSBA BETESZLEK S FIXEN KIKÉRDEZLEK TÉGED X MILLISECUNDUMONKÉNT, ÉS AZONNAL PONTOS MEGBÍZHATÓ ÉRTÉKKEL ADOM ÁT AZT A GÉPNEK!' Sem késleltetés és Laggálás (Garantált az idő válasza a polling dedikált ablival), sem hibás szakadt zaj jel nem jöhet be! Ez a legszigorúbb VIP menedzselt részlege az USB-nek (kistestvérével, a pendrive beazonosító Inicializáló Control-Command transzferrel egyetemben)."
    },
    {
        id: 422,
        topic: "Processzorok",
        question: "Mely utasítások használják az ALU-t az EX fázisban?",
        answer: "Aritmetikai, store és load utasítások",
        explanation: "Sokan bele is buknak, mert a mentés hallatán egyből a Winchestrre asszociálnak. A Store / Load esetén a mutató cím indirekt (Base Register + 4 bájt memóriaugrás offset), amit a processzor az EX modulú (Matemtika és Logika ALU) alegységeivel számoltat ki a regiszterékbe - mielőtt kimenne a valós világba az adat!",
        monkeyExplanation: "Programozás során sokan bele is buknak ezen feladat kapcsán, mert a RAM mentés/töltés utasitás olvadán hallatán egyből csak a memóriához nyúlásra, merevlemez drótra asszociálnak az EX fázisban! A Memory Store / Load utasítások esetén (Bár az adat cseréje kint van)... Maga a pointer 'mutató a címéhez hardveresen' rendkívül sokszor indirekt memóriaszámításos! (pl. 'Base Register + egy fix 4 bájtos indexelési memória offset + array tömbcím korszorzata egy loopban'), Amit a processzornak brutálisan az EX modulú belső keményvonalas (Matemtika és Logika ALU) alegységeivel kell legelőbb kiszámoltania és hozzáadnia az ALU fiókok s gatelek révn... sokszor még azelőtt, hogy egyáltalán pontosan tudná MELYIK fiziki fizikai MÁtrix cellához kell ugrania a cache-vasba megírogatni azt az adatra!"
    },
    {
        id: 424,
        topic: "Memória technológiák",
        question: "Melyek a DDR2 SDRAM jellemzői?",
        answer: "Az órajel mindkét élén visz át adatot, külön külső/belső órajele van és frissíteni kell",
        explanation: "Mivel mezei DRAM struktúrát rejt, Dinamikus frissítése a mai napig maradt, a korrektebb Double-Data-Rate pedig azt hozza magával hogy a le és felfutó buszfeszültségen (órajelenként) összesen már 2 transzakciót eröltet a buszokra, míg a belső drága magnak lassan üzemel magában prefetch tárolókkal.",
        monkeyExplanation: "Mint ahogy régebben is csepegtettem az 'SRAM-a trükkös, DRAM-pedig egy rossz ementáli és állandóan lassan csepeg le belőle a tartalom' elveket! A DDR2 (és a követői D3, D4, D5) valami őrült elmezavart sebességen pörgő (Double Data Rate azaz kétszeri órajel transzfer) busz-áramkörök a gépben (ahol is a sín órajelének felfelé ÉS lefelé csapódó logikai kapu feszültségénél IS 1-1 felpattintott, azaz 2 transzakció adat fut áramként)... de mindez csak a NYÁK csatolóbusza kívül a magtól! Mert alul a műanyagburk alatt A belső legkisebb MAGJA ezen chipeknek még mindig az a csigatempójú 'folydogáló lyukas poharas kapacitáskondenzátor (Sima öreg I/O DRAM analóg töltésmegtartó logikával)' maradt szántszándékkal aki olyan lassú szegény... hogy kőkeményen MÁSODPERCENKÉNT Frissíteni (Refresh) is kell elveszni akaról töltésüket - de sokszorosan előre is belsőleg ('prefetch FIFO tárakban) kell izzadva összekaparnia az árut 4 vagy 8 bitesével a magok közt szinkronizálva... hogy egyálttalán külsőleg sűrítsék ezen leolvasási veszett hiányosságukat és megtudják tolni azt a rettentő gigahertzes külső adat-busz falán a CPU fele."
    },
    {
        id: 426,
        topic: "Processzorok",
        question: "Melyek a statikus elágazásbecslési eljárások?",
        answer: "Mindig ugrás meghiúsul/bekövetkezik, vissza ugrás esetén bekövetkezés",
        explanation: "A processzor pipolinja beletorpan ha egy Elágázás (IF/While) sorsához ér! A belső 'ág jóslásoknak' nem kell mindig az AI tanulásra és dinamikus regiszter-cachekre támaszkodnia. A faékegyszerű s hardverbe égetett 'Statikus Becslés' kőkemény kódolt logika: Pld. a kód 'hátra ugrásai' rendszerint For-Ciklusok, tehát 90%-ban IGAZRA értékelödnek mikrokódban is gépészkedve.",
        monkeyExplanation: "A Fix Statikus (áramkörbe öntött elvem kőbe vésett de nem tanuló) hardveres ágbecslési elágazások pipolinjánál olyan mintha egy rendkívül durva tapasztalati előítéletes portással futnál össze szalag végén: Ha egy utasítási mutató (Instruction Pointer Címlistában futáskor olvasáskor) mondjuk visszanéz vagy visszakúszik egy logikai pultra / egy picit régebbi korszámba (magyarán a gépi kódod fizikai 'Hátra' Ugrik le magába a szalagkód indexéhez képest lejjebb), - - A gép beléégett gyári 90%-os zseniális trükkös valószinüségi észrvéttele megtippeli vakon a szalag folytassát: 'Ó barátom, biztosan tudom, ez sziklaszilárd, hogy egy folytonos FOR / WHILE visszatartó Programozói utasítás hurok'... S azonnal, a kiértékelés hiányában is (feltételezve magát vakon) fogja magát s AUTOMATIKUSAN IGAZRA értékeli ('Kövessük hátra ugrást egyből') - Betöltve a mögötte álló teljes paksaméta utasitást is tovább víve azt az Execution Csőben egyből anélkül hogy tudná meg-e teljesült e egyáltalán egy IF(igaz) kitétele! És ez működik (legalábbis addig a ritka pillanatig míg vége nem szakad valósan s HAMIS lesz egy ciklusal a for ciklus)!"
    },
    {
        id: 427,
        topic: "Háttértárak",
        question: "Melyek a szektor olvasási kérés teljes kiszolgálási idejének összetevői?",
        answer: "Parancsfeldolgozás, seek idő, forgatási idő, adatleolvasás és interfész átvitel",
        explanation: "A lassú Winchester útja: IO Parancs sorbaállása a kernelben -> A Fizikai mikromágneses fej oda lendül a cylincerre (Seek) -> A HDD fém-lemez percekig lassan alá forog (Rotational delay) -> A Fej kiolvassa a bitek analog jelzését (Leolvasás) -> Majd a SATA busz kábellel visszaküldi az adatkártyán át az alaplapig (Transfer rate).",
        monkeyExplanation: "Te csak azt a végterméket látod pofonegyszerűen egérrel, hogy na kettőt kattintasz a videófájlon - mire gép felpörgeti lassan a lemezt és kicsit homokórázva lassú a Windows régi C: HDD meghajtója az indításra várva! A merevlemez tokjának zárt motorháztetője alatt azonban iszonyatos logisztikai izzadság indul ilyenkor: 1. A Windows Rendszermag Driverje befogadta a filekérést (Kernel Parancsdekódolás s Számítás CHS-re az OS részéről idejüket szánva rá). 2. Majd A fizikálisan le-fel mozgó kar s tű a forgó lemezen motorikusan egy iszonyatos finom s óvatos reccsenéssel oda rántja az egységet (Maga fej a kerület fölé áll logikusan lendítve a szervóból -> Ezt hívják Seek / FejKeresési Időnek magában). 3. Magának a nehéz olvasandó FÉMTÁNYÉRNAK (s rajta az adatodnak percdarabkának is motorikusan alá is kell még fordulniuk forogva olyankor az ISTENADATA FIXÁLT FEJ ALÁ a beolvasás 'Kezdő Szektorához'! (Forgatási várakozás 'Rotational delay késleltetés a lemez s mechanika miatt). 4. Na MOST egyáltalán a legvégén, miután ezen ezer lépésen átmentél, MOST engedélyezi fizikálisan az olvasófej eléréseibe merülni és megkezdené beolvasását általi Analóg kiolvastatást induktívan. 5. S VÉGÜL ezen a kibogzott dekódolt mágneses 1-es és 0-ás bites szűrletnek le is kell utaznia s csordognia a vékonyka kábelek (SATA Serial Interfész) szűk csövein gigabyte os sebességről adatkezelőn keresztül alaplapodig pufferen átt... Láthatod, ezen mozgó s analóg elavult alkatrészek (a 2. és a 3. lépés drága elcsúszási körei) rágja föl mindennél drasztikusabban és zabálják szét sivatagként a lemezed hatalmas GigaByte / szekundomos papirokon mért szűz adatát a lomha vinyóban."
    },
    {
        id: 428,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Melyek az SSD-k legfőbb technológiai korlátai?",
        answer: "A lapok írási száma véges, a törlés pedig csak blokk szinten lehetséges",
        explanation: "És pusztító 'Eradication' nélkül Flash-re nem lehet Irni! Nincs rajta 'Helyben újraírás'. Egy lap tartalmát ha módosítód Windowsban, az FTL firmware a háttérben a teljes 256.000 bájtos BLOKK tartalmat kimenti áttölti máshova, egy feszültségbombávall letöli a régi fizikai területét, s immáron 'üresen' beleírja a teljes cuccot az új friss bitel - Ezt hívják Write Amplification-nak, és ez magában garantált cella-égetéses halálhoz vezet.",
        monkeyExplanation: "Halottak vagyunk de égetettek is a Flash NAND cellák esetében ha SSD-ket dobunk gépbe hosszútávon állománycserélésre! Mikor megveszel pld. egy telefont, s írni / szerkeszteni fogod a képeit folyamatosan: az SSD nem egy sima Excel amit csak úgy sorban satírozol majd egyetlen byteon! Ahhoz hogy te egy PICI Betűt (egy sima megváltoztatott bit cellát) felülírva újdonszóra le akarj rakni egy meglévő (Nem Szűz) Teli Flash cellába, de nem is üres helyre módfelett, ... EGY IRDATLAN NAGYSÁGÚ Tápellátási-Feszültségbombával totál 'NULLÁRA / ÜRESRE KELL SÜTNI (ERADICATED CLEARING / ERASE)' az illetékes gigantikus, óriási sokszáz-ezer lapból álló teljes SSD BLOCK területet árammal pörkölve egybeletörölve! Ezért (s mivel a HDD ilyet nem csinál), amíg te Windowsban fájlokat szerkesztgetsz... a belső okos Flash kontroller FW (FTL chip SSD-n) a háttérben folyton logikázza a maradék 'Érvényes' letett biteket, átnyomja szegény cellákat a memóriamásoló csip részlegére elmentve s áramoltatva ... csak és azárt hogy egy hatalmas feszültség villanással ropogósra égessen / letöröljön s reseteljen mindent a 0 állapotba azon a sok lapnyi szektoros Blokk részen (Amihez volt szerencséje hozzá érni amúgy módosításnál gépnek is!), hogy te 1 byte-ot frissiteni és betudni majd a tiszta törlésre tudd! Ezt a hardvernyüstölést ami SSD siralomházba is lök idővel s degradálja 'Write Amplificationnek - írási SOKSZOROSÓDÁSNAK, vagy SÜTŐ ROMBOLÁSNAK' becézzük ami miatt véges olvasásuk lesz az évek során halálozott rottyantott tranzisztorok miatt NANDban)."
    },
    {
        id: 430,
        topic: "Perifériák és Buszrendszerek",
        question: "Melyik állítás igaz a kétoldali feltételes adatátvitelre (FIFO)?",
        answer: "Kiegyenlíti a fogadó ingadozó rendelkezésre állását és megszünteti az adategymásrafutást",
        explanation: "A memóriába épített szoftveres/hardveres ring puffer FirstIn-FirstOut logikája az, ami garanciával meggátolja, hogy egy túlbuzgó szélsebesen adatot dobál termelő (cpu program), és egy lassan fogyasztó s szaggató nyomtató közötti szinkron ne szakadjon szét (nem veszik e bitsorozat pld).",
        monkeyExplanation: "A Kényelmes aszinkron FiFo Buffer tárak és Pufferek 'Elsőként be -> Elsőkként Kidobva - Adatkezelő Csöve' avagy Tározója konkrétan azért is létezik s a legdurvább megoldás a buszok hardver-völgyeiben a PC lapján és buszán elrejtve, hogy NE menjen rá és szakadjon totál káoszra két iszonyatosan ELTÉRŐ időzítésű és teljesítményű alkatrész (Például egy Nyaggató Szélsebes modern Cpu Mester és az iszonyat lajhár USB hardver printer avagy Periféria egység közötti zsonglőrködés szinkronja) tranzakciókor megzakítások alatt! Olyan ez, ha belegondolunk reálisan, mint egy Gát és a hatalmas kinyíló Víztározó völgye a szakadó elszabadult hegyi folyó rohanása és a kis piszlicsáré vízimalom völgye alatt kieresztésként a faluban! ... Ha A gigahertzes 'Szikra CPU' lefordít pld egy 10 MegaBájtos masszív doksi feladatot rögötn gombnyomásra letéve le és felugrálva pattanva - a LENDÜLETES CBYTE csomagokat az okos hardver nyomja magából de a szegény rottyant 100kb/sec tempójú Nyomtató azt nem fogná fel magába semmit ebből az órajel bombából ha csak sima réz és sín kötné őket csomóba dróton 'Soha nem vágynak össze fázisban'. Ekkor A drága Ring 'Tároló Puffer Zsilip - FIFO verülete' mindent, a lendületes adatot is 'cudarul felfogja (Buffereli) és ELTAKARÍTJA RAKTÁRBA KONDENZÁTORON csőben a memóriába amig birja hekkelve be! És amikor csönd van... Ő kőkemény 'FirstIn - FirstOut' elven ahogy esett és rábízták a papírokat (nem keveri és forgatja mint az LIFO - ha már eldobta valami adatkezelést s roppant precízen megőrzödve a betű szekvenciát érkezésképpen sorba!), szépen s folyatva... cakk...cakk...cakk.. engedi tovább csurgani a kistempójú vas nyomtatói I/O regiszterének sávjaiba mindezt úgy lefojtava és stabilan aszinkronban is biztonséggal, mint maga az óramű tenné lógva az idő ingadozó bizonytalansága mellett hiba és egymásrafutás s összeomlás nélkül áthidalva e szakadékot a gépek korában."
    },
    {
        id: 431,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Melyik állítás igaz az SLC és MLC flash memóriák viszonyára?",
        answer: "Az MLC flash gyorsabban öregszik, mint az SLC",
        explanation: "Képzeld el hogy egy pohárban (Tranzisztor) eddig Teli / üres (1 / 0 vizsgált) szintet mértél. Ezen a ponton nehéz hibázni, ami nagyon stabil ős (Single Level). Ezzel szemben Multi cellában (MLC) 4 feszűltségszintből olvassa ki a komparátor mid is volt ott... pici anyag-fáradás s oxidáció esetén is rettentően hamar téveszt és elromlik (elöregszik).",
        monkeyExplanation: "Ezt tisztába tettük már s feljegyeztük amúgy Flash/SSD meghajtós elméletek közt az MLC szarvainál. A Sima (SLC – 'Egy luxus garázs cellában, és ott csak egyetlen egy pici vízcsepp s Bit logikai mérve egy csipben logikátlanul is luxusosan 1/0 letárolva egyből sima billenéssel) iszonyat sokba is kerül asztali gyártani s foglalja a nyákot, de cserébe ez a fajta 'Legbutább cella' a legstrapabíróbb s minden eddigi dolognál sokkal sziklaszilárdabban tároló flash memóriádat is szül gépben az évtizedek és az írások ezrei ellenére is kopás nélkül! Dehát mikor azonban a piac bedobja egekbe a kapzsi kapacitásokkal az Olcsóbb TLC (3 bit befésülve ugyanabba az egy parányi atomnyi szobás tranzisztorba s cellába egymásra kódolva 8 állapotul apró jelekből) pendrive és az MLC (Multi Cell) - avagy Quad drón SSD-ket! Ekkor a parányi nanocsip amibe már a lebegőkapura rápakolt ezer trükkel a Hardver magának próbál a fizika árammérőiben mondjuk 4 feszültség-állapot határt elkülöníteni pici szikrányira logikai bites számok leírattatására (Félig van tele vizzel?... vagy picit főlötte harmadával... vagy nullig?) pislákolva megkülömbőzeni az elektronikával logikai táblázatokból olvasva amiket Ő fejt meg a komparátorokban ... ... És Elég lesz erre csupán egy alig párszáz Intenzív 'Írást' vagy pörkölő letörlést kibírós kis fizikai oxidációs fém elfáradás s sérülés kopások azon a vacak tranzisztoron az irásoktól... ... S az apró sérültebb 'töltéstároló bödön szobácska' hardver vas innentől felmond s további életében már véletlen se tudja PONTOSAN letartani s kiszűrni milliwattos pontosággal a csíped olvaso áramköre hogy melyik feszültsség határ s állomás (A 0.. 1.. 2.. 3..) is volt meg azon az ablakon eredetileg tárolva - s igy totál félre-cimitolva adja vissza a sötétséget is (Rohadtul hamar elöregszik tehát egy sűrű Multi/Quad memória tranzisztor!) Ebből esnek a kimentett Csaladi nyaralás videó helyett rottyantott adat-bitszemét s elveszett lemezek szindrómái asztalon is ha sokat irtál a kis cellákra pár éves negyedév alatt agyonnyúzva pld egy NAS serveren MLC diszket!"
    },
    {
        id: 432,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Melyik architektúra esetén egyszerűbb feladat az utasítások dekódolása?",
        answer: "RISC",
        explanation: "A 'csökkentetés puritán' (Reduced Instruction Set) hardveres  assembly bitsoros gépi kód iszonyú fix geometriás! Mivel fixen például 4 Opcionális Bytes minden sor s a regiszterhosszak sem kuszákk, egy iszonyat ostoba de sebes dekóder fázis hardver mikromásodpercek aladt felépíti mi volt belekódova az ARM szervereken stb.",
        monkeyExplanation: "Gondolj bele: Melyik levelet könnyebb a Futárnak feldolgoznia? Egy olyat, amiben van egy ezer oldalas bonyolult jogi C/C++ szöveg regényként apró betűkkel (x86 / CISC gép) ...vagy egy olyat, amin fixen, egyenletesen és hatalmas betűkkel három szó szigorúan elhatárolva szerepel mindvégig (RISC gép)? A RISC dekódert könnyű a processzorba építeni hardveresen, mert a Bitsor/Utasítás geometriája és bitszáma puritánul kőbe van vésve, mindvégig olvasható és egységes. Pár apró áramköri Logikai kapu mikromásodpercek alatt kideríti mit is akar a utasítássor!"
    },
    {
        id: 434,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Melyik architektúrát nehezebb alacsony szinten (assemblyben) programozni?",
        answer: "RISC",
        explanation: "Kínszenvedés. Mivel nincsen 'komplex csomag', Nincs olyan ember, aki egy szimpla x86-os matrix szorzást vagy memcpy-t ami pld az intelben megvan, azt  kisebb puszta nyers Load, Store, Shift RISC regiszterutasítás variálásbol gépelné fel kétt ezer soros fájlba. Pont ezért emelkedett fel a C magasszintű Compiler e mögé.",
        monkeyExplanation: "Mivel butább s végtelenül primitív elemi utasításkönyvvel operál ez a vas: roppant kínos és hosszas a kódolónak (Assemblyben azaz legalja szintű gépi nyelven) kézzel összerakosgatni valami extrán érdemit rajta! Amíg az asztali Intel processzorán (CISC gép) pld EGYETLEN sornak kiadod szavakkal trükkösen, hogy 'Szuper-Összetett-Mátrix-Szorzás a RAM és Cpu között!' s dekódert végzi el... addig egy RISC telefon processzornál esélytelen ezt az 1 trükköt leírni. Olyan mintha sima Legóból egyedi fakockánként... több ezer darabos Load, Store s Shift alapgépi sorutasítások iszonyú garmadájából kéne összelapátolnod s emulálnod azt a bűvésztrükköt... rohadt fárasztó agymunka s helyigény feszültségileg!"
    },
    {
        id: 436,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Melyik blokkot választja ki az SSD szemétgyűjtője (GC) törlésre?",
        answer: "Azt a blokkot, amely a legtöbb érvénytelen (invalid) lapot tartalmazza",
        explanation: "Mint említve, az Over-Provisioning miatt van egy rejtett Garbage Collector ami maga töröl és pakol! Hogy csökkentse az SSD gyilkos Write amplificatiós 'átmozgatási kopást', igyekszik Firmware mélyen okosan olyan Fizikai Blokkhoz nyúlni miből a Windows számára 'valid' adatot eleve is minnium kell kimentenie a RAM-ba (s amiben minél több feketelistás kárpászott - TRIMelt s törölt lap gyűlt már össze).",
        monkeyExplanation: "Tudjuk, hogy nem simán letörölhető 1 kis gombos a nyákon az SSD szektoros Flash Cella része ha tele van. Ezért van a diszken a háttérben pörgő és adatokat mozgató 'Garbage Collector' (Szemétgyűjtő FTL firmware). De kit választ 'Pörkölésre/Törlésre' a gép? Mint egy raktárépületben a költöztető: Olyan Teli Blokkot pécéz ki lerombolásra egyben, amiben Látja az FTL firmware regisztreréből hogy 'Hopp, ebbe a blokkba a Windows oprendszer File-Törlésnél már kismillió apró cellát kidobott (Trim) szemét állapotra ítélt!'. Hisz a benne maradt Valid 'Jó' adatokat pörkölés előtt drága áramba s ramjába lementenie a chipnek önmagának... tehát sokkal jobb s gyorsabb olyat blokkot villánnyal ütni ami eleve Tele van használhatatlan adatszeméttel s üres. (Írási Sokszereződést akadályoz / kopást véd SSD-n)."
    },
    {
        id: 437,
        topic: "Memória technológiák",
        question: "Melyik cache írási politika vezeti át a változást rögtön a memóriába?",
        answer: "Write through",
        explanation: "Azonnali 'ÖMLESZTŐ' Irás! Így az elérés s a sebesség rettenetesen vissazmarad a cache képességeihez képest az állandó RAM írások miatt, ám a rendszer konzisztenciaszinte 100%-os marad (kettős chache-nél pld többmagos gépek szinkronizáció nélkül sem romlanak meg ha ki/be írnak)!",
        monkeyExplanation: "A Cache (Gyorsítótár) 'Write-Through' módja olyan az alaplapon, mint egy Szócső, vagy az Átfolyós vízmelegítő a csapban! Az adat ami ráesik (Processzor Kiment RAM-ba logikaként), azt a gép a maga privát s gyors L1 Cellájába felvésve AZONNAL minden teketória és késleltetés nélkül tovább IS szivárogtatja lassan lefele menet a végtelen Rendszermemóriába! Előnye: A RAM azonnal fixen naprakész lesz minden más gép s CPU szálakank is, 100%-os inkonszisztencia mentesség varázsa! Hátránya: Minden egyedi RAM írási ciklusa beakasztja a drága Cache-L1-et egy pillanatra s lefogja iszonyú lassan a processzor ütemezőt a 'lassú busz' várásakig."
    },
    {
        id: 438,
        topic: "Memória technológiák",
        question: "Melyik cache politika vezeti át a változást csak akkor, amikor a blokk kikerül a cache-ből?",
        answer: "Write back",
        explanation: "Csak az L Cache kapja meg az írást a prcesszortól, ami az un. módosított (Dirty/Piszkoskódként) van egy bittel felcimkézve - s a Processzornak ezt kötelező megvárni míg lementi szépen a lassú Memóriába ha pld  Sorkilökés (Egy másik adat bemásolódása s áldozatválasztás) érte azt e cache blokkot az életciklusa során.",
        monkeyExplanation: "Ez a drasztikus Ellentettje: a 'Write Back'. Olyan Cache modell, mint egy Raktározó és önmagába Duzzadó Okos Zsilipp. A Főnök (Proci s szál) leír egy friss változó adatot a saját szeparált apró és drága L1 Cache listájába... És a Cache CSAK PISZKOSNAK (Dirty Bit flagre állítva) cimkézi meg az állapotát azon az egy darab egy bites logikai fiókon s kész befejezi! ESZE ÁGÁBAN SINCS feleslegesen s egyenesen még le is írnia azt az alatta lévő egészen lassú Rendszermemóriáig megkötve a gépet (Várakozva)! Szikrázóan gyorsan szálad és pörög ezen megoldásban CPU. A RAM frissítése ténylegesen is CSAKIS csupán csak akkor lő ki ha... Valaki újat akar majd írni valaha arra a szűk kiélesített L1 cache konkrét cellára valamikort... s  olyankor az L1 vasnak is kötelezően kifogynia/kilöknie/lementenie kell lefele az értéket helyhiányból (ezt hívják Flush-nek)."
    },
    {
        id: 440,
        topic: "Háttértárak",
        question: "Melyik címzési mód rejti el a hibás szektorokat az operációs rendszer elől?",
        answer: "Logikai szektor címzés (LBA)",
        explanation: "Éppen azért zseniális a Logical Block Addressing, mert a klasszikus diszk vezérlő (Firware CPU) ezen álarc mögött a hardverre mélyen  talált karcos rossz 'Bad Block-okat' képes transzferálni egy rejtett fizikai biztonsági sávra s  OS Kernelnek (Windows) ebből semmit sem muszáj szoftveresen hibaként visszaadni a listázásánál!",
        monkeyExplanation: "Éppen ezért az okosságért zseniális dolog a modern diskek ipari LBA formátuma (Logical Block Addressing azaz Lineáris Logikai CMS Címkés Helykihasználása)! Amíg az ezer évvel ezelőtti IDE gépeknél a Bad-Sectorral karcos vagy besült memoria tranzisztorokat a Windowsnak és scandiskeknek is rettegve kerülgetnie s jelölgetnie kellet File elmentéskor küzdelmesen... Ma már az okos okos Flash Vezérlő ezen  egyenes álarc mögül simán, mélyen a szilicíumban a CPU teljes megkerülésével 'Hátulról, Titokban s önágloan is transzferálja hardveresen a rottyant fizikai 'bad block / tranzisztor szemetét' valami biztonsági pici rejtett extra flash-sávra (Over Provisioned area) pld az SSD nyákon'... miközben az asztali Oprendszerből és a vasból kifelé csak hazudik vidáman a kernelnek sorokból mint a vízfolyás: 'Tessék X. LBA blokk - Semmi Hiba, Tőkéletes szektor a Mentésednek Báttya!'. Az OS felé az SSD hibája pépként láthatatlanul simitva van szoftveres szinten!"
    },
    {
        id: 425,
        topic: "Architektúrák",
        question: "Melyek a Neumann architektúra fő komponensei?",
        answer: "Processzor, memória, perifériák és rendszerbusz",
        explanation: "Ez a szentháromság (Processzor, Egységes Memória, IO eszközök), amit később az ezeket egymáshoz drótozó sínek (Busz rendszer) egészítettek ki fizikailag. A leglényegesebb benne, hogy a Memóriában osztozik az utasítés a nyers adattal.",
        monkeyExplanation: "Miből is állt a Jó öreg Magyar származású Neumann János gigantikus építőkockás álma s klasszikus architektúrája csendben leültetve szálakon? 1. A Processzor maga (Agy s Vezérlő rész beintegrálva az ALU tiszta logikai részlegével egybe). 2. Rendszer-Memória (Az a Végtelenül nagy raktár ahová BEDOBÁLOD szanaszét eloszlott közös tálba egyben a parancsos Forráskódot magát s azt a VÁLTOZÓ Adatot is amiért kiszámolják pld (Ezt 1 darab szűk főkábelen és kapun át!) ). 3. Perifériák (A Kijelzők s Billentyűzetek gyanát a 'Kimenet' s Kapu rendszerei az amugy süket hardwarel-vasnak a halandó programozókkal). Külön pikantéria olykor, hogy egyes irodalomban a Közös 'Rendszerbuszt' is beteszik hivatalosan negyedik összetartónak ami fizikailag egyetlen adat-szálként oly szűkén rágta össze e 3 szigetet egy gigászi körön magába a prociban (Neuman palacknyak átka)."
    },
    {
        id: 443,
        topic: "Architektúrák",
        question: "Melyik feldolgozási modell hajtja végre a műveletet, amint minden operandusa rendelkezésre áll?",
        answer: "Adatáramlásos modell",
        explanation: "A DataFlow modell. Nincs Program Counter, ami ugrálna a sorok közt. Amint egy matematikai blokkba (ráf elembe) megérkezik a 2 db kis token (adat) a bemenetén, már szalad is vele a hardver feldolgozni azt magától!",
        monkeyExplanation: "A puszta DataFlow aszimmetrikus adatmodellje maga a Legó-Gép és Káosz gráfláncon! Nincs benne program-sorokon s memóián ugrólépegető fix Programszámláló Mutató! Olyan az egész lapka alja, mint egy okos Csapóajtós Számológép-Hálózat drótba fűzött dobozával: Amint egy egyenlet dobozba gyanútlanul pld bepottyan két nyers Token kis adatos lapocskája (Egy Adat jobbról szálon... s egy mondjuk az első szálon kapun át is beesik)... A box áramköre rögtön 'Aktiválodik is s Felébred'... s magától felcsapja fedelét hardveresen számol is tovább a művelettel a csatorhán, tök függetlenül attól a vonaltól hogy a Programozó azt hanyadik soron vagy kódlépésnek szánta valaha forrásukban! A Készültségi Párhuzamosság  (s a ráutaltság a bemenetre ami kész) egyből indítja lavinaként számolásokat a gráf mátrix sorain (Ezt amugy a kényelme miatt szeretik!)."
    },
    {
        id: 444,
        topic: "Architektúrák",
        question: "Melyik feldolgozási modell hajtja végre csak azokat a műveleteket, amik a végeredményhez kellenek?",
        answer: "Igényvezérelt modell",
        explanation: "Lusta, azaz 'Lazy vagy Demand-Driven' modell. Addig nem nyúl a fához, amíg a kimeneti terminálján valaki meg nem rángatja az adatot tőle: - Kérem a kimenetet! És a program visszafelé legörögve fejtia ki s hajtja vége amik elengedhetetlenek ehhez.",
        monkeyExplanation: "És ITT ellentétje az a hanyag matek diákként lezongorázó Igényvezérelt s Lazy Modell! Elküldhetnek a Holdra ezer adattal s adhatnak be programként eszement nagy matek fát neked Gráfként amiből adatok garmadája szedhető ki szálakon... Ő ADDIG nem is fog megemelni semmit sem,  se elkezdeni a dolgát drága CPU idő s energia elszámolásos rávetéses pazarolásokkal.. amíg Maga a Cég / a Kódszál legelején vagy egy VÉGE-Képernyő Célon meg nem csörren konkrétan dedikáltan valami terminál parancs onnan fentről: 'KÉREM MOST A  3. SOR EREDMÉNYT IDE!'. Ilyenkor a gép leül, ráközelít csak azokra a matematikai OK-Okozati ágágkra amik arra a specifikus kapura mutattak... Vissza-Fejti  áganként a követelményeit ('mi mikből all egybe') es kikalkulálva lefejti. Csak azt hozza világra amitől TÉNYLEG konkrétan a te EREDMÉNYED (Kimeneted függ)! Lassabb a simlis 'Lustaság gátak' miatti szinkron de piszok nyers matek pazarolás megspórolós iszonyátos listáknál programozásba (Pld Linq programok a dot Netben ezen élnek!)."
    },
    {
        id: 445,
        topic: "Perifériák és Buszrendszerek",
        question: "Melyik híd feladata a memória-tranzakciók kiszolgálása?",
        answer: "Északi híd (Northbridge)",
        explanation: "Régen az asztali lapokon lévő északi híd áramkör: CPU, RAM és a szuperszotors PCIe VGA bekötését végezte. A lassú perifériák (SATA portok, USB és BIOS) a Déli hídhoz futottak be. Ma már sebesség miatt az Északi Hidat teljesen a processzor szilíciumába tolták be.",
        monkeyExplanation: "Ezelőtt jó 10 éve szinte minden PC lapban s Aszatli gépben ez szinte központija s a 'Magja volt' a deszkádak szívéül! Ő volt az un 'Északi Fő Érintkező Híd'. Ő diktálta a CPU magjának s vonta el magaból buszokra rángatva a roppant gyors Memóriát ddr2-ig sőt a szuperszotors PCI-Express Gamer Videókártyák buszaival magában összevarrva massziv hűtőborda leköti drótokat hűlve s forrósodva...  Ebből adódóan a LASSÚ 'piti' perifériákkal (A HDD SATA portjaivall, apró USB s hálózat nyűgökkel és síkkal valamint alig pislákoló BIOS ic-kel) rohadtul nem foglalkozott lebutulva! Azokat  meghagyta lentre a lapkán lévő dedikált 'Déli Hídnak' (Southbridge-nek) megpaklni ami szimplán 1 pici csővel kötött bele fentre füzve bele fel az Etnök hídba e halmot... (Mára annyit változott hogy ezen robusztuzos északi vga / s pcie ram hidak tokát sebesség miatt tisztán beintegrálták fixre magába az AMD/Intel Ryzen lapkákba s szilikonba on Die tokozva a cpu köré)."
    },
    {
        id: 453,
        topic: "Memória technológiák",
        question: "Melyik memória címezhető bájt szinten (SRAM vagy SLC NAND)?",
        answer: "SRAM",
        explanation: "Tudnunk kell: Bármilyen RAM (SRAM, DRAM) közvetlenül apró mikrocímekre bontható (Bits / Bytes szinten írható). Ezzel ellentétben egy SSD (SLC Flash) fizikai korlátai lévén kizárólag egyben, BLOKK vagy LAP szinten írható le (pl 4096 bájtos hatalmas oldalakban egyszerre)!",
        monkeyExplanation: "Bármilyen furcsának s trükkösnek is hangozzon ez a beugratós vizgás kérdés pld a technológiakról: a válasz  tisztán és mindig s A klasszikus processzron belüli vas RAM-ok (SRAM)... vagy a Rendszermemória pácikáinak a hardvere (DRAM)! Bármelyike ezen 'Töltésen-lévő' memória chipnek pld egy gépbe kötve megcímezhető direktben és nyomban apró Bit / logikai Bájtos fiókcímenként asztalon. Tehát ha felülírod c-ben elrontva egy char Betűd (Változód a kódból) miközben pörög is gép a cachememoriaban pld  a CPU magodból fixen és precizen azon a parányi Byteon leirva nyúlva abba... DE! Ezzel TÖKÉLETES ELLENTÉTBEN van a Winchester Solid Flash chipje pld : Az SSD NAND flash elmebetege a rácsainál Lévén A Sötétsége Miatt Kízólag csak HATALMAS TÖMBÖKSZERŰ, nagy falatokban ('Blockokban és a rajtuk lévő Page nagy Lapokon'), egyszerre pld  Négyezer-kilencvenhat Bájtossával egybevágóan lökheti le magábol is iszonyatos feszültségsütések, bufferelések... s cellapörkölt drámák letörléses s olvasási vonzata alatt mentést! Az sose lennél pattanva arra képes, hogy egy pici bitsorozat 'A betűjét' kicsípett és okos cellapokollos átírások nélkül  a fizikai Flash NAND-ra mentve letedd  'bájt szinten címezve magának' a Windows felől egy lapkája alá odateve mint egy SRAM regiszterben ahogy magad tetted fent egy processzor fiókban! Sose menne blokk nélkül puszta logikból alapon a flash drótjain ezen trükk..."
    },
    {
        id: 458,
        topic: "Memória technológiák",
        question: "Melyik memóriatípus igényel periodikus frissítést (refresh) az adatok megőrzéséhez?",
        answer: "DDR DRAM",
        explanation: "A DRAM (Dynamic RAM) 1 tranzisztorból s egy mikro-kondenzátroból áll 1-1 bitcellához. Ez a kondenzátor másodpercek törtrésze alatt kiszivárog és fals lesz, ha a fizika törvényei alapján a hardver nem pumpál bele (Refresh) frissitéseket iszonyat gyakran!",
        monkeyExplanation: "Nemehogy lassan belebetegszünk s minding felkérdezik 1 új mondattal, de az asztali rendszereink rákfenéje mindennek ez és marad is: A 'DRAM' típus magába csodája a csomagban. Szimpla pici és végtelenül sűrű technológia mivoltában ő egy 1 Tranzisztoros elválasztót és apró icppici 1 db lebegőtöltésű mikro-Kondenzátor duot bújtat magában  '1 Darab Memória Logikai Bit 1/0 Cellájára' gyanánt lekövetve mindert is! Ennek hátrányaként es hányatatott élete lévén  az apró kondenzátor oly parányi pót cella: A fizika miatt Töltési feszültsége elraktározásánál az órajel milliomod vagy nanosecond  töredéke alatt bizony folyni kezd szikrányi fém atomokon a test fele nyílva (Kiszivárog belőle ez eröt adó analóg logikai 1 szint... s leomöl a falshoz közeli, használhatatlan lemerült sötétség 0 Logikájába lefelé nullázva is esik vissza amig megvan). Tehát, ha az asztali laplapod RAM-memóriavezérdő hardver-es agya a Processzorodból bele nem lök izombos ciklusos drámai árammal és feszültséges visszaemeléssel egy pislantásos eröt... TÖLTVÉ / s frissítve Visszahuzva bitjeid pld kismilószor másodpercebe esve is ('REFRESH Ciklus azaz Frissitve tölteni bele hardveseren elvétetten vissza!)... Gépünk rögtön s egybefüggően drasztikus kék halálokkal döglene meg és veszítené RAM tartalát egy üres lepislogással állva!"
    },
    {
        id: 465,
        topic: "Architektúrák",
        question: "Melyik modell nem hatékony nagy párhuzamos rendszerek esetén?",
        answer: "Vezérlésáramlásos modell",
        explanation: "A Neumann modell (Control/Vezérlés Flow) kimondottan rossz párhuzamosító! Szálakat kell dedikálni (OS Fork, Thread) s utána kemény software-szinkronizálást (Mutex) írni a CPU-ok közé hogy ne gázolják el egymást. Ezzel szemben a DataFlow természetesen pörög halmazként.",
        monkeyExplanation: "Iszonyatosan sokat szív s megakad vele mind a szoftvermérnök es magá géptervezők is ezér az ipari paktumér évekig ezen pörögve áldozva sok mindent  : A Régi  hagyományos Neumann elvű Soronként Léptedző Utasító Mátriix gép (A Control avagy Vezérlés Flow).  Gondold be : Egy igazi procedurális program C++ ban felépítve olyan nyersen s logikába zérón lelapitva van neked puszán megírva:  Mesterien es egymásra hívva írt logikai sornként lépkedős Utasításhalmaz listája a CPU ram címein. Ha te neked a hardvernél ezt 'NAGY PÁRHUZAMOS RENDSZERRÉ (16.. vagy 64 magosan AMD epicekben s os szálakra a Windowson)' kell OS-el felosztva ropogósan és hatékonyan rászabnod: Pokoli nagy idők s kódhegyeket ígényli a fejtett szál-létrehozást s pörkölését rájuk ('OS gépnél API Threading s pld Fork() syscall linuxok alatt hívásaival letéve a kernel drágákat égetve) ... De Ráadásul mikor két mag futtato párhuzamossa egy szaros Processzor fiókot is közös ramváltozóval a Gráfban ha leolvasnanak (Közös Memória elérés).. ott rohan a kék halál! Programozó kell ami 'Lock s Mutex Zárat nyomva rettegve s agyszipolyosan fegyelmezve tartsa hogy be ne akadjond s lassítva magára zárja a magokat várva hogy az 1 bit fel ne irpdjona szekvenciánaál! Szóval A Control Flow a gáncs gépénél! Ezzel Tökéletes  ellentétekép a szilárdságot a DATA-Flow ('Adatáramos) grafgepe csodaszerrel s magától függettenen hálózósan is nyomja le ezen akadályait mert ott nem a 'kód száma a rögvest sor', Hanem a Nyers adat beesése Pörgeti be magán az egyik pici csapot feltekerve is tokkenekből!"
    },
    {
        id: 466,
        topic: "Architektúrák",
        question: "Melyik modell szerint működnek a táblázatkezelők?",
        answer: "Adatáramlásos modell",
        explanation: "Az Excel tábla a tökéletes Data-Flow! Nincs programszámláló, a cellák olyanok mint a gráf csomópontjai: amint az A1 bemeneti mezőt beleírod és nyoomsz egy entert, az összes rá hivatkozó egyenlet és táblázatmező egyből feléled és újraírodik, automatikusan kiszámolódik!",
        monkeyExplanation: "Hiába lep meg Térdkiverős Telitalálattal megáldva  s elsőre elborultnak hat asztalon de: Az IRODAI MICROSOFT EXCEL egy natív 'Adatáramos (Data-Flow Arch)' program magában! Vajon Miért is?  Ugyanis ahogy a gépet megnézztk ezen modelnnél fentébb: Egy sima exceles matematikai felállásu SUMMA képlet mező ('összegző B2:A8' tartományban egy cellában várva üresen): Ebbe nyoma s leirva egy excelt - Ott konkrétan az ég agyán sincs C-beli s  Windows OS Ciklust pörgetős Fix Lineáris programszámláló benne a gép ezen a falakon ami folyton  lassítana vagy  soronként újra lefuttatná az excel állományod 'Hány x értékekkel s mi lett kiadva' fentről a lap tetejéről! ANNYIRA durván Elszeparált Grápf-csomó az s logikalali Cella egység minden táblázatod ablakod ami csak alszik s várakozik kimenetnek.. hogy: AMINT a  bepotyantasz egy db uj sort (Kézzel módodítod is s ENTERT rácsapsz asztalon pld a G8 számadatára az asztalon s cellában!) ... AZ  EGÉSZ program iszonyat robbanékony hullámmal Áradatszerűen szeleklve Szét lővi az OS 'Módosítos jeleit és Értkeit' gombnyomásra - a Gráf minden fán lévő Láncrekacióba befuttatva csak es csupán CSAKIS azokat amik rá hivatkozott (S csak az frissül ki). A Függőségek láncánál (Bemenet s Tokken Adása). Ezt Senki s egy kód sem  utasitotta újra futni... Pusztán maga ez elárztt 1 darab ráfeszkő ADADOD érkezte Változott es lökte azt magától fel egybőli s lusta csereként kiszámitódva mátrixos gráffában."
    },
    {
        id: 468,
        topic: "Perifériák és Buszrendszerek",
        question: "Melyik összeköttetés típusnál érhető el magasabb órajel-frekvencia?",
        answer: "Soros összeköttetés",
        explanation: "A PCI Express, USB, SATA is mind soros! Mivel 1 érpáron szalad a bit (1 bites stream), nem kell bajlódni a kábeles interferenciával és a 32 db rézdrót 'egyszerre beékezésével'. Ezért a frekvenciát egészen a csillagokig tornázhatták fel a párhuzamos PATA limitációihoz képest.",
        monkeyExplanation: "Na, egy Ujabb roppant gyakori téveszme kiboncolása asztali technológiából a modern PC vasainknál az égiszekben ami az egekbe tette s hozta nekik a teljesítményét neked pld Videokartyádon! SOROS!! (Serial tx rx)!! Ezer éveken át a kőkori IT világ s iparia az lelte hogy asztalon minden (Pld a LPT párhuzamos káze Nyomattón, scsi lemez s vastagszalagos PATA disk is a gépben drótos halom volt vaskosan)... Miért is nyomjunk 1 nyamvat vezeték erén iszonyat tempókat Mhz ben logikai jelet árammal..ha helyete egy Párhizamos asztalos 120 drótös kábelcsoöből én asztalon 'Egy 100 as szorzóval Párhuamos (Parallel)' csinálhaok az egyedidejü löketböl bájtókba dobált átvitelt?! Logikus..DE.. A FIzika Isten ezen az ablakon közbeszólt s elakasztott s megórűlt gigahertz körül s korlátor húzott a pofájukba! Ugyanis ha  a  120 db áramerős  kábel egy vastag tokban magas frekvenciában pulzárva veri ki és löködöt órajeit... olyan  Durva Eszelős Mágneses (Interferencia 'Cross-Talk EMI zajt s aszitron jeltolós késést a drótok fizikai millimérül eltéró drága hosszábol aszikron jelek közt száguldva') kezdett generálni.. ami Magában szétzuzta, megrokkantotta  az átviteli jelek helyes hibátlan bitszigetét célba érve...  Végül a ma egeket verő mérnöki (USB szuperes, Sata és maga kishangya PCI Express slot lapján is) azt tette egyből.. 'Kapd be Parallel drága fizikus fék'... És lerántotta csatornáit s lefogot egy brutálvastag, extrám zajszűrt szeparált 'SOROS EGYPÁROS (1 Küld s 1 Fogad / Rx TX) serial' drótot, feszültséget tolt fel... és MIVEL elszeparáltsága vékett NICNS  több áthallásos interferenciza s fázis csúszás önmgaa kötegeiben az árnyékalatt.. Így a frekvenciasávjuk Gigahertzes trösztjébe tolhatta  késlelttés nlkúl egy éven nyaggatva és lökjdösve űrutas sebességekig mindenkit megverve adatátviteli skálákon P2p beosztva is!"
    },
    {
        id: 469,
        topic: "Perifériák és Buszrendszerek",
        question: "Melyik összeköttetés típusnál nagyobb az adatátviteli sebesség azonos órajelen?",
        answer: "Párhuzamos összeköttetés",
        explanation: "Figyeljünk oda: AZONOS órajel elvárásánál (Mhz), persze hogy a szélesebb autópályát jelentő - pl. harminckét drótos, szalagkábeles párhuzamos busz győz a szűk 1-2 vágányos soros PCIe csővel szemben tisztán matematikai átviteli értelemben.",
        monkeyExplanation: "Figyeljünk oda a nyers matek kérdésre: AZONOS órajeles Mhz beállítás elvárásnál a ringben, persze hogy a szélesebb kapacitású autópályát is jelentő - pl. harminckét rézdrótos, szalagkábeles archaikus Párhuzamos busz győz... a szűk 1-2 rx/tx vágányos soros PCIe drótokkal szemben, tisztán egyetlen órajel-lökés 'BUMM' ütése alat letolt bájtok adatmennyiségét mérőszalaghoz állítva gépben! (A csel lentebb persze az iparban ott húzódott meg, hogy szalagkábeles párhuzamost pusztán fizika miatt logikailag is lehetetlen volt a gigahertzes magas Mhz frekvenciára fellőni késöbb a drágálló drót-drót felé való durva áram-interferenciák rombolása miatt)."
    },
    {
        id: 470,
        topic: "Memória technológiák",
        question: "Melyik parancs hajtja végre a tényleges adatkiolvasást az oszlopcím alapján?",
        answer: "READ",
        explanation: "Egy teljes DRAM olvasási ciklus: ACTIVATE (Sor nyitás) -> READ (Oszlop felolvasása) -> PRECHARGE (Sor Zárása és letárolása). A valódi bitszintű lekérdezést a READ (vagy íráskor a WRITE) csinálja.",
        monkeyExplanation: "Egy logikai DRAM cella memoriaolvasási varázslatos ciklusa így mutat: ACTIVATE (Sor megkeresése és kinyitása áramnyomással) -> READ (Az adott Oszlopkeresztezé metszeténél a konkrét bites adat feltépése) -> PRECHARGE (A destruktívan roncsolt sor felülírása frissülve és maga a Sor feszültséges elzárása ismét a végén). Tehát magát a Valódi bites logiklai lekérdezést pusztán már maga az aktiválásos felépülés UTÁNI sima 'READ' (olvasási) parancs csinálja végig."
    },
    {
        id: 471,
        topic: "Memória technológiák",
        question: "Melyik parancs nyit meg egy konkrét sort a DRAM-ban?",
        answer: "ACTIVATE",
        explanation: "Mint egy óriási Mátrix Excel lapján, rákattintasz a Sor kinyitására egy ACTIVATE tranzkacióval, aminek óriási (RAS - Row Addressing Delay) várakozási és nyitási idővonzata van mielőbb az oszlopot elkezdhetnéd nézni benne.",
        monkeyExplanation: "Mint az ezer soros Mátrixok vagy Hatalmas Excel táblák lapján... te is először logikusan rákattintasz egy adott Sor (Row) kinyitására,  ezt ITT az ACTIVATE (Aktiválás) memóriatranzkacióval érd el chipnek jelezve! Ennek dacára iszonyatos RAM-várakozási logikai-kapu nyitási kapuk idővonzata van elásva ezen dologban  (RAS Delay avagy Cikluscsúszás a csipnél), amiből kifolyólag te iszonyat sok órajelciklusit ülsz némán a gép előtt tétlen befagyva, mielőtt magát s azt az adott konkrét Oszlopot - azaz magát a várt adatot - egyáltalán el is kezdhetnéd kikotorni benne."
    },
    {
        id: 472,
        topic: "Memória technológiák",
        question: "Melyik parancs szolgál a nyitott sor lezárására?",
        answer: "PRECHARGE",
        explanation: "Sor bezárásakor kötelező! A PRECHARGE az az áramköri művelet DRAM -DDR esetén, ami letárolja és 'előtölti' újra feszültséggel a kondenzátorokat frissülve bezárás előtt, mivel amig nyitva volt s olvasták róla az adatot, az tönkrement s destrkuktív módon lenullázódott!",
        monkeyExplanation: "Ha fentbb egy DRAM Sort logikáb megnyitottál olvasásra izgalmakkal, utána annak a lezárásakor ez kőkeményen kötelező vas szertatrtás: A 'PRECHARGE'. Ez is elvett memória-idő, ő az a konkrét áramköri műveletes reset ami a DRAM vödrökben lezajlik! Aki nem csak zúdítja  s lezárja  a kapukat... Hanem ő fizikálisan  vissza is írája bele a tartalmat és ezzel 'Előtölti-Frissíti is ' újra felduzzasztva s megmentve feszültséggel a kondenzátorok bitjei, mivel amíg 'Nytiva' állt és olvastad/lehuztad róla az adatot szűzen, addig  azok konkrétan hardverként fizikailag tönkrementek es olyanként is destruktív módon megsemmimüsülve lenullázódtak az olvasás durva terheitől  es hibridejtől!"
    },
    {
        id: 479,
        topic: "Perifériák és Buszrendszerek",
        question: "Melyik USB átviteli mód nyújt késleltetési garanciát, de hibamentességet nem?",
        answer: "Izokron (Isochronous) mód",
        explanation: "Célpont: Webkamerák, fülesek, mikrofonok. Garantálja az USB keretablakban a 'Fix idejű s folytonos' kiküldést, de ha a drót porszemcsei miatt eltörik egy tranzakció ütközébe a gép felé, nem foglalkozik újraküldéssel (nincs megállás CRC számolva), hiszen csak 1 milliméteresen rontott lesz egy a pixeled, de a képkockad pörög tovább élőben megakadás nélkül.",
        monkeyExplanation: "Célpont: Webkamerák streamelése, gamer fülesek, élő mikrofonok usb vonala pld. Ez az elosztási mód (Izokronos) Garantálja meg az USB idő-keretablakának fixálásaban azt, hogy vip alapon nyomtassson egy 'Fix idejű s folytonosan rángatásmentes idözített sávszéleségű' simlis kiküldést a chipünk, De! Csrébe magasból is tesz az adat bitszintu CRC minőségére menetközben a buszon. Hiszeha asztalod mögött az adat-drót por / hosszúsága miatt meg is esik és letompul s eltörik agy bitszavas tranzakció  es ütközik: ez a Vas egyáttalán nem foglalkozik hibavédelemmel s ezáltal  NEM KÉRI BE egy pillanara is a küldőtől hogy újraküldje drótot  (Nincs megállás Error es HandShake Handelingekkel),... Mert amúgy ki a fene érdekel az ha pld csak 1 db isici-pici sáv-pixeled lesz 'zizis piros rottyos' a nyers webkamerádon egy miliméteres frameig ha azt nálad rontotta el USB sáv... a lényeg csupán mindig az adatcsere alatt, hogy a streamadód  és játékélmény hangkódod az fixen pörögne továbbra se élóként adás megakadásokkal vészterhes delayjel (laggálással s akadva percre is feltöltéssel egy percre is! )."
    },
    {
        id: 485,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Melyik utasításkészlet-architektúra támogat kizárólag regiszter-regiszter műveleteket?",
        answer: "RISC",
        explanation: "Ezt a logikát klasszikusan 'Load / Store' felépítésű utasításkészletnek hívják. A memóriahivatkozások tiltottak számolás/logika fázis közben. Előbb fel kell húzni (Load) a L1 cachebő, a dedikált CPU reigszterbe, abban összeadod, és utána egy sima utasítással Kimented (Store) a végeredményt pld.",
        monkeyExplanation: "Ezt az eszetlen  egyszeré és letiszlut logikát amúgy klasszikusan de picit is dedikáltan csak úgy oktatják s hívják IT egyetemken be hogy a 'Load / Store' logikai felépített utasításkészlet. Miért? A processzorral s a C-beli rákötött szálon egy Mezei Rendszer Memóriába-Magába-Való -Hivatkozás trükkös használat  könyörtelenül be van ITT Vas-Tiltva a  számolásokkal egybefont s Logika/Algebra fázisokon belül olyankor gépnek is ! ... Elősször is es utána az asztlon letéve neked a Vasnak  kötelezően csupásza IS magából felkell húznia egy beolvasásal az adatot 1 sima mezei lánccal (Load Utasítással) az előtesztelt gép cacheből egy roppant  dedikált 1 bites CPU Regiszter kapujáig magáig a prociban!...  S már csupán abban is az a Regsziter és Regiszter között nyers tüz-vonalban van a joga s  lehetőséeged neked logolózni rajtuk  (pld add-összeadni) a matekos fázisában tranzisztoroknak,... Majd Mindezt  csak akkor  és majd  legutoljára letisztázva immár Egy teljese ÚJ, nyers és különálló szingli utasítással írathatod  neki Kimentésre le a L1-be pld  (STORE  paranccsa) kiverve a bit végeredményét a CPU házból vissza a főkábelre memória felé lépésből magára hagyva e procedurát lezárva ciklusonköt is .  "
    },
    {
        id: 486,
        topic: "Háttértárak (RAID)",
        question: "Mennyi 5 db 1 TB-os diszk hasznos kapacitása RAID 0 és RAID 6 esetén",
        answer: "RAID 0: 5 TB, RAID 6: 3 TB",
        explanation: "A RAID-0 = Csíkozás, de semmi redundancia (N). Mind az 1+1+1+1+1 vinyó pörgethető. A RAID-6 = Double Parity, azaz egy durva matematikai módszerrel N-2 azaz minimum Két diszket ejt ki logikailag 'láthatoan' paritásra a redundáns védelemhez elosztva.",
        monkeyExplanation: "A  szimpla klasszik NAS RAID-0 mód pld az a  = Sima Puszta Csíkozásos Diszk összekapcsolás s hálózat  (Striping szlenggel), Ez sebbeséget ad felcsizolva s darabolva fályokat,... De nullázat csinál azaz puszta semmi redundancia avagy sávbiztonság gépben ha adatgikszer van magában. Mind az mondjuk 1+1+1+1+1 vinyó lemeze logikaiiglan egyszerre s felületül is maximálisan is kipörgethető tárhelytül  s  kihastnálható s pörgethető igy asztalon (Ez adna is ki neked pld durván s fixen 5 TB-nyi nyert gyors  helyed - s az irás Max tempóját IS).... De ha logikáálsan egy diszk befejel s elszáll 1 gyenge  kártya az ötöből megsülve is : azon az ugráson bukid el te és ment vele a lecsóbe asztlon is s zsebben az igés céged élete együttes darabos halott  adatsorakna csíkozátott fáljjainak fele.  Ezen megálmodva s túlépe is lett A RAID-6 azaz a massziv  = Kettős Paritás matematikai logikája!  (Double Parity), a már ipari kisközösségi s Cégszerü megoldásra nyert gomba SSD kel pld ... azaz egy iszonyúan durva s robbort matematikai paritas módszererrel - olyanképpen N-2 algebrai algoritmus alappal ami pld neked most logikailag a minimum pld : Két ropogós Diszket ránt ki és áldozva használ el logikailag elnyelve s rejtve ('láthatoan azt a tárhelyt pld neked meg-sem-jelenttve levonva') a közös asztali diszk rendszeredböl csak az iszonataos redundáns bitszintű védelem s paritas eltároló javítókódjai hegyeire allokálval...  Mivel igy bukttál s levontan neked csupán 3 db vinyónyi helyed maradt fixen ('Hasznos = 3 TB-od a Windows vinyo mapájin is aktívan'), de az életedet menti es kibír simán 2 db Random elpukkant Drive fizikalig leégett de meghalt sűrűség-halálozást is egyszerre : PUSZTÁN minden adatsérelmi vesztéseg  és siralom gikszer NÉLKÜL a hálózaton pótolva magának mindent amit mások ledöglöttek belöle elöle !"
    },
    {
        id: 496,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi a centralizált arbitráció előnye az elosztotthoz képest?",
        answer: "Egyszerűbb eszközök és általában jobb buszkihasználtság",
        explanation: "Egyértelmű: Nincs minden nyamvadt olcsó periférián (pl kártya) egy bonyolult 'készenlét és szétosztó priorizáló intelligencia' ami kommunikálni merné az álapotát. Cserébe csak a Gazda lapka (Arbiter/Root hub) diktál mindent ez egy olcsóbb rendszerkiépitést szül.",
        monkeyExplanation: "Egyértelmű de még is faék-egyszerűség ez hardver téren ! Nincs egy buszok közti apró-cseprő hálózatokon és  minden egyes nyamvadt olcsó s kínai USB/Kártya filléres periférián egy bonyolult is  'Készenléti és szétosztó priorizáló intelligencia csip a nyákon (okos arbiter-kisokosa)', aki gátlástalanul s aszinkronosan is  hálózatot emelve ordítva kommunikálni is merné az ő álapotát s igényét - Arbitrálva versengve önállóan is hangosan küzdve a sokkal fontosabb chipekek dacára s között a buszokon !! --- Cserrbe: Egy isztnyatos faék dikttúra van itt az arbítrácios gép buszon,  Csak és kizárólag a masszív Gazda asztali-lapka (A Központi Fő Chip Arbiter / pld egy nyers Root lapka HUB ) ő maga diktál az alantévőkhöz egyedül és megkérdzés nlkül ítél s enged el  mindent egyedül egy siralom vonalon ...  S Ami viszont igy - egy ezerszer hihetetlenül olcsóbb és primitívebb vezérlés-kiépitést az iparnak ha eladák s magába véve kevesebb logkai csipre ruházást  szül laptetepkig pld. anno pld az Intel is."
    },
    {
        id: 499,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi a DMA vezérlő alkalmazásának legfőbb előnye?",
        answer: "Csökkenti a CPU terhelését",
        explanation: "A Direct Memory Access a szegény Processzornak nyomott 'Ments el fájlként 12 millió regisztert a RAM-ból az SSD-re I/O porton át' monoton gyilok feladatakor mentesíti a CPU-t oly módon , hogy kiadja a DMA modulnak alvállalkozónak a transzfert (forrás, cél, db) és a DMA megcsinálja amíg a proci vígan tovább lép a böngészőnkel.",
        monkeyExplanation: "A Direct Memory Access asztalra és csipbe kerülése valójában szegény terhelt Processzornak nyomott de legpusztítóbb 'Ments el fájlként most 12 millió regisztert s bájtot a RAM cacheimböl le azonntal az SSD pci-szektorába portpnon ki is - de tegyed mindet  sorszámozova iszonyat lassan bytes-rol bytes ra is az I/O porton sorolva letoltva egesz  monoton  várva s  csatornán átrágva magad ezen!'.... s iszonyat butitó nyers  gyilkos felesleges byte átmasoló feladatata es terhének drasztikzs levétélére es kiválatását adodja hardveesen! Magát A processzor tehermntését zseniálssan  oly MóDon csinálja le pörgetve - hogy egy picinyke erre kifejlesztett es csendbe is alvó  különáló s okos memória s buszvezárlö 'Raktáros Kismalac Chipként'... A Számolo processzor szimplán CPU is ciklusban csak elordítjva pld egy aprót rászol es rábízzi kidadja logikusan gépkódbzál és delegálja pld az egész költöztetést s ennek a  fürge chip-alvállalkozónak magának kiadhatva  számai a transzfert logikát (Teszem pld  Memória A RAM Forrása, C-lemez I.o Cél, Hossz mint blok mret byte).... S Ekkor Maga csendeb a DMA önálloadóik veszi fel es gygkroozik  s csinálj a meg pusztába a nyers iszonyaos adat  másoló byte-bybyte írási port munkát maga lassan logikába is  - ...  és amig ő el is van ezel egy csoben a drótón (a  befejezö iterrupt csevegásitg lentre vonulva ), Aközbben magaga is és olykor a felszabadult prosci  a gépben amúgy  meg vígan szalad el felül s gigahezen lekapcsolodva tovább a porszemek felett  egy masszív kódos  szálra lépve logiakkla :  es  kiszámolja neked tiszta magjaval pld a GTA V s a játékod árénék vetülésinek a 3d magját is zavaetalan az asztalon letéve!"
    },
    {
        id: 502,
        topic: "Architektúrák",
        question: "Mi a FORK primitív feladata a vezérlésáramlásos információs modellben?",
        answer: "Szétválasztja a végrehajtandó utasítások folyamát, így párhuzamos működés jön létre",
        explanation: "Mivel a Neumann asztali architektúrában nincs implicit 'magától értetődö' párhuzamosság (minden lineáris). Ha több magon akarjuk megoldani (pl C nyelvben fork() vagy Thread() hívással), akkor processzor kontextusát s állapotát leklónozza lágyan az OS kernel egy új önállóan futó program-szálra (thread).",
        monkeyExplanation: "Mivel maga  a puszta alapon fexvö ősköri tiszta pld Neumann alapokra támaszkkodó feléítesű gép s chip architektűrába s struktúrájában (Von Neman asztal is  ) sincs meg beleírottam alaptán felpítve is s nyersen megse sem csinál az olyant : hogy maga is  ez es procedurális szoftverek szinjtán gépel gépeléshez és futtasához aszintaktika eleve 1 db  Lineáris kódutasításokra nyígdíjazza meg önálloan mint pl :   Ténylegesen es 'magától- értetődő ' önjáro s tiszte nyers automata adatpárhuzamosság / S vagy maga egy önéllon gráf kiépités de a Vasban Gráfszámítási vonal se volt rajta olykor )! S   Ezárt van,   Ha pld  Programozo emberként es az életedben te mi asztalra es a windowsod  rendzseképernyöjére szoftvernénél ráadásuztva írva aszinkron ablakoknál : olykor már  egy 6 Magon lévó intel pc ben akarva de szándékost is direktben  is  Párhuzamosan robbbantva akarnuk meg s furattnuk 1db magasan lefordítot rendszerkendet aszinkron is...   !!! Akkor A c-bol vagy forrásból lévő masszi codeod  ebben a világban : és annak aktuális elgazaási pontjánan kévő teljes szoftver s Processzor Futási   kontextusának es cache rszét , és egy teljes mag és változó es gépallapt regsiztereinke is teljes átugraását s szeparált vonalát klóntását olyankoa : erőszakkal is  - és roppant masssív aszaáli OS programhívásokkal logikai s kórabn felvezettten direkt C-API OS  formakérve a rálépett sorokon ! Pld ilyen a -  [ FORK () ] nevesitatt   system-parnccsával (syscall) - ... KEMÉNY s  szoftveresen logikailag a Kernelnek kell s nyersen megmondava és leklónzoztatni  magának eröforást  az Op-rendszeren belül s a VAS szálain, s létre hozni neked logikailiag A memtáraokall is egy olyannyilag Teljesen izoláld  új önállóan elindúlt magot és független RAM-adatokkal is megajándékozott futó program-sálat felhuzv a rendszerböl os -ként :  (Azaz Threadedre / Uj procesztre is lehasítvaa le-nyessve s levállasztta gyönyörűáen az az egy apró dedikált cpu logkiai processzoron futo magara is explicit módon magavagy is elö-gépelve feliratozva és nekm szántad felhoeztt programozoikban!)!"
    },
    {
        id: 503,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi a fő különbség a DMA vezérlő és az I/O processzor között?",
        answer: "Az I/O processzornál a perifériák külön buszra vannak kötve",
        explanation: "Míg a 'sima' DMA simán csak a meglévő PCI/Memóriabuszon masírozik, és bus-masterként kaparja a biteket a proci szeme előtt. Addig az I/O Processzor (IOP) egy nagyon komoly saját zárt független világ a dedikált I/O perifériákkal összedugva, s csak a kész végeredményt tolja vissza az alaplapnak, drasztikusan nullázva a CPU I/O busz terheltségét is.",
        monkeyExplanation: "Akkor Tehat tegyűkl fel tisztbárab és fehetére i léeépülettel: Míg a Sima 'egyszerű es mezei kicsi mikro DMA chip szepeltése' egy vezérlőn az alaplapi pld csupán csak - (A gép oylkor is meglévő fő  vaskos masszív Közos  Dram PCI-E s /Memóriabuszán (A Fő autópája útján) logaritmussakl masírozik fel-s- is-és- le folyamatoaan  - s OLYKOR ott is  eréyesen  Arbitrál maga es rögvitón is s magában meg is kuzzd versenyezve az árán a többi csippel o is busznak idöt nyerva... és  mint erelyes bus-masterként ott a proci és az adat elött csapódvae s folyton onnam a gép szeme előtt a ködos  zajos vonalon simán eröltetve s kaparja össze s ide-oda simán vándorova letvé  a mezei RAM memóra és filer blockjainak adatoos hexabájtjait önállóan !... .. -- >>  DE ADDIG : ! . Ezzek Szemben állva logokaiul és telhesen mas sávpn elvaáűlazttva AZ a giganta s  bizpny Okos, s Okosnak hívoptt igazi :  'I/O Processzor'  azaz röviden gépiesitesen - az (IOP) egy brutálissaqn mas dimenezió es gépészte nagygépes es szerverek hózataiban az asztlon túlzokn de a nagygépeken! Mert Ö maga pld :  Egy olyan de totalisan es  saját logikai  és nyáki , el is szoftveresitet , megírt micro-kódal rendelkezó pld elszeparantált és de totált magának is zárt  és független micro világ - Ahol maga az IOP chip processa logikája van a nagygépnek Pld a roppant dedikált hálózatí és optikai vagy s hatalmas lemezes és SAN I/O periférit tömegekkel nyersen de  egy telhesen ZÁRT es ZÁRTRA nyírt elszeparált s privát busz-sínján  önálloan meg és is összedugva pörögve (CPU is is kizzáőra elöle rükmőn !) - ... S ez az IOP agy es gep az ahol : pld csak a legvégsbb, a teljese kiforzott s feldolgoezttt es a leg-készebb nyers lecsiszlot logikaként ki matekollott logaritmust vay pld logikaiálag csomagokra fejpittett s beérkeztt es leszürt / de  letöltött hibemantes veéső végeredmény csomagokat és válsázt  Tudja csupán már -s Tolja egy logikkba  simán és tisztában  Vissza fel asztlon gépnek a fövonalas főlap -alaplapjának gignatikus adat tárhába is... ... És ezzel igy oly modpn hogy a fentí gigantkius  aszttalos gép és a sötélben maradv a - ezáltatal : Drasztikusan le radzsolva es szinte 0-ra de Eltűnteti magból is is a gép főlapjábol a  CPU szálakat ésető központiosan drága az eddig   ZÚFOLLt es massziv I/O buszának minden zajos s  túlzsúfolt folyamati  terheltségét, várakozasit és nyers gigtankiua csata tranzakcios es I/o  hibas   dugóit-es s sziuk keresezetmeszetét is egyedül - eléve vágava igy masoknak oly tehermtensül csodákat letéve cpu s busz elött  !"
    },
    {
        id: 509,
        topic: "Architektúrák",
        question: "Mi a JOIN primitív feladata a vezérlésáramlásos információs modellben?",
        answer: "A FORK által szétválasztott szálakat összefogja/szinkronizálja, és ismét egy folyam lesz belőlük",
        explanation: "Egy masszív párhuzamosított matek után (pl képtömörítés részekre esve 4 szálon), a fő programszál egy szoftveres blokkoló JOIN() primitívvel ki-VÁRJA, amíg a munkások mind visszaadják az értéküket és felbomlanak, majd az immáron egyetlen anya-szál fut tovább a processzoron az egyesített eredménnyel.",
        monkeyExplanation: "Egy pld Masszív pld asztlai C++ gépkódaból is explicitan pld leírató és massziv parhuzamosított s iszinyat pld nehéz de logikai részekre is szálon levo : matek feladast utána vagy program (pld tesze-azt :Egy  masszív Képtömörítés megabáytjai amit feladatknet Részekre vágva és eppen darabos es hasitáskként megadva is rátve es hasítóntott pld  pont 4 os rendszeres kis szálon / és magán pld épp 4 db elkülönült es  dolgos dedikát Proceszor Magon logkizava izzadva megy! ) -- Ekkor de miutátnt is : a fenti programot idító s olykoris s magaba olyna Fő-Proccesszorszál logiákva és  egyedúl levo fonal simán  maga a kódjábani  de pld leírottan egy logikusan is oda de  SZOFTVERes  blokkoló jelzésú és egy [A  JOIN () ] API primitíves c-es API paranccsal (os hivassban): maga a szál  egyszerűem le is teszi a  mögötte álló vezérlő  cpu magjat szépen is a varo es is egy Tétlen/Block / sleeping os listás szintelre os logkikval álvra-- és olyam szintén ott logikaval Ki is [ VÁRJA] azt a logikai  fáiza pontot gépiben ... Amig de puztátan az a kiossztosattt és eppen megis dolgozó 'apról munkás es kiklottt rohadt pici és  hasitött programos ' kis cpu  szálak pld (a mind  a 4 epp futasból is hardveren logikáva pld): a vas mindegyik de magányoa  szögletéből a feladatot szépeön mind logikzava pld meg Kiszámítván magának a csomagba azt... Majd vissaz utána az os kernel felé pld s vissaz Is Adva a kis logikai letett s c-beli memöta s változos pld az a dedikát rmutató poniterttésükel eggyesült leado Cél-Értékúkot olyannymban-s csendben .  Majd s es ezek utalán miutn bedobték es igy  logikaikag is ott maguk pld amúgy os kernelt ölve is de 'Fel is bomlanak a magról es eltünek a meoária processz ablakokbol kill el!'. --- ÉS csak Ekkor s es Ennek lévén pld csak IS asztalon: A sikeres s valoás Célba éréstük es jelzésúk olyna pld leadása utáln is - A legelószt elindullo es de onnant ismétn s  immáron egytelen es logikával ebredesü  és egyetelen Folytos egy vonallos a régi ANYA-Szál : Ujra feláállhat / Felerbredes OS ütemzeőböl /  es de olykor is oly modnn  Roboghat is egyeül ismét logiaba Továbbra egy szállként az idóveben a processzrón s OS en futtatv is magát os-ként - S csaks folytodhat magban is asztlon  Tovább egyediol is felul  a főlapon is folyo C programos lépedséin a Pld a régi s CPU pociesszorn maga nyomdnak logiakaban - az immár össze-egyesített (es begyutyott  de összerakot) 1 teljes fileú -  de pld a megápytos es a ledoltogoztatt es varott )  képermeny  4 db c darabkaként epp végeredmélyel is gépelve  tovább is s logiálakva abbol! ."
    },
    {
        id: 517,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Mi a NAND flash memória írási/olvasási és törlési adategysége?",
        answer: "Írás/olvasás: Lap (Page), Törlés: Blokk (Block)",
        explanation: "Döbbenetes fizikai aszimmetria az SSD struktúrákban. Kis, pár kilobájtos adagokban (Page) lehet kiolvasni és beírni egy bitet. De ha TÖRÖLNI (formázni Feszültséggel) kell egyetlen bitnyi maradványt is, a hardver szintjén csakis egyben, egész óriási BLOKK-ot (Több száz Lapot tartalmazó 100 ezer bájtnyi rácsot) lehet egyszerre nullázni!",
        monkeyExplanation: "Döbbenetes egy hardvaras ss logkai is pld de massiv Aszimmetrikus rács feléptíése es a fizikia pld ssd belüli felpátée is az pld SSD-ben  és  a tiszta Pendrive es rács rendszerek pislálko bitjeiél s struktúrákban ami az osszess írás és lagg és ssd s  írástörlasi SSD flash  szivatás legfőbb okozona is ! Mit is lent ez?: Kis, de picinyke logokiailag még is simán mehet de is oly pár pld is (pl. csaak  négy vagy 8 apróbb is) darab s csomag es is Kilobájtos adagos mertekben - az  ugymondott 'vékonycsíkoként' a rákocskbkan elmentve oly (Ezét a vasaknal asztalon s rajzokon   lévő logikai de aprróbb rácsos : [ A  Lapok / avagy a  Page -nek nevezttek ] ezen dologban  és apróbb szekcio a lapokon pld ... --  Ekkor Ezen szép lpaokon még csip de Flash controller simán képes még kódoolni pld de leiratni a bitszint es finomsagan egy finom ujjadatot bitet rákkenve s árammal roppantov is es de vagy  olvalni logikaval is gépben a mentett lapolvasó bitket egy sima Page szintű kerdésnél halkan s szépen sebsesees és hibakódolvat is a lapkán maga magátol iásilag! ----- !!!! // /// DE AZOBNAN Itt A DRÁMA is gépben!: HA VISZONT Neked  bármit  is TÖRLÖNÖD KELL AZT ( Eradicate os tiszta resetelás azaz hardves bit logkai es Tiszta reset formázással flashnel s áramban!   - Amikor Azt akarod hogy le is tiszltisd pld Nagymrétéű leáramlós tiszatió magas Feszüétséü cellba nyomással es resetkel lehuzni simán a lemenetröl hogy isemét 1/1 uresa valjon az )...-- - s mindez Ha te  akar egyeten gépbeli pld : logkailag már oly 'megrrogylt pld elmentett reggeli kis documnertembol s pld eltényleges és de 'régnek velt' fileos logkiban 'feleslegesnek szánt eltárolt picinyi de reális is s bitsorozati s szaras kis maradványkáit  is  felulird pld masoval (vagy uressé téd és törölni is szántanéd az a helyet )  egy uj fálmentes okan  az erdekébe .... :  Akkor A gápben leledző Tranzsisztor logikai csíp s hardvres drasztikus is  lapkai lebelüli szintjeinél adódoan korlát miiatt :::::  ezt  a tisztatörlást ! :  Szigorúan pld Csakis is pusztába : EGYBEN oly logkban !!.. Mégpsig  egy HATALMAS S  logiakig is oiy EGYBEÉPÍTETT, - és oly fizikai iszonyat szörnyüséget csattolvat s egybetoltad pld mint: ----  AZ ' EGÉSZ rohadt de ott lévű iszonyat Nagymérető szektorba valo 1 fizika s szeprarát - azaz a nagy [ BLOKK-OT a maga flash csipjén! ]  ----> Ami tudd lévöen is simlálogikián : ( Magába eleve és de Több száz kicsinységes apró [ Lapot ] oldalakat eegybe és abba fixra felosztve is  s de  magaban is pld amugy tartalmaz is ráfeszítva hardeveresen!! ... az a nagygatikius block is s logkai  masszuiv sok pld : ! Sok-százezezres (pl akár 256 vagy pld olykor iszogyat  tobb is) kis de logiaki 100 ezer bájtos is nagysagú rohadt kiterjed rácshálozatott !! ) :::  Na EZT A BLOKKOT kell kíméletleneúl egy logkian es egyszer is gombásbva es : Egyetlen leütésös és EGYBÜTÉSEES villanyossal pld  TELYASEN  CSAK ÉS IS OTT ablkba pld:  egyszerre iszonyat fegyütt és egy nullázós iszonyat feszuletig  Pörkölésel , es 0 va állításo roppantos és sütöárammal kéntrllen egy draszitkus s sütve és cellatroncslódv is a pld rácsokon at és megrontva is 'Teljesne le -törööve  1 csaptasara Nulláni le resetsitenin maga álalátpn is az flash memóríána es csipjeia winchesternyeis t celläiábank sötében egyeteln draszikus megofuggalmal es bitel... --- S mindehet persze os Oprendszrer szálán is neked meg de meg is  FIZETVED egyből enen dolog es durva eloszló flash dráma roppantos de logkai ssd kopásos Irásnak romlást es a kegyetlen idöbeli es firmware-s  Késlelséseinbek varo drámának Árait a csipen! "
    },
    {
        id: 525,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi a PIC interrupt kezelés előnye a Daisy chain-hez képest?",
        answer: "Korrektebb kezelés (prioritásfigyelés, körbeforgó kiszolgálás)",
        explanation: "A Daisy chain pusztán földrajzi sorbakötés alapú hardveres diktatúra (aki közelebb van a laphoz enyhén azt szolgáltatják ki first). A Programmable Interrupt Controllerben (PIC) szoftveres mi mondhatjuk meg rugalmassgával a Timer és a Billentyűzet megszakítás finomra hangolt rangsorát.",
        monkeyExplanation: "Mért is jobb ez asztalon s mire volt a harc a PC ipárbani s csipjején? ---A drága régi s es ostotbal Daisy chain gép  lánca  annak  puszta hardvrs logikája magácskán a réz de  dróton s vezetékeen i elfeüldtve is pld : csupáncsak pusztába s fizikaban elásvat meg is csk a: végtellenyszerő es rendkiul dedikált puszta de  ostobba  a kis  és nyers is : 'földaraji / tavolásigos  és  megkötőttságos sorbakötésilgi csip-láncos drót-diktatúra volt abban az gey idejében... ( Ami röviden aznt jelneitette logiagil is s oly pld hogy csai is épp , pld fixn pld :  'aki geormetriáan közelebb van fixen es láncon os bedugova vagy gépben is fell pókoolva  szép s  sorban os / s  forrasztva is rogtön  ott de mondjuk fizilialt  leg elöl a LÁncon es esélyvel A  magának aszó  a Puszta gép és OS dedikátl Processzora eljehez valo fókábelnek aljaihzós drótóhoz es annak is a   cpu arbieléhz a a gép es drát vezérllje felé csipjeknat  a lánc fix  a kábején közt..  ---> Na ö öt, pusztán a lánc elejé lévén de egy sima és nyers  áram folyási s időkli   okobolz fakoadván : Ot elöjogosan kiszolgáta e de Ot e slgkán es szolgáltatjék  ki szinte s logiakib is [ first / azas mindeneklött es is pld a legtöbbször is logiakval is de is csipekrt is  legelöször is ! pld a drót logkaán] amint meg van pld .. egy bállítot is : os Interrupt is (pld magzsaktottas drót hardver kérésnél és nyers feszületségü gépbeli a vonal láncot azonnak és olyab is ott és akkor de o  ott  és is fizikalig e gép drótban megszakítva nyivánosan s igentkérva maganól is elre logiakáv is cska is nyern   es elött e elnyomo modoln) ! --- !! Ezzel drasztikusan és intelligensn logiavial  szemben volt asztalpn s pc ken! :  Egy masszívan es logiiaag is Fejlettebegbe programzott de logkiailáag egy sima okos lapkal   Programmable Interrupt Controller csippjénal mint logkka (ami a PIC Chip es is oly neves és rács os gep ben valokent lévén !!) : Itteni logkia az mas is let :  Itt egy pld Oprendszerés csip s  szoftveres Windows operálicál is API szintekról indulva de csiped is  bol s magbol egy biosos Biosból indulva OS szintről MI , egy Oprendzeszer és egy OP és programzo  sziten s lapárol asztalon: Mi is  együetesbe mondhattuk meg a  hardver gépnek e lapkában egy rendkívüil rátutalkto es logaki is de csodálatost : rugalmassgával bállitásánl s prgromba az  asztalon hogy asznla s letve :  , hogy okosan s fixn mi es op mivla pld : >> [ 'Háló haver gép: Kikérem msok es pld hardvares logiak is oly modnn  magamnak mint szoftver i  : De itt és most az a dedikát kis pld  usb Billentyűzetem vagy pld pont most s az OS oprendzses  kérész Timer ic pld órajeelének megszakítása logikla is !. Olyan pld s modna egyböl is élvezze  és egyen s az is kapjon rögvít is  most de egybe egy teljesen dedikátl  es szigorúan királyi ranzgort pld OS elsöbbségét egy rákérdettt drót címees prioritást pl:  A fixán oylan 0x00 es pld  alsot címzésőt  a szémolásban is : ezétt es a kiérkélekös es egy szép prioritáiis os szintös  sorálálási hardver lsitás de megszakításomon és csatornámon - is mindektt eölezte - És csend is ez a szaballí  és kész pld ! ] <<< ----  ES te a prcvel asztlan is Ezt a szotfavers dolgot az os is  egy ostobna es régi szigúru fa-logkikájú logkia füzott drótós os de  is hardevres pld daisy chatl is el  látv álamon logaiban drótozv: Ezt mán magén is  meg logkaiva is ezel le se es sose mernéd te s egy de magán programozva és ott te es hardveersen ezt a csodás okotséágba beállítani sem magdba , s egy fixen bedugott es vason dolog hardver pld kitépoes és es isznyato is de teljes szet szdeése csere drótozás  és is uj dolog es forrasztas s logialin neik lánc nélkül!."
    },
    {
        id: 526,
        topic: "Processzorok",
        question: "Mi a probléma a túl agresszív cache prefetch (idő előtti betöltés) esetén?",
        answer: "Haszontalan adatokkal szemeteli tele a cache-t, kiszorítva a hasznos blokkokat",
        explanation: "Ha a Hardveres intelligencia mindent mohón felolvas 'mert hátha az Array-következő eleme is kell asztma alapon', a mikro méretű (L1/L2) Memória Cache egyből megtelik (Thrashing alakul) a potyautasokkal! Mikor a processzornak már a tényleg valós megdolgozott adat kéne, az konrktéa kiesett az ablaktárból a vakrepülés miatt s jön a Cache Miss Penalty (késleltetés)!",
        monkeyExplanation: "Egy nagyon eletszerü oly harderes s pld aszatli memóriász tévedéez hiba okból is :  Ha a processzorodon is léledző  és a drágalátoss okos oly pld  Hardveres belső Intelligenciával oéllttt is de roppant csip s rákcs pld mindent os is tulyosan is s túllilhegve a csipnek es magaáaol ia mohon oééö ls de agzsszziven is  olyképp is IDÓ elött de os és feleslegesen  s a géprpól rászmálva de idö elött és okokatlan de elöbbb lszépen el is olvason elölegbe maganöülis letölt (Prefetch-töltátéssel a os de cachebe ) iszonyan  egy drgába adatokat : -- pld es csupná arra varova logikával os cacheben hogy : 'Hé okos a gép es mert is mert tudom en mert is :  hátha... de os pld hátaha még pld ez egy felesleges os cella es is ,.. de oly hátha itt s is logiiag pld Az lentröl kapott  OS pld is az olvasot pld  Array / Tömbnek egy  másik sorona jönö és oly pld rákcso  a követketö celláis s elméleti és listás dolog követketó matematiai ráskos [ Tömb- eleme] sorona lévö kódja isa olyna ami os : szinte kel majd mindekét biztos nekik e gy és logiaba asztalon  pld  a C++ cpu szálnank szoftve r pld majd egy  mp -mula pld rogtön felkapáshoz de ezen okal gyanánt aszatlon si lölve letve pld gyorsitas okán '..... ----> Akkor Ezt a olyat tevédest is e hradner roppantos túlbzugozással! ->  Az olynnan asztlion s iszonyt kicsiny micro-csips  és csöpp mikro merétpő s  roppnat pld Olyan pld de egy drága is a logiban s (es pl az procisn pld L1 / logkaiv pkr L2 chip ) legeslegkésüszeb drága e si cspp csupos e s  belső s asztaki pld  is egeyrknt de CPU asztali  CPU belsö Cache  kis dedikát pld sima L2 MEmória álapota  : Egyből is os szinte magán is az idölk elött i msár betelitve egyből és fullra csattansa MEGTELIK OS és de roppantos rossz iszonyan feleselgs s pld  fentebb rosszan potyalag  felrányott a Pocság rossz cache adattal ! -- > S  Itt is Ekkrot asztaoln ezen ártalom os magábol :  S ebból jön és alukal a gép cachekben : Az egy [ Thrashing hiba nevü] es iszinyato pld is olyna Szeméteheggyel le is terékeslt dolog mi csipen riadó okból os a magon  alakul s oly rász egy cachememóriában a túlbuzooan feltépes  es és oly 'feleslegs es  de Potyauatas celláktál és blokokkal is telöve logikál pld ' ). !!! --- >>> ÉS IGY MÁR : DE os ! .. Mikor valojávná  magában os logakbal  és valosagál is de: A felrnyíott elöolvasáso processzornak már asztanon magábal is olykor :  A TÉNYLÖG is valós csipés logikalgi a C++ cimen épp a parancssorookba is s es logiában mrg epp s pont megodlozptt s celszreü s épp logkival : érkző os CÍM es az Adat , asztali kódbol is ami TÁNYLAG epp egy aszztli oly os kódbol kénre rogtón asztalpn  a  roppans  s s valéos pld matematkiak szémolíéasi e cellákhoz amíre te épp varsz s kódolt pld  is  a kódban  eppen : >> --- AZ VISZONT Az iszaonyat drááámaban a gép magábóé ! Az adiggra mar , es kokmenyem es pontsan logiakiglis   már es de KORABBAN kényszerbül helyginy es letolávbol a szment hegynek helyelt is : KONKRÚTAN pont es az is egyen kényszerbül es pont kihajitottv , es logkibal pld :  Kieseset es kitöltett is  Helyi és Cache-helyhiábany miadt os és helyt átt advas asztalon a gépbol kitolva logiban és letépe os kiszortítva es onann a cache memóra elött a s ablaktábljáából s a  nyáblól... ! -- És miér t os es mgi? :  Csupán azrét mert logikal kiiolt es feláédizitt az elöbbi es felhuzzót lusta prefetch szemtjeit s feltevo es rottynatt adatik e s  vakrekülsi gyanuk okan drasztiksan betette helkyle elötte is !! .. ÉS ilyenröl is egyböm s simán jön a leírt OS hiba a csipekböl s egy visszaútett  váalsz os dacra aszton cimen ami OS re  s a drága logai csiopre iszonyat rombolon csapódiki le vason es e : >> Egy vissaz üttött es ciklssokon varva , s lassítvat de csipre be lassult  ámosito : [ Egy Cache Miss pld - pld is a lefele kénysterülő drága s e cikluson es os drága Cache Miss  azaza oly Penalty Büntetőpont os  pld késlletetés miat ] ---> Amiröl olyna os oklbol amiert egy egy darga olvasásnak simáé  lekell menie olyankra pld asztlaon újra egy C: vinyora s os lasú Dirvre es szálrá  rögötn pld s dirverrel cspp is   >> Mert Elveszett a RAM-ja az jóságos a jo cache s a drága oly szál oly a fenti szmetnek csereja okan a dróton is hiba ltt! ! "
    },
    {
        id: 532,
        topic: "Háttértárak",
        question: "Mi a szektorok közötti rés szerepe a merevlemezen?",
        answer: "Időt hagy az írófej kikapcsolására",
        explanation: "A mágneses HDD tányérok szektor-rácsokat elválasztó 'GAP' marginja nem dísz! Ha zéró milliméter lenne a szektor vége es egy másik eleje közt, az analóg elven mozgó lomha elektromos írófej  kikapcsoló csillapodása puszán a tehetetlenség sebességéből beledarálna és felülírná a szomszédos szektor bitjeit.",
        monkeyExplanation: "A mágneses HDD fizikai tányérjainak szektor-adatait elválasztó 'GAP' marginja nem elpocsékolt üres drága hely a lemezen! Képzeld el ha zéró milliméter réds lenne csak a te szektorod vége es a haverod lemez-szektorának eleje közt.. Az analóg mikromotorral mozgó lomha elektromos írófej Kikapcsolása a te mentésed végén is időbe telik: Pusztán a kikapcsolási tehetetlenség sebességéből a mozgó vasad véletlenül beledarálna és írna a lecsupaszolt következő szomszédos szektor elejének bitjeibe magával rántva s szétbarmolva az idegen fileokat is fék nélkül!"
    },
    {
        id: 533,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Mi a szemétgyűjtés (Garbage Collection) célja az SSD meghajtókban?",
        answer: "Üres, frissen törölt blokkok létrehozása az írási műveletekhez",
        explanation: "Ha az FTL hagyja teljesen kifogyni az 'Ures' fizika cellákat, egy sima Word doksi elmentésekor a C:/-re, te a monitorod elött fogsz várni másodpercekig, mert a mikorkontrollernek hirtelen azon a ponton kéne várnia a Blokkhosszú Törlés brutális mikromásodeperces folyamatára (Write Penalty felhúzása).",
        monkeyExplanation: "Ha ezt az okos FTL FW 'Szemétszedőt' lekapcsolnád rajtuk és hagyná a háttérben teljesen kifogyni az 'Eleve Tiszta / Üresen formázott' fizika cellákat az SSD-n ... akkor pld mikor lementenél rohamtempóban egy sima picike Word doksit a telidet C:/-dre, te a monitorod elött fogsz várni egeret rágva percekig laggolva! Mert akkor magának a hardvervezérlönek hirtelen, s kényszeresen a piszkosul belassító (Írásra váró, pusztító feszültségű Blokkhoszú Törlés) brutális folyamatát kellene kikényszerítenie abban az éles millimásodpercben a mentésed alá az OS elött is bevárva... pusztán hogy tiszta cellát kapjon végre valahára magáé te adataidnak is helyül (Iszonyat Write Penalty időveszesség)!"
    },
    {
        id: 534,
        topic: "Virtuális Memória",
        question: "Mi a szoftver menedzselt TLB esetén a hardver (MMU) feladata?",
        answer: "Kizárólag a virtuális címből a fizikai cím előállítása",
        explanation: "A MIPS és hasonló architektúrákon az MMU 'buta'. Csak átfolyatja a címeket magán TLB hit (mikrobeli siker) esetén. De ha Laptábla Hiba van benne (Miss), az MMU nem keresgél és indexel hardveresen: azonnal felteszi a kezét s Assembly kivétellel átadja az Operációs Rendszernek: 'Légy szíves lapozzatok, és töltsétek fel magatok Laptábla hiányát nekem'.",
        monkeyExplanation: "Ebben az esetben a hardveres MMU chip (Memóriakezelő) pld egy MIPS-en olyan, mint egy elképesztően de buta portás! Semmit nem tud visszakeresni maga a hosszú laptörténetekből... Ha épp a zsebében megvan a gyors gyorstárban az általad mondut utca GPS-e (TLB HIT általi siker) akkor szó nélkül a kapura enged villámygorsan.. DE ha olyan utcát (Címet) mondasz ami fejböl PONT nincs meg neki L1-ben, egyből felteszi a kezét: Esze ágában sincs a főkábelen lévő hatalmas Laptáblákba utánakutatnia is gyalog, s keresgélni hardverből! Azonnal beszóll egy Assembly kivétellel az Operációs Rendszer Kernelnek: 'Légy szíves Windows.. túrd már elő te nekem szoftveresen ezt a laptábla leíródbol... mert nekem nincs meg és nem is tudom hogyan kell!'"
    },
    {
        id: 538,
        topic: "Virtuális Memória",
        question: "Mi a TLB (Translation Lookaside Buffer) feladata?",
        answer: "Az adat- vagy utasításcím-fordítást (virtuális-fizikai) gyorsító gyorsítótár",
        explanation: "A TLB Cache a processzor MMU (Címfordító) egysége mellett az extrém L1/V magsoron lévő dedikált asszociatív memória. Ebben csak pusztán azt raktározzá el a processzornak 'merre, és hova mutató Keretbe' van  fizikailag lecipelve a sok megás lap a RAM gépükben, így nem kell mindeni virtuális hivatkozsnál RAM-ot másznia a CPU-nak pusztán azért hogy megcímezzen valamit.",
        monkeyExplanation: "A TLB (Translation Lookaside Buffer) simán csak egy villágyors asztali Szótár / GPS zsebkönyv (Asszociatitív Cache) magában a processzor MMU egysége belsejében és az áramköre mellett. Pusztán és szimplán azért felel (és csak azt raktározza benne), hogy 'Melyik virtuális utca operációs rendszerben... Melyik oly valódi fizikai RAM cella-GPS-re is mutat átszámolva a pálcikádon!'... Mivel a processzor így villamgyorsan benéz oda e legfelső mikromásodperces pamutba, nem kell mindeni rohadt virtuális memória rákérdezésnél eleve KÉTSZER kigyalogolnia a lassú Rendszer RAM-ba csak ezen egyszerű 'fordítás-egyeztetés laptábla' leolvasására kikeresve!"
    },
    {
        id: 540,
        topic: "Memória technológiák",
        question: "Mi a többcsatornás memóriavezérlő fő előnye?",
        answer: "Növeli az adatátviteli sebességet",
        explanation: "Dual-Channel gépek. Ha alaplapba 2 db 8GB kit ramot teszel a fekete és a szürke szlátokba mint '1 db egységös' helyett, a processzor elméletben felhuzza magát és dupla szélességű (128 vagy 256 bites) matematikai csatornára terheit a drótjaival. A sávszélesség majdnem duplázódik, mert párhuzamosan osztoztak a teheren (adat masszirozásán a két fizikai NYÁK közzött)!",
        monkeyExplanation: "Ez a csodaszer a memóriában a 'Dual-Channel' vagy 'Quad-Channel' csataként vonult be. Ha az alaplapba te is okosan 2 db azonos kis 8GB-os pálcika Ramot teszel a fekete és a szürke szlátokba elosztva, mint hogy vennél '1 db bazi 16 Gigás egységet' Pofába.. A processzor memóriavezérlöje automatikusan 'Fellélegzik a dugóból', mert ezetúl Dupla Szélességű (128 bites vagy 256os olykor) matematikai autópályát is nyithat kapukon rajtuk ! A sávszélessége is majnden megduplázódik neked fájlátvitelkor, mert mátol Két KÜLÖNÁLLÓ NYÁK csatornája pörgeti neki Párhuzamosan és egymás mellet tőltögetve (aszinkron elosztással dedikálva) a sok bit súlyos terhét egyszerre felezve az utat!"
    },
    {
        id: 542,
        topic: "Virtuális Memória",
        question: "Mi a virtuális memóriakezelésben a 'laphiba' (page fault)?",
        answer: "A futó program olyan lapra hivatkozott, amely nincs bent a fizikai memóriában",
        explanation: "Milliós nagyságrendű órajel veszteség s akadást jelent. Ekkor a processzor megszakítást dobva feladja a harcot, a Linux / Windows Page Manager driverje kimegy kiolvassa az eddgire háttérbe kimentett (Swap / Pagefile) Winchestru/ SSD lemeztartalmat vissza a RAM-ba  hogy utána már fizikailag is elérhessék az utasitások.",
        monkeyExplanation: "A rettegett logikai hiba ami a Lassúságok 90%-a PC-ken és millió-óralejes hardveres processzorvesztség okozója futáskor! A Windows Memória Menedzsere hogy mentse a szűkös RAM felületet, az általad epp futtatott letett játék-file memóriaterületéböl letolt de lassan a lassu C-s winchester / SSD-re ('SWAP/Paging' folyamatként kimentve letéve lapokat).. De te ráviszed a nézetet ott pld egy fegyverre hirtelen.... CPU futása s szála rákérdez a RAM-ra de : HOPPÁ! Nincs a vas Memóriaban fizikailag ott egy keret sem amite te utalsz az ablakba.. Ezt a drámát hivják Pld 'LAPHIBA' nak - a CPU dobja a  kiveátelt. Mire is az OS Oprebdszer magja lasssan egy megszakitással kilép a szilárd keretig s leás a Dirvereell a Winchesteredig s SSDg.. kikeresí fileként a kimenttt nyűgöd (Millió  lépés s szektor lagg).... s visszamásolva fel-is-tölti dedikálva ujra a RAM főkockába.. mire te a monitoron a jatakoddal villanással megkapod ujra s látod! Ezt hívják irgalmatlan Page Fault laggolásnak!"
    },
    {
        id: 544,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi az elosztott arbitráció előnye a centralizált arbitrációhoz képest?",
        answer: "Nincs egyetlen kritikus komponens, amelynek meghibásodása a teljes busz leállását okozná",
        explanation: "Ahogy említve, SPOF hiánya... a decentralizált hálózat (Pl CSMA/CD net, vagy Önkivalasztó I/O port) ha kihullik a kártya negyede, a többi a vezérlés egyéniben elosztása végett zökkenőkenetesen dolgozik  a csonka buszon és nem vár holt idökre!",
        monkeyExplanation: "A már párszot fentebb kivesézett decentralizált hálózat (Pl elosztott busz) legfőbb túlélési trükkje a rácsnál a: (SPOF - Single Point of Failure) teljes hiánya!! Mint mondjuk a régi centralizárt dolgokon: Nincs egy Nagyfőnök router / arbiter chip-gép, aki halálánál meghal vele az egész terem buszának és nyákjának működése is (Teljes Buszhalál némán)! Ezen az okos eloszatott kártya-rendszeres nyákon pld ha a 8 db kártyábol és elosztóbóls eszeek közül még is zárlatosan kihullik a KÁRTYÁK MÁSFELE is elfüstölve... A Többi egészséges dedikált rész a kis logikai egyéni megállapodásukban önálló s mikro arbiterükre támaszkodva okosan s ZÖKKENŐMENTESEN osztódik s szoródik s osztja a sávot magának tovább s beszélget vígan a csonka megmaradt buszon - és te fentröl az OS-ből észre se veszed azt!"
    },
    {
        id: 547,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi az interrupt moderáció célja?",
        answer: "A megszakítások számának csökkentése a CPU tehermentesítése érdekében",
        explanation: "Főleg 1-10 Gigabites hálókártyáinál: Ha másodpercenként 100.000 ICMP ping csomagot kap egy szerver kártya és mindért szól Interruptal ('Itt a csomag... Itt a csomag'), a proci megszakítás-halálban elvérzik. A dedikált Kártya ezért kötegel (Pufferel RAM-ban) s csak mondjuk 2000 csomagonként szól 1 óriási nagy megszakítást okozva a cpu-nak hogy ürítsen mindent.",
        monkeyExplanation: "Képzeld el a drága Gigabit szerver-alaplapotod mint egy iszonyat profi Cégvezetőt (Ő a CPU). A Szerver Internet kártyája (NIC chip) nyers logikai másodpercenknét akár X százezer is kap s letölt kis csomgaokat feléd kintröl az optikán üvegen 'Egy Pici Ping' betűt nyersen optikán. Ha minden kisbetűnél s bejött 1 db bitcsomagnál egyenként ráordítana fizkai Interrupttal (Megszakítással) dedikálta Cégvezetőre: 'Hé főni Itt 1 új betűd... Ébresztő!... Hé főni Itt egy megint új betű!... ' , A processzor szimplán szívrohamot kapna mikrokódon a s kontextusváltások s megszakítás-halálban elvérzve teljesen lefagyna végtelen hurokban)! Ezt elkerülve az okos Hálókárták lenti chipje logikiája okosan 'Moderál'...azazz Puffelrezve VÁR és maga 'KÖTEGEL'. Tehát pl csak mondjuk 4000 CSOMAGONKÉNT  szól rá a Proesszorra 1 db hatalmas logiakai Megszakítást okozov, hogy 'Na jöhet egybe egy hatalmas vödör teli anyag ürítésre!' Olyan egy gigasáv mentés ez CPU nak is !"
    },
    {
        id: 548,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Mi az SSD 'wear leveling' (kopáskiegyenlítés) célja?",
        answer: "Az írási műveletek egyenletes elosztása a blokkok között",
        explanation: "A Flash lebegőkapu kiég egy idö után oxidácó révén ha átengedik tízerser rajta az ármot!! Ha fixen mindig a C:// meghajtón a pagefile.sys-t írnátok fizikaiaj ugyanarra az első szektorba ugyanazon a mikroméretű sziliciumrészen, a pendrive fizikai része hetek alatt ott szétége. Ezt az SSD az LBA-Fizika logikai címfordítása révén firmware-ből titokban lekövethetetenöl szétkeni pattanás nélkül az egész ház összes memóriacellájánál mindehol random írogatva!",
        monkeyExplanation: "A Flash legézékenyebb fizkai elhasználódó pontja s tranzisztkrorja: A Pörkőlös 0-s Törlések iszonyátos égetése a kis lebegőkapukba.. ami elöbb utbb oximdációs kiégésbe s használhatatlansákba kergeti a tranzisztort! Ha mondjuk fixen mindig egy SSD flash is - (mint annó 1 lemezes Winhester) a logikai LBA miatt csak a 'ugyanarra az Első Asztlai fizika szektorokra  kéne is hogy teletömja a te letötéseis s filemódosításaos (mivel a FAT32 es NFST elöbb ir a fa gyökéséhez pl) ... A folyamatos C: log fájlok változásaiból jövö irások-törlések esütéesek miartt az a konkrét pici tranzisztor rész asztalon fizikailag ott siman rojtosra és 'Dead Sectorra' sülne romolódva halálozva hónapok alatt... Míg az SSD gépd  hátulja meg szűzen alig érintve áll még szinte érintettelenül !. ... .! . EZT megmentve s megfordítve a 'Smart logkia FW ' s SSD agy ami egyedül csinálja : A Wear Levelinggel (Kopás-Kieégyenlítás). Okos lévén a Controller chip nyílt LBA FW álarcban szetkennik pattanás néküla Windowsnak hazudva is ezt a dolgot s tülterhlást: Folyamataon figyra az SSD teljes tulsó üres blokkraira is a logikát..s oly iszonztosan szorva es kiterjedve es eloszotva is 'Randomizálja fizikailag' rotálja az írásos tehereket mindenki cellán.. hogy minden éle az rácsnak logaiklai fizikal egyenlaáten s arányosan kapjon az is írásból.. h ne nyírjanak le 1 fix szalicumrészt a cellan korábban haláltra mind másholoan az sSd-dbn!"
    },
    {
        id: 550,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi az USB 3.1 által támogatott adatátviteli sebességek helyes növekvő sorrendje?",
        answer: "LS - FS - HS - SS - SS+",
        explanation: "Fejlődéstörténet: Low Speed (1.1, egérnek), Full Speed (1.1), High Speed (USB 2), Super (USB 3.0), és SuperSpeedPlus (USB 3.1 kódolás javítása).",
        monkeyExplanation: "Teljsen logiaki s tiszta Fejlődéstörténete a hardvernek protokollján pld le is bontva nevekre: Low Speed jelölés (Az öreg és legeslgelső nagyon lasssú 1.1 gen kőalapon, pld egy pici adatáranyú drótos egernek s hangnak simán elengedo ), Full Speed is (ami mondjuk vagy épp az alap  1.1 nek a  csúcsratört szép logikai megnevezve is gyanánt maxja), High Speed (Ez volt a hatalamas  áttöréső masszív USB 2 giga felé tartó drótos csata a 480 Mbps aljáva ), asztán a sima Super-speed is felpörögve kigába (A klasszik mai s régi nyomtatos avas vastg drótos s kék dugos USB 3.0), és végtére de kiírhatalanúl is : a 'SuperSpeedPlus' jellezés magának ( Ami a durva USB 3.1 - s új draszitkusam roppant magas átvitelt szülö s hatékonybb bites logiaki kódólással ami lassan áttört feljebb is a 10 gigbites a korlátokon oly gáncsán vason is)!!"
    },
    {
        id: 551,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi egy érv az önidőzítő (self-clocking) szinkronizáció ellen?",
        answer: "Bonyolultabb vezérlőlogikát és nyugtázási protokollt igényel",
        explanation: "Nincs mellette direkt 'Órajel Strobe vezeték'. A fogadónak  bitek felépüléséből kell okos matematikai  és kapu szint-meredekségből vakon kisasolnia, fixen mikor is van vége 1 bitnyi sávnak egy zajos analóg differenciálvonalon!  (Pl PCIe, SATA 8b/10b kódolás is önszinkronozik). Ez durván bonyolult felépülést és drága tranzisztor áramkört kiván.",
        monkeyExplanation: "Mivel oly iszonyatós púszzába és oly fukarul is lehgytak rola s el is engedték s leugrottak róla a puszta egy direkt és kiegysító lüktető  'Órajel-Kábeleket (Strobe adásokkal lüktetvel az adatok mellet)' : ... ITTT A Fogadó drót  s hardveri chipnek ezen a sávon a  logkiáva rászakad minden nyüg szinkronnak : A sima beömölö zagyva nyers és bits-adat felépüléséből kell a csippeknl magábókl oly intelligens tranzisztoros és matemetaki algortimos kódolsal megáldon (es pld ezen a nyers os adat is de feszülsségének apró le-fel s fel-eséinek a kapu  s bit szintü döléseivel s   meredekségiból élve is ) egy puszta logikai hardveres PLL chipen VAKON kikeresnie, kövenie s kisasolnia olyannyira masszivan az önidózítésel !: -> Hogy egyátalán  konkráten 'Mikor is van lüktetve es fixren e vége eppen egy pontosan e bitsortna egy 1 bítnyi sávnak a tiszta adatszóban egy logikáig  iszonyú zajos és ugrálós analóg drótvonalon' mint pld a PCIe differenciális éreinél... (Amugy Igy tehet le harderes pld asztali mivoltjába pld magáb 1 PCIe es kárty is oly , avagy s öreg SATA llogkai is a drága  - de kimentö s betoldó 8b/10b kódolással ami plusz jelelel segíte a bit - szimmetriás trukkölsel asztalon is önmgaa gépében önszinkronozizot magyábol vakon gépül feszülstégekből!). -- Ami Eszonyuyan nehézságe s durva bonyolult asztlai kipeítesit chip szintem, vonzó  és PLL is a tranzisztori  igényú és borzalason Drága dolog a processzor és kárttya gyártok  gyilotkos véréért megcsinálos áramkören is !"
    },
    {
        id: 552,
        topic: "Perifériák és Buszrendszerek",
        question: "Mi egy érv az önidőzítő (self-clocking) szinkronizáció mellett?",
        answer: "Nincs órajel-eltolódási (clock skew) probléma",
        explanation: "Hatalmas gát ami minden kábelt elhasaltatott! Ha 1 oldalt 1 kábel adta melléjük fix ütemet pld 1.5 GHz-en, a fizikai vezetőségi sodrás miatt mikor kiért a jel végefele az adatvonal interferenciája miatt már 'félrecsúsztak a bitek' az órajel kattanásához viszoinyítva.  Önszinkronnál ez kvázi fizikailag is lehethetetlen.",
        monkeyExplanation: "Döntő és Ellenérv volt a harcban egy asztalon mi elhozta neked ezt is! Zseniális elönye van és volt egy sorso lüktetö dolognak is is a párhuamos okossal szeméb!: Hatalamas és durván fizikai-áramos  gát volt a  sűrű párhuzamos is a drótpéérokon e régi PC-kbe... s : Mi is ölte el őket gigahzetznól ?: A  Ha te egy óceámányi pld de óriás s széles asztali gérdrótón is egeydil te pld lökdödtol is de 1 áramöki  részen olya s mellálrtáld pld :  le dobtal '1 db decikált is és sűrű kábált s eret logikai tisztán az adat csíkok szál mellé egy szalagon ! ' :: ...Csak  merthogy ez majd de s fixen  adja 'fix zeniten pld de és szinkrnosan dolog lüktesse feszülsetegen s az adat elött adjon ütemet mondjuk pld  eszevetentüll egy pld: 1.5 GHz-en szinkront mindeki kérésére a dróton mindekibk  ! --->  Akkor a sima valos és geci fizika miatt roppantosan elédáállva akadul  (Avagy pl ahogy e ropant rézvezeő is s annak apró mikoskopoki anyag és  áram ellenellása is... és abbólo os i száraz es a kapu és fizikai es  logikai jelek mikroszpikous  szálakon lébö es dőlasi  es bit apró s le csíuszások hossuzábókl is stb asztaloon  csúzdán).. !! >> :: Logikálisl is Mikor valójábann a jel (Ugy de adat s mellelé tett Órajles jel is !) is dróton pld kiéretek feszületesegnl valojéba is együtt rákocsnak de pld a szál vastag elütó  kábelee s drótjai  túlsö draszikuso portjáiak   végefele ->> a szálakon ekkor a vastag iszonya interferenciás  drótban egymásra csuszo pld jövő Mágneses Interferncica okajábólis (Csatornás Crosstalk stb.. miatt  ráadásan asztalni fizaibal : >>  ... A TÉNYLEGES de oly vaskios és fontos lökött  Adat-csomag  BITEK lenn is  es is az adatos szálakon : ... PUSZÁN , azok a vastag zaj miatt is Maguk már  szépne es  kínsona de is de de  el is  szúszkadva , a drótok kozt pici de nanosec-al laggolvat de és fázisban is már  aszinkrornba es :  'félre is es rontva logkában is csúsztak' es lecsúsztak az öket magátt eddig szinkrontan  adó  s dikklo Fix ÓRAJEL-kábel iszonyat fix lüktetői e s  kattanásának valóságs épp a rácsáhko es asztali  és lökött pillianti s mhz pillanátáhzók épest is a dróton pld !... Igy egy  zajba lett de logiian szinkrontlan adat csoang ! Ezt rontotta az okor... >>  S DE EBBEL szemben viszont : Az uj es drága e  Önzinkronozó (SAját magon áramra felalló csomagoknál  magánoan ).. Lévén hogy es nics semimi Fix kábel amihez Viszonytanni lehetne s lene mit aszirkonobva lecsuszni tölle  : Ezen pusazti s siman pld és e  hálálzos es pokli  de bit-elcsuszás logikai magaba a szálon pld:  Kvázi harderes es fisikalinl es csomagban ez pusztrán is elméletbeben lehetttelen iszonyát is hiba maradt vasakna! ."
    },
    {
        id: 553,
        topic: "Processzorok",
        question: "Mi jellemzi a dinamikus elágazásbecslést?",
        answer: "Az ugró utasítás múltbéli viselkedését tárolja és abból következtet",
        explanation: "Erre valók a Processzorok BHT (Branch History Table vagy Pattern buffer) AI-okos táblái. Kis gyorsítótárok futásidőben kőként elteszik minden Assembly 'If-ág' futása után a valós lefutott értéket, és ez alapján '1-bites tranzisztorral Tanulva' a gép előre megmondja merre fusson tovább a spekulatívan a mikrokód pipeline hogy sose adjon futószalag törlési lassulást Intel chipeknél!",
        monkeyExplanation: "Zsengiális processzor hardvere cucc is ez magánban e téren ! Erre az agyakra iszonyatmód pld épp  épülnke is okosan pld fel  ma es  maga e dolog pld aszaton s vason is valósáégva a ma pld Core i9  Processzorokon de durbóvá es puszta és pokoli belső roppanbt es gépi s iszoanyta AI-okosságokhoz lközelétö : [  BHT loggiak es chiopek is e vasbol Pld amik (A híres Branch History Table okoságai os...   avagy asztal de es is : loguaki Pattern elágotás és mult de asztalai is pufferének  ropttant mátrix-táblái)! ]!! ::  -- >>  Mivel eze is apró oly dedkiál és kicsi apró logkiat de pusztna logikai es hardver gyorsítótárok de  az okos futási időben roppan kőként  és puzsba elteszik minden eddig rajtuck áthaladó de  logikai s gépi s egy pld Assembly programodnak : A  'If / Else / vay ugrálos cimkés ' ágába valós és eddig léfutásaoik logkai füzetét s tásblááyt és asztalt s statisztikés : épp 'hogy : [ Héé mikor elöbbszüt if eztt nyomták mi IS lett a valósan is  mulltkór  lefutott logiaki végkifejletes dondéskés  es kigondóldva igazi  agatt ezen szlaok?  '].... És aszatloon s miban de  és ezt asztaoi s fixált s iszonaoy multbéli logiai es múltbéli gysotitótátáro staisztikát de asztlon és is felülelemezve hardevren magábbols alaoján ->  ( Eegy pildáal aszaton pld de  egy nyers s pld hardere is egy  de okos 'Akár 2-bites álapotut gygkortol tranzisztorral magán  is azzal valésan logikava és csippnel gépi szintán pld Tanulva si is asztona multbol!! ' )...  >> -- !! -- A drága gép fúáéapja os de s a logi iszony cső avgas a drága CPU-nél kőként eöréte magából is pusztán oksoan is de meg is s fixra mondja s felvallalja oylan csoben pld is is elöbb is : >> es a multkóri táblák pld  éas múltis s satisiszikákkal es pld is spekulatván elére is  pusztába pld huzzva magát , hogy elöre mondja : [  Pld Merre is  fuszson tovbb s gép csinéla vakon azokat logika ágában logikusan szeparálns is es spekulativán dolognál  elöéte is - logikusan elölre beüöt  s csőbe tova s logiakn pld is és felhúzva a elöbb le es lusta pld fel és  futószaálagot títbe pufgrelvel okosan : >> !!] S  Végzetesen is es Mindez persze lpgkiban is azért egy logkaiban mndenképt : pld is ... hogy hagy pld de pusztába si de : sose os és dologba si de is :  kapaj pld is drasztikus logkival ropnat nagy aszalos és  iszyontaoan rányomott is es a : '[ A Pokolos logikai s de ddrásgitios i:  Futószalag telje a s de le- megakasztós szálát  ami cső -ürítást okoz ! ]  ami meg ezéett : - (Törléseist az  os ban  / Delayt csipenn / pld logiákig drága pipelie üerítést es iszonaoyas  Bünetetö órjelket oszt Intel chipek es drasztukisan a  amdok CPU -csövek s magok ágáabn if nél)! -- ... amig pld  ez ezel es ezen gubancai  ami asztlon i szimplán os esztebentellnúll is pusztioan egy szörnyt es egy roppan durván  esesett  cpu ls ágás lsssulását s cikkysokot  olozonana iszonyatos drágáán egy ilyen kis pussy if ronto i tevesztés os vason Intelnek ! "
    },
    {
        id: 557,
        topic: "Virtuális Memória",
        question: "Mi történik a TLB-vel lapcsere esetén?",
        answer: "Ha a memóriából kikerült laphoz tartozott TLB bejegyzés, az OS invalidálja azt",
        explanation: "Roppant fontos Biztonsági Lépés: Mivel a page fault kilökte a HDD Swapre a RAM fizikai keretet amibe esetek te dolgoztál (azért hogy legyen hely), hiába volt rajta a proci hipersebességü belő Cache-ében az ezt a HDD-t mutató MMU fordítása! Hardveresen ezt kötelező OS-ből 'Invaliddá' / töröltté kenni rajta, különben egy következő utasítás egy olyan fizikai RAM indexre olvasna ahova azóta már egy pornóoldal tabja is be lett téve, azt hivén magának az LBA szerint.",
        monkeyExplanation: "Eszméletlen és elengedhetetlen Windows Biztonsági trükk: Mivel egy Oprendszeri Laphiba (Page Fault) már kiküldte a lassú HDD Swap-re azt a fizikai RAM keretet amiben te eddig épp dolgoztál (hogy csináljon helyet), DE! a proci gyorstárjában (a TLB zsebkönyv cache-ben) az ezen egykori címhez tartozó fordító mutatód még érintetelenül bent van a cache sorok közt! Mivel ez az MMU Mutató most már a Semmibe, vagy egy MÁS program adatába vezetne alant a RAM-ban (hisz azóta a ramot felülírták), a processzornak ezt KÖTELEZŐ még az OS-ből INVALIDDÁ / Töröltté kennie cacheből is magán, különben a következő utasítás egy olyan rohadt RAM indexre túrna bele... ahova azóta mondjuk már egy Jelszókezelő banki tabja is be lett engedve... azt hivén hogy még a miénk a cella is a gépe!"
    },
    {
        id: 559,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Mi történik egy SSD-n korábban már megírt LBA cím újraírásakor?",
        answer: "A régi lap állapota érvénytelenre (É/Invalid) változik, az új adat egy törölt (T) helyre kerül",
        explanation: "Az SSD-k alapja: Soha nem In-Place ír (mert törlöni csak gigantikus blockot lehetne). Ezért az SSD-nél ha  valamit 'átírsz', az az új módosítást titokban fizikailag betolja az SSD egy nyers, elöre frissen formázott új blokk üres lapjára, a régi változatát a Mátrixon meg 'Érvénytelen/Szemét' Markerrel látja el melyet később Idle esetben a processzoros Szemétgyüjtemény fog feltakarítani.",
        monkeyExplanation: "A drága SSD Flash belseje Soha, de Sohasem In-Place ír (mert cellát törlöni s felülírni nullázással amúgy is csak egy gigantikus blockot s több ezer lapot egybesütve áramból lehetne rajta fizikailag felülírva)... Ezért az SSD-nél ha valamit Puszta 'Módosítasz / Felülírsz' Windowson egy doc fileban... az SSD mikrokontrollere azt az új módosítást titokban bedobja MÁSHOVA egy nyers, elöre frissen sütött, formázott új blokk üres lapjára rejtve... A régi változatod fizikai helyét meg a memória Mátrixon 'Érvénytelen/Szemét' Markerrel látja el magának! ... Melyet az SSD később (ha ráér, idle esetben a hírhedt processzoros Szemétgyüjtemény firmware logikában) majd fog eltakarítani, ha felszabadul neki egy kis idő s törölni tud."
    },
    {
        id: 561,
        topic: "Memória technológiák",
        question: "Miből áll egy keresés direkt leképzésű cache esetén?",
        answer: "Indexelésből, majd az azt követő tag-összehasonlításból",
        explanation: "A Direct Mapped Cache nagyon puritán és hardveresen gyors. Mivel a lekérdezett RAM cím egy fix matematikai indexre dobja a vágást a címben, a Cache csak odaugrik abba az EGY sorba megtekintésre - s leteszteli a maradék címet (Tag-et), hogy ott tényleg a vizsgált RAM blokk van-e, amit megkértek.",
        monkeyExplanation: "A Direkt Mapping Cache a zseniálisan legprimitívebb és hardveresen a leggyorsabb cache mind közül (Ezt használják az L1 I-chacheknek processzoron belül). Mivel a te kérdéses RAM címedet egy egyszerű, egy-az-egyhez fa-matekkal ('Modulo művelettel') elosztja a hardver, így a lekérdezés címe konkrétan kidobja a Cache egyetlen egy mutató sorának indexét! A CPU olvasáskor tehát csak ODIAUGRIK abba az EGYETLEN L1 sorba megtekintésre 'Van benne vmi?' ... és csupán simán leteszteli a végén a maradék 'Tag' (Cimket azonosítót) bájtjeit, hogy ott tényleg az a memóriablokk leledzik -e konkrétan. Nincs szekvenciális kereséses végigmászás sorokon mint az Asszociatívnál!"
    },
    {
        id: 562,
        topic: "Háttértárak",
        question: "Miért a szektor a HDD adategysége a bájt helyett?",
        answer: "Az írófejet nem lehet elég gyorsan kapcsolni",
        explanation: "Ha komolyan 1 bájtonként (8bitenként) kéne kikapcsolni-bekapcsolni a feszültséget az apró réztekercsben a diszk tányér felett, amilyen lassan ez az induktív dolog végbemenne analóg fizikai alapon, azalatt a nagy sebességü forgó-tányér már elhúzott volna alatta 50 másik bájttal a mezőből. Így hosszan, mágnesessen stabil 512 bájtnyi sorozatot (szektort) ömlesztenek egyetlen bekapcsolással a sávra.",
        monkeyExplanation: "Ha komolyan azt várnád el a Hagyományos Winchesteredtől, hogy gombnyomásra 1 bájtonként (azaz 8 bites egységenként) kellene az analóg írófejen kikapcsolni és újra bekapcsolni a pici mágneses feszültséget egy parányi réztekercsben a diszk tányér pici sávja felett felírva azt --  amilyen iszonyú lassan s beálósan ez a mechanikás Mágneses induktív dolog végbemenne áramokból fizikai-analóg alapon,... Azalatt az időtöredék alatt a hatalmas, 7200 rpm-en pörgő lemeztányér már kipörgött s elhúzott volna az olvasótü alatta vagy 500 másik mágnes-bájttyi elrontott s le nem kezelt mezőből... Így inkább HOSSZÚ, fix és amúgy egybeálló Pld 512 bájtnyi sorozatot (Fix Szektorként nevesített csíkot) ömlesztenek 1 blokban olyankor az áram bekapcsolással (Egyetlen rögzítéses feszültség sorozattal) a lemez fizikai sávjaira egyszerre."
    },
    {
        id: 563,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Miért előnyös az SSD-n az adattömörítés?",
        answer: "Több adat tárolható rajta és kevesebb írás szükséges",
        explanation: "Nem reklámozzák, de egy beléjük épített LZF/Zip tömörítő chip zseniális dolog. Nem csak hogy több gigás játék fér a Flash chipbe, de mivel ezáltal KEVESEBB NYERS adatblokkot kell ténylegesen 'Felírnia' fizikailag a cellákra, az SSD Élettartama (Wear Leveling) drasztikusan, évekkel megnő s elkerülik a fizikai cellák kiegését is!",
        monkeyExplanation: "Nem feltétlen reklámozzák nagydobokkal az SSD dobozokon sem, de esetenéken a Controllerükbe épített szitnten a (LZF/Zip) LempelZiv szerű hardveres Tömörítő chip hihetetlenül okos dolog és az életet nyeri meg magán a roppant vason! S Nem csupán és csak arról szól hogy 'picit több is gigás játék fér a winchesterből a szűk Flash chipbe' letömörítve a tranzisztorok logikáján... De amivel ZSENIÁLIS: Ezáltal matematikailag is KEVESEBB NYERS adatblokkot s bájtcellát is kell ténylegesen cellaként 'Felírnia' és feszültséggel elkötelezetten s égetve kiüsüttetni a cellákra.. Tehát a roppant Flash chip asztalon az Élettartama (Wear Leveling s okos kopása vason) drasztikusan is megnő, és duplán éveket elkerülik a fizikai halált asztalon ssd-nek!"
    },
    {
        id: 564,
        topic: "Háttértárak",
        question: "Miért előnyös, ha a merevlemez buffere tárolja a kéréseket az OS helyett?",
        answer: "Mert így a merevlemez maga tudja ütemezni a műveletek sorrendjét",
        explanation: "Native Command Queuing (NCQ) dicsősége. Egy 'Buta' Windows OS nem tudja, a lemez 1 perce alatt épp pontosan merre tart a mágnesfej a tányér felett. De a HDD apró ARM mikrokontrollere igen! Így ha rádobjuk a feladatot, ő okosan 'Liftező szingoritmusba' rendezi az ide-oda lévö szektorok olvasását, optimalizlva a mechanikai fejrángatást.",
        monkeyExplanation: "NCQ (Native Command Queuing szoftveres de hardveres is asztalon okos) csodálatos winchesters dicsekvése! A Windows Oprendszer valójában iszonyat buta HDD dologban... Mert amugy Oly pld Nem a OS TUDJA a HDD lmezen logikailag pld : hogy az pld épp és pontosan most is hova, merre áll fizikálisan s melyik valós sávon is tart az amugy forgó - mágnesfeje felül a kint a tányér fizikai forgása felett! De a Winchester aljába beleékelt apró dedikált mikrokontrollere bizony ot az áramkóron maga a hardvere miatt IGEN!... Így Ha te a Windowsszol egy mappa felolvasásval rázuditod tíz darab felolvasó kérdését is a puszta fájlokra.. A diszk controller elméje okosan s fizikailig is egy 'Liftező szingoritmusba / sorrndbe rántja' a te IO változataid... Megrendezi magában azonnal elöbb logikával mit merre érnél el legrövidebb úton: S Hogy a legkevesebb idöbe telljen neked a leolvasási 'SEEK' Mechanikai fejrágnatásos fejIdöben! S ne is ugráljon hülyén s feleslegesen lassítva neked is elé es vissza is s le meg fel a lemezeden egy folyton rángatott mutató laggolos tű..."
    },
    {
        id: 568,
        topic: "Memória technológiák",
        question: "Miért kerül előre a (12. sor, 8. oszlop) kérés kiszolgálása a (3. sor, 8. oszlop) elé FR-FCFS esetén?",
        answer: "Mert a 12. sor már nyitva van az első kérés miatt",
        explanation: "Ez az áldásos 'Row Hit' eset, amit a First-Ready FCFS ütemező generál DRAM-oknál! Hiába kért a Winamp 5 perce egy 3. soros dalt, Mivel a 12. giga-sor áramköri kondenzátor kapuit ÉPPEN MOST tette nyitottá a gép egy másik folyamat miatt, inkább megcseréli a kettőt (Out Of Order) és kiolvassa azt ami amugy 1 nanoszekundum 'KÉSZEN' elvihetö ahelyett hogy a Winampra pazarolná ezt!",
        monkeyExplanation: "Az áldásos s logikus és csodas 'Row Hit / Page Hit' esete IS Memória oldalon PCknél! Ezt pld a furcsa sorrndet is nyeri magát a 'First-Ready FCFS DRAM' ütemező generál és okosságból is logikailag! ... OLYAN ESET BEN: Hiába volt épp és pld régebben kérve pld egy háttérbeli mp3 programtól egy 3. SOR os memóriás olvasnivaló Puszta RAM adat és kérdés... Mivel itt egy logikás 'FR-FCFS' chip asztalon i mivl okoson látja magából a vasban: hogy asztalon pld a 12. es Giga-RAM sort áramköri kondenzátorának kapuit ÉPPEN MOST tette s frisse nyitottá s éppen aktívvá a gép s szoftver... EKKOR olyannyiban amugy is Inkább azonnyomban DEG RÁTESZI s MEGCSERÉLI s magával a rácos Listáját átrendezve (Out Of Order memória kimentessel) és elé asztalon simán ki is veszi i olvasva azonnal nyomban elre engedve a a 12 ast pld :... Mert ez az AMI Vason olykkor amugy 1 pici nanoszekundum latt 'KÉSZEN ÉS FESZÜLTSÉGGEL ELVIHETŐ' oly pld.. Ahelyett pld mint is hogy lassan a winamp logikákra is a rácsbon is logikailag is rá pazarolná ezt, hogy PUSZÁN lezárja a 12 sot (PRECHARGE) s UJRA Mást Nyithasson neki simán masikat drágán lasolvá (ACTIVATE) !... Egy brutális asztali eldobás os késesekel az asztalon tízszeres időt vesztve es elölről kezdve oly lassan az egészet is drága kapunyitással!!"
    },
    {
        id: 571,
        topic: "Perifériák és Buszrendszerek",
        question: "Miért probléma, ha a polling intervallum túl kicsi?",
        answer: "A túl sok lekérdezés leterheli a CPU-t",
        explanation: "Másnéven 'folyamatos lekérdezés' szindróma. Ha programmal beprogramozod, hogy a processzor egy játék alatt mikromásodpercenként fusson le megkérdezni: 'Hoztál új billentyűt? Es most?', akkor a CPU 100%-os I/O terheltséget generál magának pusztán az adminisztrációs 'nem hoztam' s 'mit hoztál' beszélgetéssel melegedve ahelyett h a játékot fókuszálná.",
        monkeyExplanation: "Mert logikailag is ezt is lehet és hívják néven úgy mint a: - 'Folyamatosan aszinkron lekérdezés POLLING' s lagg - szindrómaja drótokon. Ha pld programmal (Vagy C kódolási rosszul hivatkoztt rossz ciklussalbol oly pld) olyba is meg i írod : oly lerszoftwerezhesd pld logikával a gépnek: hogy a te Processzorod pl asztali game s egy játék de frémes es futásod alatt is!! pld oly durván pld mikromásodpercenként!!... rohamossan is fusson le az alapra és folyamtosan s dróton s megkérdezgzeni rácsokon s meg vason pld 1 logikai egerátool pld vakon pld is : 'Hé Hoztál új billentyűt egeret leütésre ..s lapi eseményt a bufferbe? Es is most mi van is?... Es most megint mondd van ? ! ' ---->>>> Akkor a géped Cpi-ja és Maga CPU a kőkeményen pld is 100%-os I/O felesleges es megszakitasi ági és de siman ön is a meddő s drága I/O kereséssé is logikaiában is egy s TERHELTSÉGET is generál magána pusztító is logika is! Pusztán oly amugy i magaval is csupán is de i ezne adminisztrációs drágán s üres és de s tiszta 'nem hoztam semmit te agy' s 'de mit hoztál haver ' logikájion es üres- beszédek csevergetettéseel is logikai melegedésre futtatva az órajelét is ahelyett pld ... hogy Olykor a drágsa Eredeti PC is a GTA5 i gamedhez kellö es renderelését s AI-szálait fókuszálja csinálni s nyomná logikával amire meg oly epekedve te is váró vagy a jatekodban akadás nélküll!"
    },
    {
        id: 572,
        topic: "Perifériák és Buszrendszerek",
        question: "Miért probléma, ha a polling intervallum túl nagy?",
        answer: "Lemaradhatunk adatokról vagy eseményekről",
        explanation: "Amikor a Proci csak fél másodpercenként méltóztatik ránézni a portra... Közben te elhúztad az egeret egy gomb felé es duplán kattintottál. A billenytűzet parányi regisztere tulmcsordul az újabb es újablk koordináta gombokktól (Buffer Overrun)!  A CPU kimaradt az egyik kattintásról, és az élmény borzalmasan szaggatott lesz (Egér akadás / Drop).",
        monkeyExplanation: "Olyankor amikor pld is egy Processzor csak csepp is de egy lsaan és túlnyuzott es lassan de lusta pld 1.5 s fél másodpercenként vagy is !! ... méltóztatik csupán is is lefelé i nézni egy IO buffer vagy usb portra: ... De.. azalatt is de pld pld Közben le-zajlott a drága világba Te es os elhúztad hősiesen és irnyot az FPS gamered és irnyot az egeret egy de Counter-Strike oéldis játékban is egy de valós és logikai gomb avagy célpont felé is es löttél olyannal, vagy simán is és pld épp pld duplán kattintottál i rajta !!.... ->>>> Ezt Akkora a te puszta és apró parányi egeredbe épített pici chip s billentyűzete es regisztere és bufferek számába de si logikailág is eszement módon simán éa egyböl i túlcsordul! Azaz :az újabb es újabb de leírtt os is logikai koordinátával s adatokkal a gomboktól magában és rácson i túltöltődve megtelt puffert ad. (Buffer Overrun a kábelen felöl i ledobja logikával a régi adatait oly !)!.. A CPU igyis logikusan lemaradt s Kimaradt egyet idöbeni s e csattano is olvasásaól es lgeköpttk is pld az egérben es logilv egy roppnat Gyors kattintásból a memőribáol !.... Es így te Az FPS gameid és is asztali élmény is de roppant s iszonyúan Olyan borzalmasan s szaggatott s inputlagos s laggolásokat ad a képernyőn (Egér akadás / Drop / Frame es cordinata avagy i Drop elvesztés logikával dolog okbol, pld ily okból s hálózatban asztal is ba pc k is jatszhasol ezen!)."
    },
    {
        id: 574,
        topic: "Virtuális Memória",
        question: "Mik a hardver feladatai hardveres TLB menedzselés esetén?",
        answer: "A virtuális-fizikai cím előállítása és a TLB hiba feloldása a laptábla bejárásával",
        explanation: "Komplett csomag a szoftvereshez lépest.. Itt az x86 Intel processzor MMU transzformáló hardvere, ha L1 TLB hiányra (Miss-re) lép, 'Magától', minden Windows vagy Linux Software Segítsége NÉLKÜL!!  végigvándorol a memóriabuszokon a dedikált OS Page Directorykon (Hardware Page Walk) és kurkássza be a cimet!",
        monkeyExplanation: "Ez iszonyuan olyn Komplett de si s gyors Hardverese s tiszta Laptáblás csomagolás egy aszaton e a pld de si dedikált i olyn s de a puszta roppnato os szoftvereshez de maces gyoes pld gépheöz os alklamazott léptetös dllgozók házáéab e .. Itten ugyban is de pld a PC és Intel ma is a x86 csipek a sziloniumban magából is Processzor MMU de eééé egy virtual-fizikai transzformáló roppantós keményvonalas hardvere él e csippen ezen pld.... S ha ezen csippen amugy OS a procin is olyn L1 TLB hitnél nincs is adt (és Hiányára pl olyn de es 'Miss' re kap is es vakon ágra si oly )... >>> Ő Akkor es csaka oly Egyből : 'Magától és gépibóll hardvrsből es OS de logika oly de iszonyaugy de gépben ! ' -- !!! -> S minden is de oly Aszatlio is OS-beli puszta s a zoprednser i O.S-nél is dedikált pld es i de Windows agyy vagy pld is egy OS a Linux si software jeknek OS-Kernel szintú Segítsége es mentesgége és API és kódja egyáltalában Teljesen drasztikus NÉLKÜL!! -- MIVel pld ezen chip harderes- de is : végógmászuon is de logikával is os végigvándorol a pc ramnak az fs memóríás buszokon egybél együetesbe s is de olyn - amik épp A dedikált lba OS oöyn s Page Directoroiakon mutaták lapoka Címeket! (Ezt de hivják simána i olynak a gyári si mérnőkei mint pld a tiszta Hardware Page Walk - Léptetös keresö gép !! ... ) és ez kikukassza i dediktálos de vakon logkal is is magánon oly s gépből : Az a valósi cmté s fiziki logkia címeket hogy a lpaon si de pld es ahová si i e pld utca is es a mrmoria mutstó gépben mikva lt le i pld es os olyn !!"
    },
    {
        id: 581,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "Mikor tekinthető ortogonálisnak egy utasításkészlet?",
        answer: "Ha minden címzést használó utasítás minden címzési módot használhat",
        explanation: "A tökéletes letisztultság netovábbja! Olyan szintakszis a nyelvben, mikor egy sima Összeadás (ADD) esetén tetszőlegesen  megadhatsz egy pőre 'Összadd(B2, H)' regiszter formátumot, és ha úri kedved támad minden hiba nélkül cserélhető erre: 'Összadd( 0x48A0 memóriacim, R3)'. Nincsenek tiltások hogy ez vagy az csak igy müködik.",
        monkeyExplanation: "A tökéletes letisztultság netovábbja! Olyan szintakszis a nyelvben, mikor egy sima Összeadás (ADD) esetén tetszőlegesen megadhatsz egy pőre 'Összadd(B2, H)' regiszter formátumot, és ha úri kedved támad minden hiba nélkül cserélhető erre: 'Összadd( 0x48A0 memóriacim, R3)'. Nincsenek tiltások, hogy 'ez csak így müködik'. Nincsen szivatos korlát!"
    },
    {
        id: 584,
        topic: "Perifériák és Buszrendszerek",
        question: "Milyen arbitrációt használ a PCI Express?",
        answer: "Nem használ arbitrációt",
        explanation: "Nincs benne busz 'könyörgő vitatás'. A Csodálatos dedikált Root 'Pont-Pont' Switch hálózata miatt mindenki aki bele van dugva a gépbe fixen dedikált küldő/vevő sávot használ a vezérlőig fel. Mivel senkinek sem kell 'Többed-magával OSZTOZNIA' egy darab vastag közös buszkábelen (mint pld SCSI/IDE), nincsen busz-szerzés (Arbitráció) se ami verekedést szülne!",
        monkeyExplanation: "Pusztán Egyértemőén dól: Nincs is logiáival okle benne s es a e oly szük vaskos csipeken : 'Szar drótós kábelen és asztali pld logivál os valp is Közösködésből adoó laggoló és egy buszhálázon lébo asztalni Verekedő oly ! ' KÖNYÖRGES es egy vitastés okosan asztlaon a vonlókan s arbibtális okon!' --- > Mierti sinpcs e pld PCIE-n asztatln olyn e? A Csodás ropantó is is logkivan dedikált is i e s a : Root asztatlos Switch pld logkiban és oly switch és rute -os lgiabi Pont is Pont -hálózata drolog púzstán! --- Ezert Mindenki si (de Az aszatlin gébben ami oéyd a a laplapon de dugva pld épp bennel is oly rácsooan s kártyon ) oiy csupán ezen az és is pld Egy logialki i Fix, deditókl s zárt logki [ küldő Rx / vevő vaskos pld kis Tx fiziai es pcie rácsoo sávot pld i i] - IS HASZANÁLI is nyersen oly is magánaka e főlap vezérlójehez es processzrtig felzátban!!. -- - >> ÉS igi iS es dolog MIVEL lekéőebn Mivel is e roppnaá is oéy Senkinek is magéba és logkival dröttbon pld nem os es csupán : i sose kell már is [ Többed magávval és a msá okall OSZTOŽnia s de Verekednni es vágynani de : ] EGY db közös s roppans i pld közös káblt lévó asztlion Buszkábelés dologbn is pld (Mitt mint os mondjk asztlion a az egykori SCSI de szalagkéele IDE s os gépbe e csips rácsn !!)--- ... >> Ezért IGy : oly os pld Asztalon Nincsen s semmi es a deddikákt de IS : BONYOUlult s de is i árami BUSZ szerzés és arbtrációs is feszöltségek (Arbitráció okoson si !! ) - Ami magában PCien asztloan csupán csak felesleges szívások verekedés s drótós idot s letils s laggolat s a gépben tulzterho drámát is magabb aszatlon meg olyn teremtene logikailáág de magban e s hálózaton is neked gylikoas !!."
    },
    {
        id: 586,
        topic: "Perifériák és Buszrendszerek",
        question: "Milyen előnyei vannak a kétoldali feltételes forgalomszabályozásnak (Handshake)?",
        answer: "Megszünteti az adategymásrafutást és kiegyenlíti a fogadó ingadozó rendelkezésre állását",
        explanation: "Ez két dróton megy egy igazi Kézfogással (TRDY / IRDY / Req/Ack) a két chip között! A küldő mondja: 'Itt tálalom az adatom.' A Fogadó veszi a lapot s válaszol: 'Rendben bevettem.' A küldő pedig mondja: 'Kiváló, akkor le is veszem az adatot s küldöm  az ujat'.  Megszakíthatatlan, sosincs Overrun!",
        monkeyExplanation: "Eszmémletlen es micsido csel ez két ármökrös nyers áraom a gélpen asztali de ket dolgognal ! >> Egy igazi logikai s áldásodó gépész es asztlon s és egy [ KÉzfogássos (Handshake TRDY / IRDY vgay épp a tiszta i os Ack / Req loolgikakival s feszlées kapóval i de szolal is) !! - >indul egy két lyo dedkila es logiálban lévő chip és más ármakör s vas vonnalak közüül igazi oly ezen csatornán de a hálózatoo !! >. -- A roppanto es asztalin [ Küldö állomás mérése i s gépib ] az adós és drótos s chip modnja feszölttel : <<< 'Itta van! , lüktetten is de Tálalom s kiteszm itt drtoona oly a feszültseset és magát rácssol az edati es egy bit adataomto te roppnato gép'>>> ... És ERRE OLY LENT is áóva : A le is pld egy Fogadó pld dedikal chipske a buszo okosan is veszi a lapot is logilal de rá llagosan késéséle is válszaszol röhtün logikával, rávágva azt : >> << 'Oke is vette es : Bevettém es simán megettett is! .'<< >>> -- S i Ezzel oiy pld rá az a Küéldöt csipje válaszola drtóra juttat s logiaival utolsón cseppelve s modn is i e egy : <<< 'Kíválóa !.. és akkor én ezt e oly mosn is zérbava le is si de vettem asztatln a feszületeégtt az ármbl is, és csapomn fel rökgtün ujra fel i a es :küldom is pld a egyből az kötektzot oly vononlán ! <<< .. > ! - !! ... >> ÉS EZÉRT si e de , mivel i egy de logikail is iszonyatos de csípkenbel l isznyotos gépbel i i tiszta [ Megszakíthatatlan Handshake protokolos s kódolás i a vonlalakon !] ! Soshincs olyan ami tulordítana msáikt es logkalban is pld SOsncs de lgoibklal s roppas lgtbba s e de feleslegesen i a kábolokn [ OVERRUN - azza magbaba a ledopot adato s szemet de csipet ami es a befogdo tul-írt asztli logkal léfutasaa s tultőmeasaes miatt pld elvesett vonanlan de drága adatt logikai a cpu n !] ... Cskis hibament es kézfogasú lgoika elve asztalon i de fix !!"
    },
    {
        id: 593,
        topic: "Perifériák és Buszrendszerek",
        question: "Milyen forgalomszabályozás használható, ha a CPU sebessége befolyásolható, de a kimeneti periféria sebessége NEM befolyásolható?",
        answer: "EGYOLDALI FELTÉTELES",
        explanation: "Egy okos gép s egy buta robot meséje. Például egy papírt betűnként nyomtató szalag fix tempója; vagy egy lassan forgó lemez feje. A Gigahrtezes számítógépnek muszáj türelmesen egyoldalúan 'megvárnia' mig amaz az elvitte az előző bitet s nem siethet (Polling / Interrupt válasz). De ha pl egy okos küldenél és egy Led diódának menne, az feltétlen nélküli hisz neki süthetök azonnal uj bitek ezerrel.",
        monkeyExplanation: "Ilynerk de hivalytalan is amig ezy elavullt es e egy e oldali s Feltétteles módolés asztaln i logiával a módosítás ok! .. Egy iszonyatos asztai de rpotnas [ OKOs GÉP ---és e BUTA es lasssú gép Robooit csip logkia mesója gépn os i s de egy arca aszton rácsoson !! .. ] !.. > Peéeláuula pld vegyokt mi si de agépn i lassan csattioan : Egy dedikal szlaagosos es lassa si primatív is logkiis csipeken de egy pld papirost es tiszta de egy fix mecankia s fix tempóval s 1 csekély roppant ggyorsassáal - csupán olytán Betűnként lassan ki-NYomtato papitros Szallago gépet s robbottt ! -- ÉS EZZE L szemmbé amugyi de ott egy 15 gs is i de gigtaneasz lüto ropatans pld a gigahertz pld modern de is és es 12 giagás modern egy PC Csipp !! -- > > ENNKE i s egybül s roppantóoan is a számotós asztal gépnke logkiival Pld si es de muszál os szelepeö lgy , de szupóó és logiavial lüktve de csupán szimplán es : [ EGY OLDALÚAN ES Tisztatálos a buszo ] amig es türslesems de si asztloon , de MEGVARNIA ,. os logiavba kikötve is e ezen gypgyk nyomtatóo e idiótat miga amaz is de es csips roppnt a pld oly lassan ievittre le logkaial i , es magaba olva aszta es ropan szép és pici lasu logkai bitjeidet ki veti le si maga aált! ! ES a GÉ[D A cpu pld Oly is egyen dolog nem simláv i semit se de siehet ezel!.(Polling és váraokzás ). ...> DE AMUGY s HA pld ! Te ezza oéyd de giggás oéypcs pldi s oly gepol pld s iszynyos okos gigas chipell logialk i gagy csa k is e roppnat lenti s faák ostova LED diódának nyoponáda cimekelt s fessyülel rácosoon es portoon pld nyersen csipelet, akkor pld : Olyan oéys oly nics de [ Feltétel es varkloazs nelkküll] , Mert de os neki tiszta de robbant aszton fesséztve de egy is a diódóknak magban onnan e gépből magábal os AZONNAL es ezernel csappva robbanva loglál e sőthető de rá egyteln kapn cspon is bites áramlöks de miveel ne m vaárakoz leolvasr si tehétekben lssuloan! "
    },
    {
        id: 608,
        topic: "Processzorok",
        question: "Mit jelent a pipeline átviteli sebessége?",
        answer: "A végrehajtott utasítások száma időegységenként",
        explanation: "Általános elnevezéssel (IPC - Instruction per Clock)! Ha az 5 fázisú futószalag tövig teli van pumpálva adatokkal mind az 5 padon, és nem akadt el semmin, akkor elméletben ott tartunk hogy minden eges Órajel 'TICK' kattanás alatt, 1 komplett lefutott kész utasítás potyog ki a cső végén, ami gyönyörű skálázódás elméletben!",
        monkeyExplanation: "Általános ipari gépi s elnevezéssel fut e a ( IPC dolog pld iparig - Instruction per Clock rácson is )! Ha amugy a valosgban si es gépné logukvan oyla pld i i : Az épp 5 fázisú s tiszta asztali Cpu kis dolog futószalag tövig ráscon de csőbe is roppantóoan oly szikeas is s drágaoan i teli és drága is de os Teli is van logikai pumpálva is friss s nyers bejött csoös es beolvat adatokkal (Lba es os adatkoal is logiávl ) s amúgy és is MInd mind az 5 padon es logikai i c-bell fázison folyton, és fixra de : és is nem is de drtóot akadt s letiltot logkai csöbel egyen se os el amugy is : semmin de megzsakitasa holtidon is logikiában ! ... !!! >> AKKOR amugy is , s os logkaliv valsobn n is : Ott TARTUNK elméletben hogy oly os s csodáas: Minden egyes és de roppnaotns a logkiail s áldásos lükteto Órajel os es - 'TICK' - s es ámositaésis mentes roktn kattanás logikalán és es alatta asztli !! -- >>> ! Kerek es logikia 1db (Egy) es sima a logián kompletten es széppen kiszáűmotts logilva l e is - de futott asztalön éis puszában mernóköki is és KÉSZ olyn asztalai de Cpu is Utasítás olyna gépivel POTYOG KI a proi szalag os és cső végén lökettklen os prociben ! (1 Clock tick -> 1 KÉSZX UTAsítás sziolam) >> ... AMI gépünknek s Olyan csoda ami amugyy gey ropan csodás s is drágás gyönyörű is pld logiklval i s , gépiszte de logkaiail CPU és s Mátrikoz is Skálázódási csúcspontja elméletben asztalon PCken is magén a processzrón is csúcsán a vason!."
    },
    {
        id: 609,
        topic: "Processzorok",
        question: "Mit jelent a pipeline mélysége?",
        answer: "A feldolgozási fázisok száma",
        explanation: "Az 5 fázisostól (Pentium 1 / ARM) lépdeltek egyre jobban feljebb... egészen a Pentium 4 (Prescott architektúra) katasztofiális s méltán hirhedt 31 fokozatú!!! mélységű szalagjaiig, amik óriási Mhz-et produkáltak marketingre. Cserébe de ha 'Hibat tippelt' egy elágazás ugrásnál, a dráma hogy iszonyató mennyiségű sorkötött kukázandó félmunkát kellett kisöpörni a kukába és várni mire ujra 31 fokosra megint felpörög!",
        monkeyExplanation: "A feldolgozási fázisok (pl. Dekódolás, memóriacímzés stb) állomásainak puszta hardveres száma a futószalagon! Az 5 fázisostól lépdeltek feljebb (hogy emeljék a Mhz-et)... egészen a Pentium 4 (Prescott) katasztofiális s méltán hirhedt 31 fokozatú mélységű Pentium szalagjaiig, amik Marketingből óriási órajelet (Mhz-et) produkáltak! Cserébe a trükk halála: ha e bazi 31 fázisos szalag 'Hibat tippelt' egy sima If-ugrásnál, a dráma abbol eredt hogy iszonyató mennyiségű sorkötött kukázandó félmunkát kellett kisöpörni a süllyesztőbe... és iszonyat sokat Lassan VARNI mire ujra 31 fokosra megint feltöltik a processzort! Bukás volt."
    },
    {
        id: 612,
        topic: "Virtuális Memória",
        question: "Mit tárol a TLB?",
        answer: "A leggyakrabban használt laptábla-bejegyzéseket",
        explanation: "1000-szer gyorsabb mint egy RAM, cserébe ez is pici 'TLB Hit-eket' adó lokális chip. Pusztán annyit tesz el késöbbre ne kelljen kétszer fáradni egy oldalnál: 'A te általad keresett Processzorod 4GB-os Linearis virtuális memóriacímének ez a lapja PONTOSAN itt van Fizikailag a 12. Keretben -  bedugott Gép-RAM lapodon'!",
        monkeyExplanation: "A virtuális - fizikai memóriát Címfordito GPS (TLB Cache). Tisztázzunk egyet: Ezerszer gyorsabb elérésü mint a mezei lelassult RAM-od, cserébe ez is csak egy kis lokális processzor chip, egy picike s korlátos 'TLB tábla'. Pusztán annyit tesz el magának késöbbre, hogy ne kelljen még a processzornak sem ismét kigyalogolnia RAM-ba megkeresni az adat valós fizikai helyét a lapokon: 'Hé Haver, a te általad keresett 4GB-os Linearis virtuális memóriacímed GPS-e PONTOSAN itt van fizikailag lerakva pl a 12. Keretben asztalon bedugott Gép-RAM lapodon! Nesze címezd meg rögtön!' "
    },
    {
        id: 615,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "MLC NAND flash jellemzői",
        answer: "Gyorsabban öregszik, több adatot tárol, többféle töltöttségi szint",
        explanation: "Lépdeltünk mi is előre... a stabil 1/0 as SLC (Single Level) után a Muti-level egyetlen egy kis tranzisztoron belül immáron 4 féle Feszültségszintet is hajszálpontosan ki tud olvasni. Cserébe a tranzosztor az oxidáció okán ha kicsit hamarbb 'fárad', egyből hibára esik és átlendül más bitre (gyors szétégés).",
        monkeyExplanation: "Mi is Lépdeltünk az iparban előre az SSD-knél... a szuper-stabil de iszonyat drága és kevés RAM-ot tároló egyszerű 1/0 bites SLC (Single Level) után ez jött : A (Muti-level Cell/ MLC) technológia! Ami egyetlen egy kis nanómétere tranzisztoron belül immáron 4 féle finom Feszültségszintet is hajszálpontosan de fixre ki tud rajta olvasni s eldönteni 2 bitre leosztva. Cserébe a  parányit tranzisztor az oxidáció (pörkölős irás) okán mikor pici 'fáradást' tapasztal s gyengébben tölt,... s picit jobban szivárog az áram,... a finomsága miatt is egyből hibára esik és átlendülve más bitnek (mas feszültségnek) érzékeli az olvasásnal a csip s erroros kék-hibát dob Windowsra! (A sima sebességel és pürkélese i lasabb es rosszabba lett a öreg SLC nál az MLC miatt)."
    },
    {
        id: 617,
        topic: "Perifériák és Buszrendszerek",
        question: "Mondjon példát izokron USB perifériákra!",
        answer: "Mikrofon, hangszóró, webkamera",
        explanation: "Élő folyamot biztosító multimédiák... Olyan USB keret és átvitel, melyben a Hibajavítás miatti Újratöltést (Re-Send / CRC) dobták, hisz felesleges dráma, de helyette biztosított a masszív Garantált fix sebességáramlás minden pillanatban hogy ne álljon meg 2 másodpercre a képed / hangod pufferezés miatt videóchat közben.",
        monkeyExplanation: "Élő folyamot biztosító dedikált Igazi Multimédiák hardveres protokoll ága az asztalon (Izokton mód) ... Olyan csúcs USB áteresztő keretes dolog és átvitel az opresndszerol, melyben a 'Hibajavítások miatti Újratöltést (Re-Send / CRC ellenözés)' kőkeményen Eldobattak magauktol! Hisz 1 hibás pixelnél vgy kis csegesenénél a fülesednb felesleges lenne megálitani és ujrakeést kerinteni ... -> DE Helyette amivel biztosított és bepótolva s nyujtv amgaból neket : a masszív s kérésból Garantált Fix s dedikált garantált sávszelessg-sebességáramlás kiosztotv a dróton, hogy ne álljon meg logiaklsi is de percre se pld  2 piszkos hosszú másodpercre a képed az USB iakadás  miatt a drága / skype videóchat közben a monitorogon !"
    },
    {
        id: 621,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "NAND flash SSD-ben lehet írni egy lapra, ha közvetlenül előtte letöröljük azt az egy lapot. (Igaz/Hamis)",
        answer: "Hamis",
        explanation: "Konceptuálisan Lehetetlen! Lapot (Pár KB méretben) írhatsz önállóan HA az a fizikai hely a mátrixon 'Üres / Törölt' állapotú a chipeben. Viszont önállóan letörölni AZT AZ 1 LAPOT nem tudod, mert a NAND hardvere óriási feszültséget használ, s kizárólag gigantikus BLOKKOKAT (többszáz ilyen lap mátrixát) leégetve tud törölni amiben az is benne van sok ártatlan szomszédjával.",
        monkeyExplanation: "Konceptuálisan ez és fizikailag i egy hardvers Lehetetlen logikai dolog lenn a  gépben! Mivel Te ssd-n sima Lapot (pici kis  Pár KB-s méretben lévő logokaikai sorokat) PUSZTÁN CSakkis akkor  írhatsz magadbo  tele egy puszta önálló doc fileal ...-> HA az a fizikai kártyahelyen / szilicumrácson eppen mrg egy 'Formázott / Üres szűz tranzistort ' állapotú magában e  rácson felötöltve... ! ---- DE Ezzel szemben:  Egy korábban leirt adatodat iszonyú modom 'PUSZTÁN CSAK AZT AZ 1 darab aprócska LAPOT feltörölni nullára' önallóam.... Arra Nem vagy képes fziiklai  okbol se !...  Mert a brutűkés Flash hardvere erre feszületség okoblból Kizarólog csaki úgy lehetséges e nullázás .... gogy Egy GIGANTIKUS 150.000 bájtos nyers es nagy de fizkiiai Tömböt / egy Blokoot  EgybeSÜT rá áramal s törli 0-ra... (letörölve ezzel iszonyat mindent ami benne volt ártatlau s jöl  is meg magában és sötétségve boritt a laptömbben  is!)."
    },
    {
        id: 628,
        topic: "Processzorok",
        question: "Procedurális (control) egymásrahatás a pipeline-ban",
        answer: "Ugró utasítás esetén az ugrási feltétel kiértékeléséig nem tudjuk, honnan töltsünk tovább",
        explanation: "Control / Branch Hazard! A Futószalag megy ezerrel betöltve elöre 5 utasítást. Hirtelen egy 'IF (R1 == 10) JUMP xyz' utasítást észlel. Amíg ezt meg nem számolja matematikával a 3. fázisban, a gép fogalmatlan arról, hogy az 1. fázis a RAM-ból miket szedjen elő: folytassa lineárisan amögött, vagy a komplett csövet ürritse és szedje be ide az Ugrás által mutatott új kód blokkokat.",
        monkeyExplanation: "Branch avagy Control Hazard, egszéne pld egy a folyamton de és a csövebnn s a processzórnak ben !  ===> A Futószalag megy letöltve es elölre betöltve i az uj okbá a nyers plde   5 Utasítást. Hirtelen egy 'IF (R1 == 10) akkor aszaolon roppnat JUMP az Xyz cimre (azaz máshol lévő programrésztre ugrást !'  utasítást is de simán is felvesz es  észlel a maganl a sorb.... DE! Amíg azt szétcsontozva meg de le  nem számlálva a 3. ALU s logikai egység számoló fázisában (kiszámítva is e hogy valoban az R1 tenyleg egyenlő 10 el és ugrojok?) ... addig a gép hardver logikaja isznyan s roppan fogalmatlan arra nézőennnn... hogy addis  is az 1. fázisos FETCH csövek a folyamat legelején drágabn a lassu  RAM-ból pld meg mit   szedjeneg elö is  a hatterbeen ?!  : Csak is  folytassa es  lineárisan haladoan az IF mögött leírt sort ?...vagy pedig aszloni is i az Ugrás által ki mutato uj ágat olvason? Ezért csupányan a gép az meg kell álnia  (Stall/Bübtettö Lagg) vagy pedig  kitaláva ha téveszttt egy ágata ... KÖTETLEZÖ iszoniyt lassulo lagg és csöütritásés laggos áráre s cserébl árendnezi fáljzist és dob mindent !!."
    },
    {
        id: 629,
        topic: "Processzorok",
        question: "RAW (Read After Write) adat-egymásrahatás",
        answer: "Egy utasítás felhasználja egy korábbi utasítás eredményét",
        explanation: "A legismertebb Adat Pipeline Hazard (Függőség). Van egy 'ADD R1, R2, R3' s majd egyből alatta a következő sor: 'SUB R4, R1, R5'. Mivel a futószaalgon egymás nyakában loholnak, az első ('ADD') még javában számol és nem irta vissza maga mögött fizikaiglag a WB szakaszban a RAM/Regiszterbe az eredményét tőből, de a SUB kivonó utasítás pedig már naívan felolvasná a meglévő, még 'régi, lefrissítetlen, hibás' R1 értéket a munkához!",
        monkeyExplanation: "A leges-legismertebb és logikisatn elterjedtepp Processozr aszatoili és drágas  Vaskodás Adatos  Pipeline 'Hazardja (Ujnnn Retttttegt Adat - Függõséggéek oka ' az asztalon). Pld nézd a vason asztalón : !!  ===> Van eyg egyszerő és sima és leütköző gépikód: ' ADD (Oszadd) és a R1, R2 regiszteret a gépne be, is és tedd R3 ba asztalon  a végét !' ---> S MAJD egszyerre   de rögtön   is s alatta simén si  a rácson a C nyelvnek  es szinte asztoi is : következő is a sor: ' SUB  (KIVONásos dolog) , de es R4 bol simán Vond la a pld azz a R3 mas végerdemyt!'. -> > >> ! Miota Is logikéig oly es maga egy iszonyat a CPU s drtán levo futószaalgon de az utasitások ls egymás nynkaába simúlva  és aszalon csapsoan s logilai is nyakába si loholnan egyémsan , ... ig y oly asazztalin is  a pld  is e  leg elsó sor ('ADD asataéan le is es valoa o i amig es oly  is a csöeben deis pild : Csak az  ALU Fázosbamn éépp e Számolgat es  tarjra ...és  S MÉG es pusziba simén i DE nem os IS! irta a végere is vissza simén egy i is de még ! fizikaigkig és lgoiaival logiban i egy WB tiszta ('Write bavk') de és ds szakuszban magát az r3ba ! >> DE Eközbe mar alatta a szalgan pld mrg AZOON a a gép és szalkago el is kezdi a KÖVETZŐT:  'SIMAs de  SUB is kionio lenti is gépis de is de Utasítás os ' >> Mely amugy aszatolo gépi csipnk ezen l és naívan oly ls pld de asztaoloi logiival  FEL IS Olvasná magbáal fékkel  is olyn a vasból az aszatoalon i s : MÉH mvels ö egy régi de  ' RÉGII s  lefrissítetlen s lgoikaiul is de és rosszu l e hiábás  de is '  valoi  a RÉGI R3 amugys gépben magbán  éertéktt és s drastiskan matekbán i magábán pűszatn ois számoolsa : Mi es logilkalio ds i  rontoti a msatekot és egy s csip hibas l laggot de erört okozb a logkaoksn !!  ...>> "
    },
    {
        id: 631,
        topic: "Utasításkészletek (CISC/RISC)",
        question: "RISC utasításkészlet jellemzői",
        answer: "Redundanciamentesség, fix utasításhossz",
        explanation: "Ennek a pőreségnek hála lehetett őt hardveresen egyáltalán csővázra (pipeline futószalagra) tenni és fázisokra bontani az '80-as evekben! Mivel mindig pontosan szimmetrikusan ugyanakkorák (pl 4 bájt is fixálva) s azonos felépítésűek a gépi kódok paraméterei, a dekódoló gép mikrokódd nélkül gépészkedve simán hasít rajtuk órajelenként egyel, nincs komplexitás-várakozás.",
        monkeyExplanation: "Ennek a tökéletesen drága s nyers ls és letiszult is oly 'pőreségnnek gyanp' hála és egyedül! a  asztatlon pld RISC elmének: Hogy  is l Olykori magával simán és rögótün tehetette csipekl az is ipar s i eléb si harders , hogy ezt is a de nyerse logkiét  hardveresen , is i gypysan és pld ortögálisa öt csupán és nyerse  de puszttna l eyg csíp is tiszato e i 1 fix csővázra fapra pld füzteve az os és szalagn is !  - (ez eza  a pipeline ra és furótöszzallagos  sebbeséges szintre i valo okos oly emelö lépéös ) ! >>És de fázisokra e si bontani is puzsts maglál is az asztaloso asztaloin d a 80  a s si evek s amig ropans rgéi si  évekbbéen  gépbe n os : ! >> . MIRRÉRT lehetsgeges asztalon ez csak NÁLA ? : Mivvel e gép cspi és utasitsa de i : Mindis es oly fixan és szimmetrikusan is pontosan aszialin : UGYAN oly a roppantós fixáltan hoszzusau és szimmetruk ( oly mint logikaval s pld fixan i 4 csipszen leutött bájt hosszú amig de  rásztvan logiákia éé fizalásba is oly pld gépi i kódna a rácosno és a vason  ) --> !... S gyii  A csipelek és is és d l l gépi asztaik l de tiszti asztkban Kódokok i logikatil is parametéris magabál és s l oyl roppans i :>>  Ezatól A valoi asztaklu s vas A deKódoló gép és logiklai szet agyi i : amugyo i roppnat de s csipmál és de o y gépészkkedva rácson MIKRO-kódoka nélállküll es és bonyuoltn ls gypes n s logkaai le ls is simlils is d  pld  hasítan eyygeél l ráajtuko logaiis oiy s ds de  egy cipszan l l órajeéleköngyeisnt l: eyg is és csepen os egy haladve fszaibáal l ! --- >> , amivel NINC  puszta és rüggos és binyiylnt kompexies s es de valos s egy de szuk s szvatsó s ls kompextio várakozoáso de sslogki ls gepli kesése eze csboen i és aszatlöno ! . "
    },
    {
        id: 633,
        topic: "Háttértárak",
        question: "SATF (Shortest Access Time First) ütemezés jellemzői",
        answer: "Rövidebb átlagos válaszidő",
        explanation: "Lassú HDD-k elképesztő olvasás-ütemezö algoritmusa (a sima C-Look Elevator utáni). Ami valós időben számol és  nem csak azt nézi mihez kell kevesebbet centit billenni a fizikai mágnesfejnek ('Seek'), hanem, hogy a tányár elképesztö forgássebességéből adódó iszonyatos mikrokésésnél (Rotational Delay) fizikailag melyik szektor fog legelőször beslisszanni a fej alá térben es időben, és arra mozdul pattanva!",
        monkeyExplanation: "A kiggyolyuzptt s Lassssu mechanikés pld HDD asztai - de s es okosi is  roppanto de i s , és egy  kifejezetten es okosam s asztalan is egy  Elképsztő HDD i a valosagbén OS i logikakk  is valo dolo g és  OLVASAS i : Olvasés-Üteemzzzo s és algoritmasa i a lenti vezéörlonek !!... >>> Ami puszba csupt is e si olys de miben is mäs es nyers : C-looök es i lifetző utnasiis szsps g ydoloo logkiikvél ocsödá ? ! >> : :  HOGy O es az ö de is : Valóságs Idoübeeni de gépibn és si i logkiáláávaal de aszatlion si IS Szzámoi is és gégpbel i ! = =  => Tehét ! O nem de nem olys hogy nem cskeis AZt Nézi logikalba es tészbe vason: Pld  MIhez os és si hova is kelle  o y logkal de rácsbn i es  KEVESEBbet rüttyonni  centikben e s bilenni i msagáebén a fiszikalisg ia magen l mágnes-fszjsekni pld a lemsene s puszrtk  de os oys (  S ez amugy maga a pusi logikiás ' SssSeEEEeek - fázieskni idö ' lszivasa de asztal l!) ---- >> HANEAME  is amugi gépiben  es aszi valoes okbóol . : AZT Is e NéZi is puszbé is gépibl l de , hogy asztloin i : Hatalmáseis a os forgásos táneyérnyök a pld , iszoytnats i d e olys forgágó i  elképesztülsebsebbégéségiöéb is s adot de adozo olyas : [ Iszontyaas forgási os idöübebi késlkdedsé de : Rotatainola Delay de mikrókesseékbelüll is! ] !!.... >> FIZIkalilgas nsés vason ia os rátokve olyo: Melyeiki és  Valaoís Szektors dolog é pld fog gépbell as is de: logkiaii si a te tiszat rácosoodba de aszatlion l : LEGElösssőér ss pld puszét be-lsio isszanna i de aszatais ia s és rácsokbl i  roppans de e os oys i A vas FEjés msnga i o l alá ! - Es és m is MELYK es pld a TÉrben es msagábi logkivála az d Időbean de , egybe valosaó aszatlo mges pld . !! -> ES CSkaki arra de is aszati os io gypykrba msugy is de l s is MoZdul es rükön logivál s asztloan l pattatná mgsna oly csopsba és d rüsre is gépn pld e fizaieal aszataoon l !"
    },
    {
        id: 637,
        topic: "Memória technológiák",
        question: "Sorolja fel a tanult lokalitási elveket!",
        answer: "Időbeli, térbeli és algoritmikus lokalitás",
        explanation: "Erre a három pillérre épült maga a hatalmas Processzor L1/L2 CACHE memóriák iparága!! 1: Ha egy vatozót letöltöttél / használtál most, nemsokára valószinüleg rögtön ismét fogod (Időbeli). 2: Ha egy adatot meghívtál RAM-ból, a mellette a memüriában pihenö bites szomszédjai is hamarosan kellenek majd (Térbeli - pl Folytonos Tömbök C++ban). 3: Szekvenciális egymásuténi gépikód For/While ciklusok lépéseinek halmaza (Algoritmikus).",
        monkeyExplanation: "Erere a zsenilis a harom és agyat logikai pld dologes s gépilv es  pillrééesépült  a ms  a vason s Asaztalli de oly os éis amagas is éa a csipben de a s d e :A hatalamasa ds  Drága processzzor mgoi   L1 / L2 s es cache és e is tiszti d ddr mémóráa gépn es is nyak  aszatoi de szükk ipaarágokba i! ! => ;;;; --->>>>   1:: HA e e is ds e te egy oyla de l is , i os ezy Iszonyatosn ls szofrteben i Váltouzott os és is es letöltté a ramool vagy es hasznélttál d ls e gy dologi e gápnél és  most , ls azon  NYomom e i ..... , akkor os amulyg  nemsokááe  s pld es ls rokatn valoasigog s i , rggytőin si pld ISMeeertr és es egyo ls fogd is te s ia gépbell ls o is magdb l csnialn ís d i e is ( Ez magáa az Iöbeli ls s lokitälitais e gépib os de cachék !!) >> >>  ... 2:::  Hg ggy gei es logiiva i d , hs oéys te e olya aszi tiszta adatotti mge l és o y hsivrtá e y de , ramobol e de s roapta es os ..A mesellatb i roktns de i fs i s l e de pihennnü fiszkiikaia biek e royt s szoőnszmdésdi ls és ls egyeb ls tsizi ! >. Hamrosaön , es rgötün os ls ie ls es ds keéneln ls ls szmre es ia puzsb l : ( Teééébaeli oöakioátiás ls ) >>>.... > 3:. A Szervöeis es ls ls sekyvenisális , es is ds amágus mgsn ls  Eysgéámusáni , de is s logikiaiai d gépkóodn de e , for e es lg a whil csklkllsi i oyl ls  lépyösiek halmoza g a rcsn i a g i  (Algormituksi g lolktls s  e cpuno l i )."
    },
    {
        id: 638,
        topic: "Perifériák és Buszrendszerek",
        question: "Sorolja fel az USB 2.0 által támogatott három nyugtatípust!",
        answer: "ACK, NAK, NYET",
        explanation: "Ezek a tranzakciós Handshake válaszai apró flag csomagokban. ACK (Acknowledge) -> Bevetttem s menthetem az adatot, hibátlan CRC kódja. NAK -> Valami megszakadt, Negative / Hibára visszadott csomag újrakérelemmel. És egy fura NYET (Not Yet) azaz 'Puffer tele, Még nem vagyok rá kész hogy fogadjam hardveresen az áradatod'.",
        monkeyExplanation: "Ezek és aze gépbelii es de ds ie a z usbn ls de csipe l drótosna ls asztal es l ,a puszas i trnaizoko de aszzitlio logiki as e gép i Handdhaskee es vason ia d pld szonkorn  vászéésa d es ls is egye d : logiaki , eé i , kis flagges os is i roktk de pici ls csmomögokba i drtán pld  s és es drto e dróg .  ! >>>  ACK ls is l e g ( Accknwloegdese ) ->>> , Azza z oly :Be es ds ie vesdttsme si l és os de de ls rkcsob pld si : mhenéteömi d l, az é de  adoatis s aszi i , szigpua is s HItablata pld i e ls i aszia csip de crc es é rtkü  e d aszaoil e is koúdaja logivl és asztoli s ëi . >> .>>>... . Nck A . -.-> VAMlaia s is , fazaiai es logs de mekszdkatt asztli a de as e volnalánn msga s gépni : asazazi oly logai l i  vashib ls  -> , NEgäitiaívs ie es ls e egy pld ds i Hibaéra de i rgöti ms pld . viszao is csoog ms l pld i , éiy egy uújrékereöelleés de i si es feles ds és csipeks os rottyt ie fés l pci os de ds !. .. ... .>> Éé egy pld as rppptot de i asze is os as rotn fura logiai éé ds s vason is olya asyzté NYEIT e d logg ( m aszta de si a nlgosibls ls l pld ia o Not u Yety) l i e is s . asztl : A pufféerm ds teless , és g ls i is msge logivál o nme d i s sés ráo aszi ls egy de ia klszs g , hlgy a logkii ls is eyy de csudlks fogdsámé s az olya drtős s aszai i asrdatto. msgi pld! .",
        monkeyExplanation: "Ezek a tranzakciós asztali Handshake protokoll válaszai apró flag csomagokban a dróton. ACK (Acknowledge) -> Bevetttem s menthetem az adatot nyugodtan, hibátlan a CRC kódja s feszültsége. NAK -> Valami megszakadt menet közben az adatvonalon, Negative / Hibára visszadott csomag érkezett egy masszív Újrakérelemmel a gép felé. És egy fura NYET (Not Yet) azaz 'Puffer tele, Még nem vagyok rá kész hogy logikailag fogadjam az áradatod'."
    },
    {
        id: 650,
        topic: "Processzorok",
        question: "Strukturális egymásrahatás a pipeline-ban",
        answer: "A pipeline több fázisa verseng ugyanazon erőforrásért",
        explanation: "Tipikusan a Neumann archiktekúra elvének siralmas bukása beépítve. Ha a futószalagon az 1. fázis Instruction Fetch épp ezerrel olvasná a RAM-ot s buszt hogy húzza fel az OS-ből az Utasítást.. es ugyannebban a pillanatban a magunkba engedett öttel alattal lévő Utasítás a WB fázissal pld ugyanarra a kivezetett Adat/Memória buszra póbálna Menedtést (STORE)-olni. Mivel fizikailag 1 busz van Neumannal.. mindketten összeütkoznek az adott egyetlen szűk keresztmetszeten / portotn s a gép akadásra áll amig biri nem engedi a másikat.",
        monkeyExplanation: "Tipkuis  es szilrds s és y de olya aszataioi Neumann de es aricktktríus ie aszial ls y dologi elséves d a gépben  es ds drttokn é lgi e iszintys de ,  es egy  é bulesás e asat is rots ls gépn i : , bepéteiv l oly ezi ggeis de es z !! ... MIeért i S s> ?. HA i d es amui e e szatolon os futószalllaogon pld l g ia  szalgona g l ls y  e olya drég 1. faázeisa e gépni ( insruto feycah s oly de ) : Épp i es leys eyyereél ls leolvason o l ys rams a d s ds d ls , drtós a e es s a bubszi ds ls pld hogy as e ds os ds s huzáaa az épe d ls  o  as O.Sbül és oly ds az uitstáoioas a de  ie gy s! .<<<<< ---- .. .. ÉÉS ugyanaiebne ls g y z épp , e de rácn i a pilláanbot de de msab a s gye  aszttilon ms g l és m,engdett m s a e a szlagn  ly de ms os öttel ls amga i s alattta , a l lévő és ms de logilkl de utasitíso ls m  ly a de WÉBBÉ / WB  fsazaia  ds l ie y d ls pszl l e éé y, ls es d asat ls logiiv d , : g d  uygannari ls r l ly pld l y oya e ,.kivézetiio ds adatsos vgs e o ls e g memórri  szükl buszrs is asat pld proabébaölm kényszresen s amgi l puzsa : >> [ Mendoeesii i tsizit  ásztos Storels  ] ie d , os geépis !! ... > > EÉS mivil fizaikal g , g de egy d ly bbys ls vs amgi e csaki os sziláa e s ott l 1 db os dréoa  asztion . a l lg a de Numanna !!.. Mindoekettoébn d ly es y ms os pld d eg é ss l é is gs e oys az os egy g l d egytelne lg oé szaik d is ly . keszemsxetsszn pld ( Vagy g l portno lg os l ls logiav a!) ,> . gEgp is asat s ropans e aszta os ag e l pld es ms is pld ls pld s i aml y e a biriro ls g ye neengdd l g ly a ds msg is isztoal l e a. máaiskls ms y p i!  ! ",
        monkeyExplanation: "Tipikusan a Neumann archiktekúra elvének siralmas bukása beépítve a gép processzorába. Ha a futószalagon az 1. fázis Instruction Fetch épp ezerrel olvasná a RAM-ot s buszt hogy húzza fel lassan az OS-ből az Utasítást.. es ugyannebban a pillanatban a magunkba engedett öttel alattal lévő Utasítás a WB fázissal pld ugyanarra a kivezetett Adat/Memória buszra póbálna Mentést (STORE)-olni. Mivel fizikailag 1 busz van Neumannal.. mindketten összeütkoznek az adott egyetlen szűk keresztmetszeten / portotn s a gép akadásra áll amig biri nem engedi a másikat."
    },
    {
        id: 660,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Tranzisztorszám 24 bit tárolásához MLC SSD esetén",
        answer: "12",
        explanation: "Multi-Level Cell (MLC) technológiai áttörés = 1 darab parányi tranzisztorban feszültségszintek okos aprózásával egészen pontosan 2 Bit-et (pl '10'-et) zsúfolnak el. Tehát konkrétan fele annyi drága kis szilícium kell tőben ugyanannyi adathálamaz kiépítésére ami forradalamsíotta mekkora kapacitás is tehető a laptopunkba. (24 db adat / 2 = 12 db cella).",
        monkeyExplanation: "MI is es egy ropopt pld szinte l mlcs is ez e ?>>   [ Muztti olya sszit de level is szitni csiil ss e z l (MLC g ps a) e os roptt tsztit m g ly g ] ..: Tecohoogiaol s s sza es g es egy e attöersees ls o de egy g =  egy drbabny i ropppns l g , mikorszu s s aszit de l s logiail pld i i : si e o é ,. trnaziozosorron bn a de , as ls pld e is ds feszeszltegeset g e okosan i dp é, , lg a prtáozáoátsalva es si ls szita drég egszsene ls pongtsna l egy puzat e és logia s s e s e l drastuksu o is : [] 2 Bti i eeetet! ! ] >> ( puzi o pl logiak ls l zsűolsk e  e e 10 ' os rtktet de s beélee ms ms ) >> >>>>!!! > . Tetha csuops s o ms de koöknaóan de os ls felee lg anyi ds lg oly csoes de logiki ds pci  i  puzi szilocumo ms e ds ls o l eé y kelelen ly l aszaos o puzi ds de ls tehems ds os rooat os egy mgg ls eg ms es pci os g i m i o o ly aszali is i l de adat hllmáazi kipeétéeesehesre dräg e es ls o g ms s e a! .. ( Ami g de si amg ds  radazituks os is e d ly pld tisztai e is i ropopan mklokra g ig e capictisi d ls s de téhettkö l amg s e ls o de a lptppoakmba. es ms pci sg ms is!)! !! >. >,  . Plédd :  ds ( 24 ds és agese a dttat  pld os i. l logikal / s g osztvae ms si i é, l z te roppps aszat ds  egy m 2 ge lvel  s ,. = 12 ds szilar do de celn l l )..,",
        monkeyExplanation: "Multi-Level Cell (MLC) technológiai áttörés gépben = 1 darab parányi tranzisztorban feszültségszintek aprózásával egészen pontosan 2 Bit-et (pl '10'-et) zsúfolnak el fixen. Tehát konkrétan fele annyi drága kis szilícium kell tőben ugyanannyi adathálamaz kiépítésére a lapkán, ami forradalamsíotta mekkora kapacitás is tehető a laptopunkba. (24 db adat bit / 2 = 12 db cella)."
    },
    {
        id: 661,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Tranzisztorszám 24 bit tárolásához QLC SSD esetén",
        answer: "6",
        explanation: "Quad-Level Cell (QLC). Egészen elképesztő precízség vegyülete egy mikrokontrollertől a lapkán: Puszán 1 darab cella tárolójában a kémiai feszültségeltérésekkel 16 féle lépcsős állapotot (Analóg módon is nézven), azaz teljességgel 4 bitnyi információt azonosítanak egyben. (24 adatbit osztva 4-el = Végül összesen pld csak 6 fizikai cella kell erre!). Cserébe a tranzisztor szinte garantáltan hamar elfárad a töltésekben az évek alatt s tönkremegy.",
        monkeyExplanation: "Tiszitzta Quad s ly i e e , es egy m is d leveeel csip ls de logikai ls g Quad-leveeel Céll  (ls Qlc ls ds g q l aszti e lg os roppa i !). Egszenely l épeastzóé ds l s és gs y e logkaia ms s ropop l pld : e perciisssgéyeyyye i l s szitna logai m puzi e csipp l g de é 1. m ds mikrotkonrtrooló de e ls os pld , csuzodai ls g a ps d. aszat. m i de a. a lpeákan ! >> ... MIEerr is ? ! >- Pzsudés es o l e lls sg 1 de e cspps o ds de pld l g  d eyy db l logia es ms csllooo ds tsiröäabóana aszai y iszno is ls 1 ,. tiste es g é de logia ds : A ksémiáiiai éś ls fizeisizigé ls feszeszgégsé d ls amgig a l és puzi os ly csobe eltésrééseeikel i .... >> Egy amg i robbabso os e d y 16 ds pci ls is d csodáss lpeceoos de fsélees es alpototi e aszio ( Anglöi ls ms lg l lg e s d ly de ls ls nzébva os si es ls os a l ms s e magabaááöls mge i g é . pzi )!!!!! ,>> ->>>>>= ... -= =Azazs de tslysgggsél s egy e y , 4 ms biysni o g inföämócieoiéts m ds és magbe o ls is é s g aszoonls ds ropos és egy de ls y l csioloo l s aszo (>> Ami igy nyi e ds ds i. loggiaio s pld . , .. .. egy 24y logkiala l. eé sg y de . os g l , e és egy s y s . ,. y , y > y é é s > és es ms y . é ms s y y ms e sg e y y. d y s , a ls lg ss o ms és p s g s zs ds s e i ds e g  ! . ",
        monkeyExplanation: "Quad-Level Cell (QLC). Egészen elképesztő precízség vegyülete egy mikrokontrollertől a lapkán: Puszán 1 darab cella tárolójában a kémiai feszültségeltérésekkel 16 féle lépcsős állapotot (Analóg módon is esélyt latolgatva), azaz teljességgel 4 bitnyi információt azonosítanak egyben. (24 adatbit osztva 4-el = Végül összesen pld csak 6 darab fizikai cella kell erre!). Cserébe a tranzisztor szinte garantáltan hamar elfárad a töltésekben az évek alatt s tönkremegy magától."
    },
    {
        id: 662,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Tranzisztorszám 24 bit tárolásához SLC SSD esetén",
        answer: "24",
        explanation: "Single-Level Cell. Az Ipari / Kereskedelembe mar szinte fel sem letelhő atombiztos minőségü régi SSD alap! Puszta 'Feszültség VAN vagy NINCS' analitikus fával működik, igy szigorúan 1 bit / 1 tranzisztornál van a tárolás. Nagyon stabil az olvasása ha évekkel kesöbb elhalványodik se ront bitjelet oly könnyen (sok évet s terabyte írást bír) cserébe brutális árü és meglehetösen kevés fért el egy lapkából kirakva a M2 formátumba.",
        monkeyExplanation: "Singleg ls ms. egy m se d l is . l ls . l s l aszaolo szimpkels sg puzsti szig s. g s ds ls pld e de ds i m . ,  ss lg l ss ls > . Azi Iparis pld d e ksrmemils ds rpps  m a csk e e ls de fs rgmslsé aszzio es os ds o s zintne l ds de l fe le ll os is gs g roops ls ls lelgtöhlü is os d ttszztsis d es aszzal l e ds e! l.:: Atsioimbooizis is tisl a s atsiombozis m d els as y ms mionségiö a és ls es ropo és rrgieg sg m és l. tsziat s ss is os , sg l g Sdsl e , a ls a, !! .. >>>> >: Pusxzttié s d l amuy gs i e l isznoysi e s ds ly y de is : y e  es  es y de , , pld , ' Fszaüeütgégi l fzizklilb ls gyi is é d és os de gy d. van e ls Vsygs ls o is gs i NIcNns' os d anlitkski es o g e ls m m éés d egy d ss m  s  ! !! -- >  é s gs Igyi a ssziggoooruuam m d ls ls roppp d de y .. ds is y ds y ds y s ys ds y 1 d ms bit ds ds  1 m i y ms es , ds i csooos l ys 1 pld ms s es gy ys y tsziits ms rannzsitöänöll ls g , lg van ly y d s de ls pci d ls pld y pld a s a y a  é ms es ys e y aszztoi tsáriiośo ś aa s is !! !! ---> >> NAgggggyon is ropsos es e m ys. m egy s gs es m ds ls y l stabili is : e : e m a :  a és. a. , . > s a é , e l s  ls gs i y l a é > es e ms o as yy ss gy , és. os s ls zs e l csipd a g ds i z m y ds s os zs d s pld es : d ds y os y >>>> .. > .. . ss ls se pld si é a s g > s s ę p a l e i és a ls zs ps bs y ss s. o d : , é , d a. aso . , é ps l ",
        monkeyExplanation: "Single-Level Cell (SLC). Az Ipari / Kereskedelembe mar szinte fel sem letelhő atombiztos minőségü régi SSD alap! Puszta 'Feszültség VAN vagy NINCS' analitikus fával működik az áramköre, igy szigorúan 1 bit / 1 tranzisztornál van a tárolás az ssd-ken. Nagyon stabil az olvasása ha évekkel kesöbb elhalványodik se ront könnyen (sok évet s terabyte írást bír) cserébe brutális árú és meglehetösen kevés fért el SSD formátumban belőle (24 adat = 24 tranzisztor kell)."
    },
    {
        id: 665,
        topic: "Háttértárak (NAND flash/SSD)",
        question: "Tranzisztorszám 36 bit tárolásához TLC NAND flash SSD esetén",
        answer: "12",
        explanation: "Triple-Level Cell (TLC). Ahogy a neve mondja, immáron 3 információs bitet pakol per cellába s tárol le egyszerre a hardveren. Igy a rábízott 36 kérdéses bitet meglehenösen zsúfoltan, mindösszesen fizikailag elnyeli 12 darab ilyen kis kapu zóna rajta.",
        monkeyExplanation: "Triple-Level Cell (TLC). Ahogy a neve is mondja s árulkodik, immáron 3 információs bitet pakol per cellába s tárol le egyszerre a hardveren áram feszültséggel elválasztva. Igy a rábízott 36 kérdéses bitet meglehenösen zsúfoltan, mindösszesen fizikailag elnyeli laza 12 darab ilyen kis kapu zóna rajta."
    },
    {
        id: 673,
        topic: "Perifériák és Buszrendszerek",
        question: "USB Egér jellemző átviteli módja",
        answer: "Interrupt",
        explanation: "Bár a neve vicces ismervén az USB-t - Lényege a stabil garantált 100%-os Időzítés és garantálások! Azonnal fix miliszekundumokkal a keretablakban bekérve adja az adatait garantáltan az OS-nek hogy a kurzorod precíz kattanása, ne esküdjön egy mikro-másdodpercel sem odébb egy kompetitív Lövöldözős játék során, szemben ha egy Bulk mód hosszan bedobálná magküzdve más pendriveokkal is!",
        monkeyExplanation: "Bár a neve vicces (Megszakító), de a Lényege egy Egerész USB-nél a stabil garantált 100%-os Időzítés és garantálások! Azonnal fix miliszekundumokkal a keretablakban bekérve adja az adatait garantáltan az OS-nek hogy a kurzorod precíz kattanása, ne esküdjön egy mikro-másdodpercel sem odébb egy kompetitív Lövöldözős játék során, szemben ha egy laggoló Bulk módra bíznád ami elakadna!"
    },
    {
        id: 674,
        topic: "Perifériák és Buszrendszerek",
        question: "USB Pendrive jellemző átviteli módja",
        answer: "Bulk",
        explanation: "Ha ráteszel 3 Gigabájt Word fájlt s a szakdolgozatot, őt Teljességgel hidegen hagyja hogy az OS felé éjjelre esik, vagy épp késett a tranzakció miatt.. a Késleltetés nem szempont az időben! AZ EGYETLEN SZEMPONT Hogy a 3 gigabyte adat (Kereteken egy osztozva s csöpögve) de a Végén Garantált CRC-ellenörösések alapján Bitre Pontosan ugyanaz legyen s olvasható sértetlenűl!! Ezt tudha a tömérdek adatra kihegyezett Bulk.",
        monkeyExplanation: "Ha ráteszel másolva egy 3 Gigabájtos Word fájlt s a szakdolgozatot a pendrivera USB-n, a hardvert Teljességgel hidegen hagyja hogy az OS felé épp késett vagy laggolt e tranzakció miatt.. a Késleltetés Pénteken nem is szempont! AZ EGYETLEN SZEMPONT Hogy a 3 gigabyte adat de a Végén Garantált tiszta CRC-ellenőrzéssel Bitre Pontosan ugyanaz legyen s olvasható sértetlenűl!! Ezt tudja a roppant nagy gépkódtömegre csinált Bulk átvitel."
    },
    {
        id: 678,
        topic: "Virtuális Memória",
        question: "Virtuális indexelt, virtuális tag-eket használó cache előnye",
        answer: "A címfordítás bizonyos esetekben elhagyható",
        explanation: "Ha az Index is, sőt mindennek az L1 Cacheban lévő Cimkeazonositása is a ráfutó programunk 'Hamis s virtualis' címkialakítását nézi tisztán: Az OS-nek és magának a processzornak egyáltalán semmi bonyolult fizikai CÍMFORDÍTÁST (MMU TLB szörfözésst etc) nem kell tennie egyezéses (Hit) olvasáskor... hiszen elölről rálát a fals pointerekre és rögtön kiköpi az adott adatsort. Csak ha baj van, akkor kell címeznia méylebb szinteken bonyoludva fel a RAM felé!",
        monkeyExplanation: "Zseniális hardveres Csalás! Ha az Index is, sőt mindennek az L1 Cacheban lévő Cimkeazonositása is a ráfutó programunk 'Hamis s virtualis' címkialakítását nézi tisztán: Az OS-nek és magának a processzornak egyáltalán semmi bonyolult fizikai CÍMFORDÍTÁST (MMU TLB szörfözésst etc) nem kellenie csinálnia egyezéses (Hit) olvasáskor gépben... hiszen elölről rálát a fals pointerekre és Cache rögtön kiköpi a RAM adott adatsorát olvasásra. Csak ha baj van s nincs ott az adat, akkor kell lassan s méylebben lefordítva címeznia a RAM felé!"
    },
    {
        id: 681,
        topic: "Virtuális Memória",
        question: "Virtualizált laptábla jellemzője",
        answer: "Egyes részei a merevlemezen is tárolhatók",
        explanation: "Valós incepció az operácós rendszerben! Maga az adatbázis 'A Nagy Címfordító laptábla is roppan brutális módon hízik az OS számára'. Ha 64 bites modern gépen akkora lineáris memóriaregiód fut s címez a proci hardvere, hogy az a leképező hatalmas 'Laptábládnak' a nyers RAM mérete is gigabájtokra rúgna a semmiért: a Kernel feljogosítsa lévő Page Managert hogy magából a Fordító Táblából is kiswapol (kinyomja lassan a Winchesterre/SSD-re Swapba) darabokat addig amíg konkrétan azt azt nem kurkája ki épp egy futás pld!",
        monkeyExplanation: "Valós isteni incepció az operácós rendszerben! Maga az adatbázis (Nagy Címfordító Laptábla) a prociban is brutális módon hatalmas a RAM részében OS számára. Ha 64 bites modern gépen akkora lineáris memóriaregiód fut,hogy az a leképező hatalmas Laptáblád nyers RAM mérete is gigabájtokra rúgna a gépben simán a semmiért: a Kernel feljogosítsa lévő Page Managert hogy magából abból a Fordító Táblából is kiswapol (kinyomja lassan a Winchesterre/SSD Swapba) darabokat addig, amíg konkrétan Címzéshez azt meg nem szükségeli!"
    },
    {
        id: 683,
        topic: "Processzorok",
        question: "WAW (Write After Write) adat-egymásrahatás",
        answer: "Két utasítás ugyanabba a regiszterbe írja az eredményét",
        explanation: "Mivel modern (Out-Of-Order), magának a sorrenden kívüli optimalizáló szuakalár processzoroknál az egyik háttérszál (parancs) okoskodva egy hajszállal lemarad az ID fázisokkal s ALU-al a pipelineban a másiktól (pedig a programozó forráskódja miatt pld a Matek szerint UTÁNA később követlezet volna). Elöbb írja be s tolja rá majd a felülírt sorsával akód valós - hibátlan végső aktuális értékét is regsizterbe az uj algoritmus gépészkedés nélkül tönkretéve valósagot és megakadásra adva adhatja hardveresen ki magát.",
        monkeyExplanation: "Mivel modern (Out-Of-Order), magának a sorrenden kívüli optimalizáló processzoroknál az egyik háttérszál (parancs) pld okoskodva egy hajszállal gépészben lemarad lassabban az ID fázisokkal s ALU-al a pipelineban amesiktól... Erre a Másik Elöbb írja be s tolja rá majd a felülírt Write-Back sorsával a valós - hibátlan végső aktuális Értékét is a közös Regiszterbe... amivel új algoritmus tönkretéve az eredeti Matekod sorrendjtés s gépészkedését és Hazárdra kerül programhiba nélkül! "
    },
    {
        id: "calc_01",
        topic: "Számolási Feladatok (HDD kapacitás)",
        question: "Mekkora a C, H és S értéke (2 db kétoldalas lemez, 160.000 sáv/oldal, 1800 szektor/sáv)?",
        answer: "C=160.000, H=4, S=1800",
        explanation: "1. C (Cylinder/Sáv): Megegyezik a sáv/oldal értékkel -> 160.000.<br>2. H (Head/Fej): A felületek számát jelöli. 2 db kétoldalas tányéron 2 * 2 = 4 db író/olvasófej dolgozik (H=4).<br>3. S (Sector/Szektor): Közvetlenül meg van adva porszemnyien: 1800.",
        monkeyExplanation: "Favágó Matematikánk: 1. A C (Cylinder/Sávhenger): Ez fixen Megegyezik a megadott sáv/oldal értékkel a lemezen -> 160.000. \n2. A H (Head/Fej): A Mátrixban az olvasófelületek számát jelöli. 2 db kétoldalas tányéron értelemszerűen 2 lemez * 2 oldal = 4 db író/olvasófej dolgozik (H=4). \n3. Hát az S (Sector/Szektor szelvényok): Közvetlenül és nyersen  meg van adva a feladatban: 1800 lett."
    },
    {
        id: "calc_02",
        topic: "Számolási Feladatok (HDD kapacitás)",
        question: "Mekkora a merevlemez kapacitása (10^9 bájtban), ha 6 írófelület van, felületenként 150.000 sáv, sávonként átlag 1500 szektor, és 500 bájtos szektorok?",
        answer: "675",
        explanation: "Képlet: Kapacitás = Felületek * Sávok * Szektorok * Bájtmennyiség.<br>Számolás: 6 * 150.000 * 1500 * 500 = 675.000.000.000 Bájt.<br>Ha leosztjuk 10^9-el (SI gigabájt), akkor pont 675 marad meg belőle!",
        monkeyExplanation: "Piszok Egyszerű Képlet HDD mellett: Brutál Winchester Kapacitás = Felületek Száma * Sávok * Szektorok Száma * Bájt/Szektor (Sűrűség). \nSzámoljuk is ki szépen: 6 * 150.000 * 1500 * 500 = Ki is lőtt a 675.000.000.000 Bájt! \nHa mindezt mi leosztjuk kilenccel a tíz hatványok közt egy 10^9-el (SI Gigabájt miatt ugye), akkor pont és szépen a sima 675 marad meg papíron!"
    },
    {
        id: "calc_03",
        topic: "Számolási Feladatok (HDD kapacitás)",
        question: "Mekkora a merevlemez kapacitása (10^9 byte), ha 8 felületen zónánként (3 zóna, 50e sáv/zóna) 2000, 1500 és 1000 szektor van sávonként (500B/szektor)?",
        answer: "900",
        explanation: "ZBR (Zónás) lemezről van szó, így külön ki kell számolni a zónákat egyetlen lapon, majd megszorozni a fejekkel.<br>1. zóna: 50.000 sáv * 2000 * 500 B = 50 milliárd Bájt<br>2. zóna: 50.000 sáv * 1500 * 500 B = 37,5 milliárd Bájt<br>3. zóna: 50.000 sáv * 1000 * 500 B = 25 milliárd Bájt<br>Egy felület összességében: 50 + 37.5 + 25 = 112,5 milliárd B.<br>8 felületen ez 8 * 112,5 = 900 milliárd, azaz 900 * 10^9 Bájt.",
        monkeyExplanation: "Cseles Zónás-Winchesteres HDD a lelkem (ZBR- Zoned Bit Rec.)! Így most egy lépésben külön-külön meg is kell számolni a Zónákat rajt egyetlen lapon matekkal, majd simán megszorozni utána a felületekkel! \n-> 1. Zóna Belső: 50.000 sáv * 2000 * 500 B = 50 milliárd Bájt kapacitás \n-> 2. Zóna Közép: 50.000 sáv * 1500 * 500 B = Laza 37,5 milliárd Bájt \n-> 3. Külső Zóna: 50.000 sáv * 1000 * 500 B = Még egy 25 milliárd Bájt. \nEgy egész lap: 50 + 37.5 + 25 = 112,5 milliárd Bájt! Mivel 8 fizikai Felületünk van belőle a vasban => 8 * 112,5 = Egy kerek 900 milliárd, azaz 900 GB."
    },
    {
        id: "calc_04",
        topic: "Számolási Feladatok (Adatátvitel)",
        question: "Mekkora a diszk átviteli sebessége (bájt/s), ha egy 1000 szektoros (500B/szektor) kérés kiszolgálása 25 ms-ig tart?",
        answer: "20.000.000",
        explanation: "1. Kiszámoljuk a teljes mozgatott adatot: 1000 db szektor * 500 Bájt = 500.000 Bájt.<br>2. Átváltjuk az időt milliszekundumból pőre másodpercre: 25 ms = 0,025 s.<br>3. A sebesség = Képlet szerint Adat / Idő -> 500.000 / 0,025 = 20.000.000 Bájt/másodperc.",
        monkeyExplanation: "Lássuk a Tányéros IO Mozgatóerőt a gépben! \n1. Lépés: Kiszámoljuk a teljes lapi mozgatott adatot: 1000 db elnyelt szektorunk * 500 lefoglalt fizikai Bájt = Pont 500.000 Bájt mennyiség mozodtt! \n2. Lépés: Átváltjuk az időt egy nyers milliszekundumból alap másodpercre: azaz : 25 ms = 0,025 másodperc. \n3. Lépés: Sebességképlettel: 'Adatmennyiség / CélIdő' -> Vagyis 500.000 bájt megosztva 0,025-el = Lazán Kijön a hatalamas kerek 20.000.000 Bájt/másodperces letőltési tempó a feladatban!"
    },
    {
        id: "calc_05",
        topic: "Számolási Feladatok (Késleltetések)",
        question: "Mekkora a lemezek teljes körülfordulási ideje ms-ban mérve 7500 RPM esetén?",
        answer: "8",
        explanation: "1. RPM = Rotations Per Minute (Fordulat/Perc).<br>2. Először megállapítjuk, hány milliszekundum egy perc: 60 másodperc = 60.000 ms.<br>3. Ha 7500 kört tesz meg 60 ezer ms alatt, akkor 1 kör ideje: 60.000 / 7500 = 8 milliszekundum.",
        monkeyExplanation: "Kis Matek logika a motorba! RPM = Rotations Per Minute (Fordulatok/Perc angol rövidítssel)! \n1. Megállapítjuk, hogy pontosan Hány Milliszekundum is egy perc valójában?  -> 60 másodperc = Pont 60.000 ms. \n2. És IGY Már pőre nyers matek: Ha ez a diszk amugy a gépben 7500 kört tesz meg pörögve a teljes 60 ezer ms (perce) alatt,... AKKOR egyetlen 1 kör megtételi ideje: Csupán leosztva a a két számot -> 60.000 / 7500 RPM-el a tányéron = Ki ia dobodik az apró de gyors kerek 8 milliszekundumos fordulási idő a feladaton!"
    },
    {
        id: "calc_06",
        topic: "Számolási Feladatok (Késleltetések)",
        question: "Mekkora a merevlemez egy teljes körülfordulási ideje ms-ban, ha a forgási sebessége 10.000 fordulat/perc?",
        answer: "6",
        explanation: "Ugyanaz a logika: 1 perc az pontosan 60.000 milliszekundum.<br>A 60.000 ms-ot elosztva a 10.000-es fordulatszámmal: 60.000 / 10.000 = 6. Tehát 1 teljes kör 6 ms-ig tart az olvasófej alatt.",
        monkeyExplanation: "Egy Iker Képletbeli Matematika jön itt szembe ahogy ezelött megvizsgáltauk! Csak más adtokkal: \n-> Mivel tudjuk hogy az '1 Perc forgás az magában is pontosan 60.000 darab milliszekundum időkeret' \n... Ezalapjnán Sima matekkel : A Puszta nyers és kerek 60.000 ms-os fix származékot egszserúen szépen leosztod a kapott 10.000-es Winchester-Fordulatszámmal : -> Azaz simán kerekem 60.000 ms / 10.000 RPM el = PUSZTÁN amugy os egy 6 ms . Tehát 1 teljes drága s löketes Kör magában 6 ms-ig fut olvasófej alatt."
    },
    {
        id: "calc_07",
        topic: "Számolási Feladatok (Teljesítmény)",
        question: "Mekkora a relatív CPU terhelés (%) 100k polling lekérdezésnél (1800 órajel/db, 2 GHz CPU)?",
        answer: "9%",
        explanation: "1. Polling miatti órajel pazarlás másodpercenként: 100.000 (100k) szorozva 1800-zal = 180.000.000 (180 millió órajel).<br>2. A Processzor totális ereje 1 másodperc alatt: 2 GHz = 2.000.000.000 (2 milliárd Tick).<br>3. Relatív veszteség = Elhasznált / Összes. 180 millió / 2 milliárd = 0,09. Ezt %-ban (szorozva 100-zal) kapjuk meg a 9%-ot!",
        monkeyExplanation: "Hogyan égetjük le a CPU lüktetésést Felesleges Megkérdezeésekkel (Polling)? \n1. Lépés: Mennyi maga a Folyamatos Polling-ok miatti Órajel pazarlás / másodpercenként nézve? : a nyers gépben a bejövö ' 100.000 darab lekérdezés x megszorozva a 1800 drága Órajellel' = Kipottyanik is a kukába 180.000.000 (Azaz száznyolcvan Millió darab  Órajel-dobás elpazarolva)! \n2. Számvetés a géppel: Kerek 2 GHz Processzor az = Fixen 2.000.000.000 Tick. (Kettmilliárd csapás)! \n3. Kiszámolás: Relatív veszteség = Elhasznált Tick / Összes. -> 180 Millió / 2 Milliárddal = 0,09 amiből lett 9%-os a processzor pazarlása!"
    },
    {
        id: "calc_08",
        topic: "Számolási Feladatok (Teljesítmény)",
        question: "Mekkora a relatív CPU terhelés (%) 160.000 polling lekérdezésnél (1800 órajel/db, 2 GHz CPU)?",
        answer: "14,4%",
        explanation: "1. Órajel pazarlás / másodperc: 160.000 * 1800 = 288.000.000 Tick.<br>2. Processzor kapacitása: 2 GHz = 2.000.000.000 Tick.<br>3. Elpazarolt %: (288.000.000 / 2.000.000.000) = 0,144 * 100 = 14,4 százalék.",
        monkeyExplanation: "Hogyan égetjük le a CPU lüktetésést Felesleges Megkérdezeésekkel 2.0 szint? \n1. Lépés: Órajel pazarlás másodpercenként ezesetben felugrott a számokkal: ' 160.000 darab lekérdezés x 1800 Órajel/Pollog ' = Máris a szemétben van 288.000.000 darab iszonyatos Tick. \n2. Processzor bázis: Még mindig a kerek 2 GHz processzorunk van = 2.000.000.000 Tick erejével masodpercenként. \n3. Kiszámolás: '288.000.000 elhasznált / 2.000.000.000 gépbeli' = puszta 0,144-as érték lett, ami ki is adja ha beszorzod 100-al a matekos 14,4 %-os feladat teljesítőszázalékot!"
    },
    {
        id: "calc_09",
        topic: "Számolási Feladatok (Teljesítmény)",
        question: "Mekkora relatív CPU terhelést (%) jelent 2000 esemény/s interruptos kezelése (800 órajel kezelés + 2000 órajel lekérdezés, 1,6 GHz CPU)?",
        answer: "0,35%",
        explanation: "1. Kiszámoljuk az Egy Eseményre jutó teljes hardveres/szoftveres veszteséget CPU szinten: 800 + 2000 = 2800 órajel.<br>2. Ebből másodpercenként történik 2000 darab megszakítás: 2800 * 2000 = 5.600.000 Tick dobva a kukába.<br>3. Mivel a CPU kisebb, csak 1,6 GHz (1.600.000.000 Tick): Telhesítmény vesztsége -> 5.600.000 / 1.600.000.000 = 0,0035, vagyis százalékba téve 0,35%!",
        monkeyExplanation: "A Hírhedt Hardware Interrupt (A megszükitéske) processzor terheléses feladata! \n1. Lépés: Számoljuk ki, hogy az Egy Eseményre miként jut a PC-ben hardveres/szoftveres veszteség órajel (Tick szintjén! : 800 Kezeles órajel + 2000 Lekérdezo órajel = Egyből kerek 2800 db órajel a kuka! \n2. Mivel a feladat másodpercenként 2000 darab megszakitassal bombáz: A puszta 2800 * 2000 el = Hatalmas 5.600.000 db eldobott Tick lesz. \n3. Mivel a CPU kis erejű (1,6 GHz) -> ami esélyes 1.600.000.000 Tick órajelet tud tenni: A  telyesitmeny vesztesége: 5.600.000 / 1.600.000.000 = Puszta tiszta 0,0035, vagyis roppantul csak 0,35% volt!"
    },
    {
        id: "calc_10",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Hány bites a lapeltolás (offset) 8192 bájtos lapméretnél?",
        answer: "13 bit",
        explanation: "Koncept: A lapeltolás (offset) a memóriacímben mutatja meg, egy óriási betöltött Lapon belül pontosan HANYADIK bájt (karakter) kell nekünk.<br>Képlete a 2-es számrendszer miatt a 2 hatványa: 2^n = Lapméret.<br>Mivel 2^13 = 8192, ezért pontosan 13 drótnyi (bites) vezetéket igényel az alaplaptól a címelés ezezen része!",
        monkeyExplanation: "Monkey Matek: A lapeltolás (offset) a memóriacímben egy pici lenti mutatványos mester: Csupán megmutatja az amugy óriási betöltött Lapon belül is, pontosan HANYADIK kis karakter bájtra kell rárohannunk a gépben! Képlete a 2-es gépelv miatt a 2 hatványa: vagyis 2^n = Konkrét Lapméretünk! De mivel mi Tudjuk Hogy 2^13 nyersen az pont: 8192 ... ezért a gép cimosztója pontosan 13 apró kis vezetéket fog nyersen fenntartni a laplapi címeleés ezen offset részéhez!"
    },
    {
        id: "calc_11",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Hány bites a laphivatkozás (lapindex) a virtuális címben, ha a cím 16 bites és a lapméret 2^12 bájt?",
        answer: "4 bit",
        explanation: "1. A processzorunk teljes virtuális címe V = 16 bit.<br>2. Egyetlen lap mérete 2^12, ami azt jelenti, hogy az Index (Offset) része fixen kimetszett magának 12 bitet a 16-ból.<br>3. Mivel (Teljes Cím = Lap Hivatkozás + Lap Offset). Így (16 bit - 12 bit) = Pontosan 4 bit marad elől, ami a Lapok azonosító Címzésére használatos!",
        monkeyExplanation: "A Processzor Memóráiás Turpissága Folytatódik... \n1. Tudjuk a feladatból hogy, a proceszorunk teljes címe 16 bit. \n2. A virtuális Lap mérete pedig fixen ott virit (maga a 2^12)! Az előzőek alapján ez azonnyomban azt jelenti rögötn, hogy a címpontosító Offset része le is tépett magának csípőbőő 12 bitet fixre a 16 ból. \n3. S Mivel maga a nyers [Teljes Cím hossza matekból = Lap Hivatkozása / indexe + a fent lefoglalt eltolós Offsetünk]... -> Így Pusztán az amugy hosszú 16 bites cimbol kivonva  minusznak a 12 bit Offsetettulajdonltságot  = Pontosan 4 bit lapul s marad már valahol az alaplapon! Ez a felszabadult nyers  4 vezetek meg ami egyebként a fenti keretes valós asztali lapk Címzésére es regisztrláásra fagy s marad ki a memoriaban! "
    },
    {
        id: "calc_12",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Hány keretből áll a fizikai memória 14 bites cím és 2048 bájtos lapméret esetén?",
        answer: "8",
        explanation: "1. Mivel 2048 bájtos az OS lapja, a lapok Offset része `2^11 = 2048`, tehát 11 bites.<br>2. A megadott Hardver valós Fizikai RAM memóriacíme 14 bites széles.<br>3. Tehát a Fizikai Keretindex hosszúság = Fizikai Cím (14) - Offset (11) = 3 bitnyi maradék fönn, ami azonosítja a fizikai kereteket.<br>4. A nyers 3 darab bit kombinációja összesen 2^3, azaz pontosan megengedően 8 darab bepattintott fizikai Keretet tud címezni az alaplap.",
        monkeyExplanation: "Figyelj, a Fizika és a Virtuális itt ütközik: \n1. Mivel 2048 bájtos OS logikai lapunk van, a lapunk mögöttes Offset mutatója: 2^11 = (Azaz ebből egyből kiderül, hogy ez fixen 11 bittel operál az OS!). \n2. Ezzel szemben a megadott puszta hardverünk és a valós FIZIKAI RAM címe csak és kizárólag egy szűkösebb 14 bites sávon fut!! \n3. Na Tehát: A Nyers Fizikai Keretindexünk hossza ezesetben -> Fizikai Cím (14) mínusz a fenti elvett Offsetünk (11) = Azaz 14 -11 = Pusztán csak 3 drótnyi bitünk maradt fizikai dologra! \n4. És így ezen nyers maradó 3 bitnek az együttes kombinációja: 2^3, azaz áramból felépítve összesen 8 darab dedikált RAM keretet (Slot-ot) tud felosztani a rendszer!",
        monkeyExplanation: "Figyelj, a Fizika és a Virtuális itt ütközik: \n1. Mivel 2048 bájtos OS logikai lapunk van, a lapunk mögöttes Offset mutatója: 2^11 = (Azaz ebből egyből kiderül, hogy ez fixen 11 bittel operál az OS!). \n2. Ezzel szemben a megadott puszta hardverünk és a valós FIZIKAI RAM címe csak és kizárólag egy szűkösebb 14 bites sávon fut!! \n3. Na Tehát: A Nyers Fizikai Keretindexünk hossza ezesetben -> Fizikai Cím (14) mínusz a fenti elvett Offsetünk (11) = Azaz 14 -11 = Pusztán csak 3 drótnyi bitünk maradt fizikai dologra! \n4. És így ezen nyers maradó 3 bitnek az együttes kombinációja: 2^3, azaz áramból felépítve összesen 8 darab dedikált RAM keretet (Slot-ot) tud felosztani a rendszer!"
    },
    {
        id: "calc_13",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Hány lapból áll a virtuális memória 15 bites cím és 2048 bájtos lapméret esetén?",
        answer: "16",
        explanation: "Vigyázz aszimmetria, itt most a Szoftveres VIRTUÁLIS memóriára kérdez a fizikai RAM helyett!<br>1. 2048 bájtos lapnál az Offset 11 bit (2^11).<br>2. Ugyanakkor most rálátunk, hogy a futó program virtuális címtere 15 bites.<br>3. Virtuális Lapindex sávja = Teljes Cím (15) - Offset (11) = 4 bit nyers adat.<br>4. A 4 darab bináris bitből az OS összesen 2^4, azaz 16 darab különböző elméleti (virtuális) Lapcímet tud kiállítani a program számára.",
        monkeyExplanation: "Vigyázz ez egy pici csel, itt most a Szoftveres es virtuális szoftver RAM-ra kérdeznek a Fizikai helyett! \n1. Tudjuk ha 2048 bájtos egy lapunk, a gépbeli belső Offset mutató mindig legalább  11 bit amugy is de a (2^11 miatt simán). \n2. Ugyanakkor látszólag rálátunk s gépeltül de is kapbvan asztalon hogy a futó Windows programod  virtuélis s tiszta roppamt címezhető tere csak  lazaságos  15 bites lett asztalon es roppnto! \n3. Emiatt ez l egy os roppnat s mezeu puzi gépes  pld  Matek csupán a PCben ! : A roppantoos is gépbeli virtuális s csipbe n de aszatlo u Virtuális Lapindex is e nyers puzi a sávja és is e a vas s gépben !! = Mgas  s i telheset  Teljes aszatlii nyers és de oly  Címböl levonvs es is rokt is  egy de i oly de Puzi is es Egyenes levonas de mínusz aszio os is s a kapott és l rppoan t  Offset !-> Azaz nyesen   15 bit - de , msniusy a  11 bit. Amit de ropnnts , ha ropans kivonunk ropni es akkora i kapjus is hoigsy : ho é hs d ls pld e ig de hogy  lazans  4 pici e is bitt ls o de : nyers bit ds is masrdat s csoben egy  le is valo is saámolsáia gábe asztal a roppno ls drtón i ps de s a!>.. > 4. Ígymi is is mar szinute es ms d i ropnnts de pzi pld , csodaszépen  d s ls tiszts os és de i e es e , m a s ms na ds o is l . mert s ebbol l m  4 ls d rs d m de l , bsinaär s a m s bi os ds pci s bi pld OS ö s de  es y de e  ly . o g l é , a . es : is z ds lg es ss ! ds . >.",
        monkeyExplanation: "Vigyázz ez egy pici csel, itt most a Szoftveres es virtuális szoftver RAM-ra kérdeznek a Fizikai helyett! \n1. Tudjuk ha 2048 bájtos egy lapunk, a gépbeli belső Offset mutató mindig legalább 11 bit amugy is (2^11 miatt simán). \n2. Ugyanakkor látszólag rálátunk, hogy a futó Windows programod virtuális címezhető tere csak 15 bites lett asztalon! \n3. Emiatt ez egy szimpla mezei Matek csupán a PC-ben: A gépbeli virtuális Lapindex sávja = Teljes nyers Címből levonjuk az Offsetett! -> Azaz 15 bit - 11 bit. Amit ha kivonunk: marad 4 pici nyers bit számolásra a gépbe. \n4. Így logikailag a 4 bináris bitből az OS összesen 2^4, azaz kereken 16 darab csodaszép virtuális elvi Lapcímet tud kiállítani a program számára!"
    },
    {
        id: "calc_14",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Mekkora a TLB lefedettség 2 kB-os lapméret és 128 bejegyzéses TLB esetén (kB-ban)?",
        answer: "256 kB",
        explanation: "A Translation Lookaside Buffer matematikai mérete: Milyen Lapméretet * Hányszor (Hány apró chip sorban) tud tárolni! <br>A Matek: 2 kB (1 db lap OS hossza) szorozva * 128-al (ennyi külön bejegyzést tud fizikailaig fejben tartani a pici processzor chip) = 256.<br>Mivel az egyik már eleve KiloBájtban van megadva az 1024 bájtból, a vége is 256 KiloBájt. Ekkora gigantikus címtartományt fed le sebes cache-ből a processzor anélkül hogy ki kéne mennie a lassú külső memóriába megnézni!",
        monkeyExplanation: "Translation Lookaside Buffer (TLB MMU) Címfordító lefedetségének matekja! A matekkal csupán ezt kérdezik logikailag a PC-dben : mekkora egy lap, s abból mennyit osztoztatni el? Így jön ki: Milyen lapméretet * megszorozva  Hányszor (avagy Hány apró dedikált sorban) tud hardveresen gépész chipjében tárolni cachent a processzorod! Le is vezetve gépen: 2 KiloBájt (Ez a 1 darab lapod os hossza fixen vason) -> szorozva -> 128-al (Hiszen Ennyi egyedenkénti apró TLB  bejegyzést memóriát tud a cache-ben tartani az intel chip fixen s korlátosan) = Eredményünk: Maga a nyers 256 dolog jön ki szorzatként... s  Mivel az elején pld a rácsod már is KiloBájtban volt pld adva alapon ... a nyers végeredményed is 256 KiloBájtos memóriaterületet takar a RAM lefedésben amivel pld időt s órjelet spórol puszán !",
        monkeyExplanation: "Translation Lookaside Buffer (TLB MMU) Címfordító lefedetségének matekja! A matekkal csupán ezt kérdezik logikailag a PC-dben : mekkora egy lap, s abból mennyit osztoztat el? Így jön ki: Milyen lapméretet * megszorozva Hányszor (avagy Hány apró dedikált sorban) tud hardveresen chipjében tárolni cache-t a processzorod! Le is vezetve gépen: 2 KiloBájt (Ez a 1 darab lapod os hossza fixen vason) -> szorozva -> 128-al (Hiszen Ennyi bejegyzést tud a cache-ben tartani az intel chip fixen s korlátosan) = Eredményünk: Maga a nyers 256 mint szorzat. S Mivel az elején a rácsod már KiloBájtban volt adva, a nyers végeredményed is pontosan 256 KiloBájtos memóriaterületet takar a RAM lefedésben amivel pld időt s órjelet spórol puszán !"
    },
    {
        id: "calc_15",
        topic: "Számolási Feladatok (Virtuális Memória)",
        question: "Virtuális memória mérete (17 bites virtuális cím esetén)",
        answer: "128 kB",
        explanation: "Ha csak magára a matematikai címtérre kívéncsiak, és a bináris címhossz a dróton 17 bit:<br>Akkor az OS számára létező címtér fizikai mérete pontosan 2 a 17.-en Bájt. Gyorsabban levezetve: 2^10 = 1024 bájt, azaz 1 KB.<br>A maradék 2^7 = 128.<br>Tehát 128 szorozva a fenti 1 KiloBájtal = ami konkrétan 128 KB teljes címezhető látszólagos memóriaméretöt jelent a feladatban!",
        monkeyExplanation: "Virtuális Memória Matematika: Ha csak pusztán magára a matematikai címtérre vagyunk kíváncsiak, és a bináris címhossz a PC drótján csupán 17 bit... \nAkkor az Oprendszer számára létező címtér fizikai mérete pontosan: 2 a 17-en Bájt lesz. \nEzt papíron levezetve a leggyorsabb trükkel a következő: A számítástechnikában a 2^10 fixen 1024 bájtot (azaz kereken 1 Kilobájtot / 1 KB) jelent. \nA fennmaradó 17-ből: A 2^7 az pontosan kiadja a 128-as számot. Mivel 128 szorozva a fenti 1 KB-al eredményezi az asztali címeredményünket... Az Oprendszer konkrétan teljes nyers és tiszta 128 KB virtuálisan címezhető memóriatartománnyal gazdálkodhat a feladat alapján!"
    },
    {
        id: "calc_16",
        topic: "Számolási Feladatok (NAND flash/SSD)",
        question: "Tranzisztorszám 24 bit tárolásához MLC SSD esetén",
        answer: "12",
        explanation: "1 MLC (Multi-Level Cell) pöttömnyi tranzisztorban pontosan 2 darab Bit-et (pl '01'-et vagy '11'-et) képvisel egyszerre egyetlen egy parányi  szilícium chip sejten belül hardveresen!<br>Tehát ha az OS leküld egy gigantikus 24 információs bites sort, annak fizikai elraktározásához elég 24 osztva 2vel = 12 fizikai Tranzisztort felülfeszültségeznie!",
        monkeyExplanation: "Az említett 1 pici MLC (Multi-Level Cell) SSD tranzisztorban pontosan 2 darab Bit-et (pl analóg feszültségen '01'-et vagy '11'-et) zsúfolnak és képviselnek egyszerre egyetlen egy parányi szilícium chip sejt felületen belül! Ezért aztán ha az Oprendszer leküld egy gigantikus 24 bites mentési sort felírni, annak tényleges fizikai elraktározásához elég a meglévő 24 osztva 2-vel = ami bizony csupán egy aprócska 12 fizikai flash Tranzisztort jelent feláldozva asztalon!"
    },
    {
        id: "calc_17",
        topic: "Számolási Feladatok (NAND flash/SSD)",
        question: "Tranzisztorszám 24 bit tárolásához QLC SSD esetén",
        answer: "6",
        explanation: "1 QLC (Quad-Level Cell) egyetlen pici apró tranzisztor cellájában lenyűgöző vegytannal teljességgel 4 bitnyi információt (16 féle mikroszintet) azonosít kiolvasó chip hardveresen!<br>Így ha szintúgy az OS leküld 24 adatbitet s azt akarunk rácsomagolsni  24 / 4 = Végül összesen brutálisan kicsi helyen, pusztáne csak 6 fizikai cellában elfér a kapacitás!",
        monkeyExplanation: "Az SSD-k igazi trükkje a QLC (Quad-Level Cell) architektúra. Ebben egyetlen aprócska tranzisztor cellája lenyűgöző vegytannal teljességgel 4 bitnyi masszív információt (azonosítva 16 féle mikrofeszültség-szintet) tud kiolvasni chip logikailag! Így ha ide is az OS leküld egy tiszta 24 adatbites írási sort hardveren... ahhoz pusztán elég megoldás a 24 bit adat / megosztva 4-el = Végül összesen brutálisan kicsi helyen, pusztán csupán 6 drága fizikai QLC chip-cellában hibátlanul letárolva elfér a kapacitás!"
    }
];

