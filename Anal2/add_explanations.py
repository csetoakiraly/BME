import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Fourier-sor formális definíciója explanation
old_13_1 = r"""<p>Az $(\Phi_n(f))_{n\in\mathbb{N}}$ függvénysort az $f$ függvény <b>Fourier-sorának</b> nevezzük, amelynek "végtelen" határértékét így jelöljük:</p>
                <div class="formula">
                    $$f(x) \sim \frac{a_0(f)}{2} + \sum_{k=1}^\infty \left( a_k(f) \cos(kx) + b_k(f) \sin(kx) \right)$$
                </div>"""
new_13_1 = r"""<p>Az $(\Phi_n(f))_{n\in\mathbb{N}}$ függvénysort az $f$ függvény <b>Fourier-sorának</b> nevezzük, amelynek "végtelen" határértékét így jelöljük:</p>
                <div class="formula">
                    $$f(x) \sim \frac{a_0(f)}{2} + \sum_{k=1}^\infty \left( a_k(f) \cos(kx) + b_k(f) \sin(kx) \right)$$
                </div>
                <div class="explanation">
                    <b>Mi az a Riemann-integrálható?</b> Egy matematikai "biztonsági háló". Azt jelenti, hogy a görbe alatti terület egyáltalán kiszámolható, így kizárja a teljesen értelmetlen, extrém módon szakadozott (ún. "beteg") függvényeket.
                </div>"""
c = c.replace(old_13_1, new_13_1)

# 2. Integráltranszformáció explanation
old_11_4 = r"""<div class="explanation">
                    <b>Mi ez a determináns?</b> A $\det \underline{g}'(u,v)$ nem más, mint a <b>Jacobi-determináns</b>, amely a terület lokális torzulását mutatja meg az új koordinátarendszerben. Ennek abszolút értékével <b>kötelező</b> beszorozni az integrálandó függvényt! A legismertebb ilyen transzformáció a polárkoordinátás áttérés.
                </div>"""
new_11_4 = r"""<div class="explanation">
                    <b>Mi ez a determináns?</b> A $\det \underline{g}'(u,v)$ nem más, mint a <b>Jacobi-determináns</b>, amely a terület lokális torzulását mutatja meg az új koordinátarendszerben. Ennek abszolút értékével <b>kötelező</b> beszorozni az integrálandó függvényt!<br><br>
                    <b>Mi az a Jordan-mérhető?</b> Azt jelenti, hogy a tartománynak van rendes, kiszámítható területe (nincsenek benne például fraktálszerű, végtelenül sűrű lyukak).
                </div>"""
c = c.replace(old_11_4, new_11_4)

# 3. Dirichlet-tétel explanation
old_13_4 = r"""<p><b>A tétel szigorú feltétele:</b> Tegyük fel, hogy a $[-\pi, \pi]$ intervallum felbontható <i>véges sok</i> olyan részintervallumra, amelyek belsejében az $f$ függvény <b>monoton és korlátos</b>. Ekkor a Fourier-sor minden $x \in \mathbb{R}$ pontban konvergens.</p>"""
new_13_4 = r"""<p><b>A tétel szigorú feltétele:</b> Tegyük fel, hogy a $[-\pi, \pi]$ intervallum felbontható <i>véges sok</i> olyan részintervallumra, amelyek belsejében az $f$ függvény <b>monoton és korlátos</b>. Ekkor a Fourier-sor minden $x \in \mathbb{R}$ pontban konvergens.</p>
                <div class="explanation">
                    <b>Mit jelent a feltétel konyhanyelven?</b> Ez a szabály csak annyit követel meg, hogy a függvény a szakadások körül ne rezegjen fel-le végtelenül sűrűn (mint egy meghibásodott műszer). Ha rendesen fel tudod rajzolni a függvényt a papírra, akkor biztosan működni fog rajta a tétel.
                </div>"""
c = c.replace(old_13_4, new_13_4)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print("Explanations added successfully.")
