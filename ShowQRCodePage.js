import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class ShowQRCodePage extends React.Component{
  onFinish(){
  //  this.setState(true)  
    this.props.navigation.navigate('ThankyouPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value="http://awesome.link.qr"
        /> 
        <Button
          title={'Finish'}
          style={styles.input}
          onPress={this.onFinish.bind(this)}
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
    backgroundColor: '#aaaaff',
  },
});