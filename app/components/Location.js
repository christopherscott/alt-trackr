import React from 'react';
import LocationActions from '../actions/LocationActions';

export default class Location extends React.Component {

  static propTypes = {
    name: React.PropTypes.string
  };

  handleFavorite = () => {
    LocationActions.favoriteLocation(this.props.location.id);
  }

  handleUnFavorite = () => {
    LocationActions.unFavoriteLocation(this.props.location.id);
  }

  handleDeleteLocation = () => {
    LocationActions.deleteLocation(this.props.location.id);
  }

  render () {
    var favorite = this.props.location.is_favorite;

    return (
      <li>
        {this.props.location.name}
        {
          favorite ? <button onClick={this.handleUnFavorite}>un-favorite</button>
          : <button onClick={this.handleFavorite}>favorite</button>
        }
        <button onClick={this.handleDeleteLocation}>
          Delete this location
        </button>
      </li>
    );
  }

}
