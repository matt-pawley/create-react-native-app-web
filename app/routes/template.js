import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class Template extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Link to="/">
                    <Text>List page</Text>
                </Link>

                <Link to="/product-detail">
                    <Text>Detail page</Text>
                </Link>

                { this.props.children }
            </View>
        );
    }
}
