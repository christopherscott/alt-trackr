import alt from '../alt';
import LocationAPI from '../utils/LocationAPI';

// actions juggle calling the async code
// and dispatching more actions

// Actions are created by creating a class, and the class'
// prototype method will be the actions
class LocationActions {

  updateLocations (locations) {
    // UPDATE_LOCATIONS
    // Inside those actions, you can use this.dispatch to dispatch
    this.dispatch(locations);
  }

  locationsFailed (message) {
    this.dispatch(message);
  }

  newLocation (name) {
    LocationAPI
      .add(name)
      .then(() => { this.dispatch(name); });
  }

  doSomethign () {
    this.dispatch();
  }

  deleteLocation (id) {
    // DELETE_LOCATION  // < ---
    this.dispatch();
    this.doSomethign();
    LocationAPI.delete(id);
  }

  fetchLocations () {
    console.log('fetch location');
    // FETCH_LOCATIONS
    this.dispatch();

    // update

    LocationAPI
      .fetch()
      .then((locations) => { this.actions.updateLocations(locations); });
  }

  favoriteLocation (locationId) {
    this.dispatch(locationId);
  }

  unFavoriteLocation (locationId) {
    this.dispatch(locationId);
  }

}

export default alt.createActions(LocationActions);
