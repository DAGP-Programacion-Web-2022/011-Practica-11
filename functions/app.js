// Refactor to Arrow Functions
let greet = () => console.log('Hello');
greet(); // Function 01

let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    conesole.log(`Hello from a function created on the fly`)
}); //Function 02

// Interpolación de Strings Clásica
let logGreeting1 = (miNombre, miColor) => {
    conesole.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);
}

let greetMe = () => console.log('Hello from de function expression');
greetMe(); //Function 03

logGreeting(greetMe); //Function 04