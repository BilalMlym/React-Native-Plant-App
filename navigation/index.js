import React from "react";
import { Image } from "react-native";

import { theme } from "../constants";

function Navigation() {
  const stack = createNativeStackNavigator(
    {
      Welcome,
      Login,
      SignUp,
      Settings,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          height: theme.sizes.base * 4,
          backgroundColor: theme.colors.white, // or 'white
          borderBottomColor: "transparent",
          elevation: 0, // for android
        },
        headerBackImage: <Image source={require("../assets/icons/back.png")} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
          alignItems: "center",
          marginLeft: theme.sizes.base * 2,
          paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
          alignItems: "center",
          paddingRight: theme.sizes.base,
        },
      },
    }
  );
}
export default Navigation();
