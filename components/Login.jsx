import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{ width: "100%", height: 450, resizeMode: "cover" }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.gray,
            marginTop: 10,
          }}
        >
          Discover your perfect trip with AI-powered travel planning.
          Personalized itinerarys at your fingertips.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: "outfit-medium",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    backgroundColor: Colors.white,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "20%",
    alignItems: "center",
  },
});
