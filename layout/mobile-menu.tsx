import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { color } from "../theme/color";
import { PoppinsMedium, PoppinsSemiBold } from "./poppins-fonts";
import { useRouter } from "expo-router";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className=" w-full flex-1 bg-[#101010]"
    >
      {/* prifile information */}
      <View className=" w-full py-7 mb-2 px-3 flex-row items-center border-b border-b-gray-700">
        <View className=" relative">
          <Image
            source={{
              uri: "https://t3.ftcdn.net/jpg/05/70/62/96/360_F_570629666_CtUxD2rvqdwHhsvTAL3edguOE5EdvRzh.jpg",
            }}
            className=" w-[77px] h-[77px] object-contain rounded-full"
          />
          {/* camera Icon */}
          <TouchableOpacity className=" absolute top-[27px] right-[-12px]">
            <Ionicons name="camera" size={24} color={color.icon} />
          </TouchableOpacity>
        </View>
        <PoppinsSemiBold className=" flex-1 text-center">
          Amila Upul Kumara Wijesinghe
        </PoppinsSemiBold>
      </View>
      {/* menu items */}
      <View className=" w-full">
        <MenuItem
          title="Home"
          pressFunction={() => router.push("/")}
          icon="home"
        />
        <MenuItem
          title="Account Summery"
          pressFunction={() => router.push("/")}
          icon="hourglass"
        />
        <MenuItem
          title="Fund Transfers"
          pressFunction={() => router.push("/")}
          icon="arrow-switch"
        />
        <MenuItem
          title="Bill Payments"
          pressFunction={() => router.push("/")}
          icon="checklist"
        />
        <MenuItem
          title="My Payees"
          pressFunction={() => router.push("/")}
          icon="people"
        />
        <MenuItem
          title="Saved Billers"
          pressFunction={() => router.push("/")}
          icon="file-symlink-file"
        />
        <MenuItem
          title="Bank Rates"
          pressFunction={() => router.push("/")}
          icon="graph"
        />
        <MenuItem
          title="Location"
          pressFunction={() => router.push("/")}
          icon="location"
        />
        <MenuItem
          title="Settings"
          pressFunction={() => router.push("/")}
          icon="gear"
        />
        <MenuItem
          title="Contact"
          pressFunction={() => router.push("/")}
          icon="mail"
        />
        <MenuItem
          title="About Us"
          pressFunction={() => router.push("/")}
          icon="code-of-conduct"
        />
        <MenuItem
          title="FAQ"
          pressFunction={() => router.push("/")}
          icon="comment-discussion"
        />
        <MenuItem
          title="Terms & Conditions"
          pressFunction={() => router.push("/")}
          icon="light-bulb"
        />
        <MenuItem
          title="Privacy Policy"
          pressFunction={() => router.push("/")}
          icon="shield-check"
        />
        <MenuItem
          title="Log Out"
          pressFunction={() => router.push("/")}
          icon="sign-out"
        />
      </View>
    </ScrollView>
  );
};

export default MobileMenu;

interface ImenuItem {
  title: string;
  pressFunction: () => void;
  icon: React.ComponentProps<typeof Octicons>["name"];
}

const MenuItem: React.FC<ImenuItem> = ({ title, pressFunction, icon }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      className=" w-full my-2 py-2 px-3 flex-row items-center justify-between"
    >
      <View className=" pl-2 flex-row items-center">
        <Octicons name={icon} size={24} color={color.icon} />
        <PoppinsMedium className=" ml-3">{title}</PoppinsMedium>
      </View>
      <Octicons name="chevron-right" size={24} color={color.icon} />
    </TouchableOpacity>
  );
};
