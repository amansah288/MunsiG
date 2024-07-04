import { Image, StyleSheet, View } from "react-native";
import photo from "./Photos/mu.png";
export default function SplashScreen() {
  return (
    <View>
      <Image style={styles.container} source={photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
