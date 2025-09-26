import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { Stack } from "expo-router";
import { Switch } from "react-native";

function LayoutWithTheme() {
  const { themeMode, setThemeMode, theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.title,
        headerRight: () => (
          <Switch
            value={themeMode === "dark"}
            onValueChange={(isDark) => setThemeMode(isDark ? "dark" : "light")}
          />
        ),
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWithTheme />
    </ThemeProvider>
  );
}
