import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Task=(props)=>{

    return (
        <View style={styles.task}>
            <View style={styles.left}>
                <View style={styles.taskIcon}><MaterialIcons name="playlist-add-check" size={30} color={'#a83b02'}></MaterialIcons></View>
                <Text styles={styles.taskText}>{props.text}</Text>
            </View>
            <Text><MaterialIcons name="delete" size={30} color={'red'}></MaterialIcons></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,    
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#a83b02',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    taskText: {
        maxWidth: '80%',
        
    },
    taskIcon: {
        marginRight: 10,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#a83b02',
        borderWidth: 2,
        borderRadius: 5,
    },
});