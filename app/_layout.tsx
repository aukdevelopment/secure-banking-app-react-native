import React from "react";
import { View, StatusBar } from "react-native";
import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppStatusBar from "../layout/app-status-bar";

const height = StatusBar.currentHeight;

const Layout = () => {
  const [fontsLoad] = useFonts({
    Poppins400Regular: Poppins_400Regular,
    Poppins500Medium: Poppins_500Medium,
    Poppins600SemiBold: Poppins_600SemiBold,
    Poppins700Bold: Poppins_700Bold,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <View style={{ paddingTop: height, flex: 1 }}>
      <AppStatusBar />
      <Slot />
    </View>
  );
};

export default Layout;
