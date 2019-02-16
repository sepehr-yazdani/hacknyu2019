import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './Screens/LoginPage'
import PickOrDropPage from './Screens/PickOrDropPage'
import SetBagNumPage from './Screens/SetBagNumPage'
import ShowMapPage from './Screens/ShowMapPage'
import ShowQRCodePage from './Screens/ShowQRCodePage'
import ThankyouPage from './Screens/ThankyouPage'

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage},
  PickOrDropPage: { screen: PickOrDropPage},
  SetBagNumPage: { screen: SetBagNumPage},
  ShowMapPage: { screen: ShowMapPage},
  ShowQRCodePage: { screen: ShowQRCodePage},
  ThankyouPage: { screen: ThankyouPage}
});

const App = createAppContainer(AppNavigator);

export default App;
