// Import libraries to create and render app components
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/views/home/Home.js';
import Bills from './src/views/bills/Bills.js';
import Candidates from './src/views/candidates/Candidates.js';
import Polls from './src/views/polls/Polls.js';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  BillsScreen: { screen: Bills },
  CandidatesScreen: { screen: Candidates },
  PollsScreen: { screen: Polls }
});

const App = createAppContainer(AppNavigator);

export default App;
