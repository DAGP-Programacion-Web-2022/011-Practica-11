// Refactor to Arrow Functions
let greet = () => console.log('Hello');
greet(); // Function 01

let logGreeting = (fn) => fn();
logGreeting(greet); //Function 02

let greetMe = () => console.log('Hello from de function expression');
greetMe(); //Function 03

logGreeting(greetMe); //Function 04