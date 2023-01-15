const { readFile, writeFile } = require('fs');
console.log("Starting Application")
readFile(
    './content/fileOne.txt',
    'utf-8',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        //console.log(result);
        const first = result;
        readFile(
            './content/fileTwo.txt',
            'utf-8',
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                const second = result;
                writeFile(
                    './content/result-async.txt',
                    `Here is the result: ${first},${second}`,
                    { flag: 'a' },
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log(result);
                        console.log("Done with the task");
                    }
                )

            })

    })
console.log("Starting New Task");
