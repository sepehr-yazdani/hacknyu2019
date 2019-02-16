import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class ShowMapPage extends React.Component{
  onScanQRCode(){
  //  this.setState(true)  
    this.props.navigation.navigate('ShowQRCodePage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please follow the map to find your nearest station
        </Text>
        <Button
          title={'Scan QR Code'}
          style={styles.input}
          onPress={this.onScanQRCode.bind(this)}
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