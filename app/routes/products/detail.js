import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F'
    },
});

export default class Detail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail page</Text>
            </View>
        );
    }
}
