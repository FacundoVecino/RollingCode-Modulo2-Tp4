/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, 
el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y 
devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, 
caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

"use strict";

class Pasajero {
    constructor(nombre, apellido, DNI, clase){
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.clase = clase;
    }
}

class Avion {
    constructor(nombreAvion, capacidad, destino){
        this.nombreAvion = nombreAvion;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaDePasajeros = [];
    }

    abordar(pasajero){
        if(this.listaDePasajeros.length < this.capacidad){
            this.listaDePasajeros.push(pasajero);
            console.log(`El pasajero de nombre: ${pasajero.nombre}, apellido: ${pasajero.apellido}, DNI: ${pasajero.DNI}, clase: ${pasajero.clase}, ha abordado el asiento nro ${this.listaDePasajeros.length} del avion ${this.nombreAvion} con destino a ${this.destino}`);
        } else {
            console.log("Lo lamentamos, el avion esta en su maximo de capacidad");
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaDeAviones = [];
    }

    agregarAvion(avion){
        this.listaDeAviones.push(avion);
        console.log(`El avion ${avion.nombreAvion} con capacidad de ${avion.capacidad} personas, destino a ${avion.destino} y sin pasajeros ha sido agregado correctamente a la lista de aviones`);
    }

    buscarAvion(nombreAvion){
        const avionEncontrado = this.listaDeAviones.find((item) => {
            return item.nombreAvion.toLowerCase() === nombreAvion.toLowerCase();
        });

        if (avionEncontrado) {
            console.log(`El avion ${avionEncontrado.nombreAvion} con capacidad de ${avionEncontrado.capacidad} personas, destino a ${avionEncontrado.destino} y con ${avionEncontrado.listaDePasajeros.length} pasajeros ha sido encontrado correctamente`);
        } else {
            console.log("No se ha encontrado ningun avion con esas caracteristicas");
        }
    }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
const avion1 = new Avion("Boeing 747", 20, "Barcelona, España");
const avion2 = new Avion("MD-80", 12, "Bruselas, Belgica");
const avion3 = new Avion("Pilatus PC-6", 10, "Kabul, Afganistan");
const Ezequiel = new Pasajero("Ezequiel", "Amin", 40554321, "Ejecutiva");
const Gabriel = new Pasajero("Gabriel", "Azubel", 47439502, "Economica");
const Facundo = new Pasajero("Facundo", "Vecino", 45707064, "Economica Premium");

aeropuertoInternacional.agregarAvion(avion1);
avion1.abordar(Ezequiel);
avion1.abordar(Gabriel);
avion1.abordar(Facundo);

aeropuertoInternacional.agregarAvion(avion2);
avion2.abordar(Ezequiel);
avion2.abordar(Gabriel);
avion2.abordar(Facundo);

aeropuertoInternacional.agregarAvion(avion3);
avion3.abordar(Ezequiel);
avion3.abordar(Gabriel);
avion3.abordar(Facundo);

aeropuertoInternacional.buscarAvion("MD-80");
