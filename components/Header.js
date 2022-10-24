import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.touristName}>Phạm Hoàng Tuấn</Text>
            <TouchableOpacity>
                <Image
                    style={styles.menuIcon}
                    source={require('../images/1486564398-menu2_81519.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#267cb5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touristName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
    },
    menuIcon: {
        width: 40,
        height: 40,
    },
});
