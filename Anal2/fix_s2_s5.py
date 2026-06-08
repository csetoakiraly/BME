with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Delete broken chunks
def find_and_delete(start_marker, end_marker):
    start_idx = -1
    end_idx = -1
    for i, line in enumerate(lines):
        if start_marker in line:
            start_idx = i
        if start_idx != -1 and end_marker in line and i > start_idx:
            end_idx = i
            break
    if start_idx != -1 and end_idx != -1:
        del lines[start_idx:end_idx+1]
        return True
    return False

# Delete broken section 2 block
find_and_delete("<h3>4. Helyettesítéssel megoldható differenciálegyenletek</h3>", "</div>\n")
# Delete broken section 5 block
find_and_delete("<h3>6. Sorok alaptulajdonságai</h3>", "</div>\n")

# 2. Insert corrected chunks
def insert_before(target_marker, chunk):
    for i, line in enumerate(lines):
        if target_marker in line:
            # Step back to find the closing tags of previous section
            for j in range(i-1, 0, -1):
                if "</section>" in lines[j]:
                    lines.insert(j - 1, chunk)
                    return True
    return False

chunk_s2 = r"""
                <h3>4. Helyettesítéssel megoldható differenciálegyenletek</h3>
                <p>Bizonyos típusú egyenleteket ügyes helyettesítéssel azonnal szétválaszthatóvá tehetünk:</p>
                
                <p><b>Az $y' = F\left(\frac{y}{x}\right)$ típus:</b></p>
                <p>Ha a függvény csak az $\frac{y}{x}$ hányadostól függ (például $y' = \frac{y^2+x^2}{xy} = \frac{y}{x} + \frac{x}{y}$), akkor a következő helyettesítést alkalmazzuk:</p>
                <div class="formula">
                    $$ u(x) := \frac{y(x)}{x} \implies y(x) = u(x) \cdot x $$
                </div>
                <p>Deriválva a szorzatszabállyal: $y' = u'x + u$. Ezt visszahelyettesítve a kapott egyenlet <b>mindig szeparálható</b> $u$-ra nézve:</p>
                <div class="formula">
                    $$ u' \cdot x + u = F(u) \implies u' = (F(u) - u)\frac{1}{x} $$
                </div>
                
                <p><b>Az $y' = F(ax + by(x))$ típus:</b></p>
                <p>Ha a kifejezés egy lineáris kombináció függvénye (például $y' = \sin(x+y)$ vagy $y' = (2x+3y)^2$), akkor a belső kifejezést helyettesítjük:</p>
                <div class="formula">
                    $$ u(x) := ax + by(x) \implies u' = a + by' \implies y' = \frac{1}{b}(u' - a) $$
                </div>
                <p>Ezt visszahelyettesítve ismét <b>szeparálható</b> egyenletet kapunk $u$-ra nézve:</p>
                <div class="formula">
                    $$ \frac{1}{b}(u' - a) = F(u) \implies u' = bF(u) + a $$
                </div>
"""

chunk_s5 = r"""
                <h3>6. Sorok alaptulajdonságai</h3>
                <p>Ha a $\sum a_n$ és $\sum b_n$ sorok konvergensek, akkor az összegük és skalárszorosuk is konvergens, és a műveletek tagonként elvégezhetők:</p>
                <div class="formula">
                    $$ \sum_{n=0}^{\infty}(a_n + b_n) = \sum_{n=0}^{\infty}a_n + \sum_{n=0}^{\infty}b_n \quad \text{és} \quad \sum_{n=0}^{\infty}\lambda a_n = \lambda \sum_{n=0}^{\infty}a_n $$
                </div>
                
                <h3>7. Majoráns és Minoráns kritérium</h3>
                <p><b>Majoráns kritérium:</b> Ha létezik egy ismert <b>konvergens</b> $\sum b_n$ sor, amely minden tagnál nagyobb, akkor az alatta lévő $\sum a_n$ is konvergens (ha a tagok nemnegatívak).</p>
                <div class="formula">
                    $$ \text{Ha } 0 \le a_n \le b_n \text{ és } \sum b_n \text{ konv.} \implies \sum a_n \text{ is konv.} $$
                </div>
                
                <p><b>Minoráns kritérium:</b> Ha létezik egy ismert <b>divergens</b> $\sum b_n$ sor (pl. harmonikus sor), amely minden tagnál kisebb, akkor a felette lévő $\sum a_n$ is a végtelenbe tart, azaz divergens.</p>
                <div class="formula">
                    $$ \text{Ha } 0 \le b_n \le a_n \text{ és } \sum b_n \text{ div.} \implies \sum a_n \text{ is div.} $$
                </div>
"""

insert_before("<!-- 3. Gyakorlat -->", chunk_s2)
insert_before("<!-- 6. Gyakorlat -->", chunk_s5)

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fixed sections 2 and 5!")
