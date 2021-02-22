import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  RecyclerViewBackedScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppNavigator from "./src/navigations/Navigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require("./src/fonts/Simvoni-Italic.otf"),
      Medium: require("./src/fonts/Simvoni-BoldItalic.otf"),
      Regular: require("./src/fonts/Macho Weak.ttf"),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    return this.state.isFontLoaded === true ? <AppNavigator /> : AppLoading;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
