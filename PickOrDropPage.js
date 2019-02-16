import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class PickOrDropPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = props.navigation.state.params.username;
    this.password = props.navigation.state.params.password;
    this.state={
      dropoffPressed: true
    };
  }
  
  onPickupPressed(){
  //  this.setState(false) 
    this.props.navigation.navigate('SetBagNumPage')
  }

  onDropoffPressed(){
  //  this.setState(true)  
    this.props.navigation.navigate('SetBagNumPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Pick Up'}
          style={styles.input}
          onPress={this.onPickupPressed.bind(this)}
        />
        <Button
          title={'Drop Off'}
          style={styles.input}
          onPress={this.onDropoffPressed.bind(this)}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#aaffaa',
  },
});
