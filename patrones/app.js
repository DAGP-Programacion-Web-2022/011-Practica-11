//Importar Modulo
let greet = require('./greet1');

//Importar greet2a
let greet2a = require('./greet2');

//Importar greet3
let greet3 = require('./greet3');

//Ejecucion de las importaciones
greet();
greet2a.greet();
console.log(greet3);
greet3.greet();

//Agregando mas lineas
greet.greeting = "Hello from the app";

let greet3b = require('./greet3');
greet3b.greet();

// greet4
const Greet4 = require('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

//greet5
const greet5 = require('./greet5');
greet5.greet();