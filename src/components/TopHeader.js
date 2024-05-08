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

export default function TopHeader({ onDrawerToggle, drawerStatus }) {
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const theme = useContext(themeContext);

  const toggleDrawer = () => {
    onDrawerToggle(!drawerStatus);
  };

  return (
    <>
      <View style={{ height: 60 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            marginHorizontal: 20,
          }}
        >
          <View style={[style.row]}>
            <Image
              source={images.logo}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <View style={[style.row, { height: 40, width: "100%" }]}>
              <View style={{}}>
                <TouchableOpacity onPress={toggleDrawer}>
                  <LinearGradient
                    colors={['#0A8ED9', '#A0DAFB']}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 0.5, y: 0 }}
                    style={{
                      backgroundColor: Colors.active,
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10
                    }}>

                    <Icon6
                      name="sliders"
                      color={Colors.secondary}
                      size={16}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </View>
    </>
  );
}


