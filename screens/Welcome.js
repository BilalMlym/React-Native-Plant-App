import { StyleSheet, View } from "react-native";
import React, { Component } from "react";

import { Text, Block } from "../components";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Block>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
