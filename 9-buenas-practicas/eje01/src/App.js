import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      newNumber: '',
      pair: false
    }

    this.getFilterPair = this.getFilterPair.bind(this);
  }

  getFilterNumber = event => {
    const newNumber = event.currentTarget.value;
    if(newNumber !== ''){
      this.setState({
        newNumber: parseInt(newNumber)
      });
    }else {
      this.setState({
        newNumber: newNumber
      });
    }
    
  }


  //La opición para el checked más simple
  getFilterPair(event) {
    const status = event.currentTarget.checked
      this.setState({
        pair: status
      });
  }

  //La opción para el checked más complicada
  // getFilterPair() {
  //   if (this.state.pair) {
  //     this.setState({
  //       pair: false
  //     });
  //   } else {
  //     this.setState({
  //       pair: true
  //     });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <input type="number" className="filter" name="filter" value={this.state.newNumber ? this.state.newNumber : ''} onChange={this.getFilterNumber} />
        <input type="checkbox" name="pair" id="pair" onChange={this.getFilterPair} /> Pares
        <ul className="number__list">
          {this.state.numbers
            .filter(number => {
              if (this.setState.newNumber === '') {
                return true;
              } else {
                return number > this.state.newNumber;
              }
            })
            .filter(number => this.state.pair ? number % 2 === 0 : true)
            .map(number =>
              <li className="list__number" key={number} >{number}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
