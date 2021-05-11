const path = require('path')

const sep = path.sep;
console.log(sep);

const filePath = path.join(sep+'content','subcontent','text.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname,'content','subcontent','text.txt')
console.log(absolute);
