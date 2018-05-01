import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "inherit"}}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
