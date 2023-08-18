/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
*/

class Rectangulo {
    constructor(ancho, alto){
        this.alto = alto;
        this.ancho = ancho;
    }

    modAlto(nuevoAlto){
        if(nuevoAlto > 0){
            this.alto = nuevoAlto;
            console.log("Alto modificado");
        } else {
            console.log("Dale, no seas boludo, tiene que ser mayor a 0");
        }
    }

    modAncho(nuevoAncho){
        if(nuevoAncho > 0){
            this.ancho = nuevoAncho;
            console.log("Ancho modificado");
        } else {
            console.log("Dale, no seas boludo, tiene que ser mayor a 0")
        }
    }

    mostrarXY(){
        console.log(`Alto: ${this.alto}`);
        console.log(`Ancho: ${this.ancho}`);
    }

    calcPerimetro(){
        return 2 * (this.ancho + this.alto);
    }

    calcArea(){
        return this.ancho * this.alto;
    }

}

const Rectangulo1 = new Rectangulo(4, 6);
const Rectangulo2 = new Rectangulo(7, 12);

Rectangulo1.mostrarXY();
Rectangulo2.mostrarXY();

Rectangulo1.modAlto(4);
Rectangulo2.modAncho(5);

console.log(`El perimetro del rectangulo 1 es: ${Rectangulo1.calcPerimetro()}`);
console.log(`El area del rectangulo 2 es: ${Rectangulo2.calcArea()}`);