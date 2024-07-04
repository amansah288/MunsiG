import { StyleSheet, View, Text } from "react-native";

export default function Card({ txt }) {
  return (
    <View style={styles.container}>
      <View style={styles.InnerCont}>
        <Text style={{ fontSize: 20 }}>{txt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "30%",
    width: "80%",
    borderRadius: 10,
  },
  InnerCont: {
    justifyContent: "center",
    backgroundColor: "#F6F0EE",
    height: "90%",
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 20,
  },
});
