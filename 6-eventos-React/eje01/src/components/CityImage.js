import React from 'react';

class CityImage extends React.Component {
  constructor(props){
    super(props);
    this.images = {
      Praga: 'https://viajes.nationalgeographic.com.es/medio/2018/05/08/camino-real-praga_ae560466_800x800.jpg',
      Peru: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/290px-Machu_Picchu%2C_Peru.jpg'
    };
  }
  render() {
    const citySelected = this.props.city;
    return(
      <img src={this.images[citySelected]} alt={citySelected} className="city__img"/>
    )
  }
};

export default CityImage;