/* 
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
    color: "",
    marca: "",
    modelo: "",
    estadoEncendido: false,

    encender: function(){
        if(!this.estadoEncendido){
            this.estadoEncendido = true;
            return "El auto esta encendido";
        } else {
            return "El auto ya estaba encendido";
        }
    },

    apagar: function(){
        if(this.estadoEncendido){
            this.estadoEncendido = false;
            return "El auto esta apagado";
        } else {
            return "El auto ya estaba apagado";
        }
    }
};

console.log(auto)
console.log(auto.encender())
console.log(auto.encender())
