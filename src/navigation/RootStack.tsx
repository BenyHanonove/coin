import React from 'react';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

//Interface for root nav
export type RootStackParamList = {
    Welcome:undefined;
    Signup:undefined;
    Signin:any;
};

//Interface that pass user activate / deactivate
interface RootStackProps {
  flipUser:()=>void;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC<RootStackProps> = (props) => {  
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerShown:false,
        }}
        >
            <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            />
            
            <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            />
            
            <Stack.Screen 
            name="Signin" 
            component={SigninScreen as React.ComponentType}
            initialParams={{ flipUser: props.flipUser }}
            />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;