import React from 'react';
import logo from './images/ornitorrinco.jpg';
import './App.scss';

/*Una variable para cada etiqueta*/
const cardUserImage = (
  <img src={logo} className="card__image" alt="user profile" />
);

const cardUserInfo = (
  <div className="card__user-info">
    <h1 className="card__user-name">Perri el Ornitorrinco</h1>
    <span className="card__date">4 de Septiembre de 2019</span>
  </div>
);
const cardHeader = (
  <div className="card__header">
    {cardUserImage}
    {cardUserInfo}
  </div>
);

const likes = (
  <div className="likes">
    <span className="likes__number">37</span>
    <i className="fas fa-heart"></i>
  </div>
);
const cardMoreInfo = (
  <div className="card__more-info">
    <a href="#link" className="more-info__link">Leer más...</a>
    {likes}
  </div>
);
const cardContent = (
  <div className="card__content">
    <p className="content__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium cupiditate, perferendis natus laborum iure qui nesciunt? Tenetur, porro dolores fuga, atque, voluptatem facere aut eligendi accusantium at delectus placeat.
    </p>
    {cardMoreInfo}
  </div>
);


function App() {
  const appRoot = (
    <div className="App">
      <div className="App-card">
        {cardHeader}
        {cardContent}
      </div>
    </div>
  );

  return appRoot;
}

export default App;
