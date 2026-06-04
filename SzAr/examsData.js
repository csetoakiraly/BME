const examsData = {
    "elovizsga_a1": {
        title: "Elővizsga A 1 (2024. május 31.)",
        questions: [
            {
                type: "multiple-choice",
                question: "Mik a finom felbontású időosztásos többszálú feldolgozást támogató processzorok jellemzői?",
                options: [
                    "Egyazon ciklusban több szál utasításait is képes végrehajtani",
                    "Csak egy regiszterkészlet van a processzorban",
                    "Csak egy utasításszámláló van a processzorban",
                    "Csak akkor vált szálat, ha az aktuális szál feldolgozása várakozni kényszerül",
                    "Egyik sem a felsoroltak közül"
                ],
                correctAnswers: ["Egyik sem a felsoroltak közül"],
                explanation: "A finom felbontású (fine-grained) időosztásos architektúra **minden egyes órajelben** vált a szálak között (round-robin), ezért több programszámlálóra (PC) és regiszterkészletre van szüksége. Az \"egyazon ciklusban több szál\" az az SMT (Simultaneous Multithreading), a \"csak ha várakozni kényszerül\" pedig a durva felbontású (coarse-grained) megoldás."
            },
            {
                type: "multiple-choice",
                question: "Mely állítások igazak a fizikai regiszterekre?",
                options: [
                    "Több van belőle, mint a logikai/architekturális regiszterből",
                    "A programozó ezeket, és nem a logikai/architekturális regisztereket használja",
                    "A programozó elől el vannak takarva",
                    "Az utasításkészlet architektúra definiálja a darabszámukat és elnevezésüket"
                ],
                correctAnswers: ["Több van belőle, mint a logikai/architekturális regiszterből", "A programozó elől el vannak takarva"],
                explanation: "A fizikai regisztereket a hardver (a processzor) használja a regiszter átnevezés (register renaming) során, hogy megszüntesse a névfüggőségeket (WAW, WAR). A programozó az ISA által definiált logikai regisztereket látja, de a processzor a háttérben több fizikai regiszterre képezi le ezeket."
            },
            {
                type: "multiple-choice",
                question: "Mik a virtuálisan indexelt, virtuális tag-eket használó cache (VIVT) tulajdonságai a fizikailag indexelt, fizikai tag-eket használó (PIPT) cache-hez képest?",
                options: [
                    "Kizárólag virtuális memóriát támogató processzorokban alkalmazható",
                    "Nagyobb méretű fizikai memória használatát támogatja",
                    "Rövidebbek a cache tag-ek",
                    "A címfordítás bizonyos esetekben elhagyható"
                ],
                correctAnswers: ["A címfordítás bizonyos esetekben elhagyható"],
                explanation: "Egy VIVT (Virtually Indexed, Virtually Tagged) cache esetén, ha az adat benne van a cache-ben (Cache Hit), akkor a processzornak nem kell a TLB-hez (Translation Lookaside Buffer) fordulnia címfordításért, hiszen a virtuális cím alapján azonnal megkapja az adatot. Emiatt sokkal gyorsabb lehet a találat."
            },
            {
                type: "multiple-choice",
                question: "Hogyan hasznosítja egy globális és lokális becslőre építő tournament prediktor a két becslő eredményét az elágazásbecslés során?",
                options: [
                    "A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül",
                    "A globális előzmény regisztert és az utasításszámlálót XOR-olja",
                    "A tournament prediktor nem képes két különböző becslővel dolgozni",
                    "A tisztán lokális és egy tisztán globális becslő eredményét NXOR-olja"
                ],
                correctAnswers: ["A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül"],
                explanation: "A Tournament (bajnokság) prediktorok egy extra állapotgépet/táblát (meta-prediktor) használnak arra, hogy nyomon kövessék, melyik alap-prediktor (a lokális vagy a globális) volt a közelmúltban a pontosabb az adott elágazásnál, és mindig a sikeresebbnek a döntését fogadják el."
            },
            {
                type: "multiple-choice",
                question: "Legfeljebb hány utasítás párhuzamos végrehajthatóságát tudja jelezni a fordító a processzornak (VLIW, EPIC, Szuperskalár esetén)?",
                options: [
                    "VLIW: Annyit, ahány műveleti egysége van a processzornak",
                    "Szuperskalár: A fordító nem tudja jelezni, mely utasítások hajthatók végre párhuzamosan",
                    "EPIC: Bármennyi / Változó mennyiséget egy utasításcsomagban",
                    "Mindegyik állítás igaz"
                ],
                correctAnswers: ["Mindegyik állítás igaz"],
                explanation: "A **VLIW** (Very Long Instruction Word) szigorúan fix, az ALU-k számával megegyező slotot ad meg egy hosszú utasításszóban. A **Szuperskalár** gépek hardveresen (dinamikusan) találják meg a párhuzamosságot, a fordító nem tud explicit instrukciót adni. Az **EPIC** (Explicitly Parallel Instruction Computing) rugalmas csomagokban (bundle) csoportosítja a párhuzamosítható utasításokat."
            },
            {
                type: "multiple-choice",
                question: "A tanult 5 fázisú pipeline-ban (IF, ID, EX, MEM, WB) mely fázisok nem végeznek tényleges munkát a Store és a Mul (szorzás) utasítás végrehajtásakor?",
                options: [
                    "Mul (Szorzás): A MEM fázis nem végez munkát",
                    "Store (Tárolás): A WB (Write-Back) fázis nem végez munkát",
                    "Mindkettő állítás igaz",
                    "Egyik állítás sem igaz"
                ],
                correctAnswers: ["Mindkettő állítás igaz"],
                explanation: "A szorzás (`MUL`) egy aritmetikai művelet, így a kiszámított eredményt nem kell a memóriába írni, a MEM fázis üresjárat (NOP). A `STORE` utasítás a memóriába írja az adatot a MEM fázisban, így a legutolsó WB (Regiszterbe írás) fázisban nincs mit csinálnia."
            },
            {
                type: "free-text",
                question: "Amdahl törvénye szerint mennyivel gyorsabban fut egy program egy 8 processzorból álló multiprocesszoros rendszerben, mint egy 1 processzoros rendszerben, ha a program harmada csak szekvenciálisan futtatható?",
                options: [],
                correctAnswers: ["2.4"],
                explanation: "Amdahl törvénye: `Speedup = 1 / ((1 - P) + P/N)`, ahol `1 - P` a szekvenciális rész (1/3), `P` a párhuzamosítható rész (2/3), és `N` a processzorok száma (8).\n`Speedup = 1 / (1/3 + (2/3) / 8) = 1 / (1/3 + 2/24) = 1 / (8/24 + 2/24) = 1 / (10/24) = 24/10 = 2.4`."
            },
            {
                type: "free-text",
                question: "Mit jelent a pipeline késleltetési ideje (latency)?",
                options: [],
                correctAnswers: ["Amennyi időbe telik a fázisok lefuttatása egyetlen utasításra vonatkozóan"],
                explanation: "A latency (késleltetés) az az idő, ami alatt egyetlen utasítás teljesen végigmegy a pipeline összes fokozatán (belépéstől a kilépésig). Ez különbözik a throughput-tól (áteresztőképesség), ami azt mutatja meg, hogy egységnyi idő alatt hány utasítás fejeződik be."
            },
            {
                type: "free-text",
                question: "Adott az alábbi utasítássorozat. Rendezze át az utasítássorozatot úgy, hogy az a lehető leggyorsabban fusson le (az adatfüggőségek megtartásával)! \n\n i1: R1 ← MEM[R0+0]\n i2: R2 ← MEM[R0+4]\n i3: R3 ← R1 + R2\n i4: R4 ← R3 * R2\n i5: R0 ← R0 + 8",
                options: [],
                correctAnswers: ["i1 - i2 - i5 - i3 - i4"],
                explanation: "Az eredeti sorrendben az `i3` azonnal várja az `i2` eredményét, ami egy load-use hazard (szünetet okoz). Ha az `i5`-öt (`R0` módosítása) feljebb mozgatjuk az `i2` és `i3` közé, akkor hasznos munkát végzünk a várakozási (stall) ciklus alatt. Az `i5` végrehajtása nem zavarja be az `i1` és `i2` memóriaelérését (ha a hardver már kiküldte a címeket), illetve nem rontja az `i3` paramétereit."
            },
            {
                type: "free-text",
                question: "Egy processzorban az adat cache 4 utas asszociatív, LRU menedzselt, 8 blokkot tárol. Hivatkozások: 1, 7, 0, 12, 5. \nAdja meg a cache index és tag értékeket ezekhez a blokkokhoz!",
                options: [],
                correctAnswers: ["1: Idx=1 Tag=0, 7: Idx=1 Tag=3, 0: Idx=0 Tag=0, 12: Idx=0 Tag=6, 5: Idx=1 Tag=2"],
                explanation: "A cache 8 blokkot bír el, 4 utas -> 8/4 = 2 halmaz (Set 0 és Set 1). \nAz indexet a blokkcím modulo 2 adja meg (utolsó bit), a taget pedig a maradék (osztás 2-vel, lefelé kerekítve).\n- 1: mod 2 = 1 (Index), 1/2 = 0 (Tag)\n- 7: mod 2 = 1 (Index), 7/2 = 3 (Tag)\n- 0: mod 2 = 0 (Index), 0/2 = 0 (Tag)\n- 12: mod 2 = 0 (Index), 12/2 = 6 (Tag)\n- 5: mod 2 = 1 (Index), 5/2 = 2 (Tag)"
            },
            {
                type: "free-text",
                question: "Szüntesse meg a WAW és WAR adat-egymásrahatásokat regiszter átnevezés segítségével az alábbi kódon! (Kezdetben R0=U4, R1=U2, R2=U7, R3=U13)\n\ni1: R1 ← MEM[R0+0]\ni2: R1 ← R1 * 3\ni3: MEM[R0+4] ← R1\ni4: R0 ← R0 + 4",
                options: [],
                correctAnswers: ["i1: U14 ← MEM[U4+0], i2: U15 ← U14 * 3, i3: MEM[U4+4] ← U15, i4: U16 ← U4 + 4"],
                explanation: "Új fizikai regisztereket (U14, U15, U16) osztunk ki minden alkalommal, amikor egy logikai regiszterbe (R1, R0) írunk.\n- `i1`: R1 új értéket kap -> U14. Cím R0 -> U4.\n- `i2`: R1 új értéket kap -> U15. Operandus R1 -> a korábban kiosztott U14.\n- `i3`: R1-et olvassa -> U15. Címet olvassa R0 -> U4.\n- `i4`: R0 új értéket kap -> U16. Operandus R0 -> U4."
            }
        ]
    },
    "elovizsga_b1": {
        title: "Elővizsga B 1",
        questions: [
            {
                type: "multiple-choice",
                question: "Mik a szimultán többszálú feldolgozást (SMT) támogató processzorok jellemzői?",
                options: [
                    "Több regiszterkészlet van a processzorban",
                    "Csak akkor vált szálat, ha az aktuális szál feldolgozása várakozni kényszerül",
                    "Több utasításszámláló van a processzorban",
                    "Egy adott órajelben csak egyetlen szál utasításait tudja végrehajtani"
                ],
                correctAnswers: ["Több regiszterkészlet van a processzorban", "Több utasításszámláló van a processzorban"],
                explanation: "A szimultán többszálú (SMT) feldolgozás során *egyazon órajelben* (egy ciklusban) több különböző szál utasításait is végre tudja hajtani a processzor (ezért hamis az utolsó állítás). Természetesen ehhez minden szálnak saját regiszterkészlettel és PC-vel (utasításszámláló) kell rendelkeznie."
            },
            {
                type: "multiple-choice",
                question: "Mely állítások igazak a fizikai regiszterekre?",
                options: [
                    "A programozó ezeket, és nem a logikai/architekturális regisztereket használja",
                    "A programozó elől el vannak takarva",
                    "Több van belőle, mint a logikai/architekturális regiszterből",
                    "Az utasításkészlet architektúra definiálja a darabszámukat és elnevezésüket"
                ],
                correctAnswers: ["A programozó elől el vannak takarva", "Több van belőle, mint a logikai/architekturális regiszterből"],
                explanation: "A fizikai regisztereket a hardver (a processzor) használja a regiszter átnevezés (register renaming) során, hogy megszüntesse a névfüggőségeket (WAW, WAR). A programozó az ISA által definiált logikai regisztereket látja, és nem is tud a fizikai regiszterek létezéséről."
            },
            {
                type: "multiple-choice",
                question: "Mik a virtuálisan indexelt, virtuális tag-eket használó cache tulajdonságai a fizikailag indexelt, fizikai tag-eket használó cache-hez képest?",
                options: [
                    "Kizárólag virtuális memóriát támogató processzorokban alkalmazható",
                    "A címfordítás bizonyos esetekben elhagyható",
                    "Rövidebbek a cache tag-ek",
                    "Nagyobb méretű fizikai memória használatát támogatja"
                ],
                correctAnswers: ["Kizárólag virtuális memóriát támogató processzorokban alkalmazható", "A címfordítás bizonyos esetekben elhagyható"],
                explanation: "Mivel a tag-ek és indexek virtuális címekhez kötöttek, egyértelműen kell virtuális memória. Címfordítás elhagyható cache-hit esetén, hiszen a virtuális cím alapján azonnal ellenőrizhető és kiadható az adat a TLB használata nélkül."
            },
            {
                type: "multiple-choice",
                question: "Hogyan hasznosítja a gshare prediktor a globális és lokális információkat az elágazásbecslés során?",
                options: [
                    "A globális előzmény regisztert és az utasításszámlálót XOR-olja",
                    "Egy tisztán lokális és egy globális, korrelált becslő eredményét NXOR-olja",
                    "A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül",
                    "A gshare prediktor nem vegyít globális és lokális információkat"
                ],
                correctAnswers: ["A globális előzmény regisztert és az utasításszámlálót XOR-olja"],
                explanation: "A gshare (global-share) a globális elágazástörténeti regisztert (GHR) és a lokális utasításszámlálót (PC) XOR bitművelettel fűzi össze. Ez az összekapcsolt érték lesz az index a PHT-be (Pattern History Table)."
            },
            {
                type: "multiple-choice",
                question: "Legfeljebb hány utasítás párhuzamos végrehajthatóságát tudja jelezni a fordító a processzornak (VLIW, Szuperskalár, EPIC esetén)?",
                options: [
                    "VLIW: Annyit, ahány műveleti egysége van a processzornak",
                    "Szuperskalár: A fordító nem tudja jelezni, mely utasítások hajthatók végre párhuzamosan",
                    "EPIC: Változó mennyiséget (csomagokban adja meg)",
                    "Mindegyik állítás igaz"
                ],
                correctAnswers: ["Mindegyik állítás igaz"],
                explanation: "VLIW-nél pontosan annyi utasítást kell megadni (akár NOP-okkal kiegészítve), ahány végrehajtó egység van. A Szuperskalárnál a hardver dinamikusan, futásidőben találja meg a párhuzamosságot. Az EPIC (pl. Itanium) rugalmas \"bundle\"-ökkel (csomagokkal) jelzi a független utasításokat."
            },
            {
                type: "multiple-choice",
                question: "A tanult 5 fázisú pipeline-ban mely fázisok nem végeznek tényleges munkát a Store és a Mul (szorzás) utasítás végrehajtásakor?",
                options: [
                    "Store: WB fázis",
                    "Mul: MEM fázis",
                    "Mindkét fenti állítás igaz",
                    "Egyik fenti állítás sem igaz"
                ],
                correctAnswers: ["Mindkét fenti állítás igaz"],
                explanation: "Store utasításnál az adat beírása a memóriába a MEM fázisban megtörténik, így a regiszterbe írás (WB) üresjárat. Szorzásnál (Mul) az aritmetikai egység kiszámolja az eredményt, amit nem kell a memóriába írni, ezért a MEM fázis NOP lesz."
            },
            {
                type: "free-text",
                question: "Mekkora a PHT mérete, ha az utasításszámláló utolsó 6 bitje jelöli ki a használt bejegyzést, és az ugrási hajlandóság nyomon követésére 4 állapotot különböztetünk meg?",
                options: [],
                correctAnswers: ["128 bit"],
                explanation: "A 6 bites indexelés azt jelenti, hogy 2^6 = 64 bejegyzésünk van a táblában. Minden bejegyzéshez 4 állapot tartozik, aminek a tárolásához log2(4) = 2 bit szükséges. Összesen: 64 bejegyzés * 2 bit = 128 bit."
            },
            {
                type: "free-text",
                question: "Amdahl törvénye szerint mennyivel gyorsabban fut egy program egy 10 processzorból álló multiprocesszoros rendszerben, mint egy 1 processzoros rendszerben, ha a program harmada csak szekvenciálisan futtatható?",
                options: [],
                correctAnswers: ["2.5"],
                explanation: "P (párhuzamosítható rész) = 2/3. S (szekvenciális rész) = 1/3. N = 10. \nGyorsulás = 1 / (S + P/N) = 1 / (1/3 + (2/3)/10) = 1 / (1/3 + 2/30) = 1 / (10/30 + 2/30) = 1 / (12/30) = 30/12 = 2.5."
            },
            {
                type: "free-text",
                question: "Mit jelent a pipeline átviteli sebessége (throughput)?",
                options: [],
                correctAnswers: ["Azt mutatja meg, hogy egységnyi idő alatt hány utasítás fejeződik be (hajtódik végre)."],
                explanation: "Az átviteli sebesség (throughput) a rendszer teljesítményének a mutatója: hány utasítást tudunk 'kipréselni' a pipeline-ból adott idő alatt. Ez nem keverendő a késleltetéssel (latency), ami egyetlen utasítás teljes végrehajtási idejét jelenti."
            },
            {
                type: "free-text",
                question: "Rendezze át az utasítássorozatot úgy, hogy a lehető leggyorsabban fusson le:\ni1: R1 <- R1 + R4\ni2: R2 <- MEM[R0+4]\ni3: R1 <- R1 + R2\ni4: R3 <- R1 * R2\ni5: MEM[R0+0] <- R3",
                options: [],
                correctAnswers: ["i2 - i1 - i3 - i4 - i5"],
                explanation: "Az `i2` utasítás egy betöltés a memóriából, aminek az eredményére (`R2`) az `i3`-nak szüksége van. Ha az eredeti sorrendben hagyjuk, a load-use hazard miatt várakozni kell. Ha az `i1`-et (`R1` frissítése) az `i2` mögé rakjuk, akkor az kitölti a memóriavárakozás idejét hasznos munkával, mivel az `i1` teljesen független az `i2`-től."
            },
            {
                type: "free-text",
                question: "Egy processzorban az adat cache 4 utas asszociatív szervezésű, LRU menedzselt, 8 memóriablokkot képes tárolni. Hivatkozások: 7, 1, 5, 0, 12.\nAdja meg a cache index és tag értékeket!",
                options: [],
                correctAnswers: ["7: Idx=1 Tag=3, 1: Idx=1 Tag=0, 5: Idx=1 Tag=2, 0: Idx=0 Tag=0, 12: Idx=0 Tag=6"],
                explanation: "A cache 8 blokk / 4 út = 2 halmaz (Set 0 és Set 1). Az index a memóriacím mod 2 értéke, a tag pedig a cím / 2 (lefelé kerekítve).\n- 7 mod 2 = 1 (Idx), 7/2 = 3 (Tag)\n- 1 mod 2 = 1 (Idx), 1/2 = 0 (Tag)\n- 5 mod 2 = 1 (Idx), 5/2 = 2 (Tag)\n- 0 mod 2 = 0 (Idx), 0/2 = 0 (Tag)\n- 12 mod 2 = 0 (Idx), 12/2 = 6 (Tag)"
            },
            {
                type: "free-text",
                question: "Szüntesse meg a WAW és WAR adat-egymásrahatásokat regiszter átnevezéssel az alábbi kódon (Kezdetben R0=U9, R1=U5, R2=U8, R3=U1):\ni1: R1 <- MEM[R0+0]\ni2: R2 <- MEM[R0+4]\ni3: R2 <- R2 + R1\ni4: R0 <- R0 + 8",
                options: [],
                correctAnswers: ["i1: U10 <- MEM[U9+0], i2: U11 <- MEM[U9+4], i3: U12 <- U11 + U10, i4: U13 <- U9 + 8"],
                explanation: "Új fizikai regisztert (U10, U11, U12, U13) adunk minden célregiszternek.\n- `i1`: R1 új értéket kap (U10). Olvasott R0 (U9).\n- `i2`: R2 új értéket kap (U11). Olvasott R0 (U9).\n- `i3`: R2 új értéket kap (U12). Olvasott R2 az i2-ből (U11), R1 az i1-ből (U10).\n- `i4`: R0 új értéket kap (U13). Olvasott R0 (U9)."
            }
        ]
    },
    "elovizsga_b2": {
        title: "Elővizsga B 2",
        questions: [
            {
                type: "multiple-choice",
                question: "Hogyan hasznosítja a gshare prediktor a globális és lokális információkat az elágazásbecslés során?",
                options: [
                    "A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül",
                    "A globális előzmény regisztert és az utasításszámlálót XOR-olja",
                    "Egy tisztán lokális és egy globális, korrelált becslő eredményét NXOR-olja",
                    "A gshare prediktor nem vegyít globális és lokális információkat"
                ],
                correctAnswers: ["A globális előzmény regisztert és az utasításszámlálót XOR-olja"],
                explanation: "A gshare (global-share) prediktor a globális elágazástörténeti regisztert (GHR) és a lokális utasításszámlálót (PC) XOR bitművelettel fűzi össze, hogy egy indexet kapjon a PHT (Pattern History Table) eléréséhez."
            },
            {
                type: "multiple-choice",
                question: "Mely tevékenységeket végzi a hardver (a CPU) a szuperskalár architektúrában?",
                options: [
                    "Független utasítások összeválogatása",
                    "Egymásrahatások detektálása és kezelése",
                    "Utasítások műveleti egységhez rendelése",
                    "Az utasítások végrehajtása"
                ],
                correctAnswers: [
                    "Független utasítások összeválogatása", 
                    "Egymásrahatások detektálása és kezelése", 
                    "Utasítások műveleti egységhez rendelése", 
                    "Az utasítások végrehajtása"
                ],
                explanation: "A Szuperskalár architektúra lényege pont az, hogy a fordítóprogram (szoftver) nem végez explicit ütemezést: a processzor (hardver) saját maga, futásidőben dinamikusan elemzi a kódot, keresi meg az egymástól független utasításokat és osztja ki őket a végrehajtó egységeknek."
            },
            {
                type: "multiple-choice",
                question: "Egy sorrendvisszaállító bufferrel (ROB) rendelkező out-of-order processzorban az utasításvégrehajtás alábbi fázisai közül melyek történnek a program szerint megadott (in-order) sorrendben?",
                options: [
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)",
                    "Utasítások végrehajtása (Execute)",
                    "Utasítások lehívása (Fetch)",
                    "Mindhárom sorrendben történik"
                ],
                correctAnswers: [
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)", 
                    "Utasítások lehívása (Fetch)"
                ],
                explanation: "Egy Out-of-Order (OoO) processzorban az utasítások lehívása (Fetch) és dekódolása/kiosztása (Issue/Dispatch a ROB-ba) szigorúan eredeti programsorrendben történik (in-order). A tényleges végrehajtás (Execute) az, ami sorrendtől függetlenül (out-of-order) történhet, ha az operandusok rendelkezésre állnak. A legvégén a kilépés (Commit/Retire) szintén sorrendben történik."
            },
            {
                type: "multiple-choice",
                question: "Mik a durva felbontású (coarse-grained) időosztásos többszálú feldolgozást támogató processzorok jellemzői?",
                options: [
                    "Csak egy utasításszámláló (PC) van a processzorban",
                    "Több regiszterkészlet van a processzorban",
                    "Csak akkor vált szálat, ha az aktuális szál feldolgozása várakozni kényszerül (pl. cache miss)",
                    "Egyazon ciklusban több szál utasításait képes végrehajtani"
                ],
                correctAnswers: [
                    "Több regiszterkészlet van a processzorban",
                    "Csak akkor vált szálat, ha az aktuális szál feldolgozása várakozni kényszerül (pl. cache miss)"
                ],
                explanation: "A durva felbontású többszálúsítás (Coarse-grained multithreading) során a processzor addig futtat egy szálat (egy ciklusban csak egyet!), amíg az valamiért meg nem akad (pl. L2 cache miss). Ekkor átvált egy másik szálra, aminek a kontextusa (regiszterek és PC) szintén a hardveren belül van tárolva."
            },
            {
                type: "multiple-choice",
                question: "Legfeljebb hány utasítás párhuzamos végrehajthatóságát tudja jelezni a fordító a processzornak (VLIW, Szuperskalár, EPIC)?",
                options: [
                    "VLIW: Annyit, ahány műveleti egysége van a processzornak",
                    "Szuperskalár: A fordító nem tudja jelezni, mely utasítások hajthatók végre párhuzamosan",
                    "EPIC: Változó mennyiséget",
                    "Mindegyik állítás igaz"
                ],
                correctAnswers: ["Mindegyik állítás igaz"],
                explanation: "VLIW szigorúan fix csomagméretet (ALU-k száma) vár el. A Szuperskalár hardveresen keresi a párhuzamosságot, a fordító nem explicit. Az EPIC dinamikus méretű csomagokban (bundle) csoportosítja a párhuzamos utasításokat."
            },
            {
                type: "free-text",
                question: "Mekkora a PHT mérete egy 6 bites globális előzményregisztert (GHR) használó korrelált elágazásbecslő eljárás esetén, ha az ugrási hajlandóság nyomon követésére 4 állapotot használunk?",
                options: [],
                correctAnswers: ["128 bit"],
                explanation: "A 6 bites index 2^6 = 64 bejegyzést címez meg. Minden bejegyzés egy 4 állapotú gépet tárol, aminek az ábrázolásához 2 bit kell (00, 01, 10, 11). Így a PHT mérete 64 * 2 bit = 128 bit."
            },
            {
                type: "free-text",
                question: "Amdahl törvénye szerint elméletileg mennyivel gyorsabban futhat egy program egy végtelen sok processzorból álló rendszerben, ha a programnak csak a fele párhuzamosítható tökéletesen, a másik fele pedig csak szekvenciálisan futtatható?",
                options: [],
                correctAnswers: ["2"],
                explanation: "Amdahl törvénye: `Speedup = 1 / (S + P/N)`. Itt a szekvenciális rész (S) = 0.5, a párhuzamos (P) = 0.5. Mivel a processzorok száma (N) tart a végtelenbe, a `P/N` tag 0 lesz. `Speedup = 1 / (0.5 + 0) = 1 / 0.5 = 2`. Ez az elméleti maximum."
            },
            {
                type: "free-text",
                question: "Mi a memória-egyértelműsítés (memory disambiguation) szerepe a soron kívüli végrehajtást támogató processzorokban?",
                options: [],
                correctAnswers: ["Annak ellenőrzése futásidőben, hogy egy korábban kiadott, de végre nem hajtott Store utasítás nem ugyanarra a memóriacímre ír-e, ahonnan egy későbbi, de hamarabb végrehajtott Load olvasna."],
                explanation: "Out-of-order gépeknél a Load és Store utasítások sorrendje is felcserélődhet. Ha a fordító nem tudta megállapítani, hogy két mutató (pointer) ugyanarra a memóriaterületre mutat-e, a hardvernek kell futásidőben vizsgálnia a memóriacímeket (memory disambiguation), nehogy RAW hazard alakuljon ki a memórián keresztül."
            },
            {
                type: "free-text",
                question: "Egy processzorban az adat cache 2 utas asszociatív, LRU menedzselt, 8 blokkot képes tárolni. Hivatkozások: 21, 6, 15, 3, 10.\nAdja meg az indexeket és a tag-eket!",
                options: [],
                correctAnswers: ["21: Idx=1 Tag=5, 6: Idx=2 Tag=1, 15: Idx=3 Tag=3, 3: Idx=3 Tag=0, 10: Idx=2 Tag=2"],
                explanation: "A cache kapacitása 8 blokk, 2 utas -> 8/2 = 4 halmaz (Set 0..3). Az indexet a (cím mod 4) adja meg, a taget pedig a cím / 4 (lefelé kerekítve).\n- 21: mod 4 = 1 (Idx), 21/4 = 5 (Tag)\n- 6: mod 4 = 2 (Idx), 6/4 = 1 (Tag)\n- 15: mod 4 = 3 (Idx), 15/4 = 3 (Tag)\n- 3: mod 4 = 3 (Idx), 3/4 = 0 (Tag)\n- 10: mod 4 = 2 (Idx), 10/4 = 2 (Tag)"
            },
            {
                type: "free-text",
                question: "Szüntesse meg a WAW és WAR adat-egymásrahatásokat regiszter átnevezéssel! (Kezdetben R0=U0, R1=U8, R2=U5, R3=U3)\ni1: R1 <- MEM[R0+0]\ni2: R2 <- R1 * R0\ni3: MEM[R2+0] <- R1\ni4: R2 <- R0 * R3\n\nMennyi ideig tart a fenti utasítássorozat végrehajtása egy ideális out-of-order processzorban (végtelen ALU, 1 órajeles végrehajtás) átnevezés NÉLKÜL, illetve átnevezéssel?",
                options: [],
                correctAnswers: ["Átnevezéssel a kód: i1: U9 <- MEM[U0+0], i2: U10 <- U9 * U0, i3: MEM[U10+0] <- U9, i4: U11 <- U0 * U3. \nVégrehajtás átnevezés nélkül: 4 órajel. Átnevezéssel: 3 órajel."],
                explanation: "Átnevezés nélkül: az `i4` utasítás felülírná `R2`-t, de az `i3` még olvassa azt (WAR hazard). Ezért az `i4`-nek meg kell várnia az `i3`-at, ami miatt tisztán szekvenciálissá válik a lánc (1. i1, 2. i2, 3. i3, 4. i4) -> 4 ciklus.\nÁtnevezéssel: A WAR hazard megszűnik. Az `i4'` utasítás függetlenné válik (`U11 <- U0 * U3`), így az rögtön az első órajelben lefuthat az `i1'`-gyel együtt! (1. órajel: i1', i4', 2. órajel: i2', 3. órajel: i3') -> 3 ciklus."
            },
            {
                type: "free-text",
                question: "Egy 2 bites saturating counter állapotgépet (00: erősen nem, 01: gyengén nem, 10: gyengén igen, 11: erősen igen) használunk.\nAdott PHT[1]=01, PHT[5]=10.\nMi történik a becsléssel és az állapotokkal a következő futás során: 817(T), 845(T), 817(T), 817(N), 845(N)?\n(A zárójelben a T: elágazott, N: nem ágazott el. Indexek: 817->1, 845->5)",
                options: [],
                correctAnswers: ["817(T): becslés Hibás (01->N), új állapot 10. | 845(T): becslés Jó (10->T), új állapot 11. | 817(T): becslés Jó (10->T), új állapot 11. | 817(N): becslés Hibás (11->T), új állapot 10. | 845(N): becslés Hibás (11->T), új állapot 10."],
                explanation: "A 2 bites számláló logikája: ha az elágazás megtörténik (T), az érték nő (max 11). Ha nem történik meg (N), csökken (min 00). A becslés akkor 'igen' (Ugorj), ha a felső bit 1 (tehát 10 vagy 11). \n- 1. lépés (817, T): PHT[1] 01 volt. A predikció 0 (nem ugrik), de ugrott. A becslés HIBÁS. Új állapot: 01+1 = 10.\n- 2. lépés (845, T): PHT[5] 10 volt. A predikció 1 (ugrik), és ugrott. A becslés JÓ. Új állapot: 10+1 = 11.\n- 3. lépés (817, T): PHT[1] most 10. Predikció: ugrik, ugrott -> JÓ. Új állapot: 11.\n- 4. lépés (817, N): PHT[1] most 11. Pred: ugrik, nem ugrott -> HIBÁS. Új állapot: 10.\n- 5. lépés (845, N): PHT[5] most 11. Pred: ugrik, nem ugrott -> HIBÁS. Új állapot: 10."
            }
        ]
    },
    "elovizsga_b3": {
        title: "Elővizsga B 3",
        questions: [
            {
                type: "multiple-choice",
                question: "Mely tevékenységeket végzi a fordítóprogram/programozó a dinamikus VLIW architektúrában?",
                options: [
                    "Független utasítások összeválogatása",
                    "Egymásrahatások detektálása és kezelése",
                    "Utasítások műveleti egységhez rendelése",
                    "Az utasítások végrehajtása"
                ],
                correctAnswers: [
                    "Független utasítások összeválogatása",
                    "Egymásrahatások detektálása és kezelése",
                    "Utasítások műveleti egységhez rendelése"
                ],
                explanation: "A VLIW (Very Long Instruction Word) rendszerekben a hardver (a végrehajtó) a lehető legegyszerűbb, és a szoftveres fordító végzi el a 'nehéz munkát': ő elemzi az egymásrahatásokat (hazardokat), ő válogatja ki a független utasításokat, és ő rendeli hozzájuk a specifikus végrehajtó egységeket (slotokat). A hardver már csak 'nyersen' végrehajt."
            },
            {
                type: "multiple-choice",
                question: "Hogyan hasznosítja az agree prediktor a globális és lokális információkat az elágazásbecslés során?",
                options: [
                    "A globális előzmény regisztert és az utasításszámlálót XOR-olja",
                    "Egy tisztán lokális és egy globális, korrelált becslő eredményét NXOR-olja",
                    "A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül",
                    "Az agree prediktor nem vegyít globális és lokális információkat"
                ],
                correctAnswers: ["Egy tisztán lokális és egy globális, korrelált becslő eredményét NXOR-olja"],
                explanation: "Az agree (megegyezéses) prediktor egy bias-t (helyi hajlandóság) és egy mintázatot (globális) viszonyít egymáshoz. Általában megnézi, hogy a globális predikció megegyezik-e (NXOR) a lokális alappredikcióval (bias). (A XOR-os válasz a gshare, a választós a tournament)."
            },
            {
                type: "multiple-choice",
                question: "Az alábbiak közül melyek a RISC utasításkészletek jellemzői?",
                options: [
                    "Változó hosszúságú utasításkódolás",
                    "Regiszter-memória műveletek",
                    "Kevés címzési mód",
                    "Nagy számú regiszter"
                ],
                correctAnswers: ["Kevés címzési mód", "Nagy számú regiszter"],
                explanation: "A RISC (Reduced Instruction Set Computer) jellemzői: fix hosszúságú utasítások, sok regiszter (hogy kevesebbet kelljen a memóriához fordulni), load/store architektúra (csak a load és store éri el a memóriát, a számítások regiszter-regiszter között folynak), és nagyon kevés, egyszerű címzési mód."
            },
            {
                type: "multiple-choice",
                question: "Egy sorrendvisszaállító bufferrel (ROB) rendelkező out-of-order processzorban az utasításvégrehajtás alábbi fázisai közül melyek történnek a program szerint megadott (in-order) sorrendben?",
                options: [
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)",
                    "Utasítások végrehajtása (Execute)",
                    "Utasítások lehívása (Fetch)",
                    "Utasítások elhelyezése az utasítástárolóban"
                ],
                correctAnswers: [
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)",
                    "Utasítások lehívása (Fetch)",
                    "Utasítások elhelyezése az utasítástárolóban"
                ],
                explanation: "Az OoO gépekben csak a tényleges számítás/végrehajtás (Execute fázis) történik sorrenden kívül (amint megvannak a bemenetek). Az utasítások betöltése, dekódolása, és a ROB-ba vagy az Instruction Queue-ba (utasítástárolóba) való elhelyezés szigorúan a kód sorrendjében (in-order) halad, akárcsak az utasítások véglegesítése (commit)."
            },
            {
                type: "multiple-choice",
                question: "Az alábbi helyzetek milyen adat-egymásrahatásnak (hazardnak) felelnek meg?",
                options: [
                    "Két utasítás ugyanabba a regiszterbe írja az eredményét -> WAW",
                    "Két utasítás ugyanazt a regisztert olvassa -> WAR",
                    "Egy utasítás felhasználja egy korábbi utasítás eredményét -> RAW",
                    "A program egy elágazáshoz érkezik -> RAW"
                ],
                correctAnswers: [
                    "Két utasítás ugyanabba a regiszterbe írja az eredményét -> WAW",
                    "Egy utasítás felhasználja egy korábbi utasítás eredményét -> RAW"
                ],
                explanation: "Ugyanabba a célba írás: WAW (Write After Write). Korábbi eredmény felolvasása: RAW (Read After Write - igazi adatfüggőség). Két utasítás általi sima olvasás nem okoz hazardot. A WAR (Write After Read) az, amikor egy utasítás felülírna valamit, amit egy korábbi utasítás még nem olvasott ki."
            },
            {
                type: "free-text",
                question: "Állapítsa meg, hogy egy ugró utasítás KIMENETELÉNEK (ugrik/nem ugrik) becsléséhez a következő adatszerkezetek közül melyek használhatók!\n(Szemelési hajlam tábla, Ugrási előzmény regiszter - BHR, Ugrási hajlandóság tábla - PHT)",
                options: [],
                correctAnswers: ["Ugrási előzmény regiszter (BHR), Ugrási hajlandóság tábla (PHT)"],
                explanation: "Az ugrás irányának (kimenetelének) becslésére a BHR (Branch History Register) és a PHT (Pattern History Table) való. A célcím (hova ugrik) becslésére a BTB (Branch Target Buffer) szolgál, a szubrutinból való visszatérésre pedig a RAS (Return Address Stack)."
            },
            {
                type: "free-text",
                question: "Soroljon fel 3 cache blokk csere stratégiát!",
                options: [],
                correctAnswers: ["LRU (Least Recently Used), LFU (Least Frequently Used), FIFO, Random (Véletlenszerű)"],
                explanation: "Ezek a klasszikus kilakoltatási (eviction/replacement) szabályok. LRU: legrégebben hivatkozottat dobja ki. LFU: a legritkábban hivatkozottat dobja ki. Random: véletlenszerűen választ blokkot."
            },
            {
                type: "free-text",
                question: "Adja meg, hogy egy 2 utas in-order szuperskalár processzorban melyik egységből hány található minimum!\n- Vezérlő (dekóder) egységek száma:\n- Aritmetikai/logikai egységek száma:\n- Adat cache-ek száma:",
                options: [],
                correctAnswers: ["Dekóder: 2, ALU: 2, Adat cache: 1"],
                explanation: "A 2 utas szuperskalár azt jelenti, hogy ciklusonként 2 utasítást tud lehívni és dekódolni (kell 2 dekóder) és párhuzamosan végrehajtani (kell legalább 2 ALU). A memóriarendszer (adat cache) viszont tipikusan közös (1 db), de támogatnia kell a több portos hozzáférést."
            },
            {
                type: "free-text",
                question: "Amdahl törvénye szerint mennyivel gyorsabban fut egy program egy 10 processzorból álló rendszerben, mint egy 1 processzoros rendszerben, ha a program harmada csak szekvenciálisan futtatható?",
                options: [],
                correctAnswers: ["2.5"],
                explanation: "Speedup = 1 / (S + P/N). Ahol S = 1/3, P = 2/3, N = 10. -> 1 / (1/3 + 2/30) = 1 / (12/30) = 30/12 = 2.5."
            },
            {
                type: "free-text",
                question: "Van egy 512 bájt összkapacitású adat cache, 64 bájtos blokkmérettel és 4-utas asszociatív szervezéssel. Hivatkozott BLOKKSZÁMOK: 21, 48, 17, 196. \nAdja meg a fenti blokkszámokhoz tartozó tag és index mezőket!",
                options: [],
                correctAnswers: ["21: Idx=1 Tag=10, 48: Idx=0 Tag=24, 17: Idx=1 Tag=8, 196: Idx=0 Tag=98"],
                explanation: "A cache kapacitása 512 bájt. Blokkméret 64 bájt -> 512 / 64 = 8 blokk a cache-ben. 4 utas asszociatív -> 8/4 = 2 halmaz (Set 0 és Set 1). Mivel már eleve blokkszámokat kaptunk (nem bájt címeket!), az index = Blokkszám mod 2. A tag = Blokkszám / 2 (lefelé kerekítve).\n- 21: mod 2 = 1, /2 = 10\n- 48: mod 2 = 0, /2 = 24\n- 17: mod 2 = 1, /2 = 8\n- 196: mod 2 = 0, /2 = 98"
            },
            {
                type: "free-text",
                question: "Szüntesse meg a WAW és WAR adat-egymásrahatásokat regiszter átnevezés segítségével az alábbi kódon (Kezdetben R0=U4, R1=U7, R2=U3, R3=U12):\ni1: R1 <- MEM[R0+0]\ni2: MEM[R1+0] <- R3\ni3: R3 <- R0 + 4\ni4: R1 <- MEM[R3+0]",
                options: [],
                correctAnswers: ["i1: U13 <- MEM[U4+0], i2: MEM[U13+0] <- U12, i3: U14 <- U4 + 4, i4: U15 <- MEM[U14+0]"],
                explanation: "Fizikai regiszterek kiosztása (U13-tól):\n- `i1`: R1 új értéket kap (U13). Cím R0 (U4).\n- `i2`: Store memóriába (nincs regiszter átnevezés bal oldalon, csak olvasás!). Olvasott cím: R1 (U13). Olvasott adat: R3 (U12).\n- `i3`: R3 új értéket kap (U14). Operandus R0 (U4).\n- `i4`: R1 új értéket kap (U15). Cím R3 (U14)."
            }
        ]
    },
    "elovizsga_a2": {
        title: "Elővizsga A 2",
        questions: [
            {
                type: "multiple-choice",
                question: "Mely tevékenységeket végzi a fordítóprogram/programozó az EPIC architektúrában?",
                options: [
                    "Független utasítások összeválogatása",
                    "Egymásrahatások detektálása és kezelése",
                    "Utasítások műveleti egységhez rendelése",
                    "Az utasítások végrehajtása"
                ],
                correctAnswers: [
                    "Független utasítások összeválogatása",
                    "Egymásrahatások detektálása és kezelése"
                ],
                explanation: "Az EPIC (Explicitly Parallel Instruction Computing) architektúrában (pl. Intel Itanium) a szoftver/fordító felelős a hazardok detektálásáért és a független utasítások csomagokba (bundle) szervezéséért. Viszont ellentétben a szigorú VLIW-vel, a műveleti egységekhez való PONTOS hozzárendelést már a hardver végezheti futásidőben."
            },
            {
                type: "multiple-choice",
                question: "Az alábbiak közül melyek a RISC utasításkészletek jellemzői?",
                options: [
                    "Nagy számú regiszter",
                    "Regiszter-memória műveletek",
                    "Kevés címzési mód",
                    "Változó hosszúságú utasításkódolás"
                ],
                correctAnswers: ["Nagy számú regiszter", "Kevés címzési mód"],
                explanation: "A RISC (Reduced Instruction Set Computer) jellemzői a sok általános célú regiszter és az egyszerű, kevés számú címzési mód. A változó hosszúságú utasítások és a közvetlen memória-regiszter ALU műveletek a CISC gépek sajátjai (RISC-ben Load/Store architektúra van)."
            },
            {
                type: "multiple-choice",
                question: "Hogyan hasznosítja egy globális és lokális becslőre építő TOURNAMENT (bajnokság) prediktor a két becslő eredményét az elágazásbecslés során?",
                options: [
                    "A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül",
                    "A globális előzmény regisztert és az utasításszámlálót XOR-olja",
                    "A tournament prediktor nem képes két különböző becslővel dolgozni",
                    "A tisztán lokális és egy tisztán globális becslő eredményét NXOR-olja"
                ],
                correctAnswers: ["A globális és a lokális becslő közül annak hisz, amelyik az utóbbi időben pontosabban becsül"],
                explanation: "A tournament (versengő) prediktorok lényege, hogy egy meta-prediktor (választó) nyomon követi mindkét alap-prediktor (lokális és globális) sikerességét, és mindig az aktuális elágazáshoz a történeti adatok alapján megbízhatóbbnak bizonyuló prediktornak hisz."
            },
            {
                type: "multiple-choice",
                question: "Egy sorrendvisszaállító bufferrel (ROB) rendelkező out-of-order processzorban az utasításvégrehajtás alábbi fázisai közül melyek történnek a program szerint megadott (in-order) sorrendben?",
                options: [
                    "Utasítások lehívása (Fetch)",
                    "Utasítások elhelyezése az utasítástárolóban",
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)",
                    "Utasítások végrehajtása (Execute)"
                ],
                correctAnswers: [
                    "Utasítások lehívása (Fetch)",
                    "Utasítások elhelyezése az utasítástárolóban",
                    "Utasítások bejegyzése a sorrendvisszaállító bufferbe (Issue/Dispatch)"
                ],
                explanation: "Az utasítások memóriából történő kiolvasása és dekódolása, majd várakozó sorokba (Instruction Queue) és a ROB-ba való behelyezése szigorúan sorrendi. A sorrenden kívüliség az utasítások ALU-kon való végrehajtásánál (Execute) történik meg."
            },
            {
                type: "multiple-choice",
                question: "Jelölje, hogy a tanult 5 fokozatú utasítás pipeline egyes fázisaiban (IF, ID, EX, MEM, WB) a következő kivételek melyik fázisban detektálhatók először!",
                options: [
                    "Laphiba (Page fault) -> IF fázis",
                    "Érvénytelen utasítás (Invalid opcode) -> ID fázis",
                    "Védelmi hiba (Protection fault) -> IF fázis",
                    "Aritmetikai hiba (Overflow, Divide by zero) -> EX fázis"
                ],
                correctAnswers: [
                    "Laphiba (Page fault) -> IF fázis",
                    "Érvénytelen utasítás (Invalid opcode) -> ID fázis",
                    "Védelmi hiba (Protection fault) -> IF fázis",
                    "Aritmetikai hiba (Overflow, Divide by zero) -> EX fázis"
                ],
                explanation: "A laphiba és a memóriavédelmi hiba már az utasítás kódjának memóriából való beolvasásakor (IF) kiderülhet (bár adat esetén a MEM-ben is). Az érvénytelen (ismeretlen) utasításkódot a dekódoló (ID) ismeri fel. A nullával osztás vagy túlcsordulás az ALU számításakor (EX) jelentkezik."
            },
            {
                type: "free-text",
                question: "Állapítsa meg, hogy egy ugró utasítás KIMENETELÉNEK (ugrik/nem ugrik) becsléséhez az alábbi adatszerkezetek közül melyek használhatók!\n(Szemelési hajlam tábla, Ugrási előzmény regiszter - BHR, Ugrási hajlandóság tábla - PHT)",
                options: [],
                correctAnswers: ["Ugrási előzmény regiszter (BHR), Ugrási hajlandóság tábla (PHT)"],
                explanation: "Az ugrás bekövetkezésének esélyét ezen két táblával lehet statisztikailag jósolni. A BHR az elmúlt néhány ugrás tényét rögzíti, a PHT pedig a saturating countereket (állapotgépeket) tárolja."
            },
            {
                type: "free-text",
                question: "Soroljon fel kettőt a tanult lokalitási elvek közül!",
                options: [],
                correctAnswers: ["Térbeli lokalitás (Spatial locality)", "Időbeli lokalitás (Temporal locality)"],
                explanation: "Térbeli lokalitás: Ha hivatkozunk egy memóriacímre, valószínűleg a közeljövőben a szomszédos címekre is fogunk. Időbeli lokalitás: Ha hivatkozunk egy adatra, valószínűleg hamarosan újra fogunk rá hivatkozni."
            },
            {
                type: "free-text",
                question: "Adja meg, hogy egy 3 utas in-order szuperskalár processzorban melyik egységből hány található minimum!\n- Aritmetikai/logikai egységek száma:\n- Utasításszámlálók (PC) száma:\n- Adat cache-ek száma:",
                options: [],
                correctAnswers: ["ALU: 3, PC: 1, Adat cache: 1"],
                explanation: "A 3 utas szuperskalár képes ciklusonként 3 műveletet kiadni és kiszámolni, tehát minimum 3 ALU kell. Azonban az utasítások lehívása egyetlen (közös) szálból történik (egyszerre hoz le egy 3 utasításos blokkot), tehát csak 1 utasításszámlálóra (PC) és 1 közös Adat Cache-re van szükség (ami több portos)."
            },
            {
                type: "free-text",
                question: "Amdahl törvénye szerint mennyivel gyorsabban fut egy program egy 8 processzorból álló rendszerben, mint egy 1 processzoros rendszerben, ha a program harmada csak szekvenciálisan futtatható?",
                options: [],
                correctAnswers: ["2.4"],
                explanation: "Gyorsulás (Speedup) = 1 / ((1 - P) + P/N). Ahol szekvenciális (1 - P) = 1/3, párhuzamos P = 2/3, N = 8.\n1 / (1/3 + 2/24) = 1 / (8/24 + 2/24) = 1 / (10/24) = 2.4."
            },
            {
                type: "free-text",
                question: "Van egy 512 bájt összkapacitású adat cache, 64 bájtos blokkmérettel és 4-utas asszociatív szervezéssel. Hivatkozott BLOKKSZÁMOK: 195, 38, 19, 56. \nAdja meg a fenti blokkszámokhoz tartozó tag és index mezőket!",
                options: [],
                correctAnswers: ["195: Idx=1 Tag=97, 38: Idx=0 Tag=19, 19: Idx=1 Tag=9, 56: Idx=0 Tag=28"],
                explanation: "Kapacitás: 512 bájt. Blokk: 64 bájt. Összes blokk = 512 / 64 = 8 blokk. 4 utas asszociativitás miatt 8 / 4 = 2 halmaz (Set 0, Set 1) van a cache-ben. \nIndex = Blokkszám mod 2. Tag = Blokkszám / 2 (lefelé kerekítve).\n- 195: mod 2 = 1, /2 = 97\n- 38: mod 2 = 0, /2 = 19\n- 19: mod 2 = 1, /2 = 9\n- 56: mod 2 = 0, /2 = 28"
            },
            {
                type: "free-text",
                question: "Szüntesse meg a WAW és WAR adat-egymásrahatásokat regiszter átnevezéssel az alábbi kódon (Kezdetben R0=U0, R1=U8, R2=U5, R3=U3):\ni1: R1 <- MEM[R0+0]\ni2: R2 <- R1 * R0\ni3: MEM[R2+0] <- R1\ni4: R2 <- R0 * R3",
                options: [],
                correctAnswers: ["i1: U9 <- MEM[U0+0], i2: U10 <- U9 * U0, i3: MEM[U10+0] <- U9, i4: U11 <- U0 * U3"],
                explanation: "Minden olyan célregiszterhez, amelybe új adat íródik, kiosztunk egy új fizikai regisztert (U9-től indulva).\n- `i1`: R1 új regisztert kap (U9). Operandus: R0 (U0).\n- `i2`: R2 új regisztert kap (U10). Operandusok: R1 (U9), R0 (U0).\n- `i3`: Store utasítás (bal oldalán a memória címe van!). Címet olvassa: R2 (U10). Adatot olvassa: R1 (U9).\n- `i4`: R2 új regisztert kap (U11). Operandusok: R0 (U0), R3 (U3)."
            }
        ]
    }
};
