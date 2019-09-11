import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.color === 'blue') {
      this.setState({
        color: 'red'
      })
    } else {
      this.setState({
        color: 'blue'
      })
    };
  }

  render() {
    return (
      <div className="App">

        <div className={`box ${this.state.color}`} onClick={this.changeColor}></div>

      </div>
    );
  }
}

export default App;
