import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        style={{ width: "100%", height: 480 }}
        source={require("./../assets/images/login.jpg")}
      />
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.desc}>
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with ai-driven insights.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    textAlign: "center",
  },
  desc: {
    fontFamily: "outfit-regular",
    fontSize: 16,
    textAlign: "center",
    color: Colors.gray,
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.green,
    borderRadius: 99,
    marginTop: "20%",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: "outfit-regular",
    fontSize: 17,
    textAlign: "center",
  },
});
