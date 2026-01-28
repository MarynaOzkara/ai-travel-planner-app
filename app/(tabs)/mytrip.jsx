import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StartNewTrip from "../../components/MyTrips/StartNewTrip";
import UserTripsList from "../../components/MyTrips/UserTripsList";
import { auth, db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/colors";

const MyTrip = () => {
  const router = useRouter();
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && getMyTrips();
  }, [user]);
  const getMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);

    const q = query(
      collection(db, "userTrips"),
      where("userEmail", "==", user.email),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prevTrips) => [...prevTrips, doc.data()]);
      setLoading(false);
    });
  };
  // console.log(user);
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
      <ScrollView>
        {loading && <ActivityIndicator size="large" color={Colors.darkGreen} />}
        {userTrips?.length === 0 ? (
          <StartNewTrip />
        ) : (
          <UserTripsList userTrips={userTrips} />
        )}
      </ScrollView>
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
    fontSize: 26,
    color: Colors.primary,
  },
});
