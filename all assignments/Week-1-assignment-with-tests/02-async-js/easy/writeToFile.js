var fs = require('fs');

var str = "abc"

fs.writeFile('./sample.txt', str, function(err) {
    if (err) return console.log(err);
    console.log(`The new text in file ---> ${str}`);
});