import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import MainPage from './pages/main';
import SchedulePage from './pages/schedule';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/schedule" component={SchedulePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
