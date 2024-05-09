import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ImageBackground,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    DrawerLayoutAndroid,
    StyleSheet,
    Button,
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import style from "../../theme/style";
import themeContext from "../../theme/themeContex";
import { Colors } from "../../theme/color";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/store";
import { t } from "i18next";
import Footer from "../../components/Footer";
import { images } from "../../constants";
import Header from "../../components/Header";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TopHeader from "../../components/TopHeader";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



export default function Services() {
    const { changeStore, store } = useStore();
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    const [datas, setDatas] = useState([
        { icon: images.icon, image: images.img1, desc: "Departures" },
        { icon: images.icon2, image: images.img2, desc: "Arrivals" },
        { icon: images.icon3, image: images.img3, desc: "Connections" },
    ])



    const [drawerStatus, setDrawerStatus] = useState(false);

    useEffect(() => {
        // changeStore({ ...store, isLoggedin: false, isLoading: false, page: "home" });
    }, [])

    const handleConfirm = (date) => {
        hideDatePicker();
        var currentDate = new Date(moment(new Date()).utcOffset('+0900').format('YYYY-MM-DD HH:mm'));
        const datetime = new Date(date);
        const day = datetime.getDate(); // Get the day (1-31)
        const month = datetime.getMonth(); // Get the month (0-11)
        const year = datetime.getFullYear(); // Get the full year (e.g., 2024)
    };

    const [isStimePickerVisible, setStimePickerVisibility] = useState(false);
    const showStimePicker = () => {
        setStimePickerVisibility(true);
    };

    const hideStimePicker = () => {
        setStimePickerVisibility(false);
    };

    const handleConfirmStime = (time) => {
        hideStimePicker();
        const datetime = new Date(time);
        const hours = datetime.getHours(); // Get the hour (0-23)
        const minutes = datetime.getMinutes(); // Get the minute (0-59)
        const seconds = datetime.getSeconds(); // Get the second (0-59)

        setFirsttime(time);
    };


    const handleDrawerToggle = (status) => {
        drawer.current.openDrawer()
        setDrawerStatus(status);
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const [focused, setForcused] = useState("home");
    useEffect(() => {
        setForcused(store.page);
    }, [])

    const goto = (name) => {
        changeStore({ ...store, page: name });
        setForcused(name);
        navigation.replace(name);
    }


    const navigationView = () => (
        <View style={[{ flex: 1, backgroundColor: Colors.active }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 30 }}>

                {focused.includes("home") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('home')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Icon
                                name="home"
                                color={Colors.active}
                                size={16}
                            ></Icon>

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Home'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('home')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Icon
                                name="home"
                                color={Colors.secondary}
                                size={16}
                            ></Icon>

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Home'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("account") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('account')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.account}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Account'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('account')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.account}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Account'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("feedback") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('feedback')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.feedback}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'feedback'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('feedback')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.feedback}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'feedback'}</Text>
                        </View>
                    </TouchableOpacity>
                }

                {focused.includes("share") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('share')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.share}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'share'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('share')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.share}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'share'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("favorite") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('favorite')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.favorite}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'favorite'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('favorite')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.favorite}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'favorite'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("terms") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('terms')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.terms}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Terms & Conditions'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('terms')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.terms}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Terms & Conditions'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("privacy") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('privacy')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.privacy}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Privacy Policy'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('privacy')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.privacy}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Privacy Policy'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("aboutus") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('aboutus')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.aboutus}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'About Us'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('aboutus')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.aboutus}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'About Us'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("contactus") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('contactus')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.contactus}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Contact Us'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('contactus')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.contactus}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Contact Us'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("help") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('help')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.help}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Help/Support'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('help')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.help}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Help/Support'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("setting") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('setting')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.setting}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Setting'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('setting')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.setting}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Setting'}</Text>
                        </View>
                    </TouchableOpacity>
                }
                {focused.includes("logout") ?
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => goto('logout')}>
                        <View style={{ justifyContent: 'center', }}>
                            <Image
                                source={images.logout}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.active }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.active,
                                    fontSize: 16
                                }}>{'Logout'}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                        onPress={() => goto('logout')}>
                        <View style={{ justifyContent: 'center', }}>

                            <Image
                                source={images.logout}
                                resizeMode="contain"
                                style={{ width: 16, height: 16, tintColor: Colors.secondary }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <Text
                                style={{
                                    color: Colors.secondary,
                                    fontSize: 16
                                }}>{'Logout'}</Text>
                        </View>
                    </TouchableOpacity>
                }
            </ScrollView>
        </View>
    );
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}
                style={{ borderRadius: 20 }}
            >
                <ScrollView style={{ marginBottom: 50 }}>
                    <TopHeader onDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} />
                    <Header />
                    {/* <StatusBar translucent={true} backgroundColor="transparent" /> */}
                    <View style={[style.main, { backgroundColor: theme.bg, }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', marginTop: 10, marginVertical: 10 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IconIonicons
                                    name="chevron-back"
                                    size={16}
                                    style={{ backgroundColor: theme.itembg }}
                                />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={images.parking}
                                    style={{ width: 20, height: 20, borderRadius: 5 }}
                                />
                                <Text style={{ color: theme.txt, fontSize: 16, paddingHorizontal:20,paddingRight:40, backgroundColor:theme.itembg,borderRadius:5, }}>{'Parking'}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('trolley')}>
                                <IconIonicons
                                    name="chevron-forward"
                                    size={16}
                                    style={{ backgroundColor: theme.itembg }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Book Parking Online to Guaarantee your Spot')}</Text>
                        </View>

                        <View style={{ marginTop: 5, height: height * 0.35, backgroundColor: theme.itembg, borderRadius: 10 }}>

                            <View style={{ padding: 10 }}>
                                <Text style={{ color: theme.txt }}>{'When would you like to park?'}</Text>
                                <View style={[style.row, { justifyContent: 'space-between' }]}>
                                    <View style={{ paddingTop: 5 }}>
                                        <Text
                                            style={{
                                                color: Colors.disable,
                                                paddingVertical: 10,
                                            }}>
                                            {t("Date(YYYY-MM-DD)")}
                                        </Text>
                                        <View
                                            style={[
                                                style.txtinput,
                                                {
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    borderColor: Colors.border,
                                                    width: 120,
                                                    paddingHorizontal: 10
                                                },
                                            ]}>
                                            <TextInput
                                                // value={data.date}
                                                style={{
                                                    color: Colors.disable,
                                                    fontFamily: "Plus Jakarta Sans",
                                                    width: 70
                                                }}
                                            />
                                            <TouchableOpacity onPress={showDatePicker}>
                                                <DateTimePickerModal
                                                    isVisible={isDatePickerVisible}
                                                    mode="date"
                                                    // date={data.d_date}
                                                    onConfirm={handleConfirm}
                                                    onCancel={hideDatePicker}
                                                />
                                                <Icons name="calendar" size={18} color={theme.txt} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ paddingTop: 5 }}>
                                        <Text
                                            style={{
                                                color: Colors.disable,
                                                paddingVertical: 10,
                                            }}>
                                            {t("Time")}
                                        </Text>
                                        <View
                                            style={[
                                                style.txtinput,
                                                {
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    borderColor: Colors.border,
                                                    width: 100,
                                                    paddingHorizontal: 10
                                                },
                                            ]}
                                        >
                                            <TextInput
                                                // value={data.date}
                                                style={{
                                                    color: Colors.disable,
                                                    width: 50
                                                }}
                                            />
                                            <TouchableOpacity onPress={showStimePicker}>
                                                <DateTimePickerModal
                                                    isVisible={isStimePickerVisible}
                                                    mode="time"
                                                    locale="ja_jp"
                                                    onConfirm={handleConfirmStime}
                                                    onCancel={hideStimePicker}
                                                />
                                                <Icons name="clock" size={18} color={theme.txt} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ color: theme.txt }}>{'When would you like to pickup your vehicle?'}</Text>
                                <View style={[style.row, { justifyContent: 'space-between' }]}>
                                    <View style={{ paddingTop: 5 }}>
                                        <Text
                                            style={{
                                                color: Colors.disable,
                                                paddingVertical: 10,
                                            }}>
                                            {t("Date(YYYY-MM-DD)")}
                                        </Text>
                                        <View
                                            style={[
                                                style.txtinput,
                                                {
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    borderColor: Colors.border,
                                                    width: 120,
                                                    paddingHorizontal: 10
                                                },
                                            ]}>
                                            <TextInput
                                                // value={data.date}
                                                style={{
                                                    color: Colors.disable,
                                                    fontFamily: "Plus Jakarta Sans",
                                                    width: 70
                                                }}
                                            />
                                            <TouchableOpacity onPress={showDatePicker}>
                                                <DateTimePickerModal
                                                    isVisible={isDatePickerVisible}
                                                    mode="date"
                                                    // date={data.d_date}
                                                    onConfirm={handleConfirm}
                                                    onCancel={hideDatePicker}
                                                />
                                                <Icons name="calendar" size={18} color={theme.txt} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ paddingTop: 5 }}>
                                        <Text
                                            style={{
                                                color: Colors.disable,
                                                paddingVertical: 10,
                                            }}>
                                            {t("Time")}
                                        </Text>
                                        <View
                                            style={[
                                                style.txtinput,
                                                {
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    borderColor: Colors.border,
                                                    width: 100,
                                                    paddingHorizontal: 10
                                                },
                                            ]}
                                        >
                                            <TextInput
                                                // value={data.date}
                                                style={{
                                                    color: Colors.disable,
                                                    width: 50
                                                }}
                                            />
                                            <TouchableOpacity onPress={showStimePicker}>
                                                <DateTimePickerModal
                                                    isVisible={isStimePickerVisible}
                                                    mode="time"
                                                    locale="ja_jp"
                                                    onConfirm={handleConfirmStime}
                                                    onCancel={hideStimePicker}
                                                />
                                                <Icons name="clock" size={18} color={theme.txt} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ paddingTop: 10, width: 100, alignSelf: 'center' }}>
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
                                    >{'Get Quote'}</Text>
                                </LinearGradient>
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Scan QR Code to Exit')}</Text>
                        </View>

                        <View style={{ marginTop: 5, backgroundColor: theme.itembg, borderRadius: 10, alignSelf: 'center' }}>
                            <Image
                                source={images.scan}
                                style={{ width: 200, height: 200 }}
                                resizeMode="contain"
                            />
                        </View>

                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

