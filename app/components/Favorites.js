import React from 'react';
import FavoritesStore from '../stores/FavoritesStore';

export default class Favorites extends React.Component {

  state = FavoritesStore.getState();

  constructor () {
    super();
  }

  componentDidMount () {
    FavoritesStore.listen(this.onChange);
  }

  componentWillUnmount () {
    FavoritesStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState(state);
  }

  render () {
    return (
      <div>
        <h1>Favorites</h1>
        {this.state.locations.map((locationID) => {
          return (<div>{locationID}</div>);
        })}
      </div>
    );
  }

}
