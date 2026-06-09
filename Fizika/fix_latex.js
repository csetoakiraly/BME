const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// The problematic ones have four backslashes like \\\\frac
// We want to replace four backslashes with two backslashes
data = data.replace(/\\\\\\\\/g, '\\\\');

fs.writeFileSync('data.js', data, 'utf8');
console.log("Fixed!");
