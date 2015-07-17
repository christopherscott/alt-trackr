import React from 'react';
import Locations from './Locations';
import LocationActions from '../actions/LocationActions';
import Favorites from './Favorites';

export default class App extends React.Component {

  handleLoadData () {
    LocationActions.fetchLocations();
  }

  handleNewLocation = () => {
    console.log('handleNewLocation');
    var locationName = this.refs.newLocationInput.getDOMNode().value.trim();
    LocationActions.newLocation(locationName);
  }

  handleKeyDown = (evt) => {
    if (evt.which === 13) {
      this.handleNewLocation();
    }
  }

  render() {
    return (
      <div className="app">
        <input type="text" ref="newLocationInput" onKeyDown={this.handleKeyDown}/>
        <button onClick={this.handleNewLocation}>Add</button>
        <Locations />
        <Favorites />
        <button onClick={this.handleLoadData}>Load</button>
      </div>
    );
  }
}
