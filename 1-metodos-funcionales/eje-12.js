'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const orderName = users.sort(compare);
const orderPin = users.sort((a,b) => a.pin - b.pin);


function compare(a,b) {
  let comparation = 0;
  if(a.name > b.name) {
    return comparation = 1;
  }else if (a.name < b.name) {
    return comparation = -1;
  }else {
    return comparation;
  }
};

console.log(orderName);
console.log(orderPin);