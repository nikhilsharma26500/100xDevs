var fs = require('fs');

var str = "brud"

fs.writeFile('./sample.txt', str, function(err) {
    if (err) return console.log(err);
    console.log(`The new text in file ---> ${str}`);
});