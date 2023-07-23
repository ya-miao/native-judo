import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Text, View } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import HomeTab from '../tabs/HomeTab';
import StrategyTab from '../tabs/StrategyTab';
import TechniquesTab from '../tabs/TechniquesTab';
import OpponentsTab from '../tabs/OpponentsTab';
import AccountTab from '../tabs/AccountTab';

import {
  DarkTheme
} from '@react-navigation/native';

import { StatusBar } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const theme = {
  // ...DefaultTheme,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#101010',
    // text: '#ffffff'
    // primary: '#9a4747',
    primary: '#bb0000',
  },
};

function TopTabPager() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          // tabBarInactiveTintColor: "#696969",
          tabBarLabelStyle: { fontSize: 12 },
          // tabBarActiveTintColor: '#e91e63',
          tabBarStyle: { backgroundColor: '#000000' },
        }}
      // style={{ paddingTop: StatusBar.currentHeiapp/assets/tabs/HomeTab copy 4.jsght }} // This should only work for Android. iOS has SafeAreaView that does not work with Android
      >
        <Tab.Screen
          name="Home"
          // component={Home}
          component={HomeTab}
          options={{
            tabBarLabel: 'Home',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            )
          }}
        />
        <Tab.Screen
          name="Techniques"
          component={TechniquesTab}
          options={{
            tabBarLabel: 'Techniques',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="notebook" color={color} size={25} />
            )
          }}
        />
        <Tab.Screen
          name="Strategies"
          component={StrategyTab}
          options={{
            tabBarLabel: 'Strategies',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="strategy" color={color} size={25} />
            )
          }}
        />
        <Tab.Screen
          name="Opponents"
          component={OpponentsTab}
          options={{
            tabBarLabel: 'Opponents',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={25} />
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountTab}
          options={{
            tabBarLabel: 'Account',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={25} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopTabPager;