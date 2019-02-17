import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-elements'

export default class SetBagNumPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numBags: '',
    };
  }

  onSubmitPressed(){
    this.props.navigation.navigate('ShowMapPage')
  }

  onMapButtonPressed(){
    this.props.navigation.navigate('ShowMapPage')
  }

  render() {
    const {navigation}=this.props;
    const username=navigation.getParam('username', '');
    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const dropoff=navigation.getParam('dropoff', 0);
    const pickup=navigation.getParam('pickup', 0);
    let str='You have dropped off '+dropoff+' bags and picked up '+pickup+' bags up to now. '

    return (
     <ImageBackground source={require('../assets/greenpattern.jpg')} style={styles.background}>
        <KeyboardAvoidingView style={styles.whitescreen}  behavior="padding">
          <Text style={styles.textAnnounce}>{str}</Text>
          {dropoffPressed==true ?
            <Text style={styles.textAnnounce}>How many bags would you like to drop off today?</Text> :
            <Text style={styles.textAnnounce}>How many bags would you like to pick up today?</Text>
          }
          <TextInput
            value={this.state.numBags}
            onChangeText={(numBags) => this.setState({ numBags })}
            placeholder={'0'}
            style={styles.inputText}
            keyboardType={'number-pad'}
          />
          <Button
            title={'Submit'}
              titleStyle={{fontWeight: '400', fontSize: 24}}
              buttonStyle={styles.button}
              containerStyle={{ marginTop: 20 }}
            onPress={()=>this.props.navigation.navigate('ShowQRCodePage', {
				'username': username,
				'dropoffPressed': dropoffPressed,
				'numBags': this.state.numBags,
				'dropoff': dropoff,
				'pickup': pickup
            })}
          />
          <Button
           title={'Go to Map'}
           titleStyle={{fontWeight: '300', fontSize: 24,  color: 'rgba(0, 0, 0, 1)',}}
           buttonStyle={styles.goToMapButton}
           style={styles.input}
           containerStyle={{ marginTop: 20 }}
           onPress={()=>this.props.navigation.navigate('ShowMapPage')}
         />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 65,
    fontWeight: '700',
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: 'rgba(158, 158, 158, 1)',
    borderWidth: 1,
    borderRadius: 5,
  },

  textAnnounce: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    //fontFamily: 'Roboto',
    color: 'rgba(26,105,30,1)',
  },

  background: {
    width: '100%',
    height: '100%'
  },

  whitescreen: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    //opacity: 0.8,
  },

  button: {
    //flex: 1,
    //flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'rgba(17, 163,52, 1)',
    width: 240,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
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
       marginTop: 10,
       marginBottom: 10,
 },
});
