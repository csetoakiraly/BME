const fs = require('fs');
const f2023 = JSON.parse(fs.readFileSync('formulas_2023.json', 'utf8'));
const f2024 = JSON.parse(fs.readFileSync('formulas_2024.json', 'utf8'));
const all = [...f2023, ...f2024];

const grouped = {};
all.forEach(item => {
    const key = item.examId || 'Egyéb';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
});

let out = "";
const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$/g;

for (const [examId, items] of Object.entries(grouped)) {
    if (examId !== 'vizsga-3-2023' && examId !== 'vizsga-24-3') continue;
    
    out += `\n=== ${examId} ===\n`;
    items.forEach((item, index) => {
        let deriv = item.derivation.replace(/\\\\/g, '\\');
        let safeDeriv = deriv.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        let match;
        let allMaths = [];
        while ((match = regex.exec(safeDeriv)) !== null) {
            allMaths.push(match[0]);
        }
        
        let equations = allMaths.filter(m => m.includes('='));
        if (equations.length === 0) {
            equations = allMaths.sort((a, b) => b.length - a.length);
        }
        
        let selectedEquations = [];
        if (equations.length <= 4) {
            selectedEquations = equations;
        } else {
            selectedEquations = [equations[0], equations[1], equations[equations.length - 1]];
        }
        selectedEquations = [...new Set(selectedEquations)];
        
        out += `\n[FELADAT ${index+1}: ${item.label}]\n`;
        out += `SELECTED EQUATIONS:\n${selectedEquations.join('\n')}\n`;
    });
}
fs.writeFileSync('debug_out.txt', out);
console.log("Done");
