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
import Icons from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/store";
import { t } from "i18next";
import Footer from "../../components/Footer";
import { images } from "../../constants";
import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import DropDownPicker from "react-native-dropdown-picker";
import CheckBox from "../../components/CheckBox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



export default function Account() {
    const { changeStore, store } = useStore();
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);

    const [check, setCheck] = useState();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(1);
    const [items, setItems] = useState([
        { label: 'Visa', value: 1 },
        { label: 'Paypal', value: 2 },
        { label: 'Bank', value: 3 },
    ]);

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    const [drawerStatus, setDrawerStatus] = useState(false);

    const [focused, setForcused] = useState("home");

    useEffect(() => {
        setForcused(store.page);
    }, [])

    const goto = (name) => {
        changeStore({ ...store, page: name });
        setForcused(name);
        navigation.replace(name);
    }


    useEffect(() => {
        // changeStore({ ...store, isLoggedin: false, isLoading: false, page: "home" });
    }, [])

    const handleDrawerToggle = (status) => {
        drawer.current.openDrawer()
        setDrawerStatus(status);
    };

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
                <TopHeader onDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} />
                <View style={[style.main, { backgroundColor: theme.bg, }]}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                        <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Payment Setup')}</Text>
                    </View>
                    <View style={{ marginTop: 5, flexDirection: 'row' }}>
                        <View style={{ paddingTop: 5, zIndex: 999 }}>
                            <Text
                                style={{
                                    color: theme.txt,
                                    fontWeight: "500",
                                    paddingVertical: 10,
                                    fontFamily: "Plus Jakarta Sans",
                                }}
                            >
                                {'Payment Method (Select)'}
                            </Text>
                            <View style={{ zIndex: 999, flex: 1, backgroundColor: theme.bg }}>
                                <DropDownPicker
                                    style={{
                                        backgroundColor: theme.bg,
                                        borderColor: Colors.bord,
                                        color: theme.txt,
                                        height: 50,
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                    listMode="SCROLLVIEW"
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    onChangeValue={(e) => {
                                        console.log("data", e);
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ paddingTop: 5, zIndex: 999, width: 100 }}>
                                <Text
                                    style={{
                                        color: theme.txt,
                                        fontWeight: "500",
                                        paddingVertical: 10,
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                >
                                    {'Expiration date'}
                                </Text>
                                <View style={{ zIndex: 999, backgroundColor: theme.bg }}>
                                    <DropDownPicker
                                        style={{
                                            backgroundColor: theme.bg,
                                            borderColor: Colors.bord,
                                            color: theme.txt,
                                            height: 50,
                                            fontFamily: "Plus Jakarta Sans",
                                        }}
                                        listMode="SCROLLVIEW"
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setValue}
                                        setItems={setItems}
                                        onChangeValue={(e) => {
                                            console.log("data", e);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginLeft: 10, paddingTop: 45, zIndex: 999, width: 100 }}>
                                <View style={{ zIndex: 999, flex: 1, backgroundColor: theme.bg }}>
                                    <DropDownPicker
                                        style={{
                                            backgroundColor: theme.bg,
                                            borderColor: Colors.bord,
                                            color: theme.txt,
                                            height: 50,
                                            fontFamily: "Plus Jakarta Sans",
                                        }}
                                        listMode="SCROLLVIEW"
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setValue}
                                        setItems={setItems}
                                        onChangeValue={(e) => {
                                            console.log("data", e);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 5, width: 100 }}>
                            <Text
                                style={{
                                    color: theme.txt,
                                    fontWeight: "500",
                                    paddingVertical: 10,
                                    fontFamily: "Plus Jakarta Sans",
                                }}
                            >
                                {'CVV/CVC'}
                            </Text>
                            <View style={{ backgroundColor: theme.bg }}>
                                <TextInput
                                    value={'922'}
                                    inputMode="decimal"
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={Colors.disable}
                                    style={[style.txtinput, { backgroundColor: theme.bg, height: 50 }]}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 15 }}>
                        <Text
                            style={{
                                color: theme.txt,
                                fontWeight: "500",
                                fontFamily: "Plus Jakarta Sans",
                            }}
                        >
                            {'Security code'}
                        </Text>
                        <View style={{ paddingTop: 8 }}>
                            <TextInput
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.txtinput, { backgroundColor: theme.bg, width: width * 0.6 }]}
                            />
                        </View>
                    </View>
                    <View style={{ paddingTop: 15 }}>
                        <Text
                            style={{
                                color: theme.txt,
                                fontWeight: "500",
                                fontFamily: "Plus Jakarta Sans",
                            }}
                        >
                            {'Card holder name'}
                        </Text>
                        <View style={{ paddingTop: 8 }}>
                            <TextInput
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.txtinput, { backgroundColor: theme.bg, width: width * 0.6 }]}
                            />
                        </View>
                    </View>
                    
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            paddingTop: 10,
                        }}
                    >
                        <CheckBox
                            style={{ borderWidth: 5 }}
                            checkBoxSize={25}
                            checkColor={Colors.btn}
                            squareCheckBox={true}
                            onToggle={(e) => {
                                if (!e) {
                                    setCheck(true);
                                } else {
                                    setCheck(false);
                                }
                            }}
                        />
                        <Text
                            style={{
                                color: theme.txt,
                                fontWeight: 700,
                                paddingTop: 18,
                                lineHeight: 5,
                                fontSize: 16,
                                fontFamily: "Plus Jakarta Sans",
                                paddingLeft: 4,
                            }}
                        >
                            {'Save payment method'}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            paddingTop: 10,
                        }}
                    >
                        <CheckBox
                            style={{ borderWidth: 5 }}
                            checkBoxSize={25}
                            checkColor={Colors.btn}
                            squareCheckBox={true}
                            onToggle={(e) => {
                                if (!e) {
                                    setCheck(true);
                                } else {
                                    setCheck(false);
                                }
                            }}
                        />
                        <Text
                            style={{
                                color: theme.txt,
                                fontWeight: 700,
                                paddingTop: 18,
                                lineHeight: 5,
                                fontSize: 16,
                                fontFamily: "Plus Jakarta Sans",
                                paddingLeft: 4,
                            }}
                        >
                            {'Make Default'}
                        </Text>
                    </View>

                </View>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

