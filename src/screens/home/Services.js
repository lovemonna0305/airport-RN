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

    // useEffect(() => {
    //     console.log(drawerStatus);
    // }, [drawerStatus])

    const navigationView = () => (
        <View style={[{ backgroundColor: Colors.active, borderTopRightRadius: 20, borderBottomRightRadius: 20 }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 30 }}>

                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, backgroundColor: Colors.secondary, paddingVertical: 10, width: 250, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                    onPress={() => navigation.navigate('home')}>
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

                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingLeft: 20, }}
                    onPress={() => navigation.navigate('home')}>
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

                <View style={{ marginBottom: 70 }}>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[
                            style.btn1,
                            {
                                borderColor: Colors.btn,
                                borderWidth: 1,
                                backgroundColor: theme.bg,
                            },
                        ]}>
                        <Text style={[style.btntxt1, { color: Colors.btn }]}>
                            {t("logout")}
                        </Text>
                    </TouchableOpacity>
                </View>
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
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Interactive Airport Map')}</Text>
                        </View>


                        <View style={{ marginTop: 5, height: height * 0.5, backgroundColor: theme.itembg, borderRadius: 10 }}>

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

