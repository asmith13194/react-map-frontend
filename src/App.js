import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'

class App extends Component {

  state = {
      places: [],
    }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/places')
    const json = await response.json()
    this.setState({places: json})
    console.log(this.state.places);
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
