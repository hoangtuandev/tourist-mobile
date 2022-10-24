import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { FutureTourItem } from '../components/FutureTourItem';
import { Header } from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api';
import { CurrentTourItem } from '../components/CurrentTourItem';

export const Home = () => {
    const [userLogined, setUserLogined] = useState(null);
    const [currentTour, setCurrentTour] = useState([]);
    const [calendarCurrentTour, setCalendarCurrentTour] = useState(null);

    const [futureTour, setFutureTour] = useState([]);
    const [calendarFutureTour, setCalendarFutureTour] = useState(null);

    useEffect(() => {
        userLogined &&
            api
                .getWorkingBookingTour({ idAccount: userLogined._id })
                .then((res) => {
                    setCurrentTour(res.data);
                    api.getCalendarGuideByDeparture({
                        _id: res.data[0].bt_lichkhoihanh._id,
                    }).then((res) => {
                        setCalendarCurrentTour(res.data[0]);
                    });
                });
    }, [userLogined]);

    useEffect(() => {
        userLogined &&
            api
                .getFutureBookingTour({ idAccount: userLogined._id })
                .then((res) => {
                    setFutureTour(res.data);
                    // api.getCalendarGuideByDeparture({
                    //     _id: res.data[0].bt_lichkhoihanh._id,
                    // }).then((res) => {
                    //     setCalendarFutureTour(res.data[0]);
                    // });
                });
    }, [userLogined]);

    useEffect(() => {
        getUserLogin();
    }, []);

    const getUserLogin = async () => {
        try {
            const userString = await AsyncStorage.getItem('tourist');
            setUserLogined(JSON.parse(userString));
            return JSON.parse(userString);
        } catch (error) {}
    };

    return (
        <View style={styles.home}>
            <Header></Header>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {currentTour.length !== 0 && (
                    <View style={styles.currentTour}>
                        <Text style={styles.labelPanel}>TOUR ĐANG DIỄN RA</Text>
                        <CurrentTourItem
                            currentTour={currentTour}
                            calendarCurrentTour={calendarCurrentTour}
                        ></CurrentTourItem>
                    </View>
                )}
                <View style={styles.futureTour}>
                    <Text style={styles.labelPanel}>TOUR ĐÃ ĐẶT</Text>
                    {futureTour.map((booking, index) => (
                        <FutureTourItem
                            key={index}
                            booking={booking}
                        ></FutureTourItem>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },

    labelPanel: {
        color: '#E74C3C',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 10,
    },
    tourItem: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        paddingBottom: 5,
        borderWidth: 2,
        borderColor: '#267cb5',
    },
    tourName: {
        backgroundColor: '#267cb5',
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    inforTour: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    departureTour: {
        fontSize: 17,
        lineHeight: 25,
    },
    timeTour: {
        fontSize: 17,
        lineHeight: 25,
    },
    payment: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinIcon: {
        marginRight: 5,
        width: 22,
        height: 22,
    },
    totalpay: {
        fontSize: 18,
        fontWeight: '700',
        color: '#F3A600',
    },

    statusTour: {
        marginTop: 10,
        marginLeft: 250,
        backgroundColor: '#EAFAF1',
        width: 125,
        borderRadius: 50,
        paddingTop: 1,
        paddingBottom: 3,
    },
    status: {
        textAlign: 'center',
        color: '#239B56',
        fontSize: 16,
        fontWeight: '700',
    },
    imageList: {
        marginTop: 10,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageTour: {
        width: 115,
        height: 75,
        borderRadius: 5,
    },
    actions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    guideList: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarGuide: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginRight: 5,
    },

    buttonView: {
        backgroundColor: '#E74C3C',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    labelButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});