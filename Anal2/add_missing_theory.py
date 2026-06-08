import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Chunk 1: Section 2
chunk_s2 = """
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

# Chunk 2: Section 5
chunk_s5 = """
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

# Chunk 3: Section 13
chunk_s13 = """
                <h3>6. A Fourier-transzformált tulajdonságai</h3>
                <p>A Fourier-transzformált egy lineáris operátor, amelyhez számos hasznos szabály tartozik, melyekkel integrálás nélkül vezethetünk le új transzformáltakat:</p>
                <ul>
                    <li><b>(a) Linearitás:</b> $\mathcal{F}(\alpha f + \beta g) = \alpha \mathcal{F}(f) + \beta \mathcal{F}(g)$</li>
                    <li><b>(b) Időbeli skálázás (nyújtás):</b> Ha az időt $a$-val osztjuk, a frekvencia $a$-val szorzódik és az amplitúdó nő:
                    <div class="formula">$$ \mathcal{F}\left(x \mapsto f\left(\frac{x}{a}\right)\right)(\omega) = |a|\mathcal{F}(f)(a\omega) $$</div>
                    </li>
                    <li><b>(c) Időbeli eltolás:</b> Eltolás az időben egy $e^{-i\omega x_0}$ fázisfordítást (forgatást) okoz a frekvenciatartományban:
                    <div class="formula">$$ \mathcal{F}(x \mapsto f(x - x_0))(\omega) = e^{-i\omega x_0}\mathcal{F}(f)(\omega) $$</div>
                    </li>
                    <li><b>(d) Moduláció (frekvenciatolás):</b> Egy exponenciálissal való szorzás az időtartományban eltolja a spektrumot a frekvenciatartományban:
                    <div class="formula">$$ \mathcal{F}(x \mapsto e^{i\omega_0 x} f(x))(\omega) = \mathcal{F}(f)(\omega - \omega_0) $$</div>
                    </li>
                    <li><b>(e) Szorzás $x$-szel:</b> $x$-szel való szorzás az időben a spektrum deriválását jelenti:
                    <div class="formula">$$ \mathcal{F}(xf(x))(\omega) = i \mathcal{F}(f)'(\omega) $$</div>
                    </li>
                    <li><b>(f) Derivált transzformáltja:</b> A deriválás az időben $i\omega$-val való szorzást jelent a spektrumban:
                    <div class="formula">$$ \mathcal{F}(f')(\omega) = i\omega \mathcal{F}(f)(\omega) $$</div>
                    </li>
                </ul>
"""

content = content.replace(
    '<!-- 3. Gyakorlat -->',
    chunk_s2 + '\n        <!-- 3. Gyakorlat -->'
)

content = content.replace(
    '<!-- 6. Gyakorlat -->',
    chunk_s5 + '\n        <!-- 6. Gyakorlat -->'
)

content = content.replace(
    '<!-- ZH2 Összefoglaló -->',
    chunk_s13 + '\n        <!-- ZH2 Összefoglaló -->'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Insertion complete.")
