import { View, Text, StyleSheet } from "react-native";
import Card from "../component/UI/Card";

export default function Ownerscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card txt={"𝓞𝓦𝓝𝓔𝓡"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
