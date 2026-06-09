import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Extract from s11 to the end of s13
m = re.search(r'(<section id="s11">.*?</section>).*?(<section id="s12">.*?</section>).*?(<section id="s13">.*?</section>)', c, re.DOTALL)
if m:
    print(m.group(1))
    print("---")
    print(m.group(2))
    print("---")
    print(m.group(3))
else:
    print("Not found")
