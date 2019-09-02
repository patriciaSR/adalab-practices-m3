'use strict';

// EJERCICIO BONUS C
// Vamos a mejorar ¡aún más, siempre más! nuestra calculadora geométrica sencilla. En el programa definiremos la clase Polygon, Square para polígonos regulares (todos sus lados miden lo mismo). La clase Square será subclase de Polygon y serán iguales a las del ejercicio bonus A.
// Aquí viene lo distinto: la clase Square tendrá un getter y un setter para consultar o modificar el lado.

// Desde una subclase podemos acceder a las propiedades de la clase original con super.propiedad.

// Crearemos una instancia: un cuadrado de 7 de lado. Haremos lo siguiente:
    // Pediremos el área y la guardaremos en una variable
    // Cambiaremos el lado del cuadrado por 47
    // Pediremos de nuevo el área y la guardaremos en otra variable
    // Compararemos que los valores son distintos. Si son iguales, ¡meeec!