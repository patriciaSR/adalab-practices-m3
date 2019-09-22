import React from 'react';

class Mimimi extend React.Component {
  render(){
    return(
      <form className="form">
        <label htmlFor="text" className="text">Estribe tu texto</label>
        <input type="text" name="text" id="text"/>
      </form>
      <div className="result">
        <p className="text__result"></p>
      </div>
    )
  }
}

export default Mimimi;