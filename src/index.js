import React, { Component } from 'react';
import { AppRegistry, Platform, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class App extends Component {
    render() {
        return (
        	<View style={styles.wrapper}>
                <Text>The application has started succesfully!</Text>
            </View>
        );
    }
}

if (Platform.OS === 'web') {
    AppRegistry.registerComponent('App', () => App);

    AppRegistry.runApplication('App', {
		rootTag: document.getElementById('root')
	});
}