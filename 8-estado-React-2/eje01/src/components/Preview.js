import React from 'react';

class Preview extends React.Component{
  render(){
    return(
      <div className="filmCard">
        <h1 className="film__title">{this.props.data.name}</h1>
        <p className="film__lang">{this.props.data.lang}</p>
        <p className="film__desc">{this.props.data.description}</p> 
        <p className="age">Recomendada para {this.props.data.class}</p> 
      </div>
    )
  }
}

export default Preview;