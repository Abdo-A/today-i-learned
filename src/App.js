import React, { Component } from 'react';

import Main from './pages/Main/Main';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
