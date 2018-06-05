//@flow
import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Toolbar } from '../components';

export default class AboutScreen extends Component {
	static navigationOptions = {
        title: 'About',
        header: null
    }
	render(){
		return (
			<View>
				<Toolbar height={60} titleOpacity={1} title="About" withBackBtn goBack={() => this.props.navigation.goBack()} />
				<ScrollView style={{ marginTop: 84 }}>
                    <View style={{marginBottom: 10}}>
						<Text>About</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}