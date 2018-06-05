import React, {Component} from 'react'
import { AsyncStorage } from 'react-native'
import TabNavigator from './TabNavigator'
import { Loading } from '../components'

export default class RootNavigator extends Component {
	constructor(props) {
		super(props);
		this.state = {ready: false};
	}
	async componentWillMount(){
		await AsyncStorage.multiGet(['currency','currencySymbol', 'broker', 'brokerNumber'])
        .then(res =>{
            const currency = res[0][1] || 'Malawi Kwacha'
            const symbol = res[1][1] || 'K'
            const broker = res[2][1] || 'National Bank'
            const brokerNumber = res[3][1] || '+265998455606'
            this.setState({ currency, symbol, broker, brokerNumber, ready: true })
        })
	}
	changeCurrency(currency){
        this.setState({ currency: currency.key, symbol: currency.symbol })
    }
    changeBroker(broker){
        this.setState({ broker: broker.key, brokerNumber: broker.number })
    }
	render(){
		if(!this.state.ready){
			return <Loading />;
		}
		const { currency, symbol, broker, brokerNumber } = this.state;
		return(<TabNavigator screenProps={{ currency, symbol, broker, brokerNumber, changeCurrency: this.changeCurrency.bind(this), changeBroker: this.changeBroker.bind(this)}} />)
	}
}