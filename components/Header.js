import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerIcon}>
                <MaterialIcons name="menu" size={30} color="#333" />
            </View>
            <View>       
                <Text style={styles.headerText}>Lista de tareas</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    headerText: {
        fontWeight: 'bold',
        top: '20%',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerIcon: {
        position: 'absolute',
        left: 20,
        top: '50%',
    },


});