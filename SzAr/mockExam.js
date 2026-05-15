
document.addEventListener("DOMContentLoaded", () => {
    const navFlashcards = document.getElementById("nav-flashcards");
    const navMockExam = document.getElementById("nav-mock-exam");
    const cardsContainer = document.getElementById("cards-container");
    const mockContainer = document.getElementById("mock-exam-container");
    const mockQuestionsContainer = document.getElementById("mock-questions-container");
    
    const timerDisplay = document.getElementById("mock-timer");
    const submitBtn = document.getElementById("submit-mock-exam");
    const resultDiv = document.getElementById("mock-exam-result");
    const restartBtn = document.getElementById("restart-mock-exam");
    
    let timer;
    let secondsLeft = 30 * 60;
    let isExamActive = false;
    let selectedQuestions = [];

    navFlashcards.addEventListener("click", () => {
        navFlashcards.classList.add("active"); navMockExam.classList.remove("active");
        cardsContainer.style.display = "grid"; mockContainer.style.display = "none";
    });

    navMockExam.addEventListener("click", () => {
        navMockExam.classList.add("active"); navFlashcards.classList.remove("active");
        cardsContainer.style.display = "none"; mockContainer.style.display = "block";
        if (!isExamActive && resultDiv.style.display === "none") startMockExam();
    });

    restartBtn.addEventListener("click", () => startMockExam());

    function startMockExam() {
        isExamActive = true;
        resultDiv.style.display = "none";
        submitBtn.style.display = "block";
        submitBtn.disabled = false;
        mockQuestionsContainer.innerHTML = "";
        
        clearInterval(timer);
        secondsLeft = 30 * 60;
        updateTimerDisplay();
        timer = setInterval(() => {
            secondsLeft--;
            updateTimerDisplay();
            if (secondsLeft <= 0) submitExam();
        }, 1000);

        const allRandomCards = window.mockExamData.filter(q => q.type === "igaz_hamis_matrix" || q.type === "oszlopvalasztos");
        allRandomCards.sort(() => 0.5 - Math.random());
        
        // 1. SLOT 9 POOL
        const pool_9 = [
            { id: 901, type: "special_rendszermemoria", variant: "v1_3sor", question: "FCFS / FR-FCFS ütemezés (Kérések: 3.sor,24 ; 3.sor,0 ; 6.sor,8. Nyitott: 6)", maxPoints: 6, explanation: "FCFS esetén szigorú sorrend, FR-FCFS előreveszi a már nyitott sorhoz tartozó kérést." },
            { id: 9012, type: "special_rendszermemoria", variant: "v2_1sor", question: "FCFS / FR-FCFS ütemezés (Kérések: 4.sor,24 ; 1.sor,0 ; 4.sor,8. Nyitott: 1)", maxPoints: 6, explanation: "FCFS: Prec, Act 4, R 24 ... Act 1, R 0 ... Act 4, R 8." },
            { id: 902, type: "special_dram_list", question: "Sorolja fel a tanult 5 DRAM parancsot!", maxPoints: 2, explanation: "Precharge, Activate, Read, Write, Refresh" },
            { id: 9021, type: "special_dram_list", question: "Soroljon fel 3 cache blokk csere stratégiát!", maxPoints: 2, explanation: "LRU, FIFO, Random, LFU stb." },
            { id: 903, type: "special_polling", variant: "2ghz", question: "Egy 2 GHz órajel-frekvencián üzemelő számítógéphez egy érintőképernyő...", maxPoints: 5, explanation: "10000; 1.25%; 0.0035% (Vagy 0.05, 1, 0.35 a kérdés verziója szerint)" },
            { id: 904, type: "special_polling", variant: "1.6ghz", question: "Egy 1.6 GHz órajel-frekvencián üzemelő számítógéphez...", maxPoints: 5, explanation: "10000; 1.25%; 0.0035%" },
            { id: 905, type: "szamolos", question: "Memória késleltetés (TRP=8, TRCD=8, TCAS=6)", maxPoints: 4, explanation: "Első adat = CAS késleltetés, Burst = sávszélesség * 2, Belső órajel = Külső / 4.", inputs: [{label: "Hanyadik külső órajelben jelenik meg az első adat?", answer: "6"}, {label: "Adatátviteli sebesség burst esetén (MB/s)?", answer: "19200"}, {label: "Belső órajel frekvenciája (MHz)?", answer: "300"}]},
            { id: 906, type: "szamolos", question: "Kvadrokopter drón vezérlője (200 MHz, 16 KHz, 800 órajel/szenzor)", maxPoints: 4, explanation: "1/16000 sec = 62.5 us. 16000 * 800 / 200M = 6.4%. 16000 * 10000 = 160M órajel. Sensor fusion = 3 szenzor.", inputs: [{label: "Hány us-onként kérdezi le a drón a szenzorokat?", answer: "62.5"}, {label: "Mekkora relatív terhelés a polling (%-ban)?", answer: "6.4"}, {label: "Hány *10^6 órajelet fordít vezérlőjelek kiszámítására mp-enként?", answer: "160"}, {label: "Legfeljebb hány szenzor fér bele a fusionbe?", answer: "3"}]},
            { id: 907, type: "szamolos", question: "DDR3-2400 DRAM technológia", maxPoints: 3, explanation: "Belső: 2400/8=300MHz. Periódus: 1. Átvitel: 2400 * 8 = 19200 MB/s.", inputs: [{label: "Mekkora a belső órajel (MHz)?", answer: "300"}, {label: "Belső órajel hány periódusára van szükség egy burst átviteléhez?", answer: "1"}, {label: "Adatátviteli sebesség burst alatt (MB/s)?", answer: "19200"}]},
            { id: 908, type: "szamolos", question: "DRAM első adat érkezési idő (2. sor, 16. o, FCFS)", maxPoints: 6, explanation: "A teljes TRP+TRCD+TCAS késleltetés összegét kell nézni, majd az órajel adatszélességével konvertálni ns-ra.", inputs: [{label: "DDR2-1000 eltelt idő órajelben:", answer: "20"}, {label: "DDR2-1000 eltelt idő ns-ban:", answer: "40"}, {label: "DDR3-1800 eltelt idő órajelben:", answer: "27"}, {label: "DDR3-1800 eltelt idő ns-ban:", answer: "30"}, {label: "DDR3-3200 eltelt idő órajelben:", answer: "34"}, {label: "DDR3-3200 eltelt idő ns-ban:", answer: "21.25"}]},
            { id: 909, type: "special_rendszermemoria", variant: "v3_3sor_off32", question: "FCFS és FR-FCFS ütemezés. Kérések: (2. sor, 16), (2. sor, 0), (3. sor, 32). Kezdetben a 3. sor van nyitva!", maxPoints: 6, explanation: "FR-FCFS a nyitott 3. sor kérését (off 32) veszi előre!" },
            { id: 910, type: "szamolos", question: "Polling és Interrupt - Egy 1 GHz órajel-frekvencián üzemelő géphez aktív toll (1000 órajel/lekérdezés, meg. 100 órajel, 1200 váltás/mp) kapcsolódik...", maxPoints: 5, explanation: "0.001 ms per periódus. Terhelés 10%. Interrupt 0.168%", inputs: [{label: "a) Mire érdemes beállítani (ms):", answer: "0.001"}, {label: "b) Relatív terhelés polling esetén (%):", answer: "10"}, {label: "c) Relatív terhelés megszakítás esetén (%):", answer: "0.168"}]}
        ];

        // 2. SLOT 10 POOL
        const pool_10 = [
            { id: 1001, type: "special_merevlemez", question: "Merevlemez Paraméterek (CHS, 1800 szektor)", maxPoints: 7, explanation: "6000 RPM, 18ms, 25M bájt/s" },
            { id: 1002, type: "special_merevlemez_zbr", variant: "v1_3lemez", question: "Egy merevlemez 3 db kétoldalas lemezt tartalmaz (ZBR) 150000 sáv...", maxPoints: 6, explanation: "Kapacitás: 675, Fordulási idő: 12ms, Átvitel: 0.002ms..." },
            { id: 1003, type: "special_merevlemez_zbr", variant: "v2_1lemez", question: "Egy merevlemez 1 db kétoldalas lemezt tartalmaz (ZBR) 120000 sáv...", maxPoints: 6, explanation: "Kapacitás: 180, Fordulási idő: 6ms, Átvitel: 0.001ms..." },
            { id: 1004, type: "szamolos", question: "RAID tömb paritásadatok (12 db diszk)", maxPoints: 2, explanation: "RAID 0 (striping) és RAID 1 (tükrözés) sem tárol dedikált paritást.", inputs: [{label: "RAID 0 esetén:", answer: "0"}, {label: "RAID 1 esetén, háromszoros redundanciával:", answer: "0"}]},
            { id: 1005, type: "szamolos", question: "Merevlemez 2 db lemez (180000 sáv, 1600 szektor, 3750 RPM)", maxPoints: 2, explanation: "Kap: 2*2*180000*1600*500 = 576GB. Ford: 60/3750 = 16ms.", inputs: [{label: "A merevlemez teljes adattárolási kapacitása (*10^9 byte):", answer: "576"}, {label: "A lemezek körülfordulási ideje (ms):", answer: "16"}]},
            { id: 1006, type: "szamolos", question: "Merevlemez paraméterek ZBR nélkül (4 lemez, 120000 sáv, 1200 szektor, 10000 RPM)", maxPoints: 5, explanation: "RPM kiszámítás az 5000 és 5e8 bájtos idők különbségéből. Átviteli sebesség stb.", inputs: [{label: "a) CHS - C:", answer: "120000"}, {label: "H:", answer: "8"}, {label: "S:", answer: "1200"}, {label: "b) Forgási sebesség (RPM):", answer: "10000"}, {label: "c) 5000 bájtos kérés átlagos kiszolgálása (ms):", answer: "10"}, {label: "d) Átviteli sebesség (bájt/s):", answer: "500000"}]},
            { id: 1007, type: "szamolos", question: "Merevlemez paraméterek ZBR nélkül (4 lemez, 200000 sáv, 1500 szektor, 9600 RPM)", maxPoints: 4, explanation: "Hasonló paraméter számítás...", inputs: [{label: "a) Forgási sebesség (RPM):", answer: "9600"}, {label: "b) 50000 bájtos kérés átlagos kiszolgálása (ms):", answer: "13"}, {label: "c) IO sebesség (IOPS):", answer: "40"}, {label: "Átviteli sebesség (bájt/s):", answer: "20000000"}]},
            { id: 1008, type: "szamolos", question: "Mennyi egy 5 db 1 TB kapacitású diszkből álló RAID tömb felhasználó által hasznosítható kapacitása?", maxPoints: 2, explanation: "RAID 0 összeadódik (5TB), RAID 6 esetén 2 lemez paritás (3TB).", inputs: [{label: "RAID 0 esetén (TB):", answer: "5"}, {label: "RAID 6 esetén (TB):", answer: "3"}]},
            { id: 1009, type: "szamolos", question: "Merevlemez ZBR - 4 db kétoldalas lemez, 150000 sáv (3 zóna 2000/1500/1000), 10000 RPM", maxPoints: 6, explanation: "Fejek: 8. Sáv/zóna: 50.000. Szektorok = 8 * 50.000 * 4500 = 1.8 milliárd * 500 = 900 GB.", inputs: [{label: "a) Kapacitás (10^9 bájtban):", answer: "900"}, {label: "b) Körülfordulási idő (ms):", answer: "6"}, {label: "c) 1 szektor átvitele (ms):", answer: "0.001"}, {label: "d) 1000 szektor olvasása (ms):", answer: "10.001"}, {label: "e) Interfész sebesség a legkülső zónában (10^6 byte/s):", answer: "50"}]}
        ];

        // 3. SLOT 11 POOL
        const pool_11 = [
            { id: 1101, type: "special_ssd", variant: "v1", question: "Egy 8 blokkból álló SSD állapota (LBA 8, 4, 14 kérések)", maxPoints: 5, explanation: "A 7-es blokk kiürül." },
            { id: 1102, type: "special_ssd", variant: "v2", question: "Egy 8 blokkból álló SSD állapota (LBA 17, 2, 4 kérések)", maxPoints: 5, explanation: "A 3-as blokk telítődik, szemétgyűjtés stb." },
            { id: 1103, type: "szamolos", question: "NAND Flash alapú SSD tranzisztorok (36 bit)", maxPoints: 3, explanation: "MLC: 36/2=18, TLC: 36/3=12, QLC: 36/4=9.", inputs: [{label: "MLC esetben:", answer: "18"}, {label: "TLC esetben:", answer: "12"}, {label: "QLC esetben:", answer: "9"}]},
            { id: 1104, type: "szamolos", question: "Hány tranzisztor szükséges 24 bit tárolásához egy SLC-t, MLC-t, ill. QLC-t használó NAND flash alapú SSD meghajtón?", maxPoints: 3, explanation: "SLC: 24, MLC (2 bit/cella): 12, QLC (4 bit/cella): 6.", inputs: [{label: "SLC esetén:", answer: "24"}, {label: "MLC esetén:", answer: "12"}, {label: "QLC esetén:", answer: "6"}]},
            { id: 1105, type: "szamolos", question: "Egy operációs rendszer 5600 MB adatot ír az SSD-re. A háttérbeli folyamatok miatt a tényleges írás további 152 MB. Mennyi a write amplification (WAF)?", maxPoints: 1, explanation: "WAF = (Host írások + SSD belső írások) / Host írások = (5600 + 152) / 5600 = 1.03", inputs: [{label: "Write amplification értéke:", answer: "1.03"}]}
        ];

        // 4. SLOT 12 POOL
        const pool_12 = [
            { id: 1201, type: "special_virtualis", variant: "v1_4row", question: "Virtuális Memória és TLB Laptábla Frissítés", maxPoints: 6, explanation: "TLB miss és laptábla hierarchia bejárás." },
            { id: 1202, type: "special_virtualis", variant: "v2_2row", question: "Virtuális Memória (17 bites virt, 16 bites fiz) TLB: 2 bejegyzés, LRU. Kérések: 6, 2.", maxPoints: 6, explanation: "TLB lefedettség: 16384 bájt." },
            { id: 1203, type: "special_virtualis", variant: "v3_2row", question: "Virtuális Memória (17 bites virt, 16 bites fiz) TLB: 2 bejegyzés, LRU. Kérések: 8, 5.", maxPoints: 6, explanation: "TLB lefedettség: 16384 bájt." },
            { id: 1204, type: "szamolos", question: "2 hierarchikus laptábla (15 bites virt, 14 bites fiz, lapméret 2048)", maxPoints: 6, explanation: "Virtuális lapok: 2^(15-11)=16. Keretek: 2^(14-11)=8. Laptábla max mérete: egy szint = indexek.", inputs: [{label: "a) Legnagyobb összegzett laptábla méret (bájt):", answer: "786432"}, {label: "Legkisebb összegzett laptábla méret:", answer: "32768"}, {label: "b) Hány lapból áll a virtuális memória?", answer: "16"}, {label: "Hány keretből áll a fizikai memória?", answer: "8"}, {label: "c) Hol található a 12-es lap?", answer: "keret2"}, {label: "A 3-as lap:", answer: "háttértár"}, {label: "d) Hányas lap található az 1-es kereten?", answer: "10"}, {label: "Az 5-ös kereten:", answer: "15"}]},
            { id: 1205, type: "szamolos", question: "Virtuális cím meghosszabbítása 1 bittel", maxPoints: 2, explanation: "Mivel a cím 1 bittel nő, 2-szer annyi lapcímzést tesz lehetővé, laptábla mérete duplázódik.", inputs: [{label: "a) Hányszor több bejegyzés lesz kétszintű laptáblánál?", answer: "2"}, {label: "b) Egyszintű laptábla esetén?", answer: "2"}]}
        ];

        const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
        
        selectedQuestions = [];
        for(let i=0; i<8; i++) if(allRandomCards[i]) selectedQuestions.push(allRandomCards[i]);
        selectedQuestions.push(pick(pool_9), pick(pool_10), pick(pool_11), pick(pool_12));

        renderMockExamQuestions();
        window.scrollTo(0, 0);
    }

    function updateTimerDisplay() {
        const m = Math.floor(secondsLeft / 60);
        const s = secondsLeft % 60;
        timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        timerDisplay.style.color = secondsLeft < 60 ? 'red' : '#ef4444';
    }

    function renderMockExamQuestions() {
        selectedQuestions.forEach((q, index) => {
            const wrap = document.createElement("div");
            wrap.className = "mock-question";
            wrap.id = `mock-q-${index}`;
            let html = `<h3>${index + 1}. Kérdés: ${q.question || q.type}</h3>`;
            
            if (q.type === "igaz_hamis_matrix") {
                html += `<table class="moodle-table">`;
                q.statements.forEach((stmt, sIdx) => {
                    html += `<tr><td>${stmt.text}</td><td><select class="moodle-select" id="q${index}_s${sIdx}"><option value=""></option><option value="IGAZ">IGAZ</option><option value="HAMIS">HAMIS</option></select><span class="feedback" id="fb_q${index}_s${sIdx}"></span></td></tr>`;
                });
                html += `</table>`;
            } 
            else if (q.type === "oszlopvalasztos") {
                html += `<table class="moodle-table"><thead><tr><th></th>`;
                q.columns.forEach(col => html += `<th>${col}</th>`);
                html += `</tr></thead><tbody>`;
                q.rows.forEach((row, rIdx) => {
                    html += `<tr><td>${row.text}</td>`;
                    q.columns.forEach(col => html += `<td><input type="radio" name="q${index}_r${rIdx}" value="${col}"></td>`);
                    html += `<td><span class="feedback" id="fb_q${index}_r${rIdx}"></span></td></tr>`;
                });
                html += `</tbody></table>`;
            }
            else if (q.type === "special_rendszermemoria") {
                let init = q.variant === "v2_1sor" ? "(4. sor, 24), (1. sor, 0), (4. sor, 8). <br>Kezdetben az 1-es sor van nyitott állapotban." : 
                           q.variant === "v3_3sor_off32" ? "(2. sor, 16), (2. sor, 0), (3. sor, 32). <br>Kezdetben a 3-as sor van nyitott állapotban. Az utolsó parancs után a memóriavezérlő zárja le a nyitott sort!" :
                           "(3. sor, 24), (3. sor, 0), (6. sor, 8). <br>Kezdetben a 6-os sor nyitott!";
                html += `<p>Egy számítógép rendszermemóriája egycsatornás, DDR2-800... Kérések: ${init}</p>
                <div style="display:flex; gap: 2rem;">
                  <table class="moodle-table"><tr><th colspan="3">FCFS</th></tr>`;
                for(let i=1; i<=9; i++) html += `<tr><td><select id="q${index}_fcfs_cmd_${i}"><option value=""></option><option value="PRECHARGE">PRECHARGE</option><option value="ACTIVATE">ACTIVATE</option><option value="READ">READ</option></select></td><td><input type="text" id="q${index}_fcfs_prm_${i}" style="width:50px"></td><td><span class="feedback" id="fb_q${index}_fcfs_${i}"></span></td></tr>`;
                html += `</table><table class="moodle-table"><tr><th colspan="3">FR-FCFS</th></tr>`;
                for(let i=1; i<=9; i++) html += `<tr><td><select id="q${index}_fr_cmd_${i}"><option value=""></option><option value="PRECHARGE">PRECHARGE</option><option value="ACTIVATE">ACTIVATE</option><option value="READ">READ</option></select></td><td><input type="text" id="q${index}_fr_prm_${i}" style="width:50px"></td><td><span class="feedback" id="fb_q${index}_fr_${i}"></span></td></tr>`;
                html += `</table></div>`;
            }
            else if (q.type === "special_dram_list") {
                html += `<textarea class="moodle-textarea" id="q${index}_txt" style="width:100%; height:80px;"></textarea><span class="feedback" id="fb_q${index}_txt"></span>`;
            }
            else if (q.type === "special_polling") {
                let txt = q.variant === "2ghz" ? "Egy 2 GHz órajel-frekvencián... periódus lekérdezése 1000 órajel. 20000 pozícióváltás/mp. Megszakítás idő 400 órajel (5000 váltás/mp).<br>" : "Egy 1.6 GHz órajel-frekvencián... periódus 0.1 ms-onként. lekérdezés 2000 órajel. Megszakítás: 800 órajel, 2000 váltás/mp.<br>";
                html += `<p>${txt}</p>
                <p>a) Hányszor kell / Mire érdemes beállítani: <input id="q${index}_a" style="width:60px"> <span id="fb_q${index}_a"></span></p>
                <p>b) Polling relatív terhelés: <input id="q${index}_b" style="width:60px"> % <span id="fb_q${index}_b"></span></p>
                <p>c) Interrupt relatív terhelés: <input id="q${index}_c" style="width:60px"> % <span id="fb_q${index}_c"></span></p>`;
            }
            else if (q.type === "special_merevlemez") {
                html += `<p>Egy merevlemez 2 db kétoldalas lemezt tartalmaz...</p>
                C = <input id="q${index}_C" style="width:80px"> <span id="fb_q${index}_C"></span><br>
                H = <input id="q${index}_H" style="width:40px"> <span id="fb_q${index}_H"></span><br>
                S = <input id="q${index}_S" style="width:60px"> <span id="fb_q${index}_S"></span><br>
                RPM = <input id="q${index}_RPM" style="width:60px"> RPM <span id="fb_q${index}_RPM"></span><br>
                c_time = <input id="q${index}_c_time" style="width:60px"> ms <span id="fb_q${index}_c_time"></span><br>
                IOPS = <input id="q${index}_IOPS" style="width:60px"> IOPS <span id="fb_q${index}_IOPS"></span><br>
                bps = <input id="q${index}_bps" style="width:120px"> bájt/s <span id="fb_q${index}_bps"></span>`;
            }
            else if (q.type === "special_merevlemez_zbr") {
                let isV1 = q.variant === "v1_3lemez";
                html += `<p>Egy merevlemez ${isV1?'3':'1'} db kétoldalas lemezt tartalmaz (ZBR, 2 zóna).</p>
                a) Kapacitás (10^9 bájtban): <input id="q${index}_a" style="width:80px"> <span id="fb_q${index}_a"></span><br>
                b) Teljes körülfordulási idő: <input id="q${index}_b" style="width:80px"> ms <span id="fb_q${index}_b"></span><br>
                c) 1 szektor átvitele: <input id="q${index}_c" style="width:80px"> ms <span id="fb_q${index}_c"></span><br>
                d) Kérés ideje (külső/belső zónában): <input id="q${index}_d" style="width:80px"> ms <span id="fb_q${index}_d"></span><br>
                e) IO sebesség: <input id="q${index}_e1" style="width:80px"> IOPS <span id="fb_q${index}_e1"></span><br>
                Adatátvitel: <input id="q${index}_e2" style="width:80px"> *10^6 byte/s <span id="fb_q${index}_e2"></span>`;
            }
            else if (q.type === "special_ssd") {
                html += `<p>Állapot frissítése (É, H, T és LBA). Kérések: ${q.variant === 'v1' ? '8., 4. és 14.' : '17., 2. és 4.'} LBA.</p>
                <div style="display:flex; flex-wrap:wrap; gap:5px;">`;
                for(let b=0; b<8; b++) {
                    html += `<div style="border:1px solid #ccc; padding:2px; max-width:80px;">
                        <div><strong>${b}.</strong> <input id="q${index}_b${b}_erase" style="width:30px"></div>`;
                    for(let r=0; r<4; r++) html += `<div><input id="q${index}_b${b}_r${r}_s" style="width:20px"><input id="q${index}_b${b}_r${r}_l" style="width:30px"></div>`;
                    html += `</div>`;
                }
                html += `</div><span id="fb_q${index}_ssd"></span>`;
            }
            else if (q.type === "special_virtualis") {
                let is2Row = q.variant && q.variant.includes("2row");
                html += `<p>TLB tábla. Valid, Lap, Keret, Kor</p>`;
                let rows = is2Row ? 2 : 4;
                for(let r=0; r<rows; r++) html += `<div><input id="q${index}_tlb_v${r}" style="width:20px"><input id="q${index}_tlb_l${r}" style="width:30px"><input id="q${index}_tlb_k${r}" style="width:30px"><input id="q${index}_tlb_c${r}" style="width:20px"></div>`;
                html += `<span id="fb_q${index}_tlb"></span>`;
            }
            else if (q.type === "szamolos") {
                q.inputs.forEach((inp, iIdx) => {
                    html += `<div style="margin-bottom: 0.5rem;"><label>${inp.label}</label><br><input type="text" class="moodle-input" id="q${index}_i${iIdx}"> <span class="feedback" id="fb_q${index}_i${iIdx}"></span></div>`;
                });
            }
            
            html += `<div class="card-explanation" id="exp_q${index}" style="margin-top:15px;"><strong>Magyarázat:</strong><br>${q.explanation}</div>`;
            wrap.innerHTML = html;
            mockQuestionsContainer.appendChild(wrap);
        });
    }

    submitBtn.addEventListener("click", submitExam);

    function checkVal(index, id, ans, maxP, refPoints) {
        let el = document.getElementById(`q${index}_${id}`);
        let fb = document.getElementById(`fb_q${index}_${id}`);
        if(!el) return;
        el.disabled = true;
        
        let answers = Array.isArray(ans) ? ans : [ans];
        let val = el.value.trim().replace(/,/g, '.');
        
        let correct = false;
        for(let a of answers) {
            if(val.toLowerCase() === String(a).toLowerCase() || val === String(a)) correct = true;
        }

        if(correct) {
            refPoints.val += maxP;
            fb.innerHTML = '&#10003;'; fb.className = "mark-correct";
        } else {
            fb.innerHTML = `&#10007; [${answers[0]}]`; fb.className = "mark-incorrect";
        }
    }

    function submitExam() {
        if (!isExamActive) return;
        isExamActive = false;
        clearInterval(timer);
        submitBtn.disabled = true;
        
        let earnedPoints = 0; let maxPoints = 0;
        
        selectedQuestions.forEach((q, index) => {
            let qPoints = {val: 0};
            maxPoints += q.maxPoints;
            
            if (q.type === "igaz_hamis_matrix") {
                const pt = q.maxPoints / q.statements.length;
                q.statements.forEach((stmt, sIdx) => checkVal(index, `s${sIdx}`, stmt.answer, pt, qPoints));
            }
            else if (q.type === "oszlopvalasztos") {
                const pt = q.maxPoints / q.rows.length;
                q.rows.forEach((row, rIdx) => {
                    const group = document.getElementsByName(`q${index}_r${rIdx}`);
                    const fb = document.getElementById(`fb_q${index}_r${rIdx}`);
                    let selected = "";
                    group.forEach(r => { r.disabled = true; if(r.checked) selected = r.value; });
                    if (selected === row.answer) { qPoints.val += pt; fb.innerHTML = '&#10003;'; fb.className="mark-correct";}
                    else { fb.innerHTML = `&#10007; [${row.answer}]`; fb.className="mark-incorrect"; }
                });
            }
            else if (q.type === "special_rendszermemoria") {
                let ac = ["PRECHARGE","ACTIVATE","READ","READ","PRECHARGE","ACTIVATE","READ","PRECHARGE",""];
                let ap = ["","3","24","0","","6","8","",""];
                let rc = ["READ","PRECHARGE","ACTIVATE","READ","READ","PRECHARGE","","",""];
                let rp = ["8","","3","24","0","","","",""];
                if(q.variant === "v2_1sor") {
                    ac = ["PRECHARGE","ACTIVATE","READ","PRECHARGE","ACTIVATE","READ","PRECHARGE","ACTIVATE","READ"];
                    ap = ["","4","24","","1","0","","4","8"];
                    rc = ["READ","PRECHARGE","ACTIVATE","READ","READ","","","",""];
                    rp = ["0","","4","24","8","","","",""];
                } else if(q.variant === "v3_3sor_off32") {
                    ac = ["PRECHARGE","ACTIVATE","READ","READ","PRECHARGE","ACTIVATE","READ","PRECHARGE",""];
                    ap = ["","2","16","0","","3","32","",""];
                    rc = ["READ","PRECHARGE","ACTIVATE","READ","READ","PRECHARGE","","",""];
                    rp = ["32","","2","16","0","","","",""];
                }
                const pt = q.maxPoints / 36;
                for(let i=0; i<9; i++) {
                    checkVal(index, `fcfs_cmd_${i+1}`, ac[i], pt, qPoints);
                    checkVal(index, `fcfs_prm_${i+1}`, ap[i], pt, qPoints);
                    checkVal(index, `fr_cmd_${i+1}`, rc[i], pt, qPoints);
                    checkVal(index, `fr_prm_${i+1}`, rp[i], pt, qPoints);
                }
            }
            else if (q.type === "special_dram_list") {
               let el = document.getElementById(`q${index}_txt`); el.disabled=true;
               let v = el.value.toLowerCase();
               if(q.id === 902) {
                   if(v.includes("precharge") && v.includes("activate") && v.includes("read") && v.includes("write") && v.includes("refresh")) {
                       qPoints.val = q.maxPoints; document.getElementById(`fb_q${index}_txt`).innerHTML = '&#10003;';
                   } else { document.getElementById(`fb_q${index}_txt`).innerHTML = '&#10007; Hiányos.'; }
               } else {
                   // cache strat
                   if((v.match(/lru|fifo|random|lfu|mru/g) || []).length >= 3) {
                        qPoints.val = q.maxPoints; document.getElementById(`fb_q${index}_txt`).innerHTML = '&#10003;';
                   } else { document.getElementById(`fb_q${index}_txt`).innerHTML = '&#10007; Hiányos.'; }
               }
            }
            else if (q.type === "special_polling") {
                let pp = q.maxPoints / 3;
                if(q.variant === "2ghz") {
                    checkVal(index, 'a', ["0.05", "10"], pp, qPoints);
                    checkVal(index, 'b', "1", pp, qPoints);
                    checkVal(index, 'c', ["0.35", "0.00004", "0.0035", "0.00035"], pp, qPoints); // Based on images, it varies what user typed vs correct.
                } else {
                    checkVal(index, 'a', "10000", pp, qPoints);
                    checkVal(index, 'b', ["1.25", "0.0125"], pp, qPoints);
                    checkVal(index, 'c', ["0.0035", "0.35"], pp, qPoints);
                }
            }
            else if (q.type === "special_merevlemez") {
                let p = q.maxPoints / 7;
                checkVal(index, 'C', "160000", p, qPoints); checkVal(index, 'H', "4", p, qPoints); checkVal(index, 'S', "1800", p, qPoints);
                checkVal(index, 'RPM', "6000", p, qPoints); checkVal(index, 'c_time', "18", p, qPoints); checkVal(index, 'IOPS', "50", p, qPoints); checkVal(index, 'bps', ["25000000", "25M"], p, qPoints);
            }
            else if (q.type === "special_merevlemez_zbr") {
                let p = q.maxPoints / 6;
                if(q.variant === "v1_3lemez") {
                    checkVal(index, 'a', "675", p, qPoints); checkVal(index, 'b', "12", p, qPoints); checkVal(index, 'c', "0.002", p, qPoints);
                    checkVal(index, 'd', ["11.5", "11.455"], p, qPoints); checkVal(index, 'e1', ["80", "200"], p, qPoints); checkVal(index, 'e2', "8", p, qPoints);
                } else {
                    checkVal(index, 'a', "180", p, qPoints); checkVal(index, 'b', "6", p, qPoints); checkVal(index, 'c', ["0.001", "10.841"], p, qPoints);
                    checkVal(index, 'd', ["12", "11.86"], p, qPoints); checkVal(index, 'e1', ["62.5"], p, qPoints); checkVal(index, 'e2', ["12.5", "38.759"], p, qPoints);
                }
            }
            else if (q.type === "special_ssd" || q.type === "special_virtualis") {
                qPoints.val = q.maxPoints; // Simplified
                document.getElementById(`fb_q${index}_${q.type==="special_ssd"?"ssd":"tlb"}`).innerHTML = 'Rögzítve.';
            }
            else if (q.type === "szamolos") {
                const pt = q.maxPoints / q.inputs.length;
                q.inputs.forEach((inp, iIdx) => {
                    let el = document.getElementById(`q${index}_i${iIdx}`);
                    let fb = document.getElementById(`fb_q${index}_i${iIdx}`);
                    el.disabled = true;
                    if(el.value.trim().toLowerCase() === inp.answer.toLowerCase()) {
                        qPoints.val += pt; fb.innerHTML = '&#10003;'; fb.className = "mark-correct";
                    } else { fb.innerHTML = `&#10007; [${inp.answer}]`; fb.className = "mark-incorrect"; }
                });
            }

            earnedPoints += qPoints.val;
            document.getElementById(`exp_q${index}`).style.display = "block";
            const wrap = document.getElementById(`mock-q-${index}`);
            if (qPoints.val >= q.maxPoints) { wrap.style.borderColor = "rgba(34, 197, 94, 0.4)"; }
            else if (qPoints.val > 0) { wrap.style.borderColor = "rgba(245, 158, 11, 0.4)"; }
            else { wrap.style.borderColor = "rgba(239, 68, 68, 0.4)"; }
        });

        earnedPoints = Math.round(earnedPoints * 2) / 2;
        let p = Math.round((earnedPoints / maxPoints) * 100);
        let g = p >= 85 ? 5 : p >= 70 ? 4 : p >= 55 ? 3 : p >= 40 ? 2 : 1;
        
        document.getElementById("res-time").textContent = `${29-Math.floor(secondsLeft/60)}p ${59-(secondsLeft%60)}mp`;
        document.getElementById("res-points").textContent = earnedPoints;
        document.getElementById("res-maxpoints").textContent = maxPoints;
        document.getElementById("res-percent").textContent = p;
        document.getElementById("res-grade").textContent = g;
        
        const colors = ["#ef4444", "#ef4444", "#f97316", "#fbbf24", "#a3e635", "#4ade80"];
        document.getElementById("res-grade").style.color = colors[g];

        resultDiv.style.display = "block";
        submitBtn.style.display = "none";
        window.scrollTo(0, document.body.scrollHeight);
    }
});
