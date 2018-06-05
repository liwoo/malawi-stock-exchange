import React from 'react'
import { StyleSheet, View, ActivityIndicator} from "react-native";

export default class Loading extends React.Component{
	render(){
		return (
			<View style={styles.body}>
		        <ActivityIndicator size="large" />
		    </View>
		)
	}
}

const styles = StyleSheet.create({
    body: {
        flex: 9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF",
    }
});