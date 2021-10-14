import * as actionTypes from '../actions/actionsTypes';
 
const initState = {user: {}, userNfo: {}, loading: false}
const reducer = ( state = initState, action) => {
    switch(action.type){
    case actionTypes.LOGIN_SUCCESS: 
        return {...state, user: action.user}
       case actionTypes.GETAUTH: 
        return {...state,  userNfo: action.user}
            case actionTypes.LOGIN_FAIL: 
        return {...state, userNfo: action.user}
        default:
            return state;
    }
}

export default reducer;