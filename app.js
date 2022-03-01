let obj = {
    nombre: "Carlos",
    edad: 45,
    apellido: "Ulibarri",
    keyPress: function() {
        console.log("keyPress")
    },
    onClick: function() {
        console.log("On Clcik")
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre";
console.log((obj[myKey]));
myKey = "keyPress";
obj[myKey]();

let myArray = [];
//myArray.push(8);
//myArray.push("Hola, como estas?");
//myArray.push(function(){console.log("Hola desde function")});
//myArray.push(obj);
//console.log(myArray);

myArray.push(()=>console.log("F1"));
myArray.push(()=>console.log("F2"));
myArray.push(()=>console.log("F3"));

myArray.forEach(element => {
   element(); 
});