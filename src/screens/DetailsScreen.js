//@flow
import React from 'react';
import { Animated, Linking, ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Toolbar, DetailsChart } from '../components';
import companies from '../api/rates'
import colors from '../colors.js'
import cf from 'currency-formatter'
import dateformat from 'dateformat'
import call from 'react-native-phone-call'
import Ionicons from 'react-native-vector-icons/Ionicons';

const allData = _.range(0, 10, 0.001).map(x => ({
    x: x,
  y: Math.sin(Math.PI*x/2) * x / 10
}));
export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Stock',
        header: null
    }
    contactBroker = (number) =>{
        console.log(number)
        Linking.canOpenURL(number).then(supported => {
            if(!supported)
                console.log('error')
            else
                Linking.openURL(number)
        })
        .catch(err => console.log(err))
    }
    aagr = (data) => {
        let sum = 0
        let rates = 0;
        data.reduce((prev, cur) => {
            sum += ((cur.rate-prev.rate)/prev.rate)*100
            rates++
            return cur
        })
        const avg = Math.round(sum/rates * 100)/100
        return avg
    }
    render() {
        const { id, symbol, brokerNumber } = this.props.navigation.state.params;
        const companyDetails = companies.filter(c => c.id == id)[0];
        let lowest = companyDetails.lastTenDays[0];
        let highest = companyDetails.lastTenDays[0];
        const data = companyDetails.lastSixMonths.map(d => {
            if(d.rate > highest.rate)
                highest = d;
            if(d.rate < lowest.rate)
                lowest = d;
            return Object.assign({}, { x: d.date, y: d.rate })
        });
        return (
            <View>
                <Toolbar height={60} titleOpacity={1} title={companyDetails.name} withBackBtn goBack={() => this.props.navigation.goBack()} />
                <ScrollView style={{ marginTop: 84 }}>
                    <DetailsChart data={data} color={companyDetails.color} />
                    <View style={{marginBottom: 10}} >
                        <View style={styles.basicDetailsrow}>
                            <View style={styles.basicDetails}>
                                <Text style={styles.title}>{companyDetails.name} ({companyDetails.counter})</Text>
                                <Text style={{color: '#fff'}}>Registered {formatDate(companyDetails.registered)}</Text>
                            </View>
                            <View style={styles.center}>
                                <Text style={styles.rate}>{cf.format(companyDetails.rate, { symbol })}</Text>
                                <Text>Today's Rate</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <Text  style={styles.rate}>{cf.format(highest.rate, { symbol })}</Text>
                                <Text>This Month's Highest</Text>
                            </View>
                            <Text style={styles.date}>{formatDate(highest.date)}</Text>
                        </View>
                        <View style={[styles.row, styles.borders]}>
                            <View>
                                <Text  style={styles.rate}>{cf.format(lowest.rate, { symbol })}</Text>
                                <Text>This Month's Lowest</Text>
                            </View>
                            <Text style={styles.date}>{formatDate(lowest.date)}</Text>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.rate}>{this.aagr(companyDetails.lastSixMonths)}%</Text>
                                <Text>Average Monthly Growth</Text>
                            </View>
                            <Text style={styles.date}>{formatDate(companyDetails.lastSixMonths[0].date)} - to date</Text>
                        </View>
                    </View>
                    <View style={styles.center}>
                        <TouchableNativeFeedback onPress={()=> this.contactBroker(`tel:${brokerNumber}`)}>
                            <View style={styles.call}>
                                <Ionicons name='ios-call' size={25} color='#fff' />
                                <Text style={[styles.title, {fontWeight: 'bold'}]}> Contact Broker</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
function formatDate(date){
    date = new Date(date);
    return dateformat(date, "dd mmmm, yyyy")
}
const styles = StyleSheet.create({
    call: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        width: '80%',
        borderRadius: 10,
        backgroundColor: colors.MSE_RED
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    date: {
        fontWeight: 'bold'
    },
    rate: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    basicDetails:{
        width: '75%',
        backgroundColor: colors.BLUE2,
        padding: 12
    },
    borders: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderColor: '#ccc',
    },
    basicDetailsrow: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 12},
    row: { flexDirection: 'row', justifyContent: 'space-between', padding: 12 },
})