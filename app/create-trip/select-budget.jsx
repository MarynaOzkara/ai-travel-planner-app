import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectBudget = () => {
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

  console.log(tripData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Budget</Text>
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
    fontSize: 30,
    marginTop: 20,
    color: Colors.primary,
  },
});
