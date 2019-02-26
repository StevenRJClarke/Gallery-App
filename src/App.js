import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import './App.css';

class App extends Component {
  componentDidMount() {
    // Use the Europeana Search API to search for painting information
    fetch('https://www.europeana.eu/api/v2/search.json?query=Caravaggio&media=true&profile=rich&wskey=CqjrYqrLp')
    .then( response => response.json() )
    .then( response => response.items )
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
