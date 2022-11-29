import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycars from './components/Mycars';
class  App extends Component {
  state={
    titre:'Mon Catalogue Voiture',
    color: 'green'}
  render(){
    return (
      <div className="App">
            <Mycars color={this.state.color} title={this.state.titre}/>
      </div>
    );
  }
  }
  

export default App;
