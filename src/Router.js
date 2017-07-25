import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Chat from './components/Chat';

export const ChatStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Chat: {
    screen: Chat,
  },
});
