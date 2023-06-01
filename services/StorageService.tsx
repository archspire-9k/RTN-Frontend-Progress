import AsyncSorage from '@react-native-async-storage/async-storage';


const setList = () => {
  return AsyncSorage.setItem('todo_list', [{id: 1, task: 'nothing'}]);
};

const getList = () => {
  return AsyncSorage.getItem('todo_list');
};

export default {setList, getList};