let obj = {
    nombre: "Carlos",
    edad: 45,
    apellido: "Ulibarri",
    mouseOver: function() {
        console.log("Mouse Over")
    },
    onClick: function() {
        console.log("On Clcik")
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre";
myKey(obj[myKey]);
myKey = "keyPress";
obj[myKey()];