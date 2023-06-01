import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, TodoItem } from "../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../../redux/actions';

type ItemProps = {
    color: string,
    size: number,
    onPress: () => void
};



const DATA = [
  {
    id: '1',
    task: 'First Item',
  },
  {
    id: '2',
    task: 'Second Item',
  },
  {
    id: '3',
    task: 'Third Item',
  },
];

const MainScreen = () => {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    addTodo(task)
    setTask('')
  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
  }
  const [todoArray, setTodoArray] = useState(DATA);


  const CircleButton = ({color, size, onPress} : ItemProps) => (
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
      <Image source={icons.add_circle} style={{ tintColor: '#fff'}}/>
    </TouchableOpacity>
  );

  //render the list 
  const renderList = () => (
    <>
      <Header title="To do list" titleStyle={{ color: COLORS.black }} />
      <FlatList
        data={todoArray}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <TodoItem
            title={item.task}
            containerStyle={{
              height: 100,
              width: SIZES.width * 0.85,
              marginLeft: index == 0 ? SIZES.padding : 18,
              marginRight: index ==
                todoArray.length - 1 ? SIZES.padding : 0,
              paddingRight: SIZES.radius,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => console.log(item.task)} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={{ color: COLORS.black }}> Press the + icon to start adding notes </Text>}
      />
    </>
  )


  //render the history 
  const renderHistory = () => (
    <></>
  )

  return (

    <View style={styles.container}>
      {renderList()}
      <CircleButton
        color="#282c34"
        size={60}
        onPress={() => alert("Button pressed!")}
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
});

export default MainScreen;