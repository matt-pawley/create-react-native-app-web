import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0'
    },
});

export default class List extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>List page</Text>
            </View>
        );
    }
}
