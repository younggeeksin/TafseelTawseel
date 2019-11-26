import React from 'react';
// import { I18nManager } from 'react-native';
// I18nManager.forceRTL(true);
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Languages } from '@common';
import { enableScreens } from 'react-native-screens';
enableScreens();

global.tr = v => {
    return Languages.ar[v] || 'undefined';
};

import reducers from './reducers';
import App from './App';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Launch } from '@components';

const middleware = [thunkMiddleware];
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

// global.internal_token = "";
// console.log('Root.js :: ',store.getState())
let persistor = persistStore(store);
// console.disableYellowBox = true;
class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Launch />} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );
    }
}

export default Root;
