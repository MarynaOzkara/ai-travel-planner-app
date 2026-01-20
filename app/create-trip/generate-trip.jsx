import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ai } from "../../configs/AiModal";
import { auth, db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/colors";
import { AI_PROMT } from "../../constants/options";
import { CreateTripContext } from "../../context/CreateTripContext";

const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  console.log("user in generate trip:", user);
  // console.log("tripData in generate trip:", tripData);
  useEffect(() => {
    tripData && generateAiTrip();
  }, [tripData]);
  const generateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMT = AI_PROMT.replace(
      "{location}",
      tripData.locationInfo.name,
    )
      .replace("{totalDays}", tripData.totalDays)
      .replace("{travelers}", tripData.travelers.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalDays);

    // console.log("FINAL_PROMT:", FINAL_PROMT);
    const response = await ai.models.generateContent({
      config: {
        thinkingConfig: {
          thinkingLevel: "LOW",
        },
        responseMimeType: "application/json",
      },
      model: "gemini-3-flash-preview",
      contents: FINAL_PROMT,
    });
    console.log(response.text);
    const tripResponse = JSON.parse(response.text);
    setLoading(false);

    const docId = Date.now().toString();
    await setDoc(doc(db, "userTrips", docId), {
      userEmail: user.email,
      tripData: tripResponse,
    });

    router.replace("(tabs)/mytrip");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Wait...</Text>
      <Text style={styles.desc}>
        We are working to generate your dream trip.
      </Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/plane.gif")}
      />
      <Text style={styles.desc}>Do not go back</Text>
    </View>
  );
};

export default GenerateTrip;

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
    textAlign: "center",
    color: Colors.primary,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
    marginBottom: 30,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
});
