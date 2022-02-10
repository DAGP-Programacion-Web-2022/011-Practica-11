function greet() {
    console.log('Hello');
}

greet(); //invokes

//functions as parameters
function logGreeting(fn) {
    fn();
}

logGreeting(greet);