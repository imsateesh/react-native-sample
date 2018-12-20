
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import SearchPage from './Home';
  import SearchResults from './SearchResults';




const RootStack = createStackNavigator({
    Home: { screen: SearchPage },
    Results: { screen: SearchResults },


});

const App = createAppContainer(RootStack);

export default App;
