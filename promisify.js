const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const start = async () => {
    try {
        const first = await readFilePromise('./content/fileOne.txt', 'utf-8');
        const second = await readFilePromise('./content/fileTwo.txt', 'utf-8');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();