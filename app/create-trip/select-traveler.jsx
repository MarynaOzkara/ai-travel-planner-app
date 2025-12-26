import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/theme";

import OptionCard from "../../components/CreateTrip/OptionCard";
import { selectTravelersList } from "../../constants/options";

const SelectTraveler = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectTravelers, setSelectTravelers] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [navigation]);

  useEffect(() => {
    setTripData({ ...tripData, travelers: selectTravelers });
  }, [selectTravelers]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's traveling</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.description}>Choose your travelers</Text>
      </View>
      <FlatList
        data={selectTravelersList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setSelectTravelers(item)}
            style={{ marginVertical: 8 }}
          >
            <OptionCard option={item} selectTravelers={selectTravelers} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => router.push("/create-trip/select-date")}
        style={styles.button}
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
    paddingTop: 50,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    fontFamily: "outfit-medium",
  },
  button: {
    marginBottom: 40,
    padding: 15,
    backgroundColor: Colors.accent,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
});
