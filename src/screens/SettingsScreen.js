//@flow
import React from 'react'
import { AsyncStorage, FlatList, Linking, Picker, Modal, SearchBar, ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Toolbar, ModalPicker, CurrencyItem, BrokerItem } from '../components'

export default class SettingsScreen extends React.Component<{}> {
	state = {
		currencySelect: false,
		brokerSelect: false,
		currency: '',
		broker: '',
	}
	static navigationOptions = {
        title: "Settings",
        header: null
    }
	showCurrencySelect(visible){
		this.setState({currencySelect: visible})
	}
	closeCurrencySelect(){
		this.showCurrencySelect(false);
	}
	closeBrokerSelect(){
		this.showBrokerSelect(false);
	}
	showBrokerSelect(visible){
		this.setState({brokerSelect: visible})
	}
	pickCurrency = async (currency) => {
		this.showCurrencySelect(false)
		this.props.screenProps.changeCurrency(currency)
		await AsyncStorage.multiSet([['currency', currency.key],['currencySymbol', currency.symbol]])
	}
	pickBroker = async (broker) => {
		this.props.screenProps.changeBroker(broker)
		await AsyncStorage.multiSet([['broker', broker.key],['brokerNumber', broker.number]])
		this.showBrokerSelect(false)
	}
    render() {
		const { currency, broker } = this.props.screenProps
		return (
           <View>
                <Toolbar height={60} titleOpacity={1} title="User Settings" withBackBtn goBack={() => this.props.navigation.goBack()} />
                <ModalPicker
	                visible={this.state.currencySelect}
	                close={this.closeCurrencySelect.bind(this)}
	                onPress={this.pickCurrency}
	                title="Pick Display Currency"
	                data={currencies}>
	             		<CurrencyItem />
	             </ModalPicker>
	             <ModalPicker
	                visible={this.state.brokerSelect}
	                close={this.closeBrokerSelect.bind(this)}
	                onPress={this.pickBroker}
	                title="Pick Display Broker"
	                data={brokers}>
	             		<BrokerItem />
	             </ModalPicker>
                <ScrollView style={{ marginTop: 84 }}>
                    <View style={{marginBottom: 10}}>
                		<TouchableNativeFeedback onPress={() => this.showCurrencySelect(true)}>
					        <View style={styles.row}>
					          <View>
					            <Text style={styles.heading}>
					              {currency}
					            </Text>
					            <Text>
					              Change Display Currency
					            </Text>
					          </View>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
						<View style={styles.separator} />
						<TouchableNativeFeedback onPress={() => this.showBrokerSelect(true)}>
					        <View style={styles.row}>
					          <View>
					            <Text style={styles.heading}>
					              {broker}
					            </Text>
					            <Text>
					              Select Broker
					            </Text>
					          </View>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
						<View style={styles.separator} />
						<TouchableNativeFeedback onPress={() => this.props.navigation.navigate('TOS')}>
					        <View style={styles.row}>
				              <Text style={styles.heading}>
				                Terms of Service
				              </Text>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
						<View style={styles.separator} />
						<TouchableNativeFeedback onPress={() => this.props.navigation.navigate('About')}>
					        <View style={styles.row}>
				              <Text style={styles.heading}>
				                About
				              </Text>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
						<View style={styles.separator} />
						<TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Contact')}>
					        <View style={styles.row}>
				              <Text style={styles.heading}>
				                Get In Touch
				              </Text>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
						<View style={styles.separator} />
						<TouchableNativeFeedback onPress={() => {Linking.openURL('https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en')}}>
					        <View style={styles.row}>
				              <Text style={styles.heading}>
				                Rate Us!
				              </Text>
					          <View>
					          	<Text> > </Text>
					          </View>
					        </View>
						</TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
	row: {
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    height: 70,
	    padding: 10,
	    backgroundColor: '#F6F6F6',
	},
	separator: {
	    height: 1,
	    backgroundColor: '#CCCCCC',
	},
	thumb: {
	    width: 64,
	    height: 64,
	},
	heading: {
	    fontWeight: 'bold'
	},
   	modalContainer: {
        flex: 1,
        padding: 100,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        borderRadius: 10,
        backgroundColor: '#fff',
     	padding: 20,
    }
});

const brokers = [
    {
        key: "Standard Bank",
        number: "+265992338123"
    },
    {
        key: "National Bank",
        number: "+265992338123"
    },
    {
        key: "Stock Broker",
        number: "+265992338123"
    }
]

const currencies = [
    {
        key: "Malawi Kwacha",
        symbol: "K"
    },
    {
        key: "South African Rand",
        symbol: "R"
    },
    {
        key: "British Pound",
        symbol: "#"
    },
    {
        key: "United States Dollar",
        symbol: "$"
    }
]