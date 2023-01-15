const { readFileSync, writeFileSync } = require('fs');
console.log("Starting Application");
const first = readFileSync(
    './content/fileOne.txt',
    'utf-8'
);
const second = readFileSync(
    './content/fileTwo.txt',
    'utf-8'
);
writeFileSync(
    './content/result-sync.txt',
    `Here is the result:${first},${second}`, { flag: 'a' }
)
console.log("Done with the Task");
console.log("Starting New Application");