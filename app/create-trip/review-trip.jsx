import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import moment from "moment";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import { CreateTripContext } from "../../context/CreateTripContext";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  const onBuildTrip = () => {
    router.replace("create-trip/generate-trip");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review your Trip</Text>
      <Text style={styles.desc}>
        Before generating your trip, please review the details below.
      </Text>

      <View style={styles.wrap}>
        <Ionicons name="location-sharp" size={40} color={Colors.green} />
        <View>
          <Text style={styles.wrapTitle}>Destination:</Text>
          <Text style={styles.wrapInfo}>{tripData?.locationInfo?.name}</Text>
        </View>
      </View>
      <View style={styles.wrap}>
        <FontAwesome name="calendar" size={40} color={Colors.green} />
        <View>
          <Text style={styles.wrapTitle}>Selected Dates:</Text>
          <Text style={styles.wrapInfo}>
            {moment(tripData?.startDate).format("DD MMM") +
              " - " +
              moment(tripData?.endDate).format(" DD MMM")}{" "}
            ({tripData?.totalDays} days)
          </Text>
        </View>
      </View>
      <View style={styles.wrap}>
        <FontAwesome6 name="person" size={40} color={Colors.green} />
        <View>
          <Text style={styles.wrapTitle}>Travelers:</Text>
          <Text style={styles.wrapInfo}>{tripData?.travelers?.title}</Text>
        </View>
      </View>
      <View style={styles.wrap}>
        <FontAwesome name="money" size={40} color={Colors.green} />
        <View>
          <Text style={styles.wrapTitle}>Budget:</Text>
          <Text style={styles.wrapInfo}>{tripData?.budget}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onBuildTrip()}>
        <Text style={styles.buttonText}>Build My Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;

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
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
    marginBottom: 30,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    marginBottom: 20,
  },
  wrapTitle: {
    fontFamily: "outfit-regular",
    fontSize: 18,
    color: Colors.gray,
  },
  wrapInfo: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: Colors.primary,
  },
  button: {
    marginTop: 50,
    backgroundColor: Colors.darkGreen,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: "outfit-medium",
    fontSize: 18,
  },
});
