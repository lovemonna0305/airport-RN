import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
import Icon from "react-native-vector-icons/FontAwesome";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import { useStore } from "../store/store";

export default function Footer() {
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const theme = useContext(themeContext);          
  const [focused, setForcused] = useState(store.page??"home");

  useEffect(()=>{
    setForcused(store.page);
  },[])

  const goto = (name) => {
    changeStore({ ...store, page: name });
    setForcused(store.page);
    navigation.replace(name);
  }

  return (
    <View style={[style.row, {
      height: 80,
      paddingHorizontal: 30,
      marginVertical: 10,
      justifyContent: "space-between",
      backgroundColor:theme.bg
    }]}>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => goto('home')}
      >
        <Icon
          name="user"
          size={20}
          color={focused.includes("home") ? theme.icon : Colors.disable}
        />
        <Text
          style={{
            color: focused.includes("home") ? theme.txt : Colors.disable,
            fontFamily: "Plus Jakarta Sans",
            marginBottom: 15,
            fontSize: 12,
            fontWeight:'bold'
          }}
        >{t("menu.profile")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => goto('statistics')}
      >
        <Icon6
          name="chart-simple"
          size={20}
          color={focused.includes("statistics") ? theme.icon : Colors.disable}
        />
        <Text
          style={{
            color: focused.includes("statistics") ? theme.txt : Colors.disable,
            fontFamily: "Plus Jakarta Sans",
            marginBottom: 15,
            fontSize: 12,
            fontWeight:'bold'
          }}
        >{t("menu.statistics")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => goto('createvideo')}
      >
        <Icon6
          name="clapperboard"
          size={20}
          color={focused.includes("createvideo") ? theme.icon : Colors.disable}
        />
        <Text
          style={{
            color: focused.includes("createvideo") ? theme.txt : Colors.disable,
            fontFamily: "Plus Jakarta Sans",
            marginBottom: 15,
            fontSize: 12,
            fontWeight:'bold'
          }}
        >{t("menu.create_video")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => goto('settings')}
      >
        <Icon
          name="gear"
          size={20}
          color={focused.includes("settings") ? theme.icon : Colors.disable}
        />
        <Text
          style={{
            color: focused.includes("settings") ? theme.txt : Colors.disable,
            fontFamily: "Plus Jakarta Sans",
            marginBottom: 15,
            fontSize: 12,
            fontWeight:'bold'
          }}
        >{t("menu.settings")}</Text>
      </TouchableOpacity>
    </View>
  );
}
