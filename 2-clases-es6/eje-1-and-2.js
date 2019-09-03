'use strict';

//EJERCICIO 1
// Vamos a crear un programita que haga cálculos geométricos sencillos. En el programa definiremos la clase Square, que tendrá al menos:
// Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados)
// Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos recibirán la longitud del lado (side) como parámetro.
// Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado.

class Square {
  perimeter(side) {
    return side * 4;  
  }

  area(side) {
    return Math.pow(side, 2);
  }
}

const square9 = new Square();

console.log(square9.perimeter(9));
console.log(square9.area(9));


// EJERCICIO 2
// Vamos a mejorar nuestra calculadora geométrica sencilla. En el programa definiremos la clase Square, que tendrá al menos:
// Un atributo para la longitud del lado (side) del cuadrado
// Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados - 4)
// Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

class Square2 {
  constructor (side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
 }

 const square1 = new Square2(1);
 console.log(square1.perimeter());
 console.log(square1.area());

 const square3 = new Square2(3);
 console.log(square3.perimeter());
 console.log(square3.area());

 const square7 = new Square2(7);
 console.log(square7.perimeter());
 console.log(square7.area());


