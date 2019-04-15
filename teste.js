function mostra(ip){
    var geoip = require('geoip-lite');
    var geo = geoip.lookup(ip)
    console.log(geo)
}
//mostra("35.187.180.136")


/*var fs = require('fs');

try {
    var data = fs.readFileSync('arq-limpo3.txt', 'ascii');
        for(let i in data){
            //console.log(data);
            mostra(data)
            
        }
         
}
catch (err) {
    console.error("There was an error opening the file:");
    console.log(err);
}*/

