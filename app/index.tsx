import { useTheme } from "@/contexts/ThemeContext";
import { Href, Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 24, fontWeight: "bold" }}>
        Title
      </Text>
      <Text style={{ color: theme.text, fontSize: 16, marginTop: 8 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Link
        href={"/(auth)/login" as Href}
        style={{ marginTop: 20, color: theme.iconColorFocused }}
      >
        Login
      </Link>
      <Link
        href={"/(auth)/register" as Href}
        style={{ marginTop: 20, color: theme.iconColorFocused }}
      >
        register
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
