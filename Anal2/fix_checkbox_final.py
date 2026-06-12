import glob

files = glob.glob('/Users/danielcseto/Desktop/BME/Anal2/vizsga_2023_*.html') + \
        glob.glob('/Users/danielcseto/Desktop/BME/Anal2/vizsga_2026_*.html')

unchecked_style = '<input type="checkbox" disabled style="transform: scale(1.4); margin-right: 12px; opacity: 0.5;">'
checked_style = '<input type="checkbox" checked onclick="return false;" style="accent-color: #4ade80; transform: scale(1.4); margin-right: 12px; cursor: default;">'
badge_marker = 'HELYES MEGOLDÁS'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = content.split('<input')
    new_parts = [parts[0]]
    for part in parts[1:]:
        end_tag_idx = part.find('>')
        if end_tag_idx != -1:
            rest_of_text = part[end_tag_idx+1:]
            
            boundary_idx = len(rest_of_text)
            for boundary in ['<input', '</li>', '</span>']:
                idx = rest_of_text.find(boundary)
                if idx != -1 and idx < boundary_idx:
                    boundary_idx = idx
            
            segment_to_check = rest_of_text[:boundary_idx]
            
            if badge_marker in segment_to_check:
                new_parts.append(checked_style[6:] + rest_of_text)
            else:
                new_parts.append(unchecked_style[6:] + rest_of_text)
        else:
            new_parts.append(part)
            
    content = '<input'.join(new_parts)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filepath}")
