import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { LearnScreen } from '../screens/LearnScreen';
import { PracticeScreen } from '../screens/PracticeScreen';
import { CalculatorScreen } from '../screens/CalculatorScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,

                    tabBarStyle: {
                        backgroundColor: '#142026',
                        borderTopWidth: 0,
                    },

                    tabBarActiveTintColor: '#3BAA5C',

                    tabBarInactiveTintColor: '#999',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Tab.Screen
                    name="Learn"
                    component={LearnScreen}
                />

                <Tab.Screen
                    name="Practice"
                    component={PracticeScreen}
                />

                <Tab.Screen
                    name="Calculator"
                    component={CalculatorScreen}
                />

                <Tab.Screen
                    name="History"
                    component={HistoryScreen}
                />

                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
