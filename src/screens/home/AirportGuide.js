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



export default function AirportGuide() {
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
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Interactive Airport Map')}</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

                            <View style={{ paddingTop: 20 }}>
                                <TouchableOpacity style={{ width: 40, }}>
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
                                        <IconMaterial
                                            name="zoom-in"
                                            color={Colors.secondary}
                                            size={30}
                                            style={{ padding: 5 }}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <TouchableOpacity style={{ width: 40, }}>
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
                                        <IconMaterial
                                            name="zoom-out"
                                            color={Colors.secondary}
                                            size={30}
                                            style={{ padding: 5 }}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", alignSelf: 'center', justifyContent: "center", width: width * 0.35, height: 40 }}>
                                <View style={[style.inputContainer, { backgroundColor: theme.itembg, borderRadius: 10, }]}>
                                    <Icons name="search" size={20} color={Colors.itemicon} />
                                    <TextInput
                                        placeholder={'Search'}
                                        selectionColor={Colors.primary}
                                        placeholderTextColor={Colors.disable}
                                        style={{
                                            flex: 1,
                                            color: Colors.active,
                                            fontFamily: "Plus Jakarta Sans",
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <TouchableOpacity style={{ width: 90, }}>
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
                                                fontSize: 12,
                                                padding: 10,
                                                paddingHorizontal: 15,
                                                alignItems: 'center'
                                            }}
                                        >{'Directions'}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 5, height: height * 0.25, flexDirection: 'row', backgroundColor: theme.itembg, borderRadius: 10 }}>

                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10, marginVertical: 10 }}>
                            <Text style={[{ color: theme.txt, fontSize: 16 }]}>{t('Directory of Airport Amenities')}</Text>
                        </View>

                        <View style={{ marginTop: 5, backgroundColor: theme.itembg, borderRadius: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.3, borderBottomColor: Colors.disable }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={images.restrooms}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text
                                        style={{ paddingLeft: 20 }}
                                    >{'Lounges'}</Text>

                                </View>
                                <View>
                                    <TouchableOpacity 
                                        onPress={()=>navigation.navigate('lounges')}
                                    style={{ width: 100, alignSelf: 'flex-end', padding: 10 }}>
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
                                            >{'Expand'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.3, borderBottomColor: Colors.disable }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={images.shopping}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text
                                        style={{ paddingLeft: 20 }}
                                    >{'Shop'}</Text>

                                </View>
                                <View>
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
                                            >{'Expand'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={images.dinner}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text
                                        style={{ paddingLeft: 20 }}
                                    >{'Restaurants'}</Text>

                                </View>
                                <View>
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
                                            >{'Expand'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, backgroundColor: theme.itembg, borderRadius: 10 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: Colors.green,
                                    alignItems: 'center',
                                    borderRadius: 10

                                }}>
                                <Text style={{
                                    fontSize: 12,
                                    padding: 10,
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    color: Colors.secondary
                                }}>
                                    {'Airport Services Information'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        </SafeAreaView>
    );
}

