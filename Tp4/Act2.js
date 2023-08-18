/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/

const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
            console.log(`Se ingresaron $${cantidad} a la cuenta`);
        } else {
            console.log("Ingrese una cantidad valida");
        }
    },

    extraer: function(cantidad){
        if(cantidad > 0){
            this.saldo = this.saldo - cantidad;
            console.log(`Se extrajeron $${cantidad} de la cuenta`);
        } else {
            console.log("No se extrajo ñak")
        }
    },

    informar: function(){
        console.log(`Estado de la cuenta: Titular = ${this.titular} - Saldo actual = $${this.saldo}`)
    }
};

cuenta.informar();
cuenta.ingresar(20000);
cuenta.extraer(1000);
cuenta.informar();