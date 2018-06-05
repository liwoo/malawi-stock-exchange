//@flow
import React from 'react'
import { View } from 'react-native'
import { VictoryChart, VictoryTooltip, VictoryArea, VictoryAxis } from "victory-native";
import colors from '../colors'

export default (props) => (
    <View style={{ height: 250, paddingTop: 20 }} pointerEvents="none" >
        <VictoryChart
            height={240}
            padding={{ bottom: 0 }}
            domainPadding={0}
        >
            <VictoryArea
                data={props.data}
                labels={(d) => d.y}
                labelComponent={<VictoryTooltip />}
                interpolation="natural"
                style={{ data: { fill: colors[props.color.toUpperCase()] } }}
            />
            <VictoryAxis />
        </VictoryChart>
    </View>
)