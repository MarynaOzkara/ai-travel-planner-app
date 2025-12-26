import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StartNewTrip from "../../components/MyTrips/StartNewTrip";
import { Colors } from "../../constants/theme";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>
        <Ionicons name="add-circle" size={50} color={Colors.accent} />
      </View>
      {userTrips?.length === 0 ? <StartNewTrip /> : null}
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 28,
  },
});
