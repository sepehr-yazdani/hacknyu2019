import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class ShowQRCodePage extends React.Component{
  onFinish(){
  //  this.setState(true)  
    this.props.navigation.navigate('ThankyouPage')
  }

  render() {
    const {navigation}=this.props;
    const username=navigation.getParam('username', '');
    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const numBags=navigation.getParam('numBags', 0);

    var str='http://10.18.224.223:8080/';
    if(dropoffPressed){
      str=str+'dropoff'
    }else{
      str=str+'pickup'
    }
    str=str+'?name='+username+'&bags='+numBags;

    return (
      <View style={styles.container}>
        <QRCode
          value={str}
          size={200}/> 
          <Text>
          {str}
          </Text>
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