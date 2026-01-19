import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";

const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Wait...</Text>
      <Text style={styles.desc}>
        We are working to generate your dream trip.
      </Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/plane.gif")}
      />
      <Text style={styles.desc}>Do not go back</Text>
    </View>
  );
};

export default GenerateTrip;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 28,
    marginTop: 20,
    textAlign: "center",
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
    marginBottom: 30,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
});
