function mostra(ip){
    var geoip = require('geoip-lite');
    var geo = geoip.lookup(ip)
    //console.log(geo)
    return geo
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

/*try {
    var data = fs.readFileSync('arq-limpo3.txt', 'ascii');
        //console.log(typeof data)  
        {
            let datarray = data.split('\n')
            let mostra = datarray.map(function(num){
                console.log(num)
            });
            
            //var geoip = require('geoip-lite');
            //var geo = geoip.lookup(datarray)
            //console.log(datarray[15]) 
            //for(i in datarray){
             //   console.log(i[1])
            //}  
            
        }

catch (err) {
    console.error("There was an error opening the file:");
    console.log(err);
}*/

