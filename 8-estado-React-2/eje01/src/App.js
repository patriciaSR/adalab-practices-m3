import React from 'react';
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      lang: '',
      class: 'Todos los públicos',
      genres: [],
    }

    this.setFilm = this.setFilm.bind(this);
  }

  setFilm(event) {
    const valueName = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    if(valueName === 'genres'){
      this.setState({
          genres: [...this.state.genres, newValue]
      });
    }
    this.setState({
      [valueName]: newValue
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          data={this.state}
          setFilm={this.setFilm}
        />

        <Preview
          data={this.state}
        />

      </div>
    );
  }
}

export default App;
