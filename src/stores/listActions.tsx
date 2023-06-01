export const SET_LIST = 'SET_LIST'

export const setListSuccess = (list : Array<String>) => ({
    type: SET_LIST,
    payload: {list},
})

export function setList(list : Array<String>) {
    return dispatch => {
        dispatch(setListSuccess(list))
    }
}
