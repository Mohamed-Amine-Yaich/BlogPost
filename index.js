/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const root =()=>(<React.StrictMode>
  <Provider store={store} >
 <App />
</Provider>
</React.StrictMode>)

AppRegistry.registerComponent(appName, () =>root)
