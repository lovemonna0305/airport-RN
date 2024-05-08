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
import { passportList, placeList } from "../../constants";

export default function SignUp1() {
  const { t } = useTranslation();
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [openPob, setOpenPob] = useState(false);
  const [valuePob, setValuePob] = useState(0);
  const [itemPobs, setItemPobs] = useState(placeList);

  const [openPassport, setOpenPassport] = useState(false);
  const [valuePassport, setValuePassport] = useState(0);
  const [itemPassports, setItemPassports] = useState(passportList);

  const [data, setData] = useState({
    name: "",
    dob: "mm/dd/yyyy",
    pob: 0,
    d_dob: new Date(), // Choose date
    passport: 0
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
    setData({
      ...data,
      d_dob: datetime,
      dob: padZero(month + 1) + "/" + padZero(day) + "/" + year,
    });

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
            <ProgressBar progress={0.25} />
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
              {t("register.enter_basic_details")}
            </Text>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.name")}
            </Text>
            <TextInput
              placeholder={t("name ")}
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
              {t("register.dob")}
            </Text>
            <View
              style={[
                style.txtinput,
                {
                  paddingHorizontal: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderColor: Colors.disable,
                },
              ]}>
              <TextInput
                value={data.dob}
                style={{ color: Colors.disable, }}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  locale="ja-JP"
                  timeZoneOffsetInMinutes={540}
                  date={data.d_dob}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <Icons name="calendar" size={18} color={theme.txt} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.pob")}
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
                placeholder="Country"
                open={openPob}
                value={valuePob}
                items={itemPobs}
                setOpen={setOpenPob}
                setValue={setValuePob}
                setItems={setItemPobs}
                onChangeValue={(e) => {
                  setData({ ...data, pob: e });
                }}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={[style.text2, { color: theme.txt, paddingVertical: 5 }]}>
              {t("register.passport")}
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
                placeholder="Country"
                listMode="MODAL"
                theme="DARK"
                open={openPassport}
                value={valuePassport}
                items={itemPassports}
                setOpen={setOpenPassport}
                setValue={setValuePassport}
                setItems={setItemPassports}
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
          <TouchableOpacity onPress={() => navigation.navigate('signup2')} style={style.btn}>
            <Text style={style.btntxt}>{t("register.next")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
