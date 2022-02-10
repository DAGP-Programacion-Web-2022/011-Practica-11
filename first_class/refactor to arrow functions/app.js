let greet = () => console.log('Hello');
greet();

let logGreeting = (fn) => fn();
logGreeting(greet);

let greetMe = () => console.log('Hello from de function expression');
greetMe();

logGreeting(greetMe);