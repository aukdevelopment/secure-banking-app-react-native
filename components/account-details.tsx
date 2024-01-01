import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
} from "react-native";
import { PoppinsMedium, PoppinsSemiBold } from "../layout/poppins-fonts";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

interface INavigation {
  openDrawer: () => void;
}

const { width: screenWidth } = Dimensions.get("window");

console.log(screenWidth);

const AccountDetails = () => {
  const navigation: INavigation = useNavigation();

  return (
    <View className=" w-full pb-5 px-3 bg-orange-100 rounded-b-3xl">
      {/* Details */}
      <View className=" w-full flex-row items-center justify-between mt-3 px-2 mb-12">
        {/* menu icon */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="rgb(234 88 12)" />
        </TouchableOpacity>
        <PoppinsSemiBold className=" text-black text-lg">
          <PoppinsSemiBold className=" text-orange-600 text-lg">
            Hi
          </PoppinsSemiBold>{" "}
          Amila
        </PoppinsSemiBold>
        {/* notification icon */}
        <TouchableOpacity>
          <Feather name="bell" size={24} color="rgb(234 88 12)" />
        </TouchableOpacity>
      </View>
      {/* Account Card */}
      <AccountSwiper />
    </View>
  );
};

export default AccountDetails;

const accountData = [0, 1, 2, 3];

const AccountSwiper = () => {
  const dotRef = useRef<View[] | null[]>([]);

  return (
    <View>
      <FlatList
        pagingEnabled
        horizontal
        data={accountData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <AccountCard />}
        onScroll={(e) => {
          const index = +(
            e.nativeEvent.contentOffset.x /
            (screenWidth - 24)
          ).toFixed(0);
          // console.log(index, typeof index);
          for (const a in accountData) {
            if (index === +a) {
              dotRef.current[a]?.setNativeProps({
                style: {
                  backgroundColor: "rgb(234 88 12)",
                },
              });
            } else {
              dotRef.current[a]?.setNativeProps({
                style: {
                  backgroundColor: "#101010",
                },
              });
            }
          }
        }}
      />
      <View className=" mt-3 w-full flex-row items-center justify-center">
        {accountData.map((value, index) => (
          <View
            ref={(r) => (dotRef.current[index] = r)}
            key={index}
            className={`mr-2 w-3 h-3 rounded-full ${
              index === 0 ? "bg-orange-600" : "bg-[#101010]"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

const AccountCard = () => {
  return (
    <View
      style={{
        width: parseInt(`${screenWidth - 24}`),
        paddingHorizontal: 8,
      }}
    >
      <View className=" w-full h-[147px] bg-black rounded-xl shadow-md p-3">
        <PoppinsMedium className=" text-orange-500">Your Account</PoppinsMedium>
        <PoppinsSemiBold className=" text-orange-500 text-center mt-8 text-3xl">
          Rs. 50,000.00
        </PoppinsSemiBold>
      </View>
    </View>
  );
};
