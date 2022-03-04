// Object Initialized.
let obj = {
    nombre: "Carlos",
    edad: 45,
    apellido: "Ulibarri",
    keyPress: function() {
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function() {
        console.log("El puntero del mouse esta arriba");
    }
}

// Accesing object with keys and Array with string.
console.log(obj.nombre);
console.log(obj["nombre"]);

// Initialized myKey variable and call obj.nombre in a console.log.
let myKey = "nombre";
console.log((obj[myKey]));

// Changed myKey value and call obj object with the assigned value in myKey.
myKey = "keyPress";
obj[myKey]();

// Changed myKey value and call obj object with the assigned value in myKey.
myKey = "mouseOver";
obj[myKey]();

// Array Initialized
let myArray = [];

// Information pushed into array and is shown by a console.log.
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
   console.log("hola desde el array");
})
console.log(myArray);

// Code line to evoke obj.mouseOver from the "myArray" array.
console.log(myArray[2]["mouseOver"]);

// Code line to evoke anonymous function the "myArray" array in 3 position.
console.log(myArray[3]());

// Array Initialized
let funcArray = [];

// Initialized 3 similar console.log and pushed into "funcArray" array.
funcArray.push(() => {
   console.log("Function 1");
});

funcArray.push(() => {
   console.log("Function 2");
});

funcArray.push(() => {
   console.log("Function 3");
});

funcArray.forEach(element => {
    element();
});
