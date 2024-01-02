var fs = require('fs');

var strRead = fs.readFileSync('./sample.txt', 'utf8', function (err, data){
    if (err) return console.log(err);
    return data
})

var strWrite = strRead.replace(/\s+/g, ' ').trim();

fs.writeFile('./sample.txt', strWrite, function(err) {
    if (err) return console.log(err);
    console.log(`The new text in file ---> ${strWrite}`);
});