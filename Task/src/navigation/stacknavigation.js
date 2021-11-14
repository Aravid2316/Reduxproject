import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/homeScreen';
import DetailScreen from '../../src/screens/detailsScreen';
import WelcomeScreen from '../screens/welcome_screen';



const Stack = createNativeStackNavigator();

function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;