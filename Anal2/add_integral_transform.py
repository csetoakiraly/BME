import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_block = r"""
                <h3>4. Általános Integráltranszformáció</h3>
                <p>Ha egy $\underline{g}(u,v) = (x(u,v), y(u,v))$ folytonosan differenciálható, injektív leképezéssel áttérünk új változókra, akkor az integrálást a következőképpen végezhetjük el:</p>
                <div class="formula">
                    $$ \iint_{g(H)} f(x,y) dx dy = \iint_H f(\underline{g}(u,v)) \cdot |\det \underline{g}'(u,v)| du dv $$
                </div>
                <div class="explanation">
                    <b>Mi ez a determináns?</b> A $\det \underline{g}'(u,v)$ nem más, mint a <b>Jacobi-determináns</b>, amely a terület lokális torzulását mutatja meg az új koordinátarendszerben. Ennek abszolút értékével <b>kötelező</b> beszorozni az integrálandó függvényt! A legismertebb ilyen transzformáció a polárkoordinátás áttérés.
                </div>
                
                <h3>5. Polárkoordinátás transzformáció</h3>"""

# Find "<h3>4. Polárkoordinátás transzformáció</h3>" and replace it
content = content.replace("<h3>4. Polárkoordinátás transzformáció</h3>", new_block)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added integral transform theorem to Section 11.")
