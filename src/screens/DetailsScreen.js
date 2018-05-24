//@flow
import React from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from '../components';
import companies from '../api/rates'

export default class DetailsScren extends React.Component {
    static navigationOptions = {
        title: 'Stock',
        header: null
    }

    render() {
        const id = this.props.navigation.state.params.itemId;
        const companyDetails = companies.filter(c => c.id == id);

        return (
            <View>
                <Toolbar height={60} titleOpacity={1} title={companyDetails[0].name} withBackBtn goBack={() => this.props.navigation.goBack()} />
                <View style={{ marginTop: 60 }}>
                    <Text>Hey There</Text>
                </View>
            </View>
        )
    }
}