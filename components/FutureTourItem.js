import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const FutureTourItem = (props) => {
    const { booking } = props;

    return (
        <View style={styles.tourItem}>
            <Text style={styles.departureTour}>
                Khởi hành{' '}
                {moment(booking.bt_lichkhoihanh.lkh_ngaykhoihanh).format(
                    'DD / MM / YYYY'
                )}
            </Text>

            <View style={styles.inforTour}>
                <Text style={styles.nameTour}>{booking.bt_tour.t_ten}</Text>
                <Text style={styles.timeTour}>
                    Kết thúc:{' '}
                    {moment(booking.bt_lichkhoihanh.lkh_ngayketthuc).format(
                        'DD / MM / YYYY'
                    )}
                </Text>

                <Text style={styles.timeTour}>
                    Thời gian: {booking.bt_tour.t_thoigian} ngày{' '}
                    {booking.bt_tour.t_thoigian - 1} đêm
                </Text>
            </View>
            <View style={styles.actions}>
                <View style={styles.guideList}>
                    {/* <Image
                        style={styles.avatarGuide}
                        source={{
                            uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg',
                        }}
                    />
                    <Image
                        style={styles.avatarGuide}
                        source={{
                            uri: 'https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg',
                        }}
                    /> */}
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.labelButton}>ĐÃ XÁC NHẬN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tourItem: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        paddingBottom: 5,
        borderWidth: 2,
        borderColor: '#267cb5',
        marginBottom: 15,
    },
    departureTour: {
        backgroundColor: '#267cb5',
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    inforTour: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    nameTour: {
        fontSize: 17.5,
        lineHeight: 25,
        color: '#267cb5',
        fontWeight: '500',
    },
    timeTour: {
        fontSize: 17,
        lineHeight: 25,
    },

    actions: {
        marginTop: 10,
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
        backgroundColor: '#FCF3CF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
    },
    labelButton: {
        color: '#FF6100',
        fontSize: 16,
        fontWeight: '700',
    },
});
