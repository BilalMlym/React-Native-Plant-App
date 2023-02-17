import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, View, Typography } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Settings from "./screens/Settings";

import { Asset } from "expo-asset";

// import all used images

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const Stack = createNativeStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Notifications" component={Login} />
        <Stack.Screen name="Profile" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

  useEffect(() => {
    const images = [
      require("./assets/icons/back.png"),
      require("./assets/icons/plants.png"),
      require("./assets/icons/seeds.png"),
      require("./assets/icons/flowers.png"),
      require("./assets/icons/sprayers.png"),
      require("./assets/icons/pots.png"),
      require("./assets/icons/fertilizers.png"),
      require("./assets/images/plants_1.png"),
      require("./assets/images/plants_2.png"),
      require("./assets/images/plants_3.png"),
      require("./assets/images/explore_1.png"),
      require("./assets/images/explore_2.png"),
      require("./assets/images/explore_3.png"),
      require("./assets/images/explore_4.png"),
      require("./assets/images/explore_5.png"),
      require("./assets/images/explore_6.png"),
      require("./assets/images/illustration_1.png"),
      require("./assets/images/illustration_2.png"),
      require("./assets/images/illustration_3.png"),
      require("./assets/images/avatar.png"),
    ];
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      await SplashScreen.hideAsync();
      return Promise.all(cacheImages);
    }
  }, [isReady]);

  if (!isReady) {
    console.log("error loading");
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
