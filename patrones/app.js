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