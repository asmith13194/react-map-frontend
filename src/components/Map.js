import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
        mapStyle={"mapbox://styles/senbenito/cj6l7rurn7tx82rmnufn1l38p"}
        width={400}
        height={400}
        latitude={40.0150}
        longitude={-105.2705}
        zoom={10}
        // onViewportChange={(viewport) => {
        //   const {width, height, latitude, longitude, zoom} = viewport;
        //   // Optionally call `setState` and use the state to update the map.
        // }}
      />
    );
  }
}

      //  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
export default Map;
