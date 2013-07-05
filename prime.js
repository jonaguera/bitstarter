#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var primos = new Array();
var objetivo = 100;
var output = "";


// Function from https://gist.github.com/jfmercer/1436651
var isPrimeNumber = function( number ) {
    if (number == 2) {
        return true;
    }
    for (var i=2;i<number;i++) {
        if (number % i == 0) {
            return false;
        }
    } 
    return true;
}

for (var i=2;primos.length<objetivo;i++) {
    if ( isPrimeNumber(i) ){
        primos.push(i);
    }
}  

//for (var i=0;i<primos.length;i++)
//{ 
//console.log(primos[i]);
//}

primos.forEach(function(primo){
    output += primo+",";
})
output = output.substring(0, output.length - 1)


fs.writeFileSync(outfile, output);  
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + outfile);