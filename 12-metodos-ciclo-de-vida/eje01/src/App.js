import React from 'react';
import './App.css';
import Clock from './components/Clock';
import NoClock from './components/NoClock';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <>
        <ul className="nav">
          <li className="nav_item">
            <Link to="/">Clock</Link>
          </li>
          <li className="nav_item">
            <Link to="/noclock">No Clock</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Clock}></Route>
          <Route path="/noclock" component={NoClock}></Route>
        </Switch>
      </>
    )
  }
}



export default App;
