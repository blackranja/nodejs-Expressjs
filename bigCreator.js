const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
    writeFileSync(
        './content/big2.txt',
        `Hello world ${i}\n`,
        { flag: 'a' }
    )
}