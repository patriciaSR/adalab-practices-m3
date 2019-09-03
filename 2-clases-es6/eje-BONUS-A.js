'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
    // this.side = this.base; -> Es lo mismo
    this.side = base;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
    // this.side = base; -> Es lo mismo
    this.side = this.base;
  }

  area() {
    return super.area() / 2;
  }
}

const square4 = new Square(4);
const triangle4 = new Triangle(4, 3);

console.log(`El lado de square4 es ${square4.side}`);
console.log(`El perímetro de square4 es ${square4.perimeter()}`);
console.log(`El area de square4 es ${square4.area()}`);

console.log(`----------`);

console.log(`la base de triangle4 es ${triangle4.base}`);
console.log(`El perímetro de triangle4 es ${triangle4.perimeter()}`);
console.log(`El area de triangle4 es ${triangle4.area()}`);


// EJERCICIO BONUS A
// Vamos a mejorar ¡aún más! nuestra calculadora geométrica sencilla. En el programa definiremos la clase Polygon, Square y Triangle para polígonos regulares (todos sus lados miden lo mismo). Ya os imagináis por dónde van los tiros: las clases Square y Triangle serán subclases de Polygon. La clase Polygon tendrá, al menos:
// Un atributo para el número de lados (numberOfSides)
// Dos atributos más: para la longitud de la base (base) y de la altura (height)
// Un método para calcular el perímetro (perimeter) (multiplicar la longitud del lado base por el número de lados)
// Un método para calcular el área (area) (multiplicar base por altura)
// La subclase Square tendrá:
// Un atributo lado (side) igual a la base
// Un constructor que recibirá exclusivamente la longitud del lado
// La subclase Triangle tendrá:
// Un constructor que recibirá base y altura
// Un método area() que sobrescibirá al de la clase base. Devolverá la mitad de lo que devuelva llamar al área de la clase base (super.area() / 2)
// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.
