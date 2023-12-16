import React from "react";
import { View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { PoppinsRegular } from "../layout/poppins-fonts";
import AccountDetails from "../components/account-details";

const { width: dWidth } = Dimensions.get("window");

const Home = () => {
  return (
    <ScrollView className=" h-full w-full" showsVerticalScrollIndicator={false}>
      {/* Account Card */}
      <AccountDetails />
      {/* Service Section */}
      <ServiceSection />
    </ScrollView>
  );
};

export default Home;

/**
 * @Service @Section
 */

const ServiceSection = () => {
  return (
    <View className=" w-full p-5 pt-2 flex-row flex-wrap items-center justify-between">
      <ServiceBlock icon="mobile-phone" title="Reload" />
      <ServiceBlock icon="bank" title="Bank Transfer" />
      <ServiceBlock icon="file-text-o" title="Bill Payment" />
      <ServiceBlock icon="tasks" title="Portfolio" />
    </View>
  );
};

/**
 * @ServiceBlock
 */

interface IServiceBlock {
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  title: string;
}

const ServiceBlock: React.FC<IServiceBlock> = ({ icon, title }) => {
  return (
    <TouchableOpacity
      style={{
        width: dWidth / 2 - 25,
      }}
      className=" h-[90px] mt-3 bg-[#272727] rounded-md items-center justify-center"
    >
      {title === "Reload" ? (
        <Ionicons
          name="phone-portrait-outline"
          size={37}
          color="rgb(234 88 12)"
        />
      ) : (
        <FontAwesome name={icon} size={37} color="rgb(234 88 12)" />
      )}
      <PoppinsRegular className=" mt-2">{title}</PoppinsRegular>
    </TouchableOpacity>
  );
};
