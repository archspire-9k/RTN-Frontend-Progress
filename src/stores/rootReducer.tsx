import { REHYDRATE } from 'redux-persist';

const initialState = {
  // initial state values
};

const rootReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case REHYDRATE:
      // if there is persisted state, return it, else return the initial state
      return action.payload ? action.payload : initialState;
    // other cases
    default:
      return state;
  }
};

export default rootReducer;