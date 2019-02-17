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
    const {navigation}=this.props;
    const dropoffPressed=navigation.getParam('dropoffPressed', true);

    return (
      <View style={styles.container}>
        {dropoffPressed==true ?
          <Text>Enter number of bags to drop off:</Text> :
          <Text>Enter number of bags to pick up:</Text>
        }        
        <TextInput
          value={this.state.numBags}
          onChangeText={(numBags) => this.setState({ numBags })}
          placeholder={'0'}
          style={styles.input}
        />
        <Button
          title={'Submit'}
          style={styles.input}
          onPress={()=>this.props.navigation.navigate('ShowMapPage', {
            'dropoffPressed': dropoffPressed,
            'numBags': this.state.numBags
          })}
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