/* 
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
    constructor(ISBN, Titulo, Autor, NumeroPaginas){
        this.ISBN = ISBN,
        this.Titulo = Titulo,
        this.Autor = Autor,
        this.NumeroPaginas = NumeroPaginas
    }

    mostrarLibro(){
        console.log(`El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene ${this.NumeroPaginas} paginas`);
    }
}



const nuevoLibro1 = new Libro(1234567890123, "The Best Libro of history", "Facundo Vecino a.k.a Alumno Destacado", 123);
const nuevoLibro2 = new Libro(9876543210987, "The Second best Libro of history", "Facundo Vecino otra vez a.k.a Alumno Destacado", 122);

nuevoLibro1.mostrarLibro();
nuevoLibro2.mostrarLibro();

if (nuevoLibro1.NumeroPaginas > nuevoLibro2.NumeroPaginas) {
    console.log(`${nuevoLibro1.Titulo} tiene más páginas que ${nuevoLibro2.Titulo}.`);
  } else if (nuevoLibro1.NumeroPaginas < nuevoLibro2.NumeroPaginas) {
    console.log(`${nuevoLibro2.Titulo} tiene más páginas que ${nuevoLibro1.Titulo}.`);
  } else {
    console.log(`${nuevoLibro1.Titulo} y ${nuevoLibro2.Titulo} tienen la misma cantidad de páginas.`);
  }