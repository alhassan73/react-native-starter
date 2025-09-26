import { useTheme } from "@/contexts/ThemeContext";
import { Href, Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>Login</Text>

      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.uiBackground, color: theme.text },
        ]}
        placeholder="Email"
        placeholderTextColor={theme.iconColor}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.uiBackground, color: theme.text },
        ]}
        placeholder="Password"
        placeholderTextColor={theme.iconColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={[styles.button, { backgroundColor: theme.navBackground }]}
      >
        <Text style={[styles.buttonText, { color: theme.title }]}>Login</Text>
      </Pressable>

      <Link
        href={"/(auth)/register" as Href}
        style={{ marginTop: 20, color: theme.iconColorFocused }}
      >
        Don’t have an account? Register
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
