/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase, {FirebaseContext} from './FirebaseContext';
import {Provider} from 'react-redux';
import store from './redux/store';

const AppContext = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <Provider store={store}>
                <App/>
            </Provider>
        </FirebaseContext.Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContext);
