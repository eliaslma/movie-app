import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes';
import { useFonts } from 'expo-font';
import { Loader } from './src/components/Loader';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return (
            <Loader color="#FFFFFF" />
        )
    }

    return (
        <>
            <StatusBar style='light' />
            <AppRoutes />
        </>
    );
}