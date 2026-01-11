import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { Colors } from "../../constants/colors";
import { SelectTravelersList } from "../../constants/options";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectTraveler = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedTravelers, setSelectedTravelers] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);
  console.log(tripData);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  useEffect(() => {
    setTripData({ ...tripData, travelers: selectedTravelers });
  }, [selectedTravelers]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's traveling?</Text>
      <View>
        <Text style={styles.desc}>Choose your travelers</Text>
      </View>
      <FlatList
        data={SelectTravelersList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setSelectedTravelers(item)}
            style={{ marginVertical: 10 }}
          >
            <OptionCard option={item} selected={selectedTravelers} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/create-trip/select-date")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    marginTop: 20,
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    marginTop: 20,
    color: Colors.gray,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.darkGreen,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: "outfit-medium",
    fontSize: 18,
  },
});
