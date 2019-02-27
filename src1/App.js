import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/UI/Layout/Navbar';
import { Switch , Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter} from 'react-router-dom';

import RoutePath from './route';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <RoutePath />
      </React.Fragment>
    );
  }
}

export default App;
