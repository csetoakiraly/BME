with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Bad chunk 1 (Section 2 leftover)
bad_chunk_1 = """        
                <p>Deriválva a szorzatszabállyal: $y' = u'x + u$. Ezt visszahelyettesítve a kapott egyenlet <b>mindig szeparálható</b> $u$-ra nézve:</p>
                <div class="formula">
                    $$ u' \cdot x + u = F(u) \implies u' = (F(u) - u)\x0crac{1}{x} $$
                </div>
                
                <p><b>Az $y' = F(ax + by(x))$ típus:</b></p>
                <p>Ha a kifejezés egy lineáris kombináció függvénye (például $y' = \sin(x+y)$ vagy $y' = (2x+3y)^2$), akkor a belső kifejezést helyettesítjük:</p>
                <div class="formula">
                    $$ u(x) := ax + by(x) \implies u' = a + by' \implies y' = \x0crac{1}{b}(u' - a) $$
                </div>
                <p>Ezt visszahelyettesítve ismét <b>szeparálható</b> egyenletet kapunk $u$-ra nézve:</p>
                <div class="formula">
                    $$ \x0crac{1}{b}(u' - a) = F(u) \implies u' = bF(u) + a $$
                </div>"""

# Bad chunk 2 (Section 5 leftover)
bad_chunk_2 = """        
                
                <h3>7. Majoráns és Minoráns kritérium</h3>
                <p><b>Majoráns kritérium:</b> Ha létezik egy ismert <b>konvergens</b> $\sum b_n$ sor, amely minden tagnál nagyobb, akkor az alatta lévő $\sum a_n$ is konvergens (ha a tagok nemnegatívak).</p>
                <div class="formula">
                    $$ \text{Ha } 0 \le a_n \le b_n \text{ és } \sum b_n \text{ konv.} \implies \sum a_n \text{ is konv.} $$
                </div>
                
                <p><b>Minoráns kritérium:</b> Ha létezik egy ismert <b>divergens</b> $\sum b_n$ sor (pl. harmonikus sor), amely minden tagnál kisebb, akkor a felette lévő $\sum a_n$ is a végtelenbe tart, azaz divergens.</p>
                <div class="formula">
                    $$ \text{Ha } 0 \le b_n \le a_n \text{ és } \sum b_n \text{ div.} \implies \sum a_n \text{ is div.} $$
                </div>"""

# Since the \text and \frac got corrupted to \x0c, \x09 etc, we will use regex to just clear everything between </section> and <!-- X. Gyakorlat --> for those specific ones.

import re

# Fix section 2 -> 3 gap
content = re.sub(r'</section>\s+<p>Deriválva a szorzatszabállyal.*?</p>.*?</div>\s+<!-- 3\. Gyakorlat -->', r'</section>\n\n        <!-- 3. Gyakorlat -->', content, flags=re.DOTALL)

# Fix section 5 -> 6 gap
content = re.sub(r'</section>\s+<h3>7\. Majoráns és Minoráns kritérium</h3>.*?</div>\s+<!-- 6\. Gyakorlat -->', r'</section>\n\n        <!-- 6. Gyakorlat -->', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up leftovers!")
