import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class ShowQRCodePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      QRstring: '',
    };
  }

  onFinish(){
    const {navigation}=this.props;
    const numBags=navigation.getParam('numBags', 0);  
    const dropoff=navigation.getParam('dropoff', 0); 
    const dropoffPressed=navigation.getParam('dropoffPressed', true);  
    const pickup=navigation.getParam('pickup', 0);
    let out1=dropoff;
    let out2=pickup;
    if(dropoffPressed){
      out1=parseInt(out1)+parseInt(numBags);
    }else{
      out2=parseInt(out2)+parseInt(numBags);
    }
  //  this.setState(true)  
    this.props.navigation.navigate('ThankyouPage', {numBags : numBags, 'dropoff': out1,
            'pickup': out2})
  }

  onMapButtonPressed(){
    this.props.navigation.navigate('ShowMapPage')
  }

  render() {
    const {navigation}=this.props;
    const username=navigation.getParam('username', '');
    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const numBags=navigation.getParam('numBags', 0);

    var str='http://172.29.240.182:8080/';
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