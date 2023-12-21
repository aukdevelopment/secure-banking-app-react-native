import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import PoppinsText from "../layout/PoppinsText";

const Index = () => {
  return (
    <View className=" flex-1 w-full bg-[#101010]">
      <Text className=" text-red-600 text-4xl font-bold">
        Amila Upul Kumara
      </Text>
      <Link href="/drawer/user/">user</Link>
      <Link href="/drawer/home" className=" text-white">
        Home
      </Link>
      <PoppinsText>Amila</PoppinsText>
    </View>
  );
};

export default Index;
