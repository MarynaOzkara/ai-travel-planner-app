import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StartNewTrip from "../../components/MyTrips/StartNewTrip";
import { auth } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/colors";

const MyTrip = () => {
  const router = useRouter();
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);
  console.log(user);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>My Trips</Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add-circle" size={50} color={Colors.darkGreen} />
        </TouchableOpacity>
      </View>
      {userTrips?.length === 0 ? <StartNewTrip /> : null}
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
  },
});
