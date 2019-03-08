import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// https://tomchentw.github.io/react-google-maps/#introduction
// also add google API key in html.js

const center = { lat: 40.442, lng: -79.943 }

class Map extends Component {
  render(){
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { center }
        defaultZoom = { 11 }
      >
        <Marker position={ center } />
      </GoogleMap>
    ));

    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `250px`, width: '90%', maxWidth: '400px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};

export default Map;