import alt from '../alt';
import _ from 'lodash';
import LocationActions from '../actions/LocationActions';
import FavoritesStore from '../stores/FavoritesStore';

class LocationStore {

  constructor () {
    this.locations = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorite: LocationActions.FAVORITE_LOCATION,
      unFavorite: LocationActions.UN_FAVORITE_LOCATION,
      newLocation: LocationActions.NEW_LOCATION,
      deleteLocation: LocationActions.DELETE_LOCATION
    });
  }

  deleteLocation (id) {
    _.remove(this.locations, (location) => { return location.id === id; });
  }

  newLocation (name) {
    this.locations.push({
      name,
      id: Date.now(),
      is_favorite: false
    });
  }

  handleUpdateLocations (locations) {
    this.locations = locations;
    this.errorMessage = null;
  }

  handleFetchLocations () {
    // empty the array of locations, so the views can show
    // a spinner while everything is loading
    this.locations = [];
  }

  handleLocationsFailed (errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites () {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        is_favorite: false
      };
    });
  }

  setFavorite (locationId) {
    this.waitFor(FavoritesStore);

    var favoritedLocation = this.locations.filter((location) => {
      return location.id === locationId;
    })[0];

    if (favoritedLocation) {
      favoritedLocation.is_favorite = true;
    }
  }

  unFavorite (locationId) {
    this.waitFor(FavoritesStore);

    var favoritedLocation = this.locations.filter((location) => {
      return location.id === locationId;
    })[0];

    if (favoritedLocation) {
      favoritedLocation.is_favorite = false;
    }
  }

}

export default alt.createStore(LocationStore);
