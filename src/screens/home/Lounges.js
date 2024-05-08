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
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/store";
import { t } from "i18next";
import { images } from "../../constants";
import Header from "../../components/Header";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TopHeader from "../../components/TopHeader";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


export default function Lounges() {
    const { changeStore, store } = useStore();
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    const [drawerStatus, setDrawerStatus] = useState(false);

    useEffect(() => {
        // changeStore({ ...store, isLoggedin: false, isLoading: false, page: "home" });
    }, [])

    const handleDrawerToggle = (status) => {
        drawer.current.openDrawer()
        setDrawerStatus(status);
    };


    const [datas, setDatas] = useState([
        { icon: images.icon, image: images.img1, desc: "Departures" },
        { icon: images.icon2, image: images.img2, desc: "Arrivals" },
        { icon: images.icon3, image: images.img3, desc: "Connections" },
        { icon: images.icon3, image: images.img3, desc: "Connections" },
        { icon: images.icon3, image: images.img3, desc: "Connections" },
        { icon: images.icon3, image: images.img3, desc: "Connections" },
    ])

    useEffect(() => {
        // changeStore({ ...store, isLoggedin: false, isLoading: false, page: "home" });
    }, [])



    const [focused, setForcused] = useState("all");

    useEffect(() => {
        setForcused('all');
    }, [])

    const goto = (name) => {
        setForcused(name);
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Image
                    source={images.item}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                />
                <View style={{ paddingLeft: 2 }}>
                    <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 0.3 }}>
                        <View style={{ marginRight: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icons
                                    name="airplane-outline"
                                    size={10}
                                />
                                <Text>Departure, Terminal 1</Text>
                            </View>
                            <Text style={{
                                color: theme.txt
                            }}>Plaza Premium Lounge</Text>
                            <Text style={{
                                color: Colors.active,
                                fontSize: 10
                            }}>0430 - 2200 daily</Text>

                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ backgroundColor: Colors.bord, marginBottom: 5, borderRadius: 5 }}
                            >
                                <Text
                                    style={{
                                        color: Colors.disable,
                                        fontFamily: "Plus Jakarta Sans",
                                        fontSize: 8,
                                        padding: 5,
                                        paddingHorizontal: 10,
                                        alignItems: 'center'
                                    }}>
                                    {'View'}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#0A8ED9', '#A0DAFB']}
                                    start={{ x: 0.5, y: 0.5 }}
                                    end={{ x: 0.5, y: 0 }}
                                    style={{
                                        backgroundColor: Colors.active,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5
                                    }}>
                                    <Text
                                        style={{
                                            color: Colors.secondary,
                                            fontFamily: "Plus Jakarta Sans",
                                            fontSize: 8,
                                            padding: 5,
                                            paddingHorizontal: 10,
                                            alignItems: 'center'
                                        }}
                                    >{'Book'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 0.2, borderBottomColor: Colors.bord }}>
                        <View style={{ marginRight: 5 }}>
                            <Text style={{
                                paddingTop: 5,
                                color: Colors.disable,
                                fontSize: 12,
                            }}>Features available</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <IconEntypo
                                    name="shop"
                                    size={12}
                                    style={{ paddingRight: 5 }}
                                />
                                <IconSimpleLineIcons
                                    name="phone"
                                    size={12}
                                    style={{ paddingRight: 5 }}
                                />
                                <Icon
                                    name="stethoscope"
                                    size={12}
                                    style={{ paddingRight: 5 }}
                                />
                                <Icons
                                    name="wifi"
                                    size={12}
                                    style={{ paddingRight: 5 }}
                                />
                                <Icon
                                    name="car-side"
                                    size={12}
                                    style={{ paddingRight: 5 }}
                                />
                                <Image
                                    source={images.exit}
                                    style={{ marginRight: 5, width: 12, height: 12 }}
                                    resizeMode="stretch"
                                />
                                <Image
                                    source={images.shower}
                                    style={{ marginRight: 5, width: 12, height: 12 }}
                                    resizeMode="stretch"
                                />
                                <Image
                                    source={images.fuel}
                                    style={{ marginRight: 5, width: 12, height: 12 }}
                                    resizeMode="stretch"
                                />
                                <Image
                                    source={images.meal}
                                    style={{ marginRight: 5, width: 12, height: 12 }}
                                    resizeMode="stretch"
                                />
                            </View>
                        </View>
                    </View>
                </View>


            </View>
        );
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
                <View style={{ flex: 1, marginBottom: 50 }}>
                    <TopHeader onDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} />
                    <View style={[style.row, {
                        height: 60,
                        paddingHorizontal: 30,
                        marginVertical: 10,
                        justifyContent: "flex-start",
                        backgroundColor: theme.bg
                    }]}>
                        <TouchableOpacity
                            style={{ alignItems: "center", justifyContent: "center" }}
                            onPress={() => goto('all')}>
                            {focused.includes("all") ?
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
                                    >{'All'}</Text>
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
                                    >{'All'}</Text>
                                </View>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: "center", justifyContent: "center" }}
                            onPress={() => goto('lounge')}>
                            {focused.includes("lounge") ?
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
                                    >{'Lounge'}</Text>
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
                                    >{'Lounge'}</Text>
                                </View>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: "center", justifyContent: "center" }}
                            onPress={() => goto('shower')}>
                            {focused.includes("shower") ?
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
                                    >{'Shower'}</Text>
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
                                    >{'Shower'}</Text>
                                </View>}
                        </TouchableOpacity>
                    </View>
                    {/* <StatusBar translucent={true} backgroundColor="transparent" /> */}
                    <View style={[style.main, { backgroundColor: theme.bg, height: height * 0.6 }]}>
                        <FlatList
                            key={"key-2"}
                            data={datas}
                            keyExtractor={(item, index) => {
                                return index;
                            }}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

