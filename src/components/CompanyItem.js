//@flow
import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import type { Rate } from '../api/types'
import cf from 'currency-formatter'
import colors from '../colors'
import { HomeFeedChart } from './'
import { StackNavigator } from 'react-navigation'

export default class CompanyItem extends React.Component<{ rate: Rate, onPress: any }> {

    render() {
        const data = this.props.rate.lastTenDays.map(d => {
            return Object.assign({}, { x: d.date, y: d.rate })
        });
        return (
            <TouchableWithoutFeedback onPress={(id) => this.props.onPress(this.props.rate.id)}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 16 }}>{this.props.rate.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{cf.format(this.props.rate.rate, { symbol: this.props.symbol })}</Text>
                    </View>
                    <View style={[styles.row, { paddingTop: 0 }]}>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <View style={[styles.badge, { backgroundColor: colors[this.props.rate.color.toUpperCase()] }]} />
                            <Text style={{ fontSize: 12, color: '#666' }}>{this.props.rate.counter}</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: this.props.rate.gain > 0 ? 'green' : 'red' }}>
                            {this.props.rate.gain}%
                    </Text>
                    </View>
                    <View style={{ borderTopColor: '#ddd', borderTopWidth: 1, marginTop: 5 }} />
                    <HomeFeedChart data={data} color={this.props.rate.color} />
                </View >
            </TouchableWithoutFeedback >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#ccc',
        margin: 5,
        backgroundColor: '#fff',
    },
    row: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, paddingBottom: 0 },
    badge: { width: 10, height: 10, marginRight: 5, marginTop: 3, borderRadius: 999 }
})
