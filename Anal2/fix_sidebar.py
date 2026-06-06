import glob

files = ['index.html']

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('Hivatalos Definíciók</a>', 'Hivatalos Definíciók (ZH2)</a>')
    content = content.replace('Túlélő Puska</a>', 'Túlélő Puska (ZH2)</a>')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated sidebar in {len(files)} files.")
