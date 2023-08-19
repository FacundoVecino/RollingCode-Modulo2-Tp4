/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

"use strict";

class persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre,
        this.edad = edad,
        this.profesion = profesion
    }

    saludar(){
        console.log(`${this.nombre}: Hola, como estas?`);
    }

    despedirse(){
        console.log(`${this.nombre}: Chauu, nos vemossss!!`)
    }
}


const Eze = new persona("Ezequiel", "32", "Profesor de informatica")
const Gabi = new persona("Gabi", "12", "Stripper")

Eze.saludar()
Eze.despedirse()
Gabi.saludar()
Gabi.despedirse()