/* 
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y 
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

"use strict";

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }

    mostrarDatos() {
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
        console.log("DNI:", this.DNI);
        console.log("Sexo:", this.sexo);
        console.log("Peso:", this.peso);
        console.log("Altura:", this.altura);
        console.log("Año de Nacimiento:", this.añoNacimiento);
    }

    calcularGeneracion() {
      if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
        return "Silent Generation";
      } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
        return "Baby Boomer";
      } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
        return "Generación X";
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
        return "Millennials";
      } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2012) {
        return "Generación Z";
      } else {
        return "No está dentro de los parametros";
      }
    }

    esMayorDeEdad() {
        if(this.edad >= 18){
            return "Es mayor de edad"
        } else {
            return "No es mayor de edad"
        }
    }
    
    
    
    generaDNI() {
       const numeroDNI = Math.floor(Math.random() * 100000000); // Número aleatorio de 8 cifras
       this.DNI = numeroDNI.toString();
       console.log("DNI generado:", this.DNI);
    }
  
    mostrarGeneracion() {
      const generacion = this.calcularGeneracion();
      console.log(`${this.nombre} pertenece a la generación ${generacion}.`);
  
      switch (generacion) {
        case "Silent Generation":
          console.log("Caracteristica generacional: Austeridad");
          break;
        case "Baby Boomer":
          console.log("Caracteristica generacional: Ambicion");
          break;
        case "Generación X":
          console.log("Caracteristica generacional: Obsesion por el exito");
          break;
        case "Millennials":
          console.log("Caracteristica generacional: Frustracion");
          break;
        case "Generación Z":
          console.log("Caracteristica generacional: Irrelevancia");
          break;
      }
    }
  }
  

  const persona1 = new Persona("Juan", 35, "12345689", "H", 70, 1.75, 1987);
  
  persona1.mostrarDatos();
  persona1.mostrarGeneracion();
  persona1.generaDNI();
  persona1.esMayorDeEdad();
  