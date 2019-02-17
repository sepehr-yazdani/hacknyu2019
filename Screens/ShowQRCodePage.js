import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
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

    var str='http://34.73.75.40:8080/';
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
          buttonStyle={styles.button}
          titleStyle={{fontWeight: '400', fontSize: 24}}
          onPress={this.onFinish.bind(this)}
        />
        <Button
          title={'Go to Map'}
          titleStyle={{fontWeight: '300', fontSize: 24,  color: 'rgba(0, 0, 0, 1)',}}
          buttonStyle={styles.goToMapButton}
          containerStyle={{ marginTop: 20 }}
          onPress={()=>this.props.navigation.navigate('ShowMapPage')}
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
    backgroundColor: 'rgba(56, 142 , 60, 1)',
  },
  goToMapButton: {
      //flex: 1,
      //flexDirection: 'column',
      alignSelf: "center",
      backgroundColor: "rgba(205, 220 , 57, 1)",
      width: 300,
      height: 50,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5,
      marginTop: 100,
      marginBottom: 10,
  },
  button: {
    //flex: 1,
    //flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'rgba(25, 111,61, 1)',
    width: 240,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
  },

});
