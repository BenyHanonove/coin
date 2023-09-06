import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Navigation import for tab nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Screen components
import HomeScreen from '../screens/HomeScreen';
import CardsScreen from '../screens/CardsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import SettingScreen from '../screens/SettingScreen';

//Interface for root nav
export type RootStackParamList = {
  Home: undefined;
  Cards: undefined;
  Transactions: undefined;
  Setting: undefined;
};


//Screen names
const homeName = "Home";
const cardsName = "Cards";
const transactionsName = "Transactions";
const settingName = "Setting";

const Tab = createBottomTabNavigator();

const AppTab: React.FC = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
    
        screenOptions={({route})=>({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName :string ="";
            let rn = route.name;
      
            if (rn === homeName) {iconName = focused ? "home" : "home-outline";} 
            else if (rn === cardsName) {iconName = focused ? "wallet" : "wallet-outline";} 
            else if (rn === transactionsName) {iconName = focused ? "podium" : "podium-outline";} 
            else if (rn === settingName) {iconName = focused ? "cog" : "cog-outline";}

            return <Ionicons name={iconName} size={size} color={color} />
          },
          headerShown:false,
        })}

        >

        
        <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        /> 
        
        <Tab.Screen 
        name='Cards' 
        component={CardsScreen}
        />
        
        <Tab.Screen 
        name='Transactions' 
        component={TransactionsScreen}
        />

        <Tab.Screen
        name='Setting' 
        component={SettingScreen}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTab;