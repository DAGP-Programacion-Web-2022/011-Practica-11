let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getName());