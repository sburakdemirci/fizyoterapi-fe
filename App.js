import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import * as Font from "expo-font";
import LoginForm from "./src/components/LoginForm";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  };
  render() {
    return (
      <Provider store={store}>
        {!this.state.loading ? <LoginForm /> : <Text>sdad</Text>}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
AppRegistry.registerComponent("fizyoterapi-fe", () => App);
