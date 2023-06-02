import AsyncStorage from '@react-native-async-storage/async-storage';

const value = {
  id: 1,
  task: 'demo'
}

const setList = () => {
  try {
    // const jsonValue = JSON.stringify(value)
    AsyncStorage.setItem('todo_list', "test");
    return (
      console.log("Canceled cycle")
    )
  }
  catch (error) {
    console.log("Error setting list ", error)
  }

};


const getList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todo_list')
    // console.log(JSON.parse(jsonValue))
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log(jsonValue)
  }
  catch (error) {
    console.log("Error getting array ", error)
  }

};

export default { setList, getList };