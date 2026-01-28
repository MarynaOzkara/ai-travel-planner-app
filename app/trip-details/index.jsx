import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const TripDetails = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Trip Details</Text>
    </View>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: Colors.white,
    height: "100%",
  },
});
