import React from 'react';
import './App.css';
import { getData } from './services/get-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      selectedCities: []
    };

    this.getUserData();
  }

  getUserData() {
    getData()
      .then((data) => {
        this.setState({
          userData: data.results
        });
      });
  }

  getCities() {
    const newArr = [... this.state.userData]
    newArr.map(user => user.location.city);
  }

  // selectCity(event) {
  //   const id: 
  //   const newArr = [... this.state.selectedCities]
  // }

  render() {
    return (
      <div className="App">
        <h1 className="page__title">Fake LinkedIn</h1>
        <div className="filters">
          <ul className="city__list">
            {this.state.userData
              .map(user => user.location.city)
              .map((city, index) => (
                <li className="city" key={index}>
                  <label htmlFor="cityFilter">{city}
                    <input type="checkbox" id="cityFilter" value={city} /*onClick={this.selectCity}*/ />
                  </label>
                </li>
              ))}
          </ul>
        </div>

        <ul className="page__list">
          {this.state.userData
            .map((user, index) => (
              <li className="user" key={user.id.value || index}>
                <h2 className="user__name">Nombre: {user.name.title} {user.name.first} {user.name.last}</h2>
                <img src={user.picture.medium} alt={user.name.first} className="user__image" />
                <p className="user__city">Ciudad: {user.location.city}</p>
                <p className="user__age">Edad: {user.dob.age} años</p>

              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
