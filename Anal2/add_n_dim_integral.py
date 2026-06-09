import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_block = r"""
                <h3>1. n-dimenziós Normáltartomány (Definíció)</h3>
                <ul>
                    <li><b>1-dimenzióban:</b> Egy zárt intervallum (pl. $[a, b]$).</li>
                    <li><b>(n+1)-dimenzióban:</b> Egy $H \subseteq \mathbb{R}^{n+1}$ halmaz akkor normáltartomány, ha az "alapja" ($H'$) egy $n$-dimenziós normáltartomány, a "magassága" pedig két folytonos függvény, $g(\underline{x})$ és $h(\underline{x})$ közé esik:
                    <div class="formula">$$ H = \{(\underline{x}, y) \in H' \times \mathbb{R} \mid g(\underline{x}) \le y \le h(\underline{x})\} $$</div>
                    </li>
                </ul>

                <h3>2. Integrálás normáltartományon (Fubini-tétel általánosítása)</h3>
                <p>Ha egy $f$ függvény folytonos egy ilyen $H$ normáltartományon, akkor az integrálást felbonthatjuk: először a belső változó ($y$) szerint integrálunk a függvényhatárok között, majd a maradék $n$ változó szerint az alap tartományon ($H'$).</p>
                <div class="formula">
                    $$ \int_H f = \int_{H'} \left( \int_{g(\underline{x})}^{h(\underline{x})} f(\underline{x}, y) \, dy \right) d\underline{x} $$
                </div>
                <div class="explanation">
                    <b>Miért fontos ez?</b> Ez a tétel garantálja, hogy egy bonyolult (pl. 3 vagy 4 dimenziós) test térfogatát mindig visszavezethetjük több, egymásba ágyazott egyváltozós integrálra!
                </div>
                
                <h3>3. Hármas integrál fogalma</h3>"""

# Find "<h3>1. Hármas integrál fogalma</h3>" and replace it
content = content.replace("<h3>1. Hármas integrál fogalma</h3>", new_block)

# Also rename "2." and "3." to "4." and "5." in Section 12
content = content.replace("<h3>2. Hengerkoordináták", "<h3>4. Hengerkoordináták")
content = content.replace("<h3>3. Gömbi koordináták", "<h3>5. Gömbi koordináták")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added n-dim normáltartomány theorem to Section 12.")
