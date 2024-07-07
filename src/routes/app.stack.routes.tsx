import React from 'react';

import { propsNavigatorStack } from './Models';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';


export function HomeRoutes(){

    const Stack = createNativeStackNavigator<propsNavigatorStack>()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen}/>
        </Stack.Navigator>
    );
}