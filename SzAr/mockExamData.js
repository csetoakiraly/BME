window.mockExamData = [
    {
        "id": 1,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A \"Daisy chain-re alapozott arbitráció\" centralizált eljárás?",
                "answer": "IGAZ",
                "explanation": "A Daisy chain (láncbafűzött) arbitráció egy centralizált buszhozzáférési mód. Egy központi arbiter kapja a kéréseket, aki a buszhasználati jogot (BUSGRANT) egyetlen láncon indítja el a perifériák felé, ahol az egyes eszközök eldönthetik, hogy visszatartják-e azt maguknak vagy továbbadják."
            },
            {
                "text": "A \"Párhuzamos arbitráció\" centralizált eljárás?",
                "answer": "IGAZ",
                "explanation": "Igen. Minden eszköz (master) külön kérés (REQ) és engedélyező (GNT) vonallal rendelkezik, amelyek mind egyetlen, központi döntőbíró (arbiter) egységbe futnak be. Az arbiter mérlegeli a bejövő kérőjeleket és valamelyik masternek odaadja a vonalat."
            },
            {
                "text": "A centralizált arbitráció előnye a nagy hibatűrés.",
                "answer": "HAMIS",
                "explanation": "Épp ellenkezőleg. A centralizált arbitrációnak egy közös, központi erőforrása van (az arbiter egység), ami ha meghibásodik, a teljes buszrendszer leáll (Single Point of Failure). Nagy hibatűrése az elosztott arbitrációnak van."
            },
            {
                "text": "A centralizált arbitráció előnye, hogy olcsóbb, mivel csak egy központi arbiteregység szükséges.",
                "answer": "IGAZ",
                "explanation": "Valóban, mivel az elfogadás és a prioritás döntéseinek komplex logikája egyetlen kis lapkán/modulon (az arbiterben) van megvalósítva, a végponti (kliens) perifériák elektronikája nagyon egyszerű és olcsó lehet."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 2,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A centralizált arbitráció során a perifériák egyetlen központi vezérlőhöz csatlakoznak.",
                "answer": "IGAZ",
                "explanation": "Ez pontosan az eljárás definíciója. Létezik még elosztott arbitráció, ahol minden eszköz látja a buszon jelentkező igényeket, és egy megosztott algoritmus szerint saját maguk döntenek a kiengedésről."
            },
            {
                "text": "A Daisy chain alapú interrupt kezelés nem működik, ha egyidejűleg több eszköz is jelez interruptot.",
                "answer": "HAMIS",
                "explanation": "Működik, sőt épp a konfliktus feloldására lett kitalálva. Az arbiter (vagy processzor) INTA nyugtázó jelet küld, ami a lánc mentén halad. Minél közelebb van logikailag a periféria a CPU-hoz, annál magasabb a prioritása: a hozzáférést igénylő periféria egyszerűen megfogja s nem engedi tovább a vett jelet a láncon, így lekezelve a kollíziót."
            },
            {
                "text": "A Daisy chain alapú interrupt kezelés tetszőlegesen bővíthető.",
                "answer": "IGAZ",
                "explanation": "Ennek topológiás oka van: amennyiben új eszközt szeretnénk használni, csak „befűzzük” a láncba. Nem igényel dedikált kiépített vezetékpárt minden egyes új eszköznek az arbiterből (mint ahogy például a párhuzamos arbitrációnál lenne), hanem csak az előző és következő eszközzel van huzalozva."
            },
            {
                "text": "A Daisy chain alapú interrupt kezelésnél körbenforgó interrupt kiszolgálás megvalósítható.",
                "answer": "HAMIS",
                "explanation": "Nem lehet körbenforgó (round-robin/fair) stratégiát megvalósítani. A daisy chain-ben a fizikai bekötési sorrend feltartóztathatatlanul rögzíti a prioritásokat. Az a periféria kapja meg a jogot, aki közelebb van forrásponthoz, így egy leterhelő, magas prioritású első eszköz egyértelműen kiszoríthatná a lánc végi eszközöket a hozzáférésből."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 3,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A DMA vezérlő alkalmazása csökkenti a CPU terhelését.",
                "answer": "IGAZ",
                "explanation": "A DMA (Direct Memory Access) pontosan erre való! Amikor a periféria a hálózaton keresztül nagy méretű adatblokkot küld, a CPU utasításonkénti végighajtása nagyon lassú volna. Helyette a CPU csak felprogramozza a hardveres DMA vezérlőt (ez az ide, eddig az hosszan mettől hova elvetve), mely aztán a processzor beavatkozása nélkül végzi el a másolást a háttértár és memória között, csak a végen jelezve azt egy megszakítással (interrupt)."
            },
            {
                "text": "A DMA vezérlő célja a processzor tehermentesítése az I/O műveletek során.",
                "answer": "IGAZ",
                "explanation": "Igen, a DMA végzi az adatmozgatást a periféria és a memória között közvetlenül, így a processzor amíg ő ezt csinálja, foglalkozhat más programok, kódok futtatásával ameddig nincs szüksége magára az adatra."
            },
            {
                "text": "A DMA vezérlő minden bájt sikeres átvitelét interrupttal jelzi a processzornak.",
                "answer": "HAMIS",
                "explanation": "Ha így tenne, elvészne a technológia minden haszna! DMA esetében az adatblokk (vagy az előre meghatározott méretű chunk) utolsó bájtjának sikeres átvitele után történik az értesítés egyetlen megszakítással."
            },
            {
                "text": "A DMA vezérlő saját utasításkészlettel rendelkezik.",
                "answer": "HAMIS",
                "explanation": "Az I/O processzorra jellemző (mint pl a fejlett mainframe-ekben), hogy önálló programokat vagy utasításkészletet használ, a klasszikus PC architektúra DMA vezérlője csak állapot és cím-regiszterekkel rendelkezik."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 4,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A DMA vezérlő vagy az I/O processzor célja a buszért zajló verseny eldöntése.",
                "answer": "HAMIS",
                "explanation": "A buszért folyó verseny eldöntése (hogy melyik egység kaphatja azt meg) a buszvezérlő (Arbiter) feladata, nem a DMA-é. A DMA vezérlő csupán egy Masterként lép fel a buszon a rengeteg eszköz között."
            },
            {
                "text": "A DMA vezérlőt a periféria programozza fel.",
                "answer": "HAMIS",
                "explanation": "A DMA vezérlőt a processzor (CPU) - pontosabban az operációs rendszer által vezérelt device driver (eszközmeghajtó) – programozza fel, az ott futó szál mondja meg mekkora blokkot akarunk másolni és pontosan hová."
            },
            {
                "text": "A PCI Express centralizált arbitrációt használ.",
                "answer": "HAMIS",
                "explanation": "Sem önválasztó, sem parallel arbitrációt nem használ a PCI Express. Mivel pont-pont (P2P) soros jelzésű topológiát használ switcheken keresztül, nincsen többé egy fizikai vezetéken folyó versengés sem a masterek, sem a szálak között."
            },
            {
                "text": "A PCI Express fizikai rétegének feladata a bitek összekeverése (scrambling).",
                "answer": "IGAZ",
                "explanation": "Ez elengedhetetlen, mert az 1 bites és gyors PCIe soros vonalakon garantálni kell a jelszintek kellően folyamatos változását, az '0 a 0-ba olvadások' elkerülését. Ezt a bitek determinált keverésével (scrambling) illetve pl 8b/10b, 128b/130b jelszint bevonásával adja hozzá a fizikai réteg, amiből a fogadó visszanyerni is ezen a szinten fogja a tényleges üzenetet."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 5,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A PCI Express perifériák képesek interruptot kiváltani.",
                "answer": "IGAZ",
                "explanation": "Igen. A különbség az elavult architektúrákhoz képest csupán  az, hogy ehhez nem dedikált 'megszakítási rézhuzalra' adnak ki statikus feszültséget, hanem az MSI (Message Signaled Interrupts) nevű metódussal küldenek speciális célzottságú logikai csomagokat (Write tranzakció) a megszakításvezérlőnek (Root complex). "
            },
            {
                "text": "A PCI Express perifériák képesek közvetlenül a memóriába adatot írni.",
                "answer": "IGAZ",
                "explanation": "A modern PCI / PCIe eszközök DMA kepések (Bus Mastering), és egy 'Memory Write' (szintén TLP adatcsomagba becsomagolt) tranzakció kiadásával a processzort tehermentesítve írnak be adatösszleteket a DRAM-ba."
            },
            {
                "text": "A PCI Express perifériakezelő utasításokkal nem rendelkező rendszerekben nem megvalósítható.",
                "answer": "HAMIS",
                "explanation": "Példaként vehetjük a RISC rendszereket (pl. ARM). Ezek sokszor nem kapnak külön 'in' vagy 'out' I/O assembly hívásokat. Erre a Memory Mapped-I/O (Memóriára leképzett területen átmenő) trükk a válasz a PCI eszközöknek, így RISC és ARM alaplapon is bátran épithető számukra infrastruktúra. "
            },
            {
                "text": "A PCI Express tranzakciós rétegének feladata a parancs és az adatok csomagba szervezése.",
                "answer": "IGAZ",
                "explanation": "A topológiában fentről lefele építkeze a szoftver felőli 'Transaction Layer' a kérés fejlécével, a CRC hashsel, parancsaltábláal együtt képez valójában (TLP) csomagokat amiket aztán leküld az Adatkapcsolati s végül a Fizikai (bitszintű) rétegekbe bontásra s küldésre."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 6,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "A pendrive dominánsan a Bulk adatátviteli módot használja az USB kommunikáció során.",
                "answer": "IGAZ",
                "explanation": "Biztonsági mentéseknél, file másolásnál (ami a Pendrive célja is) nem garantálnak rövid késleltetést mint mondjuk a webkameráknál, de garantálja az USB 'Bulk' módja az 100%-os redundanciaellenőzést s újrakérést CRC hiba esten, mert fájl-integritás nem romolhat, ellentétben egy audio streaming hibával."
            },
            {
                "text": "Az alábbiak közül mely arbitrációs eljárások elosztottak: Daisy chain-re alapozott arbitráció?",
                "answer": "HAMIS",
                "explanation": "A Daisy chain centralizált arbitráció. Az engedélykéréseket végül mindig a fő arbiter egység (rendszervezérlő) fogadja be, csupán a kiadott jóváhagyó (GRANT) jel adódik eszközről eszközre a láncban."
            },
            {
                "text": "Az alábbiak közül mely arbitrációs eljárások elosztottak: Önkiválasztó arbitráció?",
                "answer": "IGAZ",
                "explanation": "Ez bizony elosztott: az I/O buszon minden eszköz a saját vonalán jelzi, ha kommunikálni akar. A többi eszköz látja a bejövő kéréseket, és az egyes egyedi eszközökben futó algoritmus saját maga eldönti - önkiválasztóan -, hogy van-e nála magasabb prioritású eszköz ami épp használná a buszt, és visszalép."
            },
            {
                "text": "Az alábbiak közül mely arbitrációs eljárások elosztottak: Párhuzamos arbitráció?",
                "answer": "HAMIS",
                "explanation": "A Párhuzamos (Parallel) arbitrációnál is minden eszközből befut egy csatorna... csakhogy nem a többi eszközbe (biztosítva az elosztottságot), hanem egy KÖZPONTI Bus Arbiter vezérlőhöz, azaz centralizált."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 7,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Az alábbiak közül mely arbitrációs eljárások elosztottak: Ütközés-detektálásra alapozott arbitráció?",
                "answer": "IGAZ",
                "explanation": "Abszolút elosztott. Mindenki (azaz minden eszköz) belebeszélhet a CSMA/CD típusú (pl klasszik ethernet) vonalakba, s ha ütközést észlel (mint a vonal feszültség ugrása) akkor önállóan mindegyik elhallgat egy random időre, majd újra próbálkoznak, központi irányítás nélkül."
            },
            {
                "text": "Az egér dominánsan az Interrupt adatátviteli módot használja az USB buszon.",
                "answer": "IGAZ",
                "explanation": "Az egér (és a billentyűzet is) alacsony, de garantált válaszidős sávszélességet igényel. Mivel USB gépnél az I/O eszköz NEM SUGHAT félbe a vezérlőnek, ez az 'Interrupt hivatkozási' mód azt jelenti, a PC időről-időre gyakran kikérdezi a perifériát, hogy van-e mondanivalója."
            },
            {
                "text": "Az elosztott arbitráció előnye a nagyobb hibatűrési lehetőség.",
                "answer": "IGAZ",
                "explanation": "Nincs benne SPM (Singel Point of Failure). Míg a centralizált vezérlőnél, ha a gazda vezérlőic-hez tönkremegy a kapu, a gép teljesen meghal. Az elosztottnál csak a megdöglött kártyát veti ki a kommunikációs gyűrű/önkiválasztó logika, a többiek beszélni tudónak."
            },
            {
                "text": "Az elosztott arbitráció esetén minden periféria rendelkezik saját arbiterrel.",
                "answer": "IGAZ",
                "explanation": "Ugyanezen az elven: ahhoz, hogy elosztottan, önállóan eldönthesse, hátralép-e egy magasabb rangú kommunikáció kedvéért, hardveresen implementálni kell egy mini-arbitert rajta (ami okosabb is drágábbá teszi)."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 8,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Az I/O processzor célja a processzor tehermentesítése az I/O műveletek során.",
                "answer": "IGAZ",
                "explanation": "Mint egy szteroidokon lévő, mini CPU (klasszikus mainframe vonalon channel processor), arra van hogy a bonyolult eszközfügö I/O dolgokat teljen átvezérelje (olvasson adatokra, reagáljon hibaüzenetekre), így a Main CPU vígan tud dolgozni az adatokon."
            },
            {
                "text": "Az USB \"interrupt\" adatátviteli mód garantálja a hibamentességet?",
                "answer": "IGAZ",
                "explanation": "Meglepő módon igen. Ellentétben mondjuk az Isochronous móddal, a periodikus Interrupt mód minden keretében a hardveres réteg (USB Host) megbizonyosodik az ellenőrzőösszegről és hibába botolva a következő ablakban automatikusan újráz."
            },
            {
                "text": "Az USB \"interrupt\" adatátvitelnek csak kimeneti irányultsága lehet.",
                "answer": "HAMIS",
                "explanation": "Ez kétirányú tranzakciókra képes. A leggyakoribb felállás épp a bemeneti irányú Interrupt! A számítógép ezzel felügyeli (pollingozza ritmusosan) a billentyűzetünk és egerünk inputját, nehogy lemaradjon annak lenyomásáról (interrupt generálás)."
            },
            {
                "text": "Az USB \"interrupt\" adatok minden keretben garantáltan helyet kapnak a keret méretének 10%-áig.",
                "answer": "HAMIS",
                "explanation": "Fordítva van a leosztás. Az USB protokoll a periodikus műveleteknek (Interrupt és Isochronous) képes egy mikrokeret (125us USB2.0 esetén) akár 90%-át is kiutalni (így garantálva azok fix időkiosztását), s a maradék 10%-on zsúfolódik be a féléves késéssel kért, de masszív adatmozgatást végző 'Bulk' másolás."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 9,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Az USB \"interrupt\" adatok minden keretben garantáltan helyet kapnak a keret méretének 90%-áig.",
                "answer": "IGAZ",
                "explanation": "Pontosan ez jelenti a periodikus átvitel lényegét (ami a kamera-streateké is): fix előre egyeztetett és a szabvány által garantált sávszélességet foglalnak le minden mikrokereten belül (max 90%-ig), hogy ne süllyedjenek el a másolási zajban (mint a Control és Bulk módú periferiák)."
            },
            {
                "text": "Az USB 2.0-ban a nem root hubok kezdeményezhetnek kommunikációt.",
                "answer": "HAMIS",
                "explanation": "Sosem! Sem egy nyomorult pendrive, sem a monitorba épített 4 portos elosztó HUB nem 'szólhat bele' csak úgy a vonalba az arbitráció hiánya miatt! Mindig, mindent kizárólag a gép bádogjába forrasztott központi CPU chip (Root Controller) pollingolása indít mint token (tehát csak engedélyre válaszolnak)."
            },
            {
                "text": "Az USB 2.0-ban a Root hub kezdeményezhet kommunikációt.",
                "answer": "IGAZ",
                "explanation": "Csak és kizárólag a Host controller (Root hub) az univerzálisan diktáló egyedüli 'Értelemmel s szabad akarattal' bíró Master eszköz e busz topológiájában! Bárki mást kiolvasni vagy kiírni akarunk, azt is a Controllernek kell lekordonozni és pollingozni."
            },
            {
                "text": "Az USB 3.1 sebességkategóriái közül a SuperSpeedPlus (SS+) a leggyorsabb.",
                "answer": "IGAZ",
                "explanation": "10 Gbps sebességgel (vételen s adáson egyidőben - 8b/10b logikát elhagyva, így extrém módon csökkentve a sávrezsit s overheadet) valóban az USB 3.1 hozta s a korszak leggyorsabb USB kódolása lett az eredeti 5 Gbps SS módot leverve."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 10,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Az USB sebességfokozatok közül a High Speed (HS) gyorsabb, mint a Full Speed (FS).",
                "answer": "IGAZ",
                "explanation": "A névjegyes káosz sokat elárul az asztali informatikáról. Ugyan a 'Full' szó (az eredeti 1.1-es 12 megabitet jelezte, hogy a kábel teljesen ki lett aknázva) jól hangzik, de az évtizeddel későbbi 2.0 technika rálépett és a 480 megabites sebességet már a 'High' elnevezéssel koronázták meg (amivel lekörözte a Fullt)."
            },
            {
                "text": "Bulk módú perifériákra példa a következő: szkenner, pendrive",
                "answer": "IGAZ",
                "explanation": "Igen! Késletteltése kiszámíthatalan, de a sávszélességet a végtelenségig dominálni képes mód, a sebessége hatalmas, s megbízhatósága a transzfer ellenőrzés révén garantált is, fájlmozgatásra optimális (pl USB merevlemez, printer, szkenner, pendrive) - míg a webcamerának megakadna tőle a képe a torlozs esetén!"
            },
            {
                "text": "DMA átvitel esetén több DMA vezérlő is lehet egy buszon.",
                "answer": "IGAZ",
                "explanation": "Ahogy egy pék is kezelhet 3 kiflit a sütőben. A busz mesterségéért folyamatos versengés fut (arbitráció). Gyakori hogy nem csak egy Mainboard-lapi központi DMA sín-mester tol át a hálózaton... De magukra a modern PCIe LAN és Hang-kártyákra IS külön beépítenek hardveres mini-DMA chipeket, hogy direkt versenyezzen a procival szemben írásért!"
            },
            {
                "text": "Egy PCI periféria kezdeményezhet adatátvitelt a CPU felé?",
                "answer": "HAMIS",
                "explanation": "Sosem a proceszornak dobjuk oda dühből a stringeket a dróton. A PCI hardver 'DMA masterként' közvetlen a rendszermemóriát írja (RAM) ha kéri a Busz-haszánlatot. Ezt leközölve csupán csak MSI 'Azonnali Figyelem' / 'Program megszakítás ! ITT NÉZD MEG a RAMOT!' üzenet bombát küthet le a regiszternek a proci CPU-t értesítve."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 11,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Egy PCI periféria kezdeményezhet adatátvitelt a memória felé?",
                "answer": "IGAZ",
                "explanation": "Így van, lsd Előző! Memory Read Memory Write TLP tranzakciókbál a dedikált PCI Express gép azonnal ír az Operatín Memóriába, vagyis bus-mester szerepben eljárva közvetlenül olvashat-kiment az alaplaphoz!"
            },
            {
                "text": "Egy PCI periféria kezdeményezhet adatátvitelt egy másik PCI Express periféria felé?",
                "answer": "IGAZ",
                "explanation": "Abszolút - a Switchen keresztül. Például a RAID hállózati kártyád rögzithet magán, és mindezt egy P2P (Peer To Peer) hardveres DMA tranzakciójában átdiszperzeli a videokártyánk RAM-jává mielőtt az megenné a CPU órajeleit. "
            },
            {
                "text": "Elzárhat-e egy meghibásodott periféria másokat a busztól elosztott arbitráció esetén?",
                "answer": "HAMIS",
                "explanation": "Elosztott arbitráció lényege (s a modern hálózatoka s PCI switchek lelke), hogyha az egyik port 'Beragad, Leforr, és Zombiként Tolja az igényeit' a Hardveres önálló ütemezők a Switch portjain leselejtezik, s a többi periféria gondtalanul tranzakciózák az oldalon... Eme elterjedt modell drasztikusam lecsökkentette a 'Befagy a Gép a pendrivere' Blue Screeneket ami pl. a Daisy lineáros Bus Grantnál 100%-os kiritokus lefagyásos hiba lehetett."
            },
            {
                "text": "Használ-e a PCI Express rejtett, párhuzamos arbitrációt?",
                "answer": "HAMIS",
                "explanation": "Szintén a PCI ezen felülkerekedett s elhagyta ezeket, mivel a PCIe egy teljesen pont-pont dedikált elvű drótpár hálózat! Emiatt NINCSEK sem rejtett, sem közösen megosztott busz-vonalak a gépeken ami miatt ne is lehetne egymásra 'rálépni', tehát bus-megosztós és sínas arbitrációra sincsen szükség!"
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 12,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: az interrupt vonalain keresztül képes valódi interruptot generálni?",
                "answer": "IGAZ",
                "explanation": "Igen, a klasszikus 'régi széles PCI csatlakozók' A, B, C, D extra fizikai vezetékeit fellehetett feszültségre húzni mellyel a CPU valós analóg interruptot észlelt!"
            },
            {
                "text": "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: egy speciális busz tranzakcióval képes interruptot generálni?",
                "answer": "IGAZ",
                "explanation": "A PCIe ezen álalánosan el is rugaszkodott, 'Message Signaled Interrupts' (MSI) tranzakciókkal operálnak, az I/O controllernek címzett apró memory/bus csomagokban adnak hírt az interrupt kérésről anélkül hogy 1 kábelt kéne dedikáltan kihúzniuk erre a célra a NYÁK-on."
            },
            {
                "text": "Hogyan jelezheti egy PCI periféria egy esemény bekövetkeztét a CPU számára: polling segítségével a futó program adatátviteli kérésekkel lekérdezheti a státuszát?",
                "answer": "IGAZ",
                "explanation": "Igen, a Memory-Mapped I/O technikánal a kártya beírja magának a válaszát az MMIO portra kinevezett regisztereibe. Ezek után az OS (CPU) mondhatja, hogy egy ciklusban fel-fel pillant nézi s olvassa 'beírtál valamit?, na es most? és most?'! Ez a POLLING megoldás rettenetesen eszegeti az CPU órajelet s sokat forog a gép üresben ha sosem volt esemény!"
            },
            {
                "text": "Igaz a PCI ablakokra: Az ablakok kezdőcímét a periféria be tudja állítani?",
                "answer": "HAMIS",
                "explanation": "Bár a Periféria áramkörei mondják meg egy maszk révén hogy MEKKORA ablakot / tárterületet szeretének, magát az Indulási Bázis Címet (Base Address Register - BAR) mindig a gazda Operációs Rendszer / BIOS írja be felülről induláskor a regiszterükbe!"
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 13,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Igaz a PCI ablakokra: Az ablakok kezdőcímét az operációs rendszer be tudja állítani?",
                "answer": "IGAZ",
                "explanation": "Pontosan az ezt megelőző állításból következik. Az OS Plug And Play managere 'sakkozza' és rendezi be ütközeésmentes lineáris térré a kártyák memóriacímjeit elinduláskor (resource allocation)."
            },
            {
                "text": "Igaz a PCI ablakokra: Vonatkozhatnak a memória címtartományra?",
                "answer": "IGAZ",
                "explanation": "Természetesen, ezt hívja az ipar 'Memória Leképezésnek' (Memory Mapped I/O). A proci ha ír az adott egy bites memória pointerbe, konkrétan nem RAM dobozt, hanem a bedugott Videókártyát írja és aktiválja."
            },
            {
                "text": "Igaz-e, hogy a daisy chain alapú interrupt kezelés elvben tetszőlegesen bővíthető?",
                "answer": "IGAZ",
                "explanation": "A lánc topológia elvtől fogva fizikailag bárhová, mindig csak meg kell szakítani a láncot és kábelt s az új srác feszültségét sorbakötni. Bár a jelzés terjedési 'kiterjesztett ideje' (és így a láncmegszakadás esélye) a lánc végén katasztrofálisan nő a bővítésekkel."
            },
            {
                "text": "Igaz-e, hogy a PCI Express perifériák képesek közvetlenül a memóriába adatot írni?",
                "answer": "IGAZ",
                "explanation": "Ezt nevezzük First-party DMA-nak / Bus Masteringnek. Műkődése a DMA egyik csúcsa: a hálózati s hangkártyánk a CPU kihagyásával írogat blokkokat és menti le a dolgokat a RAM memóriaterületére!"
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 14,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Perifériák és Buszrendszerek?",
        "statements": [
            {
                "text": "Igaz-e, hogy az elosztott arbitrációnak van olyan kritikus komponense, amelynek hibája a busz leállásához vezet?",
                "answer": "HAMIS",
                "explanation": "Nincs benne 'Single Point of Failure'. Ez az igazi ereje! Mivel az összes eszköz mini független arbiterrel dönt hálózat szinten, ha egy központi tákolmány mint a Vezérlő Hub hibás is lenne, az eloszottt rendszer önvezérelt módon kikukázza az egyént és a tranzakció a többiek részéről nem akad el."
            },
            {
                "text": "Igaz-e, hogy daisy chain esetén az eszközök prioritása nem változtatható?",
                "answer": "IGAZ",
                "explanation": "Kőbe vésett a hierarchia. Daisy chain buszoknál a prioritást zord módón abból jön: MILYEN KÖZEL VAGY FIXEN BEKÖTVE a Vezérlőhöz (GRANT). Aki a kábel végi fityegőkre megy s távol van dróton láncban, az sosem jut prioritáshoz hardveres átforrasztás nélkül..."
            },
            {
                "text": "Igaz-e, hogy több DMA vezérlő is lehet egy buszon?",
                "answer": "IGAZ",
                "explanation": "Korábban volt 1 chip az archaikus alaplapokon. De manapság maga a rendszer és számos külön modern Bővítőkártya is operál saját kis DMA chip vezérlővel mikrokódból megsegítve."
            },
            {
                "text": "Jelez-e a DMA vezérlő minden egyes bájt sikeres átvitele után megszakítást?",
                "answer": "HAMIS",
                "explanation": "Szétszedné egy Interrupt storm a CPU-t! Pont az volt a lényeg, ha valami 10.000 adat block átvitel, a DMA felparaméterezése után egészen az UTOLSÓ bájt és az egész teljesítéséig kussban és önállóan masíroz a vezérlő a háttárben!"
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 15,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Utasításkészletek (CISC/RISC)?",
        "statements": [
            {
                "text": "A CISC utasításkészlet-architektúrára jellemző, hogy az utasítások dekódolása összetettebb feladat.",
                "answer": "IGAZ",
                "explanation": "A CISC (Complex Instruction Set Computer) változó hosszúságú (pl. x86 esetén 1-17 bájt) és rendkívül bonyolult utasításokkal dolgozik. A dekódoló egységnek így meg kell határoznia az utasítás végét és a benne foglalt összetett (akár memóriát is hivatkozó) műveleteket, ami komplex hardvert igényel."
            },
            {
                "text": "A CISC utasításkészlet-architektúrára jellemző, hogy könnyebb alacsony szinten programozni.",
                "answer": "IGAZ",
                "explanation": "Igaz, mert a CISC utasítások „erőteljesebbek”. Egyetlen utasítás elvégezhet akár egy memóriából olvasást, majd ahhoz egy regiszter hozzáadását is. Az assembler nyelv így közelebb áll a magas szintű gondolkodáshoz, és rövidebb kódot eredményez, mint a RISC, ahol ezeket mind külön apró utasításokra kéne bontani."
            }
        ],
        "maxPoints": 2,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 16,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Memória technológiák?",
        "statements": [
            {
                "text": "A DRAM a gyorsítótár (cache) memória alapja.",
                "answer": "HAMIS",
                "explanation": "A cache memóriák alapja az SRAM (Static RAM), mert sokkal gyorsabb, bár drágább és több tranzisztorból áll (6T típus). A DRAM (Dynamic RAM) az olcsóbb, nagy kapacitású rendszermemóriák alapja."
            },
            {
                "text": "A DRAM gyorsabban írható és olvasható, mint az SRAM.",
                "answer": "HAMIS",
                "explanation": "A DRAM jelentősen lassabb az SRAM-nál, részben amiatt is, mert az adattárolást végző apró kondenzátorok feltöltése/kisütése elektronikai szempontból is lassabb, ráadásul maga a DRAM olvasási művelete destruktív, így olvasás után az is plusz idő, mire újra frissíti (visszaírja) az információt."
            },
            {
                "text": "A DRAM memóriában 1 bit tárolásához 6 tranzisztor szükséges.",
                "answer": "HAMIS",
                "explanation": "Ez a 6 db M-OSFET állítás, avagy a '6T cellastruktúra' az SRAM memóriára jellemző. A klasszikus DRAM-ban mindössze 1 tranzisztor és 1 kondenzátor (1T1C) szorítkozik egyetlen bit tárolásához, ami miatt sokkal zsúfoltabbá tehető egységnyi szilícium felületen."
            },
            {
                "text": "A DRAM tárolócella kizárólag tranzisztorokból áll.",
                "answer": "HAMIS",
                "explanation": "A DRAM egy apró hozzáférési tranzisztorból, és egy - a töltések felhalmozásáért felelős - miniatűr kondenzátorból áll."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 17,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Memória technológiák?",
        "statements": [
            {
                "text": "Az SRAM a gyorsítótár (cache) memória alapja.",
                "answer": "IGAZ",
                "explanation": "A Static RAM bistabil papucsvezérelt 6 tranzisztoros kombó, nem kell frissíteni, s így hihetetlenül gyors - pontosan ez a sebesség kell a CPU gyorsítótárban, lévén, hogy cserébe drága is iszonyat melegedik."
            },
            {
                "text": "Az SRAM gyorsabban írható és olvasható, mint a DRAM.",
                "answer": "IGAZ",
                "explanation": "Ahoyg említve volt, az SRAM csupán tranzisztorkapuk ide oda lengése révén billenki. A DRAM-nál el kell tárolódjon az analog kondenzátorban a töltés (lassú), majd az 'destruktívan' elillan olvasáskor... "
            },
            {
                "text": "Az SRAM tárolócella kizárólag tranzisztorokból áll.",
                "answer": "IGAZ",
                "explanation": "Jellemzően 6 MOSFET tranzisztorból. 2-2 tranzisztor inverterkaput játszva emlékezik egy bitre, és 2 vezérli a ki/bemeneti feszültséget - klasszikusan egy kondenzátor SINCS benne ellentévebben a DRAM-mal (1T 1C)."
            },
            {
                "text": "Azonos tárolási kapacitás mellett a DRAM kevesebb energiát fogyaszt, mint az SRAM.",
                "answer": "IGAZ",
                "explanation": "Sokkal kevesebb! A DRAM 1 apró tranzisztorból s cellából áll (a töltést magában tartja a kondi). Az SRAM folymatosan üzemelő Vcc+ és GND földelés között balanszoló 6 nyitott/zárt tranzisztorkaput cipel magán, s az üzeméhez kő kemény áram és iszonyatos melegedés tartozik bitenként."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 18,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Memória technológiák?",
        "statements": [
            {
                "text": "Ha a memóriavezérlő nyitva hagyja az utolsó sort, gyorsabban kiszolgálható a következő kérés, ha az egy másik sorra vonatkozik.",
                "answer": "HAMIS",
                "explanation": "Kifejezetten rosszabb! Ha nyitva hagy egy sort (ACTIVATE után nem jött PRECHARGE lezárás), viszont a következő adat kérése MÁSIK sorra vonatkozik, akkor előbb egy büntető-lépésként kötelezően be kell zárni a nyitottat s csak ezután nyitható az új - vagyis tovább lassul a folyamat (ezt hívják 'Row Miss penalty'-nak)."
            },
            {
                "text": "Ha a memóriavezérlő nyitva hagyja az utolsó sort, gyorsabban kiszolgálható a következő kérés, ha az ugyanarra a sorra vonatkozik.",
                "answer": "IGAZ",
                "explanation": "Ez az ún. 'Page hit' (vagy 'Row hit'). Ha a program memóriahivatkozása (olvasás) az épp eleve nyitva lévő szerencsés lapra esik le, akkor a teljes időigényes sor-zárás és megnyitás megspórolódik, a READ/WRITE parancsok egyből küldhetők az oszlopvezérlésre."
            },
            {
                "text": "Igaz-e, hogy a DRAM írási és olvasási művelete gyorsabb az SRAM-nál?",
                "answer": "HAMIS",
                "explanation": "Az SRAM sokkal gyorsabb az állandó feszültség miatt. DRAM esetében ráadásul a cellák olvasása során a kondnezátorok kiolvasott értéke elveszik, eltűnik bele a vezetébe (destruktív olvasás), ezért azt hardveresen szigorúan azonnal vissza is töltei az áramkör ami súlyos idő!"
            },
            {
                "text": "Igaz-e, hogy a DRAM-nak kisebb a tárolási kapacitása az SRAM-nál?",
                "answer": "HAMIS",
                "explanation": "DRAM adatsűrűsége a legjobb dolog benne! Csak 1 kondenzátor és tranzisztor van 1 biten! A minimum 6 logikai tranzisztor kapus SRAM fizikailag és tranzisztormennyiség szempontjából is sokszor akkora területet égetne a lapodon ugyanezért."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 19,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Háttértárak?",
        "statements": [
            {
                "text": "A HDD bufferben a merevlemez előreveheti a gyorsan kiszolgálható kéréseket?",
                "answer": "IGAZ",
                "explanation": "A modern mechanikus HDD-k a beépített cache (buffer) memóriájukban lévő olvasási/írási várólistát a pozicionálási energiák minimalizálására (pl. NCQ vagy SATF, SSTF ütemezésekkel) képesek fejmozgatás és várakozási idő szerint önállóan átrendezni a hatékonyság érdekében."
            },
            {
                "text": "A HDD bufferben a merevlemez előreveheti a rövidebb méretű szektorokra vonatkozó kéréseket?",
                "answer": "HAMIS",
                "explanation": "A modern merevlemezeken és az operációs rendszer által látott LBA felületen a szektorok mérete állandó és rögzített (tipikusan 512, vagy újabb esetben 4096 bájt / 4k). Mivel a méret nem változik, nincsenek is 'rövidebb szektorok' amiket előnyben kéne részesíteni."
            },
            {
                "text": "A HDD bufferben a merevlemez előreveheti a sormegnyitást nem igénylő kéréseket?",
                "answer": "HAMIS",
                "explanation": "A 'sormegnyitás' (ACTIVATE) logikája az oszlopvezérelt/sorvezérelt elektronikus DRAM memóriamátrixokra jellemző. A mechanikus háttértraknak nincsenek sorai, náluk cilinderek, lencsék és szektorok (CHS) vannak pozicionálás gyanánt."
            },
            {
                "text": "A HDD bufferben a merevlemez előreveheti az OS számára fontosabb kéréseket?",
                "answer": "HAMIS",
                "explanation": "A merevlemez magára hagyva firmware-ből optimalizál. Bár az NCQ enged némileg beleszólni a prioritásokba, de alapvetően a HDD maga nem tudja, mi számít fontosnak az OS részére - számára csak abszolút fizikai blokkcímek és byte-ok léteznek."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 20,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Architektúrák?",
        "statements": [
            {
                "text": "A memória a Neumann architektúra egyik fő komponense.",
                "answer": "IGAZ",
                "explanation": "A Neumann elvű rendszerek sarokköve a közös program- és adattár, maga a központi Memória, a Feldolgozó (CPU) és a perifériák mellett kialakított három fő fogalmi pillér egyike."
            },
            {
                "text": "A Neumann-architektúra a vezérlésáramlásos modellt valósítja meg.",
                "answer": "IGAZ",
                "explanation": "Igen. Az úgynevezett 'Control Flow' (vagy Neumann-féle szekvenciális) adatkezelési rend alapja, hogy mindegy, mire kell az adat, a PC (Program Counter / utasításszámláló) szigorú sorrendiséget tart és a progit sorról-sorra hajtja végre aszerint ami meg van neki hivatkozva ugrásokkal és elágazásokkal."
            },
            {
                "text": "A perifériák a Neumann architektúra fő komponensei közé tartoznak.",
                "answer": "IGAZ",
                "explanation": "A teljes architektúra három alap komponenscsaládja: Központi feldolgozó (Processzor, ALU & Vezérlő), Operatív Tár (Közös Memória) ...és maguk a Perifériák (Bemeneti, Kimeneti I/O-k) , amiken át betáplálni vagy kiadni láttatni tudja az univerzum számára az infót a gép.  "
            },
            {
                "text": "Az adatáramlásos modellnél a program leírására precedenciagráfot használunk.",
                "answer": "IGAZ",
                "explanation": "Az adatáramlásos (Data Flow) gépeknél a kódot nem utasítások lineáris sorozataként tárolják (mint Neumann-nál), hanem egy irányított adatfüggőségi gráffal, azaz precedenciagráffal, ami garantálja, hogy egy művelet csak akkor süljön el, ha a bemenetein a gráf szerinti adatok mind megjelennek."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 21,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Architektúrák?",
        "statements": [
            {
                "text": "Használ-e az adatáramlásos modell FORK-JOIN primitíveket a párhuzamosság leírására?",
                "answer": "HAMIS",
                "explanation": "A Data-flow szoftverek az Adatok megérkezése és kigyulladása végett teljesen önállóan és implicit párhuzamosan állnak neki a feldolgozásuknak miként az alaktészek megengedik. A Fork/Join (Programozói leválasztás s szálszinkron) az asztali Neumann féle procedurális kényszer okán van C programozóknak kitalálva."
            },
            {
                "text": "Igaz-e, hogy az adatáramlásos modell nem feltétlenül a programozó által megadott sorrendben hajtja végre a műveleteket?",
                "answer": "IGAZ",
                "explanation": "Teljesen szakít vele! A Data-flow koncepciója egy hálózatról, ami menten, amint adatot s muníciót lát valahol valami (token a gráf ágán) önállóan elvégzi a rábízott egységnyi számítást, függetlenül attól, mikori és hanyadik sorban deklarálta azt a programozó forráskódja."
            },
            {
                "text": "Igaz-e, hogy az adatáramlásos modell nem hajt végre utasítást, amíg az eredményre szükség nem lesz?",
                "answer": "HAMIS",
                "explanation": "Épp hogy az Adatáramlásos elöbb sül el amint megkapja a két értéket összeadára pld. Az IGÉNY-vezérelt (Demand-Driven) az ami egyedüliként 'lusta': malmozik addig amíg konkrétan egy végeredményt tőle ki nem 'demandolnak' - s majd akkor visszafele fejtve számolja végig magát."
            },
            {
                "text": "Kiolvasható-e párhuzamosan az adat és az utasítás a Neumann architektúrában?",
                "answer": "HAMIS",
                "explanation": "Szekvenciális! Minden (Kód, Adat, Utasítás, Operandus) abban az 'egy-nagy tál' Közös memóriában és Közös vezetéken él! Fetch fázis es Memória fázis közt ha kell a busz azt ki kell várni egy lépcsőben mert a dugó beáll - csak a szeparált 'Harvard' típus engedte az egyidejűt el."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 22,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Háttértárak (NAND flash/SSD)?",
        "statements": [
            {
                "text": "Az MLC NAND jellemzően több törlési-programozási műveletet visel el, mint az SLC.",
                "answer": "HAMIS",
                "explanation": "Az MLC (Multi-Level Cell) egyetlen apró lebegőkapus tranczisztorban tárol egyszerre 2 bitnyi (4 állapoti) információt feszültségszintekkel. Mivel az elöregedés s oxidáció a 4 szintet mósólja, ez sokkal korábban lesz fals olvasású mint az SLC (ahol csak 2 bit van => 1 és 0)."
            },
            {
                "text": "Az MLC NAND tranzisztora kettőnél több töltöttségi szintet különböztet meg.",
                "answer": "IGAZ",
                "explanation": "A Multi-Level 2 bit esetlén 2^2, azaz NÉGY külön feszültségszintet különít el (00, 01, 10, 11)."
            },
            {
                "text": "Az SLC flash memória a tranzisztorok kettőnél többféle töltöttségi szintjét különbözteti meg?",
                "answer": "HAMIS",
                "explanation": "SLC = Single-Level Cell. Csak kettőt tud: 'Van töltés = 0bit' vagy 'Nincs töltés = 1bit'."
            },
            {
                "text": "Az SLC flash memória esetében alacsonyabb az egy bitre eső gyártási költség?",
                "answer": "HAMIS",
                "explanation": "Az SLC chipben a tranzisztor MASC számolásokkal csak 1 bit adatot cipel. Ugyanazon a szillícium szeleten, ha MLC (2 bit) vagy TLC (3 bit) megoldással tolják rá az anyagot, dupla avagy tripla adatkapacitás hozható ki. Ezért a gyártási költség az SLC-nél JÓVAL MAGASABB bitenként, ellenben szinte kopás és hibaálló!"
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 23,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Háttértárak (NAND flash/SSD)?",
        "statements": [
            {
                "text": "Azonos tranzisztorszám mellett az MLC NAND több adatot tárol, mint az SLC.",
                "answer": "IGAZ",
                "explanation": "Lévén a süket fizikai tranzisztor azonos: A Multi Level Cell egy lebegőkapuban nem csak 1 bitet (két állapot), de a cellafeszültség apró differenciált felhúzása révén máris legalább 2 bitet / 4 állapot (üres, picit töli, kb teli, tele) tárol! Cserébe a tranzisztor gyorsabban öregszik mint a Single Levelben s lassabb."
            },
            {
                "text": "Egy 8 blokkból álló SSD-ben a nyilvántartás tartalmazza a lapok tartalmát és pillanatnyi állapotát.",
                "answer": "IGAZ",
                "explanation": "Pillanatnyi állapotokra azért van égeti szükség, mert egy SSD 'Nem tud csak úgy felülírni' bitet! Ha már irva volt, először a komplett ezer lapból álló Blokkjának az előregelt celláit fizikailag Feszültségre kötik 'törölve' azt - ezért az OS kérést a logikai (LBA) címekről mindig dinamikusan átdrótozzák a firmware-n az 'Éppen használt', 'Törölt', vagy 'Kopott s Törlésre váró (Érvénytelen)' területekre (TRIM s Garbage Collection) a szeméttáblázat ezen státuszkönyvei mentén!"
            },
            {
                "text": "NAND flash SSD-ben lehet írni egy lapra, ha közvetlenül előtte letöröljük azt az egy lapot.",
                "answer": "HAMIS",
                "explanation": "Konceptuálisan Lehetetlen! Lapot (Pár KB méretben) írhatsz önállóan HA az a fizikai hely a mátrixon 'Üres / Törölt' állapotú a chipeben. Viszont önállóan letörölni AZT AZ 1 LAPOT nem tudod, mert a NAND hardvere óriási feszültséget használ, s kizárólag gigantikus BLOKKOKAT (többszáz ilyen lap mátrixát) leégetve tud törölni amiben az is benne van sok ártatlan szomszédjával."
            }
        ],
        "maxPoints": 3,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 24,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Virtuális Memória?",
        "statements": [
            {
                "text": "Egyszintű laptábla esetén a virtuális címtartomány 1 bites növelése nem változtatja meg a laptábla méretét.",
                "answer": "HAMIS",
                "explanation": "Mint a legtöbb fa s mátrix algoritmus - Ha 1 bittel megtőljük a felső eltolás regisztereket, a logikai megcímezhető 'Tár és Fakk' 2^1 bites vagy is a DUPLÁJÁRA esik a hardveres fizikai gépben! - A Laptábla 1 bit miatt hatalmas pazarálssal óirasit hízik és zabál el a valós RAM területről is."
            },
            {
                "text": "Hardver által menedzselt TLB esetén a hardver feladata a TLB hiba feloldása a laptábla bejárásával.",
                "answer": "IGAZ",
                "explanation": "Pl. az asztali x86 gép esetében a TLB hiba szoftvertől láthatatlan belső kivétel s maga a processzor MMU egysége hardverből automatikusan 'Page Walking' módba kapcsol, a Page Directorykban járkál s beolvassa magának a TLB-be a talált új kereteket s fizikai címeket az OS kizárásával."
            },
            {
                "text": "Hardver által menedzselt TLB esetén a hardver feladata a virtuális címből a fizikai cím előállítása.",
                "answer": "IGAZ",
                "explanation": "Csakúgy mint az előbbiekben, egy masszívan processzorba égetett szillícium alapú egység, a 'Memory Management Unit' s annak koprocesszora csinátatja a fizikai cím visszaadását. Az OS az init és a kiosztás megirását állítja csak be magán az MMU-n."
            },
            {
                "text": "Hardver által menedzselt TLB esetén a hardver feladata az áldozatválasztás a fizikai memóriában tárolt lapok közül lapcsere esetén.",
                "answer": "HAMIS",
                "explanation": "Míg a TLB MISS feloldása gyors RAM belsejebb túrkálás (ami hardveres), egy PAGE FAULT esetén (amikor is a Winchester fájlrendszerére van már száműzve egy ritkán hivatkozott memória terület a RAM-ból), annak ismételt behívása SOSEM hardveres. Erre a CPU belenyom egy PageFault szoftver megszakítást s innnen a Microsoft Windows vagy a Linux memóriamenedzser rendszerspecikus vezérlője kezdi el 'szoftveresen' levezényelni a Swap fájlt és az uj áldozat kilökését."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 25,
        "type": "igaz_hamis_matrix",
        "question": "Mely állítások igazak (vagy hamisak) a következő témában: Virtuális Memória?",
        "statements": [
            {
                "text": "Hardver által menedzselt TLB esetén a hardver feladata az érintett lap betöltése a háttértárról, ha lapcsere szükséges.",
                "answer": "HAMIS",
                "explanation": "Page Fault-ból felocsúdva az égetett mikrokód vagy a hardver egység sohasem tudná sem az SSD-t, sem az NTFS/EXT4 blokkokat fájl szinten felolvastatni. Ezt mint látuk az OS dedikált IO menedszere csinálja végig."
            },
            {
                "text": "Hardver feladata-e az érintett lap betöltése a háttértárról lapcsere esetén?",
                "answer": "HAMIS",
                "explanation": "Szintúgy előző... Nem a hardver, hanem egy komplett Megszakitás kezeléses I/O Szoftverréteg (Kernel) dolga a lassú HDD-k és Swapek betöltése."
            },
            {
                "text": "Laphiba esetén a futó program olyan keretre hivatkozott, amire vonatkozó információ nincs a TLB-ben.",
                "answer": "HAMIS",
                "explanation": "Vigyázzunk vele! Ha csak a TLB-ből (az L1 címfordító cache-ből) esett ki vagy sem volt ott bejegyzés, az pusztán 'TLB Miss (TLB hiba)' mely max. ezer órajel-delay-es belső esemény RAM olvasással. Ez semmiképp NEM egyenlő millió ciklusal küzdö és merevlemez olvasásos LAPHIBA / Page Fault státusszal!"
            },
            {
                "text": "Laphiba esetén a futó program olyan lapra hivatkozott, ami nincs bent a fizikai memóriában.",
                "answer": "IGAZ",
                "explanation": "Valóban, a progi a kiosztott OS LBA alapján validnak hitte, de az az adott keret (Lap) korábban a Swap-belett dobva a háttér és memóriakezelő által, azaz nincs fizikailag RAM chipben, várni kell mígy HDD felolvasás után helyrekerül."
            }
        ],
        "maxPoints": 4,
        "explanation": "Ezek egyszerű elméleti kérdések a jegyzet alapján."
    },
    {
        "id": 26,
        "type": "oszlopvalasztos",
        "question": "Mely állítások igazak a RISC, és melyek a CISC utasításkészletekre?",
        "columns": [
            "RISC",
            "CISC"
        ],
        "rows": [
            {
                "text": "A CISC utasításkészlet-architektúrára jellemző, hogy az utasítások dekódolása összetettebb feladat. (Igaz/Hamis)",
                "answer": "RISC",
                "explanation": "A CISC (Complex Instruction Set Computer) változó hosszúságú (pl. x86 esetén 1-17 bájt) és rendkívül bonyolult utasításokkal dolgozik. A dekódoló egységnek így meg kell határoznia az utasítás végét és a benne foglalt összetett (akár memóriát is hivatkozó) műveleteket, ami komplex hardvert igényel."
            },
            {
                "text": "A CISC utasításkészlet-architektúrára jellemző, hogy könnyebb alacsony szinten programozni. (Igaz/Hamis)",
                "answer": "RISC",
                "explanation": "Igaz, mert a CISC utasítások „erőteljesebbek”. Egyetlen utasítás elvégezhet akár egy memóriából olvasást, majd ahhoz egy regiszter hozzáadását is. Az assembler nyelv így közelebb áll a magas szintű gondolkodáshoz, és rövidebb kódot eredményez, mint a RISC, ahol ezeket mind külön apró utasításokra kéne bontani."
            },
            {
                "text": "CISC utasításkészlet jellemzői",
                "answer": "RISC",
                "explanation": "Például az Intel asztali processzorai ezen pörögnek (x86). Zseniális assembler programok írhatóak viszonlag kis memóriában, mert egy utasítás képes olvasni, számítani benne a GPU-hoz, s kimenteni azt a memóriába (regiszter->memória). Hátránya: 1 ciklustol a 40.000 ciklusig szörnyű aszimmetriák jellemezhetik a szalagon (nehezítve a pipeline feldolgozást) és egy bonyolult mikrokód dekódert is követelnek."
            },
            {
                "text": "Hány operandusú az ADD R1 vagy a JUMP -42 utasítás?",
                "answer": "RISC",
                "explanation": "Egyrészt a JUMP -42 csak magát az ugrás offset-dizájnját (célt) veszi be. Az 'ADD R1' pedig olyasmi régi akkumulátor alapú ALU gépeknél jelentette azt az implicit logikát, hogy magához a regiszterez kötött AKKUMULÁTOR nyersértékéhez adjuk hozzá fixen az R1 regisztert - az utasítás Assembly szinten így egyetlen paraméterezést kér."
            },
            {
                "text": "Hány utasítás kell az ugráshoz (R1>0), ha az architektúra 'összehasonlít és ugrik' utasítást használ?",
                "answer": "RISC",
                "explanation": "Számos (általában modern RISC) Architektúra elhagyhatja a 'flags' regiszterek állítgatásával járó Compare utasítást, s ha a hardver magában bírja integrálni, egyetlen futószalag utasításkóddal megoldhatő egy 'Jump if R1>0' algoritmus, kiküszöbölve a státusz-fázis várakozásokat!"
            }
        ],
        "maxPoints": 5,
        "explanation": "Osztályozási feladat az utasításkészletek jellemzőiről."
    }
];