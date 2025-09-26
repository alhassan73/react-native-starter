import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Stack screenOptions={{ animation: "none" }} />
    </>
  );
};

export default AuthLayout;
