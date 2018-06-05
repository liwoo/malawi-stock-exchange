import React from "react";
import { FlatList, View, Modal, Text, StyleSheet } from "react-native";
export default class ModalPicker extends React.Component {
    renderSeparator = () => {
        return (<View style={styles.separator} />)
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => this.props.close() }
                >
                    <View style={styles.container}>
                        <View style={styles.modal}>
                            <View>
                                {this.props.title &&
                                    <Text style={styles.heading}>{this.props.title}</Text>
                                }
                                <FlatList
                                data={this.props.data}
                                renderItem={({item}) => (
                                    <View>{React.cloneElement(this.props.children, {item, onPress: this.props.onPress} )}</View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 20,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 14
    }
})