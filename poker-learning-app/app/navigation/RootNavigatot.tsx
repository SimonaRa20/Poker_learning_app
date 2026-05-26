import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { LearnScreen } from '../screens/LearnScreen';
import { PracticeScreen } from '../screens/PracticeScreen';
import { CalculatorScreen } from '../screens/CalculatorScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useTranslation } from '../localization/useTranslation';
import { useTheme } from '../theme/useTheme';

const Tab = createBottomTabNavigator();

export function RootNavigator() {

    const translation = useTranslation();
    const colors = useTheme();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor:
                            colors.card,

                        borderTopWidth: 1,

                        borderTopColor:
                            colors.border,

                        height: 65,

                        paddingBottom: 6,
                    },

                    tabBarActiveTintColor:
                        colors.primary,

                    tabBarInactiveTintColor:
                        colors.secondaryText,

                    tabBarLabelStyle: {
                        fontSize: 12,

                        fontWeight: '600',
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel:
                            translation.home,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Learn"
                    component={LearnScreen}
                    options={{
                        tabBarLabel:
                            translation.learn,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="book"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Practice"
                    component={
                        PracticeScreen
                    }
                    options={{
                        tabBarLabel:
                            translation.practice,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="school"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Calculator"
                    component={
                        CalculatorScreen
                    }
                    options={{
                        tabBarLabel:
                            translation.calculator,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="calculator"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{
                        tabBarLabel:
                            translation.history,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="time"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={
                        SettingsScreen
                    }
                    options={{
                        tabBarLabel:
                            translation.settings,

                        tabBarIcon: ({
                            color,
                            size,
                        }) => (
                            <Ionicons
                                name="settings"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
