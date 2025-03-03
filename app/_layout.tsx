import { Stack } from "expo-router";
import "../global.css";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import axios from "axios";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(!!userToken);
      } catch (error) {
        console.log('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="login" />
      ) : (
        <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="screens/flashcard" />
          <Stack.Screen name="screens/reading" />
          <Stack.Screen name="screens/listening" />
          <Stack.Screen name="screens/profile" />
        </>
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
