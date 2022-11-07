import { Image, Modal as NewModal, Pressable, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Modal = ( props ) => { 
    const { actionDeleteItem, isVisible } = props; 

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
            <View style={{ backgroundColor: '#FFEE58', width: 250, height: 180, marginTop: 10, alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Image style = { styles.imgStyle} source = { require('./resources/peligro.png')}></Image>
                <Text style={{ color: '#424242', marginTop: 15, fontWeight: 'bold', fontSize: 18, paddingLeft: 20, paddingBottom: 20 }}>¿Estás seguro de eliminar? </Text>
                <Pressable onPress={() => actionDeleteItem()} style={{backgroundColor: '#64DD17', height: 40 }}>
                    <Text style={styles.textStyle}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,    
        height: 50,
        
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    imgStyle: {
        alignItems: 'center',
        with: 100,
        height: 70,
        marginTop: 10,
        marginLeft: 90,        
      },
})