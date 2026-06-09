const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// The file currently has four backslashes like \\\\sigma
// We want to replace four backslashes with two backslashes
data = data.replace(/\\\\\\\\/g, '\\\\');

fs.writeFileSync('data.js', data, 'utf8');
console.log("Latex fixed!");
