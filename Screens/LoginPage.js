import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Request } from 'react-native';

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state
    fetch('172.29.240.182:8080/fetch/', {method: 'POST'});
  //  const myRequest=new Request('10.18.224.223:8080/fetch', {method: 'POST', body: ''})
  //  fetch(myRequest)
  //.   then(response => {})
    this.props.navigation.navigate('PickOrDropPage',
      {username : this.state.username,
      password : this.state.password,});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Login:
        </Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
