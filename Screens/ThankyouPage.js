import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Alert} from 'react-native';
import {Button} from 'react-native-elements';

export default class ThankyouPage extends React.Component{
  onBackPressed(){
  //  this.setState(true)
    this.props.navigation.navigate('LoginPage')
  }

  render() {
    const {navigation}=this.props;
    const numBags=navigation.getParam('numBags', 0);
    const dropoff=navigation.getParam('dropoff', 0);
    const pickup=navigation.getParam('pickup', 0);
    let str = 'You have now dropped '+ dropoff + ' bags and picked up ' + pickup +' bags! Thank you for helping with our sustainability!';
    return (
        <View style={styles.container}>
          <Text style = {styles.textThanks}>
            { str }
          </Text>

          <Button
            title={'Sign out'}
            titleStyle={{fontWeight: '500', fontSize: 30,  color: 'rgba(0, 0, 0, 1)',}}
            buttonStyle={styles.button}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onBackPressed.bind(this)}
          />

          <Image source={require('../assets/thankuearth.jpg')} style={styles.background}>
          </Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: 250,
    height: 220,
    alignItems: 'center',
    marginTop: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },

  textThanks: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    //fontFamily: 'Roboto',
    color: 'rgba(20, 90, 50,1)',
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

});
