import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import DailiesByTag from './pages/DailiesByTag';
import Daily from './pages/Daily/Daily';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NewDaily from './pages/NewDaily/NewDaily';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/daily/:daily_id" component={Daily} />
          <Route path="/tag/:tag_name" component={DailiesByTag} />
          <Route path="/new" component={NewDaily} />
        </Switch>
      </>
    );
  }
}

export default App;
