import React from 'react';

class Preview extends React.Component {
  render() {
    return (
      <div className="filmCard">
        <h1 className="film__title">{this.props.data.name}</h1>
        <p className="film__lang">{this.props.data.lang}</p>
        <p className="film__desc">{this.props.data.description}</p>
        <p className="age">Recomendada para {this.props.data.class}</p>
        <p className="genres">Géneros seleccionados: {this.props.data.genres.join(', ')}</p>
        <div className="image">
          <img src={this.props.data.image} alt="imagen" className="image"/>
        </div>
      </div>
    )
  }
}

export default Preview;