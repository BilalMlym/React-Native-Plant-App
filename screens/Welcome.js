import React from "react";
import {
  View,
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Text } from "../components/Text";

export default function Welcome() {
  return (
    <View>
      <Text>asdasd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",

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
