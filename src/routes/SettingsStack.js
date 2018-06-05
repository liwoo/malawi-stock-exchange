//@flow
import { StackNavigator } from 'react-navigation'
import { AboutScreen, ContactScreen, SettingsScreen, TOSScreen } from '../screens'

export default StackNavigator({
    Settings: { screen: SettingsScreen },
    About: { screen: AboutScreen },
    Contact: { screen: ContactScreen },
    TOS: { screen: TOSScreen },
    headerMode: 'screen'
});