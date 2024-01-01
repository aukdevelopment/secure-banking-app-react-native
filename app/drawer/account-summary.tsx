import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from "../../layout/poppins-fonts";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../../theme/color";
import { useRouter } from "expo-router";

const bankAccountArray = [
  "666666666666",
  "555555555555",
  "444444444444",
  "999999999999",
];

const transactionDetailsArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];
const AccountSummary = () => {
  const router = useRouter();
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [activeAccount, setActiveAccount] = useState("888888888888");

  return (
    <View className=" w-full flex-1 bg-[#101010]">
      <View
        style={{ elevation: 7 }}
        className=" w-full z-50 py-4 px-3 bg-[#272727] flex-row items-center justify-between rounded-b-lg"
      >
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back-sharp"
          size={24}
          color={color.icon}
        />
        <View className=" relative flex-row items-center justify-between">
          <PoppinsMedium className=" text-lg mr-5 text-orange-100">
            {activeAccount}
          </PoppinsMedium>
          <Ionicons
            onPress={() => setAccountDropDown(!accountDropDown)}
            name="arrow-down-circle-outline"
            size={27}
            color={color.icon}
          />
          {/* other accounts */}
          {accountDropDown && (
            <View
              style={{ elevation: 5 }}
              className=" p-3 bg-gray-900 rounded-md absolute top-9 right-1 z-50"
            >
              {bankAccountArray.map((acc) => (
                <PoppinsMedium
                  className=" py-2"
                  key={acc}
                  onPress={() => {
                    setActiveAccount(acc);
                    setAccountDropDown(false);
                  }}
                >
                  {acc}
                </PoppinsMedium>
              ))}
            </View>
          )}
        </View>
      </View>
      {/* Transaction Details */}
      <PoppinsSemiBold className=" p-5 text-base">
        Transaction Summary
      </PoppinsSemiBold>
      <ScrollView showsVerticalScrollIndicator={false} className=" w-full px-5">
        {transactionDetailsArray.map((accNo, index) => (
          <TransactionDetails key={accNo} iseven={index % 2 === 0} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AccountSummary;

interface ITransactionDetails {
  iseven: boolean;
}
const TransactionDetails: React.FC<ITransactionDetails> = ({ iseven }) => {
  return (
    <View
      className={` w-full py-1 ${
        iseven ? "bg-gray-800" : "bg-gray-700"
      } flex-row`}
    >
      {/* transaction logo */}
      <View className=" flex-[0.2] items-center justify-center">
        <View className=" w-9 h-9 rounded-full bg-gray-200" />
      </View>
      {/* details */}
      <View className=" h-full flex-[0.8]">
        <PoppinsRegular className=" text-[10px]">Mobile Reload</PoppinsRegular>
        <PoppinsBold>Rs.2,000,000.00</PoppinsBold>
        <View className=" w-full flex-row justify-between items-end">
          <View>
            <PoppinsSemiBold className=" text-[10px]">
              Reference No:
            </PoppinsSemiBold>
            <PoppinsRegular className=" -mt-1 text-[10px]">
              20240101133777
            </PoppinsRegular>
          </View>
          <PoppinsRegular className=" mr-2 text-[10px]">
            01/01/2024,13:47
          </PoppinsRegular>
        </View>
      </View>
    </View>
  );
};
