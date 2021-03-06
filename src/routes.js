import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Feed from './pages/Feed';
import logo from './assets/instagram.png'

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitle: <Image source={logo}></Image>,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            },
        },
    })
);

export default Routes;