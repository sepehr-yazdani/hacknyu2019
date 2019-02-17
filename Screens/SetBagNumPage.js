import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, ImageBackground} from 'react-native';
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

  render() {
    const {navigation}=this.props;

    const username=navigation.getParam('username', '');
    const dropoffPressed=navigation.getParam('dropoffPressed', true);


    return (
     <ImageBackground source={require('../assets/greenpattern.jpg')} style={styles.background}>
        <View style={styles.whitescreen}>
          {dropoffPressed==true ?
            <Text style={styles.textAnnounce}> Enter number of bags to drop off: </Text> :
            <Text style={styles.textAnnounce}> Enter number of bags to pick up: </Text>
          }
          <TextInput
            value={this.state.numBags}
            onChangeText={(numBags) => this.setState({ numBags })}
            placeholder={'0'}
            style={styles.inputText}
            keyboardType={'numeric'}
          />
          <Button
            title={'Submit'}
              titleStyle={{fontWeight: '400', fontSize: 24}}
              buttonStyle={styles.button}
              containerStyle={{ marginTop: 20 }}
            onPress={()=>this.props.navigation.navigate('ShowMapPage', {

              'username': username,

              'dropoffPressed': dropoffPressed,
              'numBags': this.state.numBags
            })}
          />
        </View>
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
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: 'rgba(158, 158, 158, 1)',
    borderWidth: 1,
    borderRadius: 5,
  },

  textAnnounce: {
    fontSize: 42,
    fontWeight: '800',
    paddingBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: 'Roboto',
    color: 'rgba(46,125,50,1)',
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
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
    //opacity: 0.8,
  },

  button: {
    //flex: 1,
    //flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'rgba(17, 163,52, 1)',
    width: 200,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
});
