import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ConfigStore from "./src/redux/store/store";
import Navigation from "./src/navigation/stacknavigation"

const store = ConfigStore()
const YourApp = (props) => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
 
  );
}

export default YourApp;