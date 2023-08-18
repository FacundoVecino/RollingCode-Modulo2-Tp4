/* 

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log("Código:", this.codigo);
      console.log("Nombre:", this.nombre);
      console.log("Precio:", this.precio);
    }
  }
  
  // Crear instancias de la clase Producto
  const producto1 = new Producto("001", "Chipá", 25.99);
  const producto2 = new Producto("002", "Lomito", 39.99);
  const producto3 = new Producto("003", "Vino tinto", 59.99);
  
  const productos = [producto1, producto2, producto3];
  
  console.log("Datos de los productos:");
  for (let i = 0; i < productos.length; i++) {
    console.log("Producto " + (i + 1) + ":");
    productos[i].imprimeDatos();
    console.log("-----------------------");
  }