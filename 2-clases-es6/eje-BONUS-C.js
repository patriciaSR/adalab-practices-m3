'use strict';
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
    constructor(side) {
        super(4, side, side)
        this.side = side;
    }
    get getSide() {
        return this.side;
    }
    set setSide(newSide) {
        this.side = newSide;
        super.base = this.side;
        super.height = this.side;

    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super(3, base, height);
    }

    area() {
        return super.area() / 2;
    }
}

const square7 = new Square(7);
const squareArea = square7.area();
console.log(` El area de square7 con lado ${square7.side} es ${squareArea}`);

square7.setSide = 47;
const squareArea2 = square7.area();
console.log(`El nuevo lado de square7 es ${square7.side}`);
console.log(`El area de square7 con lado ${square7.side} es ${squareArea2}`);


// // EJERCICIO BONUS C
// Vamos a mejorar ¡aún más, siempre más! nuestra calculadora geométrica sencilla. En el programa definiremos la clase Polygon, Square para polígonos regulares (todos sus lados miden lo mismo). La clase Square será subclase de Polygon y serán iguales a las del ejercicio bonus A.
// Aquí viene lo distinto: la clase Square tendrá un getter y un setter para consultar o modificar el lado.

// Desde una subclase podemos acceder a las propiedades de la clase original con super.propiedad.

// Crearemos una instancia: un cuadrado de 7 de lado. Haremos lo siguiente:
    // Pediremos el área y la guardaremos en una variable
    // Cambiaremos el lado del cuadrado por 47
    // Pediremos de nuevo el área y la guardaremos en otra variable
    // Compararemos que los valores son distintos. Si son iguales, ¡meeec!