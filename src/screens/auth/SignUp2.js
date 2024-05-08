import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors } from "../../theme/color";
import Toast from "react-native-toast-message";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";


import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Spinner from "../../components/Spinner";
import { useStore } from "../../store/store";
import { images } from "../../constants";
import ProgressBar from "../../components/ProgressBar";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function SignUp2() {
  const { t } = useTranslation();
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [openClub, setOpenClub] = useState(false);
  const [valueClub, setValueClub] = useState(1);
  const [itemClubs, setItemClubs] = useState([
    { label: "club1", value: 1 },
    { label: "club2", value: 2 },
  ]);

  const [openPitch, setOpenPitch] = useState(false);
  const [valuePitch, setValuePitch] = useState(1);
  const [itemPitchs, setItemPitchs] = useState([
    { label: "pitch1", value: 1 },
    { label: "pitch2", value: 2 },
  ]);

  const [data, setData] = useState({
    name: "",
    dob: "mm/dd/yyyy",
    pob: "mm/dd/yyyy",
    d_dob: new Date(), // Choose date
    d_pob: new Date(), // Choose date
    passport: ""
  });

  function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }

  useEffect(() => {
  }, []);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    var currentDate = new Date();
    const datetime = new Date(date);
    const day = datetime.getDate(); // Get the day (1-31)
    const month = datetime.getMonth(); // Get the month (0-11)
    const year = datetime.getFullYear(); // Get the full year (e.g., 2024)

    if (datetime > currentDate) {
      setData({
        ...data,
        d_dob: datetime,
        dob: padZero(month + 1) + "/" + padZero(day) + "/" + year,
      });
    } else {
      Toast.show({
        type: "error",
        text1: t("error"),
        text2: t("performance_no_before_today"),
      });
    }
  };


  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, }]}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {store.isLoading && <Spinner />}
        <View style={{ flex: 1, marginHorizontal: 30, marginTop: 30, }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <ProgressBar progress={0.5} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text
              style={[style.text1, { color: theme.txt, }]}
            >
              {t("register.register_your_account")}
            </Text>
            <Text style={[style.text2, { color: Colors.disable }]}>
              {t("register.enter_personal_details")}
            </Text>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.height")}
            </Text>
            <TextInput
              placeholder={t("register.height")}
              selectionColor={Colors?.primary}
              placeholderTextColor={Colors?.disable}
              onChangeText={(e) => setData({ ...data, name: e })}
              // value={data.name}
              require
              style={[
                style.txtinput,
                { backgroundColor: theme.bg, },
              ]}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.weight")}
            </Text>
            <TextInput
              placeholder={t("register.weight")}
              selectionColor={Colors?.primary}
              placeholderTextColor={Colors?.disable}
              // onChangeText={(e) => setData({ ...data, name: e })}
              // value={data.name}
              require
              style={[
                style.txtinput,
                { backgroundColor: theme.bg, },
              ]}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.club")}
            </Text>
            <View style={{ zIndex: 200, flex: 1, backgroundColor: theme.bg }}>
              <DropDownPicker
                style={{
                  backgroundColor: theme.bg,
                  borderColor: Colors.bord,
                  color: theme.txt,
                  height: 50,
                  fontFamily: "Plus Jakarta Sans",
                }}
                listMode="MODAL"
                theme="DARK"
                open={openClub}
                value={valueClub}
                items={itemClubs}
                setOpen={setOpenClub}
                setValue={setValueClub}
                setItems={setItemClubs}
                onChangeValue={(e) => {
                  setData({ ...data, passport: e });
                }}
              />
            </View>
          </View>
          
          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.position_on_pitch")}
            </Text>
            <View style={{ zIndex: 200, flex: 1, backgroundColor: theme.bg }}>
              <DropDownPicker
                style={{
                  backgroundColor: theme.bg,
                  borderColor: Colors.bord,
                  color: theme.txt,
                  height: 50,
                  fontFamily: "Plus Jakarta Sans",
                }}
                listMode="MODAL"
                theme="DARK"
                open={openPitch}
                value={valuePitch}
                items={itemPitchs}
                setOpen={setOpenPitch}
                setValue={setValuePitch}
                setItems={setItemPitchs}
                onChangeValue={(e) => {
                  setData({ ...data, passport: e });
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[style.row, {
        height: 100,
        paddingHorizontal: 30,
        // justifyContent: "space-between",
      }]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('signup3')} style={style.btn}>
            <Text style={style.btntxt}>{t("register.next")}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}
