
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/App';

export default class ChitChat extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ChitChat', () => ChitChat);
