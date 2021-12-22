import { ImageBackground, Keyboard, Modal, ScrollView, StyleSheet, 
          Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Task }  from './components/Task';
import Header from './components/Header';
import  Popup  from './components/Popup';
import { MaterialIcons } from "@expo/vector-icons";

const image = require('./assets/bg3.jpg');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const toggleModal = (bool) => {
    setModalVisible(bool);
  };


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask('');
    toggleModal(true);
    
  }

  const completeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }


  return (
    <SafeAreaView style={styles.container}>
  
      
      <ImageBackground source={image} style={styles.image}>
      <Header/>
      <View style={styles.tasksContainer}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.tasks}>
          {tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      </View>
      

      <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={() => toggleModal(false)}>
        <Popup changeModal={toggleModal}/>
      </Modal>
      

        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <TextInput style={styles.input} placeholder={'Agregar tarea'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity style={styles.btnAdd}>
          <View>
          { task === '' ? <Text disabled><MaterialIcons name='add' size={30}></MaterialIcons></Text>
          : <Text  onPress={() => handleAddTask()}><MaterialIcons name='add' size={30}></MaterialIcons></Text>}
          </View>     
        </TouchableOpacity>
      
        </KeyboardAvoidingView>
      </ImageBackground>
      
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  tasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tasks: {
    paddingBottom: 80,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  writeTask: {
    position: 'absolute',
    marginTop: 20,
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    textAlign: 'center',
    width: 250,
  },
  btnAdd: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    maxHeight: 550,
    marginBottom: 50,
  },
  

});
