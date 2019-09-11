import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="page__form">
        <label htmlFor="name" className="label__name">Nombre de la Película</label>
        <input name="name" id="name" type="text" className="input__name" value={this.props.data.name} onChange={this.props.setFilm} />
        <label htmlFor="description" className="label__desc">Descripción</label>
        <input name="description" id="description" type="text" className="input__desc" value={this.props.data.description} onChange={this.props.setFilm} />
        <select name="lang" id="lang" type="text" className="input__lang" value={this.props.data.lang} onChange={this.props.setFilm}>
          <option value="" className="select__option">Selecciona un idioma</option>
          <option value="español" className="select__option">Español</option>
          <option value="ingles" className="select__option">Inglés</option>
          <option value="portugues" className="select__option">Portugués</option>
        </select>

        <div className="classification">
          <label htmlFor="all" className="class__all">Todos los públicos
            <input type="radio" name="class" id="all" value="Todos los públicos" onChange={this.props.setFilm} checked={this.props.data.class === 'Todos los públicos'} />
          </label>
          <label htmlFor="7" className="class__7">+7
            <input type="radio" name="class" id="7" value="+7" onChange={this.props.setFilm} checked={this.props.data.class === '+7'} />
          </label>
          <label htmlFor="12" className="class__12">+12
            <input type="radio" name="class" id="12" value="+12" onChange={this.props.setFilm} checked={this.props.data.class === '+12'} />
          </label>
          <label htmlFor="16" className="class__16">+16
            <input type="radio" name="class" id="16" value="+16" onChange={this.props.setFilm} checked={this.props.data.class === '+16'} />
          </label>
          <label htmlFor="18" className="class__18">+18
            <input type="radio" name="class" id="18" value="+18" onChange={this.props.setFilm} checked={this.props.data.class === '+18'} />
          </label>
        </div>

        <div className="checkbox">
          <label for="check01">
            <input
              id="check01"
              type="checkbox"
              value="Comedia"
              name="genres"
              onChange={this.props.setFilm} 
              // checked={this.props.data.genres.includes('Comedia')}
            />
            Comedia
          </label>
          <label for="check02">
            <input
              id="check02"
              type="checkbox"
              value="Drama"
              name="genres"
              onChange={this.props.setFilm} 
              // checked={this.props.data.genres.includes('Drama')}
            />
            Drama
          </label>
          <label for="check03">
            <input
              id="check03"
              type="checkbox"
              value="Fantasía"
              name="genres"
            />
            Fantasía
          </label>
          <label for="check04">
            <input
              id="check04"
              type="checkbox"
              value="Terror"
              name="genres"
            />
            Terror
          </label>
          <label for="check05">
            <input
              id="check05"
              type="checkbox"
              value="Familiar"
              name="genres"
            />
            Familiar
          </label>
          <label for="check06">
            <input
              id="check06"
              type="checkbox"
              value="Acción"
              name="genres"
            />
            Acción
          </label>
        </div>
      </form>
    )
  }
}

export default Form;