var geoip = require('geoip-lite');
 
var ip = "35.187.180.136";

var geo = geoip.lookup(ip)
//var geo = geoip.pretty(ip)
 
console.log(geo);