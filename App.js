

import React from 'react';
import { Button,View, Text, TextInput
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack';
import ListScreen from "./src/screens/List"
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import Amplify, { Auth } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)


// class WelcomeScreen extends React.Component {
//   // state = { // 1
//   //   authCode: ''
//   // }
//   // onChangeText(authCode) { // 2
//   //   this.setState({ authCode })
//   // }
//   // signUp() {
//   //   Auth.signUp({ // 3
//   //     username: 'myCoolUsername',
//   //     password: 'MyCoolP@ssword2!',
//   //     attributes: {
//   //       phone_number: '+15555555555',
//   //       email: 'yourcoolemail@gmail.com'
//   //     }
//   //   })
//   //   .then(res => {
//   //     console.log('successful signup: ', res)
//   //   })
//   //   .catch(err => {
//   //     console.log('error signing up: ', err)
//   //   })
//   // }
//   // confirmUser() { // 4
//   //   const { authCode } = this.state
//   //   Auth.confirmSignUp('myCoolUsername', authCode)
//   //     .then(res => {
//   //       console.log('successful confirmation: ', res)
//   //     })
//   //     .catch(err => {
//   //       console.log('error confirming user: ', err)
//   //     })
//   // }


//   // render() {
//   //   return (
//   //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   //        {/* <View >
//   //             <Button title='Sign Up' onPress={this.signUp.bind(this)} />
//   //             <TextInput
//   //               placeholder='Input Code'
//   //               onChangeText={value => this.onChangeText(value)}
//   //             />
//   //             <Button
//   //               title='Confirm User'
//   //               onPress={this.confirmUser.bind(this)}
//   //             /> */}
//   //        {/* </View> */}
//   //       <Text>Welcome Screen</Text>
//   //       <Button
//   //         title="Go to Lists"
//   //         onPress={() => this.props.navigation.navigate('List')}
//   //       />
//   //     </View>
//   //   );
//   // }
// }
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})


const RootStack = createStackNavigator(
  {
    // Home: WelcomeScreen,
    // List: ListScreen,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,

  },
  // {
  //   initialRouteName: 'Home',
  // }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}