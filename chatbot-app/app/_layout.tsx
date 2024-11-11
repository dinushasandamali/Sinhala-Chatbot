// app/_layout.tsx
import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "සිංhala Chatබොට්",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        headerLeft: () => (
          <Image
            source={require("../assets/images/chatbot-icon.png")}  // Place your image file in the assets folder
            style={{ width: 40, height: 40, marginLeft: 10 }}
          />
        ),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
