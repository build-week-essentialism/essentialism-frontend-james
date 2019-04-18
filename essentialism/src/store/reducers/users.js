import * as actionTypes from '../actions/index.js';

const initialState = {
  login_loading: false,
  error: "",
  message: "",
  user:{}
}

export const UsersReducer = (state = initialState, action) => {
  switch(action.type){
    // Login
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        login_loading: true,
        message: "",
        error: ""
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
        error: "",
        message: action.payload.message,
        user: action.payload.user
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        login_loading: false,
        error: action.payload,
        message: "",
        user: {}
      }

    default:
      return state
  }
}