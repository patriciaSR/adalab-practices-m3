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
      image: 'https://https://www.placecage.com/c/200/300'
    }
    this.fileInput = React.createRef();
    this.fr = new FileReader();

    this.setFilm = this.setFilm.bind(this);
    this.uploadImage = this.uploadImage.bind(this)

  }

  setGenre(event) {
    const newValue = event.currentTarget.value;
    const genres = this.state.genres;

    if (genres.includes(newValue)) {
      // borro
      const foundIndex = genres.findIndex((genre) => genre === newValue);
      // const foundIndex = genres.indexOf(newValue);

      genres.splice(foundIndex, 1);

      this.setState({
        genres: [...genres]
      });
    } else {
      // añado, hay hueco?
      if (genres.length < 3) {
        // sí
        this.setState({
          genres: [...genres, newValue]
        });
      } else {
        // no
        alert('Has alcanzado el máximo de géneros que puedes seleccionar');
      }
    }
  }

  setFilm(event) {
    const valueName = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    if (valueName === 'genres') {
      this.setGenre(event);
    } else {
      this.setState({
        [valueName]: newValue
      })
    }
  }

  uploadImage(event){
    const newFile = event.currentTarget.files[0];
    // Esto genera una URL "temporal" 
    // (solo existe mientras la pestaña siga abierta y en el navegador en el que se ha generado)
    // const newUrl = URL.createObjectURL(newFile);
    this.fr.addEventListener('load', () => {
      this.setState({
        image: this.fr.result
      });
    });
    this.fr.readAsDataURL(newFile);
  };

  render() {
    return (
      <div className="App">
        <Form
          data={this.state}
          setFilm={this.setFilm}
          uploadImage={this.uploadImage}

        />

        <Preview
          data={this.state}
        />

      </div>
    );
  }
}

export default App;
