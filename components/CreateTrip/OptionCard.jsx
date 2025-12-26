import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/theme";

const OptionCard = ({ option, selectTravelers }) => {
  return (
    <View
      style={[
        { padding: 15, backgroundColor: Colors.lightGray, borderRadius: 20 },
        selectTravelers?.id === option?.id && {
          borderWidth: 3,
          borderColor: Colors.gray,
        },
      ]}
    >
      <View style={styles.flex}>
        <View style={{ width: "80%" }}>
          <Text style={styles.title}>{option.title}</Text>
          <Text style={styles.desc}>{option.desc}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>{option.icon}</Text>
      </View>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  desc: {
    fontSize: 15,
    fontFamily: "outfit-regular",
    color: Colors.gray,
  },
});
