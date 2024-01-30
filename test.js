'use strict'
import fs from "fs"

/***
 * implementation of readFileSync
 */
var data = fs.readFileSync('test.jasm');
console.log(data.toString());
console.log("Program Ended1");

/***
 * implementation of readFile 
 */
fs.readFile('test.jasm', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString().replace(/\r/g, "").split("\n"));
});

console.log("Program Ended2");
