import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Home extends React.Component {
  state = {
    name: '',
  };

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Text style={styles.title}>
          Enter your name
        </Text>
        <TextInput
          style={styles.inputName}
          placeholder='Pavan Mallela'
          onChangeText={(text) => {this.setState({name: text})}}
          value={this.state.name}
        />
        <TouchableOpacity onPress={() => navigate('Chat', {name: this.state.name})}>
          <Text style={styles.nextButton}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  inputName: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 20,
  },
  nextButton: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  }
});

export default Home;
