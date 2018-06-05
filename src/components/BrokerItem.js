//@flow
import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

export default class CurrencyItem extends React.Component{
    render() {
        const { item }= this.props
        return (
                <TouchableNativeFeedback onPress={() => this.props.onPress(item)}>
                    <View style={styles.row}>
                        <Text style={styles.heading}>{item.key}</Text>
                    </View>
                </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1
    },
    heading: {
        fontWeight: 'bold'
    }
})
