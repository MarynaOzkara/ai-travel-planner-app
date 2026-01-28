import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Colors } from "../../constants/colors";
import { CreateTripContext } from "../../context/CreateTripContext";

const SearchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 80,
          },
        }}
        fetchDetails={true}
        placeholder="Search Place"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data.description);
          // console.log(details?.geometry.location);
          // console.log(details?.photos[0]?.photo_reference);
          // console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
          type: "(cities)",
        }}
      />
    </View>
  );
};

export default SearchPlace;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: Colors.white,
    height: "100%",
  },
  input: {
    marginTop: 50,
    borderWidth: 1,
  },
});
