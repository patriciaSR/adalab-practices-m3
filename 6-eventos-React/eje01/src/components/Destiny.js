import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
  constructor(props) {
    super(props);

    this.selectedDestiny = this.selectedDestiny.bind(this);
  }

  selectedDestiny(event){
    const citySelected = event.currentTarget.value;
    alert(`Tu destino seleccionado es ${citySelected}`);
    this.citySelected = citySelected;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <select name="destiny" id="destiny" className="destiny" onChange = {this.selectedDestiny}>
          <option>Selecciona una opción</option>
          <option value="Praga">Praga</option>
          <option value="Sidney">Sidney</option>
          <option value="Tokio">Tokio</option>
          <option value="Peru">Perú</option>
          <option value="París">París</option>
        </select>

        <CityImage city={this.citySelected} />
      </>
    )
  }
}

export default Destiny;