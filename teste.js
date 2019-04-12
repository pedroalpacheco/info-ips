
function mostra(ip){
    var geoip = require('geoip-lite');
    var geo = geoip.lookup(ip)
    console.log(geo)
}
mostra("35.187.180.136")