import { React, useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorContent, setErrorContent] = useState('');

    const saveUserLogin = async (user) => {
        try {
            await AsyncStorage.setItem('tourist', JSON.stringify(user));
        } catch (error) {}
    };

    const handleSignIn = (event) => {
        api.signInTourist({
            tkkdl_tendangnhap: username,
            tkkdl_matkhau: password,
        }).then((res) => {
            const { data } = res;
            if (data.notFoundUsername) {
                setErrorContent('Tài khoản không tồn tại. Vui lòng đăng ký!');
            } else if (data.wrongPassword) {
                setErrorContent('Mật khẩu không đúng');
            } else {
                saveUserLogin(res.data.others).then(() => {
                    navigation.navigate('Home');
                    setErrorContent('');
                    setUsername('');
                    setPassword('');
                });
            }
        });
    };

    // const handleLogin = () => {
    //     api.handleLoginGuide({ username, password }).then((res) => {
    //         if (res.data.notFoundUsername) {
    //             setErrorContent('Tài khoản không tồn tại');
    //         } else if (res.data.wrongPassword) {
    //             setErrorContent('Mật khẩu không đúng');
    //         } else {
    //             saveUserLogin(res.data.others).then(() => {
    //                 navigation.navigate('Home');
    //                 setErrorContent('');
    //                 setUsername('');
    //                 setPassword('');
    //             });
    //         }
    //     });
    // };

    return (
        <ImageBackground
            source={require('../images/wallpaper-mobile.jpg')}
            resizeMode="cover"
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.panel}>
                    <Image
                        source={require('../images/travel_baloon_1758.png')}
                        resizeMode="stretch"
                        style={styles.logoLogin}
                    ></Image>
                    <Text style={styles.textPanel}>Đăng nhập</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.textField}>
                        <Image
                            style={styles.iconTextField}
                            source={require('../images/user-login9_tbuabt.png')}
                            resizeMode="stretch"
                        ></Image>
                        <TextInput
                            placeholder="Số điện thoại hoặc email"
                            style={styles.input}
                            onChangeText={setUsername}
                            value={username}
                            autoCapitalize={false}
                        />
                    </View>
                    <View style={styles.textField}>
                        <Image
                            style={styles.iconTextField}
                            source={require('../images/images-lock_yslo7s.png')}
                            resizeMode="stretch"
                        ></Image>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Mật khẩu"
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonSubmit}
                        title="ĐĂNG NHẬP"
                        onPress={handleSignIn}
                    >
                        <Text style={styles.buttonLabel}> ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <Text style={styles.error}>{errorContent}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
    },
    panel: {
        marginTop: 65,
        flex: 1,
        alignItems: 'center',
    },
    logoLogin: {
        width: 240,
        height: 235,
    },
    textPanel: {
        marginTop: 0,
        textAlign: 'center',
        color: '#fff',
        fontSize: 37,
        fontWeight: '700',
    },
    login: {
        flex: 1,
    },
    form: {
        flex: 2,
        marginTop: 70,
        marginLeft: 15,
        marginRight: 15,
    },
    textField: {
        position: 'relative',
        backgroundColor: '#fff',
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 7,
    },
    iconTextField: {
        position: 'absolute',
        top: 13,
        left: 15,
        width: 28,
        height: 26,
    },
    input: {
        borderRadius: 5,
        color: '#444',
        fontWeight: '600',
        borderWidth: 0,
        fontSize: 20,
        padding: 13,
        paddingLeft: 57,
    },
    buttonSubmit: {
        backgroundColor: '#E74C3C',
        marginTop: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    buttonLabel: {
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        color: '#fff',
    },
});
