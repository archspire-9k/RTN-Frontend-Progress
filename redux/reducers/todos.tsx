import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO } from "../actionTypes";

const initialState = {
  todo_list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      console.log("added id: ", id)
      return {
        ...state,
        todo_list: [ ...state.todo_list, { id, task }]
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id)
      };
    }
    case EDIT_TODO: {
      const { id, task } = action.payload
      var newarray = state.todo_list
      var index = newarray.findIndex(i => i.id === id);
      newarray[index] = { id, task: task};
      return {
        ...state,
        todo_list: newarray
      }
    }
    case GET_TODO: {
      const array = action.payload
      return {
        ...state,
        todo_list: array
      }
    }
    default:
      return state;
  }
}
