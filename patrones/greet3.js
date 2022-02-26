// Exportar modulo greet2
function Greetr() {
    this.greeting = "Hello from de function constructor";
    this.greet = () => console.log(this.greeting);
}

module.exports = new Greetr;