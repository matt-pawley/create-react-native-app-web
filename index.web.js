// index.web.js
import React from 'react';
import App from './App.js';
import ReactNative, { AppRegistry } from 'react-native';

// Register the app
AppRegistry.registerComponent('App', () => App);

// Run the app
AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('react-app')
});
