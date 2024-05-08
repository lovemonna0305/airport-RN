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
  StyleSheet
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors } from "../../theme/color";
import Toast from "react-native-toast-message";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";


import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Spinner from "../../components/Spinner";
import { useStore } from "../../store/store";
import { images } from "../../constants";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Login() {
  const { t } = useTranslation();
  const { changeStore, store } = useStore();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {

    const userdata = {
      name: "Lucas Scott",
      id: "@lucasscott3",
      dob: "07/11/1997",
      image_file: "https://i.pravatar.cc/300",
      height: 175,
      weight: 68,
      club: 1,
      pitch: 1,
      pob: 1,
      passport: 1,
    }

    await changeStore({ ...store, isLoggedin: true, currentUser: userdata, isLoading: false, page: "home" });
    navigation.navigate("home")

  };

  useEffect(() => {
    setEmail("lovemonna0305@gmail.com");
    setPassword("123456");

    //   GoogleSignin.configure({
    //     webClientId:
    //       "439003880186-ovf6uveql2sk5qmcq6vcp7ugekt3sqhp.apps.googleusercontent.com",
    //     offlineAccess: true,
    //   });
  }, []);

  const handleGoogleSign = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // console.log('userInfor', userInfo.user._id);

      // const res = await api.getUser(userInfo.user._id)

      console.log("google Login");
      await store.dispatch(loginGoogle({ email: userInfo.user.email }));

      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const styles = StyleSheet.create({
    wrapper: { height: 370 },
    slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 428,
      height: 275,
    },
  });

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, }]}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {store.isLoading && <Spinner />}
        <View style={{ flex: 1, marginHorizontal: 30 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: width, height: height / 2.6 }}
              source={images.main}
            />
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
              {t("login.welcome")}
            </Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder={t("login.email_address")}
              selectionColor={Colors?.primary}
              placeholderTextColor={Colors?.disable}
              onChangeText={(e) => setEmail(e)}
              value={email}
              require
              style={[
                style.txtinput,
                { backgroundColor: theme.bg, },
              ]}
            />
          </View>
          <View
            style={[
              style.txtinput,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 1,
              },
            ]}
          >
            <TextInput
              placeholder={t("password")}
              selectionColor={Colors.primary}
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor={Colors.disable}
              value={password}
              onChangeText={(e) => setPassword(e)}
              style={{
                backgroundColor: theme.bg,
                color: Colors.disable,
                fontFamily: "Plus Jakarta Sans",
              }}
            ></TextInput>
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                color={Colors.secondary}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              paddingTop: 10,
            }}
          >

            <Text
              style={style.text2}
            >
              {t("login.forgotPassword")}
            </Text>
          </TouchableOpacity>

          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity onPress={handleLogin} style={style.btn}>
              <Text style={style.btntxt}>{t("login.login")}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10
            }}
          >
            <View>
              <Text style={[style.text2, { color: Colors.disable }]}>{t('login.not_member')}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('signup1')}>
              <Text
                style={style.text2}
              >
                {' '} {t("login.register_now")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.divider}></View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 15,
            }}
          >
            <View>
              <Text style={[style.text2, { color: Colors.disable }]}>{t('login.continuew_with')}</Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: 50, height: 50, marginRight: 10 }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={images.facebook}
                  resizeMode="contain"
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ width: 50, height: 50, marginRight: 10 }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={images.google}
                  resizeMode="contain"
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ width: 50, height: 50, marginRight: 10 }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={images.tiktok}
                  resizeMode="contain"
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ width: 50, height: 50, marginRight: 10 }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={images.insta}
                  resizeMode="contain"
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
