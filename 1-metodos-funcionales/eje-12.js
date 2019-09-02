'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// Mediante "[...users]" lo que hacemos es crear una array diferente (nueva referencia) con el mismo contenido:
// 1. expandimos la variable users "...users"
// 2. metemos el contenido en un nuevo array "[]"
console.log('users', [...users]);

//a)orden alfabetico
users.sort(compare);
console.log('compare', [...users]);


function compare(a,b) {
  const firstName = a.name.toUpperCase();
  const secondName = b.name.toUpperCase();

  let comparation = 0;
  if(firstName > secondName) {
    return comparation = 1;
  }else if (firstName < secondName) {
    return comparation = -1;
  }else {
    return comparation;
  }
};

//opción 2 del a)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log('localeCompare', [...users]);

//b)orden por numero de pin
users.sort((a,b) => a.pin - b.pin);
console.log('pin', [...users]);
