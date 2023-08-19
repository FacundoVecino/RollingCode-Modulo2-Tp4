/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar 
que cada animal emite el sonido adecuado. 
*/

"use strict";

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    emitirSonido(){
        console.log(`El animal emite su sonido generico`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad){
       super(nombre, edad) 
    }
    
    emitirSonido(){
        if (this.edad > 10){
            console.log(`${this.nombre}(emitiendo un debil y leve ladrido): Guau Guau...`);
        } else if (this.edad <= 10){
            console.log(`${this.nombre}(emitiendo un fuerte y energetico ladrido): ¡¡Guau Guau!!`)
        }
    }
}

class Gato extends Animal {
    constructor(nombre, edad){
       super(nombre, edad) 
    }
    
    emitirSonido(){
        if (this.edad >= 14){
            console.log(`${this.nombre}(emitiendo un debil y leve maullido): Miauu...`);
        } else if (this.edad < 14){
            console.log(`${this.nombre}(emitiendo un fuerte y energetico maullido): ¡¡Miaauuuuuuuu!!`)
        }
    }
}

const perro1 = new Perro("Firulais", 12);
const perro2 = new Perro("Tobi", 5);
const gato1 = new Gato("Pelusa", 2);
const gato2 = new Gato("Copito", 15);


perro1.emitirSonido();
gato1.emitirSonido();
perro2.emitirSonido();
gato2.emitirSonido();