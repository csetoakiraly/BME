import os
import glob
import re

html_files = glob.glob('/Users/danielcseto/Desktop/BME/Anal2/*.html')
html_files += glob.glob('/Users/danielcseto/Desktop/BME/Anal2/anal-gyakorlatok/*.html')

new_exams_section = """        <div style="padding: 20px 25px 5px 25px; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 10px;">Vizsgák</div>
        <div style="padding: 10px 25px 5px 25px; font-size: 0.75rem; color: #a855f7; font-weight: bold; text-transform: uppercase;">2026 Tavasz</div>
        <a href="vizsga_2026_1.html" style="color: #fca5a5;">📝 2026. Vizsga 1</a>
        <a href="vizsga_2026_2.html" style="color: #fca5a5;">📝 2026. Vizsga 2</a>
        <a href="vizsga_2026_3.html" style="color: #fca5a5;">📝 2026. Vizsga 3</a>
        <div style="padding: 10px 25px 5px 25px; font-size: 0.75rem; color: #a855f7; font-weight: bold; text-transform: uppercase;">2025 Tavasz</div>
        <a href="vizsga_2025_1.html" style="color: #38bdf8;">📝 2025. Vizsga 1</a>
        <a href="vizsga_2025_2.html" style="color: #38bdf8;">📝 2025. Vizsga 2</a>
        <a href="vizsga_2025_3.html" style="color: #38bdf8;">📝 2025. Vizsga 3</a>
        <a href="vizsga_2025_4.html" style="color: #38bdf8;">📝 2025. Vizsga 4</a>
        <div style="padding: 10px 25px 5px 25px; font-size: 0.75rem; color: #a855f7; font-weight: bold; text-transform: uppercase;">2024 Tavasz</div>
        <a href="vizsga_2024_1.html" style="color: #60a5fa;">📝 2024. Vizsga 1</a>
        <a href="vizsga_2024_2.html" style="color: #60a5fa;">📝 2024. Vizsga 2</a>
        <a href="vizsga_2024_3.html" style="color: #60a5fa;">📝 2024. Vizsga 3</a>
        <a href="vizsga_2024_4.html" style="color: #60a5fa;">📝 2024. Vizsga 4</a>
        <div style="padding: 10px 25px 5px 25px; font-size: 0.75rem; color: #a855f7; font-weight: bold; text-transform: uppercase;">2023 Tavasz</div>
        <a href="vizsga_2023_1.html" style="color: #818cf8;">📝 2023. Vizsga 1</a>
        <a href="vizsga_2023_2.html" style="color: #818cf8;">📝 2023. Vizsga 2</a>
        <a href="vizsga_2023_3.html" style="color: #818cf8;">📝 2023. Vizsga 3</a>
        <a href="vizsga_2023_4.html" style="color: #818cf8; margin-bottom: 20px;">📝 2023. Vizsga 4</a>
    </div>"""

# Regex pattern to match from the Vizsgák header to the closing </div> of the sidebar.
# Note: we need to be careful to match exactly the sidebar closing div.
# Since it's usually `    </div>\n\n    <div class="main-content">`, we can match until `</div>` that is followed by `main-content`.

pattern = re.compile(r'(\s*<div[^>]*>Vizsgák</div>.*?)(\s*</div>\s*<div class="main-content">)', re.DOTALL)

updated_count = 0
for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub(new_exams_section + r'\2', content)
        
        if new_content != content:
            # We also need to fix paths for files inside anal-gyakorlatok.
            # E.g. href="vizsga_2024_1.html" -> href="../vizsga_2024_1.html"
            if 'anal-gyakorlatok' in filepath:
                # Replace links only in the sidebar section!
                # Wait, it's easier to just do it simply.
                # All these new links are href="vizsga_
                # Let's write the modified new_exams_section for subdirectories
                sub_exams_section = new_exams_section.replace('href="vizsga_', 'href="../vizsga_')
                new_content = pattern.sub(sub_exams_section + r'\2', content)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_count += 1
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print(f"Total files updated: {updated_count}")
