const os = require('os')

console.log('End of line for windows ==> \\r\\n', os.EOL);
console.log('Properties in form of constatnts ==> \\r\\n', JSON.stringify(os.EOL));
console.log('Properties in form of constatnts ==> \\r\\n', JSON.stringify(os.constants));
console.log('BInary compiled Architecture 32bit x86 && 64bit x64 ==>',os.arch());
console.log('platform ==>',os.platform());
console.log('Home Directory ==>',os.homedir());
console.log('Core of system  ==>',os.availableParallelism());
console.log('OS release  ==>',os.release());
console.log('CPU release  ==>',os.cpus());

// 4bit = 1 nibble
// 8bit = 2nibble
// 8bit = 1byte
// 2nibble = 1byte

console.log('Bitorder, BE:Big Bit order | LE:Little Bit order [endianness]  ==>',os.endianness());