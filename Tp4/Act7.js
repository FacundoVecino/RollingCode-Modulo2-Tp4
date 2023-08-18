/* 
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class agendaContactos {
    constructor(limiteAgenda){
        this.limiteAgenda = limiteAgenda || 10;
        this.contactos = [];
    }

    añadirContacto(contacto){
        if (this.contactos.length >= this.limiteAgenda){
            console.log("La agenda esta llena, imposible rey");
            return;
        }
        this.contactos.push(contacto);
        console.log("El contacto ha sido añadido correctamente");
    }

    existeContacto(nombre){
        let existe = false
        this.contactos.find((item)=>{
            if (item.nombre.toLowerCase() === nombre.toLowerCase()){
                console.log("El contacto ya existe");
                existe = true
                return;
            }
        })
        
        if (existe === false){
                console.log("El contacto no existe");
            }
    }

    listarContactos(){
        this.contactos.forEach((item)=>{
            console.log(`Nombre: ${item.nombre} - Telefono: ${item.telefono}`);
        })
    }

    buscarContacto(nombre){
        this.contactos.find((item)=>{
            if (item.nombre.toLowerCase() === nombre.toLowerCase()){
                console.log(`Nombre: ${item.nombre} - Telefono: ${item.telefono}`);
            }
        })
    }

    eliminarContacto(contacto) {
        const index = this.contactos.findIndex(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
        if (index !== -1) {
            const contactoEliminado = this.contactos.splice(index, 1)[0];
            console.log(`Contacto ${contactoEliminado.nombre} eliminado.`);
        } else {
            console.log(`Contacto ${contacto.nombre} no encontrado, no se pudo eliminar.`);
        }
    }

    agendaLlena(){
        return this.contactos.length >= this.limiteAgenda
    }

    agendaLibre(){
        return this.limiteAgenda - this.contactos.length
    }
}

function menuOpciones(){
    console.log("Menu de opciones:");
    console.log('1. Añadir contacto');
    console.log('2. Comprobar existencia de contacto');
    console.log('3. Listar contactos');
    console.log('4. Buscar contacto por nombre');
    console.log('5. Eliminar contacto');
    console.log('6. Ver si la agenda está llena');
    console.log('7. Ver huecos libres');
    console.log('0. Salir');
    
    while(opcion !== 0) {
    
    opcion = parseInt(prompt("Seleccione una opcion: "));

    switch (opcion) {
        case 1:
            const nombre = prompt("Ingrese el nombre del contacto");
            const telefono = prompt("Ingrese el telefono del contacto");
            const nuevoContacto = new contacto(nombre, telefono);
            Agenda.añadirContacto(nuevoContacto);
            break;

        case 2: 
            const nombreExiste = prompt("Ingrese el nombre del contacto que desea comprobar su existencia");
            Agenda.existeContacto(nombreExiste);
            break;

        case 3: 
            Agenda.listarContactos();
            break;

        case 4:
            const nombreBuscar = prompt("Ingrese el nombre del contacto que desea buscar");
            Agenda.buscarContacto(nombreBuscar);
            break;

        case 5:
            const nombreEliminar = prompt("Ingrese el nombre del contacto que desea eliminar");
            const contactoEliminar = new contacto(nombreEliminar, '');
            Agenda.eliminarContacto(contactoEliminar);
            break;
        
        case 6:
            Agenda.agendaLlena()
            if (Agenda.agendaLlena === true){
                console.log("La agenda esta llenisima");
            } else {
                console.log("La agenda no esta llena");
            }
            break;
        
        case 7:
            console.log("Los huecos libres en la agenda son: ", Agenda.agendaLibre())
            break;

        case 0:
            console.log("Saliendo del programa");
            break;

        default:
            console.log("Ingreso invalido");
            break;

        }
    }
}


const Agenda = new agendaContactos()

let opcion = -1;
alert("Ingrese a la consola para entrar al menu de opciones");
console.log("Ya habiendo ingresado, escriba el siguiente comando: menuOpciones()")

