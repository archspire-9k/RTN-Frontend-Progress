import * as ListActionTypes from './listActions';

const initialState = {
    list: []
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ListActionTypes.SET_LIST:
            return {
                ...state,
                selectedTab: action.payload.list
            }
        default:
            return state
    }
}

export default listReducer;