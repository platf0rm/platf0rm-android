/**
 * Created by aar on 29/03/2017.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Routes from './navigation/routes';
import getStore from './redux/store';

const AppNavigator = StackNavigator(Routes, {
    navigationOptions: {
        title: ({ state }) => {
            if (state.params) {
                return `${state.params.title}`;
            }
        },
        header: ({ state }) => ({
            visible: state.params !== undefined
        })
    }
});

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const ConnectedAppWithNavigationState = connect(state => ({
    nav: state.nav
}))(AppWithNavigationState);

export const store = getStore(navReducer);

export default function MyApp() {
    return (
        <Provider store={store}>
            <ConnectedAppWithNavigationState />
        </Provider>
    );
}