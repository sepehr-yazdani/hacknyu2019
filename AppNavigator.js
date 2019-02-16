import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './LoginPage'
import PickOrDropPage from './PickOrDropPage'
import SetBagNumPage from './SetBagNumPage'
import ShowMapPage from './ShowMapPage'
import ShowQRCodePage from './ShowQRCodePage'
import ThankyouPage from './ThankyouPage'

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
