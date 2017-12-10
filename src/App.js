import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header } from './components';
import MainPage from './pages/main';
import SchedulePage from './pages/schedule'
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header/>
        <SchedulePage />
      </div>
    </Provider>
    );
  }
}

export default App;
