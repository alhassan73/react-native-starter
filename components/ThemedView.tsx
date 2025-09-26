import { Colors } from "@/constants/colors";
import { useState } from "react";
import { Switch, View, ViewStyle } from "react-native";

const ThemedView = ({
  style,
  children,
  ...props
}: {
  style?: ViewStyle;
  children?: React.ReactNode;
}) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const theme = Colors[themeMode];

  return (
    <View
      style={[{ backgroundColor: theme.background, flex: 1 }, style]}
      {...props}
    >
      <Switch
        value={themeMode === "dark"}
        onValueChange={(isDark) => setThemeMode(isDark ? "dark" : "light")}
      />
      {children}
    </View>
  );
};
export default ThemedView;
