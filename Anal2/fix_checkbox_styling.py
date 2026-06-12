import re
import glob

files = glob.glob('/Users/danielcseto/Desktop/BME/Anal2/vizsga_2023_*.html') + \
        glob.glob('/Users/danielcseto/Desktop/BME/Anal2/vizsga_2026_*.html')

unchecked_style = '<input type="checkbox" disabled style="transform: scale(1.4); margin-right: 12px; opacity: 0.5;">'
checked_style = '<input type="checkbox" checked onclick="return false;" style="accent-color: #4ade80; transform: scale(1.4); margin-right: 12px; cursor: default;">'
badge_style = '<strong style="color: #4ade80; background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 8px; margin-left: 10px; border: 1px solid rgba(74, 222, 128, 0.4); font-size: 1.05rem; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(74,222,128,0.2);">✓ HELYES MEGOLDÁS</strong>'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for unchecked
    content = re.sub(r'<input[^>]*type="checkbox"[^>]*disabled(?!.*checked)[^>]*>', unchecked_style, content)
    # Wait, negative lookahead in regex is tricky inside tags. Let's just do exact string matches or simpler regex.
    # We'll just replace the standard variants:
    content = re.sub(r'<input\s+type="checkbox"\s+disabled>', unchecked_style, content)
    content = re.sub(r'<input\s+disabled\s+type="checkbox">', unchecked_style, content)
    
    # Replacements for checked
    content = re.sub(r'<input\s+type="checkbox"\s+checked\s+disabled>', checked_style, content)
    content = re.sub(r'<input\s+type="checkbox"\s+disabled\s+checked>', checked_style, content)
    content = re.sub(r'<input\s+checked\s+disabled\s+type="checkbox">', checked_style, content)
    content = re.sub(r'<input\s+disabled\s+checked\s+type="checkbox">', checked_style, content)
    # If some subagent forgot disabled on checked:
    content = re.sub(r'<input\s+type="checkbox"\s+checked>', checked_style, content)

    # Replacements for badge
    content = content.replace('<b>(Helyes)</b>', badge_style)
    content = content.replace('<strong>(Helyes)</strong>', badge_style)
    content = content.replace('(Helyes)', badge_style)
    # Some might have added a space or different capitalization
    content = content.replace('<b>(helyes)</b>', badge_style)
    
    # Just in case some have multiple badges stacked:
    content = content.replace(badge_style + badge_style, badge_style)
    content = content.replace(badge_style + ' ' + badge_style, badge_style)

    # Clean up double badges if " (Helyes)" was replaced and "<b>(Helyes)</b>" was also replaced:
    # Actually just run the replacement safely:
    # Let's revert and do regex for the badge to be safe:
    content = re.sub(r'<\/?b>\(Helyes\)<\/?b>', badge_style, content, flags=re.IGNORECASE)
    content = re.sub(r'<\/?strong>\(Helyes\)<\/?strong>', badge_style, content, flags=re.IGNORECASE)
    # Also replace raw (Helyes) if it wasn't wrapped
    content = re.sub(r'\(Helyes\)', badge_style, content, flags=re.IGNORECASE)
    
    # Fix double badge replacements
    content = content.replace(f'<b>{badge_style}</b>', badge_style)
    content = content.replace(f'<strong>{badge_style}</strong>', badge_style)
    # Remove any extra badge next to badge
    content = re.sub(rf'{re.escape(badge_style)}\s*{re.escape(badge_style)}', badge_style, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filepath}")
