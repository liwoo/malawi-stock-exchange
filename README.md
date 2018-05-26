# Malawi Stock Exchange
This is an iOS and Android (Cross-platform) app for the Malawi Stock Exchange written in React Native **heavily** inspired by the popular digital currency trading app, [Coinbase](https://www.coinbase.com/).

The motivation of the app is to provide information for all those interested to trade on the [Malawi Stock Exchange](http://mse.co.mw/).  Apart from showing the current trading rates, the app aims at charting the trends for each Listed Company, as well as some basic statistics such as monthly growth rate.

On top of providing information, the app aims at providing an interface for buyers to acquire shares directly and keep a *share wallet* of their certificates, by hopefully connecting with the MSE, as announced in May 2018, with their [plans to automate the brokerign process](https://www.nyasatimes.com/malawi-stock-exchange-to-automate-trading-process/)

## Setup
The app is written in [React Native](https://facebook.github.io/react-native/) and supports both [Android](https://www.android.com/) and [iOS](https://www.apple.com/lae/ios/ios-11/) platforms.  A detailed explaination of setting up your React Native website can be found on their [website](https://facebook.github.io/react-native/docs/getting-started.html).

Make sure you have the following on your machine before you can build the app:

- [Node](https://nodejs.org/en/) >v7
- [NPM](https://www.npmjs.com/) >v5 or [Yarn](https://yarnpkg.com/en/)
- React Native CLI - run `npm install -g create-react-native-app
`

Once you have these two installed you may go ahead and:

1. Fork this Repositroy into your account and clone that Repository
2. Inside the cloned directory, run `npm install` to install all dependancies
3. Run `npm start` to start the Metro Builder
4. Make sure you have a Virtual Device (or a real device setup) and (in another Terminal Tab), run `sudo react-native run-android` (if on Android) or `sudo react-native run-ios` (if on iOS)
5. Happy Building!

## Contributing
I have included all the Features and User Stories that need to be built for the app to be production ready.  You may go ahead and fork this repo into your GitHub account, and create feature branches for each issue you want to resolve.

After completing a feature, you can go ahead and open a pull request on this repository that clearly references the Issue that is being closed.  I will then go ahead and merge those PRs that successfully close the issue.

### Architecture
I use [Flow](https://flow.org/) in this project for static type checking, so make sure to include it in all of your components.  State and Prop types must be defined for every object and optionally you may type annotate functions and any other internal objects you plan to use.

The folder structure is as follows (inside /src)

- `/src/api` - holds files containing the structure of data that will be returned by the API, and will be eventually swapped out for the real API calls.  All the type files of the models (i.e Rate, Company etc) are also kept in this directory
- `/src/components` - holds generally re-usable components.  Try to keep them as Stateless as possible :)
- `/src/screens` - holds the Screens of the app, arranged in their natural heirarchies (i.e. /src/screens/home will hold Home.js as well as Details.js)
- `/src/routes` - holds the [React Navigation](https://reactnavigation.org/) Route Bindings
- `/src/*` holds various files such as colors.js and strings.js which can be used as utilities to help keep the app DRY
- `/__tests__` - the default location for tests: currently none are written, but the plan is to have a test file for each component and screen.
- `/src/queries` - GraphQL queries can be refactored into this location

You will notice that there is an index.js file in every root-level directory (i.e. src/ and src/components) that is used as a register for all files in that directory and child directories making it easier to import files.

The main component is App.js and can contain a TabNavigator Component wrapped by any additional Components (such as ContextProviders, ApolloProviders etc).

For State Management, the plan is to use [React's new Context API](https://reactjs.org/docs/context.html) to complement the cache provided by ReactNavigation and [ApolloClient](https://www.apollographql.com/docs/react/api/apollo-client.html).

Offline support will be provided by [React Native's Async Storage](https://facebook.github.io/react-native/docs/asyncstorage.html).

One another notable library used in the project is [Formidable Lab's](https://formidable.com/open-source/victory/docs/native/) for all the charts.
