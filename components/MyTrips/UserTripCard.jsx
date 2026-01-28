import { useRouter } from "expo-router";
import moment from "moment";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";

const UserTripCard = ({ trip }) => {
  const tripData = JSON.parse(trip.tripData);
  const router = useRouter();
  // console.log(tripData);
  const uri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/trip-details",
          params: {
            trip: trip.tripPlan,
          },
        })
      }
      style={styles.container}
    >
      {tripData.locationInfo.photoRef ? (
        <Image source={{ uri: uri }} style={styles.image} />
      ) : (
        <Image
          source={require("../../assets/images/login.jpg")}
          style={styles.image}
        />
      )}

      <View>
        <Text style={styles.title}>{tripData?.locationInfo?.name}</Text>
        <Text style={styles.desc}>
          {moment(tripData?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.desc}>{tripData?.travelers.title}</Text>
      </View>
    </TouchableOpacity>
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
