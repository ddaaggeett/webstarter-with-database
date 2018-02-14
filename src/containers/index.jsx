import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Main from './Main'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Main}/>
        </div>
    );
  }
}
