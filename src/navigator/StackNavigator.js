import { View, Text, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
// import { createStackNavigator } from '@react-navigation/stack';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";



import { Colors } from "../theme/color";
import { storage } from "../utils/storage";

import '../utils/global';
import { useStore } from "../store/store";
import Splash from "../screens/Splash";
import Login from "../screens/auth/Login";
import SignUp1 from "../screens/auth/SignUp1";
import SignUp2 from "../screens/auth/SignUp2";
import SignUp3 from "../screens/auth/SignUp3";

import Home from "../screens/home/Home";
import FlightInfo from "../screens/home/FlightInfo";
import AirportGuide from "../screens/home/AirportGuide";
import Services from "../screens/home/Services";
import Lounges from "../screens/home/Lounges";
import Account from "../screens/home/Account";
// import SettingsPersonal from "../screens/home/SettingsPersonal";
// import SettingsSecurity from "../screens/home/SettingsSecurity";
// import SettingsAppearance from "../screens/home/SettingsAppearance";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { store, changeStore } = useStore();
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      // setshowSplashScreen(false);
      changeStore({ ...store, showSplashScreen: false });
    }, 500);
    const fetchStatus = async () => {

    };
    fetchStatus();
  }, []);

  return (
    <themeContext.Provider
      value={darkMode === false ? theme.dark : theme.light}
    >
      <NavigationContainer
        theme={darkMode === false ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator>
          {store.showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          ) : null}
          <>
            {store.isLoggedin ? (
              <>
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="signup1"
                  component={SignUp1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="signup2"
                  component={SignUp2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="signup3"
                  component={SignUp3}
                  options={{ headerShown: false }}
                />
              </>
            ) :
              (
                <>
                  <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="flightInfo"
                    component={FlightInfo}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="airportGuide"
                    component={AirportGuide}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="services"
                    component={Services}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="lounges"
                    component={Lounges}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="account"
                    component={Account}
                    options={{ headerShown: false }}
                  />
                  {/*<Stack.Screen
                    name="settingsSecurity"
                    component={SettingsSecurity}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="settingsAppearance"
                    component={SettingsAppearance}
                    options={{ headerShown: false }}
                  /> */}
                </>
              )}

            {/*<Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgotpass"
              component={Forgotpass}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdatePassword"
              component={UpdatePassword}
              options={{ headerShown: false }}
            /> */}
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
