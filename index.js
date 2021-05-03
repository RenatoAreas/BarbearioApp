import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider, DefaultTheme } from 'react-native-paper';

const theme = {
...DefaultTheme,
colors: {
...DefaultTheme.colors,
primary : '#4e342e',
secondary : '#3e2723'
}
}

export default function Main() {
return(
<Provider theme={theme}>
<App/>
</Provider>
)
}
AppRegistry.registerComponent(appName, () => Main);