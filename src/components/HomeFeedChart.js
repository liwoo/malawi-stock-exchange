//@flow
import React from 'react'
import { Text, View } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryAxis } from "victory-native";
import colors from '../colors'

export default (props) => (
    <View style={{ height: 140, paddingTop: 20 }} pointerEvents="none" >
        <VictoryChart
            height={120}
            padding={{ bottom: 0 }}
            domainPadding={0}
        >
            <VictoryArea
                data={props.data}
                interpolation="natural"
                style={{ data: { fill: colors[props.color.toUpperCase()] } }}
            />
            <VictoryAxis />
        </VictoryChart>
    </View>
)