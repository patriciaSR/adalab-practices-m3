import React from 'react';


function MediaCard(props) {
  const cardUserImage = (
    <img src={props.image} className="card__image" alt="user profile" />
  );
  
  const cardUserInfo = (
    <div className="card__user-info">
      <h1 className="card__user-name">{props.name}</h1>
      <span className="card__date">{props.date}</span>
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
      <span className="likes__number">{props.likes}</span>
      <i className={`fas fa-heart ${props.heart}`}></i>
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
        {props.text}
      </p>
      {cardMoreInfo}
    </div>
  );


  const card = (
    <div className="App">
      <div className="App-card">
        {cardHeader}
        {cardContent}
      </div>
    </div>
  );

  return card;
}

export default MediaCard;
