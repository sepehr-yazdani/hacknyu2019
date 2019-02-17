import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class ShowMapPage extends React.Component{
  render() {
    const {navigation}=this.props;

    const username=navigation.getParam('username', '');

    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const numBags=navigation.getParam('numBags', 0);
 // Please follow the map to find your nearest station
    return (
      <View style={styles.container}>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#aaaaaa',
  },
});