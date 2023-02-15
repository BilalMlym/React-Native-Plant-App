import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Button } from "../components/Button";
import { Block } from "../components/Block";
import { Text } from "../components/Text";
import { theme } from "../constants";

export default function Welcome() {
  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>
          Your Home.
          <Text h1 primary>
            {" "}
            Greener.
          </Text>
        </Text>
        <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
          Enjoy the experience.
        </Text>
      </Block>
      <Block center middle></Block>
      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigation.navigate("Login")}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => navigation.navigate("SignUp")}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button onPress={() => this.setState({ showTerms: true })}>
          <Text center caption gray>
            Terms of service
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
