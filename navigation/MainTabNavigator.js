import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
const HomeStack = createStackNavigator({
    Home:Home
},{
    initialRouteName: "Home"
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
};

export default AppContainer = createAppContainer(HomeStack);