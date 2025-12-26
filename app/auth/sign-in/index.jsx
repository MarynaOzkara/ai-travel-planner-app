import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../configs/FirebaseConfig";
import { Colors } from "../../../constants/theme";

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const onSignIn = () => {
    if (!email && !password) {
      //   ToastAndroid.show("Please enter all details");
      //   ToastAndroid.BOTTOM();
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("/mytrip");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 30, fontFamily: "outfit-bold", marginTop: 30 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-regular",
          color: Colors.gray,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit-regular" }}>Email</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Email..."
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-regular" }}>Password</Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password..."
        />
      </View>
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          marginTop: 80,
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 99,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: Colors.white,
          borderRadius: 99,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray,
    fontFamily: "outfit-regular",
  },
});
