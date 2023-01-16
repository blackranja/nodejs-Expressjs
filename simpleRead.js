const { readFile } = require('fs');
readFile('./content/fileOne.txt', 'utf-8', (err, data) => {
    if (err) {
        return
    } else {
        console.log(data);
    }
})