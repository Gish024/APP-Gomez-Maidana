import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Jasmine from './assets/jasmine.png';
import Modal from './Components/Modal';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
   
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ])
    setTextItem('')
  }
  
  const selectedItem = (id) => {
    setItemSelected(list.filter(item => item.id === id)[0]) 
    setModalVisible(true)  
  }

  const deleteItem = () => {
    setList((currentState) => 
      currentState.filter((item) => item.id !== itemSelected.id)
      );
    setItemSelected({});
    setModalVisible(false)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>      
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <Image style = { styles.imgStyle} source = { require('./assets/jasmine.png')}></Image>
      <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'sans-serif-condensed', textShadowColor: '#BF360C', fontStyle: 'italic', color: '#212121', marginTop: 5 }}>JASMINE</Text>      
      <View style={{ height: 150, backgroundColor: '#7E57C2', width: 360, marginTop: 40 }}>
        <Text style={{ paddingTop: 20, fontSize: 20, color: '#FF9800', fontWeight: 'bold', marginLeft: 20 }}>Listado de Productos</Text>
        <View style={styles.itemContainer}>
          <TextInput 
            value={textItem} 
            placeholder="Buscar"
            placeholderTextColor="#BDBDBD"
            style={styles.itemInput}
            onChangeText={onHandleChangeItem}          
          />
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text style={{ fontWeight: 'bold', color: '#4527A0', fontSize: 17 }}> Ver </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1C4E9',
    paddingTop: 50, 
    alignItems: 'center',
  },
  imgStyle: {
    alignItems: 'center',
    with: 80,
    height: 90,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 10,
  },
  itemInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 1, 
    width: 250,
    color: '#FFFFFF',
  },   
  button: {
    backgroundColor: "#E65100",
    height: 35,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",    
  },

  
});
