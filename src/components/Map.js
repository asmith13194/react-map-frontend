import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class Map extends Component{
  constructor(props){
     super(props)
   }
   render(){
     const Map = ReactMapboxGl({
       accessToken: process.env.REACT_APP_ACCESS_TOKEN
     });

     return(
       <Map
         style="mapbox://styles/mapbox/streets-v9"
         containerStyle={{
           height: "100vh",
           width: "100vw"
         }}>
           <Layer
             type="symbol"
             id="marker"
             layout={{ "icon-image": "marker-15" }}>
             <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
           </Layer>
       </Map>
     )
   }
}

export default Map;
