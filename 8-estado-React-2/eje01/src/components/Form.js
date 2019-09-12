import React from 'react';

class Form extends React.Component {

  renderGenre(id, genre) {
    return (
      <label key={id} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          value={genre}
          name="genres"
          onChange={this.props.setFilm}
          checked={this.props.data.genres.includes(genre)}
        />
        {genre}
      </label>
    );
  }

  renderGenres() {
    return ['Comedia', 'Drama', 'Fantasía', 'Terror', 'Familiar', 'Acción'].map((genre, index) =>
      this.renderGenre(`check${index}`, genre)
    );
  }

  render() {
    return (
      <form className="page__form">
        <label htmlFor="name" className="label__name">Nombre de la Película</label>
        <input
          name="name"
          id="name"
          type="text"
          className="input__name"
          value={this.props.data.name}
          onChange={this.props.setFilm}
        />
        <label htmlFor="description" className="label__desc">Descripción</label>
        <input
          name="description"
          id="description"
          type="text"
          className="input__desc"
          value={this.props.data.description}
          onChange={this.props.setFilm}
        />
        <select
          name="lang"
          id="lang"
          type="text"
          className="input__lang"
          value={this.props.data.lang}
          onChange={this.props.setFilm}>
            <option value="" className="select__option">Selecciona un idioma</option>
            <option value="español" className="select__option">Español</option>
            <option value="ingles" className="select__option">Inglés</option>
            <option value="portugues" className="select__option">Portugués</option>
        </select>

        <div className="classification">
          <label htmlFor="all" className="class__all">Todos los públicos
            <input
              type="radio"
              name="class"
              id="all"
              value="Todos los públicos"
              onChange={this.props.setFilm}
              checked={this.props.data.class === 'Todos los públicos'} />
          </label>
          <label htmlFor="7" className="class__7">+7
            <input
              type="radio"
              name="class"
              id="7"
              value="+7"
              onChange={this.props.setFilm}
              checked={this.props.data.class === '+7'} />
          </label>
          <label htmlFor="12" className="class__12">+12
            <input
              type="radio"
              name="class"
              id="12"
              value="+12"
              onChange={this.props.setFilm}
              checked={this.props.data.class === '+12'} />
          </label>
          <label htmlFor="16" className="class__16">+16
            <input
              type="radio"
              name="class"
              id="16"
              value="+16"
              onChange={this.props.setFilm}
              checked={this.props.data.class === '+16'} />
          </label>
          <label htmlFor="18" className="class__18">+18
            <input
              type="radio"
              name="class"
              id="18"
              value="+18"
              onChange={this.props.setFilm}
              checked={this.props.data.class === '+18'} />
          </label>
        </div>

        <div className="checkbox">
          {this.renderGenres()}
        </div>

        <div className="inputfile">
          <input 
            type="file" 
            name="image" 
            id="image" 
            ref={this.fileInput} 
            onChange={this.props.uploadImage}/>
        </div>
      </form>
    )
  }
}

export default Form;