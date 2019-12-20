/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as theme } from '@eva-design/eva';

import reducers from './src/redux/reducers';
import LoginView from './src/views/Auth/LoginView/LoginView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const store = createStore(reducers);


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={theme}>
            <LoginView/>
        </ApplicationProvider>
    </Provider>
  );
};

export default App;
