'use strict';

class Person {
  constructor(firstName, secondName){
    this.firstname = firstName;
    this.secondName = secondName;
  }
  get fullName(){
    return this.firstname + ' ' + this.secondName;
  }
}

const person1 = new Person('Patricia', 'Suárez');
const person2 = new Person('Pepito', 'Grillo');

console.log(person1.fullName);
console.log(person2.fullName);



// EJERCICIO BONUS B
// Vamos a mejorar crear una clase Person que recibe un nombre firstName y apellido lastName como parámetros de su constructor.
// También definiremos un getter fullName para obtener el nombre completo, que es una concatenación de nombre y apellido.
// Crearemos 2 instancias con distintos nombres para probar que funciona.
