import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, ImageBackground, Alert} from 'react-native';
import { Button, Card, FormLabel } from 'react-native-elements';

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
      <ImageBackground source={require('../assets/greenpattern.jpg')} style={styles.background}>
        <View style={styles.whitescreen}>
          <Button
            title={'Pick Up'}
            titleStyle={{fontWeight: "700", fontSize: "32"}}
            buttonStyle={styles.pickButton}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onPickupPressed.bind(this)}
          />
        
          <Button
            title={'Drop Off'}
            titleStyle={{fontWeight: "700", fontSize: "32"}}
            buttonStyle={styles.dropButton}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onDropoffPressed.bind(this)}
          />
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({

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
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
    //opacity: 0.8,
  },

  pickButton: {
        //flex: 1,
        //flexDirection: 'column',
        alignSelf: "center",
        backgroundColor: "rgba(17, 163,52, 1)",
        width: 200,
        height: 100,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
  },



  dropButton: {
        //flex: 1,
        //flexDirection: 'column',
        alignSelf: "center",
        backgroundColor: "rgba(17, 163,52, 1)",
        width: 200,
        height: 100,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
  },
}); 