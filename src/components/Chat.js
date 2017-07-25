import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Chat extends React.Component {
  render() {
    return(
      <View>
        <Text>Hello, {this.props.navigation.state.params.name}!</Text>
      </View>
    );
  }
}

Chat.defaultProps = { name: 'Pavan' };

export default Chat;
