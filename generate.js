const fs = require('fs');
const Mn = require('unicode/category/Mn');

const symbols = [];
for (let i in Mn) {
  const char = Mn[i];
  const charCode = parseInt(char.value, 16);
  symbols.push(charCode);
}

const output = `// DO NOT CHANGE THIS FILE. This is an auto-generated list of all Unicode non-spacing characters.
module.exports=${JSON.stringify(symbols)}
`;

fs.writeFileSync('src/nonspacing.js', output);
console.log("File saved.");
