import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, ImageBackground, Alert} from 'react-native';
import { Button, Card, FormLabel } from 'react-native-elements';

export default class PickOrDropPage extends React.Component {
  constructor(props) {
    super(props);
    this.onPickupPressed=this.onPickupPressed.bind(this);
    this.onDropoffPressed=this.onDropoffPressed.bind(this);
  }
  
  onPickupPressed(dropoff, pickup, username){
  //  this.setState(false) 
    const {navigation}=this.props;    
    this.props.navigation.navigate('SetBagNumPage', {dropoffPressed: false, 
    'dropoff': dropoff, 'pickup': pickup, username: username})

  }

  onDropoffPressed(dropoff, pickup, username){
  //  this.setState(true)  
    const {navigation}=this.props;    
    this.props.navigation.navigate('SetBagNumPage', {dropoffPressed: true, 
    'dropoff': dropoff, 'pickup': pickup, username: username})

  }

  render() {
    const {navigation}=this.props;    
    const username=navigation.getParam('username', '');
    let dropoff, pickup;
    let url='http://34.73.75.40:8080/ask/'+ username;
    fetch(url, {method: 'GET'}
            ).then((response) => response.json()).then((responseJson) => {
        dropoff=responseJson.Dropoff;
        pickup=responseJson.Pickup;
      }).catch((error) => {
        console.error(error);
      });

    return (
      <ImageBackground source={require('../assets/greenpattern.jpg')} style={styles.background}>
        <View style={styles.whitescreen}>
          <Button
            title={'Pick Up'}
            titleStyle={{fontWeight: '700', fontSize: 32}}
            buttonStyle={styles.pickButton}
            style={styles.input}
            containerStyle={{ marginTop: 20 }}
            onPress={()=>this.onPickupPressed(dropoff, pickup, username)}
          />
        
          <Button
            title={'Drop Off'}
            titleStyle={{fontWeight: '700', fontSize: 32}}
            buttonStyle={styles.dropButton}
            style={styles.input}
            containerStyle={{ marginTop: 20 }}
            onPress={()=>this.onDropoffPressed(dropoff, pickup, username)}
          />

          <Button
            title={'Go to Map'}
            titleStyle={{fontWeight: '300', fontSize: 24}}
            buttonStyle={styles.goToMapButton}
            style={styles.input}
            containerStyle={{ marginTop: 20 }}
            onPress={()=>this.props.navigation.navigate('ShowMapPage')}
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

  goToMapButton: {
        //flex: 1,
        //flexDirection: 'column',
        alignSelf: "center",
        backgroundColor: "rgba(0, 70 , 180, 1)",
        width: 300,
        height: 50,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 100,        
        marginBottom: 10,
  }, 
}); 