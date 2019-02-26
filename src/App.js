import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={
              () => (<Home/>)
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
