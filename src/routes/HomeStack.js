//@flow
import { StackNavigator } from 'react-navigation'
import { HomeScreen, DetailsScreen } from '../screens'

export default StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    headerMode: 'screen'
});