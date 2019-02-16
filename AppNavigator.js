import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login'
import MainPage from './MainPage'

const AppNavigator = createStackNavigator({
  Login: { screen: Login},
  MainPage: { screen: MainPage},
});

const App = createAppContainer(AppNavigator);

export default App;
