import React from 'react';
import './App.scss';

const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: [],
      open: false
    };
    
    //this.setOpen = this.setOpen.bind(this);
  }

  // Cuando inserto el componente en el DOM (appendChild)
  componentDidMount() {
    this.getPalettes();
  }

  getPalettes() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      this.setState({
        palettes: data.palettes
      })
    })
  }

  setOpen(index) {
    console.log(index)
    if(this.state.open === index){
      this.setState({
        open: null
      })
    } else {
      this.setState({
        open: index
      });
    }
  }
  
  render() { 
    return (
      <div className="App">
        <div className="palettes">
          {this.state.palettes.map((palette, index) => (
            <div className={`collapsable ${this.state.open === index ? 'open': ''}`} key={index}>
              <div className="coll__header" onClick={this.setOpen.bind(this, index)}>
                <h2 className="coll__title">{palette.name}</h2>
              </div>
              <div className="coll__content">
                <p className="from">{palette.from}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
