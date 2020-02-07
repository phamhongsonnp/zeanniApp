import React from "react";

import { 
  Platform, StatusBar, StyleSheet, View, 
} from 'react-native';


import AppNavigator from "./navigation/AppNavigator";
import NavigationService from './screens/lib/NavigationService';
export var PopupEvent;
export var LoadingCallAjax;
export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
   
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator  ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
