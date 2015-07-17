import React from 'react';
import LocationStore from '../stores/LocationStore';
import Location from './Location';

export default class Locations extends React.Component {

  constructor () {
    super();
    this.state = LocationStore.getState();
  }

  componentDidMount () {
    LocationStore.listen(this.onChange);
  }

  componentWillUnmount () {
    LocationStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    console.log('new state from store', state);
    this.setState(state);
  }

  render () {

    // erroneous case
    if (this.state.errorMessage) {
      return (<div>Error happened: {this.state.errorMessage}</div>);
    }

    // empty locations
    if (!this.state.locations.length) {
      return (<div>spinner...</div>);
    }

    return (
      <div>
        <ul>
          {this.state.locations.map(location => {
            return (
              <Location location={location} />
            );
          })}
        </ul>
      </div>
    );
  }

}
