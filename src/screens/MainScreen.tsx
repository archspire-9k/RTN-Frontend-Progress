import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, Alert, Pressable, TextInput } from 'react-native';
import { Header, TodoItem } from "../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/actions';
import { ModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';


type ItemProps = {
  color: string,
  size: number,
  onPress: () => void
};

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editId, setEditId] = useState()

  const { todo_list } = useSelector(
    state => state.todos,
  );

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEditTodo = (id, task) => {
    dispatch(editTodo(id, task))
  }

  const CircleButton = ({ color, size, onPress }: ItemProps) => (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 12,
        right: 12,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      onPress={onPress}
    >
      <Image source={icons.add_circle} style={{ tintColor: '#fff' }} />
    </TouchableOpacity>
  );

  //render the list 
  const renderList = () => (
    <>
      <Header title="To do list" titleStyle={{ color: COLORS.black }} />
      <FlatList
        data={todo_list}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={{ color: COLORS.black }}> Press the + icon to start adding notes </Text>}
        renderItem={({ item, index }) =>
          <TodoItem
            title={item.task}
            containerStyle={{
              height: 100,
              width: SIZES.width * 0.85,
              marginLeft: index == 0 ? SIZES.padding : 18,
              marginRight: index ==
                todo_list.length - 1 ? SIZES.padding : 0,
              paddingRight: SIZES.radius,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => handleDeleteTodo(item.id)}
            onPressEdit={() => {
              console.log('pressed')
              setModalVisible(!modalVisible)
              setEditId(item.id)
            }
            }
          />
        }
      />
    </>
  )


  //render the history 
  const renderHistory = () => (
    <></>
  )

  return (

    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} value = {newTask} onChangeText={(text) => {setNewTask(text)}}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                handleEditTodo(editId, newTask)
                setNewTask("")
              }}>
              <Text style={styles.textStyle}>Rename</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {renderList()}

      <CircleButton
        color="#282c34"
        size={60}
        onPress={() => navigation.navigate("AddScreen")}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray2
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.black,
    backgroundColor: COLORS.lightGray1,
    borderRadius: 14,
    width: 100
  },
});

export default MainScreen;