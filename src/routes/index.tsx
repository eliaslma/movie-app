import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { AppTabRoutes } from './app.tab.routes';


export function AppRoutes() {

    return (
        <NavigationContainer>
            <AppTabRoutes />
        </NavigationContainer>
    );
}