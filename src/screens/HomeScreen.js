//@flow
import React from 'react'
import { Text, View, FlatList, StatusBar, StyleSheet, Animated, Button } from 'react-native'
import { CompanyItem, Toolbar } from '../components'
import type { Rate } from '../api/types';
import rates from '../api/rates';
import colors from '../colors';

type State = {
    scrollY: any
}

export default class HomeScreen extends React.Component<{}, State> {

    static navigationOptions = {
        title: "Stock",
        header: null
    }

    state = {
        scrollY: new Animated.Value(0)
    }

    render() {
        const toolbarHeight = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [0, MAX_HEIGHT],
            extrapolate: 'clamp'
        });

        const toolbarTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        const headingTranslate = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [0, 85],
            extrapolate: 'clamp'
        });

        const headingHeight = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [150, 0],
            extrapolate: 'clamp'
        });

        const listTranslate = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [90, 0],
            extrapolate: 'clamp'
        });

        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });

        const todaysRates: Array<Rate> = rates;
        const data = rates.map(r => Object.assign({}, r, { key: r.id.toLocaleString() }));

        return (
            <View style={styles.mainContiner}>
                <Toolbar height={toolbarHeight} titleOpacity={toolbarTitleOpacity} />
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.MSE_DARK}
                />
                <Animated.View style={[styles.headingContainer, { height: headingHeight, backgroundColor: colors.MSE_RED }]}>
                    <Animated.Text style={[styles.heading, { opacity: headerTitleOpacity }]}>Today's Trades</Animated.Text>
                </Animated.View>
                <Animated.View style={[styles.listContainer, { transform: [{ translateY: listTranslate }] }]}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event([
                            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
                        ])}
                        data={data}
                        renderItem={({ item }) => <CompanyItem rate={item} onPress={(id) => this.props.navigation.navigate('Details', { itemId: id })} />}
                    />
                </Animated.View>
            </View >
        );
    }
}

const MAX_HEIGHT = 60;
const HEADING_MARGIN = 85;

const styles = StyleSheet.create({
    listContainer: {
        width: '95%',
        zIndex: 1
    },
    headingContainer: {
        width: '100%',
        position: 'absolute',
        top: 0
    },
    heading: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
        marginBottom: 50
    },
    mainContiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})