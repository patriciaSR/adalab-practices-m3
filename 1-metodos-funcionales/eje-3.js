'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const usersPremium = users.map(user => user.isPremium ? `Bienvenida ${user.name}. Gracias por confiar en nosotros` : `Bienvenida ${user.name}`)

//otra opción, condicional con if
//  user => {
//   if(user.isPremium) {
//     return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
//   } else {
//     return `Bienvenida ${user.name}`;
//   }
// }

console.log(usersPremium);