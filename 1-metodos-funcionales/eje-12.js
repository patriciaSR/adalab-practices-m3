'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//a)orden alfabetico
const orderName = users.sort(compare);


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

console.log(orderName);

//opción 2 del a)
const orderName2 = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(orderName2);

//b)orden por numero de pin
const orderPin = users.sort((a,b) => a.pin - b.pin);
console.log(orderPin);
