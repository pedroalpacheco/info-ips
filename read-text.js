function mostra(ip){
    let geoip = require('geoip-lite');
    let geo = geoip.lookup(ip)
    console.log(geo)
    /*Acessando objeto país*/
    //console.log(geo.country)
    /*coordenadas GEO latitude/longitude*/
    //console.log(geo.ll)
    //return geo
}

var fs = require('fs');

let data = fs.readFileSync('arq-limpo3.txt', 'ascii');
//console.log(data)
/*Da split em dados*/
let datarray = data.split('\n')
//console.log(datarray)
let allips = datarray.map(function(num){
    //console.log("este ip: " + num)
    mostra(num)
})

