const fs = require('fs');

const f2023 = JSON.parse(fs.readFileSync('formulas_2023.json', 'utf8'));
const f2024 = JSON.parse(fs.readFileSync('formulas_2024.json', 'utf8'));

const allFormulas = [...f2023, ...f2024];

const grouped = {};
allFormulas.forEach(item => {
    const key = item.examId || 'Egyéb';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
});

let htmlContent = `<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Nyomtatható Képletgyűjtemény</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: white; 
            color: black; 
            line-height: 1.0; 
            padding: 5px; 
            max-width: 100%; 
            margin: 0 auto;
            font-size: 8px; /* Mikro betűméret */
        }
        h1 { display: none; }
        h2 { 
            margin-top: 5px; 
            border-bottom: 1px solid #333; 
            padding-bottom: 1px; 
            color: #333; 
            font-size: 1.1em; 
            text-transform: uppercase; 
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 3px;
        }

        .formula-card { 
            page-break-inside: avoid; 
            border: 1px solid #ccc; 
            padding: 2px; 
            border-radius: 2px; 
            background: #fafafa;
        }
        .label { 
            font-weight: bold; 
            font-size: 0.6em; 
            display: block; 
            text-align: center;
            background: #eee; 
            padding: 1px 2px; 
            border-radius: 2px; 
            border: 1px solid #ccc; 
            margin-bottom: 1px;
        }
        .derivation { 
            font-size: 0.8em; 
            text-align: center; 
        }
        
        @media print {
            @page { margin: 0.1cm; }
            body { padding: 0; font-size: 7pt; background: white; line-height: 0.95; }
            .grid-container { 
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 1px !important; 
            }
            .formula-card { 
                border: 1px dashed #999; 
                background: white; 
                padding: 0;
            }
            .label { 
                border: none; 
                background: transparent; 
                text-decoration: none; 
                font-weight: normal;
                font-size: 0.55em; 
                margin-bottom: 0;
                display: block;
                text-align: center;
            }
            h2 { page-break-after: avoid; margin-top: 2px; margin-bottom: 1px; font-size: 0.8em; }
            .MathJax { font-size: 1.12em !important; } /* PICIT KISEBB, HOGY BEFÉRJEN */
        }
    </style>
    <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      }
    };
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
`;

const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$/g;

for (const [examId, items] of Object.entries(grouped)) {
    let niceName = examId;
    if (examId !== 'Egyéb') {
        let match = examId.match(/vizsga(?:-24)?-([1-4])/);
        if (match) {
            let num = match[1];
            niceName = examId.includes('2023') ? num : '1' + num;
        }
    }
    
    htmlContent += `<h2>${niceName}</h2>\n`;
    htmlContent += `<div class="grid-container">\n`;
    
    items.forEach(item => {
        let deriv = item.derivation;
        deriv = deriv.replace(/\\\\/g, '\\');
        let safeDeriv = deriv.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        let cleanLabel = item.label.replace(/IMSC/gi, '').replace(/^[\s:\-]+|[\s:\-]+$/g, '');
        if (!cleanLabel) cleanLabel = 'Feladat';
        
        let match;
        let allMaths = [];
        while ((match = regex.exec(safeDeriv)) !== null) {
            allMaths.push(match[0]);
        }
        
        let equations = allMaths.filter(m => m.includes('='));
        if (equations.length === 0) {
            equations = allMaths.sort((a, b) => b.length - a.length);
        }
        
        let selectedEquations = equations;
        selectedEquations = [...new Set(selectedEquations)];
        
        let mainFormulas = selectedEquations.map(mathStr => {
            if (mathStr.startsWith('$') && !mathStr.startsWith('$$')) {
                return `<div>$$${mathStr.substring(1, mathStr.length - 1)}$$</div>`;
            }
            return `<div>${mathStr}</div>`;
        });
        
        htmlContent += `<div class="formula-card">
            <span class="label">${cleanLabel}</span>
            <div class="derivation">${mainFormulas.join('')}</div>
        </div>\n`;
    });
    
    htmlContent += `</div>\n`;
}

htmlContent += `</body></html>`;

fs.writeFileSync('nyomtathato_kepletgyujtemeny.html', htmlContent, 'utf8');
console.log("HTML generation complete.");
