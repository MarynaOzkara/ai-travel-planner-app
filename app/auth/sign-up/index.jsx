import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../configs/FirebaseConfig";

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      Alert.alert("Please enter all details!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        router.replace("/(tabs)/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.primary} />
      </TouchableOpacity>

      <Text style={styles.title}>Create New Account</Text>
      <Text style={styles.desc}>Welcome to</Text>
      <Text
        style={{
          fontFamily: "outfit-bold",
          color: Colors.darkGreen,
          fontSize: 30,
        }}
      >
        AI Travel Planner!
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.inputText}>Full Name</Text>
        <TextInput
          onChangeText={(e) => setFullName(e)}
          style={styles.input}
          placeholder="Enter Full Name"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Enter Email"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>
      {/* Sign Up Buttom */}
      <TouchableOpacity onPress={onCreateAccount} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        style={styles.buttonReverse}
      >
        <Text style={styles.buttonReverseText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    marginTop: 30,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 30,
    color: Colors.gray,
    marginTop: 20,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.gray,
    fontFamily: "outfit-regular",
    fontSize: 18,
    marginTop: 8,
  },
  inputText: {
    fontFamily: "outfit-regular",
    fontSize: 14,
    paddingLeft: 8,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.green,
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
  buttonReverse: {
    padding: 15,
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonReverseText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: Colors.green,
    textAlign: "center",
  },
});
