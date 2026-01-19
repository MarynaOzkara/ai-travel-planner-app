import { useNavigation, useRouter } from "expo-router";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../constants/colors";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectDate = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  const onDateChange = (date, type) => {
    // console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };
  const onDateSelection = () => {
    if (!startDate || !endDate) {
      Alert.alert("Please select a start and end date");
      return;
    }
    const totalDays = endDate.diff(startDate, "days") + 1;
    // console.log(totalDays);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays,
    });
    router.push("/create-trip/select-budget");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Dates</Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={4}
          selectedRangeStyle={{
            backgroundColor: Colors.green,
          }}
          selectedDayTextColor={Colors.white}
          onDateChange={onDateChange}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onDateSelection();
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDate;

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
