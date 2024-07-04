import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";

export default function App() {
  const [Home, setHome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHome(false);
    }, 3000);
  });
  return <>{Home ? <SplashScreen /> : <HomeScreen />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
