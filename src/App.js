import React, { Component } from 'react';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
      </>
    );
  }
}

export default App;
