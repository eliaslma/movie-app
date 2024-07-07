import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeAppLogo from '../../assets/home_app_logo.svg';
import AccountCircle from '../../assets/account_circle.svg';


//Routes
import { HomeRoutes } from './app.stack.routes';

//Screen
import { ProfileScreen } from '../screens/ProfileScreen';


export function AppTabRoutes() {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarBadgeStyle: { backgroundColor: '#0A0B13'},
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarStyle: { backgroundColor: '#0A0B13', borderTopWidth: 0}
            }}>
            <Tab.Screen name="HomeRoutes" component={HomeRoutes}
                options={{
                    tabBarIcon: ({ color }: any) =>
                        <HomeAppLogo fill={color} width={RFValue(24)} height={RFValue(24)} />
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }: any) =>
                        <AccountCircle fill={color} width={RFValue(24)} height={RFValue(24)} />
                }} />
        </Tab.Navigator>
    );

}