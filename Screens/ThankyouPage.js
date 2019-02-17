import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

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
        <Text>
           { str }
        </Text>        
        <Button
          title={'Sign out'}
          style={styles.input}    
          onPress={this.onBackPressed.bind(this)}
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
    backgroundColor: '#00aacc',
  },
});