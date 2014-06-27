/**
 * Created by ReesI on 27/06/2014.
 */
var fs = require ('fs');

var filetoread = process.argv[2];

var data = fs.readFileSync(filetoread);

console.log(data.toString().split("\n").length-1);
