import { Colors } from "@/constants/colors";
import "@/styles/global.css"; // updated path
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const preferedColor = Colors[colorScheme ?? "light"];
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: preferedColor.background },
        headerTintColor: preferedColor.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
