import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = r"""                <h3>1. Fourier-sor célja</h3>
                <p>Periodikus függvényeket próbálunk végtelen sok szinusz és koszinusz hullám összegeként felírni. Legyen az $f(x)$ függvény $2\pi$ szerint periodikus.</p>
                <div class="formula">
                    $$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty \left( a_n \cos(nx) + b_n \sin(nx) \right)$$
                </div>

                <h3>2. Együtthatók (Euler-Fourier formulák)</h3>
                <p>Az együtthatókat a függvény megfelelő trigonometrikus taggal való szorzásával és integrálásával kapjuk egy teljes periódusra (pl. $[-\pi, \pi]$):</p>
                <div class="formula" style="text-align: left; padding-left: 40px;">
                    $a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) dx$<br><br>
                    $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) dx \quad (n \ge 1)$<br><br>
                    $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) dx \quad (n \ge 1)$
                </div>"""

new_block = r"""                <h3>1. Fourier-sor formális definíciója</h3>
                <p>Periodikus függvényeket próbálunk szinusz és koszinusz hullámok összegeként felírni. Legyen $f : \mathbb{R} \to \mathbb{R}$ egy $2\pi$ szerint periodikus függvény, amely <b>Riemann-integrálható</b> a $[-\pi, \pi]$ intervallumon.</p>
                <p>Először definiáljuk a véges $n$-edik részletösszeget:</p>
                <div class="formula">
                    $$\Phi_n(f)(x) = \frac{a_0(f)}{2} + \sum_{k=1}^n \left( a_k(f) \cos(kx) + b_k(f) \sin(kx) \right)$$
                </div>
                <p>Az $(\Phi_n(f))_{n\in\mathbb{N}}$ függvénysort az $f$ függvény <b>Fourier-sorának</b> nevezzük, amelynek "végtelen" határértékét így jelöljük:</p>
                <div class="formula">
                    $$f(x) \sim \frac{a_0(f)}{2} + \sum_{k=1}^\infty \left( a_k(f) \cos(kx) + b_k(f) \sin(kx) \right)$$
                </div>

                <h3>2. Együtthatók (Euler-Fourier formulák)</h3>
                <p>Az együtthatókat a függvény megfelelő trigonometrikus taggal való szorzásával és integrálásával kapjuk. A zárójelben lévő $(f)$ jelölés mutatja, hogy ezek az együtthatók az $f$ függvényhez tartoznak:</p>
                <div class="formula" style="text-align: left; padding-left: 40px;">
                    $a_0(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) dx$<br><br>
                    $a_k(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(kx) dx \quad (k \ge 1)$<br><br>
                    $b_k(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(kx) dx \quad (k \ge 1)$
                </div>"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Old block not found!")
