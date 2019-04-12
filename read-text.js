var fs = require('fs');

try {
    var data = fs.readFileSync('arq-limpo3.txt', 'ascii');
    console.log(data);
}
catch (err) {
    console.error("There was an error opening the file:");
    console.log(err);
}