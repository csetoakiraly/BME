import re
import os

def fix_proofs(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all <math-proof>...</math-proof> blocks
    # We will replace <math-proof>\n<p>...</p>\n</math-proof> with a nice div wrapper
    
    def replacer(match):
        inner_content = match.group(1).strip()
        # If it already has the div class="relative p-8 md:p-12...", skip it
        if "relative p-8 md:p-12" in inner_content:
            return match.group(0)
            
        # Clean up <p> and </p> if they wrap the whole content simply
        if inner_content.startswith("<p>") and inner_content.endswith("</p>"):
            inner_content = inner_content[3:-4].strip()
            
        # Also clean up <br><br> to just be multiple <p> tags
        parts = inner_content.split("<br><br>")
        formatted_content = "\n".join([f'<p class="text-sm md:text-base leading-relaxed mb-4">{p.strip()}</p>' for p in parts])

        template = f"""<math-proof>
<div class="relative p-8 md:p-12 bg-white dark:bg-slate-900/40 rounded-[3rem] border-2 border-rose-100 dark:border-rose-900/30 shadow-sm overflow-hidden mt-6">
<div class="absolute top-0 right-0 p-8 opacity-5">
<svg class="w-24 h-24 text-rose-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<h4 class="font-black text-rose-600 dark:text-rose-400 uppercase text-xs tracking-[0.3em] mb-8 flex items-center gap-3">
<span class="w-8 h-[2px] bg-rose-500"></span>
    Bizonyítás
</h4>
<div class="space-y-4 text-slate-700 dark:text-slate-300">
{formatted_content}
</div>
</div>
</math-proof>"""
        return template

    new_content = re.sub(r'<math-proof>(.*?)</math-proof>', replacer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

fix_proofs('/Users/danielcseto/Desktop/BME/BSz2/9.html')
fix_proofs('/Users/danielcseto/Desktop/BME/BSz2/10.html')
