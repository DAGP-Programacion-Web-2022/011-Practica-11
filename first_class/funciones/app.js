function greet() {
    console.log('Hello');
}

greet(); //invokes

//functions as parameters
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//function expression
let greetMe = function () {
    console.log('Hello from de function expression');
}

greetMe();

logGreeting(greetMe);
//functions are first class, pass it as parameters