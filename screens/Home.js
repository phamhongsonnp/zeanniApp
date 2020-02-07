import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import sizes from './lib/sizes';

export default class Home extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {headerShown: false};
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>{"Hello World!"}</Text>
      </View>
    );
  }
}
let ArrStyles = {
  main:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: sizes._statusbar_height
  },
  text:{
    fontSize:sizes._20sdp,
  }
};
const styles = StyleSheet.create(ArrStyles);
