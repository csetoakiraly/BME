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
    }
};
