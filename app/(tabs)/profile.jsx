import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/colors";

const Profile = () => {
  const router = useRouter();
  const logOut = () => {
    auth.signOut();
    router.replace("/");
  };
  return (
    <View>
      <TouchableOpacity
        style={{ padding: 15, backgroundColor: Colors.green }}
        onPress={logOut}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
