import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Text>Open App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload #wow :)</Text>
                    <Text>Shake your phone to open the developer menu!</Text>
                </View>
            </NativeRouter>
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
