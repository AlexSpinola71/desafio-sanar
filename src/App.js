import React, { Component } from 'react';
//import './App.css';
import Header from './components/header'
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "inherit"}}>
        <Header />
        <Body />
        <Header/>
      </div>
    );
  }
}

export default App;
