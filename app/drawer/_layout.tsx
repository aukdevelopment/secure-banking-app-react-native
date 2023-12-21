import { Drawer } from "expo-router/drawer";
import { ScrollView } from "react-native";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={MobileMenu}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default DrawerLayout;

const MobileMenu = () => {
  return <ScrollView className=" w-full flex-1 bg-red-600"></ScrollView>;
};
