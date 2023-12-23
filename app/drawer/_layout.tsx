import { Drawer } from "expo-router/drawer";
import MobileMenu from "../../layout/mobile-menu";

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
