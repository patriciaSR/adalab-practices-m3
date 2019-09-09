import React from 'react';
import './App.css';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHating: false,
      onion: { isHating: false },
      tomato: { isHating: false },
      banana: { isHating: false }
    }

    this.onionReact = this.onionReact.bind(this);
    this.onion2React = this.vegetableReact.bind(this, 'onion');
    this.tomatoReact = this.vegetableReact.bind(this, 'tomato');
    this.bananaReact = this.vegetableReact.bind(this, 'banana');
  }
  
  onionReact(isHating) {
    this.setState({ isHating });
  }
  
  vegetableReact(vegetable, isHating) {
    this.setState({
      [vegetable]: {
        isHating
      }
    });
    console.log(this.state)
  }

  render() {
    return (
      // <OnionHater />
      <div className={`app ${this.state.isHating ? 'red' : ''}`} >
        <OnionHater reaction={this.onionReact} />
        <hr />
        <OnionHater vegetable="onion" reaction={this.onion2React} />
        <OnionHater vegetable="tomato" reaction={this.tomatoReact} />
        <OnionHater vegetable="banana" reaction={this.bananaReact} />

        <Destiny />
      </div>
    )
  }
};

export default App;
