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



export default function FlightInfo() {
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

    const handleDrawerToggle = (status) => {
        drawer.current.openDrawer()
        setDrawerStatus(status);
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
                    <Header/>
                    {/* <StatusBar translucent={true} backgroundColor="transparent" /> */}
                    <View style={[style.main, { backgroundColor: theme.bg, }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
                            <View>
                                <Text
                                    style={{
                                        color: theme.txt,
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                >
                                    {'Airline'}
                                </Text>
                                <View style={{ paddingTop: 2 }}>
                                    <TextInput
                                        selectionColor={Colors.primary}
                                        placeholderTextColor={Colors.disable}
                                        style={[style.txtinput, { backgroundColor: theme.bg }]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: theme.txt,
                                        fontFamily: "Plus Jakarta Sans",
                                    }}>
                                    {'Time'}
                                </Text>
                                <View style={{ paddingTop: 2 }}>
                                    <TextInput
                                        selectionColor={Colors.primary}
                                        placeholderTextColor={Colors.disable}
                                        style={[style.txtinput, { backgroundColor: theme.bg }]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: theme.txt,
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                >
                                    {'Status'}
                                </Text>
                                <View style={{ paddingTop: 2 }}>
                                    <TextInput
                                        selectionColor={Colors.primary}
                                        placeholderTextColor={Colors.disable}
                                        style={[style.txtinput, { backgroundColor: theme.bg }]}
                                    />
                                </View>
                            </View>
                            <View style={{paddingTop:20}}>
                                <TouchableOpacity style={{ width: 70, }}>
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
                                        >{'Search'}</Text>
                                    </LinearGradient>

                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Flight Information')}</Text>
                        </View>
                        <View style={{ marginTop: 5, height: height * 0.25, flexDirection: 'row', backgroundColor: theme.itembg, borderRadius: 10 }}>
                            <ImageBackground
                                source={images.img1}
                                resizeMode="cover"
                                style={{ width: 100, marginRight: 10, margin: 10 }}
                                borderRadius={10}>
                                <View
                                    style={{
                                        flex: 1,
                                        marginTop: 100,
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
                                            textAlign: "left",
                                            color: Colors.secondary,
                                            fontSize: 12,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {'Bali'}
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            textAlign: "left",
                                            color: Colors.secondary,
                                            fontSize: 12,
                                        }}
                                    >
                                        {'Indonesia'}
                                    </Text>
                                </View>
                            </ImageBackground>

                            <View style={{ flex: 1, padding: 20, justifyContent: 'space-around' }}>
                                <Text style={{ color: theme.txt }}>{'Flight Number'}</Text>
                                <Text style={{ color: theme.txt }}>{'Departure Time'}</Text>
                                <Text style={{ color: theme.txt }}>{'Gate'}</Text>
                                <Text style={{ color: theme.txt }}>{'Status'}</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Baggage Claim Area Real Time Update')}</Text>
                        </View>
                        <View style={{ marginTop: 5, height: height * 0.25, backgroundColor: theme.itembg, borderRadius: 10 }}>
                            <TouchableOpacity style={{ width: 100, alignSelf: 'flex-end', padding: 10 }}>
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
                                    >{'Refresh'}</Text>
                                </LinearGradient>

                            </TouchableOpacity>
                            <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: theme.txt }}>{'NO FLIGHT FOUND'}</Text>
                                <Text style={{ color: theme.txt, fontSize: 10 }}>{'Please modify your search or try a different search'}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

