function mostra(ip){
    let geoip = require('geoip-lite');
    let geo = geoip.lookup(ip)
    //console.log(ip)
    console.log(geo)
    //return geo
}

var fs = require('fs');

let data = fs.readFileSync('arq-limpo3.txt', 'ascii');
//console.log(data)
let datarray = data.split('\n')
//console.log(datarray)
let allips = datarray.map(function(num){
    //console.log("este ip: " + num)
    mostra(num)
})

