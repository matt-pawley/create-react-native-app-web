import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter, Route, Link } from 'react-router-native';
import getRoutes from './app/routes/routes.js';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {getRoutes()}
            </BrowserRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
