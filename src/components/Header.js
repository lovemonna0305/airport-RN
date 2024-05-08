import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/Ionicons";
import Icon6 from "react-native-vector-icons/FontAwesome6";

import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
import { images, server } from "../constants";
import { storage } from "../utils/storage";
import { useStore } from "../store/store";
import LinearGradient from "react-native-linear-gradient";

export default function Header() {
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const theme = useContext(themeContext);

  const [focused, setForcused] = useState("home");

  useEffect(() => {
    setForcused(store.page);
  }, [])

  const goto = (name) => {
    changeStore({ ...store, page: name });
    setForcused(name);
    navigation.replace(name);
  }

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

  }, []);

  const toggleDrawer = () => {
    onDrawerToggle(!drawerStatus);
  };

  return (
    <>
      <View style={[style.row, {
        height: 60,
        paddingHorizontal: 30,
        marginVertical: 10,
        justifyContent: "space-between",
        backgroundColor: theme.bg
      }]}>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => goto('home')}>
          {focused.includes("home") ?
            <LinearGradient
              colors={['#0A8ED9', '#A0DAFB']}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                backgroundColor: Colors.active,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 12,
                  padding: 10,
                  paddingHorizontal: 15,
                  alignItems: 'center'
                }}
              >{t("menu.home")}</Text>
            </LinearGradient>
            : <View
              style={{
                // backgroundColor:theme.itembg,
                backgroundColor: theme.itembg,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.disable,
                  fontFamily: "Plus Jakarta Sans",
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 12,
                }}
              >{t("menu.home")}</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => goto('flightInfo')}>
          {focused.includes("flightInfo") ?
            <LinearGradient
              colors={['#0A8ED9', '#A0DAFB']}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                backgroundColor: Colors.active,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 12,
                  padding: 10,
                  paddingHorizontal: 15,
                  alignItems: 'center'
                }}
              >{t("menu.flight_info")}</Text>
            </LinearGradient>
            : <View
              style={{
                // backgroundColor:theme.itembg,
                backgroundColor: theme.itembg,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.disable,
                  fontFamily: "Plus Jakarta Sans",
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 12,
                }}
              >{t("menu.flight_info")}</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => goto('airportGuide')}>
          {focused.includes("airportGuide") ?
            <LinearGradient
              colors={['#0A8ED9', '#A0DAFB']}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                backgroundColor: Colors.active,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 12,
                  padding: 10,
                  paddingHorizontal: 15,
                  alignItems: 'center'
                }}
              >{t("menu.airport_guide")}</Text>
            </LinearGradient>
            : <View
              style={{
                // backgroundColor:theme.itembg,
                backgroundColor: theme.itembg,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.disable,
                  fontFamily: "Plus Jakarta Sans",
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 12,
                }}
              >{t("menu.airport_guide")}</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => goto('services')}>
          {focused.includes("services") ?
            <LinearGradient
              colors={['#0A8ED9', '#A0DAFB']}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                backgroundColor: Colors.active,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 12,
                  padding: 10,
                  paddingHorizontal: 15,
                  alignItems: 'center'
                }}
              >{t("menu.services")}</Text>
            </LinearGradient>
            : <View
              style={{
                // backgroundColor:theme.itembg,
                backgroundColor: theme.itembg,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.disable,
                  fontFamily: "Plus Jakarta Sans",
                  padding: 10,
                  paddingHorizontal: 15,
                  fontSize: 12,
                }}
              >{t("menu.services")}</Text>
            </View>}
        </TouchableOpacity>
      </View>
    </>
  );
}


