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

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



export default function Home() {
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
                <TopHeader onDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} />
                <Header />
                <View style={[style.main, { backgroundColor: theme.bg, }]}>
                    <View style={{ flexDirection: "row", alignSelf: 'center', justifyContent: "center", width: width * 0.7 }}>
                        <View style={[style.inputContainer, { backgroundColor: theme.itembg, borderRadius: 10 }]}>
                            <Icons name="search" size={20} color={Colors.itemicon} />
                            <TextInput
                                placeholder={t('home.search')}
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={{
                                    flex: 1,
                                    color: Colors.active,
                                    fontFamily: "Plus Jakarta Sans",
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                        <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Flight Information')}</Text>
                    </View>
                    <View style={{ marginTop: 5, height: height * 0.25, flexDirection: 'row' }}>
                        <ImageBackground
                            source={images.img1}
                            height={100}
                            resizeMode="cover"
                            style={{ flex: 1, marginRight: 10 }}
                            borderRadius={10}
                        >
                            <Image
                                source={images.icon1}
                                style={{ width: 40, height: 40, alignSelf: 'center', marginTop: 15 }}
                                resizeMode="contain"
                            />

                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 40,
                                    backgroundColor: "rgba(10, 00, 00, 0.3)",
                                    borderRadius: 3,
                                    padding: 5,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        textAlign: "center",
                                        paddingRight: 2,
                                        color: Colors.secondary,
                                        fontSize: 12,
                                        fontWeight: "600",
                                        paddingTop: 20
                                    }}
                                >
                                    {'Departures'}
                                </Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={images.img2}
                            height={100}
                            resizeMode="cover"
                            style={{ flex: 1, marginRight: 10 }}
                            borderRadius={10}
                        >
                            <Image
                                source={images.icon2}
                                style={{ width: 40, height: 40, alignSelf: 'center', marginTop: 15 }}
                                resizeMode="contain"
                            />

                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 40,
                                    backgroundColor: "rgba(10, 00, 00, 0.3)",
                                    borderRadius: 3,
                                    padding: 5,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        textAlign: "center",
                                        paddingRight: 2,
                                        color: Colors.secondary,
                                        fontSize: 12,
                                        fontWeight: "600",
                                        paddingTop: 20
                                    }}
                                >
                                    {'Arrivals'}
                                </Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={images.img3}
                            height={100}
                            resizeMode="cover"
                            style={{ flex: 1 }}
                            borderRadius={10}
                        >
                            <Image
                                source={images.icon3}
                                style={{ width: 40, height: 40, alignSelf: 'center', marginTop: 15 }}
                                resizeMode="contain"
                            />

                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 40,
                                    backgroundColor: "rgba(10, 00, 00, 0.3)",
                                    borderRadius: 3,
                                    padding: 5,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        textAlign: "center",
                                        paddingRight: 2,
                                        color: Colors.secondary,
                                        fontSize: 12,
                                        fontWeight: "600",
                                        paddingTop: 20
                                    }}
                                >
                                    {'Connections'}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                        <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Airport news and updates')}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                        <Text numberOfLines={3} style={[{ color: theme.txt, fontSize: 12 }]} >{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... ')}</Text>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

