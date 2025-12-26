import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={30} color={color} />
          ),
        }}
        name="mytrip"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={28} color={color} />
          ),
        }}
        name="discover"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle-sharp" size={30} color={color} />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
