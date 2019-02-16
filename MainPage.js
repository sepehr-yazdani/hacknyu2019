import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.username = props.navigation.state.params.username;

  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello {this.username}! </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
  }
});
