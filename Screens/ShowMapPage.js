import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class ShowMapPage extends React.Component{
  render() {
    const {navigation}=this.props;
    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const numBags=navigation.getParam('numBags', 0);
 // Please follow the map to find your nearest station
    return (
      <View style={styles.container}>
        <Text>
        
          {dropoffPressed}+' '+{numBags}
        </Text>
        <Button
          title={'Scan QR Code'}
          style={styles.input}
          onPress={() => this.props.navigation.navigate('ShowQRCodePage', {
            'dropoffPressed': dropoffPressed,
            'numBags': numBags
          })}
        />        
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