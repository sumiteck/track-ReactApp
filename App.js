import React from "react";
import { createAppContainer,
  createStackNavigator,
createBottomTabNavigator,
createSwitchNavigator } from "react-navigation";
import AccountScreen from "./assets/src/AccountScreen";
import TrackCreateScreen from "./assets/src/TrackCreateScreen";
import TrackDetailScreen from "./assets/src/TrackDetailScreen";
import TrackListScreen from "./assets/src/TrackListScreen";
import SigninScreen from "./assets/src/SigninScreen";
import SignupScreen from "./assets/src/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    SignIn: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    })
    


  })


})