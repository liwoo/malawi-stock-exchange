//@flow
import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import colors from '../colors'
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    height: any,
    titleOpacity: any,
    title: string,
    withBackBtn: boolean,
    goBack: any
}

export default class Toolbar extends React.Component<Props> {
    render() {
        let Icon = <View />;
        if (this.props.withBackBtn) {
            Icon = (
                <TouchableNativeFeedback onPress={this.props.goBack}>
                    <View style={{ padding: 20, position: 'absolute', zIndex: 80 }}>
                        <Ionicons name="ios-arrow-back" height={40} color="white" style={{ fontSize: 25 }} />
                    </View>
                </TouchableNativeFeedback>
            )
        }
        return (
            <View style={[styles.container, { backgroundColor: colors.MSE_RED }]}>
                <Animated.View style={[styles.toolbar, { height: this.props.height }]}>
                    {Icon}
                    <Animated.Text style={[styles.title, { opacity: this.props.titleOpacity }]}>
                        {this.props.title || 'Malawi Stock Exchange'}
                    </Animated.Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0, width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#A50621',
        zIndex: 99
    },
    toolbar: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        flex: 1,
        color: '#fff'
    }
})