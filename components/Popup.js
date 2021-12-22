import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Popup = ( props ) => {

    const closeModal = (bool, data) => {
        props.changeModal(bool);
    }

    return (
        <TouchableOpacity
            disabled={true}
            style={styles.modalContainer}
            onPress={() => closeModal(false, null)}
        >   

            <View style={styles.modal}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>¡Tarea agregada exitosamente!</Text>
                </View>
                <View style={styles.modalBody}>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => closeModal(false)}
                    >
                        <Text style={[styles.modalButtonText, {color: 'blue'} ]}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: height,
        width: width,
    },
    modal: {    
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 20,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

});

export default Popup;




