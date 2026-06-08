import re

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The section ends at lines 1481-1483. Then there is the corrupted chunk until 1506.
# I will find the corrupted chunk by looking for "<h3>6. A Fourier-transzformált tulajdonságai</h3>" 
# and delete from there until the end of the ul.

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "<h3>6. A Fourier-transzformált tulajdonságai</h3>" in line:
        start_idx = i
    if start_idx != -1 and "</ul>" in line and i > start_idx:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    # Delete the corrupted chunk
    del lines[start_idx:end_idx+1]
    
# Now find where to properly insert it (inside s13 before </div>\n        </section>)
insert_idx = -1
for i, line in enumerate(lines):
    if "<!-- ZH2 Összefoglaló -->" in line:
        # Step back to find the closing tags of s13
        for j in range(i-1, 0, -1):
            if "</section>" in lines[j]:
                insert_idx = j - 1 # before </div>
                break
        break

chunk_s13 = r"""
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

if insert_idx != -1:
    lines.insert(insert_idx, chunk_s13)
    
with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
    
print("Fixed section 13!")
