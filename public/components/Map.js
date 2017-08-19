import React, {Component} from 'react';


class Map extends Component{
  constructor(props){
     super(props)
   }
   render(){
      let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyB3FN8mhs7x6Zr2r0xZKHs9O04Xq4X2r0I&origin=${ this.props.StartTerm }&waypoints=${ this.props.FrozenTerm }&destination=${ this.props.EndTerm }`
      let elm = null
      if (true) {
         elm =     <iframe title="map" className="map"
                    src={ url } allowFullScreen>
                  </iframe>
      }

      return(
        <div id='map' style='width: 400px; height: 300px;'></div>
        <script>
          mapboxgl.accessToken = process.env.ACCESS_TOKEN;
          var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v10'
          });
        </script>
      )
   }
}

export default Map
