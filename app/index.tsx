import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import PoppinsText from "../layout/PoppinsText";

const Index = () => {
  return (
    <View>
      <Text className=" text-red-600 text-4xl font-bold">
        Amila Upul Kumara
      </Text>
      <Link href="/user/">user</Link>
      <Link href="/home" className=" text-white">
        Home
      </Link>
      <PoppinsText>Amila</PoppinsText>
    </View>
  );
};

export default Index;
