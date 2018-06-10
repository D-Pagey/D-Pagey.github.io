import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />      
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
