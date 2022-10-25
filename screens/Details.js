import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { Header } from '../components/Header';
import moment from 'moment';

export const Details = ({ route, navigation }) => {
    const { currentTour, calendarCurrentTour } = route.params;

    console.log('CURRENT TOUR: ', currentTour[0]);
    console.log('CALENDAR CURRENT TOUR: ', calendarCurrentTour);

    return (
        <View style={styles.container}>
            <Header></Header>
            <Text style={styles.labelDetails}>CHI TIẾT TOUR</Text>
            <ScrollView
                style={styles.details}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.tourName}>
                    <Image
                        style={styles.iconTour}
                        source={require('../images/icon8_101134.png')}
                    />
                    <Text style={styles.name}>
                        Ha Noi - Nha Trang - khanh Hoa - Da Nang - Da Nang
                    </Text>
                </View>
                <View style={styles.statusTour}>
                    <Text style={styles.status}>Đang diễn ra...</Text>
                </View>
                <View style={styles.imageList}>
                    {currentTour[0].bt_tour.t_hinhanh.map((img, index) => (
                        <Image
                            key={index}
                            style={styles.imageTour}
                            source={{
                                uri: img,
                            }}
                        />
                    ))}
                </View>
                <View>
                    <Text style={styles.departureTour}>
                        Khởi hành:{' '}
                        {moment(
                            currentTour[0].bt_lichkhoihanh.lkh_ngaykhoihanh
                        ).format('DD / MM / YYYY')}
                    </Text>
                    <Text style={styles.departureTour}>
                        Kết thúc:{' '}
                        {moment(
                            currentTour[0].bt_lichkhoihanh.lkh_ngayketthuc
                        ).format('DD / MM / YYYY')}
                    </Text>
                    <Text style={styles.timeTour}>
                        Loại hình: {currentTour[0].bt_tour.t_loaihinh.lht_ten}
                    </Text>
                    <Text style={styles.timeTour}>
                        Thời gian: {currentTour[0].bt_tour.t_thoigian} ngày{' '}
                        {currentTour[0].bt_tour.t_thoigian - 1} đêm
                    </Text>
                </View>
                <View style={styles.payment}>
                    <Image
                        style={styles.coinIcon}
                        source={require('../images/coin_dollar_finance_icon_125510.png')}
                    />
                    <Text style={styles.totalpay}>
                        {currentTour[0].bt_tongthanhtoan
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                        đ
                    </Text>
                </View>
                <Text style={styles.labelDetails}>HƯỚNG DẪN VIÊN</Text>
                {calendarCurrentTour.ldt_huongdanvien.map((guide, index) => (
                    <View style={styles.guide} key={index} guide={guide}>
                        <Image
                            style={styles.avatarGuide}
                            source={{
                                uri: guide.tkhdv_anhdaidien,
                            }}
                        />
                        <View style={styles.informations}>
                            <Text style={styles.nameGuide}>
                                {guide.tkhdv_huongdanvien.hdv_hoten}
                            </Text>
                            <Text style={styles.inforGuide}>
                                Số điện thoại:
                                {guide.tkhdv_huongdanvien.hdv_sodienthoai}
                            </Text>
                            <Text style={styles.inforGuide}>
                                Mã HDV: {guide.tkhdv_huongdanvien.hdv_ma}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    labelDetails: {
        textAlign: 'center',
        color: '#E74C3C',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 20,
        paddingBottom: 20,
    },
    details: {
        marginRight: 10,
        marginLeft: 10,
    },
    tourName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconTour: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    name: {
        width: 350,
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        color: '#2874A6',
    },
    statusTour: {
        marginLeft: 260,
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
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageTour: {
        width: 120,
        height: 80,
        borderRadius: 3,
        marginBottom: 10,
        marginRight: 10,
    },
    departureTour: {
        fontSize: 18,
        lineHeight: 30,
    },
    timeTour: {
        fontSize: 18,
        lineHeight: 30,
    },
    payment: {
        marginTop: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinIcon: {
        marginRight: 5,
        width: 22,
        height: 22,
    },
    totalpay: {
        fontSize: 19,
        fontWeight: '700',
        color: '#F3A600',
    },
    guide: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2E86C1',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    avatarGuide: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginRight: 15,
    },
    nameGuide: {
        fontSize: 19,
        fontWeight: '500',
        color: '#2874A6',
        marginBottom: 5,
    },
    inforGuide: {
        fontSize: 17,
        lineHeight: 25,
        color: '#565656',
        fontWeight: '500',
    },
});
