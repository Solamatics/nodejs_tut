//Modules - Encapsulated Code (only share minimum)
//CommonJS, every files in node is a module (by default)
const regName = require('./names.js');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
// require('./mind-grenade');
console.log(data);



sayHi('susan');
sayHi(regName.john);
sayHi(regName.peter);

