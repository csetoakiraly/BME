import re

files = ["index.html", "2.html", "3.html", "4.html", "5.html", "6.html", "7.html", "8.html", "9.html", "10.html"]

headers = [
    # 1
    "Gráfelméleti alapfogalmak: <b>gráf, egyszerű gráf,</b> komplementer gráf, <b>izomorfia, részgráf,</b> feszített részgráf, élsorozat, séta, <b>út, kör, összefüggő gráf,</b> (összefüggő) komponens. A legrövidebb út feladat nemnegatív élsúlyokkal, <b>Dijkstra algoritmusa</b>.",
    # 2
    "Becslés összefüggő gráf, illetve körmentes gráf éleinek számára. <b>Fa fogalma,</b> fák egyszerű tulajdonságai. <b>Feszítőfa fogalma,</b> annak létezése. <b>Szélességi bejárás (BFS),</b> annak lépésszáma, BFS-fa.",
    # 3
    "<b>Hamilton-körök és -utak.</b> Szükséges feltétel Hamilton-kör/-út létezésére. Elégséges feltételek: Dirac és Ore tétele. <b>Euler-séták és -körséták,</b> ezek létezésének szükséges és elégséges feltétele.",
    # 4
    "Gráfok színezése, <b>$\\chi(G)$ és $\\omega(G)$ fogalma.</b> Reláció $\\chi(G)$ és $\\omega(G)$ között, $\\chi(G)$ lehetséges értékei olyan gráfokra, amikre $\\omega(G) = 2$. Mohó színezés. $\\chi(G)$ viszonya $\\Delta(G)$-hez. Intervallumgráfok, algoritmus ezek optimális színezésére. <b>Páros gráf fogalma,</b> kapcsolat a páratlan körökkel.",
    # 5
    "<b>Párosítás fogalma. Független élhalmaz, lefogó élhalmaz, független ponthalmaz, lefogó ponthalmaz,</b> illetve <b>$\\nu(G), \\rho(G), \\alpha(G)$ és $\\tau(G)$ fogalmai,</b> ezek egymással való kapcsolatai. Gallai tétele.",
    # 6
    "Párosítások páros gráfban, <b>a javítóutas algoritmus, Kőnig, Hall</b> és Frobenius tételei.",
    # 7
    "Teljes párosítás létezése reguláris páros gráfban. Gráfok élszínezése, <b>$\\chi_e(G)$ fogalma és viszonya $\\Delta(G)$-hez.</b> Vizing-tétel (biz. nélkül), Kőnig tétele a páros gráfok élkromatikus számáról.",
    # 8
    "Hálózat, <b>folyam és st-vágás fogalma, folyam értéke, vágás kapacitása. Algoritmus maximális folyam és minimális vágás megkeresésére, Ford-Fulkerson tétel,</b> Edmonds-Karp tétel (biz. nélkül). Egészértékűségi lemma.",
    # 9
    "A folyamprobléma általánosításai. <b>Menger pontpárok közötti éldiszjunkt és pontdiszjunkt utak létezésére vonatkozó tételei irányított és irányítatlan gráfban</b> (a pontdiszjunkt esetekben bizonyítás nélkül), <b>$\\lambda_G(s, t)$ és $\\kappa_G(s, t)$</b> fogalma. Éldiszjunkt utak létezésének eldöntése (irányított és irányítatlan gráfban) folyamok segítségével.",
    # 10
    "<b>Többszörös összefüggőség és élösszefüggőség,</b> illetve <b>$\\kappa(G)$ és $\\lambda(G)$</b> fogalma, Menger ezekre vonatkozó tételei (a pontösszefüggőség és $\\kappa(G)$ esetében bizonyítás nélkül). Minimális összsúlyú feszítőfa, <b>Kruskal algoritmusa</b>."
]

for idx, file in enumerate(files):
    path = f"/Users/danielcseto/Desktop/BME/BSz2/{file}"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_header_html = f'<h3 class="text-indigo-700 dark:text-indigo-400 mb-2">{headers[idx]}</h3>'
    # Use lambda to avoid backslash escaping issues
    content = re.sub(r'<h3 class="text-indigo-700 dark:text-indigo-400 mb-2">.*?</h3>', lambda m: new_header_html, content, flags=re.DOTALL)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file}")
