//@flow
import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Toolbar } from '../components';

export default class TOSScreen extends Component {
	static navigationOptions = {
        title: 'TOS',
        header: null
    }
	render(){
		return (
			<View>
				<Toolbar height={60} titleOpacity={1} title="Terms of Service" withBackBtn goBack={() => this.props.navigation.goBack()} />
				<ScrollView style={{ marginTop: 84 }}>
                    <View style={{marginBottom: 10}}>
						<Text>Terms of Service</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}