import React from 'react';
import { TabNavigator } from 'react-navigation';

import MainScreen from '../containers/MainScreen';

export const Tabs = TabNavigator({
    Hot: {
        screen: MainScreen,
    },
    Trending: {
        screen: MainScreen,
    },
    Rising: {
        screen: MainScreen,
    }
});
