import os
import glob

html_files = glob.glob('*.html')
nav_item_to_insert = '\n                <a class="nav-item" href="algoritmusok.html"><span class="font-bold text-sm">Algoritmusok (Összefoglaló)</span></a>'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'href="algoritmusok.html"' not in content:
        # We look for the puska.html link and insert right after the </a>
        target_string = '<a class="nav-item" href="puska.html"><span class="font-bold text-sm">Puska (Képletek, Tételek)</span></a>'
        if target_string in content:
            content = content.replace(target_string, target_string + nav_item_to_insert)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file}")
        else:
            print(f"Target string not found in {file}")
    else:
        print(f"Already contains link: {file}")

print("Done updating navigation menus.")
