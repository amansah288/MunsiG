import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./SplashScreen";
import Ownerscreen from "./Screen/OwnerScreen";
import UserScreen from "./Screen/UserScreen";

const Stack = createNativeStackNavigator();
const Top = createMaterialTopTabNavigator();

export default function HomeScreen() {
  function AllHome({ navigation }) {
    return (
      <Top.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Top.Screen name="Owner" component={Ownerscreen} />
        <Top.Screen name="User" component={UserScreen} />
      </Top.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AllHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
