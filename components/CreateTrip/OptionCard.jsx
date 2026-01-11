import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const OptionCard = ({ option, selected }) => {
  console.log(selected);
  return (
    <View
      style={[
        styles.container,
        selected?.id === option?.id && {
          borderWidth: 2,
          borderColor: Colors.darkGreen,
        },
      ]}
    >
      <View>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc}>{option.desc}</Text>
      </View>
      <Text style={{ fontSize: 30 }}>{option.icon}</Text>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  container: [
    {
      padding: 25,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Colors.lightGray,
      borderRadius: 15,
    },
  ],
  title: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    marginTop: 5,
    color: Colors.gray,
  },
});
