//@flow
import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import HomeStack from './HomeStack'
import { SettingsScreen } from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default TabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: { screen: SettingsScreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-stats${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#bf0726',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
