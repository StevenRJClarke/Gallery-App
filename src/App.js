import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import './App.css';

class App extends Component {
  state = {
    paintings: []
  }

  componentDidMount() {
    // Pick the information we want from the fetched information and store in
    // array
    let paintingInfo = [];

    // Use the Europeana Search API to search for painting information
    fetch('https://www.europeana.eu/api/v2/search.json?query=Caravaggio&media=true&profile=rich&wskey=CqjrYqrLp')
    .then( response => response.json() )
    .then( response => response.items )
    .then( items => {
      // Loop through each fetched item
      items.forEach(
        // Pick out the relevant information from the Europeana Search API Response,
        // add it to an object and push this object to our paintingInfo array
        item => {
          // Create painting object which will be added to paintings array
          let painting = {
            // Give each painting object a gallery property, initialized to 'Not Seen'
            gallery: 'Not Seen'
          };

          // Check the item has a title. If so, add it as a property to the object
          // and push onto the array
          if (item.title) {
            let title = item.title[0];
            painting.title = title;
          }
          // If the item has no title, display this to the user
          else {
            painting.title = 'No title';
          }

          // Check the item has a description. If so, add it as a property to the object
          // and push onto the array
          if (item.dcDescription) {
            let description = item.dcDescription[0];
            painting.description = description;
          }
          // If the item has no description, display this to the user
          else {
            painting.description = 'No description';
          }

          // Check the item has a place label. If so, add it as a property to the object
          // and push onto the array
          if (item.edmPlaceLabel) {
            let placeLabel = item.edmPlaceLabel[0].def;
            painting.placeLabel = placeLabel;
          }
          // If the item has no place label, display this to the user
          else {
            painting.placeLabel = 'No place label';
          }

          // Check the item has a latitude and longitude. If so, add it as a property to the object
          // and push onto the array
          if (item.edmPlaceLatitude && item.edmPlaceLongitude) {
            let placeLatLng = { lat: item.edmPlaceLatitude[0], lng: item.edmPlaceLongitude[0] };
            painting.placeLatLng = placeLatLng;
          }
          // If the item has no place latitude and longitude, display this to the user
          else {
            painting.placeLatLng = 'No latitude and longitude';
          }

          // Check the item has an image. If so, add it as a property to the object
          // and push onto the array
          if (item.edmIsShownBy) {
            let imageURL = item.edmIsShownBy[0];
            painting.imageURL = imageURL;
          }
          // If the item has no place latitude and longitude, display this to the user
          else {
            painting.imageURL = 'No image';
          }

          // Push painting object to array
          paintingInfo.push(painting);
        }
      )

      // Set paintings state
      this.setState({
        paintings: paintingInfo
      });
    })
    .catch( error => console.log('Error', error) )
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
