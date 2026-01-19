import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";

const StartNewTrip = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={60} color={Colors.green} />
      <Text style={styles.title}>No trips planned yet.</Text>
      <Text style={styles.desc}>
        Looks like its time to plan a new travel experience!
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start New Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartNewTrip;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80,
    display: "flex",
    alignItems: "center",
    gap: 30,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 23,
  },
  desc: {
    fontFamily: "outfit-regular",
    fontSize: 20,
    textAlign: "center",
    color: Colors.gray,
  },
  button: {
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: Colors.green,
  },
  buttonText: {
    fontFamily: "outfit-medium",
    fontSize: 17,
    color: Colors.white,
  },
});
