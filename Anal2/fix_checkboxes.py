import glob
import os

files = glob.glob('vizsga_*.html')
for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add badge
    content = content.replace('<b>(Helyes)</b>', '<strong style="color: #4ade80; background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 8px; margin-left: 10px; border: 1px solid rgba(74, 222, 128, 0.4); font-size: 1.05rem; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(74,222,128,0.2);">✓ HELYES MEGOLDÁS</strong>')
    
    # Make correct checkboxes visible and larger
    content = content.replace('<input type="checkbox" checked disabled>', '<input type="checkbox" checked onclick="return false;" style="accent-color: #4ade80; transform: scale(1.4); margin-right: 12px; cursor: default;">')
    
    # Make incorrect checkboxes larger but still disabled/dimmed
    content = content.replace('<input type="checkbox" disabled>', '<input type="checkbox" disabled style="transform: scale(1.4); margin-right: 12px; opacity: 0.5;">')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(files)} files.")
