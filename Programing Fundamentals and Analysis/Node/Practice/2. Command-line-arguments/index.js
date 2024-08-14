
const path = require('path');
console.log("Argument ==> ", process.argv);
console.log("Argument count ==> ", process.argv.length);



// get the current file name in NOdejs using global constant 
let filename = path.basename(__filename)
console.log("File name with GLOBAL constant ==>", filename);



// get the current file name in NOdejs WITHOUT  using global constant 
let fileName = path.basename(process.argv[1])
console.log("File name without GLOBAL constant ==>", fileName);


// To get where node is installed 
let nodePath = process.argv[0]
console.log("Node.js path ==> ", nodePath);