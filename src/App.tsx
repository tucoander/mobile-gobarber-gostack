import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content"></StatusBar>
    <View style={{ flex: 1,backgroundColor: '#321e38'}}></View>
  </>
);

export default App;