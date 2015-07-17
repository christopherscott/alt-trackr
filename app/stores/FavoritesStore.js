import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class FavoritesStore {

  constructor () {
    this.locations = [];
    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      removeFavoriteLocation: LocationActions.UN_FAVORITE_LOCATION
    });
  }

  addFavoriteLocation (location) {
    this.locations.push(location);
  }

  removeFavoriteLocation (location) {
    this.locations = this.locations.filter((l) => {
      return l !== location;
    });
  }

}

export default alt.createStore(FavoritesStore, 'FavoritesStore');
