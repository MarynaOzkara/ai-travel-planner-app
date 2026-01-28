import { useRouter } from "expo-router";
import moment from "moment";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import UserTripCard from "./UserTripCard";

const UserTripsList = ({ userTrips }) => {
  const latestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();
  // console.log(userTrips);
  //   console.log("tripInfo in UserTripsList:", latestTrip);

  const uri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
  // console.log("Image URI:", uri);
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {latestTrip.locationInfo.photoRef ? (
          <Image
            source={{
              uri: uri,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../../assets/images/login.jpg")}
            style={styles.image}
          />
        )}

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>{latestTrip?.locationInfo?.name}</Text>
          <Text style={styles.desc}>
            {moment(latestTrip?.startDate).format("DD MMM YYYY")} -{" "}
            {moment(latestTrip?.endDate).format("DD MMM YYYY")}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 15 }}>{latestTrip?.travelers.icon}</Text>
            <Text style={styles.desc}>{latestTrip?.travelers?.title}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: userTrips[0].tripPlan,
                },
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>See your plan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {userTrips.length > 1 &&
        userTrips.map((trip, index) => (
          <UserTripCard key={index} trip={trip} />
        ))}
    </View>
  );
};

export default UserTripsList;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 15,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 22,
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-regular",
    fontSize: 17,
    // marginTop: 5,
    color: Colors.gray,
  },
  button: {
    marginTop: 20,
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
