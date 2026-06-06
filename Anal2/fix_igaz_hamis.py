import glob
import re

files = glob.glob('vizsga_*.html')
badge = '<strong style="color: #4ade80; background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 8px; margin-left: 10px; border: 1px solid rgba(74, 222, 128, 0.4); font-size: 1.05rem; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(74,222,128,0.2);">✓ HELYES MEGOLDÁS</strong>'

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace for Igaz, Hamis, I, H
    content = content.replace(f' Igaz {badge}', ' Igaz')
    content = content.replace(f' Hamis {badge}', ' Hamis')
    content = content.replace(f' I {badge}', ' I')
    content = content.replace(f' H {badge}', ' H')
    content = content.replace(f' Igaz (I) {badge}', ' Igaz (I)')
    content = content.replace(f' Hamis (H) {badge}', ' Hamis (H)')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Fixed Igaz/Hamis in {len(files)} files.")
