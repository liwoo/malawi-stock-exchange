//@flow
import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Toolbar } from '../components';

export default class ContactScreen extends Component {
	static navigationOptions = {
        title: 'Get in Touch',
        header: null
    }
	render(){
		return (
			<View>
				<Toolbar height={60} titleOpacity={1} title="Get in Touch" withBackBtn goBack={() => this.props.navigation.goBack()} />
				<ScrollView style={{ marginTop: 84 }}>
                    <View style={{marginBottom: 10}}>
						<Text>Contact Us</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}