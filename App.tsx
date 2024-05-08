import React from "react";
import StackNavigator from "./src/navigator/StackNavigator";
import "react-native-gesture-handler";
import './src/localization/i18n';
// import { _stripe } from "./src/constants";
import { StoreProvider } from "./src/store/store";

export default function App() {
  return (
    <>
      <StoreProvider>
        <StackNavigator />
      </StoreProvider>
    </>
  );
}