// Exportar modulo greet4
module.exports = function Greetr() {
    this.greeting = "Hello from de function constructor greet4";
    this.greet = () => console.log(this.greeting);
}