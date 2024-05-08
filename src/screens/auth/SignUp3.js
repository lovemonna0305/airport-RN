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
  Modal,
  FlatList
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors } from "../../theme/color";
import Toast from "react-native-toast-message";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker";
import { launchCamera } from "react-native-image-picker";
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

export default function SignUp3() {
  const { t } = useTranslation();
  const { changeStore, store } = useStore();
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([
    { label: "passport1", value: 1 },
    { label: "passport2", value: 2 },
  ]);

  const [simages, setSImages] = useState([
    { image: "https://i.pravatar.cc/300", },
    { image: "empty", },
    // // { image: "https://i.pravatar.cc/300", },
    // // { image: "https://i.pravatar.cc/300", }
  ]);

  const openImagePicker = () => {
    setVisible(false);
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image picker error: ", response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        const newArray = [{ image: imageUri, }, ...simages];
        setSImages(newArray);
        // setSImages(prevImages => [...prevImages, { image: imageUri, }]);
      }
    });
  };

  const handleCameraLaunch = () => {
    setVisible(false);
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response) => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.error) {
        console.log("Camera Error: ", response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        const newArray = [{ image: imageUri, }, ...simages];
        setSImages(newArray);
      }
    });
  };

  useEffect(() => {
  }, []);

  const renderImages = ({ item, index }) => {
    const lastItem = index === simages.length - 1;

    const deleteitem = (indexitem) => {
      console.log(indexitem);
      // Create a copy of the array
      const newArray = [...simages];
      // Remove the item at the specified index
      newArray.splice(indexitem, 1);
      // Set the state of the array
      setSImages(newArray);
    }

    return (
      <>
        {!lastItem ? (<View style={{ alignItems: "center", marginLeft: 10 }} >
          <Image
            source={{ uri: item.image }}
            style={{ backgroundColor: Colors.secondary, width: 100, height: 100, borderRadius: 5, }}
          ></Image>
          <View
            style={{ position: "absolute", height: "30%", width: "20%", marginTop: 100, alignItems: "center", right: 0, top: -102, borderTopRightRadius: 5 }}>
            <TouchableOpacity onPress={() => deleteitem(index)}>
              <Image
                source={images.delete}
                size={40}
                style={{ width: 20, height: 20, borderTopRightRadius: 6 }}
              ></Image>

            </TouchableOpacity>
          </View>
        </View>) : (
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={{ alignItems: "center", justifyContent: "center", marginLeft: 10, flexDirection: 'row', backgroundColor: theme.itembackground, width: 100, height: 100, borderRadius: 5 }} >
            <Image
              source={images.plus}
              style={{ backgroundColor: theme.itembackground, width: 30, height: 30, borderRadius: 5, }}
            ></Image>
            <Modal transparent={true} visible={visible}>
              <View
                style={{
                  width: width,
                  flex: 1,
                  backgroundColor: "#000000aa",
                  transparent: "true",
                }}
              >
                <View
                  style={[
                    style.modalcontainer,
                    { backgroundColor: theme.bg, width: width - 20 },
                  ]}
                >
                  <View
                    style={{ paddingHorizontal: 20, alignSelf: "flex-end" }}
                  >
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Icon name="close-sharp" color="black" size={20} />
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={[
                      style.title,
                      { color: theme.txt, alignSelf: "center" },
                    ]}
                  >
                    {t("change_your_picutre")}
                  </Text>
                  <View
                    style={[
                      style.divider1,
                      { color: Colors.disable, marginBottom: 20 },
                    ]}
                  ></View>
                  <TouchableOpacity
                    onPress={handleCameraLaunch}
                    style={{
                      // paddingTop: 15 ,
                      paddingVertical: 15,
                      backgroundColor: theme.bg,
                      // theme == "dark" ? "#434E58" : "#E3E7EC",
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      flexDirection: "row",
                    }}
                  >
                    <Icon name="camera" size={25} color={theme.txt} />
                    <Text
                      style={[
                        style.subtitle,
                        { color: theme.txt, paddingLeft: 15 },
                      ]}
                    >
                      {t("take_photo")}
                    </Text>
                  </TouchableOpacity>
                  <View style={{ paddingTop: 15 }}>
                    <TouchableOpacity
                      onPress={openImagePicker}
                      style={{
                        //  paddingTop: 15 ,
                        paddingVertical: 15,
                        backgroundColor: theme.bg,
                        // theme == "light" ? "#4A4A65" : "#E3E7EC",
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        flexDirection: "row",
                      }}
                    >
                      <Icon
                        name="folder-open-outline"
                        size={25}
                        color={theme.txt}
                      />
                      <Text
                        style={[
                          style.subtitle,
                          { color: theme.txt, paddingLeft: 15 },
                        ]}
                      >
                        {t("choose_from_your_file")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>)}
      </>
    );
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, }]}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{ flex: 1 }}>
        {store.isLoading && <Spinner />}
        <View style={{ flex: 1, marginHorizontal: 30, marginTop: 30, }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <ProgressBar progress={0.75} />
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
              {t("register.upload_photo_avatar")}
            </Text>
          </View>

          <View style={{ paddingVertical: 10, height: height * 0.7 - 5 }}>
            <FlatList
              numColumns={3}
              key={"signup-3"}
              data={simages}
              keyExtractor={(item, index) => {
                return index;
              }}
              showsVerticalScrollIndicator={false}
              renderItem={renderImages}
            />
          </View>
        </View>
      </View>
      <View style={[style.row, {
        height: 100,
        paddingHorizontal: 30,
        // justifyContent: "space-between",
      }]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('login')} style={style.btn}>
            <Text style={style.btntxt}>{t("register.register")}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}
