var fs = require('fs');

var strRead = fs.readFileSync('./sample.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);
    return data
})

console.log(`The text in file ---> ${strRead}`);