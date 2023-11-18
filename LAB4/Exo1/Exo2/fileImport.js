// fileImport.js

const mean = require('./notation');

const scores1 = [85, 92, 78, 90, 88];
const scores2 = [72, 65, 81, 94, 76, 88, 90];

const average1 = mean(scores1);
const average2 = mean(scores2);

console.log('Average of scores1:', average1);
console.log('Average of scores2:', average2);
