import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { Colors } from "../../constants/colors";
import { BudgetOptions } from "../../constants/options";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectBudget = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  useEffect(() => {
    setTripData({ ...tripData, budget: selectedBudget?.title });
  }, [selectedBudget]);
  const onClickNext = () => {
    if(!selectedBudget){
      Alert.alert("Please select your budget.")
      return
    }
    router.push("/create-trip/review-trip");
  };
  // console.log(tripData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <Text style={styles.desc}>Choose spending habits for your trip.</Text>
      <FlatList
        data={BudgetOptions}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setSelectedBudget(item)}
            style={{ marginVertical: 10 }}
          >
            <OptionCard option={item} selected={selectedBudget} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={onClickNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBudget;

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
    fontSize: 20,
    marginTop: 20,
    color: Colors.gray,
    marginBottom: 20,
  },
  button: {
    marginBottom: 30,
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
