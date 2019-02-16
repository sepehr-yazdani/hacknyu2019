import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class ThankyouPage extends React.Component{  
  onBackPressed(){
  //  this.setState(true)  
    this.props.navigation.navigate('LoginPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          'Thank you for saving our planet!'
        </Text>        
        <Button
          title={'Back'}
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