import React from 'react';
import Item from './Item';

const items = [
  {
    id: 1,
    // name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: '5',
  },
  {
    id: 2,
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    id: 3,
    name: 'Agua mineral',
    // description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

class ItemList2 extends React.Component {
  render() {
    const newLis = items.filter(item => item.price <= 10)
    .map(item =>
      <li key={item.id}>
        <Item
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          category={item.category}
          price={item.price}
        />
      </li>
    )

    return (
      <ul className="item-list">

        {newLis}

      </ul>
    );
  }
}


// //Opción 2
// class ItemList2 extends React.Component {
//   getFoodElements(items) {
//     return items.map(item =>
//       <li key={item.id}>
//         <Item
//           name={item.name}
//           description={item.description}
//           quantity={item.quantity}
//           category={item.category}
//           price={item.price}
//         />
//       </li>
//     );
//   }
//   render() {

//     return (
//       <ul className="item-list" >

//         {this.getFoodElements(items)}

//       </ul >
//     );
//   }
// }

export default ItemList2;
