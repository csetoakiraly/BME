import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix Section 2:
# In section 2, the example starts at `<div class="example">\n                    <h3 style="margin-top: 0; color: #f59e0b;">Példa: Elsőrendű lineáris differenciálegyenlet</h3>`
# My new block starts at `<h3>4. Helyettesítéssel megoldható differenciálegyenletek</h3>` and ends before `</div>\n        </section>`
# We want to swap the order of <div class="example">...</div> and <h3>4. Helyettesítéssel...</h3>...</div>
s2_pattern = re.compile(r'(<div class="example">\s*<h3 style="margin-top: 0; color: #f59e0b;">Példa: Elsőrendű lineáris differenciálegyenlet</h3>.*?</div>)\s*(<h3>4\. Helyettesítéssel megoldható differenciálegyenletek</h3>.*?(?:</div>\s*){2})', re.DOTALL)
content = s2_pattern.sub(r'\2\n                \1', content)

# 2. Fix Section 5:
# In section 5, the example starts at `<div class="example">\n                    <h3 style="margin-top: 0; color: #f59e0b;">Példa: Sor konvergenciájának vizsgálata</h3>`
# My new block starts at `<h3>6. Sorok alaptulajdonságai</h3>` and ends before `</div>\n        </section>`
s5_pattern = re.compile(r'(<div class="example">\s*<h3 style="margin-top: 0; color: #f59e0b;">Példa: Sor konvergenciájának vizsgálata</h3>.*?</div>)\s*(<h3>6\. Sorok alaptulajdonságai</h3>.*?(?:</div>\s*){2})', re.DOTALL)
content = s5_pattern.sub(r'\2\n                \1', content)

# 3. Fix Section 13:
# In section 13, the example starts at `<div class="example">\n                    <h3 style="margin-top: 0; color: #f59e0b;">Példa: Fourier-együttható kiszámítása</h3>`
# My new block starts at `<h3>6. A Fourier-transzformált tulajdonságai</h3>` and ends before `</div>\n        </section>`
s13_pattern = re.compile(r'(<div class="example">\s*<h3 style="margin-top: 0; color: #f59e0b;">Példa: Fourier-együttható kiszámítása</h3>.*?</div>)\s*(<h3>6\. A Fourier-transzformált tulajdonságai</h3>.*?</ul>\s*)', re.DOTALL)
content = s13_pattern.sub(r'\2\n                \1', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Reordering complete.")
