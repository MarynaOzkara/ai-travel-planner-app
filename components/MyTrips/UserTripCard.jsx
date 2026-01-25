import moment from "moment";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const UserTripCard = ({ trip }) => {
  const tripData = JSON.parse(trip.tripData);
  console.log(tripData);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login.jpg")}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{tripData?.locationInfo?.name}</Text>
        <Text style={styles.desc}>
          {moment(tripData?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.desc}>{tripData?.travelers.title}</Text>
      </View>
    </View>
  );
};

export default UserTripCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 15,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-regular",
    fontSize: 14,
    // marginTop: 5,
    color: Colors.gray,
  },
});
