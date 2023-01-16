const { readFile, writeFile } = require('fs').promises;
const start = async () => {
    try {
        const first = await readFile('./content/fileOne.txt', 'utf-8');
        const second = await readFile('./content/fileTwo.txt', 'utf-8');
        await writeFile(
            './content/results-async.txt',
            `THIS IS AWESOME : ${first} ${second}`
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();