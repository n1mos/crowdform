import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './App/Store/store';
import {Provider} from 'react-redux';
import HomeScreen from './App/Screens/HomeScreen';
import LoginScreen from './App/Screens/LoginScreen';
import SignupScreen from './App/Screens/SignupScreen';
import FundsDetailsScreen from './App/Screens/FundsDetailsScreen';
import LoremIpsumScreen from './App/Screens/LoremIpsumScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const icons = {
            tabHomeSelected: require('./App/Assets/tabHomeSelected.png'),
            tabHomeUnselected: require('./App/Assets/tabHomeUnselected.png'),
            tabPortfolioSelected: require('./App/Assets/tabPortfolioSelected.png'),
            tabPortfolioUnselected: require('./App/Assets/tabPortfolioUnselected.png'),
            tabTradeSelected: require('./App/Assets/tabTradeSelected.png'),
            tabTradeUnselected: require('./App/Assets/tabTradeUnselected.png'),
          };

          let icon;

          if (route.name === 'Home') {
            icon = focused ? icons.tabHomeSelected : icons.tabHomeUnselected;
          } else if (route.name === 'Trade') {
            icon = focused ? icons.tabTradeSelected : icons.tabTradeUnselected;
          } else if (route.name === 'Portfolio') {
            icon = focused ? icons.tabPortfolioSelected : icons.tabPortfolioUnselected;
          }

          return <Image source={icon} />;
        },
        tabBarActiveTintColor: '#6a1ad4',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trade" component={LoremIpsumScreen} />
      <Tab.Screen name="Portfolio" component={LoremIpsumScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Fund" component={FundsDetailsScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
