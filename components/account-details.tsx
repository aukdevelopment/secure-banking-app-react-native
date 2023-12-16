import React from "react";
import { View } from "react-native";
import {
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from "../layout/poppins-fonts";

const AccountDetails = () => {
  return (
    <View className=" w-full p-5 bg-orange-100 rounded-b-3xl">
      {/* Details */}
      <View className=" w-full items-center mb-3">
        <PoppinsSemiBold className=" text-black text-xl">
          <PoppinsSemiBold className=" text-orange-600 text-xl">
            Hi
          </PoppinsSemiBold>{" "}
          Amila
        </PoppinsSemiBold>
      </View>
      {/* Account Card */}
      <View className=" w-full h-[147px] bg-black rounded-xl shadow-md p-3">
        <PoppinsMedium className=" text-orange-500">Your Account</PoppinsMedium>
        <PoppinsSemiBold className=" text-orange-500 text-center mt-8 text-3xl">
          Rs. 50,000.00
        </PoppinsSemiBold>
      </View>
    </View>
  );
};

export default AccountDetails;
