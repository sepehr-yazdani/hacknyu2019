import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Request, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import logoImg from '../assets/icons/grocerly_icon.png';

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onAuthenticate(){
    const { username, password } = this.state
    if((username=='Alice' || username=='Bob') && password!='qwerty'){
      alert('Incorrect user name or password. Please try again.')
    }else{
      this.onLogin();
    }
  }

  onLogin() {
    this.props.navigation.navigate('PickOrDropPage',
      {username : this.state.username,
       password : this.state.password,
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Grocer.ly</Text>
        <Text style={styles.login}>
          Login
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

        <TouchableOpacity onPress={this.onAuthenticate.bind(this)}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbfcf2',
  },
  image: {
    width: 120,
    height: 180,
  },
  text: {
    color: '#111602',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  login:{
    fontSize: 40,
    marginBottom: 25,
  },
  input: {
    width: 300,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    fontSize: 16,
  },
  button:{
    backgroundColor: 'rgb(25,111,61)',
    borderColor: 'white',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: 300,
  }
});
