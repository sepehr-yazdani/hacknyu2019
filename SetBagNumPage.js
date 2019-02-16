import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

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
    return (
      <View style={styles.container}>
        <Text>
          Enter the number of bags to drop off:          
        </Text>
        <TextInput
          value={this.state.numBags}
          onChangeText={(numBags) => this.setState({ numBags })}
          placeholder={'0'}
          style={styles.input}
        />
        <Button
          title={'Submit'}
          style={styles.input}
          onPress={this.onSubmitPressed.bind(this)}
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
    backgroundColor: '#ffaaaa',
  },
});