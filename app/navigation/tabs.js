import React from 'react';
import { TabNavigator } from 'react-navigation';

import ThreadListScreen from '../components/ThreadListScreen';

export const Tabs = TabNavigator({
    Hot: {
        screen: ThreadListScreen,
    },
    Trending: {
        screen: ThreadListScreen,
    },
    Rising: {
        screen: ThreadListScreen,
    }
}, {
    lazyLoad: true
});
